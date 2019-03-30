import expect from 'expect'

const map = require('../../data/geojson/roads.json')

describe('parse geojson', () => {
	it('is not undefined', async () => {
		expect(map).not.toEqual('undefined')
	})
});