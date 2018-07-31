import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';

app.initializers.add('extum/flarum-ext-material', () => {
    extend(Page.prototype, 'init', function () {
        /*$('head').prepend('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">' +
            'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css' +
            'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js' + 
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/styles.css">' +
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/baseline.css">' +
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/sharp.css">' +    
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/outline.css">' +  
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/round.css">' +       
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/twotone.css">' +      
            '<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>');
        document.getElementById("Button").classList.add("foo-button", "mdc-button");
        document.getElementById("myDIV").classList.remove("mystyle", "anotherClass", "thirdClass");*/
    });
});
