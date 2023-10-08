import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { themeColors } from "../theme";

const FormSubmitButton = ({ title, submitting, onPress }) => {
  const backgroundColor = submitting
    ? "rgba(27,27,51,0.4)"
    : "rgba(27,27,51,1)";

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.container, { backgroundColor: themeColors.bg }]}
    >
      <Text className="font-xl text-lg font-bold text-center text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FormSubmitButton;
