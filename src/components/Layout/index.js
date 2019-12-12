import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { Loader } from '../index'

export default ({ children = {} }) => {
  const resLoader = useSelector(state => state.loader.loader)
  const [loader, setLoader] = useState()

  useEffect(() => {
    setLoader(resLoader)
  }, [loader])

  return (
    <View style={styles.root}>
      {loader ? (<Loader size='large' />) : children}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    overflow: 'hidden'
  },
  loader: {
    flex: 1,
    justifyContent: 'center'
  }
})