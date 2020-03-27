import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,View,Text,StatusBar,TextInput,Image,ScrollView,Dimensions } from 'react-native';

const { width, height, scale } = Dimensions.get('window');
console.log(width, height, scale);

export default class Commodity extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor='transparent' translucent={true}/>

                <SafeAreaView>
                    <ScrollView>

                        {/* 顶部框 */}
                        <View style={styles.top}>
                            <View style={styles.topInput}>
                                <TextInput placeholder="请输入商品名称" placeholderTextColor="#999999" style={{ fontSize: 17, marginRight: 190 }} />
                                <Image source={require('../../assets/search.png')} style={{ width: 24, height: 24 }} />
                            </View>
                        </View>

                        {/* 选项 */}
                        <View style={styles.tabbar}>
                            <View style={styles.barBox}><Text style={{ color: '#f23030', textAlign: "center", lineHeight: 70, fontSize: 17 }}>综合</Text></View>
                            <View style={styles.barBox}><Text style={styles.boxText}>销量</Text></View>
                            <View style={styles.barBox}><Text style={styles.boxText}>新品</Text></View>
                            <View style={styles.barBox}>
                                <View style={styles.priceBox}>
                                    <Text style={styles.boxText}>价格</Text>
                                    <Image source={require('../../assets/jian.jpg')} style={{ width: 10, height: 17, marginLeft: 6 }} />
                                </View>
                            </View>
                            <View style={styles.barBox}><Text style={styles.boxText}>信用</Text></View>
                        </View>

                        {/* 商品 */}
                        <View style={styles.commodity}>
                            <View style={styles.innerBox}>
                                <View style={styles.box}>
                                    <View style={styles.foodImg}>
                                        <Image source={require("../../assets/one.jpg")} resizeMode="contain" style={{ width: 145, height: 180 }} />
                                    </View>
                                    <View style={styles.foodText}>
                                        <Text style={{ fontSize: 15, color: '#666666' }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                        <Text style={styles.price}>36.00</Text>
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.foodImg}>
                                        <Image source={require("../../assets/two.jpg")} resizeMode="contain" style={{ width: 180, height: 180 }} />
                                    </View>
                                    <View style={styles.foodText}>
                                        <Text style={{ fontSize: 15, color: '#666666' }}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                                        <Text style={styles.price}>36.00</Text>
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.foodImg}>
                                        <Image source={require("../../assets/one.jpg")} resizeMode="contain" style={{ width: 145, height: 180 }} />
                                    </View>
                                    <View style={styles.foodText}>
                                        <Text style={{ fontSize: 15, color: '#666666' }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                        <Text style={styles.price}>36.00</Text>
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.foodImg}>
                                        <Image source={require("../../assets/two.jpg")} resizeMode="contain" style={{ width: 180, height: 180 }} />
                                    </View>
                                    <View style={styles.foodText}>
                                        <Text style={{ fontSize: 15, color: '#666666' }}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                                        <Text style={styles.price}>36.00</Text>
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.foodImg}>
                                        <Image source={require("../../assets/one.jpg")} resizeMode="contain" style={{ width: 145, height: 180 }} />
                                    </View>
                                    <View style={styles.foodText}>
                                        <Text style={{ fontSize: 15, color: '#666666' }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                                        <Text style={styles.price}>36.00</Text>
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.foodImg}>
                                        <Image source={require("../../assets/two.jpg")} resizeMode="contain" style={{ width: 180, height: 180 }} />
                                    </View>
                                    <View style={styles.foodText}>
                                        <Text style={{ fontSize: 15, color: '#666666' }}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                                        <Text style={styles.price}>36.00</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 70,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8'
    },
    topInput: {
        width: 384,
        height: 50,
        marginTop: 10,
        backgroundColor: '#eeeeee',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingLeft: 5
    },
    tabbar: {
        backgroundColor: '#fff',
        height: 70,
        flexDirection: 'row',
        justifyContent: "center",
        flexWrap: 'wrap'
    },
    commodity: {
        textAlign: "center",
        backgroundColor: '#f4f4f4',
        height: 1350
    },
    barBox: {
        width: 85,
        height: 70
    },
    priceBox: {
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: "center",
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    boxText: {
        textAlign: "center",
        lineHeight: 70,
        fontSize: 17,
        color: "#333333"
    },
    innerBox: {
        marginTop: 2,
        marginLeft: 6,
        marginRight: 6,
        flexDirection: 'row',
        justifyContent: "center",
        flexWrap: 'wrap'
    },
    box: {
        backgroundColor: '#fff',
        width: 222,
        height: 400,
        marginTop: 12,
        marginRight: 6,
        marginLeft: 6
    },
    foodImg: {
        alignItems: 'center',
        height: 305,
        justifyContent: "center"
    },
    foodText: {
        height: 95,
        marginLeft: 8,
        marginRight: 1
    },
    price: {
        marginTop: 15,
        fontSize: 14,
        color: "#f23030"
    }
});

