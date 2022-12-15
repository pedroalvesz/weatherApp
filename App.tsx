import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';


import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (
    <NativeBaseProvider>
      <Dashboard/>
    </NativeBaseProvider>
  );
}

