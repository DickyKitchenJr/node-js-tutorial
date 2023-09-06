const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogout = async (req, res) => {
  // for the front-end = On client, also delete the access token
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);//204 = successful with no content
  const refreshToken = cookies.jwt;
  // is refreshToken in db (database)
  const foundUser = usersDB.users.find(
    (person) => person.refreshToken === refreshToken
  );
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return res.sendStatus(204);
  }
  // delete refreshToken in the db
  const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
  const currentUser = {...foundUser, refreshToken: ''};
  usersDB.setUsers(...otherUsers, currentUser);
  await fsPromises.writeFile(
    path.join(__dirname, '..', 'model', 'users.json'),
    JSON.stringify(usersDB.users)
  );

  res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); //secure: true - makes it so that it only serves on https (vs http)
  res.sendStatus(204);
};

module.exports = { handleLogout };
