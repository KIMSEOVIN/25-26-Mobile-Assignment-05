
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SignInScreen from "./src/screens/SignInScreen"; 
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    // <View> 대신 <View style={{flex: 1}}> 화면전체 감싸기
    <NavigationContainer style={{ flex: 1 }}> 
      <StatusBar style="dark" />
      <SignInScreen /> 
    </NavigationContainer>
  );
};

export default App;