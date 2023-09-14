import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

const Button = ({ title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ backgroundColor: themeColors.bg }}
      className="py-4 bg-[#FFC107] rounded-xl"
      onPress={() => navigation.navigate("Home")}
    >
      <Text className="font-xl text-lg font-bold text-center text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
