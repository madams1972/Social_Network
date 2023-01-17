const { connect, connection} = require('mongoose');
const (connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});
module.exports = connection;