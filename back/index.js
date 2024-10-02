const {app} = require("./src/server");

const host = "localhost"
const port = 3000

app.listen(port, host, () => {
    console.log(`Servidor escuchandose en http://${host}:${port}`);
});

module.exports = {app};