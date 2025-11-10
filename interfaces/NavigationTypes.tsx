import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";


export interface StackParamList extends ParamListBase {
    EditProfileScreen: {nome:string, email:string,cidade:string};
    TabNavigator:{nome:string, email:string,cidade:string, photo:string | undefined};
}

export interface BottomTabParamList extends ParamListBase {
    HomeScreen: {nome:string, email:string,cidade:string, photo:string | undefined};
    SettingsScreen: undefined;
}

export interface HomeScreen {
    navigation: NativeStackNavigationProp<BottomTabParamList, "Home">
    route:RouteProp<BottomTabParamList,"Home">
}

export interface EditProfileScreen {
    navigation: NativeStackNavigationProp<BottomTabParamList, "EditProfile">
    route:RouteProp<BottomTabParamList,"EditProfile">
}

export interface SettingsScreen {
    navigation: NativeStackNavigationProp<StackParamList, "Settings">
}

export interface HomeScreenPropBottom {
    navigation: BottomTabNavigationProp<BottomTabParamList, "Home">
}

export interface EditProfileScreenPropBottom {
    navigation: BottomTabNavigationProp<BottomTabParamList, "EditProfile">
}

export interface SettingsScreenPropBottom {
    navigation: BottomTabNavigationProp<BottomTabParamList, "Settings">
}