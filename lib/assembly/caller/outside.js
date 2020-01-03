module.exports = function( outline ) {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    let outside = "" ;

    params.with.forEach(buildName => {

        outside += `const ${buildName.charAt( 0 ).toUpperCase() + buildName.slice( 1 , ) } = require('${params.from}${buildName}') ;\n` ;

    });

    return outline.puzzler( outside , '__BUILD_CALLER_OUTSIDE__' ) ;

} ;
