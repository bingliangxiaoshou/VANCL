// pages/home/home.js
Page({

  data: {
    swipelist: [],
    ninelist: [],
    noticelist: [],
    plist: []
  },
  getSwipeList: function () {
    wx.request({
      url: 'http://192.168.43.33:3000/swipelist',
      success: (res) => {
        console.log(res.data)
        this.setData({ swipelist: res.data })
      }
    })
  },
  getNineList:function(){
    wx.request({
      url: 'http://192.168.43.33:3000/ninelist',
      success:(res)=>{
        this.setData({ ninelist: res.data })
      }
    })
  },
  getNoticeList:function(){
    wx.request({
      url: 'http://192.168.43.33:3000/noticelist',
      success:(res)=>{
        this.setData({ noticelist: res.data })
      }
    })
  },
  getProductList:function(){
    wx.request({
      url: 'http://192.168.43.33:3000/plist',
      success:(res)=>{
        this.setData({ plist: res.data })
      }
    })
  },
  getProduct: function (event){
    var id = event.currentTarget.dataset.id;
    //console.log(id);
    wx.navigateTo({
      url: '/pages/product/product?id='+id,
    })
  },
  nine:function(event){
    var id = event.target.dataset.id;
    if(id==1){
      wx.navigateTo({
        url: '/pages/exchange/exchange'
      })
    }else if(id==2){
      wx.navigateTo({
        url: '/pages/sign_in/sign_in',
      })
    }
  },
  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwipeList();
    this.getNineList();
    this.getNoticeList();
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