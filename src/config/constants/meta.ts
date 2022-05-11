import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'React App',
  description:
    'React-redux boilerplate',
  image: '',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home',
  }
}
