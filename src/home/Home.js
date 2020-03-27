import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView, StyleSheet, TextInput, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

// console.log(width, height);

export default class Home extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor='transparent' translucent={true}/>

                <SafeAreaView>
                    <ScrollView>
                        {/* 顶部框 */}
                        <View style={styles.top}>
                            <View style={styles.topInput}>
                                <Icon name="search" color="#fff" size={25} />
                                <TextInput
                                    placeholder="请输入您要搜索的关键字"
                                    placeholderTextColor="#fff"
                                    style={{ fontSize: 15 }}
                                />
                            </View>
                            <View style={styles.shopView}>
                                <Icon name="shopping" color="#fff" size={25} />
                            </View>
                        </View>

                        {/* 轮播图 */}
                        <View style={styles.lunbo}>
                            <Swiper
                                showsButtons={false}
                                autoplay={true}
                                paginationStyle={{ bottom: 9 }}
                                dot={<View style={{
                                    backgroundColor: '#fff',
                                    width: 10,
                                    height: 10,
                                    marginLeft: 15,
                                    borderRadius: 20
                                }} />}
                                activeDot={<View style={{
                                    backgroundColor: '#fd0304',
                                    width: 10,
                                    height: 10,
                                    marginLeft: 15,
                                    borderRadius: 20
                                }} />}
                            >
                                <View>
                                    <Image source={require('../../assets/lunbo.jpg')}
                                        resizeMode="cover"
                                        style={{ width: width, height: height * 0.3 }}
                                    />
                                </View>
                                <View>
                                    <Image source={require('../../assets/lunbo2.jpg')}
                                        resizeMode="cover"
                                        style={{ width: width, height: height * 0.3 }}
                                    />
                                </View>
                                <View>
                                    <Image source={require('../../assets/lunbo.jpg')}
                                        resizeMode="cover"
                                        style={{ width: width, height: height * 0.3 }}
                                    />
                                </View>
                            </Swiper>
                        </View>

                        {/* 四个选项 */}
                        <View style={styles.fourList}>
                            <View style={styles.everyList}>
                                <View style={styles.listLeft}>
                                    <View style={[styles.yuan, styles.fen]}>
                                        <Image source={require('../../assets/gongju.jpg')}
                                            resizeMode="center"
                                            style={{ width: 40, height: 40 }} />
                                    </View>
                                    <Text style={styles.listText}>居家维修保养</Text>
                                </View>
                                <Icon name="right" size={20} color='#cecece' />
                            </View>
                            <View style={styles.everyList}>
                                <View style={styles.listLeft}>
                                    <View style={[styles.yuan, styles.huang]}>
                                        <Image source={require('../../assets/zhusu.jpg')} resizeMode="center" style={{ width: 40, height: 40 }} />
                                    </View>
                                    <Text style={styles.listText}>住宿优惠</Text>
                                </View>
                                <Icon name="right" size={20} color='#cecece' />
                            </View>
                            <View style={styles.everyList}>
                                <View style={styles.listLeft}>
                                    <View style={[styles.yuan, styles.lv]}>
                                        <Image source={require('../../assets/chuxing.jpg')} resizeMode="center" style={{ width: 40, height: 40 }} />
                                    </View>
                                    <Text style={styles.listText}>出行接送</Text>
                                </View>
                                <Icon name="right" size={20} color='#cecece' />
                            </View>
                            <View style={styles.everyList}>
                                <View style={styles.listLeft}>
                                    <View style={[styles.yuan, styles.lan]}>
                                        <Image source={require('../../assets/huodong.jpg')} resizeMode="center" style={{ width: 40, height: 40 }} />
                                    </View>
                                    <Text style={styles.listText}>E族活动</Text>
                                </View>
                                <Icon name="right" size={20} color='#cecece' />
                            </View>
                        </View>

                        {/* 发布需求按钮 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>发布需求</Text>
                            </TouchableOpacity>
                        </View>

                        {/* 最下面字 */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'center', marginTop: 23
                        }}>
                            <Text style={{ color: '#a9a9a9', fontSize: 12 }}>©E族之家 版权所有</Text>
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
        height: 60,
        backgroundColor: "#f23030",
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 999
    },
    topInput: {
        width: width * 0.8,
        height: 40,
        backgroundColor: '#fbb8b8',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 15,
        paddingLeft: 20
    },
    shopView: {
        width: width * 0.2,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1
    },
    lunbo: {
        width: width,
        height: height * 0.3,
        marginTop: -50
    },
    fourList: {
        width: width,
        height: height * 0.45,
    },
    everyList: {
        width: width,
        height: height * 0.1,
        backgroundColor: '#fff',
        marginTop: 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listLeft: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    yuan: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fen: {
        backgroundColor: '#ffcccc'
    },
    huang: {
        backgroundColor: '#ffe1b1'
    },
    lv: {
        backgroundColor: "#bfe6a8"
    },
    lan: {
        backgroundColor: '#c3ddf2'
    },
    listText: {
        fontSize: 15,
        color: "#333333",
        marginLeft: 30
    },
    btn: {
        width: width * 0.8,
        height: height * 0.06,
        backgroundColor: '#f23030',
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
