import { shallowRef } from 'vue'
import { expect, it } from 'vitest'
import { atom } from '../src/index'

it('should be equal with shallowRef from vue', () => {
  expect(atom).toBe(shallowRef)
})
