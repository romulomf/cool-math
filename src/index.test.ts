import {expect, test} from 'vitest'

import { sum } from './index.ts'

test('add 1 and 3 and expect 4', () => {
	const result: number = sum(1, 3)
	expect(4).toBe(result)
})