import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import TabNav from "./TabNavigator";

const Drawer = createDrawerNavigator()
const DrawerNav = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'Home' component = {TabNav}/>
            <Drawer.Screen name='Profile' component = {Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNav