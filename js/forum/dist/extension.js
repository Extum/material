'use strict';

System.register('extum/flarum-ext-material/main', ['flarum/app', 'flarum/extend', 'flarum/components/Page'], function (_export, _context) {
    "use strict";

    var app, extend, Page;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }],
        execute: function () {

            app.initializers.add('zaptech-cookie-consent', function () {
                extend(Page.prototype, 'init', function () {
                    $('head').prepend('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">' + '<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>');
                });
            });
        }
    };
});