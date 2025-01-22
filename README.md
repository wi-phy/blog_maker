# BlogMaker

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.3.

## Installation

To install Angular v19, run:

```bash
npm install -g @angular/cli@19
```

Make sure Angular is installed properly, run:

```bash
ng --version
```

It should reply something like:

```bash
19.x.x
```

## Development server

To start a local development server, in the root directory, run :

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Generate a component

Angular CLI includes generating new components, run:

```bash
ng generate component component-name
```

or the condensed version:

```bash
ng g c component-name
```

You can also generate other Angular elements this way, such as `services`, `directives`, `pipes` etc...

```bash
ng g s service-name
ng g d directive-name
ng g p pipe-name
...
```

If you're not sure what this commands will do exactly, you can use `-d` to do a dry run, meaning that no changes will be made:

```bash
ng g c -d component-name
```

For a complete list, run:

```bash
ng generate --help
```

## Project structure

This Angular project folder structure should look more or less like this:

```
src
└── app
    ├── core
        ├── auth
            ├── components
            ├── models
            ├── services
            ├── auth.routes.ts
            └── pages
                └── login
        └── services
    ├── features
        ├── product
        ├── cart
        └── checkout
            ├── components
            ├── models
            ├── services
            ├── checkout.routes.ts
            └── pages
                ├── address
                └── payment
    ├── shared
        ├── components
            ├── notification.component.ts
            ├── notification.component.html
            └── notification.component.css
        ├── pipes
            └── date.pipe.ts
        └── utils
            └── array.utils.ts
    |
    |
    ├── app.component.html
    ├── app.component.scss
    ├── app.component.ts
    ├── app.config.ts
    └── app.routes.ts
```

`core` is for non business features. A non business feature is a feature that is not specific to the business domain of the app such as authentication, which has nothing to do with what this app is made for.

`features` is for business features. A business feature is a feature that is specific to the business domain of the app such as products for an e-commerce website. It's directly connected to the purpose this app was designed for.

`shared` is for code shared between the different features of the app. Note that some code may be shared AND have some business logic. This code should be put in the features folder.

Also, what's the difference between pages and components ?
If there is a route that leads to it, it's a page, if not, it's a component.

## Branch naming

A branch should be named like this:

```
issueNumber-quickDescription
```

For instance, if the issue is `Add search on articles #12`, the branch should be named:

```
12-add-article-search
```

You can also open your issue and click on `Create a branch` on the right side of the panel.

## Commit convention

Commits should look like this:

```
<type>: <description>
```

For instance, if you added a search input in the html for the issue `Add search on articles #12`, your commit should be:

```
feat: add search input
```

Some common types are `feat`, `fix`, `docs` etc...

Less common ones are `chore`, `style`, `refactor`, `test` etc..
