// ==UserScript==
// @name         BF3IMG
// @namespace    https://github.com/u5545/
// @author       u5545
// @version      1.0
// @description  beastforum free images
// @match        https://www.beastforum.com/*
// @downloadURL  https://raw.githubusercontent.com/u5545/userscripts/master/BF3IMG.user.js
// @updateURL    https://raw.githubusercontent.com/u5545/userscripts/master/BF3IMG.user.js
// @grant        none
// ==/UserScript==

(function() {
    document.querySelectorAll("img.attach").forEach(function(element){
        element.parentElement.setAttribute("href", element.getAttribute("src").replace(/(.*\/)\w{5}(post.*)/, "$1$2"));
    });
})();
