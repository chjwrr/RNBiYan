/**
 * Created by chj on 2018/4/17.
 */
import Immutable from 'immutable'

const initState = Immutable.fromJS({

});

export default (state = initState, action)=>{
    switch (action.type){


        default:
            return state;
    }
}