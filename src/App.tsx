import { ColorSchemeProvider, MantineProvider, type ColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress'
import { RouterProvider } from 'react-router-dom'

import { THEME_STORAGE_KEY } from './constants'
import { AuthProvider } from './context/AuthContext'
import { router } from './router'

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_STORAGE_KEY,
    defaultValue: 'light',
  })
  const toggleColorScheme = () => {
    setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <ModalsProvider>
          <NavigationProgress />
          <Notifications />
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
