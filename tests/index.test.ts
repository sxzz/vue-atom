import { expect, it } from 'vitest'
import { shallowRef } from 'vue'
import { atom } from '../src/index'

it('should be equal with shallowRef from vue', () => {
  expect(atom).toBe(shallowRef)
})
