import { configureStore } from "@reduxjs/toolkit";
import editorsReducer from './editors/editorsSlice'

const createStore = () => configureStore({
    reducer: {
        editors: editorsReducer
    }
})

type ConfiguredStore = ReturnType<typeof createStore>
type StoreGetState = ConfiguredStore["getState"]
export type RootState = ReturnType<StoreGetState>
export type AppDispatch = ConfiguredStore["dispatch"]

export default createStore