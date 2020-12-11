import React from 'react';
import Home from './../screen/Home';
import More from './../screen/More';
import ToBeDone from './../screen/ToBeDone';
import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// navegação por abas 
const Tab = createBottomTabNavigator();


export default class Tabs extends React.Component{
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                backgroundColor: 'black',
                activeTintColor: 'white',
                style: {
                    backgroundColor: 'black',
                    borderTopColor: 'transparent'
                }
            }}>
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen name="Search" component={ToBeDone} 
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ focused, color, size }) => (
                    <Feather name="search" color={color} size={size} />
                    ),
                }}           
            />
            <Tab.Screen name="Em Breve" component={ToBeDone} 
                options={{
                    tabBarLabel: 'Soon',
                    tabBarIcon: ({ focused, color, size }) => (
                    <MaterialIcons name="perm-media" color={color} size={size} />
                    ),
                }}           
            />
            <Tab.Screen name="Download" component={ToBeDone} 
                options={{
                    tabBarLabel: 'Downloads',
                    tabBarIcon: ({ focused, color, size }) => (
                    <Feather name="download" color={color} size={size} />
                    ),
                }}           
            />
            <Tab.Screen name="More" component={More} 
                options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ focused, color, size }) => (
                    <Feather name="menu" color={color} size={size} />
                    ),
                }}           
            />
        </Tab.Navigator>
            
        )
    }
}