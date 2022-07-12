import { describe, expect, it } from 'vitest'
import { modules } from '../meta/modules'
import { getSidebarByModules } from '../src/.vitepress/config'

describe('suite name', () => {
  it('getSidebarByModules', () => {
    expect(getSidebarByModules(modules)).toMatchInlineSnapshot(`
      [
        {
          "items": [
            {
              "link": "/guide/",
              "text": "guide",
            },
          ],
          "text": "guide",
        },
        {
          "items": [
            {
              "link": "/a/",
              "text": "a",
            },
            {
              "link": "/b/a",
              "text": "b",
            },
          ],
          "text": "module_a",
        },
        {
          "items": [
            {
              "link": "/a/b",
              "text": "a",
            },
            {
              "link": "/b/",
              "text": "b",
            },
          ],
          "text": "module_b",
        },
      ]
    `)
  })
})
