const modal = (tip, isCancleShow) => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '提示',
      content: tip || '是否确认该操作？',
      showCancel: typeof (isCancleShow) === 'undefined' ? true : false,
      success: function (res) {
        if (res.confirm)
          resolve()
        else if (res.cancel)
          reject()
      }
    })
  })
}

export {
  modal
}