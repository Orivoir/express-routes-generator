/**
 * @module author
 * @exports Function build client **author** name
 * @param {string} outline model puzzle
 * @return {string} string `outline` client **author** transform
 */
module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    return outline.puzzler( params.client.lisence , '__BUILD_CLIENT_LICENSE__' ) ;
} ;
