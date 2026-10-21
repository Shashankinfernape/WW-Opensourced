__d("WAWebTempBanScreen.react", [
    "fbt",
    "WALogger",
    "WAWeb-moment",
    "WAWebConflict.react",
    "WAWebExternalLink.react",
    "WAWebFavicon.react",
    "WAWebL10N",
    "WAWebSocketModel",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(e) {
        const t = o("react-compiler-runtime").c(35);
        const n = e.banData;
        let a;
        if (t[0] !== n) {
            a = n || {};
            t[0] = n;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        const { code: l, expire: u, message: d, url: m } = i;
        let g;
        if (t[2] !== l || t[3] !== d) {
            g = d ?? p(l);
            t[2] = l;
            t[3] = d;
            t[4] = g;
        } else {
            g = t[4];
        }
        const h = g;
        let y;
        let C;
        let b;
        let v;
        let S;
        let R;
        let L;
        let E;
        if (t[5] !== u || t[6] !== h || t[7] !== m) {
            const k = r("WAWeb-moment").duration(u, "seconds").humanize();
            let I;
            if (t[16] !== m) {
                I = function() {
                    o("WAWebExternalLink.react").openExternalLink(m ?? f());
                };
                t[16] = m;
                t[17] = I;
            } else {
                I = t[17];
            }
            const T = I;
            C = o("WAWebFavicon.react").ErrorFavicon;
            y = r("WAWebConflict.react");
            if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
                v = s._("Log out");
                t[18] = v;
            } else {
                v = t[18];
            }
            S = _;
            if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
                R = s._("Learn more");
                t[19] = R;
            } else {
                R = t[19];
            }
            L = T;
            if (t[20] !== h) {
                E = <div>{h}</div>;
                t[20] = h;
                t[21] = E;
            } else {
                E = t[21];
            }
            b = s._("You'll be able to use WhatsApp again in {duration}", [
                s._param("duration", k)
            ]);
            t[5] = u;
            t[6] = h;
            t[7] = m;
            t[8] = y;
            t[9] = C;
            t[10] = b;
            t[11] = v;
            t[12] = S;
            t[13] = R;
            t[14] = L;
            t[15] = E;
        } else {
            y = t[8];
            C = t[9];
            b = t[10];
            v = t[11];
            S = t[12];
            R = t[13];
            L = t[14];
            E = t[15];
        }
        let D;
        if (t[22] !== b) {
            D = <div>{b}</div>;
            t[22] = b;
            t[23] = D;
        } else {
            D = t[23];
        }
        let x;
        if (t[24] !== y || t[25] !== v || t[26] !== S || t[27] !== R || t[28] !== L || t[29] !== E || t[30] !== D) {
            x = c.jsxs(y, {
                cancelText: v,
                onCancel: S,
                okText: R,
                onOK: L,
                children: [
                    E,
                    D
                ]
            });
            t[24] = y;
            t[25] = v;
            t[26] = S;
            t[27] = R;
            t[28] = L;
            t[29] = E;
            t[30] = D;
            t[31] = x;
        } else {
            x = t[31];
        }
        let $;
        if (t[32] !== C || t[33] !== x) {
            $ = <C>{x}</C>;
            t[32] = C;
            t[33] = x;
            t[34] = $;
        } else {
            $ = t[34];
        }
        return $;
    }
    const m = function() {
        return s._("You're temporarily banned from WhatsApp because you may have violated our terms of service.");
    };
    function p(e) {
        const n = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        switch(e){
            case 101:
                if (n == null) {
                    return m();
                }
                return s._("You're temporarily banned from WhatsApp because you sent too many messages to people who don't have {phone} in their address books.", [
                    s._param("phone", n)
                ]);
            case 102:
                return s._("You're temporarily banned from WhatsApp because too many people blocked you.");
            case 103:
                if (n == null) {
                    return m();
                }
                return s._("You're temporarily banned from WhatsApp because you created too many groups with people who don't have {phone} in their address books.", [
                    s._param("phone", n)
                ]);
            case 104:
                return s._("You're temporarily banned from WhatsApp because you sent the same message to too many people.");
            case 106:
                return s._("You're temporarily banned from WhatsApp because you sent too many messages to a broadcast list.");
            default:
                return m();
        }
    }
    function _() {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Banned accounts: user selected logout"
        ])));
        o("WAWebSocketModel").Socket.logout();
    }
    function f() {
        return `https://faq.whatsapp.com/web?lang=${r("WAWebL10N").getNormalizedLocale()}`;
    }
    l.default = d;
}, 226);