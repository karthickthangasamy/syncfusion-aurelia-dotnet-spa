import 'isomorphic-fetch';
import { Aurelia, PLATFORM } from 'aurelia-framework';

/** Export jQuery to window object **/
import * as $ from 'jquery';
window['jQuery'] = $;
window['$'] = $; 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build

export function configure(aurelia: Aurelia) {
    aurelia.use.standardConfiguration()
    .plugin(PLATFORM.moduleName('aurelia-syncfusion-bridge'), (syncfusion) => syncfusion.ejButton());

    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app/components/app/app')));
}
