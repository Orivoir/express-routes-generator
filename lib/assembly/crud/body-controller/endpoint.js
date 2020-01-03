module.exports = function( outline ) {

    ['build-query-strings-params']
    .forEach(builderName => {

        const path = `./${builderName}.js` ;

        outline = require( path )( outline ) ;
    });

    return outline ;

} ;
