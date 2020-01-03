module.exports = class {

    constructor( params ) {

        this.params = params ;

        this
            .trim()
            .type()
            .action()
            .client()
            .routes()
            .with()
            .from()
            .httpAcessName()
        ;
    }

    httpAcessName() {

        if( typeof this.params.requestName !== 'string' ) {

            this.params.requestName = 'request' ;
        }
        if( typeof this.params.responseName !== 'string' ) {

            this.params.responseName = 'response' ;
        }
        return this;
    }

    from() {

        if( typeof this.params.from === 'string' ) {

            // normalize relative path
            this.params.from = './' + this.params.from.split('\\').join('/').split('/').filter( r => /^[a-zA-Z_]{1,255}$/.test( r ) ).join('/') + '/' ;

        } else {

            this.params.from = './';
        }

        return this;
    }

    with() {

        if( this.params.with instanceof Array ) {

            this.params.with = this.params.with.map( buildName => {
                buildName = buildName.split('/').join('').split('\\').join('') ;
                return buildName.trim() ;
            } ) ;

        } else {

            this.params.with = [] ;
        }

        return this;
    }

    /**
     * @method associateRouteCrudName
     * @param {string} crudRouteName
     * @return {string[]} string[]
     * @description associate default value with route name
     */
    associateRouteCrudName( crudRouteName ) {

        return ({
            'getOne': []
            , 'update': ['update']
            ,'delete': ['delete']
            ,'create': ['create']
        } )[ crudRouteName ] || []  ;
    }

    routes() {

        ['getOne' , 'update','delete','create']
        .forEach( crudRouteName => {

            if(
                typeof this.params[ crudRouteName ] === 'object'
            ) {

                if( typeof this.params[ crudRouteName ].route === 'string' ) {

                    // e.g : /edit/:id <=> ['edit']
                    this.params[ crudRouteName ].route = this.params[ crudRouteName ].route.split('/').filter( ressource => ressource.length ) ;
                }

            } else {

                this.params[ crudRouteName ] = {
                    route: this.associateRouteCrudName( crudRouteName )
                } ;
            }

        } ) ;

        return this;
    }

    client() {

        if( typeof this.params.client !== 'object' ) {

            this.params.client = {
                author: "<AUTHOR EMPTY>",
                package: "<PACKAGE EMPTY>",
                lisence: "<LISENCE EMPTY>",
                version: "<VERSION EMPTY>"
            } ;
        }

        return this;
    }

    action() {

        if( typeof this.params.action === 'string' ) {
            // e.g: "/:id/machin/:slug" <=> [':id','machin',':slug']
            this.params.action = this.params.action.split('/').filter( ressource => ressource.length ) ;
        } else {
            // default value
            this.params.action = [':id'] ;
        }

        return this;
    }

    type() {

        if( typeof this.params.type === 'string' ) {

            if( /^(route(s?\-?))?crud/i.test(this.params.type) ) {

                this.params.type = 'crud' ;
            } else if( /^(build(er)?(\-)?)?call(er)?((\-)?build(er)?)?/i.test(this.params.type) ) {

                this.params.type = 'caller' ;
            } else if( /^model(\-?routes?)?$/i.test( this.params.type ) ) {

                this.params.type = 'model-route' ;
            }

        }

        return this;
    }

    trim() {

        Object.keys( this.params ).forEach( attr => {

            if( typeof this.params[ attr ] === 'string' ) {

                this.params[ attr ] = this.params[ attr ].trim() ;
            }

        } ) ;

        return this;
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
