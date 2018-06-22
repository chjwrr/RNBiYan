
// 前方补0方法
const leadingZeros = (num, length = 2) => {

    let length_ = length;
    let num_ = num;

    num_ = String(num_);
    while (num_.length < length_) {
        num_ = '0' + num_;
    }
    return num_;
};
/**
 * 截取手机号
 * @param  {[type]} phone [description]
 * @return {[type]}       [description]
 */
const newPhone = (phone)=>{
    if(phone && phone.length === 11){
        let temp = phone;
        return phone.substr(0,3)+'****'+temp.substr(7,11);
    }
    return '';
};


export default {
    leadingZeros,
    newPhone
};
