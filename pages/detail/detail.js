// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docid:'',
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id){
      this.setData({
        docid: options.id
      });
      this.getDetail();
    }
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
  getDetail:function(){
    let WxParse = require('../../wxParse/wxParse.js');
    let _that = this;
    let id = this.data.docid;
    if(id){
      wx.request({
        url: 'https://smzcxf.com/index.php?s=/index/get_detail',
        data: {
          id: id,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          _that.setData({
            content: res.data.detail.content
          })
          let article = '<div>我是HTML代码</div>';
          /**
          * WxParse.wxParse(bindName , type, data, target,imagePadding)
          * 1.bindName绑定的数据名(必填)
          * 2.type可以为html或者md(必填)
          * 3.data为传入的具体数据(必填)
          * 4.target为Page对象,一般为this(必填)
          * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
          */
          WxParse.wxParse('article', 'html', res.data.detail.content, _that, 5);
        }
      });
    }else{
      let article = '<div>我是HTML代码</div>';
      _that.setData({
        content: article
      })
      WxParse.wxParse('article', 'html', article, _that, 5);
    }
  }
})