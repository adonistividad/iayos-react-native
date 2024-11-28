import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Post = () => {
  return (
     <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-black">      <Text className="color-white">Post</Text>
      <StatusBar style="auto" />
      <Link href={"/"} style={{ color: "blue" }}>
        Go to Home
      </Link>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({});
