import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picture } from '../index'

const sizes = {
  s: 18,
  m: 20,
  l: 30,
  xl: 40,
  xxl: 60
}

export default ({src, name, size = 'l', color = '', onLoad}) => {
  const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    image: {
      width: sizes[size],
      height: sizes[size],
      borderRadius: sizes[size] / 2
    },
    text: {
      fontSize: sizes[size] / 2,
      margin: 5,
      color: color
    }
  })
  return (
    <View style={styles.imageContainer}>
      <Picture src={src} style={styles.image} onLoad={onLoad} />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}
