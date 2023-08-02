import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Mytab from './src/pages/Mytab';

export default function App() {
  return (
    <NavigationContainer>
      <Mytab />
    </NavigationContainer>
  );
}


