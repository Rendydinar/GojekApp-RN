import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
  import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { 
  Home, 
  NewsDetail, 
  Orders,
  OrderDetail,
  ScanQRCoder
} from "./src/containers/pages"

// const HomeScreen: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   StatusBar.setHidden(false);
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (

//   );
// };

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home
Home" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="ScanQRCoder" component={ScanQRCoder} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});

export default App;
