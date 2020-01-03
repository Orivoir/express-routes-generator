/**
 * @module endpoint partial build of `express-routes-generator`
 * @exports Function build http access name elements `request` / `response`
 * @param {string} outline model puzzle
 * @return {string} string `outline` **http access name** transform
 */
module.exports = function( outline ) {

    if( typeof outline !== 'string' ) {

        throw new RangeError( 'arg1 should be an string' ) ;
    }

    ['req','res'].forEach( httpAccessName => {

        const path = `./build-${httpAccessName}-name.js` ;

        outline = require( path )( outline ) ;

    } ) ;

    return outline ;

} ;
