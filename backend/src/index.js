const express = require ("express");
const cors =require ("cors");
const favoritesService = require ("./services/favoritesService");
const authenticationService = require ("./services/authenticationService");

const app = express();
app.use(express.json());
app.use(cors());
const port = 4444;

app.get("/favorites", function(req, res){
    favoritesList = favoritesService.GetFavorites(req.query.username, req.query.sessionID);
    res.status(200).json(favoritesList);
});

app.put("/favorites", function(req, res) {
    if (!authenticationService.UsernameSessionIDConnection(req.body.username, req.body.sessionID))
    {
        res.status(401).send("Unauthorized user.");
    }
    else if (favoritesService.DuplicateCheck(req.body.id, req.body.sessionID))
    {
        res.status(400).send("Ad is already in your favorites list.");
    }
    else
    {
        favoritesService.AddToFavorites(req.body.id, req.body.title, req.body.description, req.body.cost, req.body.imgURL, req.body.username, req.body.sessionID);
        res.status(200).send("Ad added in favorites successfully.")
    }
    
});

app.post("/login", function(req, res) {
    if (authenticationService.LoginUser(req.body.username, req.body.password))
    {
        jsonSessionID = authenticationService.AddToAuthenticatedUsers(req.body.username);  
        return res.status(200).json(jsonSessionID);
    }
    res.status(401).send("Incorrect username or password.");
});

app.listen(port, function() {
    console.log("Waiting...");
});