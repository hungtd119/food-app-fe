import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SildeFood from "../screens/components/SildeFood";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import axios from "axios";
import Recipes from "../components/recipes";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import OfferCard from "../components/OfferCard";
import Header from "../components/Header";
import { useAtom } from "jotai";
import { cartAtom } from "../lib/atom/cart";
import ListCartFood from "./ListCartFood";
export default function HomeScreen() {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [cart] = useAtom(cartAtom);
  useEffect(() => {
    getCategories();
    console.log("cart", cart);
    getRecipes();
  }, []);

  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };
  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* avatar and bell icon */}
        {/* <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5.5) }}
          />
          <BellIcon size={hp(4)} color="gray" />
        </View> */}
        <Header />

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            Xin chào, Việt! {cart.length}
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600"
            >
              Tận hưởng đồ ăn ngon tại nhà !
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.8) }}
            className="font-semibold text-neutral-600"
          >
            Chỉ cần <Text className="text-[#3BC5C9]">một cú chạm</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Tìm kiếm..."
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>
        <SildeFood />
        {/* <OfferCard /> */}
        {/* categories */}
        <View>
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
          )}
        </View>

        {/* recipes */}
        <View>
          <Recipes meals={meals} categories={categories} />
        </View>
        {/* oder*/}
      </ScrollView>
      <TouchableHighlight onPress={() => navigation.navigate(ListCartFood)}>
        <View className="absolute bottom-7 right-6 ">
          <View className=" bg-slate-100 rounded-full w-20 h-20">
            <View className="items-center top-7 ">
              <Icon name="shopping-basket" size={26} color="#3BC5C9" />
            </View>
          </View>
          <View className="bg-[#F0FFFF] rounded-full w-7 h-7 -top-[87px] left-12">
            <Text className="text-center top-1 text-[#3BC5C9] ">2</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}
