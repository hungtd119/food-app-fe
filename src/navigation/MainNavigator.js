import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { StatusBar } from "react-native";
import Slogan from "../screens/Slogan";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import FoodDetail from "../screens/FoodDetail";
import CheckoutCart from "../screens/FoodDetail";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Slogan"
          component={Slogan}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CheckoutCart"
          component={CheckoutCart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
