import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FormField from "@/components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-black">

      <Text className="color-primary text-3xl  font-pblack">Sign In</Text>
      <StatusBar style="auto" />
      <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e })}
        otherStyles="mt-7"
        keyboardType="email-address"
      />

      <FormField
        title="Password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e })}
        otherStyles="mt-7"
      />



      <br />
      <Link href={"/"} className="color-blue-500">
        Home
      </Link>
      <Link href={"/sign-up"} className="color-blue-500">
        Sign up
      </Link>
    </SafeAreaView>
  );
};

export default SignIn;
