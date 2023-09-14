import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Table, TableWrapper, Row, Col } from "react-native-table-component";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { CachedImage } from "../helpers/image";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
} from "react-native-heroicons/outline";
import {
  HeartIcon,
  Square3Stack3DIcon,
  UsersIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Loading from "../components/loading";
import YouTubeIframe from "react-native-youtube-iframe";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";

export default function FoodDetail(props) {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const navigation = useNavigation();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const state = this.state;

  useEffect(() => {
    getMealData(item.idMeal);
  }, []);

  const getMealData = async (id) => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      //   console.log('got meal data: ',response.data);
      if (response && response.data) {
        setMeal(response.data.meals[0]);
        setLoading(false);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };

  const ingredientsIndexes = (meal) => {
    if (!meal) return [];
    let indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        indexes.push(i);
      }
    }

    return indexes;
  };

  const getYoutubeVideoId = (url) => {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };
  const [data, setData] = useState(data);

  return (
    <View
      className="bg-white flex-1 relative "
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style={"light"} />
      {/* recipe image */}
      <View className="flex-row justify-center   ">
        <CachedImage
          uri={item.strMealThumb}
          sharedTransitionTag={item.strMeal}
          style={{
            width: wp(100),
            height: hp(40),
            marginTop: 1,
          }}
        />
      </View>

      {/* back button */}
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-14"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 bg-white"
        >
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          className="p-2 rounded-full mr-5 bg-white"
        >
          <HeartIcon
            size={hp(3.5)}
            strokeWidth={4.5}
            color={isFavourite ? "red" : "gray"}
          />
        </TouchableOpacity>
      </Animated.View>

      <ScrollView className=" absolute top-72">
        <View
          className="  bg-white     "
          style={{
            paddingHorizontal: 15,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <View className="flex-row justify-between ">
            <Text className="ml-4 mt-2 font-bold text-3xl ">
              Bánh mì sốt vang
            </Text>
            <View className="mt-3 mr-3">
              <Text className=" text-slate-300  ml-3 line-through">
                50.000đ
              </Text>
              <Text className="text-lg">30.000đ</Text>
            </View>
          </View>
          <Text className="mt-5 font-light">
            Bánh mì kẹp bơ muối ớt nướng giòn cắt nhỏ , mix cùng thịt xà xíu tẩm
            ướp thơm ngon,tương đen,sốt majo,viên rau củ, xúc xích
          </Text>
          <View className="mt-7 flex-row mb-5">
            <Icon name="file-text-o" size={21} />
            <TextInput
              className="ml-4"
              placeholder="Bạn có gì muốn nhắn mới nhà hàng không ?"
            />
          </View>
        </View>

        <View className="pb-52">
          <View className="bg-slate-100 mt-5  h-16 justify-center  ">
            <Text className="ml-5 text-base font-medium">Nước giải khát</Text>
            <Text className="ml-5 text-sm font-extralight">Chọn tối đa 5</Text>
          </View>
          {/* table */}
          <View className="mt-2">
            <View
              className="flex-row justify-between p-2  "
              style={{ paddingHorizontal: 15 }}
            >
              <View className="flex-row items-center  ">
                <TouchableHighlight className="rounded-lg bg-slate-100 p-1">
                  <Icon className=" " name="plus" color="#fbbf24" size={21} />
                </TouchableHighlight>
                <Text className="ml-2 ">Sữa ngô</Text>
              </View>
              <Text className="font-semibold">18.000đ</Text>
            </View>
            <View
              className="flex-row justify-between p-2  "
              style={{ paddingHorizontal: 15 }}
            >
              <View className="flex-row items-center  ">
                <TouchableHighlight className="rounded-lg bg-slate-100 p-1">
                  <Icon className=" " name="plus" color="#fbbf24" size={21} />
                </TouchableHighlight>
                <Text className="ml-2 ">Sữa ngô</Text>
              </View>
              <Text className="font-semibold">18.000đ</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* cartIcon */}
      <View className="flex-row justify-around bg-slate-50 absolute bottom-2  w-full  p-4">
        <View className="flex-row items-center">
          <TouchableHighlight className="rounded-lg p-1 bg-slate-100">
            <Icon className="  " name="minus" color="#fbbf24" size={25} />
          </TouchableHighlight>
          <Text className="ml-2 mr-2 text-cyan-200 text-xl font-semibold  font">
            1
          </Text>
          <TouchableHighlight className="rounded-lg p-1 bg-slate-100">
            <Icon className="  " name="plus" color="#fbbf24" size={25} />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate("CheckoutCart")}
            className="border-solid border-1 rounded-lg bg-[#FFCC66]  "
          >
            <View className="flex-row pt-3 pb-3 pl-5 pr-5">
              <Text className="font-semibold text-cyan-50 ">Thêm </Text>
              <Text className="text-cyan-50 font-bold">36.000đ</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
