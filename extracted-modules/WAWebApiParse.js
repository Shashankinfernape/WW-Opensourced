__d("WAWebApiParse", [
    "WAArrayBufferUtils",
    "WABase64",
    "WABinary",
    "WALogger",
    "WAWebABProps",
    "WAWebApi",
    "WAWebApiParseUtils",
    "WAWebBrAddPixKeyDeepLinkPrefill",
    "WAWebBroadcastApiParse",
    "WAWebCurrentUser",
    "WAWebExternalCtxConfig",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterStatusApiParse",
    "WAWebPaymentLinkUrlMetaData",
    "WAWebPhoneNumberSearch",
    "WAWebRegistrationCampaignConstants",
    "WAWebStatusApiParse",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebVoipGroupCallAccentColors",
    "WAWebWamEnumDeepLinkType",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const e = [
        "phone"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = new RegExp(`^${(_ = o("WAWebApiParseUtils")).ORIGIN}${_.OPTIONAL_PATH_PART}/accept/?\\?code=(\\w+)(?:&.*)?\$`, "i");
    const g = /^https?:\/\/chat\.whatsapp\.com\/invite\/(\w+)(?:\?.*)?$/i;
    const h = /^https?:\/\/chat\.whatsapp\.com\/(\w+)(?:\?.*)?$/i;
    const y = /^whatsapp:\/\/chat\/?\?code=(\w+)(?:&.*)?$/i;
    function C(e) {
        const t = it(e);
        let n = e.match(f);
        if (n) {
            return babelHelpers.extends({
                code: n[2],
                url: n[1] || "/"
            }, t != null && {
                utm: t
            });
        }
        n = e.match(g);
        if (n) {
            return babelHelpers.extends({
                code: n[1]
            }, t != null && {
                utm: t
            });
        }
        n = e.match(h);
        if (n) {
            return babelHelpers.extends({
                code: n[1]
            }, t != null && {
                utm: t
            });
        }
        n = e.match(y);
        if (n) {
            return babelHelpers.extends({
                code: n[1]
            }, t != null && {
                utm: t
            });
        }
    }
    const b = "utm_source";
    const v = "utm_campaign";
    const S = [
        "utm_source",
        "utm_campaign",
        "text",
        "phone",
        "source",
        "context",
        "icebreaker",
        "source_url",
        "type",
        "token",
        "attachment_uris",
        "username",
        "jid",
        "lid",
        "signup_id",
        "dp"
    ];
    function R(e) {
        return S.find((t)=>t === e);
    }
    const L = /^\d{1,20}$/;
    const E = 32;
    function k(e) {
        if (!(!e || typeof e !== "string")) {
            const t = o("WABinary").Binary.build(e);
            if (!(t.size() > o("WAWebABProps").getABPropConfigValue("ctwa_data_max_length"))) {
                return t.readBuffer();
            }
        }
    }
    function I(e, t) {
        const n = e;
        const r = o("WABinary").numUtf8Bytes(n);
        if (!(r > E)) {
            if (t.conversionTuple == null) {
                t.conversionTuple = {
                    conversionSource: n
                };
            } else {
                t.conversionTuple.conversionSource = n;
            }
        }
    }
    function T(e, t, n) {
        e: {
            if (e === "source_url") {
                if (n.ctwaContextLinkData != null) {
                    n.ctwaContextLinkData.sourceUrl = t;
                } else {
                    n.ctwaContextLinkData = {
                        sourceUrl: t
                    };
                }
                break e;
            }
            if (e === "context") {
                if (n.ctwaContextLinkData != null) {
                    n.ctwaContextLinkData.context = t;
                } else {
                    n.ctwaContextLinkData = {
                        context: t
                    };
                }
                break e;
            }
            if (e === "icebreaker") {
                if (n.ctwaContextLinkData != null) {
                    n.ctwaContextLinkData.icebreaker = t;
                } else {
                    n.ctwaContextLinkData = {
                        icebreaker: t
                    };
                }
                break e;
            }
            break e;
        }
    }
    function D(e) {
        if (e != null && e.split(".").length === 3) {
            const t = e.split(".")[1].replace(/\s/g, "");
            try {
                const n = o("WABase64").decodeB64UrlSafe(t);
                return JSON.parse(o("WAArrayBufferUtils").arrayBufferToString(n));
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "parseCTWADeeplinkToken: failed to parse token"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("ctwa-deeplink-token-parse-error").tags("ctwa-error");
                return {};
            }
        }
        return {};
    }
    function x(e) {
        const t = {};
        Object.keys(e).forEach((n)=>{
            const r = e[n];
            if (r != null) {
                switch(n){
                    case "source":
                        {
                            I(r, t);
                            break;
                        }
                    case "source_url":
                    case "context":
                    case "icebreaker":
                        {
                            T(n, r, t);
                            break;
                        }
                    default:
                        if (n === "phone" || n === "text" || n === "type") {
                            t[n] = r;
                        }
                }
            }
        });
        return t;
    }
    function $(e, t) {
        let n = {};
        let a = false;
        new URLSearchParams(e).forEach((e, t)=>{
            const r = R(t.toLowerCase());
            if (r != null) {
                switch(r){
                    case "source":
                        {
                            I(e, n);
                            break;
                        }
                    case "source_url":
                    case "context":
                    case "icebreaker":
                        T(r, e, n);
                        break;
                    case "utm_campaign":
                        if (n.utm != null) {
                            n.utm.campaign = e;
                        } else {
                            n.utm = {
                                campaign: e
                            };
                        }
                        break;
                    case "utm_source":
                        if (n.utm != null) {
                            n.utm.source = e;
                        } else {
                            n.utm = {
                                source: e
                            };
                        }
                        break;
                    case "token":
                        {
                            const i = D(e);
                            const l = x(i);
                            n = babelHelpers.extends({}, n, l);
                            a = true;
                            break;
                        }
                    case "attachment_uris":
                        n.attachmentUris = e.split(",");
                        break;
                    case "jid":
                        n.jid = e;
                        break;
                    case "lid":
                        n.lid = e;
                        break;
                    case "username":
                        {
                            const s = e.split(":");
                            const u = s[0];
                            const c = s[1];
                            n.username = u;
                            if (c != null) {
                                if (o("WAWebUsernameTypes").isUsernameKey(c)) {
                                    n.usernameKey = c;
                                } else {
                                    n.invalidUsernameKey = true;
                                }
                            }
                        }
                        break;
                    case "signup_id":
                        if (L.test(e)) {
                            n.signupId = e;
                        }
                        break;
                    case "dp":
                        if (e === "1") {
                            n.fromDefaultProtocol = true;
                        }
                        break;
                    default:
                        n[r] = e;
                }
            }
        });
        if (a) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "parseMsgSendParams:parsed values"
            ])));
        }
        if (n.phone != null && n.phone !== "") {
            n.phone = `${n.phone.replace(/\D/g, "")}@c.us`;
            if (n.ctwaContextLinkData) {
                n.ctwaContextLinkData.phone = n.phone;
            }
        }
        if (n.ctwaContextLinkData == null) {
            const i = nt(t);
            if (i != null) {
                n.partnertoken = i;
            }
        }
        if (!r("isStringNullOrEmpty")(n.phone) || !r("isStringNullOrEmpty")(n.text) || n.attachmentUris != null && n.attachmentUris.length > 0 || !r("isStringNullOrEmpty")(n.username)) {
            return n;
        }
    }
    const P = /^whatsapp:\/\/newchat\/?$/i;
    const N = /^whatsapp:\/\/chatOpen\/?(\?.*)?$/i;
    const M = /^whatsapp:\/\/callActive\/?(\?.*)?$/i;
    const w = /^whatsapp:\/\/appOpen\/?(\?.*)?$/i;
    const A = /^whatsapp:\/\/oidc_callback\/?(\?.*)?$/i;
    const F = /^whatsapp-smb:\/\/biz_ai_oauth_callback\/?(\?.*)?$/i;
    const O = "https://b.whatsapp.com/oauth/biz_ai_redirect";
    function B(e) {
        const t = e.match(N);
        if (!t) {
            return null;
        }
        const n = new URLSearchParams(t[1]);
        const a = n.get("lid");
        if (r("isStringNullOrEmpty")(a)) {
            return {
                resultType: o("WAWebApi").APICmd.INVALID
            };
        }
        const i = a.includes("@") ? a : `${a}@lid`;
        const l = n.get("session");
        const s = {
            lid: i
        };
        if (!r("isStringNullOrEmpty")(l)) {
            s.session = l;
        }
        if (n.get("dp") === "1") {
            s.fromDefaultProtocol = true;
        }
        return {
            resultType: o("WAWebApi").APICmd.CHAT_OPEN,
            data: s
        };
    }
    function W(e) {
        if (M.test(e)) {
            return {
                resultType: o("WAWebApi").APICmd.CALL_ACTIVE
            };
        }
        return null;
    }
    function q(e) {
        const t = e.match(w);
        if (!t) {
            return null;
        }
        const n = new URLSearchParams(t[1]);
        const a = n.get("session");
        return babelHelpers.extends({
            resultType: o("WAWebApi").APICmd.APP_OPEN
        }, !r("isStringNullOrEmpty")(a) && {
            data: {
                session: a
            }
        });
    }
    function U(e) {
        const t = e.match(A);
        if (!t) {
            return null;
        }
        const n = new URLSearchParams(t[1]);
        const a = n.get("code");
        const i = n.get("state");
        if (r("isStringNullOrEmpty")(a) || r("isStringNullOrEmpty")(i)) {
            return {
                resultType: o("WAWebApi").APICmd.INVALID
            };
        }
        return {
            resultType: o("WAWebApi").APICmd.OIDC_CALLBACK,
            data: {
                code: a,
                state: i
            }
        };
    }
    function V(e) {
        const t = e.match(F);
        if (!t) {
            return null;
        }
        const n = new URLSearchParams(t[1]);
        const a = n.get("code");
        const i = n.get("error");
        const l = n.get("state");
        if (r("isStringNullOrEmpty")(l)) {
            return {
                resultType: o("WAWebApi").APICmd.INVALID
            };
        }
        if (!r("isStringNullOrEmpty")(i)) {
            return {
                resultType: o("WAWebApi").APICmd.BIZ_AI_OAUTH_CALLBACK,
                data: {
                    code: null,
                    error: i,
                    state: l
                }
            };
        }
        const s = H(n, l);
        if (s != null) {
            return {
                resultType: o("WAWebApi").APICmd.BIZ_AI_OAUTH_CALLBACK,
                data: {
                    callbackUrl: s,
                    code: null,
                    error: null,
                    state: l
                }
            };
        }
        if (r("isStringNullOrEmpty")(a)) {
            if (r("isStringNullOrEmpty")(n.get("plugin_id"))) {
                return {
                    resultType: o("WAWebApi").APICmd.INVALID
                };
            }
            return {
                resultType: o("WAWebApi").APICmd.BIZ_AI_OAUTH_CALLBACK,
                data: {
                    code: null,
                    error: "brokered_callback_incomplete",
                    state: l
                }
            };
        }
        return {
            resultType: o("WAWebApi").APICmd.BIZ_AI_OAUTH_CALLBACK,
            data: {
                code: a,
                error: null,
                state: l
            }
        };
    }
    function H(e, t) {
        const n = e.get("plugin_id");
        const o = e.get("bizai_nonce");
        const a = e.get("connection_id");
        if (r("isStringNullOrEmpty")(n) || r("isStringNullOrEmpty")(o) || r("isStringNullOrEmpty")(a)) {
            return null;
        }
        const i = new URL(O);
        i.searchParams.set("state", t);
        i.searchParams.set("plugin_id", n);
        i.searchParams.set("bizai_nonce", o);
        i.searchParams.set("connectionId", a);
        return i.toString();
    }
    const G = /^whatsapp:\/\/newcall\/?(\?.*)?$/i;
    const z = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_PATH_PART}/forward/?\\?(.+)\$`, "i");
    const j = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_PATH_PART}/send/?\\?(.+)\$`, "i");
    const K = /^https?:\/\/api\.whatsapp\.com\/send\/?\?(.+)$/i;
    const Q = /^whatsapp:\/\/send\/?\?(.*)$/i;
    const X = /^https?:\/\/wa\.me\/([0-9.]{1,20})\/signup\/([^/?]+)\/?(?:\?(.+))?$/i;
    const Y = /^https?:\/\/wa\.me\/?(?:([0-9.]{0,20}))\/?\??(.+)?$/i;
    const J = /^https?:\/\/wa\.me\/?(?:([0-9a-z.]{5,35}))?\/?\??(.+)?$/i;
    const Z = /^https?:\/\/wa\.me\/?@?(?:([0-9a-z._]{3,30}))(?::([^?/]+))?(\/?\?(.*))?$/i;
    const ee = /^https?:\/\/wa\.me\/settings\/?(?:\?.*)?$/i;
    const te = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})$/i;
    const ne = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})$/i;
    const re = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/product/([0-9]{0,20})/([0-9]{0,20})\$`, "i");
    const oe = /^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i;
    const ae = /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})(\/?\?.*)$/i;
    const ie = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/product/([0-9]{0,20})/([0-9]{0,20})(/?.*)\$`, "i");
    const le = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})$/i;
    const se = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})$/i;
    const ue = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/product/([^/]{0,200})/([0-9]{0,20})\$`, "i");
    const ce = /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i;
    const de = /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})(\/?\?.*)$/i;
    const me = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/product/([^/]{0,200})/([0-9]{0,20})(/?.*)\$`, "i");
    const pe = /^https?:\/\/wa\.me\/biz-add-product\/?(.+)$/i;
    const _e = /^whatsapp-smb:\/\/advertise\/?(.+)$/i;
    const fe = /^whatsapp-smb:\/\/manage-ads\/?(?:\?.*)?$/;
    const ge = /^https?:\/\/wa\.me\/pay\/br\/merchant\/pix\/add\/?(.+)$/i;
    const he = /^https?:\/\/faq\.whatsapp\.com\/1013401987232838\/?(.+)$/i;
    const ye = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_PATH_PART}/pay/br/merchant/pix/add/?(.+)\$`, "i");
    const Ce = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/pay/br/add-pix-key/?(?:\\?(.*))?\$`, "i");
    const be = /^whatsapp:\/\/pay\/br\/add-pix-key\/?(?:\?(.*))?$/i;
    const ve = /^whatsapp-smb:\/\/biztab\/manage-data-sharing\/?(?:\?.*)?$/i;
    const Se = /^whatsapp-smb:\/\/biz-agents-onboarding\/?(?:\?.*)?$/i;
    const Re = /^whatsapp-smb:\/\/biz-broadcast-audience-modal\/?(?:\?.*)?$/i;
    const Le = /^whatsapp-smb:\/\/biz-broadcast-home\/?(?:\?.*)?$/i;
    const Ee = new RegExp(`^${_.ORIGIN}/biz-broadcast-home/?(?:\\?.*)?\$`, "i");
    const ke = /^[a-z0-9_]{1,64}$/i;
    function Ie(e) {
        return e != null && ke.test(e);
    }
    const Te = /^whatsapp-smb:\/\/business-broadcast\/?(?:\?.*)?$/i;
    const De = new RegExp(`^${_.ORIGIN}/business-broadcast/?(?:\\?.*)?\$`, "i");
    const xe = /^whatsapp-smb:\/\/marketingmessages\/?(?:\?.*)?$/i;
    const $e = new RegExp(`^${_.ORIGIN}/marketingmessages/?(?:\\?.*)?\$`, "i");
    const Pe = /^https?:\/\/wa\.me\/biz-catalog-settings\/?(.+)$/i;
    const Ne = /^https?:\/\/wa\.me\/biz-catalog-boost\/?(.+)$/i;
    const Me = /^whatsapp:\/\/message_yourself\/?(?:\?.*)?$/i;
    const we = /^https?:\/\/wa\.me\/message_yourself\/?(?:\?.*)?$/i;
    const Ae = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_PATH_PART}/calluser/?\\?(.+)\$`, "i");
    const Fe = /^https?:\/\/wa\.me\/call\/([^/?]+)\/?(?:\?.*)?$/i;
    const Oe = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/reg/wacom[/\\?]{0,2}(.*)\$`, "i");
    const Be = [
        te,
        ne,
        le,
        se
    ];
    const We = [
        re,
        ue
    ];
    const qe = [
        ie,
        me
    ];
    const Ue = [
        oe,
        ae,
        ce,
        de
    ];
    const Ve = [].concat(Be, We, qe, Ue);
    function He(e, t) {
        for(let n = 0; n < t.length; n++){
            const r = e.match(t[n]);
            if (r) {
                return r;
            }
        }
    }
    function Ge(e) {
        return He(e, Ve) != null;
    }
    const ze = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/push/`, "i");
    const je = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})(?:\?.*)?$/i;
    const Ke = /^whatsapp:\/\/catalog\/([0-9]{0,20})(?:\?.*)?$/i;
    const Qe = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/catalog/([0-9]{0,20})?\$`, "i");
    const Xe = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/catalog/([0-9]{0,20})(/?.*)?\$`, "i");
    function Ye(e) {
        return [
            je,
            Ke,
            Qe,
            Xe
        ].some((t)=>e.match(t));
    }
    const Je = /^https?:\/\/wa\.me\/favorites\/?(?:\\?.*)?$/i;
    const Ze = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/favorites/?(?:\\?.*)?\$`, "i");
    function et(e) {
        if (o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
            const t = e.match(Z);
            if (t) {
                let n = null;
                if (t[1]) {
                    n = {
                        username: t[1]
                    };
                }
                const r = t[2];
                if (r != null) {
                    if (o("WAWebUsernameTypes").isUsernameKey(r)) {
                        n = babelHelpers.extends({}, n, {
                            usernameKey: r
                        });
                    } else {
                        n = babelHelpers.extends({}, n, {
                            invalidUsernameKey: true
                        });
                    }
                }
                if (t[3]) {
                    const a = $(t[3], e);
                    if (a != null) {
                        n = babelHelpers.extends({}, n, a);
                    }
                }
                if (n != null) {
                    const i = nt(e);
                    if (i != null) {
                        n = babelHelpers.extends({}, n, {
                            partnertoken: i
                        });
                    }
                }
                return n;
            }
        }
    }
    function tt(t) {
        let n = t.match(j);
        if (n) {
            const r = $(n[2], t);
            if (r) {
                r.url = n[1] || "/";
                return r;
            }
        }
        n = t.match(K);
        if (n || (n = t.match(Q), n)) {
            return $(n[1], t);
        }
        n = t.match(X);
        if (n) {
            let a = {
                phone: `${n[1]}@c.us`
            };
            const i = n[2];
            if (L.test(i)) {
                a.signupId = i;
            }
            if (n[3]) {
                const l = $(n[3], t);
                if (l) {
                    const s = l.phone;
                    const u = babelHelpers.objectWithoutPropertiesLoose(l, e);
                    a = babelHelpers.extends({}, a, u);
                }
            }
            const c = nt(t);
            if (c != null) {
                a.partnertoken = c;
            }
            return a;
        }
        n = t.match(Y);
        if (n) {
            let d;
            const m = t.match(J);
            if (n[1]) {
                d = {
                    phone: `${n[1]}@c.us`
                };
            } else if (m && m[1] && !m[2]) {
                d = {
                    url: t,
                    customUrl: m[1]
                };
                d = babelHelpers.extends({}, d, et(t));
            }
            if (n[2]) {
                const p = $(n[2], t);
                if (p) {
                    d = babelHelpers.extends({}, d, p);
                }
            }
            if (d) {
                const _ = nt(t);
                if (_ != null) {
                    d.partnertoken = _;
                }
            }
            if (d != null || !o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
                return d;
            }
        }
        return et(t);
    }
    function nt(e) {
        const t = o("WAWebExternalCtxConfig").getExternalCtxUrlParamNames();
        const n = new URL(e);
        for (const r of t){
            const a = n.searchParams.get(r);
            if (a != null) {
                return a;
            }
        }
        return null;
    }
    const rt = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
    function ot(e) {
        const t = e.match(rt);
        if (t) {
            const n = new URLSearchParams(t[1]).get("entrypoint");
            return {
                url: "/",
                entrypointType: n
            };
        }
    }
    function at(e, t) {
        const n = {
            catalogOwnerJid: `${e[1]}@s.whatsapp.net`
        };
        const r = nt(t);
        if (r != null) {
            n.partnertoken = r;
        }
        return n;
    }
    function it(e) {
        const t = new URLSearchParams(e);
        const n = t.get(b);
        const r = t.get(v);
        if (r == null && n == null) {
            return null;
        }
        const o = {};
        if (n != null) {
            o.source = n;
        }
        if (r != null) {
            o.campaign = r;
        }
        return o;
    }
    function lt(e) {
        let t = e.match(je) || e.match(Ke);
        if (t) {
            return at(t, e);
        }
        t = e.match(Qe);
        if (t) {
            return babelHelpers.extends({}, at(t, e), {
                url: "/"
            });
        }
        t = e.match(Xe);
        if (t) {
            const n = it(t[2]);
            return babelHelpers.extends({}, at(t, e), n != null && {
                utm: n
            }, {
                url: "/"
            });
        }
    }
    function st(e, t) {
        const n = {
            productId: e[1],
            businessOwnerJid: `${e[2]}@s.whatsapp.net`
        };
        const r = nt(t);
        if (r != null) {
            n.partnertoken = r;
        }
        return n;
    }
    function ut(e) {
        let t = He(e, Be);
        if (t) {
            return st(t, e);
        }
        t = He(e, We);
        if (t) {
            return babelHelpers.extends({}, st(t, e), {
                url: "/"
            });
        }
        t = He(e, qe);
        if (t) {
            const n = it(t[3]);
            return babelHelpers.extends({}, st(t, e), n != null && {
                utm: n
            }, {
                url: "/"
            });
        }
        t = He(e, Ue);
        if (t) {
            const r = it(t[3]);
            return babelHelpers.extends({}, st(t, e), r != null && {
                utm: r
            });
        }
    }
    function ct(e) {
        const t = e.match(ze);
        if (t) {
            return {
                url: "/"
            };
        }
    }
    function dt(e) {
        const t = new URLSearchParams(e);
        const n = t.get("wa_campaign_id");
        if (!(n == null || n === "")) {
            const r = t.get("wa_campaign_type");
            if (r == null || r === "") {
                return null;
            }
            return {
                campaignId: n,
                campaignType: r
            };
        }
    }
    function mt(e) {
        const t = e.match(_e);
        if (t) {
            return dt(t[1]);
        }
    }
    function pt(e) {
        const t = e.match(pe);
        if (t) {
            return dt(t[1]);
        }
    }
    function _t(e) {
        let t = e.match(ge);
        let n = null;
        if (t) {
            n = t[1];
        } else {
            t = e.match(ye);
            if (t) {
                n = t[2];
            }
        }
        if (n != null) {
            const r = dt(n);
            if (r) {
                return {
                    resultType: "BRAZIL_PAYMENTS",
                    data: babelHelpers.extends({}, r, {
                        subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING
                    })
                };
            }
        }
        t = e.match(he);
        if (t) {
            const a = dt(t[1]);
            if (a) {
                return {
                    resultType: "BRAZIL_PAYMENTS",
                    data: babelHelpers.extends({}, a, {
                        subType: o("WAWebApi").BrazilPaymentResultSubtype.PIX_FAQ
                    })
                };
            }
        }
        return null;
    }
    function ft(e) {
        const r = e.match(Ce) ?? e.match(be);
        if (!r) {
            return null;
        }
        const a = (r[1] ?? "").split("#")[0];
        const i = new URLSearchParams(a);
        return {
            resultType: "BRAZIL_ADD_PIX_KEY",
            data: {
                campaignId: i.get("c"),
                prefill: o("WAWebBrAddPixKeyDeepLinkPrefill").parseAddPixKeyPrefill(i, a),
                referralSlug: i.get("referral"),
                url: "/"
            }
        };
    }
    function gt(e) {
        const t = e.match(Pe);
        if (t) {
            const n = dt(t[1]);
            if (n?.campaignType === "chat_psa") {
                return {
                    deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CATALOG_SETTINGS
                };
            }
        }
        const r = e.match(Ne);
        if (r) {
            const a = dt(r[1]);
            if (a?.campaignType === "chat_psa") {
                return {
                    deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_BOOST_CATALOG
                };
            }
        }
    }
    function ht(e) {
        return o("WAWebPaymentLinkUrlMetaData").getPaymentLinkUrlMetaData(e);
    }
    const yt = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i;
    const Ct = /^https?:\/\/wa\.me\/edit-profile-picture$/i;
    const bt = /^(?:https?:\/\/wa\.me\/set-about|whatsapp:\/\/set-about)\/?(?:\?.*)?$/i;
    const vt = /^(?:https?:\/\/wa\.me\/profile\/username|whatsapp:\/\/profile\/username)(?:\?.*)?$/i;
    const St = /^https?:\/\/wa\.me\/stickerpack\/(?!meta-avatar)/i;
    function Rt(e) {
        const t = e.match(St);
        return t != null;
    }
    function Lt(e) {
        const t = e.match(yt);
        return !!t;
    }
    const Et = /^https?:\/\/wa\.me\/ais\/(\d{14,20})\/?(\?.*)?$/i;
    const kt = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/ais/(\\d{14,20})/?(\\?.*)?\$`, "i");
    function It(e) {
        const r = (e.match(Et) ?? e.match(kt) ?? [])[1];
        if (r) {
            return {
                resultType: o("WAWebApi").APICmd.UGC_BOT,
                data: {
                    fbid: r
                }
            };
        }
        return null;
    }
    const Tt = /^https?:\/\/wa\.me\/(?:hatch|muse)\/link(?:\?(.*))?$/i;
    const Dt = new RegExp(`^${_.ORIGIN}${_.OPTIONAL_NON_CAPTURING_PATH_PART}/(?:hatch|muse)/link(?:\\?(.*))?\$`, "i");
    function xt(e) {
        const n = e.match(Tt) ?? e.match(Dt);
        if (n != null) {
            let r = null;
            if (n[1] != null) {
                const a = new URLSearchParams(n[1]);
                r = a.get("token");
            }
            return {
                resultType: o("WAWebApi").APICmd.HATCH_LINK,
                data: {
                    token: r
                }
            };
        }
        return null;
    }
    function $t(e) {
        if (Rt(e)) {
            const t = new URL(e);
            const n = t.pathname.split("/");
            const r = n[0];
            const o = n[1];
            const a = n[2];
            return a;
        }
    }
    function Pt(e) {
        const t = e.match(St);
        if (t) {
            const n = $t(e);
            return {
                resultType: "STICKER_PACK",
                data: {
                    url: n
                }
            };
        }
    }
    const Nt = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    const Mt = /^whatsapp:\/\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    const wt = new RegExp(`^${_.ORIGIN}/call/(video|voice)/(\\w+)(?:\\?.*)?\$`, "i");
    const At = /^https:\/\/web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    const Ft = /^https:\/\/dev-web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    const Ot = /^https:\/\/call\.[^/]+\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    const Bt = /^https:\/\/dev-web\.[^/]+\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    function Wt(e) {
        const t = e.get("audio_device");
        const n = e.get("speaker_device");
        const r = e.get("video_device");
        const a = e.get("color_index");
        const i = a != null && a !== "" ? parseInt(a, 10) : null;
        const l = o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS.length - 1;
        return {
            audioDeviceId: t != null && t !== "" ? t : null,
            autoJoin: e.get("auto_join") === "1",
            colorIndex: i != null && !isNaN(i) && i >= 1 && i <= l ? i : null,
            speakerDeviceId: n != null && n !== "" ? n : null,
            videoDeviceId: r != null && r !== "" ? r : null,
            videoMuted: e.get("video_muted") === "1",
            audioMuted: e.get("audio_muted") === "1"
        };
    }
    function qt(e) {
        let t;
        try {
            t = new URL(e);
        } catch (e) {
            return null;
        }
        const n = t.hostname.toLowerCase();
        if (n !== "whatsapp.com" && !n.endsWith(".whatsapp.com")) {
            return null;
        }
        const r = t.searchParams;
        if (r.get("cmd") !== "call_link") {
            return null;
        }
        const a = r.get("call_type");
        const i = r.get("call_token");
        if (a !== "video" && a !== "voice" || i == null || i === "") {
            return null;
        }
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "Successfully parsed call link from query params: ",
            ""
        ])), e);
        const l = Wt(r);
        return {
            resultType: "CALL_LINK",
            data: babelHelpers.extends({
                token: i,
                callType: a
            }, l)
        };
    }
    function Ut(e) {
        let t = e.match(Nt) || e.match(Mt) || e.match(wt) || e.match(At);
        if (t == null && o("WAWebCurrentUser").isEmployee()) {
            t = e.match(Ft);
        }
        if (t) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Successfully parsed call link: ",
                ""
            ])), e);
            return {
                resultType: "CALL_LINK",
                data: {
                    token: t[2],
                    callType: t[1]
                }
            };
        }
        const n = qt(e);
        if (n != null) {
            return n;
        }
    }
    function Vt(e) {
        return Ut(e) != null;
    }
    function Ht(e) {
        const t = e.match(Oe);
        if (t && t[0]) {
            const n = new URL(e);
            const r = new URLSearchParams(n.search);
            const a = r.get("g");
            const i = r.get("pn");
            const l = r.get("prov_num");
            let s = null;
            switch(a){
                case "0":
                    s = o("WAWebRegistrationCampaignConstants").WHATSAPP_DOT_COM_REG_EXP_CONTROL;
                    break;
                case "1":
                    s = o("WAWebRegistrationCampaignConstants").WHATSAPP_DOT_COM_REG_EXP_FLOW_1;
                    break;
                default:
                    if (a === "2") {
                        s = o("WAWebRegistrationCampaignConstants").WHATSAPP_DOT_COM_REG_EXP_FLOW_2;
                    }
            }
            if (i != null && i.length > 0 && /^\d{10}$/.test(i)) {
                return babelHelpers.extends({
                    referrer: "wacom",
                    url: "/",
                    phoneNumberWithoutCountryCode: i
                }, l != null && {
                    providerNumber: l
                }, {
                    group: s
                });
            }
            return babelHelpers.extends({
                referrer: "wacom",
                url: "/"
            }, l != null && {
                providerNumber: l
            }, {
                group: s
            });
        }
    }
    function Gt() {
        const e = new URLSearchParams(window.location.search);
        const t = e.get("work_contact_sync_data");
        if (t != null && t !== "") {
            return {
                compressedData: t
            };
        }
        return null;
    }
    function zt(e) {
        const t = e.match(z);
        if (!t) {
            return null;
        }
        const n = new URLSearchParams(t[2]);
        if (!n.has("session_id")) {
            return null;
        }
        const r = n.get("session_id");
        if (r == null || r.trim() === "") {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "parseSendFile: invalid or missing session_id"
            ]))).sendLogs("send-file-invalid-session-id");
            return null;
        }
        const a = n.get("utm_campaign");
        return {
            sessionId: r ?? void 0,
            utmCampaign: a ?? void 0
        };
    }
    function jt(e) {
        if (!o("WAWebABProps").getABPropConfigValue("wa_web_calling_deep_link_error")) {
            return null;
        }
        const n = e.match(Fe);
        if (n == null && !Ae.test(e)) {
            return null;
        }
        const r = new URL(e);
        const a = n == null ? r.searchParams.get("phone") ?? "" : Kt(n[1]);
        const i = o("WAWebPhoneNumberSearch").numberSearch(a) || void 0;
        const l = r.searchParams.get("call_type") === "video" && o("WAWebABProps").getABPropConfigValue("enable_calluser_video_deeplink");
        return {
            resultType: o("WAWebApi").APICmd.CALL_USER,
            data: {
                url: "/",
                phone: i,
                video: l
            }
        };
    }
    function Kt(e) {
        try {
            return decodeURIComponent(e);
        } catch (t) {
            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "parseCallUser: phone path segment is not decodable: ",
                ""
            ])), t).sendLogs("calling-deep-link-undecodable-phone", {
                sampling: 0.01
            });
            return e;
        }
    }
    function Qt(e, t) {
        if (typeof e !== "string") {
            return {
                resultType: o("WAWebApi").APICmd.INVALID
            };
        }
        const n = C(e);
        if (n) {
            return {
                resultType: o("WAWebApi").APICmd.GROUP_INVITE,
                data: n
            };
        }
        const a = lt(e);
        if (a) {
            return {
                resultType: o("WAWebApi").APICmd.CATALOG,
                data: a
            };
        }
        const i = ut(e);
        if (i) {
            return {
                resultType: o("WAWebApi").APICmd.PRODUCT,
                data: i
            };
        }
        const l = ot(e);
        if (l) {
            return {
                resultType: o("WAWebApi").APICmd.CREATE_COMMUNITY,
                data: l
            };
        }
        const s = Lt(e);
        if (s) {
            return {
                resultType: o("WAWebApi").APICmd.AVATAR_STICKERPACK
            };
        }
        const u = o("WAWebNewsletterStatusApiParse").parseNewsletterStatusDeeplink(e);
        if (u) {
            return {
                resultType: o("WAWebApi").APICmd.NEWSLETTER_STATUS_DEEPLINK,
                data: u
            };
        }
        const c = o("WAWebStatusApiParse").parseStatusPostFeatureLink(e);
        if (c) {
            return {
                resultType: o("WAWebApi").APICmd.STATUS_POST,
                data: c
            };
        }
        const d = o("WAWebBroadcastApiParse").parseBroadcastFeatureLink(e);
        if (d) {
            return {
                resultType: o("WAWebApi").APICmd.BROADCAST,
                data: d
            };
        }
        const m = o("WAWebNewsletterApiParse").parseNewsletter(e, t);
        if (m) {
            return {
                resultType: o("WAWebApi").APICmd.NEWSLETTER,
                data: m
            };
        }
        if ([
            Me,
            we
        ].some((t)=>e.match(t))) {
            return {
                resultType: o("WAWebApi").APICmd.MESSAGE_YOURSELF
            };
        }
        if ([
            Je,
            Ze
        ].some((t)=>e.match(t))) {
            return {
                resultType: o("WAWebApi").APICmd.FAVORITES,
                data: {
                    url: "/"
                }
            };
        }
        const p = pt(e);
        if (p != null) {
            return {
                resultType: o("WAWebApi").APICmd.OPEN_CATALOG,
                data: p
            };
        }
        const _ = gt(e);
        if (_ != null) {
            return {
                resultType: o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA,
                data: _
            };
        }
        const f = Pt(e);
        if (f) {
            return {
                resultType: o("WAWebApi").APICmd.STICKER_PACK,
                data: {
                    url: f.data.url ?? ""
                }
            };
        }
        const h = ct(e);
        if (h) {
            return {
                resultType: o("WAWebApi").APICmd.PUSH_NOTIFICATION,
                data: h
            };
        }
        const y = mt(e);
        if (y != null) {
            return {
                resultType: o("WAWebApi").APICmd.ADVERTISE,
                data: y
            };
        }
        const b = Ut(e);
        if (b) {
            return b;
        }
        if (e.match(fe)) {
            return {
                resultType: o("WAWebApi").APICmd.MANAGE_ADS,
                trigger: "chatListBanner"
            };
        }
        if (e.match(ve)) {
            const v = new URL(e);
            const S = v.searchParams.get("source");
            return {
                resultType: o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING,
                source: S ?? "unknown"
            };
        }
        if (e.match(Se)) {
            return {
                resultType: o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING
            };
        }
        if (e.match(Re)) {
            return {
                resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL
            };
        }
        if (e.match(Le) || e.match(Ee) || e.match(Te) || e.match(De) || e.match(xe) || e.match($e)) {
            const R = new URL(e);
            const L = R.searchParams.get("source");
            const E = R.searchParams.get("moment");
            return {
                resultType: o("WAWebApi").APICmd.BIZ_BROADCAST_HOME,
                data: {
                    source: L ?? "unknown",
                    moment: Ie(E) ? E : void 0,
                    url: "/"
                }
            };
        }
        const k = V(e);
        if (k != null) {
            return k;
        }
        const I = ft(e);
        if (I) {
            return I;
        }
        const T = _t(e);
        if (T) {
            return T;
        }
        if (e.match(Ct)) {
            return {
                resultType: o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE
            };
        }
        if (e.match(bt)) {
            return {
                resultType: o("WAWebApi").APICmd.SET_ABOUT
            };
        }
        const D = e.match(vt);
        if (D) {
            const $ = new URL(e.replace("whatsapp://", "https://"));
            const N = $.searchParams.get("entry_point") ?? void 0;
            return {
                resultType: o("WAWebApi").APICmd.PROFILE_USERNAME,
                data: {
                    entryPoint: N
                }
            };
        }
        const M = jt(e);
        if (M != null) {
            return M;
        }
        const w = ht(e);
        if (w != null) {
            return {
                resultType: o("WAWebApi").APICmd.PAYMENT_LINK,
                data: w
            };
        }
        const A = xt(e);
        if (A != null) {
            return A;
        }
        const F = It(e);
        if (F) {
            return F;
        }
        if (ee.test(e)) {
            return {
                resultType: o("WAWebApi").APICmd.INVALID
            };
        }
        const O = tt(e);
        if (O) {
            return {
                resultType: o("WAWebApi").APICmd.MSG_SEND,
                data: O
            };
        }
        const H = Ht(e);
        if (H != null) {
            return {
                resultType: o("WAWebApi").APICmd.WEB_REGISTRATION_CAMPAIGN,
                data: H
            };
        }
        const z = B(e);
        if (z != null) {
            return z;
        }
        const j = W(e);
        if (j != null) {
            return j;
        }
        const K = q(e);
        if (K != null) {
            return K;
        }
        const Q = U(e);
        if (Q != null) {
            return Q;
        }
        if (e.match(P)) {
            return {
                resultType: o("WAWebApi").APICmd.NEW_CHAT
            };
        }
        const X = e.match(G);
        if (X) {
            const Y = new URLSearchParams(X[1]);
            const J = Y.get("phone");
            const Z = Y.get("lid");
            const te = Y.get("video") === "true";
            const ne = Y.get("dp") === "1";
            const re = {};
            if (!r("isStringNullOrEmpty")(J)) {
                re.phone = J;
            }
            if (!r("isStringNullOrEmpty")(Z)) {
                re.lid = Z;
            }
            if (te) {
                re.video = te;
            }
            if (ne) {
                re.fromDefaultProtocol = true;
            }
            const oe = !r("isStringNullOrEmpty")(J) || !r("isStringNullOrEmpty")(Z) || te;
            return babelHelpers.extends({
                resultType: o("WAWebApi").APICmd.NEW_CALL
            }, oe && {
                data: re
            });
        }
        const ae = r("gkx")("26258") ? null : Gt();
        if (ae) {
            return {
                resultType: o("WAWebApi").APICmd.WORK_CONTACT_SYNC,
                data: ae
            };
        }
        const ie = zt(e);
        if (ie) {
            return {
                resultType: o("WAWebApi").APICmd.SEND_FILE,
                data: ie
            };
        }
        return {
            resultType: o("WAWebApi").APICmd.INVALID
        };
    }
    l.parseConversionData = k;
    l.parseCTWADeeplinkToken = D;
    l.matchProductUrl = Ge;
    l.matchCatalogUrl = Ye;
    l.isStickerPackURL = Rt;
    l.parseCallLinkDevicePrefs = Wt;
    l.parseCallLink = Ut;
    l.isValidCallLink = Vt;
    l.parseAPICmd = Qt;
}, 98);