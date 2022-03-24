import { request } from '@tarojs/taro';

/**
 * 后端返回数据结构类型
 */
export type ResultType<T> = {
  /**
   * data
   */
  data: T;
  /**
   * 错误信息
   */
  message: string;
  /**
   * 状态码
   */
  status: number;
};

/**
 * 获取url
 * @param url
 * @returns
 */
export const findUrl = (url: string) => {
  if (process.env.TARO_ENV === 'weapp') {
    return process.env.TARO_APP_REQUEST_URL + url;
  }
  return url;
};
/**
 * 获取header
 * @param header
 */
const findHeader = (header: any = {}) => {
  return { 'content-type': 'application/json', ...header };
};

/**
 * 默认参数
 * @returns
 */
const defOptions: any = {
  mode: 'no-cors',
};

/**
 * get请求
 * @param url
 * @param data
 * @param header
 * @returns
 */
export const requestGet = async <T extends {} = {}>(
  url: string,
  data: any,
  header?: any
) => {
  return request<ResultType<T>>({
    url: findUrl(url),
    method: 'GET',
    data,
    header: findHeader(header),
    ...defOptions,
  })
    .then(res => res.data.data)
    .catch(err => {
      console.log(err);
      return Promise.resolve(undefined);
    });
};

/**
 * post请求
 * @param url
 * @param data
 * @param header
 */
export const requestPost = async <T extends {} = {}>(
  url: string,
  data: unknown,
  header?: any
) => {
  return request<ResultType<T>>({
    url: findUrl(url),
    method: 'POST',
    data,
    header: findHeader(header),
  })
    .then(res => res.data.data)
    .catch(err => {
      console.log(err);
      return Promise.resolve(undefined);
    });
};

/**
 * put请求
 * @param url
 * @param data
 * @param header
 * @returns
 */
export const requestPut = async <T extends {} = {}>(
  url: string,
  data: unknown,
  header?: any
) => {
  return request<ResultType<T>>({
    url: findUrl(url),
    method: 'PUT',
    data,
    header: findHeader(header),
  })
    .then(res => res.data.data)
    .catch(err => {
      console.log(err);
      return Promise.resolve(undefined);
    });
};

/**
 * deleate请求
 * @param url
 * @param data
 * @param header
 * @returns
 */
export const requestDeleate = async <T extends {} = {}>(
  url: string,
  data: unknown,
  header?: any
) => {
  return request<ResultType<T>>({
    url: findUrl(url),
    method: 'DELETE',
    data,
    header: findHeader(header),
  })
    .then(res => res.data.data)
    .catch(err => {
      console.log(err);
      return Promise.resolve(undefined);
    });
};
