import app from 'flarum/app';
import ExtumSettingsModal from "./components/SettingsModal";

app.initializers.add('extum-material2', () => {
    app.extensionSettings['extum-material2'] = () => { app.modal.show(new ExtumSettingsModal()) };
});