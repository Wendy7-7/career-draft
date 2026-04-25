// questions.js — 每个选项独立 tag 与 score
const questions = [
  {
    id: 1,
    title_en: "When facing something you've never done before, how do you usually start?",
    title: "面对一件从来没做过的事，你一般怎么开始？",
    options: [
      { text_en: "Make a list first, sort out what needs to be done, and then tackle it one by one", text: "先列个清单，把要做的事捋清楚，再一项项搞定", tag: "逻辑", score: 2 },
      { text_en: "Jump in and try first, adjust as you go, and change course if it doesn't work", text: "先上手试试，边做边看情况调，不行再换路子", tag: "创意", score: 1 }
    ]
  },
  {
    id: 2,
    title_en: "In which environment does your mind work best?",
    title: "哪种环境里你脑子转得最顺？",
    options: [
      { text_en: "A corner in the library, a desk in the dorm, just staying alone with headphones on", text: "图书馆角落、宿舍书桌前，自己戴着耳机待着就挺好", tag: "逻辑", score: 2 },
      { text_en: "An activity room, a coffee shop, a little chatter and discussion around you gives you more energy", text: "活动室、咖啡厅，周围有点人声讨论声反而更有劲儿", tag: "社交", score: 1 }
    ]
  },
  {
    id: 3,
    title_en: "When facing a big decision, what do you trust more in your heart?",
    title: "遇到大一点的选择，你心里更信什么？",
    options: [
      { text_en: "Let the facts speak, list the pros and cons and compare them", text: "看事实说话，把利弊摆出来比一比", tag: "逻辑", score: 2 },
      { text_en: "Listen to your inner voice, whether you like it and feel comfortable is very important", text: "听心里的声音，这事我喜不喜欢、舒不舒服很重要", tag: "价值观", score: 1 }
    ]
  },
  {
    id: 4,
    title_en: "A good opportunity suddenly comes your way, but you don't know much about it. What will you do?",
    title: "眼前突然掉下来一个不错的机会，但你不太了解，你会？",
    options: [
      { text_en: "Wait and see first, figure out what it's about before deciding", text: "先观望一下，搞清楚大概怎么回事再决定", tag: "逻辑", score: 2 },
      { text_en: "Take it first, it's no loss to try, and if it doesn't work, it's just experience", text: "先接了再说，试试又不亏，不行就当攒经验", tag: "创意", score: 1 }
    ]
  },
  {
    id: 5,
    title_en: "In a group discussion, what kind of person do you think you are more like?",
    title: "小组讨论的时候，你觉得自己更像哪种人？",
    options: [
      { text_en: "Can sort out everyone's scattered thoughts and get to the point", text: "能把大家七嘴八舌的内容理出个头绪来", tag: "逻辑", score: 2 },
      { text_en: "Always come up with some weird ideas that take the topic off track", text: "总冒出一些奇奇怪怪的想法，把话题带飞", tag: "创意", score: 1 }
    ]
  },
  {
    id: 6,
    title_en: "When doing something, when do you think 'Hmm, it's worth it'?",
    title: "做一件事，什么时候你会觉得“嗯，挺值的”？",
    options: [
      { text_en: "The moment you see the result after finishing, you've really got it done", text: "做完看到结果那一刻，实实在在搞定了", tag: "价值观", score: 2 },
      { text_en: "You enjoy the process itself, learning and refining details is great fun", text: "做的过程中就挺享受，学东西、磨细节本身就很爽", tag: "创意", score: 1 }
    ]
  },
  {
    id: 7,
    title_en: "When you're stressed and in a bad mood, which way can help you calm down?",
    title: "压力大、心情不好的时候，哪种方式能让你缓过来？",
    options: [
      { text_en: "Stay alone and sort things out, break down the problems and think clearly", text: "自己待着捋一捋，把问题拆开了想清楚", tag: "逻辑", score: 2 },
      { text_en: "Hang out with a friend and chat, venting makes you feel much better", text: "拉个朋友出来聊一聊，吐吐槽就好了大半", tag: "社交", score: 1 }
    ]
  },
  {
    id: 8,
    title_en: "Thinking about going to work every day in the future, which one do you look forward to more?",
    title: "想想以后每天上班的日子，你更期待哪种？",
    options: [
      { text_en: "The work is clear, the process and rules are set, no need to guess all the time", text: "干啥活比较清楚，流程规矩都定好了，不用老猜", tag: "价值观", score: 2 },
      { text_en: "Every day you encounter different things, learning new things keeps it interesting", text: "每天碰的东西都不太一样，有新东西学就不闷", tag: "创意", score: 1 }
    ]
  },
  {
    id: 9,
    title_en: "When a few people temporarily team up to do something, what will you usually take the initiative to do?",
    title: "几个人临时搭伙干一件事，你通常会主动去干啥？",
    options: [
      { text_en: "Divide the work, set a general rhythm, and keep everyone on track", text: "把活儿分一分，定个大概节奏，别让大家跑偏", tag: "社交", score: 2 },
      { text_en: "Jump straight into the hardest part and figure it out as you go", text: "直接上手干最难啃的那块，边干边摸索", tag: "逻辑", score: 1 }
    ]
  },
  {
    id: 10,
    title_en: "For the work you're doing, what's your inner standard more like?",
    title: "对于手上在做的活儿，你心里那杆尺更像哪一种？",
    options: [
      { text_en: "Make sure you don't make mistakes first, do it right steadily", text: "先确保别出错，稳一点把事做对", tag: "逻辑", score: 2 },
      { text_en: "Passing is easy, but I want to see how to make it more brilliant", text: "及格不难，但我想看看怎么能做得更漂亮一点", tag: "创意", score: 1 }
    ]
  },
  {
    id: 11,
    title_en: "When you want to learn something new, what's your habit?",
    title: "想学一个新东西的时候，你的习惯是？",
    options: [
      { text_en: "Find a reliable tutorial or video, go through it from the beginning to lay a solid foundation", text: "找本靠谱的教程或者视频，从头过一遍打好底", tag: "逻辑", score: 2 },
      { text_en: "Search directly for 'how to get it done quickly', learn as you use it", text: "直接搜“怎么快速搞定”，边用边学", tag: "创意", score: 1 }
    ]
  },
  {
    id: 12,
    title_en: "Many years later, what do you hope others will say about you when they mention you?",
    title: "很多年以后，你更希望别人提到你的时候说这个人？",
    options: [
      { text_en: "Very capable, has accomplished a lot of things", text: "挺厉害的，做成了不少事", tag: "价值观", score: 2 },
      { text_en: "Lives a clear life, has lived according to their own ideas all their life", text: "活得挺明白，按自己的想法过了一辈子", tag: "创意", score: 1 }
    ]
  },
  {
    id: 13,
    title_en: "When looking for a job right after graduation, which do you prioritize?",
    title: "刚毕业找工作，你更倾向优先考虑？",
    options: [
      { text_en: "Small company, quick to get started", text: "中小公司，能快速上手做事", tag: "创意", score: 1 },
      { text_en: "Large corporate platform, stable and standardized", text: "大公司平台，稳定规范", tag: "价值观", score: 2 },
      { text_en: "Startup, huge growth potential but high risk", text: "创业公司，成长空间大但风险高", tag: "创意", score: 1 },
      { text_en: "State-owned enterprise / public institution, stable and relaxed", text: "国企/事业单位，稳定轻松", tag: "价值观", score: 2 }
    ]
  },
  {
    id: 14,
    title_en: "Between salary and career prospects, which do you value more?",
    title: "薪资和发展前景，你更看重？",
    options: [
      { text_en: "Higher starting salary, improve life first", text: "更高起薪，先改善生活", tag: "价值观", score: 2 },
      { text_en: "Development prospects, future appreciation space", text: "发展前景，未来升值空间", tag: "逻辑", score: 1 },
      { text_en: "Easy work, prioritize cost-performance ratio", text: "工作轻松，性价比优先", tag: "价值观", score: 2 },
      { text_en: "Industry tuyere, follow the trend", text: "行业风口，跟着趋势走", tag: "创意", score: 1 }
    ]
  },
  {
    id: 15,
    title_en: "For a job unrelated to your major, will you take it?",
    title: "专业不对口的工作，你会？",
    options: [
      { text_en: "Never consider, stick to my major", text: "坚决不考虑，坚持本专业", tag: "逻辑", score: 2 },
      { text_en: "Can try, as long as there is prospect", text: "可以尝试，只要有前景", tag: "创意", score: 1 },
      { text_en: "Get employed first, no restriction on industry", text: "先就业再说，不挑行业", tag: "价值观", score: 1 },
      { text_en: "Only consider positions related to my major", text: "只考虑和专业相关的岗位", tag: "逻辑", score: 2 }
    ]
  },
  {
    id: 16,
    title_en: "For your first job, what do you expect?",
    title: "第一份工作，你更想要？",
    options: [
      { text_en: "Stable and relaxed, low pressure", text: "稳定轻松，压力小", tag: "价值观", score: 2 },
      { text_en: "Can learn real skills, don't care about trivial work", text: "能学到真本事，累点没关系", tag: "逻辑", score: 1 },
      { text_en: "Good colleague atmosphere, happy at work", text: "同事氛围好，工作开心", tag: "社交", score: 1 },
      { text_en: "Fast promotion, quick salary raise", text: "晋升快，能快速升职加薪", tag: "价值观", score: 2 }
    ]
  },
  {
    id: 17,
    title_en: "When choosing a city to work, what do you prefer?",
    title: "关于城市选择，你更想？",
    options: [
      { text_en: "First-tier cities, more opportunities and challenges", text: "一线城市，机会多挑战大", tag: "创意", score: 1 },
      { text_en: "Near hometown, safe and convenient", text: "家乡附近，安稳方便", tag: "价值观", score: 2 },
      { text_en: "Anywhere, as long as there is a good job", text: "随便哪里，有好工作就行", tag: "逻辑", score: 1 }
    ]
  },
  {
    id: 18,
    title_en: "If your interest conflicts with your income, what will you do?",
    title: "兴趣和现实收入冲突时，你会？",
    options: [
      { text_en: "Prioritize interest, do what you love", text: "优先兴趣，做喜欢的事", tag: "创意", score: 1 },
      { text_en: "Prioritize income, make a living first then pursue passion", text: "优先收入，先生存再谈热爱", tag: "价值观", score: 2 },
      { text_en: "Compromise, find a balance between the two", text: "折中，找兼顾两者的", tag: "价值观", score: 1 },
      { text_en: "Continue postgraduate entrance exam, postpone employment", text: "继续考研，暂缓就业", tag: "逻辑", score: 2 }
    ]
  },
  {
    id: 19,
    title_en: "If you lack work experience, what will you do?",
    title: "实习经历不多，你会？",
    options: [
      { text_en: "Seize the opportunity to do internships, improve competitiveness", text: "抓紧补实习，提升竞争力", tag: "逻辑", score: 2 },
      { text_en: "Make up for it with certificates / academic performance", text: "靠证书/成绩弥补", tag: "逻辑", score: 1 },
      { text_en: "Find an entry-level job with low threshold first", text: "先找门槛低的工作入行", tag: "价值观", score: 1 }
    ]
  },
  {
    id: 20,
    title_en: "If you are not satisfied with your first job, what will you do?",
    title: "第一份工作不满意，你会？",
    options: [
      { text_en: "Resign immediately, no internal friction", text: "立刻跳槽，不内耗", tag: "创意", score: 1 },
      { text_en: "Stay and grind, afraid of not finding a better one", text: "将就做，害怕找不到更好的", tag: "价值观", score: 2 },
      { text_en: "No matter, get a job first", text: "无所谓，先有工作再说", tag: "价值观", score: 1 }
    ]
  },
  {
    id: 21,
    title_en: "Salary, salary, salary! What do you choose first?",
    title: "佣金、薪金、外快，你首选？",
    options: [
      { text_en: "State-owned enterprise / public institution, stable salary", text: "国企/事业单位，稳", tag: "价值观", score: 2 },
      { text_en: "Private enterprise, fast growth and high salary flexibility", text: "私企，成长快薪资弹性大", tag: "创意", score: 1 },
      { text_en: "Foreign enterprise, standardized and good benefits", text: "外企，规范福利好", tag: "价值观", score: 2 }
    ]
  },
  {
    id: 22,
    title_en: "When choosing a job, what's your most important additional condition?",
    title: "选工作时，你最在意的附加条件？",
    options: [
      { text_en: "Less overtime, work-life balance", text: "加班少，生活工作平衡", tag: "价值观", score: 1 },
      { text_en: "High salary, don't care about overtime", text: "薪资高，不在乎加班", tag: "价值观", score: 2 },
      { text_en: "Good team atmosphere, comfortable interpersonal relationship", text: "团队氛围好，人际关系舒服", tag: "社交", score: 1 },
      { text_en: "Close to home, short commute time", text: "离家近，通勤时间短", tag: "价值观", score: 2 }
    ]
  }
];
