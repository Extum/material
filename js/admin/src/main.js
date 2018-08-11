import app from 'flarum/app';
import {extend} from 'flarum/extend';
import Page from 'flarum/components/Page';

app.initializers.add('extum/flarum-ext-material', () => {
  extend(Page.prototype, 'init', function () {
        $('head').prepend('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">' +
                          '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/styles.css">' +
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/baseline.css">' +
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/sharp.css">' +    
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/outline.css">' +  
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/round.css">' +       
            '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/twotone.css">' + 
            '<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>');
    });
});
