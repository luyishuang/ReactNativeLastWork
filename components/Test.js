import React, { Component } from 'react'
import { View, Text, AsyncStorage, StyleSheet, Image, Button, ScrollView, StatusBar, Dimensions, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';
import { Icon } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const { scale } = Dimensions.get('window');
const s = width / 640;
const goods = [
    {
        title: '上好佳',
        price: 36,
        img: require('../assets/one.jpg')
    },
    {
        title: '上好佳',
        price: 36,
        img: require('../assets/two.jpg')
    },
    {
        title: '上好佳',
        price: 36,
        img: require('../assets/one.jpg')
    },
    {
        title: '上好佳',
        price: 36,
        img: require('../assets/two.jpg')
    }
]

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            tits: []
        }
    }
    storeData = async () => {
        await AsyncStorage.setItem('userName', 'helloworld',
            () => { console.log('store success') }
        )
    }
    getData = () => {
        AsyncStorage.getItem('userName')
            .then((res) => console.log(res))
    }
    getTitle = () => {
        fetch('https://cnodejs.org/api/v1/topics')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    tits: res.data
                })
            })

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar backgroundColor='red'/>
                <TextInput placeholderTextColor='red'/>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput
                            placeholder='请输入商品名称'
                            style={{
                                width: 490 * s,
                                height: 50 * s,
                                padding: 0,
                                paddingLeft: 10
                            }} />
                        <Icon name='search' />
                    </View>
                </View>
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{ backgroundColor: '#f4f4f4' }}
                    data={goods}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.good}>
                            <Image source={item.img}
                                resizeMode='contain'
                                style={{
                                    height: 180 * s,
                                    marginTop: 60 * s
                                }}
                            />
                            <Text
                                style={{ marginTop: 20 }}
                            >
                                {item.title}
                            </Text>
                            <Text>{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 70 * s,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        width: 544 * s,
        height: 50 * s,
        backgroundColor: '#eeeeee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nav: {
        height: 73 * s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    good: {
        width: 290 * s,
        backgroundColor: '#fff',
        marginLeft: 20 * s,
        marginTop: 20 * s,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20
    }
})



//npm run android或者 react-native run-android,在模拟器或者真机上装的
//是测试版本的安装包,不要每天装一次,以后只需要执行npm start起服务即可,
//然后点开APP,服务界面就会编译文件

//adb reverse tcp:8081 tcp:8081 

//执行./gradlew ,打包出一个签名好的可用于发布的版本的安装包,不用于调试
//手机调试:
//1.打开开发者选项(选一种方式连接手机)
//2.测试：adb devices
//3.react-native run-android
//4.拔掉数据后，再接入的时候，不用再装，还是执行npm start,
//adb reverse tcp:8081 tcp:8081 
//点开APP即可
