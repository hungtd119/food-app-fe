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
import ProfileScreen from "../screens/Layout/v2/ProfileScreen";
import RestaurantManager from "../screens/Layout/v2/RestaurantManager";
import FormRestaurant from "../screens/Layout/v2/FormRestaurant";
import AddFoodCart from "../screens/AddFoodCart";
import CheckoutCart from "../screens/CheckoutCart";

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
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileV2"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RestaurantManager"
          component={RestaurantManager}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FormRestaurant"
          component={FormRestaurant}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddFoodCart"
          component={AddFoodCart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CheckoutCart"
          options={{ title: "Trang thanh toán" }}
          component={CheckoutCart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
