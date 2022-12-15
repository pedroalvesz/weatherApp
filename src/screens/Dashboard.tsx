import { VStack, Heading, Text, Button, HStack } from 'native-base';
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

        <HStack bg='#4084DF:alpha.20' rounded='xl' px={4} pt={4}>
          <Lottie
          source={require('../assets/snowing.json')}
          autoPlay
          loop
          style={{
            width: 192
          }
          }
          />

          <VStack pt={3} pb={12} alignItems='center' justifyContent='center'>
            <Heading fontFamily='heading' color='white' fontSize={50}>
              28°
            </Heading>
            <Text fontFamily='body' color='#CACACA' fontSize={15}>
              Snowing
            </Text>
          </VStack>
        </HStack>

        <DataList mt={10}/>

      </VStack>
    </VStack>
  )
}