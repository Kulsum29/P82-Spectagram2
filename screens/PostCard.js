import React from "react";
import {Text,View, StyleSheet,Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const imgs = {
    "image_1":require("../assets/image_1.jpg"),
    "image_2":require("../assets/image_2.jpg"),
    "image_3":require("../assets/image_3.jpg"),
    "image_4":require("../assets/image_4.jpg"),
    "image_5":require("../assets/image_5.jpg"),
    "image_6":require("../assets/image_6.jpg"),
    "image_7":require("../assets/image_7.jpg")
}
export default class PostCard extends React.Component{
    render(){
        
        return(
            <View style={styles.viewStyle}>
                <View style={styles.cardStyle}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/profile_img.png')} style={{width:30, height:30, margin:5}}/>
                    <Text style={{alignSelf:'center', fontWeight:'bold'}}>
                        {this.props.post.Author}
                    </Text>
                    </View>
               
                    <Image source={imgs[this.props.post.url]} style={styles.pic}/>
                    <View style={{flexDirection:'row', paddingTop:10}}>
                    <Text style={{fontWeight:'bold'}}>
                        {this.props.post.Author}
                    </Text>
                    <Text style={{paddingLeft:20}}>
                        {this.props.post.Caption}
                    </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Ionicons name="heart" size={30} color={'red'}/>
                    <Text style={{color:'red', alignSelf:'center', paddingLeft:10}}>
                        {this.props.post.likes} people liked this
                    </Text>
                    </View>
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    viewStyle : {
        flex:1,
        justifyContent : 'center',
        alignItems:'center',
        backgroundColor:'#BCA6C4'
    },
    cardStyle:{
        backgroundColor:'white',
        padding:20,
        margin:10,
        borderRadius:30
    },
    pic:{
        width:700,
        height:500
    }
})