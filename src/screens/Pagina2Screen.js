import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTeme'

export const Pagina2Screen = ({navigation}) => {
  return (
    <View style={styles.globalMargin}>
        <Text>Pagina2Screen</Text>

        <Button 
          title='Ir Pagina 3'
          onPress={()=> navigation.navigate('Pagina3Screen')}
        />
    </View>
  )
}