__d("WAWebMsgLinkContextMenuUtils", [
    "WAWebEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return r("WAWebEnvironment").isWeb && s(e) != null;
    }
    function s({ target }) {
        if (target instanceof HTMLElement) {
            const n = target.closest("a");
            if (n instanceof HTMLAnchorElement && n.href !== "") {
                return n.href;
            }
        }
        return null;
    }
    l.shouldShowNativeMenuForLink = e;
    l.getLinkHrefFromEvent = s;
}, 98);