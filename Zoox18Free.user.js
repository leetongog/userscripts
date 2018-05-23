// ==UserScript==
// @name         ZooX18 Free
// @namespace    https://github.com/u5545/
// @author       u5545
// @description  Unlocks private videos on ZooX18 and allows free download
// @match        https://www.zoox18.com/*
// @downloadURL  https://raw.githubusercontent.com/u5545/userscripts/master/Zoox18-Free.user.js
// @updateURL    https://raw.githubusercontent.com/u5545/userscripts/master/Zoox18-Free.user.js
// @version      1.0.1
// @grant        none
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    if(typeof video_id !== 'undefined' && video_id){
        var ad = document.querySelector(".container > .well.ad-body"),
            srcs = document.getElementsByTagName("source"), altpath = "/convers.cf/zoox18";
        if(srcs.length === 0 && evideo_vkey){
            var row = document.querySelector(".container .row"), col1 = createEl("div", "col-md-8");
            var title = document.querySelector("meta[property='og:title']").getAttribute("content");
            var tx1 = document.createTextNode(title), tx2 = document.createTextNode(title);
            var row2 = createEl("div", "row"), col2 = createEl("div", "col-md-8"), div = document.createElement("div");
            var vc = createEl("div", "video-container"), i = document.createElement("iframe");
            var h1 = createEl("h1", "hidden-xs big-title-truncate m-t-0"), h4 = createEl("h4", "visible-xs big-title-truncate m-t-0");
            vc.style = "min-height:300px; min-width:100px;";
            col2.style = "margin-bottom: 103px;";
            row.removeChild(row.children[0]);
            h1.appendChild(tx1);
            h4.appendChild(tx2);
            col1.appendChild(h1);
            col1.appendChild(h4);
            row.appendChild(col1);
            i.src = "/embed/"+evideo_vkey;
            i.width = "100%";
            i.height = "420";
            i.setAttribute("allowfullscreen", "");
            i.setAttribute("frameborder", "0");
            i.onload = function(){
                srcs = i.contentDocument.getElementsByTagName("source");
                i.contentWindow.player_sprite = player_sprite;
                i.contentWindow.player_timeline_preview = "1";
                i.contentWindow.player_logo = "0";
                i.contentWindow.player_pause_adv = "0";
                i.contentDocument.head.appendChild(createSc("/media/player/videojs/video-js-events.js"));
                if(srcs.length > 0){
                    col2.appendChild(createBtn(srcs[0].getAttribute("src")));
                    col2.style = "margin-bottom: 50px;";
                }
            };
            vc.appendChild(i);
            div.appendChild(vc);
            col2.appendChild(div);
            row2.appendChild(col2);
            row.parentElement.appendChild(row2);
        }
        else{
            var col = document.querySelector("#wrapper .container").children[1].querySelector(".col-md-8");
            col.insertBefore(createBtn(srcs[0].getAttribute("src")), col.children[1]);
            col.removeChild(col.querySelector(".visible-xs"));
        }

        if(ad) ad.parentElement.removeChild(ad);
    }
    addSt(".img-private","-webkit-filter:none !important");
    addSt(".white_content","display:none !important");

    function createEl(tagName, className){
        var el = document.createElement(tagName);
        el.setAttribute("class", className);
        return el;
    }

    function createSc(src){
        var el = document.createElement("script");
        el.src = src;
        return el;
    }

    function addSt(name, rules){
        var el = document.createElement("style"), dh = document.head;
        el.type = "text/css";
        dh.appendChild(el);
        if (!(el.sheet || {}).insertRule)
            (el.styleSheet || el.sheet).addRule(name, rules);
        else el.sheet.insertRule(name + "{" + rules + "}", 0);
    }

    function createBtn(url, vis){
        var db = createEl("div", "pull-right m-t-15 m-l-5"), dbgr = createEl("div", "btn-group");
        var btn = createEl("a", "btn btn-info"), ic = createEl("i", "glyphicon glyphicon-download-alt");
        var sp = document.createElement("span");
        ic.style = `border-image:url('/${altpath}/save.gif');`;
        btn.setAttribute("href", url || `/${altpath}/download/${video_id}?s`);
        btn.setAttribute("target", "_blank");
        sp.innerHTML = "&nbsp;Save video<br><small>(right click &gt; save as)</small>";
        btn.appendChild(ic);
        btn.appendChild(sp);
        dbgr.appendChild(btn);
        db.appendChild(dbgr);
        return db;
    }
})();
