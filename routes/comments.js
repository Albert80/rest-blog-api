// comments.js
// Module 2 Lab
// Introduction to nodejs: Microsoft
// res-blog-api express app

module.exports = {
	getComments(req, res) {
		// TODO
		res.status(200).send(req.store.posts[req.params.pId].comments)
	},
	addComment(req, res) {
		// TODO
		let newComment = req.body
		let cId = req.store.posts.comments.length
		let cmts = req.store.posts[req.params.pId].comments
		cmts.push(newComment)
		res.status(201).send({cId: cId})
	},
	updateComment(req, res) {
		// TODO
		//req.store.posts[req.params.pId].comments[req.params.cId] = Object.assign(req.store.posts[req.params.pId].comments[req.params.cId], req.body)
		req.store.posts[req.params.pId].comments[req.params.cId] = req.body
		res.status(200).send(req.store.posts[req.params.pId].comments[req.params.cId])
	},
	removeComment(req, res) {
		req.store.posts[req.params.pId].comments.splice(req.params.cId, 1)
		res.status(204).send()
	}
}