wx.$showToast = (config) => {
  const trueConfig = {
    icon: 'none',
    duration: 2000,
    ...config
  }
  wx.showToast(trueConfig)
}

// 设置报错的log
const log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null

wx.$log = {
  info () {
    if (!log) return
    log.info.apply(log, arguments)
  },
  warn () {
    if (!log) return
    log.warn.apply(log, arguments)
  },
  error () {
    if (!log) return
    log.error.apply(log, arguments)
    // 一些附加信息
    log.addFilterMsg('wx.$version--' + wx.$version)
    log.addFilterMsg('wx.$system--' + wx.$system)
    log.addFilterMsg('wx.$SDKVersion--' + wx.$SDKVersion)
    log.addFilterMsg('wx.$brand--' + wx.$brand)
    log.addFilterMsg('wx.$model--' + wx.$model)
  },
  setFilterMsg (msg) { // 从基础库2.7.3开始支持
    if (!log || !log.setFilterMsg) return
    if (typeof msg !== 'string') return
    log.setFilterMsg(msg)
  },
  addFilterMsg (msg) { // 从基础库2.8.1开始支持
    if (!log || !log.addFilterMsg) return
    if (typeof msg !== 'string') return
    log.addFilterMsg(msg)
  }
}
