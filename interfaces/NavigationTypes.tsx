import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface StackParam extends ParamListBase{
    HomeScreen: undefined;
    EditProfileScreen:undefined;
    SettingsScreen:undefined;
}

export interface HomeScreen{
    navigation:NativeStackNavigationProp<StackParam,"Home">
}