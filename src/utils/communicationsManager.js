/**
 * Created by chj on 2018/5/16.
 */
import Communications from 'react-native-communications';

// 打电话
const tel = (phone)=>{
    Communications.phonecall(phone, false);
};

// 发信息
const message = (phone, text)=>{
    Communications.text(phone,text);
};

// 发邮件
const email = ({email, title, body})=>{
    Communications.email([email],null,null,title,body)
};

// 打开网址
const web = (url)=>{
    Communications.web(url)
};

export default {
    tel,
    message,
    email,
    web
}