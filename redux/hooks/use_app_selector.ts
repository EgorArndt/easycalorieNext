import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { AppState } from '..'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector