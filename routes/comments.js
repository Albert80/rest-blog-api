// comments.js
// Module 2 Lab
// Introduction to nodejs: Microsoft
// res-blog-api express app

module.exports = {
	getComments(req, res) {
		// TODO
		res.status(200).send(store.posts[req.params.pId].comments)
	},
	addComment(req, res) {
		// TODO
		let newComment = req.body
		let cId = store.posts.comments.length()
		store.posts.comments.push(newComment)
		res.status(201).send({cId: cId})
	},
	updateComment(req, res) {
		// TODO
		store.posts[pId].comments[cId] = req.body
		res.status(200).send(store.posts[req.params.pId].comments[cId])
	},
	removeComment(req, res) {
		store.posts[req.params.pId].comments.splice(req.params.cId, 1)
		res.status(204).send()
	}
}