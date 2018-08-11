<?php
/**
 *  This file is part of extum/flarum-ext-material.
 *
 *  Copyright (c) 2018 .
 *
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */
namespace Extum\MDL\Listeners;
use DirectoryIterator;
use Flarum\Event\ConfigureLocales;
use Flarum\Event\ConfigureWebApp;
use Illuminate\Contracts\Events\Dispatcher;
class AddClientAssets
{
    /**
     * Subscribes to the Flarum events.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureWebApp::class, [$this, 'configureWebApp']);
        $events->listen(ConfigureLocales::class, [$this, 'addLocales']);
    }
    
    /**
     * Modifies the client view for forum/admin.
     *
     * @param ConfigureWebApp $event
     */
    public function configureWebApp(ConfigureWebApp $event)
    {
        if ($event->isAdmin()) {
            $event->addAssets([
                __DIR__.'/../../resources/less/admin.less',
            ]);
        }
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__.'/../../resources/less/app.less',
            ]);
        }

        $view = $event->view;

        $view->addHeadString("<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">");
        $view->addHeadString("<link rel=\"stylesheet\" href=\"https://storage.googleapis.com/non-spec-apps/mio-icons/latest/styles.css\">");
        $view->addHeadString("<link rel=\"stylesheet\" href=\"https://storage.googleapis.com/non-spec-apps/mio-icons/latest/baseline.css\">");
        $view->addHeadString("<link rel=\"stylesheet\" href=\"https://storage.googleapis.com/non-spec-apps/mio-icons/latest/sharp.css\">");
        $view->addHeadString("<link rel=\"stylesheet\" href=\"https://storage.googleapis.com/non-spec-apps/mio-icons/latest/outline.css\">");
        $view->addHeadString("<link rel=\"stylesheet\" href=\"https://storage.googleapis.com/non-spec-apps/mio-icons/latest/round.css\">");
        $view->addHeadString("<link rel=\"stylesheet\" href=\"https://storage.googleapis.com/non-spec-apps/mio-icons/latest/twotone.css\">");
        $view->addFootString("<script src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script>");
    }
    
    /**
     * Provides i18n files.
     *
     * @param ConfigureLocales $event
     */
    public function addLocales(ConfigureLocales $event)
    {
        foreach (new DirectoryIterator(__DIR__.'/../../resources/locale') as $file) {
            if ($file->isFile() && in_array($file->getExtension(), ['yml', 'yaml'])) {
                $event->locales->addTranslations($file->getBasename('.'.$file->getExtension()), $file->getPathname());
            }
        }
    }
}
