//sourcecar 车源表
//获取应用实例
var app = getApp()
Page({
//分享
onShareAppMessage: function () {
    return {
      title: '分享',
      desc: '快来找到你想要的爱车',
      path: 'pages/sourcecars/sourcecars'
    }
  },

  data: {
    objectArray: []
  },
  onLoad: function () {
    var that = this

    wx.request({
      url: app.globalData.apiUrl + 'sales/car/inventoryCar',
      data: {
        brand_id: '',
        series_id: '',
        vehicle_year: '',
        sort_type: '',
        arrival_port_desc: '',
        purchase_method: ''
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json',
        'api-version': '19',
        'access-token': 'xXw6rRS40B9kWbME721ZD6Snsq1SDBoE'
      }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data[3].model_name)
        //数据缓存在本地
        wx.setStorage({
          key: "sourceinfo",
          data: res.data
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

    //调用API从本地缓存中获取数据
    wx.getStorage({
      key: 'sourceinfo',
      success: function (res) {
        console.log(res.data)
        that.setData({
          objectArray: res.data
        })
      }
    })
  }

})