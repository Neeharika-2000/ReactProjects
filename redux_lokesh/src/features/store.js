import { configureStore } from '@reduxjs/toolkit'
import countReducer from './countSlice'

const store = configureStore({
  reducer: {                               
    count: countReducer
  },
  middleware: getDefaultMiddleware =>          //To stop serializable check, when using map in countSlice
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store