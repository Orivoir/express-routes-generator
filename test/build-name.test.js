const
    {expect,assert} = require('chai')
    ,buildName = require('./../lib/assembly/crud/build-name')
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


describe('test build-name module' , () => {

    it('should be an function' , () => {

        assert.isFunction( buildName ) ;
    } ) ;

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    const outlineBuild = buildName( outline ) ;

    it('should return an string' , () => {

        assert.isString( outlineBuild ) ;

    } ) ;

    it('build should be diff' , () => {

        expect( outlineBuild ).to.be.not.equal( outline ) ;

    } ) ;

    it('should contains data build name' , () => {

        assert.isTrue( outlineBuild.indexOf( params.name ) !== -1 ) ;

    } ) ;

    it('should \\throw RangeError' , () => {

        const fxRangeError = () => buildName( 42 ) ;

        expect( fxRangeError ).to.throw( RangeError , 'arg1 should be an string' ) ;

    }) ;

} ) ;
