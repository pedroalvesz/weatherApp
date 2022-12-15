import { VStack, Heading, Text } from 'native-base';

export function Dashboard() {
  return(
    <VStack flex={1} bg='#080A2F'>
      <VStack flex={1} px={8} pt={20}>
        <Heading color='white'>
          CIDADE
        </Heading>
        <Text>
          00 jan, 2022
        </Text>

      </VStack>
    </VStack>
  )
}