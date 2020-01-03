const
    {expect,assert} = require('chai')
    ,endpoint = require('./../express-routes-generator')
;

describe('test endpoint builder file' , () => {

    it('should be an function' , () => {

        assert.isFunction( endpoint ) ;

    } ) ;

    describe( 'test endpoint builder' , () => {

        it('should' , done => {

            endpoint( { type: "shey" } )
            .then( response => {

                assert.isObject( response ) ;

                expect( response ).to.have.property('success') ;

                assert.isBoolean( response.success ) ;
                assert.isFalse( response.success ) ;

                expect( response ).to.have.property( 'code' ) ;

                assert.isNumber( response.code ) ;

                expect( response.code )
                    .to.be
                    .equal( 400 ) // bad request ( param error )
                ;

                done() ;
            }  )
            .catch( err => {
                assert.isObject( err ) ;

                done( err ) ;
            } ) ;
        } ) ;


    } ) ;

    describe('test sync endpoint builder' , () => {

        const statusSync = endpoint.sync( {
            type: 'shey'
        } ) ;

        it('should return object' , () => {

            assert.isObject( statusSync ) ;

        } ) ;

        it('should have property success boolean' , () => {

            expect( statusSync ).to.have.property('success') ;

            assert.isBoolean( statusSync.success ) ;

            assert.isFalse( statusSync.success ) ;

        } ) ;

        it('should have property code' , () => {

            expect( statusSync ).to.have.property( 'code' ) ;

            assert.isNumber( statusSync.code ) ;

            expect( statusSync.code )
                .to.be
                .equal( 400 ) // bad request ( param error )
            ;

        } ) ;

    } ) ;

} ) ;
