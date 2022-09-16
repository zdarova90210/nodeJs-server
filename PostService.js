import Post from "./Post.js";

class PostService {
  async create(post) {
    return Post.create(post);
  }

  async getAll() {
    return Post.find();
  }

  async getOne(id) {
    if (!id) throw new Error('Id не указан (сосатб)');
    return Post.findById(id);
  }

  async update(post) {
    if (!post._id) throw new Error('Id не указан (сосатб + лежатб)');
    return Post.findByIdAndUpdate(post._id, post, {new: true});
  }

  async deleteOne(id) {
    if (!id) throw new Error('Id не указан (сосатб) х2');
    return Post.findByIdAndDelete(id);
  }
}

export default new PostService();
