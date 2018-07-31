'use strict';

System.register('extum/flarum-ext-material/main', ['flarum/app', 'flarum/extend', 'flarum/components/HeaderPrimary', '@material/button/mdc-button', '@material/ripple'], function (_export, _context) {
    "use strict";

    var app, extend, HeaderPrimary, material, MDCRipple;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsHeaderPrimary) {
            HeaderPrimary = _flarumComponentsHeaderPrimary.default;
        }, function (_materialButtonMdcButton) {
            material = _materialButtonMdcButton.default;
        }, function (_materialRipple) {
            MDCRipple = _materialRipple.MDCRipple;
        }],
        execute: function () {

            app.initializers.add('extum/flarum-ext-material', function () {
                extend(HeaderPrimary.prototype, 'init', function () {
                    $('head').prepend('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">' + 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css' + 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js');
                    document.getElementById("Button").classList.add("foo-button", "mdc-button");
                    document.getElementById("myDIV").classList.remove("mystyle", "anotherClass", "thirdClass");
                });
            });
        }
    };
});