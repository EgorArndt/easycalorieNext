// import { StateFromReducersMapObject } from '@reduxjs/toolkit'

import googleAuthSlice from './auth/slice'

export const rootReducer = {
  auth: googleAuthSlice,
}

// export type AppState = StateFromReducersMapObject<typeof rootReducer>
