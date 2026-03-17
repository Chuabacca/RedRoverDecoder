import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 20, fontWeight: 600}}>Welcome to Red Rover Decoder</Text>
      <Text style={{padding: 24, textAlign: "center"}}>Tap on a tab below to see the parsed string with the field names in alphabetical or default order.</Text>
    </View>
  );
}
