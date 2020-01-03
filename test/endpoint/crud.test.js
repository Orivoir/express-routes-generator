const
    {expect,assert} = require('chai')
    ,endpointCrud = require('./../../lib/assembly/crud/endpoint')
    ,fs = require('fs')
    ,path = require('path')
    ,hydrateEnv = require('./../../lib/env-vars')
;

require('string-puzzler') ;
hydrateEnv( {
    type: 'crud' ,
    name: 'product',
} ) ;

let outline = fs.readFileSync( path.join( __dirname , './../../puzzles/crud/outline.build' ) , 'utf-8' )

describe('test endpoint crud build' , () => {

    it('should be an function' , () => {

        assert.isFunction( endpointCrud ) ;

    } ) ;

    const outlineBuild = endpointCrud( outline ) ;

    const env = process['express-routes-generator'] ;
    const {params} = env ;

    describe('test outline build' , () => {

        it('should be diff entry outline' , () => {

            expect( outline ).to.be.not.equal( outlineBuild ) ;

        } ) ;

        it('should contains all data crud' , () => {

            assert.isTrue( outlineBuild.indexOf( params.client.lisence ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.client.author ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.client.package ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.client.version ) !== -1 ) ;

            assert.isTrue( outlineBuild.indexOf( params.action.join('/') ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.name ) !== -1 ) ;

            assert.isTrue( outlineBuild.indexOf( params.getOne.route.join('/') ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.update.route.join('/') ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.create.route.join('/') ) !== -1 ) ;
            assert.isTrue( outlineBuild.indexOf( params.delete.route.join('/') ) !== -1 ) ;

        } ) ;

    } ) ;

} ) ;