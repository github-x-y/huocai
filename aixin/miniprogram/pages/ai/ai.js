// pages/ai/ai.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight:"",
    userInfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.userInfo){
      this.setData({
        userInfo:app.userInfo
      })
     }else{
       app.userInfoReadyCallback = res =>{
         console.log(res)
         this.setData({
           userInfo:res.userInfo
         })     
         wx.switchTab({
          url: '../haha/haha',
        })
       }
     }
    wx.getSystemInfo({
      success: (res => {
        console.log(res)
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR;
        this.setData({
          winHeight: calc
        });
      })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindGetUserInfo(res){
  console.log(res)
  if(res.detail.userInfo){
     wx.switchTab({
       url: '../c',
     })
     app.userInfo = res.detail.userInfo
  }else{

  }
  }
})