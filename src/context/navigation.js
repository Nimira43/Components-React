import { createContext } from 'react'

const NavigationContext = createContext()

function NavigationProvider({children}) {
  return (
    <NavigationContext.Provider>
      { children }
    </NavigationContext.Provider>
  )
}

export default NavigationContext