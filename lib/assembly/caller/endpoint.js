module.exports = function( outline ) {

    ['outside',  'inside']
    .forEach( buildName => {

        const path = `./${buildName}.js` ;

        outline = require( path )( outline ) ;

    } ) ;

    return outline ;

} ;
