const { User } = require('../DB_connection');

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password)
      return res.status(400).json({ message: `Something's missing` });

    const loggedUser = await User.findOne({
      where: { email },
    });

    if (!loggedUser)
      return res.status(404).json({ message: `User not found` });

    return loggedUser.password === password
      ? res.json({ access: true })
      : res.status(403).json({ message: `Invalid Password` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;
