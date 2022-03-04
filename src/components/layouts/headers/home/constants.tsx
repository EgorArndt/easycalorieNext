import { Widget, Layers, Circle, Analytics, Airplane, Calculator } from '@icons'
import routes from 'constants/routes'

export const menuItems = [
  { title: 'Macronutrient calculator', i: <Calculator /> },
  { title: 'Food database', i: <Layers /> },
  { title: 'Scientific approvement', i: <Circle /> },
  { title: 'User friendly interface', i: <Widget /> },
  { title: 'Nutrition analytics', i: <Analytics /> },
  { title: 'Totally free to use', i: <Airplane /> },
]

export const links = [
  { txt: 'Dashboard', to: routes.dashboard },
  { txt: 'Blog', to: routes.dashboard },
  { txt: 'News', to: routes.dashboard },
]
