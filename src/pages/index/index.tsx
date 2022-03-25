import React, { useState } from 'react';
import { AtTabBar } from 'taro-ui';
import { View } from '@tarojs/components';
import Home from './components/home/index';

import './index.scss';

const Index = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabBarClick = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <View>
      <Home></Home>
      <AtTabBar
        fixed
        current={currentTab}
        onClick={handleTabBarClick}
        tabList={[
          { title: '工作台', iconType: 'home' },
          { title: '楼盘', iconType: 'camera' },
          { title: '客户', iconType: 'folder' },
          { title: '我的', iconType: 'user' },
        ]}
      ></AtTabBar>
    </View>
  );
};

export default Index;
