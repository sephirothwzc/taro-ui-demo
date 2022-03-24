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
  return requestGet<Array<BannerItem>>('/app-web/banner/list', {
    cityId: '156110000',
  });
};
