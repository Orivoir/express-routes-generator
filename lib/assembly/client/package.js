/**
 * @module package
 * @exports Function build client **package** name
 * @param {string} outline model puzzle
 * @return {string} string `outline` client **package** transform
 */
module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    return outline.puzzler( params.client.package  , '__BUILD_CLIENT_PACKAGE__' ) ;

} ;
