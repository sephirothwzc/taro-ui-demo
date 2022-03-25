import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui';
import { useRequest } from 'taro-hooks';
import React, { FC } from 'react';
import { getBannerList, getBrokerScoreTotal } from '@/services/index/home';
import iconJf from '../../../../assets/image/index/home/icon_jifen@2x.png';
import iconQd from '../../../../assets/image/index/home/icon_qiandao@2x.png';
import imgDj from '../../../../assets/image/index/home/dengji@2x.png';
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
    <>
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
        <View className={styles.homePage}>
          <View className={styles.rowRecommend}>
            <View>
              <Image
                src={imgDj}
                className={`${styles.imgDJ} unit-info-tax-tip`}
                mode="scaleToFill"
              ></Image>
            </View>
            <View>
              <View className={styles.colRecommendTxt}>s级</View>
              <View className={styles.colRecommentTxtLable}>好房推荐官</View>
            </View>
            <View className={styles.col1}>
              <View className={styles.viewNumberTxt}>
                <Text className={styles.txtNumber}>267</Text>
                <Text className={styles.txtLable}>人</Text>
              </View>
              <View className={styles.txtDetails}>近30天到访</View>
            </View>
            <View className={styles.col2}>
              <View className={styles.viewNumberTxt}>
                <Text className={styles.txtNumber}>125</Text>
                <Text className={styles.txtLable}>人</Text>
              </View>
              <View className={styles.txtDetails}>近30天成交</View>
            </View>
            <View className={styles.col2}>
              <View className={styles.viewNumberTxtW}>
                <Text className={styles.txtNumber}>¥1.5</Text>
                <Text className={styles.txtLableW}>万</Text>
              </View>
              <View className={styles.txtDetails}>可提现资产</View>
            </View>
            <View className={styles.flexCenter}>
              <View className={styles.colLast}>去提现</View>
            </View>
          </View>
          <View className={styles.titleCard}>
            <View className={styles.rowTitle}>
              <View></View>
              <View></View>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Index;
