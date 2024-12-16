import Icon from "@/components/Icon";
import theme from "@/theme";
import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";

export default function AuthLayout() {
  const HomeTabIcon = ({ color, size }: { color: string; size: number }) => {
    return <Home  size={size} color={color} />;
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.EMERALD_500,
        
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: HomeTabIcon,
         
        }}
      />
    </Tabs>
  );
}
