import { View } from 'react-native'
import CodeBlock from '@/components/CodeBlock'
import rawString from '@/view-models/rawData'
import parser from '@/view-models/parserViewModel'


export default function Functional() {
  const result = parser({ input: rawString, sort: 'func' })
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0'
    }}
    >
      <CodeBlock code={result} />
    </View>
  )
}
