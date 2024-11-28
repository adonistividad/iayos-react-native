import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignUp = () => {
  return (
     <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-black">      <Text className="color-primary text-3xl  font-pblack">Sign Up</Text>
      <StatusBar style="auto" />
      <br />
      <Link href={"/"} className="color-blue-500">
        Home
      </Link>
      <Link href={"/sign-in"} className="color-blue-500">
        Sign In
      </Link>
    </SafeAreaView>
  );
};

export default SignUp;
