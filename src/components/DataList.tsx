import { HStack, VStack, Text, IStackProps} from 'native-base'

import WindSvg from '../assets/windspeed.svg';
import HumiditySvg from '../assets/humidity.svg';
import HumanSvg from '../assets/human.svg';

type DataListProps = IStackProps & {
  windspeed: number,
  humidity: number,
  feels_like: number,
}

export function DataList( {windspeed, humidity, feels_like, ...rest} : DataListProps) {
  return(
    <HStack
    width='75%'
    rounded='xl'
    py={6}
    px={4}
    justifyContent='space-between'
    space={8}
    bg='#4084DF:alpha.20'
    {...rest}
    >
      <VStack alignItems='center'>
        <HumanSvg/>
        <Text pt='3px' fontFamily='body' fontSize={14} color='white'>
          {Math.trunc(feels_like)}°C
        </Text>
      </VStack>

      <VStack alignItems='center'>
        <WindSvg/>
        <Text pt={1} fontFamily='body' fontSize={14} color='white'>
          {windspeed} km/h
        </Text>
      </VStack>

      <VStack alignItems='center'>
        <HumiditySvg/>
        <Text pt={2} fontFamily='body' fontSize={14} color='white'>
          {humidity}%
        </Text>
      </VStack>

    </HStack>
  )
}