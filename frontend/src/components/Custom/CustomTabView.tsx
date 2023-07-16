import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TabBar, TabView } from 'react-native-tab-view';
import { theme } from 'styles/theme';
// import Cream from './CustomItem/Cream';
// import Letter from './CustomItem/Letter';
// import Image from './CustomItem/Image';
// import Sticker from './CustomItem/Sticker';
import { renderScene } from 'utils/customData/router';
import route from '../../utils/customData/route';

const CustomTabView = () => {
  const [index, setIndex] = useState(0);

  // // TabViewComponent 불필요시 주석 삭제 예정
  // const BackgroundComponent = () => <Cream />;

  // const ImageComponent = () => <Image />;

  // const CakeComponent = () => (
  //   <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
  // );

  // const LetterComponent = () => <Letter />;

  // const CreamComponent = () => <Cream />;

  // const CandleComponent = () => (
  //   <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
  // );

  // const FruitComponent = () => (
  //   <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
  // );

  // const StickerComponent = () => <Sticker />;

  const [routes] = useState(route);

  return (
    <View style={styles.tabContainer}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={styles.tabView}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled
            pressColor="transparent"
            contentContainerStyle={{ alignItems: 'center' }}
            activeColor="#000000"
            inactiveColor="#919191"
            tabStyle={{ width: 70.5 }}
            labelStyle={styles.labelText}
            indicatorStyle={styles.indicatorStyle}
            style={styles.tabBar}
            renderLabel={({ route, focused }) => (
              <Text
                style={[
                  styles.labelText,
                  focused ? styles.boldLabel : styles.regularLabel,
                ]}
              >
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </View>
  );
};

export default CustomTabView;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: theme.white,
  },
  tabView: {
    width: '100%',
  },
  labelText: {
    fontSize: 16,
    color: theme.black,
  },
  indicatorStyle: {
    width: '8%',
    marginLeft: 11.8,
    marginVertical: -1.5,
    backgroundColor: theme.pink,
    height: 3,
  },
  tabBar: {
    backgroundColor: theme.white,
    borderBottomWidth: 1.3,
    borderBottomColor: '#F2F2F2',
    height: 42,
  },
  boldLabel: {
    fontFamily: theme.bold,
  },
  regularLabel: {
    fontFamily: theme.regular,
    color: '#919191',
  },
});
