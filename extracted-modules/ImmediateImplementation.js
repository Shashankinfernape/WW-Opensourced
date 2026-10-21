__d("ImmediateImplementation", [
    "ImmediateImplementationExperiments"
], function(t, n, r, o, a, i, l) {
    ((e, t)=>{
        "use strict";
        let n = 1;
        const o = {};
        let a = {};
        let i = a;
        let s = false;
        const e_document = e.document;
        let c;
        let d;
        let m;
        const p = `setImmediate\$${Math.random()}\$`;
        function _() {
            const e_event = e.event;
            if (e_event) {
                return e_event.isTrusted && [
                    "change",
                    "click",
                    "contextmenu",
                    "dblclick",
                    "mouseup",
                    "pointerup",
                    "reset",
                    "submit",
                    "touchend"
                ].includes(e_event.type) || e_event.type === "message" && e_event.source === e && typeof e_event.data === "string" && e_event.data.indexOf(p) === 0;
            }
            return false;
        }
        function f(e) {
            const r = e[0];
            const a = Array.prototype.slice.call(e, 1);
            o[n] = function() {
                r.apply(t, a);
            };
            i = i.next = {
                handle: n++
            };
            return i.handle;
        }
        function g() {
            let e;
            let t;
            while(!s && (e = a.next)){
                a = e;
                if (t = o[e.handle]) {
                    s = true;
                    try {
                        t();
                        s = false;
                    } finally{
                        h(e.handle);
                        if (s) {
                            s = false;
                            if (a.next) {
                                c(g);
                            }
                        }
                    }
                }
            }
        }
        function h(e) {
            delete o[e];
        }
        function y() {
            if (e.postMessage && !e.importScripts) {
                let t = true;
                const n = function() {
                    t = false;
                    if (e.removeEventListener) {
                        e.removeEventListener("message", n, false);
                    } else {
                        e.detachEvent("onmessage", n);
                    }
                };
                if (e.addEventListener) {
                    e.addEventListener("message", n, false);
                } else if (e.attachEvent) {
                    e.attachEvent("onmessage", n);
                } else {
                    return false;
                }
                e.postMessage("", "*");
                return t;
            }
        }
        function C() {
            const t = function(n) {
                if (n.source === e && typeof n.data === "string" && n.data.indexOf(p) === 0) {
                    g();
                }
            };
            if (e.addEventListener) {
                e.addEventListener("message", t, false);
            } else {
                e.attachEvent("onmessage", t);
            }
            c = function() {
                const t = f(arguments);
                if (e.originalPostMessage) {
                    e.originalPostMessage(p + t, "*");
                } else {
                    e.postMessage(p + t, "*");
                }
                return t;
            };
            d = c;
        }
        function b() {
            const e = new MessageChannel;
            let t = false;
            e.port1.onmessage = function() {
                t = false;
                g();
            };
            c = function() {
                const n = f(arguments);
                if (!t) {
                    e.port2.postMessage(n);
                    t = true;
                }
                return n;
            };
            m = c;
        }
        function v() {
            const e_document_documentElement = e_document.documentElement;
            c = function() {
                const t = f(arguments);
                let n = e_document.createElement("script");
                n.onreadystatechange = function() {
                    n.onreadystatechange = null;
                    e_document_documentElement.removeChild(n);
                    n = null;
                    g();
                };
                e_document_documentElement.appendChild(n);
                return t;
            };
        }
        function S() {
            c = function() {
                setTimeout(g, 0);
                return f(arguments);
            };
        }
        if (y()) {
            if (e.MessageChannel && r("ImmediateImplementationExperiments").prefer_message_channel) {
                C();
                b();
                c = function() {
                    if (_()) {
                        return d(...arguments);
                    }
                    return m(...arguments);
                };
            } else {
                C();
            }
        } else if (e.MessageChannel) {
            b();
        } else if (e_document && e_document.createElement && "onreadystatechange" in e_document.createElement("script")) {
            v();
        } else {
            S();
        }
        l.setImmediate = c;
        l.clearImmediate = h;
    })(typeof self === "undefined" ? typeof t === "undefined" ? this : t : self);
}, 34);