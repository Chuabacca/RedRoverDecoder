import { Tabs } from 'expo-router'
import { Image} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#040036',
        },
        tabBarActiveTintColor: '#ec625c',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="alphabetical"
        options={{
          title: 'Alphabetical',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={'text'}
              color={focused ? '#ec625c' : 'white'}
              size={24}/>
          )
        }}
      />
      <Tabs.Screen 
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                  backgroundColor: 'white'
                }}
                source={require('./../../assets/images/red-rover-icon.png')}
            />
          )
        }}
      />
      <Tabs.Screen
        name="default"
        options={{
          title: 'Default',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={'shapes-outline'}
              color={focused ? '#ec625c' : 'white'}
              size={24}
            />
          )
        }}
      />
    </Tabs>
  )
}
