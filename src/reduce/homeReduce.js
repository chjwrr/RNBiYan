/**
 * Created by chj on 2018/4/17.
 */
import * as Action from '../constance/actionType';
import Immutable from 'immutable'

const initState = Immutable.fromJS({
    abc: '默认值'
});

export default (state = initState, action)=>{
    switch (action.type){
        case Action.ACTION_IMMUTABLE:
            return state.set('abc',Immutable.fromJS(action.payload));
            break;

        default:
            return state;
    }
}