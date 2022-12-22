import { Skeleton, VStack } from 'native-base'

export function SkeletonScreen() {

  const START_COLOR = 'gray.200';
  const END_COLOR = 'gray.300'

  return(
    <VStack flex={1} px={4} alignItems='center'>
      <Skeleton rounded='md' w={48} mb={5} startColor={START_COLOR} />
      <Skeleton rounded='md' h={5} w={48} startColor={START_COLOR} />
      <Skeleton rounded='xl' mt={4} mb={10} h={48} startColor={START_COLOR}/>
      <Skeleton rounded='xl' h={24} w={64} startColor={START_COLOR}/>
    </VStack>
  )
}