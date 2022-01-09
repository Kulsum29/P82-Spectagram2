import React from "react";
import {Text,View,StyleSheet,Image, FlatList} from 'react-native'
import PostCard from './PostCard'
let posts = require('../temp_posts.json')
export default class Feed extends React.Component{


    keyExtractor = (item,index) => index.toString()
    renderItem  = ({item: post})=>{
        return <PostCard post = {post}/>
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <View style={styles.title}>
                <Image source={require('../assets/logo.png')} style={{'width':50, 'height':50, 'margin':20, backgroundColor:'#BCA6C4'}}/>
                <Text style={{color:'white', fontSize:'xxx-large', fontFamily:'Georgia'}}>
                    Spectagram
                </Text>
                </View>
                <View style={styles.list}>
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    data={posts}
                    renderItem={this.renderItem}
                    />
                </View>
                
            </View>
        )
    }
}
var styles = StyleSheet.create({
    viewStyle : {
        flex:1,
        justifyContent : 'flex-start',
        alignItems:'center',
        backgroundColor:'#BCA6C4'
    },
    title:{
        flex:0.10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    },
    list:{
        flex:0.8
    }
})