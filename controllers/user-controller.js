const { prisma } = require("../prisma/prisma-client");
const bcrypt = require("bcryptjs");

const UserController = {
  register: async (req, res) => {
    const { name, pass, email } = req.body;

    if (!name || !pass || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ error: "The user already exists" });
      }

      const hashedPass = await bcrypt.hash(pass, 10);
    } catch (error) {}
  },
  login: async (req, res) => {
    res.send("log");
  },
  getUserById: async (req, res) => {
    res.send("get");
  },
  updateUser: async (req, res) => {
    res.send("upd");
  },
  current: async (req, res) => {
    res.send("curr");
  },
};

module.exports = UserController;
