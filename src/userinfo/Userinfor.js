// import React, { Component } from 'react'
// import { Text, View, FlatList } from 'react-native';
// let actionArr = [
//     { title: '维修保养', icon: 'home' },
//     { title: '维修保养', icon: 'home' },
//     { title: '维修保养', icon: 'home' },
//     { title: '维修保养', icon: 'home' },
//     { title: '维修保养', icon: 'home' },
//     { title: '维修保养', icon: 'home' }
// ];

// export default class Userinfor extends Component {
//     constructor() {
//         super();
//     }
//     render() {
//         return (
//             <View>
//                 {
//                     [
//                         <View><Text>已回复</Text></View>,
//                         <View><Text>已回复</Text></View>
//                     ]
//                 }

//                 {
//                     actionArr.map((item, index) => {
//                         let ran = Math.random();
//                         console.log(ran);
//                         if (index == 5) {
//                             return <View onPress={() => { }}></View>
//                         }
//                         return (<View style={{
//                             flexDirection: 'row',
//                             justifyContent: 'space-around'
//                         }}>
//                             <Text>{item.title}</Text>
//                             {
//                                 ran > 0.5 ?
//                                     <Text>已回复</Text> :
//                                     <Text style={{ color: 'red' }}>未回复</Text>
//                             }
//                             {/* <Text style={{color:ran>0.5?'#000':'red'}}>
//                                 {ran>0.5?'已回复':'待回复'}
//                             </Text> */}
//                         </View>
//                         )
//                     })
//                 }
//             </View>
//         )
//     }
// }

import React, { Component } from 'react'
import { BackHandler,View, Text, Dimensions, ScrollView, StyleSheet, FlatList, StatusBar, SafeAreaView, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import { myFetch } from '../utils'

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const options = {
    title: '选择方式',
    storageoptions: {
        skipBackup: true,
        path: 'images'
    },
    chooseFromLibraryButtonTitle: '选择相册',
    takePhotoButtonTitle: '拍照',
    cancelButtonTitle: '取消'
};

export default class Doc extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: '',
            username: '',
            pwd: '',
            isloading: false
        }
    }

    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else {
                AsyncStorage.setItem('userImage', response.uri,
                    () => { console.log('success') }
                )
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,
                })
            }
        });
    }

    exit = () => {
        AsyncStorage.clear();
        Actions.login();
    }

    componentDidMount() {
        AsyncStorage.getItem('userImage').
            then((res) => {
                const source = { uri: res };
                this.setState({
                    imageUrl: source
                });
                console.log(this.state.imageUrl)
            })
    }
    render() {
        return (
            <>
                <StatusBar backgroundColor='transparent' translucent={true} />

                <SafeAreaView>
                    <ScrollView>

                        {/* 顶部框 */}
                        <View style={styles.top}>
                            <View style={styles.headImage}>
                                <Button onPress={() => { this.takephoto() }}>
                                    <Image source={this.state.imageUrl} style={{ width: width * 0.2, height: width * 0.2, borderRadius: 50 }} />
                                    {/* <Image source={require('../images/head.jpg')} style={{ width: width * 0.2, height: width * 0.2, borderRadius: 50 }} /> */}
                                </Button>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 17, marginTop: 15 }}>BINNU DHILLON</Text>
                            </View>
                        </View>

                        {/* 我的个人中心 */}
                        <View style={styles.me}>
                            <View style={styles.metop}>
                                <Icon name='user' size={30} style={{ marginLeft: 18, marginRight: 18 }} color='#4f4e4e' />
                                <Text style={{ fontSize: 16, color: '#4f4e4e' }}>我的个人中心</Text>
                            </View>
                            {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                                {
                                    data.map((data,index) => (
                                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',
                                        width:100,height:100,backgroundColor:'red'}}>
                                            <Icon1 name={data.icon} />
                                            <Text>{data.text}</Text>
                                        </View>
                                    ))
                                }
                            </View> */}
                            <FlatList
                                style={{ marginTop: 10 }}
                                numColumns={3}
                                data={[
                                    {
                                        icon: 'user',
                                        text: '账户管理',
                                    },
                                    {
                                        icon: 'star',
                                        text: '收货地址',
                                    },
                                    {
                                        icon: 'idcard',
                                        text: '我的信息'
                                    },
                                    {
                                        icon: 'star',
                                        text: '我的订单',
                                    },
                                    {
                                        icon: 'qrcode',
                                        text: '我的二维码',
                                    },
                                    {
                                        icon: 'dollar',
                                        text: '我的积分'
                                    },
                                    {
                                        icon: 'star',
                                        text: '我的收藏'
                                    }
                                ]}
                                renderItem={({ item }) => (
                                    <View style={{
                                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                        width: width * 0.3, height: width * 0.16, marginLeft: width * 0.025
                                    }}>
                                        <Icon name={item.icon} style={{ marginBottom: 10 }} size={25} color='#aeaeae' />
                                        <Text style={{ color: '#4f4e4e', fontSize: 15 }}>{item.text}</Text>
                                    </View>
                                )}
                            />
                        </View>

                        {/* E族活动 */}
                        <View style={styles.Ezu}>
                            <View style={styles.metop}>
                                <Icon name='tag' size={40} style={{ marginLeft: 18, marginRight: 18 }} color='#4f4e4e' />
                                <Text style={{ fontSize: 16, color: '#4f4e4e' }}>E族活动</Text>
                            </View>
                            {/* <FlatList
                                style={{ marginTop: 10 }}
                                numColumns={3}
                                data={[
                                    {
                                        icon: 'legal',
                                        text: '居家维修保养',
                                    },
                                    {
                                        icon: 'taxi',
                                        text: '出行接送',
                                    },
                                    {
                                        icon: 'user-o',
                                        text: '我的受赠人'
                                    },
                                    {
                                        icon: 'hotel',
                                        text: '我的住宿优惠',
                                    },
                                    {
                                        icon: 'font-awesome',
                                        text: '我的活动',
                                    },
                                    {
                                        icon: 'send-o',
                                        text: '我的发布'
                                    }
                                ]}
                                renderItem={({ item }) => (
                                    <View style={{
                                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                        width: width * 0.3, height: width * 0.16, marginLeft: width * 0.025
                                    }}>
                                        <Icon3 name={item.icon} style={{ marginBottom: 10 }} size={25} color='#aeaeae' />
                                        <Text style={{ color: '#4f4e4e', fontSize: 15 }}>{item.text}</Text>
                                    </View>
                                )}
                            /> */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                <View style={{
                                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    width: width * 0.3, height: width * 0.16, marginLeft: width * 0.025
                                }}>
                                    <Icon name={'star'} style={{ marginBottom: 10 }} size={25} color='#aeaeae' />
                                    <Text style={{ color: '#4f4e4e', fontSize: 15 }}>居家维修保养</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    width: width * 0.3, height: width * 0.16, marginLeft: width * 0.025
                                }}>
                                    <Icon name={'car'} style={{ marginBottom: 10 }} size={25} color='#aeaeae' />
                                    <Text style={{ color: '#4f4e4e', fontSize: 15 }}>出行接送</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    width: width * 0.3, height: width * 0.16, marginLeft: width * 0.025
                                }}>
                                    <Icon name={'user'} style={{ marginBottom: 10 }} size={25} color='#aeaeae' />
                                    <Text style={{ color: '#4f4e4e', fontSize: 15 }}>我的受赠人</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{
                                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    width: width * 0.3, height: width * 0.16, marginLeft: width * 0.025
                                }}>
                                    <Icon name={'home'} style={{ marginBottom: 10 }} size={25} color='#aeaeae' />
                                    <Text style={{ color: '#4f4e4e', fontSize: 15 }}>我的住宿优惠</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    width: width * 0.3, height: width * 0.16, marginLeft: width * 0.025
                                }}>
                                    <Icon name={'flag'} style={{ marginBottom: 10 }} size={25} color='#aeaeae' />
                                    <Text style={{ color: '#4f4e4e', fontSize: 15 }}>我的活动</Text>
                                </View>

                                <Button onPress={() => Actions.output()}>
                                    <View style={{
                                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                        width: width * 0.3, height: width * 0.16, marginLeft: width * 0.025
                                    }}>
                                        <Icon name={'star'} style={{ marginBottom: 10 }} size={25} color='#aeaeae' />
                                        <Text style={{ color: '#4f4e4e', fontSize: 15 }}>我的发布</Text>
                                    </View>
                                </Button>
                            </View>
                        </View>

                        {/* 退出 */}
                        {/* <View style={styles.botm}>
                            <Text style={{ color: '#a4a4a4' }}>BINNU DHILLON  |  退出</Text>
                        </View> */}
                        <View style={{width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    width: '80%',
                                    height: 40,
                                    backgroundColor: '#f23030',
                                    marginTop: 30,
                                    marginBottom:30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius:5,
                                    
                                }}
                                onPress={this.exit}>
                                <Text style={{color:'#fff'}}>退出登录</Text>
                            </TouchableOpacity>
                        </View>


                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        width: width,
        height: height * 0.27,
        backgroundColor: '#f23030',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headImage: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff'
    },

    me: {
        width: width,
        height: height * 0.37,
        backgroundColor: '#fff'
    },
    metop: {
        width: width,
        height: height * 0.08,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee'
    },
    Ezu: {
        width: width,
        height: height * 0.30,
        backgroundColor: '#fff',
        marginTop: 8
    },
    botm: {
        height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})