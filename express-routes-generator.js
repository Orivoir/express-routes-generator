require('string-puzzler') ; // import method "String.prototype.puzzler"

const hydrateEnv = require('./lib/env-vars') ;
const response = require('./lib/response') ;
const callBuild = require('./lib/call-build.js') ;
const path = require('path') ;

const generator = function( params ) {

    return new Promise( (resolve,reject) => {

        generator.body( params ) ;

        if( !response.success ) {

            if( /^4\d{2}$/.test(response.code) ) { // error 4x

                resolve( {
                    success: false,
                    code: response.code
                    ,success: false
                } ) ;

            } else { // error 5x

                reject( {
                    code: response.code
                } ) ;
            }

        } else {
            // build have run
            resolve( {
                success: true,
                code: response.code,
                content: response.content
            } ) ;
        }

    } ) ;

} ;

generator.sync = function( params ) {

    generator.body( params ) ;

    return response ;
} ;

generator.body = function( params ) {

    const env = hydrateEnv( params ) ;

    const {statusParams} = env ;

    if( env.params.type === 'model-route' ) {
        // done: path model-route class
        response.success = true;
        response.code = 200;
        response.content = path.join(__dirname , 'model-route.js') ;

    } else {

        if( !statusParams.isValid ) {

            response.success = false ;
            response.code = statusParams.error ;
            delete response.content;

        } else {
            // run build

            const buildText = callBuild() ;

            response.content = buildText ;
            response.success = true;
            response.code = 200;
        }

    }

} ;

module.exports = generator ;

