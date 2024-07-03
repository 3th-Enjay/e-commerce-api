const app = require('./app');
const configVariables = require('./config/config');


app.listen(7000, () => {
    console.log('APP LISTENING WELL' + configVariables.PORT)
})