import { FormField } from "@/components";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [form, setForm] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: "",
    email: "a@a.com",
    password: "",
  });

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-dark">
      <Text className="color-primary text-3xl  font-pblack">Home</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} className="color-blue-200">
        Go to Profile
      </Link>
      <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e })}
        otherStyles="mt-7"
        keyboardType="email-address"
      /> 
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
