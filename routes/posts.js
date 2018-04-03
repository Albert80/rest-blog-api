// posts.js
// Module 2 Lab
// Introduction to nodejs: Microsoft
// res-blog-api express app

module.exports = {
	getPosts(req, res) {
		// TODO: get posts
		res.status(200).send(req.store.posts)
	},
	addPost(req, res) {
		// TODO: add a new post to store
		let newPost = req.body
		let pId = req.store.posts.length
		req.store.posts.push(newPost)
		res.status(201).send({pId: pId})
	},
	updatePost(req, res) {
		// TODO: update post already added
		//req.store.posts[req.params.pId] = Object.assign(req.store.posts[req.params.pId], req.body)
		req.store.posts[req.params.pId] = req.body
		res.status(200).send(req.store.posts[req.params.pId])
	},
	removePost(req, res) {
		// TODO: deleta posts of store
		req.store.posts.splice(req.params.pId, 1)
		res.status(204).send()
	}
}