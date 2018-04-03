// posts.js
// Module 2 Lab
// Introduction to nodejs: Microsoft
// res-blog-api express app

module.exports = {
	getPosts(req, res) {
		// TODO: get posts
		res.status(200).send(store.posts)
	},
	addPost(req, res) {
		// TODO: add a new post to store
		let newPost = req.body
		let pId = store.posts.length
		store.posts.push(newPost)
		res.status(201).send({pId: pId})
	},
	updatePOST(req, res) {
		// TODO: update post already added
		store.posts[req.parms.pId] = req.body
		res.status(200).send(store.posts[req.parms.pId])
	},
	removePost(req, res) {
		// TODO: deleta posts of store
		store.posts.splice(req.params.pId, 1)
		res.status(204).send()
	}
}