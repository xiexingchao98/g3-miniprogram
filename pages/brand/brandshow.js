Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodityList:[],
    brand_id:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log(data.data)
      that.setData({
        brand_id:data.data
      })
    })
    wx.request({
      url: 'https://www.whatdoyoudo.club/api/database/commodity/viewByBrandId?brandId='+that.data.brand_id,
      data: {}, header: {},
      success(res) {
        that.setData({
          commodityList:res.data
        })
    },
    })
    console.log(this.data.commodityList)
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