import { Text, View } from 'react-native'

export interface CodeBlockParams {
  code: string
}

export default function CodeBlock({ code }: CodeBlockParams) {
  return (
    <View
      style={{
        padding: 36,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#040036',
        borderRadius: 8,
        width: '80%'
      }}
    >
      <Text style={{color: 'white', fontFamily: 'Courier'}}>{code}</Text>
    </View>
  )
}

