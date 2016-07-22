[home](../README.md)
Example
-----------------

* [Get project](#Get)
* [Install](# Install)
* [Setup](# Setup)

# Get project
`git clone https://github.com/atexo-package/atexo-component-dashboard.git`

# Install

**Install Project Example**


```shell
cd example
```

```shell
npm install -g gulp-cli
```

```shell
npm install
```

# Setup

You'll need to add `atexo-component-dashboard` lib to your project.
Paste the following code into the <head> section of your index page.

```html
<head>
...
<script src="node_modules/atexo-component-dashboard/dist/atexo-component-dashboard.system.js"></script>
...
</head>
```

## Directive
```html
<dashboard [config]="config"></dashboard>
```

## Usage

```js
import ...
import { Dashboard } from 'atexo-component-dashboard';

@Component({
    selector: '[name_of_component]'
})
@View({
    template: '<dashboard [config]="config"></dashboard>',
    directives: [Dashboard],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public config:Object = {
        json: {
            baseUrl: 'http://localhost:5600/',
            panel: 'server/mocks/panel.json',
            alert: 'server/mocks/alert.json'
        }
    };
}
```


## Config



| Param                   | Description     | Type         |
| ----------------------- | --------------- | ------------ |
| baseUrl                 | API Base Url    | String       |
| panel                   | Panel Service   | String       |
| alert                   | Alert Service   | String       |