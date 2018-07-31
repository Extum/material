import app from 'flarum/app';
import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

    extend(AdminNav.prototype, 'items', items => {
        items.add('material', AdminLinkButton.component({
            icon: 'colorize',
            children: app.translator.trans('extum-material.admin.nav.material_title'),
            description: app.translator.trans('extum-material.admin.nav.material_text')
        }));
    });
}
