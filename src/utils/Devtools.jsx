/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { isDev } from './Utils';

let DevTools;// eslint-disable-line import/no-mutable-exports
if (isDev()) {
    console.log('ja!!');
    DevTools = createDevTools(
        <DockMonitor
            toggleVisibilityKey="ctrl-y"
            changePositionKey="ctrl-q"
            fluid={false}
            defaultSize={300}
            defaultIsVisible
        >
            <LogMonitor theme="nicinabox" />
        </DockMonitor>
    );

    console.log('Running in dev, ctrl+y to open DevTools'); // eslint-disable-line no-console
} else {
    console.log('nei :( ');
    DevTools = () => null;
}

export default DevTools;
