import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { User } from "./UserInterface";

export interface StackParamList extends ParamListBase {
  EditProfile: User;
  TabNavigator: User;
}

export interface BottomTabParamList extends ParamListBase {
  Home: User;
  Settings: undefined;
}

export interface HomeScreenProp {
  navigation: BottomTabNavigationProp<BottomTabParamList, "Home">;
  route: RouteProp<BottomTabParamList, "Home">;
}

export interface EditProfileScreenProp {
  navigation: NativeStackNavigationProp<StackParamList, "EditProfile">;
  route: RouteProp<StackParamList, "EditProfile">;
}

export interface SettingsScreenProp {
  navigation: BottomTabNavigationProp<BottomTabParamList, "Settings">;
}

export interface TabNavigatorProp {
  navigation: NativeStackNavigationProp<StackParamList, "TabNavigator">;
  route: RouteProp<StackParamList, "TabNavigator">;
}
