const fs = require('fs') ;
const path = require('path') ;

module.exports = function() {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    const puzzle = fs.readFileSync(
        path.join( __dirname , `../puzzles/${params.type}/outline.build` )
        ,'utf-8'
    ) ;

    return require( `./assembly/${params.type}/endpoint` )( puzzle ) ;

} ;
