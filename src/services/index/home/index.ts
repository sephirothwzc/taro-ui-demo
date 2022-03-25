import {
  requestGet,
  requestPost,
  ResultPageType,
} from '../../utils/request-helper';

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

/**
 * 获取不同状态下的客户数量 入参
 */
export type PostCustomerListIn = {
  /**
   * 业务开始时间
   */
  beginDate: string;
  /**
   *
   */
  brokerId: string;
  /**
   * 佣金状态 [0=未审定],[1=已审定待发放],[2=拒收无效],[3=已发放]
   */
  brokerageStatus: string;
  /**
   * 业务状态：[2=报备],[3=到访],[4=认筹],[5=认购],[6=签约]
   */
  businessStatus: string;
  /**
   * 报备(线索)状态 [0=待确认],[1=有效],[21=拒收无效],[22=手工无效],[23=过期无效]
   */
  clueStatus: string;
  /**
   * 业务结束时间
   */
  endDate: string;
  /**
   * 过滤条件，允许两种格式，电话号码后4位或者客户姓名
   */
  filter: string;
  /**
   * 排序字段（last_report_time：最后报备时间，check_date：业务时间）
   */
  orderColumn: string;
  /**
   * 排序方式（DESC，ASC）
   */
  orderWay: string;
  /**
   * 页数
   */
  page: string;
  /**
   * 项目(楼盘)id
   */
  projectId: string;
  /**
   * 每页显示条数
   */
  size: string;
};

/**
 * 获取不同状态下的客户数量
 */
export const postCustomerList = (param: PostCustomerListIn) => {
  return requestPost<ResultPageType<any>>('/app-web/customer/list', param);
};
