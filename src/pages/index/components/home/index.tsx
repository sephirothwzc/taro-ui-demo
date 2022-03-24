import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui';
import { useRequest } from 'taro-hooks';
import React, { FC } from 'react';
import { getBannerList } from '@/services/index/home';
import styles from './index.module.scss';

/**
 * 主页-工作台
 * @returns
 */
const Index: FC = () => {
  const { data, loading } = useRequest(getBannerList);

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
      >
        {data?.map(p => (
          <SwiperItem key={p.id}>
            <View>
              <Image src={p.bannerImageUrl}></Image>
            </View>
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
};

export default Index;
