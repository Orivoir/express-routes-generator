const
    {expect,assert} = require('chai')
    ,buildAction = require('./../lib/assembly/crud/build-action')
    ,fs = require('fs')
    ,path = require('path')
    ,hydrateEnv = require('./../lib/env-vars')
;

require('string-puzzler') ;
hydrateEnv( {
    type: 'crud' ,
    name: 'product'
} ) ;

let outline = fs.readFileSync( path.join( __dirname , './../puzzles/crud/outline.build' ) , 'utf-8' )


describe('test build-action module' , () => {

    it('should be an function' , () => {

        assert.isFunction( buildAction ) ;
    } ) ;

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    const outlineBuild = buildAction( outline ) ;

    it('should return an string' , () => {

        assert.isString( outlineBuild ) ;

    } ) ;

    it('build should be diff' , () => {

        expect( outlineBuild ).to.be.not.equal( outline ) ;

    } ) ;

    it('should contains data action name' , () => {

        assert.isTrue( outlineBuild.indexOf( params.action.join('/') ) !== -1 ) ;

    } ) ;

    it('should \\throw RangeError' , () => {

        const fxRangeError = () => buildAction( 42 ) ;

        expect( fxRangeError ).to.throw( RangeError , 'arg1 should be an string' ) ;

    }) ;

} ) ;
