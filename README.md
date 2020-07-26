# AnsynWebcomponentClient

This project made to create web component(angular element) from @ansyn component.

it include 2 project **Viewer** and **Builder**

### Buildr
contain the @ansyn component for creating the element.

### Viewer
web interface for the end-user for download our component. <br>
*contains:*<br>
1. *how-to* manuals for import the component to various framework
2. enable the user to config our default config file.

## Development
you had to clone also the [ansyn-webcomponent-server](https://github.com/AnSyn/ansyn-webcomponent-server) repo.

in the first time you had to run `npm run build:all` <br>
to build the Build and Viewer project.
in the dist you have:
1. Builder directory that need to copy to the server.
2. Viewer directory to serve to the users. (http-server, nginx etc.)

after that in most case you only need to update the Builder project according<br>
to the update of @ansyn package<br>
and then run `npm run build:element`
