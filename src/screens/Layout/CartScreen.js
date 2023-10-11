import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableHighlight,
  FlatList,
  RefreshControl,
  Button,
} from "react-native";
import React from "react";
import { useAtom } from "jotai";
import { cartAtom } from "../../lib/atom/cart";

const CartScreen = () => {
  const [cart, setCartAtom] = useAtom(cartAtom);
  const handleDelete = (item) => {
    const indexToDelete = cart.findIndex(
      (cartItem) => cartItem.idMeal === item.idMeal
    );

    if (indexToDelete !== -1) {
      // Tạo một bản sao của mảng cart
      const updatedCart = [...cart];
      // Sử dụng splice() để xóa item khỏi bản sao
      updatedCart.splice(indexToDelete, 1);
      // Cập nhật atom cartAtom bằng bản sao đã xóa item
      setCartAtom(updatedCart);
    }
  };
  return (
    <View className="bg-slate-200 min-h-full">
      <SafeAreaView>
        <View className="p-5">
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex p-4 bg-white items-center rounded-md flex-row gap-2">
                <View className="flex items-start gap-2 flex-row">
                  <View>
                    <Image
                      className="w-[80px] h-[80px]"
                      source={{
                        uri: "https://reactnative.dev/img/tiny_logo.png",
                      }}
                    />
                  </View>
                  <View className="flex gap-2">
                    <Text className="text-[16px] font-bold">{item.name}</Text>
                    <Text>255 Nguyễn Văn Ngữ</Text>
                    <View className="flex justify-between flex-row">
                      <Text className="font-bold text-[14px]">
                        {item.count}
                      </Text>
                      <Text className="font-bold text-red-500 text-[14px]">
                        {item.pricePerItem}
                      </Text>
                      <TouchableHighlight onPress={() => handleDelete(item)}>
                        <Text className="ml-[30px] font-[600] text-red-300">
                          Xóa
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
