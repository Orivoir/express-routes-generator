process['express-routes-generator'] = {} ;

const
    NormalizeParams = require('./normalize-params') ,
    CheckParams = require('./check-params')
;

module.exports = function( params ) {

    const env = process['express-routes-generator'] ;

    env.params = new NormalizeParams( params ).params ;

    env.statusParams = new CheckParams( env.params ).status ;

    return env ;
} ;
