import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default ({ size }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color='#db493b' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})