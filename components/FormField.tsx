import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TextInputProps,
  useColorScheme,
} from "react-native";

import { icons } from "../constants";

interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string; // Optional additional styles
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles = "",
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const colorScheme = useColorScheme(); // Detect light or dark mode
  const isDarkMode = colorScheme === "dark";

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base  font-pmedium color-primary ">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-solid border-2 border-blue-100 focus:border-secondary flex flex-row items-center">
        <TextInput
          // className={`w-4/5 p-4 text-base rounded-lg border-2 ${isDarkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"}`}
          className="p-4 text-base rounded-lg border-2 bg-gray-800 text-white border-gray-700"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={isDarkMode ? "#ccc" : "#555"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
