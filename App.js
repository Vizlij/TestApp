import React from 'react'
import { Provider } from 'react-redux'
import { AppNavigation, Layout, store } from './src'


export default () => {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <AppNavigation />
        </Layout>
      </Provider>
    </>
  )
}
