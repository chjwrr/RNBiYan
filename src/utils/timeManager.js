/**
 * Created by chj on 2018/5/16.
 */
import moment from 'moment';

// 根据时间戳获取日期的具体信息
const getTimeDetailInfo = (unix)=>{
    let date = moment.unix(unix);
    return {
        year: date.get('year'),
        month: date.get('month')+1,
        day: date.get('date'),
        hour: date.get('hour'),
        minute: date.get('minute'),
        second: date.get('second'),
    };
};
// 时间戳格式化时间
const formatterTime = (unix,format)=>{
    let date = moment.unix(unix);
    return moment(date).format(format);
};




export default {
    getTimeDetailInfo,
    formatterTime
}