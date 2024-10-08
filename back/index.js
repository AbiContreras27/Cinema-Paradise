const {app} = require("./src/server");
const {dbCon} = require("./src/config/dbCon");

dbCon().then(() => {
        const host = "localhost"
        const port = 3000
        
        app.listen(port, host, () => {
            console.log(`Servidor escuchandose en http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.log('Error al conectar la BD');
    });


module.exports = {app, dbCon};