import { View, Text, SafeAreaView, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);

    try {
      // Uncomment and replace with your actual auth logic
      // await signIn(form.email, form.password);
      // const result = await getCurrentUser();
      // setUser(result);

      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message || "An unknown error occurred");
    } finally {
      setSubmitting(false);
    }
  };

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
      <CustomButton
        title="Sign In"
        handlePress={submit}
        containerStyles="mt-7"
        isLoading={isSubmitting}
      />

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
