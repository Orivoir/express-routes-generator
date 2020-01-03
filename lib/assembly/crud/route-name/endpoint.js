/**
 * @module endpoint partial build of `express-routes-generator`
 * @exports Function build crud route ressource
 * @param {string} outline model puzzle
 * @return {string} string `outline` **crud route ressource** transform
 */
module.exports = function( outline ) {

    if( typeof outline !== 'string' ) {

        throw new RangeError() ;
    }

    ['delete','update','create','get-one'].forEach( crudRouteName => {

        const path = `./${crudRouteName}.js` ;

        outline = require( path )( outline ) ;

    } ) ;

    return outline ;

} ;
