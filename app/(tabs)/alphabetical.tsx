import { Text, View } from 'react-native'
import CodeBlock from '@/components/CodeBlock'
import rawString from '@/view-models/rawData'
import parser from '@/view-models/parserViewModel'


export default function Functional() {
  const result = parser({ string: rawString, alphabetical: true})
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 48
    }}
    >
      <View style={{alignItems: 'flex-start', width: '100%'}}>
        <Text style={{
          fontSize: 24,
          fontWeight: 800,
          paddingBottom: 12
        }}>Alphabetical</Text>
      </View>
      <CodeBlock code={result} />
    </View>
  )
}
