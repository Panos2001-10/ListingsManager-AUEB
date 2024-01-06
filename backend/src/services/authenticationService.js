const { v4: uuidv4 } = require('uuid');

const users = [
    {
        username: "user1",
        password: "user1"
    },
    {
        username: "user2",
        password: "user2"
    },
    {
        username: "user3",
        password: "user3"
    }
];

const authenticatedUsers = [];

function LoginUser(username, password)
{
    for (const element of users) {
        if (username === element.username && password === element.password) {
            return true;
        }
    }
    return false;
}

function AddToAuthenticatedUsers(username)
{
    const sessionID = uuidv4();
    const jsonSessionID = {sessionId: sessionID};
    authenticatedUsers.push({ username: username, sessionID: sessionID});
    return jsonSessionID;
}

function UsernameSessionIDConnection(username , sessionID)
{
    for (const element of authenticatedUsers) {
        if (username === element.username && sessionID === element.sessionID) {
            return true;
        }
    }
    return false;
}

module.exports = {LoginUser, AddToAuthenticatedUsers, UsernameSessionIDConnection};