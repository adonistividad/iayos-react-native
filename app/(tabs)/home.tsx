import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-dark">
      <Text className="color-primary text-3xl  font-pblack">Home</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} className="color-blue-200" >
        Go to Profile
      </Link>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
