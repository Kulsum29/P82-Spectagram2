import React from "react";
import {Text,View, StyleSheet} from 'react-native'

export default class Profile extends React.Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text>
                    Profile
                </Text>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    viewStyle : {
        flex:1,
        justifyContent : 'center',
        alignItems:'center',
        backgroundColor:'honeydew'
    }
})