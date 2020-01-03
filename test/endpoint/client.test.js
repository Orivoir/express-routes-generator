const
    {expect,assert} = require('chai')
    ,endpointClient = require('../../lib/assembly/client/endpoint')
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

describe('test endpoint client' , () => {

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    it('params env should have client property' , () => {

        expect( params ).to.have.property( 'client' ) ;

        assert.isObject( params.client ) ;

    } ) ;

    const {client} = params ;

    describe('test client properties' , () => {

        it('should string properties with [license, author, package, version]' , () => {

            assert.isString( client.lisence ) ;
            assert.isString( client.author ) ;
            assert.isString( client.package ) ;
            assert.isString( client.version ) ;

        } ) ;

    } ) ;

    const outlineBuild = endpointClient( outline ) ;

    describe('test outline build' , () => {

        it('should be diff entry outline' , () => {

            expect( outline ).to.be.not.equal( outlineBuild ) ;

        } ) ;

        it('should contains data client' , () => {

            assert.isTrue( outlineBuild.indexOf( client.lisence ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( client.author ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( client.package ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( client.version ) !== -1 ) ;

        } ) ;

    } ) ;

} ) ;
