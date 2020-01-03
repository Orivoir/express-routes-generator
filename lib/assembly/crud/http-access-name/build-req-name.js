/**
 * @module build-req-name
 * @exports Function build name **request HTTP** name access
 * @param {string} outline model puzzle
 * @return {string} string `outline` **request HTTP** name access transform
 */
module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    return outline.puzzler(
        params.requestName ,
        '__BUILD_REQ_NAME__'
    ) ;

} ;
