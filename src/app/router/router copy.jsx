import { createBrowserRouter } from 'react-router'
import { appRouterRoutes } from './appRouterRoutes'
import { Mutex } from 'async-mutex'
import { authCheckLoader } from './authCheckLoader'

import { MainLayout } from '@/widgets/layouts'
import GlobalErrorPage from '@/pages/GlobalErrorPage'
import HomePage from '@/pages/HomePage'

// Глобальний м'ютекс для запобігання конкурентним запитам оновлення
const refreshMutex = new Mutex()
// Лоадер для перевірки автентифікації та ролей користувача
const authLoader = authCheckLoader({
  refreshMutex,
})

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    // loader: ()=>authLoader,
    errElement: <GlobalErrorPage />,
    children: appRouterRoutes.map((route) => ({
      ...route,
      loader: () => authLoader(route),
    })),
  },
])
