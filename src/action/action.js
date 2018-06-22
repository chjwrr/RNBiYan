/**
 * Created by chj on 2018/4/17.
 */
import * as Action from '../constance/actionType';
import {createAction} from 'redux-actions';

// 保存page的key，用于路由跳转
export const ACTION_SAVE_ROUTEID = createAction(Action.ACTION_SAVE_ROUTEID);

// 自定义网络请求中间件
export const ACTION_MIDDLEWARE_HTTP = createAction(Action.ACTION_MIDDLEWARE_HTTP);
