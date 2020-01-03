/**
 * @module get-one
 * @exports Function build name **ressource crud create**
 * @param {string} outline model puzzle
 * @return {string} string `outline` **ressource crud create** transform
 */
module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    return outline.puzzler(
        params.create.route
        .filter( ressource => ressource.length )
        .join('/')
        , '__BUILD_CREATE_ROUTE_NAME__'
    ) ;
} ;
