/**
 * @module version
 * @exports Function build client **version** name
 * @param {string} outline model puzzle
 * @return {string} string `outline` client **version** transform
 */
module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    return outline.replace( '__BUILD_CLIENT_VERSION__' , params.client.version ) ;

} ;
