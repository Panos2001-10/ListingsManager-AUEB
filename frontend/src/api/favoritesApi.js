async function AddToFavorites(id, title, description, cost, imgURL, username, sessionID) {
    console.log(cost);
    console.log(username);
    console.log(imgURL);
    const response = await fetch(backlendURL + "/favorites", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: id,
            title: title,
            description: description,
            cost: cost,
            imgURL: imgURL,
            username: username,
            sessionID: sessionID
        })
    });
    return response;
}
