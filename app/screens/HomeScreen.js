import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  cons;

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      {data.length ? (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                marginTop: responsiveHeight(1),
                padding: responsiveHeight(1),
                borderBottomColor: "black",
                borderBottomWidth: responsiveHeight(0.1),
              }}
            >
              <Text
                style={{
                  backgroundColor: "red",
                  fontSize: responsiveFontSize(2),
                }}
              >
                Title is {item.title}
              </Text>
              <Text
                style={{
                  backgroundColor: "green",
                  fontSize: responsiveFontSize(2),
                }}
              >
                Body is {item.body}
              </Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default HomeScreen;
