var modelList = [
    {modelID: 0, location: "../../live2d_api/model/ShizukuTalk/shizuku-48/index.json"}
]

var waifuPath = {
	"mouseover": [{
		"selector": "#live2d",
		"text": ["干嘛呢你，快把手拿开～～", "鼠…鼠标放错地方了！", "你要干嘛呀？", "喵喵喵？", "怕怕(ノ≧∇≦)ノ", "非礼呀！救命！", "这样的话，只能使用武力了！", "我要生气了哦", "不要动手动脚的！", "真…真的是不知羞耻！", "Hentai！"]
	}, {
		"selector": "#waifu-tool .fa-comment",
		"text": ["猜猜我要说些什么？", "我从青蛙王子那里听到了不少人生经验。"]
	}, {
		"selector": "#waifu-tool .fa-paper-plane",
		"text": ["要不要来玩飞机大战？", "这个按钮上写着「不要点击」。", "怎么，你想来和我玩个游戏？", "听说这样可以蹦迪！"]
	}, {
		"selector": "#waifu-tool .fa-user-circle",
		"text": ["你是不是不爱人家了呀，呜呜呜～", "要见见我的姐姐嘛？", "想要看我妹妹嘛？", "要切换看板娘吗？"]
	}, {
		"selector": "#waifu-tool .fa-street-view",
		"text": ["喜欢换装 PLAY 吗？", "这次要扮演什么呢？", "变装！", "让我们看看接下来会发生什么！"]
	}, {
		"selector": "#waifu-tool .fa-camera-retro",
		"text": ["你要给我拍照呀？一二三～茄子～", "要不，我们来合影吧！", "保持微笑就好了～"]
	}, {
		"selector": "#waifu-tool .fa-info-circle",
		"text": ["想要知道更多关于我的事么？", "这里记录着我搬家的历史呢。", "你想深入了解我什么呢？"]
	}, {
		"selector": "#waifu-tool .fa-times",
		"text": ["到了要说再见的时候了吗？", "呜呜 QAQ 后会有期……", "不要抛弃我呀……", "我们，还能再见面吗……", "哼，你会后悔的！"]
	}, {
		"selector": ".menu-item-home a",
		"text": ["点击前往首页，想回到上一页可以使用浏览器的后退功能哦。", "点它就可以回到首页啦！", "回首页看看吧。"]
	}, {
		"selector": ".menu-item-about a",
		"text": ["你想知道我家主人是谁吗？", "这里有一些关于我家主人的秘密哦，要不要看看呢？", "发现主人出没地点！"]
	}, {
		"selector": ".menu-item-tags a",
		"text": ["点击就可以看文章的标签啦！", "点击来查看所有标签哦。"]
	}, {
		"selector": ".menu-item-categories a",
		"text": ["文章都分类好啦～", "点击来查看文章分类哦。"]
	}, {
		"selector": ".menu-item-archives a",
		"text": ["翻页比较麻烦吗，那就来看看文章归档吧。", "文章目录都整理在这里啦！"]
	}, {
		"selector": ".menu-item-friends a",
		"text": ["这是我的朋友们哦ヾ(◍°∇°◍)ﾉﾞ", "要去大佬们的家看看吗？", "要去拜访一下我的朋友们吗？"]
	}, {
		"selector": ".menu-item-search a",
		"text": ["找不到想看的内容？搜索看看吧！", "在找什么东西呢，需要帮忙吗？"]
	}, {
		"selector": ".menu-item a",
		"text": ["快看看这里都有什么呢？"]
	}, {
		"selector": ".site-author",
		"text": ["我家主人好看吗？", "这是我家主人(*´∇｀*)"]
	}, {
		"selector": ".site-state",
		"text": ["这是文章的统计信息～", "要不要点进去看看？"]
	}, {
		"selector": ".feed-link a",
		"text": ["这里可以使用 RSS 订阅呢！", "利用 feed 订阅器，就能快速知道博客有没有更新了呢。"]
	}, {
		"selector": ".cc-opacity, .post-copyright-author",
		"text": ["要记得规范转载哦。", "所有文章均采用 CC BY-NC-SA 4.0 许可协议～", "转载前要先注意下文章的版权协议呢。"]
	}, {
		"selector": ".links-of-author",
		"text": ["这里是主人的常驻地址哦。", "这里有主人的联系方式！"]
	}, {
		"selector": ".followme",
		"text": ["手机扫一下就能继续看，很方便呢～", "扫一扫，打开新世界的大门！"]
	}, {
		"selector": ".fancybox img, img.medium-zoom-image",
		"text": ["点击图片可以放大呢！"]
	}, {
		"selector": ".copy-btn",
		"text": ["代码可以直接点击复制哟。"]
	}, {
		"selector": ".highlight .table-container, .gist",
		"text": ["GitHub！我是新手！", "PHP 是最好的语言！"]
	}, {
		"selector": "a[href^='mailto']",
		"text": ["邮件我会及时回复的！", "点击就可以发送邮件啦～"]
	}, {
		"selector": "a[href^='/tags/']",
		"text": ["要去看看 <span>{text}</span> 标签么？", "点它可以查看此标签下的所有文章哟！"]
	}, {
		"selector": "a[href^='/categories/']",
		"text": ["要去看看 <span>{text}</span> 分类么？", "点它可以查看此分类下的所有文章哟！"]
	}, {
		"selector": ".post-title-link",
		"text": ["要看看 <span>{text}</span> 这篇文章吗？"]
	}, {
		"selector": "a[rel='contents']",
		"text": ["点击来阅读全文哦。"]
	}, {
		"selector": "a[itemprop='discussionUrl']",
		"text": ["要去看看评论吗？"]
	}, {
		"selector": ".beian a",
		"text": ["我也是有户口的人哦。", "我的主人可是遵纪守法的好主人。"]
	}, {
		"selector": ".container a[href^='http'], .nav-link .nav-text",
		"text": ["要去看看 <span>{text}</span> 么？", "去 <span>{text}</span> 逛逛吧。", "到 <span>{text}</span> 看看吧。"]
	}, {
		"selector": ".back-to-top",
		"text": ["点它就可以回到顶部啦！", "又回到最初的起点～", "要回到开始的地方么？"]
	}, {
		"selector": ".reward-container",
		"text": ["我是不是棒棒哒～快给我点赞吧！", "要打赏我嘛？好期待啊～", "主人最近在吃土呢，很辛苦的样子，给他一些钱钱吧～"]
	}, {
		"selector": "#wechat",
		"text": ["这是我的微信二维码～"]
	}, {
		"selector": "#alipay",
		"text": ["这是我的支付宝哦！"]
	}, {
		"selector": "#bitcoin",
		"text": ["这是我的比特币账号！"]
	}, {
		"selector": "#needsharebutton-postbottom .btn",
		"text": ["好东西要让更多人知道才行哦。", "觉得文章有帮助的话，可以分享给更多需要的朋友呢。"]
	}, {
		"selector": ".need-share-button_weibo",
		"text": ["微博？来分享一波喵！"]
	}, {
		"selector": ".need-share-button_wechat",
		"text": ["分享到微信吧！"]
	}, {
		"selector": ".need-share-button_douban",
		"text": ["分享到豆瓣好像也不错！"]
	}, {
		"selector": ".need-share-button_qqzone",
		"text": ["QQ 空间，一键转发，耶～"]
	}, {
		"selector": ".need-share-button_twitter",
		"text": ["Twitter？好像是不存在的东西？"]
	}, {
		"selector": ".need-share-button_facebook",
		"text": ["emmm…FB 好像也是不存在的东西？"]
	}, {
		"selector": ".post-nav-item a[rel='next']",
		"text": ["来看看下一篇文章吧。", "点它可以看下一篇文章哦！", "要翻到下一篇文章吗？"]
	}, {
		"selector": ".post-nav-item a[rel='prev']",
		"text": ["来看看上一篇文章吧。", "点它可以看上一篇文章哦！", "要翻到上一篇文章吗？"]
	}, {
		"selector": ".extend.next",
		"text": ["去下一页看看吧。", "点它可以前进哦！", "要翻到下一页吗？"]
	}, {
		"selector": ".extend.prev",
		"text": ["去上一页看看吧。", "点它可以后退哦！", "要翻到上一页吗？"]
	}, {
		"selector": "input.vnick",
		"text": ["该怎么称呼你呢？", "留下你的尊姓大名！"]
	}, {
		"selector": ".vmail",
		"text": ["留下你的邮箱，不然就是无头像人士了！", "记得设置好 Gravatar 头像哦！", "为了方便通知你最新消息，一定要留下邮箱！"]
	}, {
		"selector": ".vlink",
		"text": ["快快告诉我你的家在哪里，好让我去参观参观！"]
	}, {
		"selector": ".veditor",
		"text": ["想要去评论些什么吗？", "要说点什么吗？", "觉得博客不错？快来留言和主人交流吧！"]
	}, {
		"selector": ".vcontrol a",
		"text": ["你会不会熟练使用 Markdown 呀？", "使用 Markdown 让评论更美观吧～"]
	}, {
		"selector": ".vemoji-btn",
		"text": ["要插入一个萌萌哒的表情吗？", "要来一发表情吗？"]
	}, {
		"selector": ".vpreview-btn",
		"text": ["要预览一下你的发言吗？", "快看看你的评论有多少负熵！"]
	}, {
		"selector": ".vsubmit",
		"text": ["评论没有审核，要对自己的发言负责哦～", "要提交了吗，请耐心等待回复哦～"]
	}, {
		"selector": ".vcontent",
		"text": ["哇，快看看这个精彩评论！", "如果有疑问，请尽快留言哦～"]
	}],
	"click": [{
		"selector": "#live2d",
		"text": ["是…是不小心碰到了吧…", "萝莉控是什么呀？", "你看到我的小熊了吗？", "再摸的话我可要报警了！⌇●﹏●⌇", "110 吗，这里有个变态一直在摸我(ó﹏ò｡)", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！", "别摸我，有什么好摸的！"]
	}, {
		"selector": ".veditor",
		"text": ["要吐槽些什么呢？", "一定要认真填写喵～", "有什么想说的吗？"]
	}, {
		"selector": ".vsubmit",
		"text": ["输入验证码就可以提交评论啦～"]
	}],
	"seasons": [{
		"date": "01/01",
		"text": "<span>元旦</span>了呢，新的一年又开始了，今年是{year}年～"
	}, {
		"date": "02/14",
		"text": "又是一年<span>情人节</span>，{year}年找到对象了嘛～"
	}, {
		"date": "03/08",
		"text": "今天是<span>国际妇女节</span>！"
	}, {
		"date": "03/12",
		"text": "今天是<span>植树节</span>，要保护环境呀！"
	}, {
		"date": "04/01",
		"text": "悄悄告诉你一个秘密～<span>今天是愚人节，不要被骗了哦～</span>"
	}, {
		"date": "05/01",
		"text": "今天是<span>五一劳动节</span>，计划好假期去哪里了吗～"
	}, {
		"date": "06/01",
		"text": "<span>儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…"
	}, {
		"date": "09/03",
		"text": "<span>中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。"
	}, {
		"date": "09/10",
		"text": "<span>教师节</span>，在学校要给老师问声好呀～"
	}, {
		"date": "10/01",
		"text": "<span>国庆节</span>到了，为祖国母亲庆生！"
	}, {
		"date": "11/05-11/12",
		"text": "今年的<span>双十一</span>是和谁一起过的呢～"
	}, {
		"date": "12/20-12/31",
		"text": "这几天是<span>圣诞节</span>，主人肯定又去剁手买买买了～"
	}]
}


// {
//     "models": [
//         "Potion-Maker/Pio",
//         "Potion-Maker/Tia",
//         "bilibili-live/22",
//         "bilibili-live/33",
//         [
//             "ShizukuTalk/shizuku-48",
//             "ShizukuTalk/shizuku-pajama"
//         ],
//         [
//             "HyperdimensionNeptunia/neptune_classic",
//             "HyperdimensionNeptunia/nepnep",
//             "HyperdimensionNeptunia/neptune_santa",
//             "HyperdimensionNeptunia/nepmaid",
//             "HyperdimensionNeptunia/nepswim",
//             "HyperdimensionNeptunia/noir_classic",
//             "HyperdimensionNeptunia/noir",
//             "HyperdimensionNeptunia/noir_santa",
//             "HyperdimensionNeptunia/noireswim",
//             "HyperdimensionNeptunia/blanc_classic",
//             "HyperdimensionNeptunia/blanc_normal",
//             "HyperdimensionNeptunia/blanc_swimwear",
//             "HyperdimensionNeptunia/vert_classic",
//             "HyperdimensionNeptunia/vert_normal",
//             "HyperdimensionNeptunia/vert_swimwear",
//             "HyperdimensionNeptunia/nepgear",
//             "HyperdimensionNeptunia/nepgear_extra",
//             "HyperdimensionNeptunia/nepgearswim",
//             "HyperdimensionNeptunia/histoire",
//             "HyperdimensionNeptunia/histoirenohover"
//         ],
//         "KantaiCollection/murakumo"
//     ],
//     "messages": [
//         "来自 Potion Maker 的 Pio 酱 ~",
//         "来自 Potion Maker 的 Tia 酱 ~",
//         "来自 Bilibili Live 的 22 哦 ~",
//         "来自 Bilibili Live 的 33 的说",
//         "Shizuku Talk ！这里是 Shizuku ~",
//         "Nep! Nep! 超次元游戏：海王星 系列",
//         "艦隊これくしょん / 叢雲(むらくも)"
//     ]
// }