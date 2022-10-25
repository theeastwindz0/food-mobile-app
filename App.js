import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import {Provider} from 'react-redux'
import { store}  from './store/store';
export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
