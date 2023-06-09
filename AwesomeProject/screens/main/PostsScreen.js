import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
});

export default PostsScreen;
