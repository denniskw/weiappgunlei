//carinfo.js  车辆详情页
//获取应用实例
var app = getApp()
Page({
    data:{
        shop_id:'',
        car_id:''
    },

    onLoad:function(option){
        var that = this
        console.log(option.car_id)
        that.setData({
            car_id:option.car_id
        })
        
        wx.request({
          url:app.globalData.apiUrl+'shop/shopImagesGet',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {
               'content-type': 'application/json',
               'api-version':'19',
               'access-token':'xXw6rRS40B9kWbME721ZD6Snsq1SDBoE'
          }, // 设置请求的 header
          success: function(res){
              console.log(res.data.shopCover)
            // success
            that.setData({
                shop_id:res.data.shop_id
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

})