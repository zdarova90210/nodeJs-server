import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body)
      console.log(req.body);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      console.log(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id)
      return res.json(post);
    } catch (e) {
      console.log(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body)
      res.json(updatedPost);
    } catch (e) {
      console.log(e.message);
    }
  }

  async deleteOne(req, res) {
    try {
      const post = await PostService.deleteOne(req.params.id);
      return res.json(post);
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default new PostController();
