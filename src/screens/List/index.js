import React, { useEffect, useCallback } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Picture, User, loaderActions } from '../../index'

export default ({ navigation }) => {
  const dispatch = useDispatch()
  const images = useSelector(state => state.images)
  const handleLoader = useCallback(() => {
    dispatch(loaderActions(false))
  }, [dispatch])

  useEffect(() => {
    handleLoader()
  }, [handleLoader])

  return (
    <View style={styles.listContainer}>
      {images.error ? (
        <Text style={styles.error}>{JSON.stringify(images.error)}</Text>
      ) : (
        <FlatList
          data={images.images}
          keyExtractor={i => i.id}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <>
              <User
                src={item.user.profile_image.large}
                name={item.user.name}
                color='#34343C'
              />
              <Picture
                src={item.urls.regular}
                style={styles.styleImage}
                onPress={() => navigation.navigate('Photo', { itemUrl: item.urls.regular })}
              />
            </>
          }
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1E1E1'
  },
  flatList: {
    flex: 1,
    padding: 5
  },
  styleImage: {
    width: 250,
    height: 250,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 50
  },
  error: {
    fontSize: 20,
    color: 'red'
  }
})
