module.exports = function( outline ) {

    if( typeof outline !== 'string' ) {

        throw new RangeError('arg1 should be an string') ;
    }

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    outline = outline.puzzler(
        params.action.join('/')
        , '__BUILD_ACTION__'
    ) ;

    return outline ;
} ;
