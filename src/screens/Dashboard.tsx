import { useEffect, useState } from 'react'
import { VStack, Heading, Text, HStack, Box, ScrollView } from 'native-base';
import Lottie from 'lottie-react-native'
import * as Location from 'expo-location'

import { DataList } from '../components/DataList';
import { api } from '../services/api';

import { placeDTO } from '../DTO/placeDTO'
import { RefreshControl } from 'react-native';


export function Dashboard() {

  const [placeData, setPlaceData] = useState({} as placeDTO)
  const [fullDate, setFullDate] = useState('')

  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)


  useEffect(() => {
    getLocation()
  },[])

  async function onRefresh() {
    setIsRefreshing(true)
    //await fetchData(placeData.data.coord.lat, placeData.data.coord.lon)
    await getLocation()
    setIsRefreshing(false)
  }

  async function getLocation() {

    const { status } = await Location.requestForegroundPermissionsAsync()

    if(status !== 'granted') {
      console.log('Permission denied')
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync()

    fetchData(coords.latitude, coords.longitude)
  }


  async function fetchData(lat: number, lon: number) {
    try {
      
      const response = await api.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4e8f41051466420458bed81135e27913&units=metric`)
      setPlaceData(response)


      const monthNames = ["jan", "feb ", "mar", "apr", "may", "jun",
      "jul", "aug", "sep", "oct", "nov", "dec"
      ];

      const currentTimeStamp = new Date()

      const currentMonth = monthNames[currentTimeStamp.getMonth()]
      const currentYear = currentTimeStamp.getFullYear()
      const currentDate = currentTimeStamp.getDate()

      const currentFullDate = currentMonth +' '+currentDate+', '+currentYear

      setFullDate(currentFullDate)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }



  return(
    <ScrollView
    h='100%'
    pt={20}
    bg='#080A2F'
    refreshControl={<RefreshControl refreshing={isRefreshing}  onRefresh={onRefresh} progressViewOffset={30} tintColor='white' colors={['white']} />}

    >
      {
        isLoading ? <VStack/> :
        <VStack px={6} alignItems='center'>
        <VStack pb={5} alignItems='center'>
          <Text fontFamily='heading' color='white' fontSize={40}>
            {placeData.data.name}
          </Text>
          <Text fontFamily='body' color='#CACACA' fontSize={20}>
            {fullDate}
          </Text>
        </VStack>

        <HStack bg='#4084DF:alpha.20' rounded='xl' px={4} pt={4}>
          <Lottie
          source={require('../assets/cloudy-weather.json')}
          autoPlay
          loop
          style={{
            width: 192
          }
          }
          />

          <VStack pt={3} pb={12} alignItems='center' justifyContent='center'>
            <Heading fontFamily='heading' color='white' fontSize={48}>
              {Math.trunc(placeData.data.main.temp)}°C
            </Heading>
            <Text fontFamily='body' color='#CACACA' fontSize={14} textTransform='capitalize'>
              {placeData.data.weather[0].description}
            </Text>
          </VStack>
        </HStack>

        <DataList
        mt={10}
        windspeed={placeData.data.wind.speed}
        humidity={placeData.data.main.humidity}
        feels_like={placeData.data.main.feels_like}
        />
        
      </VStack>
      }
    </ScrollView>
  )
}