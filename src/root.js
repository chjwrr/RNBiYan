/**
 * Created by chj on 2018/4/20.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {StackNavigator} from "react-navigation";
import Navigator from './navigation'
import {
    ACTION_SAVE_ROUTEID
} from './action/action';


const Navigation = StackNavigator(Navigator.AppNavigationRouterConfigs, navigator.AppNavigationStackConfigs);


type Props = {};
class enter extends Component<Props> {
    render() {
        return (
                <Navigation onNavigationStateChange={(prevNav, nav, action)=>{
                            // 每次导航改变时，都会走这个方法，可以再次判断逻辑，比如切换tabar需要调用方法
                            // console.log('prevNav=',prevNav);
                            // console.log('nav=',nav);
                            // console.log('action=',action);

                             let route = {};
                             nav.routes.map((item)=>{
                                 route[item.routeName] = item.key
                             });
                            // 存 key 进行 goBack 到某一个页面 的方法，已不用 , 最新的react-navigation 已经提供新的方法可以直接使用
                            this.props.saveRouteNameAndId(route);

                }}/>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        saveRouteNameAndId: (obj)=>{
            dispatch(ACTION_SAVE_ROUTEID(obj))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(enter)
