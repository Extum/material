import app from 'flarum/app';
import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import material from "@material/button/mdc-button";
import {MDCRipple} from '@material/ripple';

app.initializers.add('extum/flarum-ext-material', () => {
    extend(HeaderPrimary.prototype, 'init', function () {
        $('head').prepend('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">' +
            'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css' +
            'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js');
        document.getElementById("Button").classList.add("foo-button", "mdc-button");
        document.getElementById("myDIV").classList.remove("mystyle", "anotherClass", "thirdClass");
    });
});