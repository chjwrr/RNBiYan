/**
 * Created by chj on 2018/4/17.
 */

// 原本方式，reducer 里面处理的是原生的js
// import {combineReducers} from 'redux'

// reducer 处理的是 immutable 格式的数据
import { combineReducers } from 'redux-immutable'

import homeRedux from './homeReduce'
import contactRedux from './contactReduce'
import momentRedux from './momentReduce'
import mineRedux from './mineReduce'
import routeRedux from './routeReduce'

const AppReducer = combineReducers({
    homeRedux,
    contactRedux,
    momentRedux,
    mineRedux,
    routeRedux
});

export default AppReducer
