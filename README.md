# express-routes-generator

> build content file crud routes with express

## instalation

- npm install express-routes-generator --save-dev
- yarn add express-routes-generator --save

## usage:


### generate crud content

server.js
```javascript

const
    fs = require('fs') ,
    builderCrudRoutes = require('express-routes-generator')
;

builderCrudRoutes( {
    type: 'crud' ,
    name: 'product' ,

    // default options
    action: ':id/:slug' , // default ':id'

    requestName: 'req' , // default 'request'
    responseName: 'res' , // default 'response'

    update: {
        route: '/edit' // default '/update'
    } ,

    create: {
        route: '/add' // default '/create'
    } ,

    delete: {
        route: '/remove' // default '/delete'
    } ,

} ).then( response => {

    if( response.success ) {

        const contentFile = response.content;

        fs.writeFileSync( __dirname + '\\product.js' , contentFile ) ;

        console.log('build crud file success !') ;

    }

} )
.catch( err => {

    console.log( err.code ) ;

} ) ;
```

#### usage synchrone with `builderCrudRoutes.sync`

```javascript
const
    builderCrudRoutes = require('express-routes-generator')
;

const response = builderCrudRoutes.sync( { /* ... */ } ) ;

// ... ,
```

### build an auto caller route with:

```javascript
const
    fs = require('fs') ,
    builderCrudRoutes = require('express-routes-generator')
;

builderCrudRoutes( {
    type: 'caller' ,
    with: ['product' , 'user' , /* ... , crud build name */ ]  ,


} ).then( response => {

    if( response.success ) {

        const contentFile = response.content;

        fs.writeFileSync( __dirname + '\\all-routes.js' , contentFile ) ;

        console.log('build caller routes success !') ;

    }

} )
.catch( err => {

    console.log( err.code ) ;

} ) ;
```

### get model routes with:

```javascript
const
    fs = require('fs') ,
    builderCrudRoutes = require('express-routes-generator')
;

const model = builderCrudRoutes.sync( {
    type: 'model-routes'
} )

// model.content , should contains absolute path of model-routes.js

const contentModel = fs.readFileSync( model.content, 'utf-8' ) ;

fs.writeFileSync( __dirname + '\\model-routes.js' , contentModel ) ;

```

#### develop by [Samuel Gaborieau](https://orivoir.github.io/profil-reactjs) with <3 and Nodejs for *OpenSource* , enjoy !
