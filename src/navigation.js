/**
 * Created by chj on 2018/4/17.
 */
import { TabNavigator } from 'react-navigation'
import APPTabbar from './tabbar';

const Tabbar = TabNavigator(APPTabbar.AppRootTabBarRouteConfigs, APPTabbar.AppRootTabBarNavigatorConfigs);
import Home from './pages/tabbarPage/home';

const AppNavigationRouterConfigs = {
    // Tabbar: {
    //     screen: Tabbar,
    // },
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
};
const AppNavigationStackConfigs = {
    initialRouteName: 'Home',
    mode: 'card',
    headerMode: 'screen',
    onTransitionStart:(()=>{
        console.log('onTransitionStart');
    }),
    onTransitionEnd: (()=>{
        console.log('onTransitionEnd');
    })
};
export default {
    AppNavigationRouterConfigs,
    AppNavigationStackConfigs
}

