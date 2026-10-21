__d("load-script-1.0.0", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        l.exports = function(o, a, i) {
            const r = document.head || document.getElementsByTagName("head")[0];
            const l = document.createElement("script");
            if (typeof a === "function") {
                i = a;
                a = {};
            }
            a = a || {};
            i = i || function() {};
            l.type = a.type || "text/javascript";
            l.charset = a.charset || "utf8";
            l.async = "async" in a ? !!a.async : true;
            l.src = o;
            if (a.attrs) {
                e(l, a.attrs);
            }
            if (a.text) {
                l.text = `${a.text}`;
            }
            const s = "onload" in l ? t : n;
            s(l, i);
            if (!l.onload) {
                t(l, i);
            }
            r.appendChild(l);
        };
        function e(e, attrs) {
            for(const n in attrs){
                e.setAttribute(n, attrs[n]);
            }
        }
        function t(e, t) {
            e.onload = function() {
                this.onerror = this.onload = null;
                t(null, e);
            };
            e.onerror = function() {
                this.onerror = this.onload = null;
                t(new Error(`Failed to load ${this.src}`), e);
            };
        }
        function n(e, t) {
            e.onreadystatechange = function() {
                if (!(this.readyState != "complete" && this.readyState != "loaded")) {
                    this.onreadystatechange = null;
                    t(null, e);
                }
            };
        }
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    function d(e) {
        switch(e){
            case undefined:
                return c();
        }
    }
    a.exports = d;
}, null);