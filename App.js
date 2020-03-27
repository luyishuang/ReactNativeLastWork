import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, BackHandler, ToastAndroid, AsyncStorage } from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen'
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import { Icon } from '@ant-design/react-native';
import Mybox from './components/Mybox';
import ShowMyName from './components/ShowMyName';
// import Login from './components/Login';
// import Home from './components/Home';
import Message from './components/Message';
import Mylist from './components/Mylist';
import LocalPage from './components/LocalPage';
import Test from './components/Test';
import Myts from './components/Myts';
import Demo01 from './tsdemos/Demo01'
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Userinfor from './src/userinfo/Userinfor';
import Login from './src/common/Login'
import SwiperPage from './src/common/SwiperPage';
import Output from './src/userinfo/Output';
import Register from './src/common/Register';

//App logo:将D:\A DAY DAY UP\course-react\appDemo\android\app\src\main\res下的文件夹下的图片换成自己的
//启动画面:react-native-splash-screen
//如果第一次安装,一般来说都有一个引导页(普通轮播图),注意本地存储记录下状态
//看功能,是否需要先登录,如果需要先登录,登录完记录状态(用户信息)
//再次进入的时候，也要从本地判断是否登录过

//react native 本地存储是异步的

// 图标安装完后，要link，link成功后卸载App，再重新 npm run android
// 重装完以后，App停止运行的，卸载除了 react-native-router-flux之外的没用的包
// yarn remove 包名   删除包
// 每新装完一个包，服务就会自动停止

console.disableYellowBox = true;//去掉黄色提示框
const rootUrl = 'https://www.fastmock.site/mock/1cdded245792812c8887119fb9ea947f/api';

const App = () => {
  let [isLogin, setLogin] = useState(false);
  let [isInstall, setInstall] = useState(true);
  let now = 0;
  let init = () => {
    // AsyncStorage.clear();
    AsyncStorage.getItem('isInstall')
      .then(res => {
        console.log('isinstall', res)
        if (res) {
          setInstall(false);
        }
      })
    AsyncStorage.getItem('user')
      .then(res => {
        let user = JSON.parse(res)
        console.log(user)
        if (!user) {
          SplashScreen.hide();
        }
        if (user && user.token) {
          setLogin(true);
          SplashScreen.hide();
        }
      })
  }
  useEffect(() => {
    init();
  }, [])
  let afterInstall = () => {
    console.log('after install')
    setInstall(false)
  }
  if (isInstall) {
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }

  return (
    <Router
      backAndroidHandler={() => {
        if (Actions.currentScene != 'homePage') {
          Actions.pop();
          return true;
        }
        else {
          if (new Date().getTime() - now < 2000) {
            BackHandler.exitApp();
          }
          else {
            ToastAndroid.show('确定要退出吗', 100);
            now = new Date().getTime();
            return true;
          }
        }

      }}
    >
      <Overlay>
        <Modal key="modal" hideNavBar>
          <Lightbox key="lightbox">
            <Drawer
              key="drawer"
              contentComponent={() => <Text>drawer</Text>}
              drawerIcon={() => <Icon name="menu" />}
              drawerWidth={400}
            >
              <Scene key="root" hideNavBar>
                <Tabs
                  key='tabbar'
                  activeTintColor="#f23030"
                  inactiveTintColor="#ababab"
                  tabBarStyle={{ backgroundColor: '#fff', height: 60 }}
                >
                  {/* 首页栏 */}
                  <Scene key='homePage'
                    hideNavBar
                    title='首页'
                    icon={
                      ({ focused }) => <Icon
                        color={focused ? '#f23030' : '#ababab'}
                        name="home"
                        size={30}
                      />
                    }

                  >
                    <Scene key="homePage" component={Home} />
                  </Scene>

                  {/* 商品分类 */}
                  <Scene key='goodsPage'
                    hideNavBar
                    title='商品分类'
                    icon={
                      ({ focused }) => <Icon
                        color={focused ? '#f23030' : '#ababab'}
                        name="menu"
                        size={30}
                      />
                    }
                  >

                    <Scene key="goods" component={Goods} />
                    {/* <Scene
                      key="msgdetail"
                      hideTabBar
                      component={MsgDetail}
                    /> */}
                  </Scene>
                  {/* 用户中心 */}
                  <Scene
                    key='userPage'
                    hideNavBar
                    hideDrawerButton
                    icon={({ focused }) =>
                      <Icon
                        color={focused ? '#f23030' : '#ababab'}
                        name='user'
                        size={30}
                      />}
                    title="用户中心"
                  >
                    <Scene key="my" hideNavBar component={Userinfor} />
                    <Scene key="output" hideTabBar hideNavBar component={Output} />
                  </Scene>
                </Tabs>
              </Scene>
            </Drawer>
            {/* <Scene key='light' component={Mybox} /> */}
          </Lightbox>

          <Scene initial={!isLogin} key="login" component={Login} />
          <Scene key="register" component={Register} />

          {/* <Scene key="login" component={ShowMyName} /> */}
          {/* <Scene key="login1" component={Login} /> */}
        </Modal>
        {/* <Scene component={Message} /> */}
      </Overlay>
    </Router>
  );
};


export default App;