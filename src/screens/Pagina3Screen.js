import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTeme'

export const Pagina3Screen = ({navigation}) => {
  return (
    <View style={styles.globalMargin}>
        <Text>Pagina3Screen</Text>

        <Button 
        title="Regresar"
        onPress={()=> navigation.pop()}
        />
        <Button 
        title="Ir Pagina 1"
        onPress={()=> navigation.popToTop()}
        />
    </View>
  )
}
