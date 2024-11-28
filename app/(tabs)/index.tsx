import { useColorScheme } from "nativewind";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  console.log("colorScheme::", colorScheme)

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="color-primary text-3xl  font-pblack">Home</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} className="color-blue-200">
        Go to Profile
      </Link>
      <Link href={"/sign-in"} className="color-blue-500">
        Sign In
      </Link>

      <TouchableOpacity className="mt-10" onPress={toggleColorScheme}>
        <Text className="text-3xl capitalize font-bold text-slate-900 dark:text-slate-200">
          {`Change Theme to ${colorScheme === "dark" ? "light" : "dark"}`}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
