const homeLogos = [
  'square',
  'lenovo',
  'tencent',
  'bigo',
  'blued',
  'paypay',
  'shopee',
  'bookmyshow',
  'bank-of-beijing',
  'hulu',
  'qiy',
  'netease-games',
  'jd-cloud',
  'mi',
  'webank',
  'zalopay',
  'unext',
  'wuba',
  'zhihu',
  'meituan',
].map((logo) => logo + '-logo')

const zhLogos = [
  'bank-of-china',
  'pingan',
  'guangda',
  'bank-of-beijing',
  'webank',
  'lufax',
  'ke-finance',
  'tencent',
  'meituan',
  'xiaomi',
  'netease-games',
  'iqiyi',
  'wuba',
  'zhihu',
  'china-mobile',
  'china-telecom',
  'china-unicom',
  'people',
  'oppo',
  'yumchina',
  'zto-express',
  'paypay',
  'zalopay',
  'shopee',
  'bookmyshow',
  'hulu',
  'u-next',
  'dailymotion',
].map((logo) => logo + '-logo-zh')

module.exports = [...homeLogos, ...zhLogos]
