const
    {expect,assert} = require('chai')
    ,endpointRouteName = require('../../lib/assembly/crud/route-name/endpoint')
    ,fs = require('fs')
    ,path = require('path')
    ,hydrateEnv = require('../../lib/env-vars')
;

require('string-puzzler') ;
hydrateEnv( {
    type: 'crud' ,
    name: 'product'
} ) ;

let outline = fs.readFileSync( path.join( __dirname , './../../puzzles/crud/outline.build' ) , 'utf-8' )

describe('test endpoint route name' , () => {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    const outlineBuild = endpointRouteName( outline ) ;

    describe( 'test outline build' , () => {

        it('should be diff entry outline' , () => {

            expect( outline ).to.be.not.equal( outlineBuild ) ;

        } ) ;

        it('should contains data route name' , () => {

            assert.isTrue( outlineBuild.indexOf( params.getOne.route ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.update.route ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.create.route ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.delete.route ) !== -1 ) ;
        } ) ;

    } ) ;

}) ;
