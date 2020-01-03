/**
 * @module endpoint partial build of `express-routes-generator`
 * @exports Function build client elements ( anotation / doc block ) any file
 * @param {string} outline model puzzle
 * @return {string} string `outline` client all transform
 */
module.exports = function( outline ) {

    if( typeof outline !== 'string' ) {

        throw new RangeError( 'arg1 should be an string' ) ;
    }

    ['author','package','version','license'].forEach( clientBuildName => {

        const path = `./${clientBuildName}.js` ;

        outline = require( path )( outline ) ;

    } ) ;

    return outline ;

} ;
