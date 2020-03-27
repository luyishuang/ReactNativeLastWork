import React, { Component } from 'react'
import { View, Text, Dimensions, StatusBar, SafeAreaView, ScrollView, StyleSheet, ToastAndroid } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const { scale } = Dimensions.get('window');
const s = width / 640;

export default class Output extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            page: 1
        }
    }

    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?limit=12&page=' + this.state.page)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    tits: res.data
                })
            })
    }

    componentDidUpdate(preProps, PreState) {
        if (this.state.page != PreState.page) {
            fetch('https://cnodejs.org/api/v1/topics?limit=12&page=' + this.state.page)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        tits: res.data
                    })
                })
        }
    }

    addPage = () => {
        var page = this.state.page;
        page ++;
        this.setState({
            page: page
        })
    }

    lessPage = () => {
        var page = this.state.page;
        if (page > 1) {
            page--;
            this.setState({
                page: page
            })
        } else {
            ToastAndroid.show('已经是第一页，没有上一页了', 100);
        }
    }

    rendomState() {
        this.a = <Text style={{ color: '#000', fontSize: 15 }}>已回复</Text>;
        this.b = <Text style={{ color: 'red', fontSize: 15 }}>待回复</Text>;
        this.answer = parseInt(Math.random() * 10) % 2 === 0 ? this.a : this.b;
        return this.answer;
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.top}>
                            <View style={styles.topLeft}>
                                <Button onPress={() => Actions.pop()} style={{ backgroundColor: 'transparent' }}>
                                    <Icon name='left' size={20} color='#fff' />
                                </Button>
                            </View>
                            <View style={styles.topCenter}><Text style={styles.topCenterText}>我的发布</Text></View>
                            <View style={styles.topRight}><Icon name='menu' size={25} color='#fff' /></View>
                        </View>
                        <View style={{ marginTop: 6 }}>
                            {
                                this.state.tits.map((item) => (
                                    <View style={styles.listEach}>
                                        <View style={{ width: '55%', paddingLeft: 8 }}>
                                            <Text style={{ fontSize: 15 }}>
                                                {(item.title).length > 15 ? (item.title).substring(0, 15) + "..." : (item.title)}
                                            </Text>
                                        </View>
                                        <View style={{ width: '30%', paddingLeft: 8 }}>
                                            <Text style={{ fontSize: 15 }}>{(item.create_at).substring(0, 10)}</Text>
                                        </View>
                                        <View>
                                            {this.rendomState()}
                                        </View>
                                    </View>
                                ))
                            }
                            <View style={styles.btnView}>
                                <Button
                                    style={styles.btn1}
                                    onPress={() => { this.lessPage() }}
                                >上一页</Button>
                                <View style={styles.ye}>
                                    <Text style={{ fontSize: 18 }}>第{this.state.page}页</Text>
                                </View>
                                <Button
                                    style={styles.btn2}
                                    onPress={() => { this.addPage() }}
                                >下一页</Button>
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
        width: width,
        height: 70 * s,
        backgroundColor: '#f23030',
        flexDirection: 'row',
        alignItems: 'center'
    },
    topLeft: {
        width: width * 0.1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    topCenter: {
        width: width * 0.8,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    topCenterText: {
        fontSize: 19,
        color: "#fff"
    },
    topRight: {
        width: width * 0.1
    },
    listEach: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        width: width,
        height: 70 * s,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 80 * s
    },
    btn1: {
        width: width * 0.28,
        height: 60 * s,
        lineHeight: 60 * s,
        backgroundColor: '#f23030',
        color: '#fff',
        borderRadius: 20,
        marginLeft: 5
    },
    btn2: {
        width: width * 0.28,
        height: 60 * s,
        lineHeight: 60 * s,
        backgroundColor: '#f23030',
        color: '#fff',
        borderRadius: 20,
        marginRight: 5
    },
    ye: {
        width: width * 0.4,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
