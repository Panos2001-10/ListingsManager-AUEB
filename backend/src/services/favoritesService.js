const usersFavorites = [];

function AddToFavorites(id, title, description, cost, imgURL, username, sessionID)
{
    const favorite = {
        id: id,
        title: title,
        description: description,
        cost: cost,
        imgURL: imgURL,
        username: username,
        sessionID: sessionID
    };

    usersFavorites.push(favorite);
}

function DuplicateCheck(id, sessionID)
{
    for (const element of usersFavorites)
    {
        if (id === element.id && sessionID === element.sessionID)
        {
            return true;
        }
    }
    return false;
}

function GetFavorites(username, sessionID)
{
    let userFavorites = [];
    for (const element of usersFavorites)
    {
        if (username === element.username && sessionID === element.sessionID)
        {
            userFavorites.push({
                id: element.id,
                title: element.title,
                description: element.description,
                cost: element.cost,
                imgURL: element.imgURL,
            });
        }
    }
    return userFavorites;
}

module.exports = { AddToFavorites, DuplicateCheck, GetFavorites };