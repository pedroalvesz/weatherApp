import { Center, Spinner } from 'native-base'

export function Loading() {
  return(
    <Center flex={1} bg='#080A2F'>
      <Spinner
      color='white'
      size={16}
      />
    </Center>
  )
}