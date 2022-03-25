import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui';
import { useRequest } from 'taro-hooks';
import React, { FC } from 'react';
import { getBannerList, getBrokerScoreTotal } from '@/services/index/home';
import iconJf from '../../../../assets/image/index/home/icon_jifen@2x.png';
import iconQd from '../../../../assets/image/index/home/icon_qiandao@2x.png';
import styles from './index.module.scss';

/**
 * 主页-工作台
 * @returns
 */
const Index: FC = () => {
  const { data, loading } = useRequest(getBannerList);
  const { data: pointTotal } = useRequest(getBrokerScoreTotal);

  if (loading) {
    return <AtActivityIndicator mode="center"></AtActivityIndicator>;
  }
  return (
    <View className={styles.layout}>
      <Swiper
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
        className={styles.swiper}
      >
        {data?.map(p => (
          <SwiperItem key={p.id}>
            <View>
              <Image
                className={styles.swiperImage}
                mode="scaleToFill"
                src={p.bannerImageUrl}
              ></Image>
            </View>
          </SwiperItem>
        ))}
      </Swiper>
      <View className={styles.topTag}>
        <View className={styles.leftIcon}>
          <Image
            src={iconJf}
            className={`${styles.iconImg} unit-info-tax-tip`}
          ></Image>
          <Text>{pointTotal?.toString() || 827}分</Text>
        </View>
        <View className={styles.rightIcon}>
          <Image
            src={iconQd}
            className={`${styles.iconImgQd} unit-info-tax-tip`}
          ></Image>
          <Text>签到</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;
