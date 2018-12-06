// pages/scan/scan.js
Page({
  getIconList:function(){
    wx.request({
      url: 'http://192.168.43.33:3000/iconlist',
      success:(res)=>{
        this.setData({ iconlist: res.data })
      }
    })
  },
  scanCode1: function (){
    wx.scanCode({
      success:(res)=>{
        
      },
    })
  },
  scanCode2: function () {
    wx.scanCode({
      success: (res) => {
        wx.navigateTo({
          url: '/pages/sign_in/sign_in',
        })
      },
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    iconlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIconList();
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

  }
})