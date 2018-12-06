// pages/exchange/exchange.js
Page({ 
  getPrize:function(){
    wx.request({
      url: 'http://192.168.43.33:3000/prizelist',
      success:(res)=>{
        this.setData({ prizelist: res.data})
      }
    })
  },
  getNoticeList: function () {
    wx.request({
      url: 'http://192.168.43.33:3000/rosterlist',
      success: (res) => {
        this.setData({ rosterlist: res.data })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    prizelist:[],
    rosterlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPrize();
    this.getNoticeList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var context = wx.createContext()
    context.beginPath()
    context.arc(105, 105, 100, 0, 360 * Math.PI / 180)
    context.strokeStyle = "#ccc"
    context.lineWidth = 5;
    context.stroke();
    wx.drawCanvas({
      canvasId: 'canvas',
      actions: context.getActions()
    })
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