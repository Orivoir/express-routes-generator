module.exports = class {

    constructor(
        app,
        crudName,
        crudAction,
        crudGetOneName,
        crudUpdateName,
        crudCreateName,
        crudDeleteName
    ) {

        this.app = app ;
        this.crudName = crudName ;
        this.crudAction = crudAction ;
        this.crudGetOneName = crudGetOneName ;
        this.crudUpdateName = crudUpdateName ;
        this.crudCreateName = crudCreateName ;
        this.crudDeleteName = crudDeleteName ;

        this.token = `${Math.random().toString().replace('.','-').replace('0', crudName )}${Date.now().toString()}` ;
    }

    getOne( controller ) {

        this
            .app
            .get(
                `/${this.crudName}/${this.crudGetOneName}/${this.crudAction}` ,
                controller
            )
        ;

        return this;
    }

    getAll( controller ) {

        this
            .app
            .get(
                `/${this.crudName}` ,
                controller
            )
        ;

        return this;
    }

    update( controller ) {

        this
            .app
            .put(
                `/${this.crudName}/${this.crudUpdateName}/${this.crudAction}` ,
                ( request , response ) => {

                    this.formData( request ) ;

                    controller( request , response ) ;
                }
            )
        ;
    }

    create( controller ) {

        this
            .app
            .post(
                `/${this.crudName}/${this.crudCreateName}/${this.crudAction}` ,
                ( request , response ) => {

                    this.formData( request ) ;

                    controller( request , response ) ;
                }
            )
        ;
    }

    delete( controller ) {

        this
            .app
            .delete(
                `/${this.crudName}/${this.crudDeleteName}/${this.crudAction}` ,
                controller
            )
        ;
    }

    formData( request ) {

        let data = null;

        if( typeof request !== 'object' ) {

            request.data = null;
            return;
        }

        if( typeof request.body === 'object' ) {

            request.data = request.body ;
            return;
        }

        try {
            data = JSON.parse( request.body ) ;
        } catch( SyntaxError ) {
            // not data send/found
        }

        request.data = data ;
    }

} ;
