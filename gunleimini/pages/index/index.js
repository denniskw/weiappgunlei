//index.js首页
//获取应用实例
var imageUtil = require('../../utils/util.js'); 
var app = getApp()
Page({

  //分享
onShareAppMessage: function () {
    return {
      title: '分享',
      desc: '快来找到你想要的爱车',
      path: 'pages/index/index'
    }
  },
  data:{
gunleiImage:'https://image.gunlei.com/miniApp/index-banner.jpg',
iconImage01:'https://image.gunlei.com/miniApp/index-icon01.jpg',
iconImage02:'https://image.gunlei.com/miniApp/index-icon02.jpg',
iconImage03:'https://image.gunlei.com/miniApp/index-icon03.jpg',
iconImage04:'https://image.gunlei.com/miniApp/index-icon04.jpg',
carTitle:'https://image.gunlei.com/miniApp/index-cartitle.jpg',
carImage:[
'https://image.gunlei.com/miniApp/index-car01.jpg',
'https://image.gunlei.com/miniApp/index-car02.jpg',
'https://image.gunlei.com/miniApp/index-car03.jpg',
'https://image.gunlei.com/miniApp/index-car04.jpg',
],
     imagewidth: 0,//缩放后的宽  
    imageheight: 0,//缩放后的高  
  },
  onLoad: function () {  
  },  

  goSourceCars:function(){
    wx.navigateTo({
      url: '../sourcecars/sourcecars'
    })
  },
  goWarehouse:function() {
    wx.navigateTo({
      url: '../warehouse/warehouse'
    })
  },

  goLiving:function(){
    wx.navigateTo({
      url: '../living/living'
    })
  },

  goFinance:function(){
    wx.navigateTo({
      url: '../finance/finance'
    })
  },
  imageLoad: function (e) {  
    var imageSize = imageUtil.imageUtil(e)  
    this.setData({  
      imagewidth: imageSize.imageWidth,  
      imageheight: imageSize.imageHeight,  
    })  
  }  
})