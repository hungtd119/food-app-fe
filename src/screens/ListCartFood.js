import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ArrowSmallLeftIcon,
  MapPinIcon,
  PlusIcon,
  EllipsisVerticalIcon,
} from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Divide from "../components/Divide";
import { useNavigation } from "@react-navigation/native";
import CheckoutCart from "./CheckoutCart";
export default function ListCartFood() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="space-y-6 pt-14 bg-white">
        <View className="mx-4 space-y-2 mb-2">
          <View className="flex flex-row items-center">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="text-base font-semibold"
            >
              <ArrowSmallLeftIcon size={hp(3)} color="black" />
            </TouchableOpacity>
            <Text className="text-base font-semibold text-center flex-1">
              Danh sách giỏ hàng
            </Text>
          </View>
        </View>
      </View>
      <Divide />
      <ScrollView>
        <View className="space-y-6">
          <View className="mx-4 mt-5 space-y-2 mb-2">
            <Text className="text-lg font-bold">Các đơn</Text>
          </View>
        </View>
        <View>
          <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
            <TouchableHighlight
              underlayColor="white"
              onPress={() => navigation.navigate("CheckoutCart")}
            >
              <View className="w-24 mr-3 ">
                <Image
                  className="w-full h-16 rounded-lg "
                  source={require("../../assets/images/swiper2.jpg")}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="none"
              onPress={() => navigation.navigate("CheckoutCart")}
            >
              <View className="flex-1 ">
                <Text className="text-base font-bold">
                  Bánh mì muối ớt-Cương Thiều
                </Text>
                <Text className="pt-1  font-thin">
                  đại học xây dựng,giải phóng,hà nội
                </Text>
                <View className="flex-row  mt-2 ">
                  <Text className="pt-1 ">30.000đ</Text>
                  <Text className="pt-1 ml-4  font-extralight"> 1 món</Text>
                </View>
              </View>
            </TouchableHighlight>

            <View className="flex items-center justify-center ml-4">
              <TouchableOpacity>
                <Text className="text-red-400 font-bold underline">Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
            <TouchableHighlight
              underlayColor="white"
              onPress={() => navigation.navigate("CheckoutCart")}
            >
              <View className="w-24 mr-3 ">
                <Image
                  className="w-full h-16 rounded-lg "
                  source={require("../../assets/images/swiper2.jpg")}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="none"
              onPress={() => navigation.navigate("CheckoutCart")}
            >
              <View className="flex-1 ">
                <Text className="text-base font-bold">
                  Bánh mì muối ớt-Cương Thiều
                </Text>
                <Text className="pt-1  font-thin">
                  đại học xây dựng,giải phóng,hà nội
                </Text>
                <View className="flex-row  mt-2 ">
                  <Text className="pt-1 ">30.000đ</Text>
                  <Text className="pt-1 ml-4  font-extralight"> 1 món</Text>
                </View>
              </View>
            </TouchableHighlight>

            <View className="flex items-center justify-center ml-4">
              <TouchableOpacity>
                <Text className="text-red-400 font-bold underline">Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View className="mx-4 mt-5 space-y-2 mb-2 shadow-sm bg-white py-4 rounded-md flex flex-row items-center px-2">
            <TouchableHighlight
              underlayColor="white"
              onPress={() => navigation.navigate("CheckoutCart")}
            >
              <View className="w-24 mr-3 ">
                <Image
                  className="w-full h-16 rounded-lg "
                  source={require("../../assets/images/swiper2.jpg")}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="none"
              onPress={() => navigation.navigate("CheckoutCart")}
            >
              <View className="flex-1 ">
                <Text className="text-base font-bold">
                  Bánh mì muối ớt-Cương Thiều
                </Text>
                <Text className="pt-1  font-thin">
                  đại học xây dựng,giải phóng,hà nội
                </Text>
                <View className="flex-row  mt-2 ">
                  <Text className="pt-1 ">30.000đ</Text>
                  <Text className="pt-1 ml-4  font-extralight"> 1 món</Text>
                </View>
              </View>
            </TouchableHighlight>

            <View className="flex items-center justify-center ml-4">
              <TouchableOpacity>
                <Text className="text-red-400 font-bold underline">Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableHighlight
        underlayColor="none"
        onPress={() => navigation.navigate("CheckoutCart")}
      >
        <View className="absolute bg-[#3BC5C9] bottom-20 right-8 w-36 h-12 rounded-lg items-center justify-center ">
          <Text className="text-white text-base ">Thanh toán </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="none"
        onPress={() => navigation.navigate("CheckoutCart")}
      >
        <View className="absolute bg-[#3BC5C9] bottom-20 left-4 w-24 h-12 rounded-lg items-center justify-center ">
          <Text className="text-white text-base ">Thêm mới </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
