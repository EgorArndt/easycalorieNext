import { configureStore as createStore, Store } from '@reduxjs/toolkit'
// import { configureStore as createStore, Middleware, Store } from '@reduxjs/toolkit'
// import createSagaMiddleware from 'redux-saga'

// import { isDevelopment } from '@utils/is_development'
import { rootReducer } from './root_reducer'
// import { mainSaga } from '@src/store/sagas'

// const defaultMiddlewareOptions = {
//   serializableCheck: {
//     ignoredActionPaths: ['meta.onSuccess', 'meta.onFailure'],
//   },
// }

const configureStore = (): Store => {
//   const sagaMiddleware = createSagaMiddleware()
//   const middleware: Middleware[] = [...getDefaultMiddleware(defaultMiddlewareOptions), sagaMiddleware]

  const store = createStore({
    reducer: rootReducer,
    // middleware,
    // devTools: isDevelopment,
  })

//   sagaMiddleware.run(mainSaga)

  return store
}

export const store = configureStore()

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// ...
export type AppDispatch = typeof store.dispatch