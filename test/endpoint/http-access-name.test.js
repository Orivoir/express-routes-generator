const
    {expect,assert} = require('chai')
    ,endpointHttpAccessName = require('../../lib/assembly/crud/http-access-name/endpoint')
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

describe('test endpoint http-access-name' , () => {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    it('should have requestName property' , () => {

        expect( params ).to.have.property( 'requestName' ) ;
        expect( params ).to.have.property( 'responseName' ) ;

        assert.isString( params.requestName ) ;
        assert.isString( params.responseName ) ;

    } ) ;

    it('should be equal to default value' , () => {

        expect( params.requestName ).to.be.equal( 'request' ) ;
        expect( params.responseName ).to.be.equal( 'response' ) ;

    } ) ;

    const outlineBuild = endpointHttpAccessName( outline ) ;

    describe('test outline build' , () => {

        it('should be diff entry outline' , () => {

            expect( outlineBuild ).to.be.not.equal( outline ) ;

        } ) ;

        it('should contains data http access name' , () => {

            assert.isTrue( outlineBuild.indexOf( params.requestName ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.responseName ) !== -1 ) ;

        } ) ;


    } ) ;
} ) ;
