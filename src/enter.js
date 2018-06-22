/**
 * Created by chj on 2018/4/17.
 */

import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Root from './root'

import reducer from './reduce/rootReduce';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; // Provider 包裹住 项目，则项目里面所有的 js 都可以访问到 store


// 中间件 redux-logger 用于输出信息
import { createLogger } from 'redux-logger'

// 中间件 redux-thunk 用于增强dispatch，可以传入函数
import thunk from 'redux-thunk';

// 中间件 redux-thunk 用于增强dispatch，可以传入 promise 对象
import promise from 'redux-promise'

// 自定义的中间件，用于网络请求
import httpRequest from './middleware/httpRequest';


// 不使用中间件 创建方法
// const store = createStore(reducer);


// 使用中间件 创建方法
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(httpRequest, thunk , promise, logger)(createStore);
const store = createStoreWithMiddleware(reducer);



type Props = {};
export default class enter extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}
