//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    bannerUrl: 'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house1.jpg',
    carUrl:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house2_11.jpg',
    carUrl2:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house2_1.jpg',
    wuliuUrl:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house2_2.jpg',
    wuliuVideoUrl:'https://cdn.gunlei.com/pc/video/hwc_video.mp4?v=20160922',

    wuliuArray:['https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house3_1.jpg',
                'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house3_2.jpg',
                'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house3_3.jpg',
                'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house3_4.jpg',
                'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house3_5.jpg',
                'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house3_6.jpg'
                ],
    wuliuVsUrl:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house4_1.jpg',
    wuliuVsUrl2:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house4_2.jpg',
    wuliuVsUrl3:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house4_3.jpg',

    shipaiUrl:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house5.jpg',

    rukuUrl:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house6.jpg',
    zhuangxiangUrl:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house7.jpg',
    haiyunUrl:'https://cdn.gunlei.com/static/h5/v2.0/img/foreign_house8.jpg',
    navLeftItems: []
  },

  onLoad:function(){
  console.log("调用")
    var that=this
    wx.request({
      url: 'https://api.gunlei.com/gunlei_api/shop/shopImagesGet',
      // https://api.gunlei.com/gunlei_api/dealer/info
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Accept': 'application/json',
        'api-version':'19',
        // 'User-Agent':'iOS-Mall_Buyer-v1.0.0',
        'access-token':'xXw6rRS40B9kWbME721ZD6Snsq1SDBoE'

      }, // 设置请求的 header
      success: function(res){
        //  console.log("成功")
        // success
        that.setData({
          // bannerUrl:res.data.shopCover
        })
       

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })


}
 
// var that = this 
//    wx.request({ 
//  url: 'http://www.huanqiuxiaozhen.com/wemall/goods/inqGoodsByTypeBrand?brand=' + options.brand + "&typeid=" + options.typeid, 
//  method: 'GET', 
//  data: {}, 
//  header: { 
//  'Accept': 'application/json' 
//  }, 
//  success: function(res) { 
//  that.setData({ 
//  list: res.data.data 
//  }); 
//  } 
//  }) 
//  } 




})
