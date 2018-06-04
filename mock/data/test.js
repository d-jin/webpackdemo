const mockjs = require('mockjs')

module.exports = (server) => {
	server.get('/test', (req, res) => {
		const data = mockjs.mock({
			total: '@interger(10,100)',
			'data|100': [{
				header: '@image("30","@color","@cname")',
				name:'@cname',
				user: '@first',
				sex: '@integer(0,1)'
			}]
		})

		setTimeout(() => {
			res.jsonp(data)
		}, 500)
	})
}
