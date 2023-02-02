import { View } from 'react-native'

interface Props {
  progress?: number
}

export function ProgressBar({ progress = 0 }: Props) {
  return (
    <View className='w-full h-3 rouned-xl bg-zinc-700 mt-4'>
      <View
        className='h3 rounded-xl bg-violet-600'
        style={{ width: `${progress}%`}}
      />
    </View>
  )
}