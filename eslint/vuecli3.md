# 开发依赖
standard风格
```
"@vue/cli-plugin-babel": "^4.1.0",
"@vue/cli-plugin-eslint": "^4.1.0",
"@vue/cli-service": "^4.1.0",
"babel-eslint": "^10.0.3",
"eslint": "^5.16.0",
"eslint-config-standard": "^14.1.0",
"eslint-plugin-html": "^6.0.0",
"eslint-plugin-import": "^2.19.1",
"eslint-plugin-node": "^10.0.0",
"eslint-plugin-promise": "^4.2.1",
"eslint-plugin-standard": "^4.0.1",
"eslint-plugin-vue": "^5.0.0",
"vue-template-compiler": "^2.6.10"
```


# eslint
```js
"eslintConfig": {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "standard"
    ],
    "rules": {
        "indent": [
            2,
            4
        ],
        "camelcase": 2,
        "space-before-function-paren": [
            2,
            "always"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "key-spacing": [
            2,
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "no-spaced-func": 2,
        "no-const-assign": 2,
        "no-undef": 2,
        "no-redeclare": 2,
        "no-var": 2,
        "no-unreachable": 2,
        "no-unused-vars": [
            0,
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "arrow-parens": 2,
        "arrow-spacing": 2,
        "eol-last": 0,
        "no-multiple-empty-lines": [
            0,
            {
                "max": 2
            }
        ],
        "no-trailing-spaces": 0,
        "no-extra-semi": 2,
        "no-extend-native": 0,
        "eqeqeq": 0
    },
    "parserOptions": {
        "parser": "babel-eslint"
    }
}
```



# vscode配置
需要eslint、vetur插件支持
```
{
    "window.zoomLevel": 2,
    "editor.fontSize": 13,
    "files.autoSave": "off",
    "explorer.confirmDelete": false,
    // --------  vue 代码格式化相关
    "editor.detectIndentation": false,
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue", // 检测vue文件
            "autoFix": true //  为vue文件开启保存自动修复的功能
        },
        {
            "language": "html",
            "autoFix": true
        },
    ],
    "vetur.format.defaultFormatterOptions": {
        // Wrap attributes to new lines [auto|force|force-aligned|force-expand-multiline] ["auto"]
        "js-beautify-html": {
            "wrap_attributes": "force-aligned" // 可以换成上面任意一种value
        }
    },
    "vetur.validation.template": false,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatter.js": "none",
    "vetur.format.options.tabSize": 4,
    "editor.formatOnSave": true,
}
```
