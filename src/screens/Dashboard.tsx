import { useEffect, useState } from 'react'
import { VStack, Heading, Text, Button, HStack, Box, Select } from 'native-base';
import Lottie from 'lottie-react-native'

import { DataList } from '../components/DataList';
import { api } from '../services/api';

import { placeDTO } from '../DTO/placeDTO'

type placeProps = {
  name: string,
  lat: number,
  lon: number
}

export function Dashboard() {

  const [places, setPlaces] = useState<placeProps[]>([
    {
      name: 'New York',
      lat: 40.7,
      lon: -73.9,
    },
    {
      name: 'Amsterdam',
      lat: 40.7,
      lon: -73.9,
    },
    {
      name: 'Osaka',
      lat: 34.6,
      lon: 135.4  ,
    },
    {
      name: 'Rio de Janeiro',
      lat: -22.9,
      lon: -43.1,
    },
    {
      name: 'Paris',
      lat: 48.8,
      lon: 2.34,
    },
  ])

  const [selectedPlace, setSelectedPlace] = useState('Paris')

  const [placeData, setPlaceData] = useState({} as placeDTO)

  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    fetchData(selectedPlace)
  },[])

  async function fetchData(place: string) {
    try {
      const response = await api.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=4e8f41051466420458bed81135e27913`)
      setPlaceData(response)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  console.log(placeData)

  return(
    <VStack flex={1} bg='#080A2F'>
      {
        isLoading ? <VStack/> :
        <VStack flex={1} px={8} pt={20} alignItems='center'>
        <VStack pb={5} alignItems='center'>
          <Text fontFamily='heading' color='white' fontSize={40}>
            {placeData.data.name}
          </Text>
          <Text fontFamily='body' color='#CACACA' fontSize={20}>
            00 jan, 2022
          </Text>
        </VStack>

        <HStack bg='#4084DF:alpha.20' rounded='xl' px={4} pt={4}>
          <Lottie
          source={require('../assets/cloudy-raining.json')}
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
            <Text fontFamily='body' color='#CACACA' fontSize={15} textTransform='capitalize'>
              {placeData.data.weather[0].description}
            </Text>
          </VStack>
        </HStack>

        <DataList mt={10}/>
        
        <Box
        bg='#4084DF:alpha.20'
        position='absolute'
        bottom={7}
        w={56}
        h={16}
        rounded='xl'
        justifyContent='center'
        alignItems='center'
        >
          <Select
          width='full'
          placeholder='Choose a city'
          onValueChange={place => fetchData(place)}
          >
            {
              places.map((place) => <Select.Item label={place.name} value={place.name} /> )
            }
          </Select>
        </Box>
      </VStack>
      }
    </VStack>
  )
}