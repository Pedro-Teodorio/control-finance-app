import theme from "@/theme";
import { router, Slot } from "expo-router";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { replace } from "expo-router/build/global-state/routing";
import { AuthProvider } from "@/context/AuthContext";

import { useAuth } from "@/hooks/useAuth";

const getToken = () => {
  const token = SecureStore.getItem("authToken");
  return token;
};
const InitialLayout = () => {
  const { token, addToken } = useAuth();

  useEffect(() => {
    const getToken = () => {
      const storedToken = SecureStore.getItem("authToken");
      addToken(storedToken!);
    };
    getToken();
    if (token) {
      router.replace("/home");
    } else if (!token) {
      router.replace("/login");
    }
  }, [token]);
 

  return <Slot screenOptions={{ headerShown: false }} />;
};

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} />
      <AuthProvider>
        <InitialLayout />
      </AuthProvider>
    </ThemeProvider>
  );
}
