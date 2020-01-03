/**
 * @module get-one
 * @exports Function build name **ressource crud delete**
 * @param {string} outline model puzzle
 * @return {string} string `outline` **ressource crud delete** transform
 */
module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    return outline.puzzler(
        params.delete.route
        .filter( ressource => ressource.length )
        .join('/')
        , '__BUILD_DELETE_ROUTE_NAME__'
    ) ;
} ;
