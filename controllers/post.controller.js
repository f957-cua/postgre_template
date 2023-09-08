import db from "../db.js";

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = await db.query(
      `INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`,
      [title, content, userId]
    );
    console.log(newPost);
    res.json(newPost.rows[0]);
  }
  async getPostByUser(req, res) {
    const id = req.query.id;
    const posts = await db.query(`SELECT * FROM post WHERE user_id = $1`, [id]);
    console.log(posts.rows);
    res.json(posts.rows);
  }
}

const postController = new PostController();

export default postController;
