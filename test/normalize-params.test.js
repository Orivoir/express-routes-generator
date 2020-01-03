const
    {expect,assert} = require('chai')
    ,NormalizeParams = require('./../lib/normalize-params')
;

describe('test `NormalizeParams` class' , () => {

    it('should be an function' , () => {

        assert.isFunction( NormalizeParams ) ;

    } ) ;

    it('should \\throw RangeError' , () => {

        const fxRangeError = () => new NormalizeParams( 42 ) ;

        expect( fxRangeError ).to.throw( RangeError , 'arg1 constructor should be an params object' ) ;

    } ) ;

    const args = new NormalizeParams( {
        type: ' routes-crud',
        name: '  user ' ,
        action: '/:slug/:id' ,
        requestName: ' request  ' ,
        responseName: '  response '
    } ) ;

    describe('test build object' , () => {

        it('should have property params' , () => {

            expect( args ).to.have.property( 'params' ) ;

            it('should be an object' , () => {

                assert.isObject( args.params ) ;

            } ) ;

        } ) ;

        const params = args.params ;

        describe('test exists method' , () => {

            it('`from` () => self ' , () => {

                assert.isFunction(args.from) ;

            } ) ;

            it('`with` () => self ' , () => {

                assert.isFunction(args.with) ;

            } ) ;

            it('`associateRouteCrudName` (string) => array[?string] ' , () => {

                assert.isFunction(args.associateRouteCrudName) ;

            } ) ;

            it('`routes` () => self' , () => {

                assert.isFunction(args.routes) ;

            } ) ;

            it('`client` () => self' , () => {

                assert.isFunction(args.client) ;

            } ) ;

            it('`action` () => self' , () => {

                assert.isFunction(args.action) ;

            } ) ;

            it('`type` () => self' , () => {

                assert.isFunction(args.type) ;

            } ) ;

        } ) ;

        describe('test `params` property' , () => {

            it('should have `type` normalize' , () => {

                expect( params ).to.have.property( 'type' ) ;

                assert.isString( params.type ) ;

                expect( params.type ).to.be.equal( 'crud' ) ;

            } ) ;

            it('should have `name` normalize' , () => {

                expect( params ).to.have.property( 'name' ) ;

                assert.isString( params.name ) ;

                expect( params.name ).to.be.equal( 'user' ) ;

            } ) ;

            describe('should have `action` normalize' , () => {

                it( 'should be an array[?string]' , () => {

                    expect( params ).to.have.property( 'action' ) ;

                    assert.isArray( params.action ) ;

                    expect( params.action ).to.have.lengthOf( 2 ) ;
                } ) ;

                it('should contains string' , () => {

                    params.action.forEach( ressource => {

                        assert.isString( ressource ) ;

                        assert.isTrue( /:id|:slug/.test( ressource ) ) ;

                    } ) ;

                }  ) ;

            } ) ;

            describe('should have routes type object' , () => {

                it('`getOne`' , () => {

                    expect( params ).to.have.property( 'getOne' ) ;
                    assert.isObject( params.getOne ) ;

                    assert.isArray( params.getOne.route ) ;

                    params.getOne.route.forEach( ressource => {

                        assert.isString( ressource ) ;

                    } ) ;

                } ) ;

                it('`update`' , () => {

                    expect( params ).to.have.property( 'update' ) ;
                    assert.isObject( params.update ) ;

                    assert.isArray( params.update.route ) ;

                    params.update.route.forEach( ressource => {

                        assert.isString( ressource ) ;

                    } ) ;

                } ) ;

                it('`create`' , () => {

                    expect( params ).to.have.property( 'create' ) ;
                    assert.isObject( params.create ) ;

                    assert.isArray( params.create.route ) ;

                    params.create.route.forEach( ressource => {

                        assert.isString( ressource ) ;

                    } ) ;

                } ) ;

                it('`delete`' , () => {

                    expect( params ).to.have.property( 'delete' ) ;
                    assert.isObject( params.delete ) ;

                    assert.isArray( params.delete.route ) ;

                    params.delete.route.forEach( ressource => {

                        assert.isString( ressource ) ;

                    } ) ;

                } ) ;

            } ) ;

        } ) ;

    } ) ;

} ) ;
