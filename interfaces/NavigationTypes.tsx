import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export interface StackParamList extends ParamListBase {
  EditProfile: { id: string; name: string; email: string; city: string };
  TabNavigator: {
    id: string;
    name: string;
    email: string;
    city: string;
    profileImage: string | undefined;
  };
}

export interface BottomTabParamList extends ParamListBase {
  Home: {
    id: string;
    name: string;
    email: string;
    city: string;
    profileImage: string | undefined;
  };
  Settings: undefined;
}

export interface HomeScreenProp {
  navigation: NativeStackNavigationProp<BottomTabParamList, "Home">;
  route: RouteProp<BottomTabParamList, "Home">;
}

export interface EditProfileScreenProp {
  navigation: NativeStackNavigationProp<BottomTabParamList, "EditProfile">;
  route: RouteProp<BottomTabParamList, "EditProfile">;
}

export interface SettingsScreenProp {
  navigation: NativeStackNavigationProp<StackParamList, "Settings">;
}

export interface HomeScreenPropBottom {
  navigation: BottomTabNavigationProp<BottomTabParamList, "Home">;
}

export interface EditProfileScreenPropBottom {
  navigation: BottomTabNavigationProp<BottomTabParamList, "EditProfile">;
}

export interface SettingsScreenPropBottom {
  navigation: BottomTabNavigationProp<BottomTabParamList, "Settings">;
}
