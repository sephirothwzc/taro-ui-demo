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

/**
 * 查询总积分
 */
export const getBrokerScoreTotal = () => {
  return requestGet<number>('/app-web/broker-score/total');
};
