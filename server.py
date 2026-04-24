import sqlite3
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

DEEPSEEK_KEY = "sk-7e23691c8cad4eb1ba993483657c8484"   # 改这里
DEEPSEEK_URL = "https://api.deepseek.com/v1/chat/completions"

DB_PATH = "careers.db"


def get_personality_types():
    """读取人格类型表"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    rows = conn.execute("SELECT * FROM personality_types").fetchall()
    conn.close()
    return rows


def get_recommended_careers(type_id):
    """根据人格类型ID取推荐职业"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    row = conn.execute(
        "SELECT career1, career2, career3, career4 FROM personality_types WHERE id = ?",
        (type_id,)
    ).fetchone()
    conn.close()
    if row:
        return [row["career1"], row["career2"], row["career3"], row["career4"]]
    return []


@app.route("/api/match", methods=["POST"])
def match():
    data = request.json
    user_tags = data.get("tags", {})  # {"逻辑": 12, "社交": 8, "创意": 10, "价值观": 15}

    if not user_tags:
        return jsonify({"success": False, "error": "用户标签为空"}), 400

    # 将用户标签转为文本："逻辑逻辑...(12次) 社交...(8次)"
    user_text = " ".join(
        [f"{tag} " * score for tag, score in user_tags.items()]
    )

    # 拿到所有人格类型
    personalities = get_personality_types()
    if not personalities:
        return jsonify({"success": False, "error": "数据库中没有性格类型数据"}), 500

    # 构建人格描述文本：用 traits + abilities 作为匹配依据
    personality_texts = [
        f"{p['traits']} {p['abilities']}" for p in personalities
    ]

    # TF-IDF + 余弦相似度
    vectorizer = TfidfVectorizer()
    all_texts = [user_text] + personality_texts
    try:
        tfidf = vectorizer.fit_transform(all_texts)
    except ValueError:
        return jsonify({"success": False, "error": "特征提取失败，请检查数据库内容"}), 500

    similarities = cosine_similarity(tfidf[0:1], tfidf[1:]).flatten()

    # 取最相似的人格类型
    best_idx = similarities.argmax()
    best_personality = personalities[best_idx]
    match_score = round(similarities[best_idx] * 100, 1)

    # 拿该人格下的4个推荐职业
    career_titles = get_recommended_careers(best_personality["id"])

    return jsonify(
        {
            "success": True,
            "match_score": match_score,
            "personality": {
                "type_name": best_personality["type_name"],
                "traits": best_personality["traits"],
                "abilities": best_personality["abilities"],
                "reason": best_personality["reason"],
            },
            "careers": career_titles,
        }
    )


@app.route("/api/ai-suggestion", methods=["POST"])
def ai_suggestion():
    data = request.json
    user_tags = data.get("tags", {})
    personality = data.get("personality", {})
    careers = data.get("careers", [])

    prompt = f"""你是一位资深职业规划师。用户刚完成职业人格测评，请根据以下信息给出具体发展建议。

用户标签得分：{user_tags}
用户最匹配的人格类型：{personality.get('type_name')}
人格特质描述：{personality.get('traits')}
自带能力：{personality.get('abilities')}
推荐职业：{careers}

请为【每一个推荐职业】提供：
- 成长路径：大学期间或毕业1-3年内该如何积累
- 学习资源：具体书籍/课程/证书/实操
- 行业前景：这个领域近几年的需求和趋势

用简洁的列表式回答，不需要客套开场白。"""

    headers = {
        "Authorization": f"Bearer {DEEPSEEK_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": "deepseek-chat",
        "messages": [
            {"role": "system", "content": "你是一名专业职业规划顾问，回答问题具体、可执行。"},
            {"role": "user", "content": prompt},
        ],
        "temperature": 0.7,
        "max_tokens": 1500,
    }

    try:
        resp = requests.post(DEEPSEEK_URL, headers=headers, json=payload, timeout=30)
        resp.raise_for_status()
        result = resp.json()
        suggestion_text = result["choices"][0]["message"]["content"]
        return jsonify({"success": True, "suggestion": suggestion_text})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)