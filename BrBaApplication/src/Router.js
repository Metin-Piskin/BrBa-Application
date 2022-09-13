import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import İcon from 'react-native-vector-icons/FontAwesome5';
import auth from "@react-native-firebase/auth";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "./Pages/Home";
import Contents from './Pages/Contents';
import Profile from './Pages/Profile';
import Login from './Pages/Auth/Login';
import Sign from './Pages/Auth/Sign';

import { Breaking, Bad, TabBarBreakingBad } from './Component/Svc/İcons';

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#B8A739",
                tabBarInactiveTintColor: "#fff",
                tabBarActiveBackgroundColor: '#199458',
                tabBarInactiveBackgroundColor: '#066337',
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: '#066337',
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: '#066337'
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#fff",
                    },
                    headerTitleAlign: "center",
                    headerTitle: "Home",
                    header: () => (
                        <View style={{ paddingLeft: 75, backgroundColor: '#066337', flexDirection: 'row', justifyContent: 'center' }}>
                            <Breaking />
                            <Bad />
                        </View>
                    ),
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <İcon name="home" color={color} size={25} />
                        }
                        return <İcon name="home" color={color} size={25} />
                    }
                }}
            />
            <Tab.Screen
                name="ContentsScreen"
                component={Contents}
                options={{
                    headerStyle: {
                        backgroundColor: '#066337'
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return (
                                <View style={{ flexDirection: 'row' }}>
                                    <TabBarBreakingBad color={color} />
                                </View>
                            )
                        }
                        return (
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <TabBarBreakingBad color={color} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={Profile}
                options={{
                    headerStyle: {
                        backgroundColor: '#066337'
                    },
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <İcon name="user-circle" color={color} size={25} />
                        }
                        return <İcon name="user-circle" color={color} size={25} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sign" component={Sign} />
        </Stack.Navigator>
    )
}

const Router = () => {
    const [userSession, setUserSession] = useState();

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user);
        })
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !userSession ? (
                        <Stack.Screen
                            name="AuthStack"
                            component={AuthStack}
                            options={{ headerShown: false }}
                        />
                    ) : (
                        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer >
    )
}
export default Router;