// pages/product/product.js
Page({
  getProductList: function () {
    wx.request({
      url: 'http://192.168.43.33:3000/plist',
      success: (res) => {
        this.setData({ plist: res.data })
      }
    })
  },
  payment:function(){
    wx.show
    wx.showModal({
      title: '余额不足',
      content: '是否进行充值',
      success:(res)=>{
        wx.navigateTo({
          url: '/pages/recharge/recharge',
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    plist:[],
    id:0,
    url:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({id:options.id})
    this.getProductList();
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