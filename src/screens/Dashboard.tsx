import { VStack, Heading, Text, Button } from 'native-base';
import Lottie from 'lottie-react-native'

import { DataList } from '../components/DataList';

export function Dashboard() {
  return(
    <VStack flex={1} bg='#080A2F'>
      <VStack flex={1} px={8} pt={20} alignItems='center'>
        <VStack pb={5} alignItems='center'>
          <Text fontFamily='heading' color='white' fontSize={40}>
            CIDADE
          </Text>
          <Text fontFamily='body' color='#CACACA' fontSize={20}>
            00 jan, 2022
          </Text>
        </VStack>

        <Lottie
        source={require('../assets/cloudy-raining.json')}
        autoPlay
        loop
        style={{
          width: 192
        }
        }
        />

        <VStack pt={3} pb={5} alignItems='center'>
          <Heading fontFamily='heading' color='white' fontSize={70}>
            28°
          </Heading>
          <Text fontFamily='body' color='#CACACA' fontSize={20}>
            Snowing
          </Text>
        </VStack>

        <DataList/>

      </VStack>
    </VStack>
  )
}