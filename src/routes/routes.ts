import { RouteProps } from 'react-router-dom'

import Manager from '~Screens/Manager'
import PageNotFound from '~Screens/PageNotFound'

export interface RouteType extends RouteProps {
  name: string
  path: string
}

const createRoutes = <T extends object>(
  item: Record<keyof T, RouteType>
): Record<keyof T, RouteType> => item

const routes = createRoutes({
  index: {
    component: Manager,
    name: 'Manager',
    path: '/',
  },
  manager: {
    component: Manager,
    name: 'Manager',
    path: '/manager',
  },
  pageNotFound: {
    component: PageNotFound,
    name: 'Page not found',
    path: '/pagina-no-encontrada',
  },
})

export default routes
