import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

function CheckoutCart() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView className="h-[87%]">
        <View>
          <Image
            className="w-full h-60 "
            source={require("../../assets/images/swiper1.jpg")}
          />
        </View>
        <View className="flex-row justify-start absolute top-10  ">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" bg-white p-2 rounded-full ml-4   "
          >
            <ArrowLeftIcon size="30" color="#FFCC66" />
          </TouchableOpacity>
        </View>

        <View className="bg-slate-50 w-80 h-20 items-center justify-center ml-14 rounded-md absolute top-52">
          <Text
            className="font-semibold text-base mb-2"
            style={{ color: "#FF6600" }}
          >
            ĐỐi TÁC CỦA FOODY
          </Text>
          <Text className="font-bold text-lg">CƠM GÀ -DUY HÙNG</Text>
          <Text className="font-light">0.2km. Số 2/73 Hoàng Ngân, Hà Nội</Text>
        </View>

        <View className="mt-14 " style={{ paddingHorizontal: 15 }}>
          <View className="flex-row justify-between p-1 ">
            <View className="flex-row items-center">
              <Icon className=" " name="user-o" color="black" size={21} />
              <Text className="ml-2 ">Giao bởi tài xế</Text>
            </View>
            <TouchableOpacity>
              <Text className="font-semibold">Thay đổi</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between p-1 ">
            <View className="flex-row items-center ">
              <TouchableOpacity className="flex-row justify-between w-full">
                <View className="flex-row">
                  <Icon
                    className=" "
                    name="pencil-square-o"
                    color="#FFCC66"
                    size={21}
                  />
                  <Text style={{ color: "#FFCC66" }} className="ml-2 ">
                    FOODY Khao Thêm 14K Cho Đơn Từ 69K
                  </Text>
                </View>
                <Text className="font-semibold">Xem Thêm</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="">
            <TouchableOpacity className="flex-row justify-between   ">
              <View className="flex-row items-center ">
                <Icon className=" " name="star" color="#FFCC00" size={21} />
                <Text className="font-bold"> 4.2</Text>
                <Text className="ml-2 ">(999+)</Text>
              </View>
              <View className="flex-row items-center ">
                <Icon
                  className=" "
                  name="shopping-cart"
                  color="#222222"
                  size={21}
                />
                <Text className="ml-2 font-bold">999+ đã bán</Text>
              </View>
              <Text className="font-bold">Xem đánh giá</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-slate-200 mt-4 h-[0.5]"></View>

        <View className="bg-slate-50 pt-3 " style={{ paddingHorizontal: 15 }}>
          <Text className="font-thin">Đơn hàng của bạn</Text>
          <View className="flex-row justify-between mt-4">
            <TouchableHighlight onPress={() => navigation.goBack()}>
              <View className="flex-row">
                <Text className="mr-1 font-thin ">1x</Text>
                <Text>Cơm thố bò</Text>
              </View>
            </TouchableHighlight>
            <View className="flex-row">
              <Text className="mr-1 mt-1">60.000đ</Text>
              <TouchableHighlight>
                <Icon className=" " name="close" color="#555555" size={21} />
              </TouchableHighlight>
            </View>
          </View>
          <View className="mt-6">
            <TouchableHighlight onPress={() => navigation.goBack()}>
              <Text className="font-semibold"> + Thêm món</Text>
            </TouchableHighlight>
          </View>
          <View className="bg-slate-200 mt-3 h-[0.5]"></View>

          <View className="flex-row justify-between mt-2 p-1">
            <View className="flex-row">
              <Icon className="" name="database" color="#555555" size={21} />
              <View className="ml-2 -mt-1">
                <Text className="font-semibold">
                  Dùng xu để được giảm giá nha !
                </Text>
                <Text className="font-thin">Bạn đang có 0 xu</Text>
              </View>
            </View>
            <TouchableHighlight>
              <Text style={{ color: "#FFCC00", fontWeight: "600" }}>
                Dùng xu
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View className=" bg-slate-100 p-2" style={{ paddingHorizontal: 15 }}>
          <View className="flex-row justify-between">
            <Text className="">Tạm tính</Text>
            <Text>60.000đ</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Phí áp dụng:0.2km</Text>
            <Text>19.000đ</Text>
          </View>
          <View className="flex-row justify-between">
            <Text style={{ color: "#FFCC66" }}>
              Quán khao 10K cho đơn từ 49k
            </Text>
            <Text>-10.000đ</Text>
          </View>
        </View>

        <View className="w-full bg-slate-300 h-[0.5]"></View>

        <View className="bg-slate-50 mt-8 w-full pt-3   ">
          <View>
            <Text className="font-semibold ml-2">Tip thêm cho tài xế nhé </Text>
            <Text className="font-thin ml-2">
              Tài xế sẽ nhận được 100% tiền tip từ bạn{" "}
            </Text>

            <View className="bg-slate-200 rounded-md w-80 ml-28 mt-9 p-2 justify-center">
              <Text className="font-thin ml-2">
                Dùng phương thức thanh toán không dùng tiền
              </Text>
              <Text className="font-thin ml-2">mặt để tip cho tài xế</Text>
            </View>
          </View>
          <View className="-mt-24 ml-6 ">
            <Image
              style={{ width: "20%", height: "50%" }}
              source={require("../../assets/images/shiper1.png")}
            />
          </View>
        </View>
      </ScrollView>
      <View className="">
        <View className="flex-row justify-around  mt-4 ">
          <View className="flex-row">
            <Icon className="" name="money" color="#555555" size={21} />
            <Text className="font-semibold mt-1"> Tiền mặt</Text>
          </View>
          <View>
            <Icon className="" name="chevron-up" color="#555555" size={21} />
          </View>
          <View className="border-r-2  h-7" />
          <TouchableHighlight className="">
            <Text className="font-semibold" style={{ color: "#FFCC66" }}>
              THÊM COUPON
            </Text>
          </TouchableHighlight>
        </View>
      </View>

      <View
        className="flex-row justify-between pt-3 "
        style={{ paddingHorizontal: 80 }}
      >
        <View>
          <Text className="line-through font-thin">82.000đ</Text>
          <Text className="font-bold">72.000đ</Text>
        </View>
        <TouchableHighlight className="rounded-lg bg-[#FFCC66]">
          <Text className="text-xl font-semibold  pt-2 pb-2 pl-4 pr-4 text-cyan-50 ">
            Đặt hàng
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
export default CheckoutCart;
