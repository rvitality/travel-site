exports.handler = function (event, context, callback) {
    const secretContent = `
        <h3>Welcome to the Secret Area!</h3>
        <p>Here we can tell you that the sky is blue, and one plus one is two.</p>
    `;

    let body;

    if (event.body) {
        body = JSON.parse(event.body);
    } else {
        body = {};
    }

    if (body.password === "javascript") {
        callback(null, {
            statuCode: 200,
            body: "Welcome to the super secret area."
        })
    } else {
        callback(null, {
            statuCode: 401,
        })
    }

}