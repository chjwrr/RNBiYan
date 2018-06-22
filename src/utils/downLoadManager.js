/**
 * Created by chj on 2018/5/16.
 */
import RNFS from 'react-native-fs';

/*下载文件*/
const download = ({fromUrl, type, begin, progress, success, fail})=> {

    // 下载到目录
    const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.${type}`;

    const options = {
        fromUrl: fromUrl,
        toFile: downloadDest,
        background: true,
        begin: (res) => {
            begin(res.contentLength)
        },
        progress: (res) => {
            let pro = res.bytesWritten / res.contentLength;
            progress(pro)
        }
    };
    try {
        const ret = RNFS.downloadFile(options);
        ret.promise.then(res => {
            success(downloadDest)
        }).catch(err => {
            fail(err)
        });
    }
    catch (e) {
        console.log(error);
        fail(error)
    }

};
// 上传
const upload = ({uploadURL, formData, success, fail})=> {
    fetch(uploadURL,{
        method:'POST',
        headers:{
            'Content-Type':'multipart/form-data',
        },
        body:formData,
    })
        .then((response) => response.text() )
        .then((responseData)=>{
            success(responseData)
        })
        .catch((error)=>{
            fail(error)
    });
};

export default {
    download,
    upload
}