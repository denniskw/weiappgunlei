//index.js首页
//获取应用实例
var imageUtil = require('../../utils/util.js'); 
var app = getApp()
Page({
  data:{
gunleiImage:'https://image.gunlei.com/miniApp/index-banner.jpg',
     imagewidth: 0,//缩放后的宽  
    imageheight: 0,//缩放后的高  
  },
  onLoad: function () {  
  },  
  imageLoad: function (e) {  
    var imageSize = imageUtil.imageUtil(e)  
    this.setData({  
      imagewidth: imageSize.imageWidth,  
      imageheight: imageSize.imageHeight,  
    })  
  }  
})