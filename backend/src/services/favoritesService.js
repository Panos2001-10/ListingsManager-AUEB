const userFavorites = [];

function AddToFavorites(id, title, description, cost, imgURL, username, sessionID)
{
    userFavorites.push({ 
        id: id,
        title: title,
        description: description,
        cost: cost,
        imgURL: imgURL,
        username: username,
        sessionID: sessionID
    });
}

function DuplicateCheck(id, sessionID)
{
    for (const element of userFavorites) {
        if (id === element.id && sessionID === element.sessionID) {
            return true;
        }
    }
    return false;
}

module.exports = {AddToFavorites, DuplicateCheck};