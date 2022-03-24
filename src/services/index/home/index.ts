import { request } from '@tarojs/taro';
import { requestGet } from '../../utils/request-helper';

/**
 * banner
 */
export type BannerItem = {
  bannerImageUrl: string;
  id: string;
  playType: number;
  title: string;
  url: string;
  urlType: number;
};

/**
 * 获取banner
 */
export const getBannerList = () => {
  return request({
    url: '/app-web/banner/list',
    method: 'GET',
    data: { cityId: '156110000' },
    mode: 'no-cors',
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  // return requestGet<Array<BannerItem>>('/app-web/banner/list', {
  //   cityId,
  // });
};
