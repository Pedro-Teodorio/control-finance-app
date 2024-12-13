import theme from "@/theme";
import { router, Slot } from "expo-router";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { replace } from "expo-router/build/global-state/routing";

const getToken =  () => {
  const token =  SecureStore.getItem('authToken');
  return token;
};
const  InitialLayout =  () => {
  const token = getToken()

  useEffect(()=>{
    if(token){
      router.replace('/home')
    }else if(!token){
      router.replace('/login')
    }
  },[token])

  SecureStore.setItem('authToken','sajhfgsjhkfgsjfhgs')
  console.log(getToken())

  SecureStore.setItem('authToken','my-token')
  console.log(getToken())

    
  return <Slot screenOptions={{ headerShown: false }} />;
};

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} />
      <InitialLayout />
    </ThemeProvider>
  );
}
