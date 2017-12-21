Vue.component('my-header',{
	template:`
	<header>
		<ul>
			<li>推荐</li>
			<li>视频</li>
			<li>热点</li>
			<li>娱乐</li>
			<li>时尚</li>
			<li>+</li>
		</ul>
	</header>
	`
});
Vue.component('my-logo',{
	template:`
		<div id="logo">
			<img src="images/logo.jpg"/>
			<div id="input">
				<input type="text"/>
				<button>百度一下</button>
			</div>
		</div>`
});
Vue.component('my-top',{
	props:["url","tu"],
	template:`
				<li>
					<img :src="url"/>
					<p>{{tu}}</p>
				</li>
			`
});
Vue.component('my-section',{
	props:["post","imgSrc","di","time","text","kai","seen","seen1"],
	template:`
			<div>
				<p>{{post}}</p>
				<img :src="imgSrc"/>
				<span>{{di}}</span>
				<span>{{time}}</span>
				<a href="#" v-if="seen">{{text}}</a>
				<span v-if="seen1">{{kai}}</span>
			</div>
	`
});
Vue.component('my-footer',{
	template:`
		<footer>
			<div>
				<p><img src="images/31.jpg"/>正在加载</p>
			</div>
			<p><img src="images/32.jpg"/>用户反馈</p>
			<p>使用百度前必读 Baidu 京ICP证030173号</p>
			<p><img src="images/33.jpg"/>京公网安备11000002000001号</p>
		</footer>`
})

var warper=new Vue({
	el:"#warper",
	data:{
		tops:[
			{url:"images/1_07.jpg",tu:"关注"},
			{url:"images/2_09.jpg",tu:"新闻"},
			{url:"images/3_11.jpg",tu:"小说"},
			{url:"images/4_13.jpg",tu:"视频"},
			{url:"images/5_15.jpg",tu:"糯米"},
			{url:"images/6_17.jpg",tu:"地图"}
		],
		divs:[
			{post:"习近平用这5句话介绍中国“新时代”",di:"央广网",time:"11-19",text:"置顶",seen:true,seen1:false},
			{post:"农村大集鲫鱼鲤鱼铺满地，鱼的来源让人太生气，最好别吃",imgSrc:"images/21.jpg",di:"河北乡土",time:"11-19",text:"图集",kai:"打开手机百度",seen:true,seen1:true},
			{post:"女人情到深处时，才会这样称呼你，你可曾被如此称呼过？",di:"宇宙用户精选",time:"11-16",text:"图集",kai:"打开手机百度",seen:true,seen1:true},
			{post:"超神学院：曾经的雄兵连终于集合了，真的是不容易啊！",imgSrc:"images/22.jpg",di:"透明的车玻璃",time:"11-18",kai:"打开手机百度",seen:false,seen1:true},
			{post:"烤鱼店生意红火 秘方：用漏斗过滤剩菜后的口水油",di:"南方都市报",time:"07:27",text:"热点",seen:true,seen1:false},
			{post:"刘鑫称她也不记得当时有没有反锁门，现在是百口莫辩解释不清楚了",imgSrc:"images/23.jpg",di:"娱七杂八话天下",time:"11-19",kai:"打开手机百度",seen:false,seen1:true},
			{post:"结婚70周年！英国女王庆祝白金婚 王室发布合影",di:"新浪娱乐",time:"11-19",seen:false,seen1:false},
			{post:"女兵在阅兵时想上厕所怎么办，原来还有这种操作",di:"军人魂",time:"11-18",seen:false,seen1:false},
			{post:"专家发现：女人有没有生过孩子，看下面就知道，非常“与众不同”",di:"只要你愿意等",time:"11-19",seen:false,seen1:false},
			{post:"日本女星Shinozaki沙滩游玩，太漂亮了",imgSrc:"images/24.jpg",di:"精选影片",time:"11-17",text:"图集",kai:"打开手机百度",seen:true,seen1:true},
			{post:"农村孤寡老人没钱装暖气，施工人员牵走他家羊炖了，还拆掉壁挂炉",di:"闻舞视界",time:"11-19",text:"图集",kai:"打开手机百度",seen:true,seen1:true},
			{post:"马未都：我为什么不佩戴文玩，说出来你们不要觉得恶心",imgSrc:"images/25.jpg",di:"百家人和文",time:"11-18",kai:"打开手机百度",seen:false,seen1:true},
			{post:"红色越野正门开 警察突然瞄见副驾门把手上有手铐",di:"网易新闻",time:"11-19",text:"热点",seen:true,seen1:false},
			{post:"秦版《命中注定我爱你》最终帕乌面临死亡，妮子应该不会难受吧",imgSrc:"images/26.jpg",di:"军旅中的生涯",time:"11-18",kai:"打开手机百度",seen:false,seen1:true},
			{post:"中国造出“地表最强”两栖战车 多项性能居世界第一",di:"新华网",time:"11-19",seen:false,seen1:false},
			{post:"徐州下雪了，今夜淮北地区有雨夹雪",di:"东方头条",time:"11-19",seen:false,seen1:false},
			{post:"成都10岁男孩在家上学：做德语主播 写万字英文小说",di:"凤凰新闻",time:"11-19",seen:false,seen1:false},
			{post:"潘玮柏访谈现场被逼问感情生活 他是这样回答吴昕知道吗",imgSrc:"images/27.jpg",di:"楚秀网综合",time:"11-19",kai:"打开手机百度",seen:false,seen1:true},
			{post:"观众席有人挂出“藏独”旗蓄意挑衅 中国球员在德退场抗议",di:"网易新闻",time:"00:31",seen:false,seen1:false}
		]
	}
});
