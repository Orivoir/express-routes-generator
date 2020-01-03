/**
 * @module get-one
 * @exports Function build name **ressource crud getOne**
 * @param {string} outline model puzzle
 * @return {string} string `outline` **ressource crud getOne** transform
 */
module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    return outline.puzzler(
        params.getOne.route
        .filter( ressource => ressource.length )
        .join('/')
        , '__BUILD_GET_ONE_ROUTE_NAME__'
    ) ;
} ;
