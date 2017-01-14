//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    usercar: '车源表',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../carinfo/carinfo'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
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
  }


})
