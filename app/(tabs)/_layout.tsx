import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 30, // adjust the radius as needed
          borderTopRightRadius: 30,
          height: 50,
          overflow: "hidden",
          // backgroundColor: "white", // or any other background color
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          title: "Test",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="microscope" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="checkups"
        options={{
          title: "Checkups",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="cube" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="records"
        options={{
          title: "Records",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="file-medical-alt" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
