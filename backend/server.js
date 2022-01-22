const { Mongoose } = require("mongoose");
const server = require("./app");
const port = process.env.PORT || 4000;

const listner = server.listen(port, function () {
    console.log(`Server running on port: ${port}`);
});

const close = () => {
    listner.close();
};

module.exports = {
    close: close,
};