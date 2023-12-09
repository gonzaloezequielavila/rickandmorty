const { User } = require('../DB_connection');

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: `Something's missing` });

    const [createdUser, created] = await User.findOrCreate({
      where: { email }, //Si no está ese email, entonces crearlo 
      defaults: {       //y agregar password
        password,
      },
    });

    if (created) {
      return res.status(201).json(createdUser);
    } else {
      return res.status(200).json(createdUser);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;