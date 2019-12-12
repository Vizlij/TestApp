import React, { useEffect, useState } from 'react'
import { View, Dimensions, Image, StyleSheet } from 'react-native'
import { Picture } from '../../index'

const win = Dimensions.get('window')

export default ({ navigation }) => {
  const itemUrl = navigation.getParam('itemUrl')
  const [imageHeight, segImageHeight] = useState()

  useEffect(() => {
    Image.getSize(itemUrl, (width, height) => {
      const ratio = win.width / width
      segImageHeight(height * ratio)
    })
  })

  return (
    <View style={styles.photoContainer}>
      <Picture src={itemUrl} style={{ width: win.width, height: imageHeight }} />
    </View>
  )
}

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E1E1E1'
  }
})
