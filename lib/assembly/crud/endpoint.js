/**
 * @module endpoint complet **crud** build of `express-routes-generator`
 * @exports Function complet **crud build**
 * @param {string} outline model puzzle
 * @return {string} string `outline` **crud model** transform
 */
module.exports = function( outline ) {

    [
        'build-action','build-name' ,
        'route-name/endpoint' ,
        'http-access-name/endpoint' ,
        'body-controller/endpoint',
        '../client/endpoint' ,
    ].forEach( pointTransform => {

        const path = `./${pointTransform}.js` ;

        outline = require( path )( outline ) ;

    } ) ;

    return outline ;

} ;
