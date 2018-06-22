/**
 * Created by chj on 2018/4/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Color from '../../constance/staticColor';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Immutable from 'immutable';

class contact extends Component {

    static navigationOptions = {
        headerTitle: '通讯录',
        headerLeft: (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginLeft: 10}} onPress={()=>{
                }}>
                    <Text>添加</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 10}}>
                    <Text>删除</Text>
                </TouchableOpacity>
            </View>
        ),
        headerStyle: {elevation: 0, shadowOpacity: 0} // 导航条样式
    };

    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return <View style={styles.container}>
            <TouchableOpacity style={{marginLeft: 10}} onPress={()=>{
            }}>
                <Text>添加</Text>
            </TouchableOpacity>

        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR
    },
    button: {
        marginHorizontal: 10,
        height: 44,
        backgroundColor: 'green',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 17
    }
});
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(contact)