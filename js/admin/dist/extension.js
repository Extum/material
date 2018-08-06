'use strict';

System.register('extum/flarum-ext-material/main', ['flarum/app', 'flarum/extend', 'flarum/components/AdminNav', 'flarum/components/AdminLinkButton', 'avatar4eg/users-list/components/UsersListPage'], function (_export, _context) {
  "use strict";

  var app, extend, AdminNav, AdminLinkButton;
  
  
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }],
    
    
   extend(AdminNav.prototype, 'items', items => {
        items.add('material', AdminLinkButton.component({
            icon: 'colorize',
            children: app.translator.trans('extum-material.admin.nav.material_title'),
            description: app.translator.trans('extum-material.admin.nav.material_text')
        }));
    });
}
    
    execute: function () {

      app.initializers.add('extum/flarum-ext-material', function () {
        //console.log('Hello, admin!');
      });
    }
  };
});
