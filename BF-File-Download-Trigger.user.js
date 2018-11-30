// ==UserScript==
// @name         BF File Download Trigger
// @namespace    https://github.com/u5545/
// @author       u5545
// @description  Automatically downloads a file when the waiting time is over
// @match        https://www.beastforum.com/queued/*
// @downloadURL  https://raw.githubusercontent.com/u5545/userscripts/master/BF-File-Download-Trigger.user.js
// @updateURL    https://raw.githubusercontent.com/u5545/userscripts/master/BF-File-Download-Trigger.user.js
// @version      1.0
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var target = document.querySelector('#download_div'), config = { attributes: true, childList: false, characterData: false };
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          observer.disconnect();
          target.querySelector("a").click();
      });
    });
    observer.observe(target, config);
})();
