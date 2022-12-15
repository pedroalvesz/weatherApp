import { HStack, VStack, Text, IStackProps} from 'native-base'

import WindSvg from '../assets/windspeed.svg';
import HumiditySvg from '../assets/humidity.svg';
import HumanSvg from '../assets/human.svg';


export function DataList( {...rest} : IStackProps) {
  return(
    <HStack
    width='75%'
    rounded='xl'
    py={6}
    justifyContent='space-between'
    space={8}
    {...rest}
    >
      <VStack alignItems='center'>
        <WindSvg/>
        <Text pt={1} fontFamily='body' fontSize={14} color='white'>
          26 km/h
        </Text>
      </VStack>

      <VStack alignItems='center'>
        <HumanSvg/>
        <Text pt='3px' fontFamily='body' fontSize={14} color='white'>
          543
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