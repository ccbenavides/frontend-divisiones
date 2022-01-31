import { configureStore  } from '@reduxjs/toolkit'
 
import divisionDataSlice from './reducers/slices/divisionDataSlice'

const store = configureStore({
    reducer: {
        divisionData: divisionDataSlice         
    }
})

export default store 
