import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { useState } from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        <View className="flex flex-row justify-between items-center mb-3">
          <Text className="font-bold text-lg">Nhà hàng nổi bật</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* <Swiper className="rounded-xl" autoplay={true} activeDotColor="white"> */}
          <View
            style={{
              width: width / 2 - 10 * 2,
              marginBottom: 10,
              borderRadius: 10 * 2,
              overflow: "hidden",
            }}
          >
            <BlurView
              tint="dark"
              intensity={10}
              style={{
                padding: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("ListFood")}
                style={{
                  height: 150,
                  width: "100%",
                }}
              >
                <Image
                  source={require("../../../assets/images/swiper4.jpg")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10 * 2,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    borderBottomStartRadius: 10 * 3,
                    borderTopEndRadius: 10 * 2,
                    overflow: "hidden",
                  }}
                >
                  <BlurView
                    tint="dark"
                    intensity={70}
                    style={{
                      flexDirection: "row",
                      padding: 10 - 2,
                    }}
                  >
                    <Ionicons
                      style={{
                        marginLeft: 10 / 2,
                      }}
                      name="star"
                      color={"yellow"}
                      size={10 * 1.7}
                    />
                    <Text
                      style={{
                        color: "#fff",
                        marginLeft: 10 / 2,
                      }}
                    >
                      4.5
                    </Text>
                  </BlurView>
                </View>
              </TouchableOpacity>
              <Text
                numberOfLines={2}
                style={{
                  color: "#3BC5C9",
                  fontWeight: "600",
                  fontSize: 10 * 1.7,
                  marginTop: 10,
                  marginBottom: 10 / 2,
                }}
              >
                Nhà hàng ỐC VẶN
              </Text>
              <Text
                numberOfLines={1}
                style={{ color: "#52555A", fontSize: 10 * 1.2 }}
              >
                Hà Nội
              </Text>
              <View
                style={{
                  marginVertical: 10 / 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: "#000",
                      marginRight: 10 / 2,
                      fontSize: 10 * 1.2,
                    }}
                  >
                    Lượt truy cập
                  </Text>
                  <Text style={{ color: "#3BC5C9", fontSize: 10 * 1.6 }}>
                    10k
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ListFood")}
                  style={{
                    backgroundColor: "#3BC5C9",
                    padding: 10 / 2,
                    borderRadius: 10,
                  }}
                >
                  <Ionicons name="heart" size={10 * 2} color={"#fff"} />
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>

          <View
            style={{
              width: width / 2 - 10 * 2,
              marginBottom: 10,
              borderRadius: 10 * 2,
              overflow: "hidden",
            }}
          >
            <BlurView
              tint="dark"
              intensity={10}
              style={{
                padding: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  height: 150,
                  width: "100%",
                }}
              >
                <Image
                  source={require("../../../assets/images/swiper1.jpg")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10 * 2,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    borderBottomStartRadius: 10 * 3,
                    borderTopEndRadius: 10 * 2,
                    overflow: "hidden",
                  }}
                >
                  <BlurView
                    tint="dark"
                    intensity={70}
                    style={{
                      flexDirection: "row",
                      padding: 10 - 2,
                    }}
                  >
                    <Ionicons
                      style={{
                        marginLeft: 10 / 2,
                      }}
                      name="star"
                      color={"yellow"}
                      size={10 * 1.7}
                    />
                    <Text
                      style={{
                        color: "#fff",
                        marginLeft: 10 / 2,
                      }}
                    >
                      4.5
                    </Text>
                  </BlurView>
                </View>
              </TouchableOpacity>
              <Text
                numberOfLines={2}
                style={{
                  color: "#3BC5C9",
                  fontWeight: "600",
                  fontSize: 10 * 1.7,
                  marginTop: 10,
                  marginBottom: 10 / 2,
                }}
              >
                Nhà hàng HUCE
              </Text>
              <Text
                numberOfLines={1}
                style={{ color: "#52555A", fontSize: 10 * 1.2 }}
              >
                Hà Nam
              </Text>
              <View
                style={{
                  marginVertical: 10 / 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: "#000",
                      marginRight: 10 / 2,
                      fontSize: 10 * 1.2,
                    }}
                  >
                    Lượt truy cập
                  </Text>
                  <Text style={{ color: "#3BC5C9", fontSize: 10 * 1.6 }}>
                    20k
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#3BC5C9",
                    padding: 10 / 2,
                    borderRadius: 10,
                  }}
                >
                  <Ionicons name="heart" size={10 * 2} color={"#fff"} />
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>
          {/* </Swiper> */}
          {/* <Swiper
            className="rounded-xl"
            height="100px"
            autoplay={true}
            activeDotColor="white"
          >
            <View
              style={{
                width: width / 2 - 10 * 2,
                marginBottom: 10,
                borderRadius: 10 * 2,
                overflow: "hidden",
              }}
            >
              <BlurView
                tint="dark"
                intensity={10}
                style={{
                  padding: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    source={require("../../../assets/images/swiper1.jpg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10 * 2,
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      right: 0,
                      borderBottomStartRadius: 10 * 3,
                      borderTopEndRadius: 10 * 2,
                      overflow: "hidden",
                    }}
                  >
                    <BlurView
                      tint="dark"
                      intensity={70}
                      style={{
                        flexDirection: "row",
                        padding: 10 - 2,
                      }}
                    >
                      <Ionicons
                        style={{
                          marginLeft: 10 / 2,
                        }}
                        name="star"
                        color={"yellow"}
                        size={10 * 1.7}
                      />
                      <Text
                        style={{
                          color: "#fff",
                          marginLeft: 10 / 2,
                        }}
                      >
                        4.5
                      </Text>
                    </BlurView>
                  </View>
                </TouchableOpacity>
                <Text
                  numberOfLines={2}
                  style={{
                    color: "#3BC5C9",
                    fontWeight: "600",
                    fontSize: 10 * 1.7,
                    marginTop: 10,
                    marginBottom: 10 / 2,
                  }}
                >
                  Nhà hàng HUCE
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ color: "#52555A", fontSize: 10 * 1.2 }}
                >
                  Hà Nam
                </Text>
                <View
                  style={{
                    marginVertical: 10 / 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#000",
                        marginRight: 10 / 2,
                        fontSize: 10 * 1.2,
                      }}
                    >
                      Lượt truy cập
                    </Text>
                    <Text style={{ color: "#3BC5C9", fontSize: 10 * 1.6 }}>
                      20k
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#3BC5C9",
                      padding: 10 / 2,
                      borderRadius: 10,
                    }}
                  >
                    <Ionicons name="heart" size={10 * 2} color={"#fff"} />
                  </TouchableOpacity>
                </View>
              </BlurView>
            </View>
            <View
              style={{
                width: width / 2 - 10 * 2,
                marginBottom: 10,
                borderRadius: 10 * 2,
                overflow: "hidden",
              }}
            >
              <BlurView
                tint="dark"
                intensity={10}
                style={{
                  padding: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    source={require("../../../assets/images/swiper2.jpg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10 * 2,
                    }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      right: 0,
                      borderBottomStartRadius: 10 * 3,
                      borderTopEndRadius: 10 * 2,
                      overflow: "hidden",
                    }}
                  >
                    <BlurView
                      tint="dark"
                      intensity={70}
                      style={{
                        flexDirection: "row",
                        padding: 10 - 2,
                      }}
                    >
                      <Ionicons
                        style={{
                          marginLeft: 10 / 2,
                        }}
                        name="star"
                        color={"yellow"}
                        size={10 * 1.7}
                      />
                      <Text
                        style={{
                          color: "#fff",
                          marginLeft: 10 / 2,
                        }}
                      >
                        4.5
                      </Text>
                    </BlurView>
                  </View>
                </TouchableOpacity>
                <Text
                  numberOfLines={2}
                  style={{
                    color: "#3BC5C9",
                    fontWeight: "600",
                    fontSize: 10 * 1.7,
                    marginTop: 10,
                    marginBottom: 10 / 2,
                  }}
                >
                  Nhà hàng HUCE
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ color: "#52555A", fontSize: 10 * 1.2 }}
                >
                  Hà Nam
                </Text>
                <View
                  style={{
                    marginVertical: 10 / 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#000",
                        marginRight: 10 / 2,
                        fontSize: 10 * 1.2,
                      }}
                    >
                      Lượt truy cập
                    </Text>
                    <Text style={{ color: "#3BC5C9", fontSize: 10 * 1.6 }}>
                      20k
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#3BC5C9",
                      padding: 10 / 2,
                      borderRadius: 10,
                    }}
                  >
                    <Ionicons name="heart" size={10 * 2} color={"#fff"} />
                  </TouchableOpacity>
                </View>
              </BlurView>
            </View>
          </Swiper> */}
        </View>
        <View className="flex flex-row justify-end items-center mb-3">
          <TouchableOpacity>
            <Text className="text-sm font-semibold text-[#3BC5C9]">
              Xem thêm...
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;
