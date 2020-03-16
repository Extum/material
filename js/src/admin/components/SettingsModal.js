import SettingsModal from 'flarum/components/SettingsModal';

export default class ExtumSettingsModal extends SettingsModal {
    className() {
        return 'ExtumMaterial Modal--medium';
    }

    title() {
        return app.translator.trans('extum-flarum-ext-material2.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <label>
                    <input type="checkbox" bidi={this.setting('extum-flarum-ext-material2.admin.settings.adaptiveMode')}/>
                    {app.translator.trans('extum-flarum-ext-material2.admin.settings.adaptiveMode')}
                </label>
            </div>,
        ];
    }
}