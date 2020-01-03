module.exports = function( outline ) {

    if( typeof outline !== 'string' ) {

        throw new RangeError('arg1 should be an string') ;
    }

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    outline = outline.puzzler( params.name , '__BUILD_NAME__' ) ;

    outline = outline.puzzler(
        params.name.charAt( 0 ).toUpperCase() + params.name.slice( 1 , )
        , '__BUILD_NAME_CAPITALIZE__'
    ) ;

    return outline ;
} ;
