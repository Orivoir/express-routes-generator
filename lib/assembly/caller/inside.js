module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    let inside = '' ;

    params.with.forEach(buildName => {
        inside += `new ${buildName.charAt(0).toUpperCase() + buildName.slice( 1 , ) }( app ) ;\n`;
    }) ;

    return outline.puzzler( inside , '__BUILD_CALLER_INSIDE__' ) ;
} ;
