/**
 * @module build-req-name
 * @exports Function build name **response HTTP** name access
 * @param {string} outline model puzzle
 * @return {string} string `outline` **response HTTP** name access transform
 */
module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    return outline.puzzler(
        params.responseName ,
        '__BUILD_RES_NAME__'
    ) ;
} ;
