// ==UserScript==
// @name         BF3IMG
// @namespace    https://github.com/u5545/
// @author       u5545
// @description  beastforum free images
// @match        https://www.beastforum.com/*
// @downloadURL  https://raw.githubusercontent.com/u5545/userscripts/master/BF3IMG.user.js
// @updateURL    https://raw.githubusercontent.com/u5545/userscripts/master/BF3IMG.user.js
// @version      1.0
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    document.querySelectorAll("img.attach").forEach(function(e){
        e.parentElement.setAttribute("href", e.getAttribute("src").replace(/(.*\/)\w{5}(post.*)/, "$1$2"));
    });
})();
