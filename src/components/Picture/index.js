import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Loader } from '../index'

export default ({src, style, onPress}) => {
  const load = useSelector(state => state.images.load)
  const image = <Image source={{uri: src}} style={style}/>
  const renderImage = () =>
    onPress ? (
      <TouchableOpacity onPress={onPress}>
        {image}
      </TouchableOpacity>
    ): image

  return (
    <>
      {!!load || !src ? (<View style={style}><Loader size='small' /></View>) : renderImage()}
    </>
  )
}
