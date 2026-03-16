import { Text, View } from "react-native";

export interface CodeBlockParams {
  code: string
}

export default function CodeBlock(params: CodeBlockParams) {
  const { code } = params
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f0f0f0'
      }}
    >
      <View
        style={{
          padding: 36,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#040036',
          borderRadius: 8,
        }}
      >
        <Text style={{color: 'white', fontFamily: 'monospace'}}>{code}</Text>
      </View>
    </View>
  );
}

