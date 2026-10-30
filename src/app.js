import {router} from './controller/router.js';
router();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js');
}