;
(()=>{
    function e(e) {
        return e.parentElement !== document.body && e.parentElement !== document.head;
    }
    function t(e) {
        return e.nodeName === "SCRIPT" || e.nodeName === "LINK" && n(e)?.asyncCss;
    }
    function n(e) {
        if (e.dataset instanceof window.DOMStringMap) {
            return e.dataset;
        }
        return null;
    }
    function r(r) {
        try {
            if (r.nodeType !== Node.ELEMENT_NODE) {
                return;
            }
        } catch (e) {
            return;
        }
        if (!(e(r) || !t(r))) {
            const a = n(r)?.bootloaderHash;
            if (a != null && a !== "") {
                let i = null;
                const l = function() {
                    window._btldr[a] = 1;
                    if (r instanceof HTMLLinkElement && r.media === "print" && n(r)?.printScreenSwap === "1") {
                        r.media = "all";
                        const t = window._qplInl;
                        if (t != null && typeof t.addPoint === "function") {
                            t.addPoint("cssPrintScreenSwap");
                        }
                    }
                    i?.();
                };
                i = function() {
                    r.removeEventListener("load", l);
                    r.removeEventListener("error", l);
                };
                r.addEventListener("load", l);
                r.addEventListener("error", l);
            }
        }
    }
    Array.from(document.querySelectorAll('script,link[data-async-css="1"]')).forEach((e)=>r(e));
    const o = new MutationObserver(function(e, t) {
        e.forEach((e)=>{
            if (e.type === "childList") {
                Array.from(e.addedNodes).forEach((e)=>{
                    r(e);
                });
            }
        });
    });
    o.observe(document.getElementsByTagName("html")[0], {
        attributes: false,
        childList: true,
        subtree: true
    });
})();
