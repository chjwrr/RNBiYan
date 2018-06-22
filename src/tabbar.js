/**
 * Created by chj on 2018/4/17.
 */
import  { TabBarBottom } from 'react-navigation'
import React from 'react'

import HomePage from './pages/tabbarPage/home'
import ContactPage from './pages/tabbarPage/contact'
import MomentPage from './pages/tabbarPage/moments'
import MinePage from './pages/tabbarPage/mine'

import TabbarIcon from './comment/tabbar/tabbarIcon';
import Color from './constance/staticColor';

const AppRootTabBarRouteConfigs = {
    Home: {
        screen: HomePage,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <TabbarIcon focused={focused} type='home' />
            ),
            tabBarOnPress:(obj)=>{
                console.log(obj);
                obj.jumpToIndex(obj.scene.index)
            },
        })
    },
    Contact: {
        screen: ContactPage,
        navigationOptions: {
            tabBarLabel: '通讯录',
            tabBarIcon: ({focused, tintColor}) => (
                <TabbarIcon focused={focused} type='contact' />
            ),
            tabBarOnPress:(obj)=>{
                console.log(obj);
                obj.jumpToIndex(obj.scene.index)
            },

        }
    },
    Moment: {
        screen: MomentPage,
        navigationOptions: {
            tabBarLabel: '朋友圈',
            tabBarIcon: ({focused, tintColor}) => (
                <TabbarIcon focused={focused} type='moment' />
            ),
            tabBarOnPress:(obj)=>{
                console.log(obj);
                obj.jumpToIndex(obj.scene.index)
            },
        }
    },
    Mine: {
        screen: MinePage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <TabbarIcon focused={focused} type='mine' />
            ),
            tabBarOnPress:(obj)=>{
                console.log(obj);
                obj.jumpToIndex(obj.scene.index)
            },
        }
    }
};

const AppRootTabBarNavigatorConfigs = {
    initialRoute: HomePage, // 默认选中tabbar
    tabBarComponent: TabBarBottom, // tabbar的位置，默认是下部
    tabBarPosition: 'bottom',
    lazy: true, //是否懒加载 == 是否同时加载tabbar对应的page
    tabBarOptions: {
        activeTintColor: Color.TABBAR_SELECT_COLOR, // 选中的颜色
        inactiveTintColor: Color.TABBAR_NORMAL_COLOR, // 未选中的颜色
        //showLabel: true, // 是否显示title，自定义tabbarItem时需设置false
        style: {
            backgroundColor: '#f5f5f5'
        }, // 设置tabbar的样式
        labelStyle: {
            //fontSize: 20,
            //fontWeight: 'bold'
        }, // 设置title 的样式
        iconStyle: {

        } // 设置icon的样式
    }
};
export default {
    AppRootTabBarRouteConfigs,
    AppRootTabBarNavigatorConfigs
}
