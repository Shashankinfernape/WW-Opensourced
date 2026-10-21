__d("WAWebQueryMediaConnsJob", [
    "WADeprecatedSendIq",
    "WALogger",
    "WAMediaConnParser",
    "WAPromiseRaceAbort",
    "WATimeUtils",
    "WAWap",
    "WAWebBackendErrors",
    "compactMap",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e) {
        return ((e)=>{
            if (e === "kyc-id" || e === "novi-image" || e === "novi-video" || e === "thumbnail-gif" || e === "xma-image") {
                return null;
            }
            if (e === "image" || e === "sticker" || e === "ptt" || e === "audio" || e === "document" || e === "video" || e === "gif" || e === "ppic" || e === "md-app-state" || e === "md-msg-hist" || e === "template" || e === "thumbnail-image" || e === "thumbnail-video" || e === "thumbnail-document" || e === "thumbnail-link" || e === "payment-bg-image" || e === "biz-cover-photo" || e === "preview" || e === "newsletter-music-artwork" || e === "newsletter-audio" || e === "newsletter-document" || e === "newsletter-image" || e === "newsletter-gif" || e === "newsletter-ptt" || e === "newsletter-sticker" || e === "newsletter-sticker-pack" || e === "newsletter-thumbnail-link" || e === "newsletter-video" || e === "newsletter-ptv" || e === "sticker-pack" || e === "thumbnail-sticker-pack" || e === "music-artwork" || e === "group-history" || e === "ads-image" || e === "ads-video" || e === "ptv" || e === "maiba-file") {
                return e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(e);
    }
    function f(e) {
        return {
            hostname: e.domain,
            class: e.class,
            ips: [
                {
                    ip4: e.ip4,
                    ip6: e.ip6
                }
            ]
        };
    }
    function g(e) {
        const t = (t)=>{
            const e = [];
            const download = r("compactMap")(t.downloadable, _);
            if (download.length > 0) {
                e.push({
                    download
                });
            }
            const upload = r("compactMap")(t.uploadable, _);
            if (upload.length > 0) {
                e.push({
                    upload
                });
            }
            const downloadBuckets = t.downloadBuckets.map((e)=>e.toString());
            if (downloadBuckets != null && downloadBuckets.length > 0) {
                e.push({
                    downloadBuckets
                });
            }
            return e;
        };
        return {
            hosts: e.hosts.map((e)=>babelHelpers.extends({}, f(e), {
                    fallback: e.fallback != null ? f(e.fallback) : undefined,
                    type: e.isFallback ? "fallback" : "primary",
                    rules: t(e)
                })),
            auth: e.authToken,
            authTTL: e.authTokenExpiryTs,
            ttl: e.routesExpiryTs,
            maxBuckets: e.maxBuckets
        };
    }
    function h(t) {
        let n;
        const queryStartTime = new Date;
        const i = o("WATimeUtils").unixTime();
        const l = (n = o("WAWap")).wap("iq", {
            to: n.S_WHATSAPP_NET,
            xmlns: "w:m",
            type: "set",
            id: n.generateId()
        }, n.wap("media_conn", null));
        const _ = o("WADeprecatedSendIq").deprecatedSendIq(l, o("WAMediaConnParser").mediaConnParser).then((t)=>{
            if (t.success) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "backend:queryMediaConn: got ",
                    " hosts"
                ])), t.result.hosts.length);
                const n = g(t.result);
                const { auth, authTTL, hosts, maxBuckets, ttl } = n;
                if (!auth || ttl == null || !hosts || hosts.length === 0) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "backend:queryMediaConnections: auth exists ",
                        ""
                    ])), String(!!auth));
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "backend:queryMediaConnections: ttl exists ",
                        ""
                    ])), String(!!ttl));
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "backend:queryMediaConnections: hosts exists ",
                        ""
                    ])), String(!!hosts));
                    if (hosts) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "backend:queryMediaConnections: hosts.length ",
                            ""
                        ])), hosts.length);
                    }
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).sendLogs("backend:queryMediaConnections unexpected mediaConn");
                    throw r("err")("Invalid mediaConn");
                }
                return {
                    queryStartTime,
                    auth,
                    hosts,
                    ttl: ttl - i,
                    maxBuckets,
                    authTTL: authTTL - i
                };
            } else {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "response: ",
                    " ",
                    ""
                ])), t.errorCode, t.errorText).sendLogs("backend:queryMediaConn: fail");
                throw t.errorCode === 507 ? new (o("WAWebBackendErrors")).E507(t.errorText, t.errorBackoff) : new (o("WAWebBackendErrors")).ServerStatusCodeError(t.errorCode, t.errorText);
            }
        });
        return r("WAPromiseRaceAbort")(_, t);
    }
    l.mapParsedMediaConn = g;
    l.queryMediaConn = h;
}, 98);