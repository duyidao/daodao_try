import { createContext } from './createContext'

export const [injectContextA, provideContextA] = createContext('provideA')
export const [injectContextB, provideContextB] = createContext('provideB')