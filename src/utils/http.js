import * as utils from './util'

export default async ({
  url,
  method = 'POST',
  data
}) => {
  try {
    const res = await utils.promisic(wx.request)({
      url: wx.$config.baseUrl + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        Authorization: wx.getStorageSync('token')
      }
    })
    if (res.success) {
      return [null, res]
    } else {
      throw res
    }
  } catch (error) {
    // 进行错误上报工作
    const msg = (error.data && error.data.message) || error

    wx.$log.error(msg)
    wx.$log.addFilterMsg(url)
    wx.$log.addFilterMsg(data)

    wx.$showToast({
      title: msg || '操作失败'
    })
    return [error]
  }
}
