
export default function (request, reject, rootAddress) {
  var service = {};
  /**
   获得用户信息
   请求方法: GET, POST
   请求示例: http://<domain>/jx3/recall210922/get_my_info?open_id=123211z

   响应示例:

   {
	    "code": 1,
	    "status": 1,
	    "msg": "",
	    "message": "",
	    "data": {
	        "is_first": 0,
	        "role_type": 2,
	        "share_key": "MTIzMjExeg",
	        "map_1": 0,
	        "map_2": 0,
	        "map_3": 0,
	        "map_4": 1,
	        "map_5": 0,
	        "is_bind_passport": 1,
	        "invitation_count": 0,
	        "is_synthetic": 0,
	        "is_get_chymz": 1,
	        "gain_time": 0,
	        "daily_help": 3,
	        "invitation_msg": [
	            {
	                "point": 1000,
	                "nick_name": "",
	                "avater_url": ""
	            }
	        ],
	        "session_id": "64unryU1lGXhjXNz5ZZY4Yg3pnVKEfrt883cVdRA",
	        "request_id": "af8f108d43fcc34069fc90b61923500fd9b53005"
	    }
	 }
   */
  service.getMyInfo = function () {
    return request(rootAddress + '/jx3/recall210922/get_my_info', {
      data: {
      }
    }).then((response) => {
      if (response.status === 1 /* 成功 */) {
        /**
         {
          "data{}": {
            "daily_help": "每日受助力次数",
            "gain_time": "可收集地图次数",
            "invitation_count": "邀请回归用户人数",
            "invitation_msg": "回归用户信息",
            "is_bind_passport": "是否已绑定金山通行证：0-未绑定，1-已绑定",
            "is_first": "是否首次进入主页",
            "is_get_chymz": "是否已获得沧海月明珠：0-未获得，1-已获得",
            "is_synthetic": "地图是否已合成：0-未合成，1-已合成",
            "map_1": "地图1数量",
            "map_2": "地图2数量",
            "map_3": "地图3数量",
            "map_4": "地图4数量",
            "map_5": "地图5数量",
            "role_type": "用户角色：1-正常玩家，2-回归玩家",
            "share_key": "分享key用户好友助力和邀请用户回归"
          },
          "data{}.invitation_msg[]": {
            "avater_url": "头像地址",
            "nick_name": "昵称",
            "point": "江湖行记分"
          }
        }
         */
        return response.data;
      }
      /**
       [{
       "code": "0",
       "description": "系统错误"
       }, {
        "code": "-10151",
        "description": "活动未开启"
      }, {
        "code": "-10152",
        "description": "活动配置错误"
      }, {
        "code": "-10153",
        "description": "活动未开始"
      }, {
        "code": "-10154",
        "description": "活动已结束"
      }, {
        "code": "-10201",
        "description": "系统处理中..."
      }, {
        "code": "-12801",
        "description": "调用活动平台接口失败"
      }, {
        "code": "-12802",
        "description": "系统错误"
      }, {
        "code": "-12803",
        "description": "参数错误"
      }, {
        "code": "-12804",
        "description": "编码错误"
      }, {
        "code": "-12805",
        "description": "签名错误"
      }, {
        "code": "-12806",
        "description": "时间戳错误"
      }, {
        "code": "-12807",
        "description": "登录账号不存在"
      }, {
        "code": "-12808",
        "description": "玩家账号不存在"
      }, {
        "code": "-12809",
        "description": "区不存在"
      }, {
        "code": "-12810",
        "description": "流水号重复"
      }, {
        "code": "-12811",
        "description": "没有资格领取时间奖励"
      }, {
        "code": "-12812",
        "description": "已领取时间奖励"
      }, {
        "code": "-12813",
        "description": "未知错误"
      }, {
        "code": "-12814",
        "description": "游戏或者区服不存在"
      }, {
        "code": "-12815",
        "description": "未绑定手机号"
      }, {
        "code": "-12816",
        "description": "账号未登录"
      }, {
        "code": "-12817",
        "description": "操作失败"
      }, {
        "code": "-12818",
        "description": "账号已存在"
      }, {
        "code": "-12819",
        "description": "激活码不存在"
      }, {
        "code": "-12820",
        "description": "激活码已使用"
      }, {
        "code": "-12821",
        "description": "需要激活码"
      }, {
        "code": "-12822",
        "description": "游戏已关闭激活码激活玩家账号开关"
      }, {
        "code": "-12823",
        "description": "验证oldValue失败"
      }, {
        "code": "-12824",
        "description": "key不存在"
      }, {
        "code": "-12825",
        "description": "未知key类型"
      }, {
        "code": "-12826",
        "description": "网关名不存在"
      }, {
        "code": "-12827",
        "description": "大区内的账号不存在"
      }, {
        "code": "-12828",
        "description": "激活时间超时"
      }, {
        "code": "-12829",
        "description": "账号已申请过退款"
      }, {
        "code": "-12830",
        "description": "在线时长超时"
      }, {
        "code": "-12831",
        "description": "大区充值金额不足要求"
      }, {
        "code": "-12832",
        "description": "账号已是收费状态"
      }, {
        "code": "-12833",
        "description": "账号被冻结"
      }, {
        "code": "-12834",
        "description": "账号不允许充值"
      }, {
        "code": "-12835",
        "description": "查询账号数量超过16个"
      }, {
        "code": "-12836",
        "description": "账号不合法"
      }, {
        "code": "-12837",
        "description": "起始时间不能等于或晚于结束时间"
      }, {
        "code": "-12838",
        "description": "Paylog库访问异常"
      }, {
        "code": "-12839",
        "description": "用户没有可退款订单"
      }, {
        "code": "-12840",
        "description": "账号或者密码错误"
      }, {
        "code": "-20001",
        "description": "请输入小程序的app_id"
      }, {
        "code": "-20002",
        "description": "无该账号注册信息"
      }, {
        "code": "-20003",
        "description": "网络错误"
      }, {
        "code": "-20200",
        "description": "账号已存在"
      }]
       */
      return reject(response);
    });
  };
  /**
   助力好友
   请求方法: GET, POST
   请求示例: http://<domain>/jx3/recall210922/help

   响应示例:

   {
	    "code": 1,
	    "status": 1,
	    "msg": "",
	    "message": "",
	    "data": {
	        "session_id": "aCgJwti4AnF3sDyOjHbyzSoO3v2GKyQAUN4huxma",
	        "request_id": "3eaed702ce2d3272f4e8ac16c6f4fea84e30d6d3"
	    }
	 }
   */
  service.help = function (share_key) {
    return request(rootAddress + '/jx3/recall210922/help', {
      data: {
        share_key: share_key, /*  getMyInfo中share_key */
      },
      showFailToast: false
    }).then((response) => {
      if (response.status === 1 /* 成功 */) {
        /**
         {
          "data{}": []
        }
         */
        return response.data;
      }
      /**
       [{
       "code": "0",
       "description": "系统错误"
       }, {
        "code": "-10151",
        "description": "活动未开启"
      }, {
        "code": "-10152",
        "description": "活动配置错误"
      }, {
        "code": "-10153",
        "description": "活动未开始"
      }, {
        "code": "-10154",
        "description": "活动已结束"
      }, {
        "code": "-10201",
        "description": "系统处理中..."
      }, {
        "code": "-20001",
        "description": "请输入小程序的app_id"
      }, {
        "code": "-20010",
        "description": "分享KEY错误"
      }, {
        "code": "-20011",
        "description": "好友人气爆棚，明天再来帮TA助力吧先去参与活动集齐五图领好礼"
      }, {
        "code": "-20012",
        "description": "今日以为好友助力"
      }, {
        "code": "-20013",
        "description": "不能为自己助力，快去邀请好友吧"
      }, {
        "code": "-20014",
        "description": "助力用户不存在"
      }]
       */
      return reject(response);
    });
  };

  return service;
}
