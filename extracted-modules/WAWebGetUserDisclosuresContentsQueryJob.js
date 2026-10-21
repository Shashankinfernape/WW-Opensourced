__d("WAWebGetUserDisclosuresContentsQueryJob", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebBackendApi",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebCountryCodeUtils",
    "WAWebHttpErrors",
    "WAWebPonyfillsFetch",
    "WAWebURLUtils",
    "WAWebUserNoticeErrorWamEvent",
    "WAWebWamEnumUserNoticeErrorEvent",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isNonZeroNumber"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = "https://www.whatsapp.com/user-notice/v1/";
    const p = new Set([
        "ACCEPT",
        "OK"
    ]);
    const _ = "zz";
    const f = "ZZ";
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("isNonZeroNumber").isNonZeroNumber(e)) {
                const i = yield o("WAWebCountryCodeUtils").getMyCountryCode();
                const l = yield o("WAWebBackendApi").frontendSendAndReceive("getDeviceInfo", void 0);
                const s = {
                    id: e,
                    lg: l.lg ?? _,
                    lc: l.lc ?? f,
                    platform: o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ? "smbweb" : "web"
                };
                if (i != null) {
                    s.cc = i;
                }
                const u = r("WAWebURLUtils").build(m, s);
                return y(u, e);
            }
            return (d || (d = n("Promise"))).resolve({
                disclosureId: e
            });
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = yield S(e);
                try {
                    if (n != null) {
                        const a = JSON.parse(n);
                        if (a != null) {
                            return L(a, t);
                        }
                    }
                } catch (e) {
                    const i = new (o("WAWebUserNoticeErrorWamEvent")).UserNoticeErrorWamEvent({
                        userNoticeId: t,
                        userNoticeContentVersion: 1,
                        userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent").USER_NOTICE_ERROR_EVENT.JSON_PARSE
                    });
                    i.commit();
                }
            } catch (e) {
                const l = r("getErrorSafe")(e);
                if (l.name === o("WAAbortError").ABORT_ERROR) {
                    return;
                }
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Notice: Error Message"
                ]))).catching(l).sendLogs("pdfn-notice-content-error");
                throw new (o("WAWebHttpErrors")).HttpNetworkError;
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return new (d || (d = n("Promise")))(function(t, n) {
                const r = new FileReader;
                r.onload = function() {
                    const e = String(r.result);
                    t(e);
                };
                r.onerror = n;
                r.readAsDataURL(e);
            });
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new AbortController;
            const n = t.signal;
            const o = yield r("WAWebPonyfillsFetch")(e, {
                signal: n
            });
            const a = o.headers.get("Content-Type");
            if (a == null || a.includes("image/svg+xml")) {
                return o.text();
            }
            if (a.includes("image/png")) {
                return b((yield o.blob()));
            }
            return o.text();
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = e.policyVersion;
            if (a == null) {
                throw r("err")("Missing field policyVersion in notice content.");
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Notice:fetchNoticeData successful for policyVersion ",
                ""
            ])), a);
            const i = I(e);
            const l = k(e);
            const s = parseInt(a, 10);
            let m;
            try {
                m = yield P(i);
            } catch (e) {
                const p = r("getErrorSafe")(e);
                const _ = new (o("WAWebUserNoticeErrorWamEvent")).UserNoticeErrorWamEvent({
                    userNoticeId: t,
                    userNoticeContentVersion: s,
                    userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent").USER_NOTICE_ERROR_EVENT.IMAGE_FETCH
                });
                _.commit();
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Notice: Icon fetch error"
                ]))).catching(p).sendLogs("notice-icon-fetch-error");
            }
            return (d || (d = n("Promise"))).resolve({
                disclosureId: t,
                policyVersion: s,
                privacyDisclosureModal: m ?? i,
                endDate: l
            });
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        const n = e["privacy-disclosure"] && e["privacy-disclosure"]?.timing?.end?.time;
        if (n == null) {
            return null;
        }
        return new Date(n);
    }
    function I(e) {
        const t = e["privacy-disclosure"] && T(e["privacy-disclosure"].prompts[0]);
        if (t == null) {
            return null;
        }
        return $(t);
    }
    function T(e) {
        if (e) {
            D([
                "icon",
                "iconDescription",
                "title",
                "bullets",
                "primaryButton",
                "nav"
            ], e);
            D([
                "light",
                "dark",
                "type"
            ], e.icon);
            D([
                "dismissButton",
                "backButton"
            ], e.nav);
            for(let t = 0; t < e.bullets.length; t++){
                D([
                    "icon",
                    "text"
                ], e.bullets[t]);
            }
            const n = e.footer != null ? {
                footer: e.footer
            } : {};
            return babelHelpers.extends({
                icon: {
                    light: e.icon.light,
                    dark: e.icon.dark,
                    type: e.icon.type
                },
                iconSvg: {
                    light: "",
                    dark: ""
                },
                iconDescription: e.iconDescription,
                title: e.title,
                bullets: e.bullets,
                primaryButton: e.primaryButton,
                nav: {
                    dismissButton: e.nav.dismissButton,
                    backButton: e.nav.backButton
                }
            }, n);
        }
    }
    function D(e, t) {
        e.forEach((e)=>{
            if (!(e in t)) {
                throw r("err")(`Missing field ${e} in notice content.`);
            }
        });
    }
    function x(t) {
        if (!t) {
            return null;
        }
        const n = t.action;
        if (n) {
            if (p.has(n)) {
                return t;
            }
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Notice: Unknown action type ",
                ""
            ])), n);
        }
        return null;
    }
    function $(e) {
        if (e) {
            e.primaryButton = x(e.primaryButton);
            return e;
        }
        return null;
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [
                e?.icon.light,
                e?.icon.dark
            ];
            for(let r = 0; r < (e?.bullets.length ?? 0); r++){
                const a = e?.bullets[r];
                if (a != null) {
                    t.push(a.icon.light);
                    t.push(a.icon.dark);
                }
            }
            const i = t.map((e)=>{
                if (e != null) {
                    return S(e);
                }
                return (d || (d = n("Promise"))).resolve(null);
            });
            let l = e;
            const s = yield (d || (d = n("Promise"))).all(i);
            const u = s[0];
            const c = s[1];
            const m = babelHelpers.arrayLikeToArray(s).slice(2);
            const p = [];
            for(let _ = 0; _ < (e?.bullets.length ?? 0); _++){
                const g = e?.bullets[_];
                if (g != null) {
                    const h = m[_ * 2];
                    const y = m[_ * 2 + 1];
                    if (h != null && y != null) {
                        p.push(babelHelpers.extends({}, g, {
                            iconSvg: {
                                light: h,
                                dark: y
                            }
                        }));
                    } else {
                        p.push(g);
                    }
                }
            }
            if (e && u != null && c != null) {
                l = babelHelpers.extends({}, e, {
                    bullets: p,
                    iconSvg: {
                        light: u,
                        dark: c
                    }
                });
            }
            return l;
        });
        return N.apply(this, arguments);
    }
    l.getUserDisclosureContentsQueryJob = g;
    l.attemptFetch = S;
}, 98);