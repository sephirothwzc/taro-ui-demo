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
export const getBannerList = async (cityId?: string) => {
  debugger;
  return requestGet<Array<BannerItem>>('/app-web/banner/list', {
    cityId: cityId || '156110000',
  });
};
