const
    {expect,assert} = require('chai')
    ,CheckParams = require('./../lib/check-params')
    ,NormalizeParamsFactory = require('./../lib/normalize-params')
;

describe('test `CheckParams` class' , () => {

    it('should be an function' , () => {

        assert.isFunction( CheckParams ) ;

    } ) ;

    it('should \\throw RangeError' , () => {

        const fxRangeError = () => new CheckParams( 42 ) ;

        expect( fxRangeError ).to.throw( RangeError , 'arg1 constructor should be an params object' ) ;

    } ) ;

    let argsFactory = new NormalizeParamsFactory( {
        type: ' routes-crud',
        name: '  user ' ,
        action: '/:slug/:id' ,
        requestName: ' request  ' ,
        responseName: '  response '
    } ).params ;

    let checkParams = new CheckParams( argsFactory ) ;

    describe('test build object' , () => {

        it('should be an object' , () => {

            assert.isObject( checkParams ) ;

        } ) ;

        it('should have property params' , () => {

            expect( checkParams ).to.have.property( 'params' ) ;

            // property `params` test with: /test/normalize-params.test.js
            assert.isObject( checkParams.params ) ;

        } ) ;

        describe('test property status' , () => {

            it('should have status property' , () => {

                expect( checkParams ).to.have.property( 'status' ) ;

                assert.isObject( checkParams.status ) ;

            } ) ;

            it('should have property isValid boolean' , () => {

                expect( checkParams.status ).to.have.property( 'isValid' ) ;

                assert.isBoolean( checkParams.status.isValid ) ;
                assert.isTrue( checkParams.status.isValid ) ;

                argsFactory = new NormalizeParamsFactory( {
                    type: ' truc', //not valid
                    name: '  user ' ,
                    action: '/:slug/:id' ,
                    requestName: ' request  ' ,
                    responseName: '  response '
                } ).params ;
                checkParams = new CheckParams( argsFactory ) ;

                expect( checkParams.status ).to.have.property( 'isValid' ) ;

                assert.isBoolean( checkParams.status.isValid ) ;
                assert.isFalse( checkParams.status.isValid ) ;

            } ) ;

            it('should have property error ?int' , () => {

                expect( checkParams.status ).to.have.property('error') ;

                assert.isNumber( checkParams.status.error ) ;
                expect( checkParams.status.error ).to.be.equal( 400 ) ;

                argsFactory = new NormalizeParamsFactory( {
                    type: ' routes-crud',
                    name: '  user ' ,
                    action: '/:slug/:id' ,
                    requestName: ' request  ' ,
                    responseName: '  response '
                } ).params ;

                checkParams = new CheckParams( argsFactory ) ;
                assert.isNull( checkParams.status.error ) ;

            } ) ;

        } ) ;

    } ) ;

} ) ;
