import { HStack, VStack, Text,} from 'native-base'

import WindSvg from '../assets/windspeed.svg';
import HumiditySvg from '../assets/humidity.svg';

export function DataList() {
  return(
    <HStack
    bg='#4084DF:alpha.20'
    rounded='xl'
    py={6}
    px={8}
    justifyContent='space-between'
    space={8}
    >
      <VStack alignItems='center'>
        <WindSvg/>
        <Text pt={1} fontFamily='body' fontSize={14} color='white'>
          26 km/h
        </Text>
      </VStack>

      <VStack alignItems='center'>
        <HumiditySvg/>
        <Text pt={2} fontFamily='body' fontSize={14} color='white'>
          26 km/h
        </Text>
      </VStack>
    </HStack>
  )
}