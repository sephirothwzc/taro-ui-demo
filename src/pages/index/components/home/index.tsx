import { View, Swiper, SwiperItem } from '@tarojs/components';
import { useImmer } from 'use-immer';
import { AtActivityIndicator, AtButton } from 'taro-ui';
import { useRequest } from 'taro-hooks';
import React, { FC } from 'react';
import { getBannerList } from '@/services/index/home';
import styles from './index.module.scss';

/**
 * 主页-工作台
 * @returns
 */
const Index: FC = () => {
  const [title, setTitle] = useImmer('我是工作台');
  const { data, loading } = useRequest(getBannerList);

  const handleClick = () => {
    setTitle(() => new Date().toString());
  };
  if (loading) {
    return <AtActivityIndicator mode="center"></AtActivityIndicator>;
  }
  console.log(data);
  return (
    <View className={styles.layout}>
      <Swiper
        className="test-h"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className="demo-text-1">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-2">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-3">3</View>
        </SwiperItem>
      </Swiper>
      <AtButton type="primary" onClick={handleClick}>
        {title}
      </AtButton>
    </View>
  );
};

export default Index;
