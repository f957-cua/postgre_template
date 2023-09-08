import db from "../db.js";

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body;
    const { rows } = await db.query(
      `INSERT INTO person (name, surname) values ($1, $2) RETURNING *`,
      [name, surname]
    );
    console.log(rows);
    res.json(rows);
  }
  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM person");
    console.log(users.rows);
    res.json(users.rows);
  }
  async getOneUser(req, res) {
    const { id } = req.params;
    const user = await db.query(`SELECT * FROM person WHERE id = $1`, [id]);
    console.log(user.rows[0]);
    res.json(user.rows[0]);
  }
  async updateUser(req, res) {
    const { name, surname, id } = req.body;
    const updatedUser = await db.query(
      `UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *`,
      [name, surname, id]
    );
    console.log(updatedUser);
    res.json(updatedUser);
  }
  async deleteUser(req, res) {
    const { id } = req.params;
    const user = await db.query(`DELETE FROM person WHERE id = $1`, [id]);
    console.log(user.rows[0]);
    res.json(user.rows[0]);
  }
}

const userController = new UserController();

export default userController;
