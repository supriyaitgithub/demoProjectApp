import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screen/Home';
import ShoppingCart from './src/Component/ShoppingCart';
import { enableScreens } from 'react-native-screens';

enableScreens(true);
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        name="Home"
        initialRouteName={Home}
        screenOptions={{
          headerShown: false,
          // ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


