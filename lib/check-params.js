module.exports = class {

    // params already normalize
    constructor( params ) {

        this.params = params ;

        this.status = {

            isValid: this.isValid ,

            get error() {
                // 400 bad request ( param error )
                return !this.isValid ? 400: null;
            }

        } ;
    }

    get isValid() {

        return this.isValidType && this.isValidNotOptional ;
    }

    get isValidCrud() {

        return (
            typeof this.params.name === 'string' &&
            /^[a-zA-Z_]{1}[a-zA-Z_\d]{1,254}$/.test( this.params.name )
        ) ;
    }

    get isValidCaller() {

        return (
            this.params.with instanceof Array &&
            !this.params.with.find( buildName => (
                typeof buildName !== 'string' ||
                !/^[a-zA-Z_]{1}[a-zA-Z_\d]{1,254}$/.test( buildName )
            ) )
        ) ;
    }

    get isValidNotOptional() {

        switch( this.params.type ) {

            case "crud":
                return this.isValidCrud ;

            default:
                return this.isValidCaller ;
        }
    }

    get isValidType() {

        const typesRegexp = new RegExp( `^${this.types.join('|')}$` ) ;

        return typesRegexp.test( this.params.type ) ;
    }

    get types() {

        return ['crud','caller'] ;
    }

    get params() {

        return this._params ;
    }
    set params( params ) {

        this._params = ( typeof params === 'object' ) ? params : null ;

        if( !this._params ) {

            throw new RangeError('arg1 constructor should be an params object') ;
        }
    }

} ;
