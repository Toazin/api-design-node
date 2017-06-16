require('dotenv').config();
var _ = require('lodash');

var config = {
    development: 'development',
    test: 'test',
    production: 'production',
    port: process.env.PORT,
    //2days in minutes
    expireTime: 24*60*10,
    secrets:{
        jwt: process.env.JWT
    }
};

var development = {
    db: {
        url: process.env.MONGO_APP
    }
}

var test ={
    db: {
        url: process.env.MONGO_TEST
    }
}

var production ={

}

config.env = process.env.NODE_ENV || config.test;

switch (config.env) {
    case "test":
        module.exports = _.merge(config, test);
        break;
    case "development":
        module.exports = _.merge(config, development);
        break;
    case "production":
        module.exports = _.merge(config, production);
        break;
    default:
        module.exports = _.merge(config, test);
}
