import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTeme'

export const Pagina1Screen = ({navigation}) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>

        <Button 
          title='Ir Página 2'
          onPress={()=> navigation.navigate('Pagina2Screen')}
        />
    </View>
  )
}
