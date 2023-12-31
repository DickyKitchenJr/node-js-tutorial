const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res.status(400).json({ message: "Username and Password Required" });
  }
  const foundUser = usersDB.users.find(person => person.username === user);
  if(!foundUser){
    return res.sendStatus(401);//401 = unauthorized
  }
  // evaluate password
  const match = await bcrypt.compare(pwd, foundUser.password);
  if(match){
    //would normally create JWTs here (will be address in next tutorial)
    return res.json({"message": `User: ${user} is logged in`});
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };