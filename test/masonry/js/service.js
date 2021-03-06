var serverUrl = "http://2016vote.cgigc.com.cn/rank/api";
var serverUrl = "http://192.168.60.18/rank/api";

/*=================接口1===================
获取首页的所有的獎項(每項的前10項)：/rankTop/getIndexTop
业务参数：无

=================接口2===================
获取所有排名的奖项（最多n条）：/rankTop/getIndexTopMore
业务参数：无

=================接口3===================
获取某分类下的奖项（最多30条）：/rankTop/getMoreByType
业务参数：type，分类，来自接口1和接口2的返回结果。*/

function getRankUrl() {
    return serverUrl + "/rankTop/getIndexTop";
}
function getMoreRankUrl() {
    return serverUrl + "/rankTop/getMoreByType";
}
function getAllRankUrl() {
    return serverUrl + "/rankTop/getIndexTopMore";
}
var rankEnterpriseListModel;
var enterpriseData = [
	{
		"name":"2016年度中国十大品牌游戏企业",
		"list":["网易游戏",
				"完美世界（北京）软件科技发展有限公司",
				"三七互娱（上海）科技有限公司",
				"腾讯互动娱乐",
				"巨人网络",
				"盛大游戏",
				"苏州蜗牛数字科技股份有限公司",
				"杭州边锋网络技术有限公司",
				"上海游久游戏股份有限公司",
				"游族网络"
]
	},
	{"name":"2016年度中国十大新锐游戏企业",
	"list":["北京猎豹网络科技有限公司",
"祖龙（天津）科技有限公司",
"上海芒果互娱科技有限公司",
"深圳市星河互动科技有限公司",
"湖南草花互动网络科技有限公司",
"北京华夏乐游科技股份有限公司",
"北京智明星通科技股份有限公司",
"厦门雷霆网络科技有限公司",
"广州谷得网络科技有限公司",
"北京益游网络科技有限公司"
]},
	{"name":"2016年度中国十大游戏研发商",
	"list":["网易游戏",
"蓝港互动集团",
"完美世界（北京）软件科技发展有限公司",
"腾讯互动娱乐",
"盛大游戏",
"广州多益网络股份有限公司",
"成都西山居世游科技有限公司",
"飞鱼科技",
"游艺春秋网络科技（北京）有限公司",
"北京巴别时代科技有限公司"
]},
	{"name":"2016年度中国十大游戏媒体",
	"list":["17173.com",
"新浪游戏频道",
"腾讯游戏频道",
"游久网",
"18183手游网",
"4399手机游戏网",
"搞趣网",
"1688玩",
"玩客",
"游戏多"
]},
	{"name":"2016年度中国十大新锐游戏媒体",
	"list":["游戏狗",
"手游那点事",
"游戏智库",
"17173VR",
"七匣子",
"游研社",
"83830.com",
"特玩网",
"NGA",
"手游视界"
]},
	{"name":"2016年度中国十大游戏产业服务商",
	"list":["阿里云计算有限公司",
"北京奇虎科技有限公司",
"北京触控科技有限公司",
"财付通支付科技有限公司(微信支付)",
"北京白鹭时代信息技术有限公司",
"北京汇元网科技股份有限公司",
"北京奇光影业有限公司",
"浙江蚂蚁小微金融服务集团有限公司(支付宝ALIPAY)",
"湖北盛天网络技术股份有限公司",
"上海焦扬网络科技有限公司"
]},
	{"name":"2016年度中国游戏产业十大影响力人物",
	"list":["萧泓 完美世界股份有限公司首席执行官",
　　"许怡然 360游戏业务线总裁",
　　"肖健 中手游 董事长兼首席执行官",
　　"邢山虎 卓越游戏 首席执行官",
　　"谢斐 盛大游戏 首席执行官",
　　"陈昊芝 北京触控科技有限公司 首席执行官",
　　"廖明香 蓝港互动集团 联合创始人、总裁",
　　"杨庆 北京联众互动网络股份有限公司 董事长",
　　"陆凌青 欢瑞游戏 首席运营官",
　　"唐忆鲁 广州多益网络股份有限公司 首席执行官"
]},
	{"name":"2016年度中国游戏产业支持奖",
	"list":["IDC国际数据公司",
　　"北京汉威信恒展览有限公司",
　　"北京市新闻出版广电局",
　　"伽马数据(CNG中新游戏研究)",
　　"广东省新闻出版广电局",
　　"海南省文化广电出版体育厅",
　　"江苏省新闻出版广电局",
　　"全国公民身份证号码查询服务中心",
　　"上海市新闻出版局",
　　"浙江省新闻出版广电局",
　　"中国版权保护中心",
　　"中国关心下一代工作委员会"
]},
	{"name":"2016年度中国十大网页游戏运营平台",
	"list":["4399游戏网",
"37游戏",
"YY游戏",
"9377游戏",
"游族网络",
"哥们网游戏平台",
"360游戏",
"91wan",
"西游网",
"顺网游戏"
]},
	{"name":"2016年度中国十大移动游戏发行商",
	"list":["网易游戏",
"腾讯移动游戏",
"蓝港互动集团",
"37手游",
"360游戏",
"天象互动",
"杭州边锋网络技术有限公司",
"盛大游戏",
"蜗牛游戏",
"巨人网络"
]},
	{"name":"2016年度中国十大移动游戏运营平台",
	"list":["小米游戏中心",
　　"360游戏",
　　"腾讯移动游戏",
　　"百度游戏",
　　"37手游",
　　"阿里游戏•九游",
　　"胜利游戏",
　　"冰趣",
　　"猎豹移动",
　　"硬核联盟"
]},
	{"name":"2016年度中国十大海外拓展游戏企业",
	"list":["北京智明星通科技股份有限公司",
"IGG",
"广州易幻网络科技有限公司",
"成都尼毕鲁科技股份有限公司",
"成都炎龙科技有限公司",
"游族网络",
"完美世界（北京）软件科技发展有限公司",
"北京昆仑在线网络科技有限公司",
"上海焦扬网络科技有限公司",
"广州菲音信息科技有限公司"
]},
	
	{"name":"2016年度中国游戏产业十大新锐人物",
	"list":["欧阳凯 北京奇游灵动科技有限公司 首席执行官",
"张丕 玩客互动（北京）网络科技有限公司 首席执行官",
"王强 冰穹互娱 首席执行官",
"郑华平 上海芒果互娱科技有限公司 首席执行官",
"莫夏芸 上海焦扬网络科技有限公司 首席执行官",
"吴烨 游久紫钥 首席执行官",
"刘辉 天津畅玩网络科技有限公司 首席执行官",
"戴建清 湖南草花互动网络科技有限公司 首席执行官",
"段建伟 苏州灵石网络科技有限公司  创始人兼首席执行官",
"张新敬 游艺春秋网络科技（北京）有限公司 首席运营官"
]}
];
function getEnterpriseRankList(id, callback) {
    $.post(getRankUrl(), {}, function (data) {
        if (data.code == 1) {
			console.log(data.data);
			if(!rankEnterpriseListModel){

				rankEnterpriseListModel = {
					list: ko.observableArray()
				};
				ko.applyBindings(rankEnterpriseListModel, document.getElementById(id));
			}
			rankEnterpriseListModel.list(enterpriseData);

            if (callback) {
                callback(id);
            }
        } else {
			alert(data.msg);
        }
    }, "jsonp");
}
var rankProductListModel;
var productData = [
	{"name":"2016年度十大最受欢迎客户端网络游戏",
	 "list":["英雄联盟",
"诛仙",
"剑侠情缘网络版叁",
"魔兽世界-军团再临",
"天谕",
"问道",
"穿越火线",
"征途2",
"传奇永恒",
"神武2",
]},
	{"name":"2016年度十大最受欢迎原创客户端网络游戏",
	 "list":["诛仙",
"剑侠情缘网络版叁",
"问道",
"天涯明月刀",
"传奇世界",
"九阴真经",
"天谕",
"征途2",
"神武2",
"笑傲江湖"
]},
	{"name":"2017年度十大最期待客户端网络游戏",
	 "list":["古剑奇谭网络版",
"我的世界",
"反恐精英：全球攻势",
"冒险岛2",
"征途3",
"极品飞车Online",
"英雄王座2",
"黑暗与光明",
"勇者斗恶龙X",
"权御天下"
]},
	{"name":"2016年度十大最受欢迎网页游戏",
	 "list":["魔法王座",
"盗墓笔记",
"青云志",
"天书残卷",
"大天使之剑",
"火影忍者Online",
"传奇霸业",
"德州扑克",
"苍穹变",
"赤月传说2"
]},
	{"name":"2017年度十大最期待网页游戏",
	 "list":["最终幻想：重生",
"人鱼传说",
"传奇荣耀",
"海上牧云记",
"少年群侠传",
"君王之路",
"绝世唐门",
"剑灵页游",
"武炼巅峰",
"大青云"
]},
	{"name":"2016年度十大最受欢迎移动单机游戏",
	 "list":["开心消消乐",
"贪吃蛇大作战",
"纪念碑谷",
"捕鱼达人4",
"消灭星星2016",
"火柴人联盟",
"饥饿鲨：进化",
"辐射 避难所",
"波克捕鱼",
"奔跑吧兄弟4-撕名牌大战"
]},
	{"name":"2016年度十大最受欢迎原创移动单机游戏",
	 "list":["天天爱消除",
"地铁跑酷",
"贪婪洞窟",
"世界3",
"天天斗地主（真人版）",
"逃亡兔",
"钢琴块2",
"银河掠夺者",
"单机斗地主",
"一步两步"
]},
	{"name":"2016年度十大最受欢迎移动网络游戏",
	 "list":["王者荣耀",
"部落冲突:皇室战争",
"梦幻西游手游",
"黎明之光",
"保卫萝卜3",
"永恒纪元",
"热血传奇手机版",
"天堂2：血盟",
"探墓风云",
"列王的纷争"
]},
	{"name":"2016年度十大最受欢迎原创移动网络游戏",
	 "list":["王者荣耀",
"诛仙手游版",
"梦幻西游手游",
"青云志",
"甜甜萌物语",
"三剑豪2",
"剑侠情缘手游",
"问道手游",
"暗黑黎明2",
"倚天屠龙记"
]},
	{"name":"2017年度十大最期待移动游戏",
	 "list":["穿越火线：重返战场",
"剑网3：指尖江湖",
"最终幻想：觉醒",
"刺客信条：血帆",
"成吉思汗手机版",
"神仙道2",
"全民仙逆",
"传奇世界手游",
"街篮",
"酷酷2"
]},
	{"name":"2016年度十大最受欢迎电子竞技游戏",
	 "list":["英雄联盟",
"王者荣耀",
"刀塔",
"守望先锋",
"无尽战区",
"部落冲突:皇室战争",
"球球大作战",
"坦克之战",
"全民枪战",
"反恐精英Online"
]},
	{"name":"2016年度十大最受海外欢迎游戏",
	 "list":["列王的纷争",
"王国纪元",
"城堡争霸",
"少年三国志",
"钢琴块2",
"猪来了",
"拳皇98",
"全民枪战",
"天天枪战",
"新剑与魔法"
]},
	{"name":"2017年度十大最期待新体验类游戏",
	 "list":["仙剑奇侠传VR",
"窃梦者",
"捕鱼达人VR",
"传奇世界3D手游",
"会哭的娃娃",
"音姬"
]}
];
function getProductRankList(id, callback) {
    $.post(getRankUrl(), {}, function (data) {
		console.log(data);
        if (data.code == 1) {
			console.log(data.data.list);
			if(!rankProductListModel){
				rankProductListModel = {
					list: ko.observableArray()
				};
				ko.applyBindings(rankProductListModel, document.getElementById(id));
			}
			rankProductListModel.list(data.data.list);
            if (callback) {
                callback(id);
            }
        } else {
			alert(data.msg);
        }
    }, "jsonp");
}
var moreRankListModel;
function getMoreRankList(id, type, callback) {
    $.post(getMoreRankUrl(), {type:type}, function (data) {
        dealList(data, id, callback);
    }, "jsonp");
}
var allRankListModel;
function getAllRankList(id, callback) {
    $.post(getAllRankUrl(), {}, function (data) {
        dealList(data, id, callback);
    }, "jsonp");
}
function dealList(data, id, callback){
	if (data.code == 1) {
		if(!allRankListModel){
			allRankListModel = {
				list: ko.observableArray()
			};
			ko.applyBindings(allRankListModel, document.getElementById(id));
		}
		allRankListModel.list(data.data.list);

		if (callback) {
			callback();
		}
	} else {
		alert(data.msg);
	}
}
