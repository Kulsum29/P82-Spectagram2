import React from "react";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import { createcreateBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createMaterialBottomTabNavigator()
const TabNav = () =>{
    return(
        <Tab.Navigator
            barStyle = {{ backgroundColor : '#4B1263', borderTopLeftRadius:50, borderTopRightRadius:50, overflow:'hidden'}}
            screenOptions={({route})=>({
                tabBarIcon: ({focused, color, size})=>{
                    let iconName;
                    if(route.name === 'Feed'){
                        iconName = focused ? 'book' : 'book-outline'
                    }
                    else if(route.name === 'Create'){
                        iconName = focused ? 'create' : 'create-outline'
                    }
                    return(
                        <Ionicons name = {iconName} size = {size} color= {color}/>
                    )
                }
            })}
                activeColor='#3FD300'
                inactiveColor='#BCA6C4'
           
        >
            <Tab.Screen name = 'Feed' component = {Feed}/>
            <Tab.Screen name = 'Create' component = {CreatePost}/>
        </Tab.Navigator>
    )
}
export default TabNav