import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTeme'

export const Pagina1Screen = ({navigation}) => {
  return (
    <View style={styles.globalMargin}>
        <Text>Pagina1Screen</Text>

        <Button 
          title='Ir Pagina 2'
          onPress={()=> navigation.navigate('Pagina2Screen')}
        />
    </View>
  )
}
