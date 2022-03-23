import { View } from '@tarojs/components';
import { useImmer } from 'use-immer';
import { AtButton } from 'taro-ui';
import React, { FC } from 'react';
import styles from './index.module.scss';

const Index: FC = () => {
  const [title, setTitle] = useImmer('我是工作台');
  const handleClick = () => {
    setTitle(() => new Date().toString());
  };
  return (
    <View className={styles.layout}>
      {title}
      <AtButton type="primary" onClick={handleClick}>
        测试
      </AtButton>
    </View>
  );
};

export default Index;
