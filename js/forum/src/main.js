import app from 'flarum/app';
import {extend} from 'flarum/extend';
import Page from 'flarum/components/Page';

app.initializers.add('zaptech-cookie-consent', () => {
    extend(Page.prototype, 'init', function () {
        $('head').prepend('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">' +
            '<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>');
    });
});