import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
     <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-black">      <Text className="color-white">Profile</Text>
      <StatusBar style="auto" />
      <Link href={"/"} style={{ color: "blue" }}>
        Go to Home
      </Link>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
