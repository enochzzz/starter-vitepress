import type { ModuleMainest } from './types'

export const modules: ModuleMainest[] = [
  {
    name: 'guide',
    description: 'this is guide',
    author: 'enoch <https://github.com/enochzzz>',
    children: [
      {
        name: 'guide',
        route: '/guide/',
      },
    ],
  },
  {
    name: 'module_a',
    description: 'this is module_a',
    author: 'enoch <https://github.com/enochzzz>',
    children: [
      {
        name: 'a',
        route: '/a/',
      },
      {
        name: 'b',
        route: '/b/a',
      },
    ],
  },
  {
    name: 'module_b',
    description: 'this is module_b',
    author: 'enoch <https://github.com/encozzz>',
    children: [
      {
        name: 'a',
        route: '/a/b',
      },
      {
        name: 'b',
        route: '/b/',
      },
    ],
  },
]
