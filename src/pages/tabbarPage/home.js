/**
 * Created by chj on 2018/4/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Platform,
    CameraRoll,
    Clipboard
} from 'react-native'
import Color from '../../constance/staticColor';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import RNFS from 'react-native-fs';
import Toast from '@remobile/react-native-toast';

import {
    ACTION_MIDDLEWARE_HTTP
} from '../../action/action'

const ImageBaseUrl = 'https://cn.bing.com';

class home extends Component {

    constructor(props){
        super(props);
        this.state = {
            imageURL: '',
            images: [],
            txt: '犯错并非是阻挡人前进脚步的枷锁，而是健全心智的食粮。',
            txtSource: '妖精的尾巴',
            progressNum: 0
        };
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
        this.getImageRequest = this.getImageRequest.bind(this);
        this.getTextRequest = this.getTextRequest.bind(this);
        this.setImage = this.setImage.bind(this);
    }

    componentDidMount() {
        this.getImageRequest();
        this.getTextRequest();
    }
    // 获取图片
    getImageRequest(){
        const count = Math.floor(Math.random()*8);
        this.props.getImageData((data)=>{
            this.setState({
                imageURL:ImageBaseUrl + data.images[count].urlbase+ '_1080x1920.jpg',
                images: data.images
            })
        });
    }

    // 随机设置图片
    setImage(){
        const count = Math.floor(Math.random()*8);
        this.setState({
            imageURL:ImageBaseUrl + this.state.images[count].urlbase+ '_1080x1920.jpg',
        })
    }

    // 获取文字
    getTextRequest(){
        this.props.getTxtData((data)=>{
            this.setState({
                txt:data.text,
                txtSource: data.source
            })
        });
    }

    /*下载文件*/
    downloadFile() {
        // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)

        let downloadDest = '';
        if (Platform.OS === 'ios'){
            downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.jpg`;
        }else
            downloadDest = `${RNFS.DocumentDirectoryPath}/${((Math.random() * 1000) | 0)}.jpg`;


        const options = {
            fromUrl: this.state.imageURL,
            toFile: downloadDest,
            background: true,
            begin: (res) => {
                console.log('begin', res);
                console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            },
            progress: (res) => {
                let pro = res.bytesWritten / res.contentLength;
                this.setState({
                    progressNum: pro,
                });
            }
        };
        try {
            const ret = RNFS.downloadFile(options);
            ret.promise.then(res => {
                CameraRoll.saveToCameraRoll(downloadDest).then(() => {
                    Toast.showShortCenter('图片已经成功保存到相册');
                    this.deleteFile(downloadDest)
                }).catch((err) => {
                    Toast.showShortCenter('图片保存失败');
                    this.deleteFile(downloadDest)
                });
            }).catch(err => {

            });
        }
        catch (e) {
        }
    }
    /*删除文件*/
    deleteFile(filePath) {
        // create a path you want to delete

        return RNFS.unlink(filePath)
            .then(() => {
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch((err) => {
                console.log(err.message);
            });
    }
    render() {
        return <View style={styles.container}>
            <ImageBackground style={styles.container}
                             source={{uri: this.state.imageURL}}
                             resizeMode='cover' // cover   contain
            >
                <TouchableOpacity style={{justifyContent: 'flex-end',flexDirection: 'column', flex: 1}}
                                  onLongPress={()=>{
                                      this.downloadFile()
                                  }}
                                  onPress={()=>{
                                       this.getTextRequest();
                                       this.setImage()
                                  }}
                >
                    <View style={styles.view}>
                        <Text onLongPress={()=>{
                            Toast.showShortCenter('文字已经复制到粘贴板');
                            Clipboard.setString(this.state.txt);
                        }} style={styles.text}>{this.state.txt}</Text>
                        <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                            <Text style={styles.text}>《{this.state.txtSource}》</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR
    },
    view: {
        backgroundColor:'rgba(0, 0, 0, 0.2)',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    text: {
        color: 'white',
        lineHeight: 20
    }
});

function mapStateToProps(state) {
    return {
        abc: state.getIn(['homeRedux','abc'])
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getImageData:(success)=>{
            dispatch(ACTION_MIDDLEWARE_HTTP({
                url: 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8',
                method: 'get',
                success:(data)=>{
                    success(data);
                }
            }))
        },
        getTxtData:(success)=>{
            dispatch(ACTION_MIDDLEWARE_HTTP({
                url: 'https://api.lwl12.com/hitokoto/v1?encode=realjson',
                method: 'get',
                success:(data)=>{
                    success(data);
                }
            }))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(home)