__d("WAWebHatchLinkedStatusManager", [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebLocalStorage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = "hatch-linked-status";
    const _ = (()=>{
        function t() {
            this.$1 = null;
            this.$2 = "not_loaded";
            this.$3 = null;
            this.$4 = [];
            this.$5 = null;
            this.$6 = 0;
            this.$7 = null;
            this.$8 = new (o("WAResolvable")).Resolvable;
            this.$9 = false;
        }
        const a = t.prototype;
        a.registerFetcher = function(t) {
            const e = this.$7 != null;
            this.$5 = t;
            this.$10();
            if (e) {
                this.fetchAndUpdateStatus();
            }
        };
        a.subscribeToLinkedStatus = function(t) {
            const e = this;
            this.$4.push(t);
            return function() {
                e.$4 = e.$4.filter((e)=>e !== t);
            };
        };
        a.getLinkedStatus = function() {
            return this.$1;
        };
        a.getLinkedStatusState = function() {
            return this.$2;
        };
        a.getLastConfirmedLinkedStatusState = function() {
            return this.$3;
        };
        a.isLinked = function() {
            return this.$3 === "linked";
        };
        a.isUnlinked = function() {
            return this.$3 === "unlinked";
        };
        a.fetchConfirmedLinkedStatusStateIfUnknown = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = this.$3 ?? h();
                return t ?? (this.$7 == null && this.fetchAndUpdateStatus(), this.$11());
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.markUnlinked = function() {
            this.$1 = null;
            this.$2 = "unlinked";
            this.$3 = "unlinked";
            g("unlinked");
            this.$10();
            this.$12();
        };
        a.fetchAndUpdateStatus = function() {
            const t = this;
            if (this.$7 != null) {
                this.$9 = true;
                return;
            }
            const n = this.$5;
            if (n == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] no fetcher registered, skipping"
                ])));
                return;
            }
            const a = this.$6;
            const i = n().then((e)=>{
                if (a === t.$6) {
                    t.$13(e);
                }
            }).catch((e)=>{
                if (a === t.$6) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[HatchLinkedStatusManager] fetch failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("hatch-linked-status-fetch-fail");
                    t.$14();
                }
            });
            this.$7 = i;
            i.then(()=>{
                if (t.$7 === i) {
                    t.$7 = null;
                    if (t.$9) {
                        t.$9 = false;
                        t.fetchAndUpdateStatus();
                    }
                }
            });
        };
        a.__resetForTesting = function() {
            this.$1 = null;
            this.$2 = "not_loaded";
            this.$3 = null;
            this.$4 = [];
            this.$5 = null;
            this.$10();
            if (r("WAWebLocalStorage") != null) {
                r("WAWebLocalStorage").removeItem(p);
            }
        };
        a.$11 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this.$7;
                if (e == null || this.$3 != null) {
                    return this.$3;
                }
                yield (m || (m = n("Promise"))).race([
                    e,
                    this.$8.promise
                ]);
                return this.$11();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$13 = function(t) {
            const e = t != null && f(t) ? "linked" : "unlinked";
            this.$1 = t;
            this.$2 = e;
            this.$3 = e;
            g(e);
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[HatchLinkedStatusManager] fetched linked status"
            ])));
            this.$12();
        };
        a.$14 = function() {
            this.$2 = "failed";
            this.$12();
        };
        a.$10 = function() {
            this.$6 += 1;
            this.$7 = null;
            this.$9 = false;
            this.$8.resolve();
            this.$8 = new (o("WAResolvable")).Resolvable;
        };
        a.$12 = function() {
            for (const e of [].concat(this.$4)){
                e(this.$1);
            }
        };
        return t;
    })();
    function f(e) {
        return e.hasChannel && e.status === "ACTIVE" && e.isPaired;
    }
    function g(e) {
        try {
            const n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.toString();
            if (n != null) {
                if (r("WAWebLocalStorage") != null) {
                    r("WAWebLocalStorage").setItem(p, JSON.stringify({
                        owner: n,
                        state: e
                    }));
                }
            }
        } catch (e) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[HatchLinkedStatusManager] storing the confirmed state failed"
            ]))).sendLogs("hatch-linked-status-store-failed", {
                sampling: 0.01
            });
        }
    }
    function h() {
        try {
            const t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.toString();
            const n = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(p);
            if (t == null || n == null) {
                return null;
            }
            return y(JSON.parse(n), t);
        } catch (e) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[HatchLinkedStatusManager] reading the confirmed state failed"
            ]))).sendLogs("hatch-linked-status-read-failed", {
                sampling: 0.01
            });
            return null;
        }
    }
    function y(e, t) {
        if (e == null || typeof e !== "object") {
            return null;
        }
        const { owner: n, state: r } = e;
        if (n === t && (r === "linked" || r === "unlinked")) {
            return r;
        }
        return null;
    }
    const C = new _;
    l.default = C;
}, 98);