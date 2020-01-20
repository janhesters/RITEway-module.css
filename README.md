# RITEway with module.css files

How to set up Tape (regular Babel) to work with `module.css` files.

(Works for regular CSS files, too!)

1. Install [babel-plugin-module-name-mapper](https://github.com/mgcrea/babel-plugin-module-name-mapper).
2. Create a [style mock](./src/helpers/style-mock.js).
3. Add the plugin to your `.babelrc`:

```json
"plugins": [
    [
        "module-name-mapper",
        {
            "moduleNameMapper": {
                "\\.css$": "<rootDir>/src/helpers/style-mock.js"
            }
        }
    ]
]
```
