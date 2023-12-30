const backlendURL = "http://localhost:4444";

async function LogInUser(username, password){
    const response = await fetch(backlendURL + "/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    return response;
}
