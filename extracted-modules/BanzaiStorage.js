__d("BanzaiStorage", [
    "BanzaiConsts",
    "BanzaiUtils",
    "CurrentUser",
    "SetIdleTimeoutAcrossTransitions",
    "WebSession",
    "WebStorage",
    "WebStorageMutex",
    "cr:8958",
    "isInIframe",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = "bz:";
    const d = r("isInIframe")();
    let m;
    let p = false;
    let _ = null;
    function f() {
        const e = "check_quota";
        try {
            const t = g();
            if (t) {
                t.setItem(e, e);
                t.removeItem(e);
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    }
    function g() {
        if (!p) {
            p = true;
            m = (e || (e = r("WebStorage"))).getLocalStorage();
        }
        return m;
    }
    const h = {
        flush: function(n) {
            if (!d) {
                const t = g();
                if (t) {
                    if (_ == null) {
                        _ = parseInt(t.getItem((s || (s = r("BanzaiConsts"))).LAST_STORAGE_FLUSH), 10);
                    }
                    const o = _;
                    const a = o && (u || (u = r("performanceAbsoluteNow")))() - o >= (s || (s = r("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
                    if (a) {
                        n();
                    }
                    if (a || _ == null || _ === 0 || Number.isNaN(_)) {
                        _ = (u || (u = r("performanceAbsoluteNow")))();
                        (e || (e = r("WebStorage"))).setItemGuarded(t, (s || (s = r("BanzaiConsts"))).LAST_STORAGE_FLUSH, _.toString());
                    }
                }
            }
        },
        restore: function(t) {
            if (!d) {
                const e = g();
                if (e) {
                    const a = function(a) {
                        const o = [];
                        for(let i = 0; i < e.length; i++){
                            const l = e.key(i);
                            if (typeof l === "string" && l.indexOf(c) === 0 && l.indexOf("bz:__") !== 0) {
                                o.push(l);
                            }
                        }
                        o.forEach((o)=>{
                            const a = e.getItem(o);
                            e.removeItem(o);
                            if (!(a == null || a === "")) {
                                const i = n("cr:8958").parse(a);
                                i.forEach((e)=>{
                                    if (e) {
                                        const n = e.__meta = e.pop();
                                        const o = r("BanzaiUtils").canSend(e);
                                        if (o) {
                                            const a = r("CurrentUser").getPossiblyNonFacebookUserID();
                                            if (n.userID === a || a === "0") {
                                                r("BanzaiUtils").resetPostStatus(e);
                                                t(e);
                                            }
                                        }
                                    }
                                });
                            }
                        });
                        if (a) {
                            a.unlock();
                        }
                    };
                    if (f()) {
                        new (r("WebStorageMutex"))("banzai").lock(a);
                    } else {
                        o("SetIdleTimeoutAcrossTransitions").start(a, 0);
                    }
                }
            }
        },
        store: function(a) {
            if (!d) {
                const t = g();
                const i = a.filter((e)=>e.__meta.status !== (s || (s = r("BanzaiConsts"))).POST_SENT);
                if (!(!t || i.length <= 0)) {
                    const l = i.map((e)=>[
                            e[0],
                            e[1],
                            e[2],
                            e[3] || 0,
                            e[4],
                            e.__meta
                        ]);
                    a.splice(0, a.length);
                    (e || (e = r("WebStorage"))).setItemGuarded(t, `${c + o("WebSession").getId()}.${(u || (u = r("performanceAbsoluteNow")))()}`, n("cr:8958").stringify(l));
                }
            }
        }
    };
    l.default = h;
}, 98);