// pages/sign_in/sign_in.js
Page({
  getBgimg:function(){
    wx.request({
      url: 'http://192.168.43.33:3000/bglist',
      success:(res)=>{
        this.setData({ bglist: res.data })
      }
    })
  },
  sign:function(e){
    wx.showToast({
      title: '签到成功',
      success:(res)=>{
        this.setData({ signed: true })
        console.log(e);
        this.setData({e});
      }
    });
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    bglist:[],
    signed: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBgimg();
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