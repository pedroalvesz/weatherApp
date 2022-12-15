import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { 
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat'

import { Dashboard } from './src/screens/Dashboard';
import { theme } from './styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style='light' translucent/>
      <Dashboard/>
    </NativeBaseProvider>
  );
}

