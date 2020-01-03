module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    // '__BUILD_QUERY_STRING_PARAMS_'

    const queryStringAction = params.action
        .filter( r => r.indexOf(':') !== -1 )
        .map( r => r.replace(':','') )
        .join(',')
    ;

    ['CREATE','UPDATE','DELETE','GET_ONE']
    .forEach( querySringCrudName => {

        const queryStringName = `__BUILD_QUERY_STRING_PARAMS_${querySringCrudName}__` ;
        let nextInUpper = false;
        const routeName = querySringCrudName.toLocaleLowerCase().split('')
        .map( char => {

            if( nextInUpper ) {
                char = char.toUpperCase() ;
                nextInUpper = false;
            }

            else if( char === '_' ) {
                nextInUpper = true;
                char = '' ;
            }

            return char ;
        } ).join('');

        let queryStringRouteName  = queryStringAction + ',' + params[routeName].route
            .filter( r => r.indexOf(':') !== -1 )
            .map( r => r.replace(':','') )
            .join(',')
        ;

        if( queryStringRouteName.split('').pop() === ',' ) {

            queryStringRouteName = queryStringRouteName.slice( 0 , -1 ) ;
        }

        outline = outline.puzzler( queryStringRouteName , queryStringName ) ;

    } ) ;

    return outline ;

} ;
