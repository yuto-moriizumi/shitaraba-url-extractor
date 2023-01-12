"use strict";
// ==UserScript==
// @name         kk-url-extractor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://jbbs.shitaraba.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==
const EXLUDE_URL_PARTS = [
    "illusion.jp",
    "mercury.bbspink.com",
    "pixiv.net",
    "gumroad.com",
    "fanbox.cc",
    "patreon.com",
    ".wav",
    ".jpg",
    ".mp4",
];
(() => {
    const posts = document.querySelectorAll("dd");
    posts.forEach((post, i) => {
        try {
            const text = post.innerText;
            const res = text.match(/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g);
            if (res === null)
                return;
            if (res.every((url) => EXLUDE_URL_PARTS.some((part) => url.includes(part))))
                return;
            post.setAttribute("style", "background-color:red");
        }
        catch (error) {
            console.debug(error);
        }
    });
})();
