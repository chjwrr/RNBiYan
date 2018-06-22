/**
 * Created by chj on 2018/4/20.
 */
import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import PropTypes from 'prop-types';

import Color from '../../constance/staticColor';

type Props = {};
export default class tabbarIcon extends Component<Props> {

    render() {

        let subView;
        const styleColor = {color: this.props.focused ? Color.TABBAR_SELECT_COLOR : Color.TABBAR_NORMAL_COLOR};
        switch (this.props.type) {
            case 'home':
                subView = <Text style={[styles.text, styleColor]}>
                    &#xe64e;
                </Text>;
                break;
            case 'contact':
                subView = <Text style={[styles.text, styleColor]}>
                    &#xe60e;
                </Text>;
                break;
            case 'moment':
                subView = <Text style={[styles.text, styleColor]}>
                    &#xe724;
                </Text>;
                break;
            case 'mine':
                subView = <Text style={[styles.text, styleColor]}>
                    &#xe60c;
                </Text>;
                break;
            default:
                break;
        }

        return (
            <View>
                { subView }
            </View>

        );
    }
};
const styles = StyleSheet.create({
    text:{
        fontFamily: 'iconfont',
        fontSize: 25
    }
});
tabbarIcon.propTypes = {
    focused: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
};
tabbarIcon.defaultProps = {
};
