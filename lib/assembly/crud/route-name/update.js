/**
 * @module get-one
 * @exports Function build name **ressource crud update**
 * @param {string} outline model puzzle
 * @return {string} string `outline` **ressource crud update** transform
 */
module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    return outline.puzzler(
        params.update.route
        .filter( ressource => ressource.length )
        .join('/')
        , '__BUILD_UPDATE_ROUTE_NAME__'
    ) ;
} ;
