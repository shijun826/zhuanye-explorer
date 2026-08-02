const MAJORS = [
  {cat:"哲学", name:"哲学", icon:"🧭", fun:"追问世界本质与人类意义，训练极强的思辨与表达。", careers:["高校教师","智库研究员","公务员"], sub:["历史"], tags:["language","logic"]},
  {cat:"哲学", name:"逻辑学", icon:"♟️", fun:"研究推理规则，像给思维装上了编译器。", careers:["数据分析","法律顾问","AI训练"], sub:["物理"], tags:["logic","language"]},
  {cat:"经济学", name:"经济学", icon:"📈", fun:"用模型和数理解释钱与人怎么决策。", careers:["券商研究","银行","政策分析"], sub:["物理"], tags:["logic","biz"]},
  {cat:"经济学", name:"金融学", icon:"💰", fun:"资金的搬运与增值游戏，离钱最近的专业之一。", careers:["投行","基金","风控"], sub:["物理"], tags:["biz","logic"]},
  {cat:"经济学", name:"国际经济与贸易", icon:"🌏", fun:"看懂全球买卖，语言+商科双修。", careers:["外贸","跨境电商","报关"], sub:["不限"], tags:["language","biz"]},
  {cat:"法学", name:"法学", icon:"⚖️", fun:"背法条更练逻辑，法庭上见真章。", careers:["律师","法官","法务"], sub:["历史"], tags:["language","logic"]},
  {cat:"法学", name:"社会学", icon:"👥", fun:"用科学方法研究人群与社会运行规律。", careers:["调研","NGO","市场研究"], sub:["历史"], tags:["social","care"]},
  {cat:"教育学", name:"学前教育", icon:"🧸", fun:"研究 0-6 岁怎么玩着学，爱心与耐心并重。", careers:["幼教","早教研发","托育"], sub:["历史"], tags:["care","social"]},
  {cat:"教育学", name:"体育教育", icon:"🏀", fun:"把运动变成专业，身体就是你的实验室。", careers:["体育老师","教练","康复"], sub:["不限"], tags:["hands","care"]},
  {cat:"文学", name:"汉语言文学", icon:"📜", fun:"读写天下的文字，文案与公考的硬通货。", careers:["编辑","文案","公务员"], sub:["历史"], tags:["language","art"]},
  {cat:"文学", name:"英语", icon:"🔤", fun:"一门语言打通世界，翻译/外事/外贸都吃香。", careers:["翻译","外贸","外事"], sub:["历史"], tags:["language","social"]},
  {cat:"文学", name:"新闻学", icon:"📰", fun:"用事实讲故事，记录时代也制造流量。", careers:["记者","新媒体","公关"], sub:["历史"], tags:["language","social"]},
  {cat:"历史学", name:"历史学", icon:"🏺", fun:"在故纸堆里拼出人类的时间线。", careers:["文博","档案","教研"], sub:["历史"], tags:["language","nature"]},
  {cat:"历史学", name:"考古学", icon:"⛏️", fun:"田野与实验室双线作战，亲手挖出历史。", careers:["考古所","文博","文保"], sub:["历史","地理"], tags:["hands","nature"]},
  {cat:"理学", name:"数学与应用数学", icon:"🔢", fun:"一切科学的语言，逻辑训练拉满。", careers:["量化","精算","教师"], sub:["物理","化学"], tags:["logic"]},
  {cat:"理学", name:"物理学", icon:"🔭", fun:"追问宇宙最基本的规律。", careers:["科研","芯片","教师"], sub:["物理","化学"], tags:["logic","nature"]},
  {cat:"理学", name:"化学", icon:"🧪", fun:"在分子层面玩组装与变化。", careers:["制药","材料","检测"], sub:["物理","化学"], tags:["nature","hands"]},
  {cat:"理学", name:"生物科学", icon:"🧬", fun:"从细胞到生态，解码生命。", careers:["生物研发","法医","教师"], sub:["物理","化学","生物"], tags:["nature","hands"]},
  {cat:"工学", name:"计算机科学与技术", icon:"💻", fun:"写代码让机器听话，就业面最广的工科。", careers:["开发","算法","架构"], sub:["物理","化学"], tags:["logic","hands"]},
  {cat:"工学", name:"电子信息工程", icon:"📡", fun:"软硬件通吃，造芯片做通信。", careers:["硬件","通信","嵌入式"], sub:["物理","化学"], tags:["hands","logic"]},
  {cat:"工学", name:"机械工程", icon:"⚙️", fun:"设计会动的everything，制造业的脊梁。", careers:["机械设计","自动化","车企"], sub:["物理","化学"], tags:["hands","logic"]},
  {cat:"工学", name:"土木工程", icon:"🏗️", fun:"把图纸变成能站百年的建筑。", careers:["结构设计","施工","造价"], sub:["物理","化学"], tags:["hands","nature"]},
  {cat:"农学", name:"农学", icon:"🌾", fun:"让土地更高产更健康，粮食安全守门人。", careers:["农技","种业","植保"], sub:["物理","化学","生物"], tags:["nature","hands"]},
  {cat:"农学", name:"动物医学", icon:"🐾", fun:"给动物看病，宠物经济大热。", careers:["宠物医生","兽医","检疫"], sub:["物理","化学","生物"], tags:["care","hands"]},
  {cat:"农学", name:"园艺", icon:"🌿", fun:"种花种果种景观，治愈系工科。", careers:["园林","花艺","农业园"], sub:["物理","化学","生物"], tags:["nature","art"]},
  {cat:"医学", name:"临床医学", icon:"🩺", fun:"五年起步，救人于分秒之间。", careers:["医生","医学研究"], sub:["物理","化学","生物"], tags:["care","nature"]},
  {cat:"医学", name:"口腔医学", icon:"🦷", fun:"小而精的医学方向，就业口碑好。", careers:["口腔医生","正畸"], sub:["物理","化学","生物"], tags:["hands","care"]},
  {cat:"医学", name:"护理学", icon:"💉", fun:"医疗体系里的守护者，需求长期旺盛。", careers:["护士","健康管理"], sub:["不限"], tags:["care","social"]},
  {cat:"医学", name:"药学", icon:"💊", fun:"研发与生产治病救人的药。", careers:["药企研发","药房","监管"], sub:["物理","化学","生物"], tags:["nature","logic"]},
  {cat:"管理学", name:"工商管理", icon:"📊", fun:"搞懂一家企业怎么运转。", careers:["管培生","运营","创业"], sub:["不限"], tags:["biz","social"]},
  {cat:"管理学", name:"会计学", icon:"🧾", fun:"数字里的真相，越老越吃香。", careers:["会计师","审计","财务"], sub:["不限"], tags:["logic","biz"]},
  {cat:"管理学", name:"市场营销", icon:"📣", fun:"把对的产品卖给对的人。", careers:["品牌","电商","策划"], sub:["不限"], tags:["social","biz"]},
  {cat:"艺术学", name:"视觉传达设计", icon:"🎨", fun:"用画面说话，品牌与界面的美容师。", careers:["设计师","品牌","UI"], sub:["不限"], tags:["art","social"]},
  {cat:"艺术学", name:"音乐表演", icon:"🎻", fun:"把情感练成技艺，舞台即世界。", careers:["演奏","教培","编曲"], sub:["不限"], tags:["art","care"]},
  {cat:"艺术学", name:"动画", icon:"🖌️", fun:"让笔下的角色活过来。", careers:["原画","动画","游戏美术"], sub:["不限"], tags:["art","hands"]}
];

const TALENT = [
  {q:"自习课终于写完了作业，剩下的时间你最想？",
   o:[{t:"再找几道难题刷一刷",tags:["logic"]},{t:"偷偷看会儿小说 / 漫画",tags:["language"]},{t:"折纸、转笔、鼓捣文具",tags:["hands"]},{t:"跟同桌唠嗑、串座位",tags:["social"]}]},
  {q:"大扫除 / 班级活动，你通常抢着干哪样？",
   o:[{t:"擦窗、搬桌、排桌椅",tags:["hands"]},{t:"写通知、做 PPT、写稿",tags:["language"]},{t:"张罗分工、调解谁跟谁一组",tags:["social"]},{t:"核对名单数据，保证不出错",tags:["logic"]}]},
  {q:"周末拿到零花钱，你更可能？",
   o:[{t:"攒着买教辅 / 存起来",tags:["logic"]},{t:"买手账胶带、好看的周边",tags:["art"]},{t:"请好朋友喝奶茶",tags:["social"]},{t:"比价凑满减，花得最划算",tags:["biz"]}]},
  {q:"你手机相册 / 笔记本里最多的是？",
   o:[{t:"截图的学习资料、错题",tags:["logic"]},{t:"拍的风景、猫、好看的图",tags:["nature"]},{t:"和朋友的合照、表情包",tags:["social"]},{t:"自己做的手账、手工美图",tags:["art"]}]},
  {q:"小组作业 / 班级任务，你抢着做哪块？",
   o:[{t:"写稿、查资料",tags:["language"]},{t:"做 PPT、排版美化",tags:["art"]},{t:"上台讲、控场",tags:["social"]},{t:"给组员讲题、帮落后的同学",tags:["care"]}]},
];

const TAGNAME = {logic:"逻辑分析",language:"语言文笔",hands:"动手操作",social:"人际沟通",care:"助人关怀",nature:"观察自然",art:"艺术创意",biz:"商业经营"};

function eligible(m, prefer, reelect){
  const s = m.sub;
  if(s.indexOf("不限") >= 0) return true;
  if(s[0] === "物理" || s[0] === "历史"){ if(prefer !== s[0]) return false; }
  const need = s.slice((s[0] === "物理" || s[0] === "历史") ? 1 : 0);
  for(let i=0;i<need.length;i++){ if(reelect.indexOf(need[i]) < 0) return false; }
  return true;
}

Page({
  data: {
    screen:"start",
    prefer:"",
    reelect:[],
    subjectReelect:[{name:"化学",on:false},{name:"生物",on:false},{name:"政治",on:false},{name:"地理",on:false}],
    tagScore:{},
    ti:0,
    tStep:"", tQ:"", tOpts:[], tBar:0,
    resSub:"", resList:[],
    codexCount:0, codexList:[],
    hudCodex:0, hudTotal:MAJORS.length,
    codex:[]
  },
  onLoad(){
    const codex = wx.getStorageSync("major_codex") || [];
    this.setData({ codex: codex, hudCodex: codex.length, hudTotal: MAJORS.length });
  },
  go(e){ this.setData({ screen: e.currentTarget.dataset.screen }); },
  choosePrefer(e){
    this.setData({ prefer: e.currentTarget.dataset.p });
  },
  toggleReelect(e){
    const r = e.currentTarget.dataset.r;
    const arr = this.data.subjectReelect.map(x => {
      if(x.name === r) return { name:x.name, on:!x.on };
      return x;
    });
    const re = arr.filter(x => x.on).map(x => x.name);
    this.setData({ subjectReelect: arr, reelect: re });
  },
  afterSubject(){
    this.setData({ ti:0, tagScore:{} });
    this.showTalent();
    this.setData({ screen:"talent" });
  },
  showTalent(){
    const ti = this.data.ti;
    const t = TALENT[ti];
    const opts = t.o.map(o => ({ t:o.t, tagNames:o.tags.map(x=>TAGNAME[x]).join(" / ") }));
    this.setData({
      tStep: "第 2 关 · 天赋试炼（" + (ti+1) + "/" + TALENT.length + "）",
      tBar: Math.floor(ti / TALENT.length * 100),
      tQ: t.q,
      tOpts: opts
    });
  },
  chooseTalent(e){
    const idx = e.currentTarget.dataset.index;
    const tags = TALENT[this.data.ti].o[idx].tags;
    const ts = Object.assign({}, this.data.tagScore);
    tags.forEach(x => { ts[x] = (ts[x] || 0) + 1; });
    const nti = this.data.ti + 1;
    this.setData({ tagScore: ts, ti: nti });
    if(nti < TALENT.length){
      this.showTalent();
    } else {
      this.setData({ tBar: 100 });
      this.computeResult();
      this.setData({ screen:"result" });
    }
  },
  computeResult(){
    const pool = MAJORS.filter(m => eligible(m, this.data.prefer, this.data.reelect));
    const scored = pool.map(m => {
      let s = 0;
      m.tags.forEach(t => { s += (this.data.tagScore[t] || 0); });
      return { m:m, s:s };
    }).sort((a,b) => b.s - a.s);
    let top = scored.filter(x => x.s > 0).slice(0,5);
    if(top.length < 5) top = scored.slice(0,5);
    const codex = this.data.codex.slice();
    const resList = top.map((x,i) => {
      const m = x.m;
      if(codex.indexOf(m.name) < 0) codex.push(m.name);
      return {
        rank: i+1, name: m.name, cat: m.cat, icon: m.icon, fun: m.fun,
        sub: m.sub.join("+"),
        careers: m.careers.join("、"),
        tags: m.tags.map(t => TAGNAME[t]).join("、")
      };
    });
    const subText = pool.length >= MAJORS.length
      ? "当前选科可报全部 " + MAJORS.length + " 个代表专业，下面按你的天赋匹配排序："
      : "当前选科「" + this.data.prefer + "+" + ((this.data.reelect).join("/") || "无") + "」可报 " + pool.length + " 个代表专业，下面按你的天赋匹配 TOP5：";
    wx.setStorageSync("major_codex", codex);
    this.setData({ codex: codex, resSub: subText, resList: resList, hudCodex: codex.length, screen:"result" });
  },
  renderCodex(){
    const codex = this.data.codex;
    const list = MAJORS.map((m,i) => {
      const got = codex.indexOf(m.name) >= 0;
      return { key:i, got:got, icon: got ? m.icon : "❔", name: got ? m.name : "未解锁", cat: m.cat };
    });
    this.setData({ codexCount: codex.length, codexList: list, screen:"codex" });
  },
  resetAll(){
    this.setData({
      prefer:"", reelect:[],
      subjectReelect:[{name:"化学",on:false},{name:"生物",on:false},{name:"政治",on:false},{name:"地理",on:false}],
      ti:0, tagScore:{}, screen:"start"
    });
  }
});
