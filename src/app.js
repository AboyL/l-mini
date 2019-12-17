import './wx.set';
import * as utils from './utils/util';
import config from './config';

wx.$utils = utils;
wx.$config = config;

App({
  // 设置统一的错误监控
  onError (err) {
    if (wx.$log.error) {
      wx.$log.error(err);
      wx.$log.setFilterMsg('script_err');
    }
  },
  onLaunch: async function (options) {
    wx.getSystemInfo({
      success: function (res) {
        wx.$windowHeight = res.windowHeight;
        wx.$windowWidth = res.windowWidth;
        wx.$pixelRatio = res.pixelRatio;

        // 一些监控相关的信息
        wx.$version = res.version;
        wx.$system = res.system;
        wx.$SDKVersion = res.SDKVersion;
        wx.$brand = res.brand;
        wx.$model = res.model;
      }
    });
  }
});
