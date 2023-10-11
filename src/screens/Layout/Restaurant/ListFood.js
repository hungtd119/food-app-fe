import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ListFood = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const { height, width } = Dimensions.get("window");
  const [activeSize, setActiveSize] = useState(null);
  const navigation = useNavigation();
  return (
    <>
      <ScrollView className="h-[280px]">
        <ImageBackground
          source={require("../../../../assets/images/swiper1.jpg")}
          style={{
            height: 500 / 2 + 10 * 2,
            justifyContent: "space-between",
          }}
          imageStyle={{
            borderRadius: 10 * 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10 * 2,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                padding: 10,
                borderRadius: 10 * 1.5,
              }}
            >
              <Ionicons name="arrow-back" color="#4D4F52" size={10 * 2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                padding: 10,
                borderRadius: 10 * 1.5,
              }}
            >
              <Ionicons name="heart" color="#fff" size={10 * 2} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 10 * 3,
              overflow: "hidden",
            }}
          >
            <BlurView
              intensity={80}
              tint="dark"
              style={{
                padding: 10 * 2,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 10 * 2,
                    color: "#fff",
                    fontWeight: "600",
                    marginBottom: 10,
                  }}
                >
                  Nhà hàng KICHI-KICHI
                </Text>
                <Text
                  style={{
                    fontSize: 10 * 1.8,
                    color: "#b5b5b5",
                    fontWeight: "500",
                    marginBottom: 10,
                  }}
                >
                  Hà Nội
                </Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Ionicons name="star" size={10 * 1.5} color="yellow" />
                  <Text
                    style={{
                      color: "#fff",
                      marginLeft: 10,
                    }}
                  >
                    4.5
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "35%",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      padding: 10 / 2,
                      width: 10 * 6,
                      height: 10 * 5,
                      backgroundColor: "#0C0F14",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="restaurant" size={10 * 2} color="#D17842" />
                    <Text
                      style={{
                        color: "#b5b5b5",
                        fontSize: 10,
                      }}
                    >
                      Nhà hàng
                    </Text>
                  </View>
                  <View
                    style={{
                      padding: 10 / 2,
                      width: 10 * 6,
                      height: 10 * 5,
                      backgroundColor: "#0C0F14",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="location" size={10 * 2} color="#D17842" />
                    <Text
                      style={{
                        color: "#b5b5b5",
                        fontSize: 10,
                      }}
                    >
                      Địa điểm
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#0C0F14",
                    padding: 10 / 2,
                    borderRadius: 10 / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#b5b5b5",
                      fontSize: 10 * 1.3,
                    }}
                  >
                    Đồ ăn
                  </Text>
                </View>
              </View>
            </BlurView>
          </View>
        </ImageBackground>
      </ScrollView>
      <ScrollView>
        <View
          style={{
            padding: 10,
            flex: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 15,
            }}
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
                    source={require("../../../../assets/images/swiper4.jpg")}
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
                    color: "#000",
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
                      100.000
                    </Text>
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: 500,
                        fontSize: 10 * 1.6,
                      }}
                    >
                      VNĐ
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("DetailFood")}
                    style={{
                      backgroundColor: "red",
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
                  onPress={() => navigation.navigate("DetailFood")}
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    source={require("../../../../assets/images/swiper1.jpg")}
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
                    color: "#000",
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
                      100.000
                    </Text>
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: 500,
                        fontSize: 10 * 1.6,
                      }}
                    >
                      VNĐ
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "red",
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
                  onPress={() => navigation.navigate("DetailFood")}
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    source={require("../../../../assets/images/swiper1.jpg")}
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
                    color: "#000",
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
                      100.000
                    </Text>
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: 500,
                        fontSize: 10 * 1.6,
                      }}
                    >
                      VNĐ
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "red",
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
                  onPress={() => navigation.navigate("DetailFood")}
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    source={require("../../../../assets/images/swiper1.jpg")}
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
                    color: "#000",
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
                      100.000
                    </Text>
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: 500,
                        fontSize: 10 * 1.6,
                      }}
                    >
                      VNĐ
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "red",
                      padding: 10 / 2,
                      borderRadius: 10,
                    }}
                  >
                    <Ionicons name="heart" size={10 * 2} color={"#fff"} />
                  </TouchableOpacity>
                </View>
              </BlurView>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ListFood;
