import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-dark">
      <Text className="color-white">Explore</Text>
      <StatusBar style="auto" />
      <Link href={"/"} style={{ color: "blue" }}>
        Go to Home
      </Link>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
