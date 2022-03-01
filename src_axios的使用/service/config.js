const devBaseURL = "https://httpbin.org";
const proBaseUrl = "https://production.org"

// 判断环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseUrl

export const TIMEOUT = 5000;