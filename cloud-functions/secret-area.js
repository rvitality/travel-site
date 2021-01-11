exports.handler = function (event, context, callback) {
    console.log("Test");
    callback(null, {
        statuCode: 200,
        body: "Welcome to the super secret area."
    })
}