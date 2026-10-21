__d("WAWebSyncdResponseParser", [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebSyncdConst",
    "WAWebSyncdDecode",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = new (r("WADeprecatedWapParser"))("syncResponseParser", function(t) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: start parsing syncd collections"
        ])));
        const n = [];
        const r = t.child("sync");
        r.mapChildrenWithTag("collection", function(e) {
            const t = o("WAWebSyncdConst").CollectionName.cast(e.attrString("name"));
            if (!t) {
                throw new (o("WAWebSyncdError")).SyncdFatalError("invalid collection name");
            }
            const r = h(e, t);
            const a = {
                name: t,
                state: r
            };
            if (e.hasAttr("version")) {
                a.version = parseInt(e.attrString("version"), 10);
            }
            if (e.hasChild("patches")) {
                a.patches = e.child("patches").mapChildrenWithTag("patch", function(e) {
                    return o("WAWebSyncdDecode").decodeSyncdPatch(t, e.contentBytes());
                });
            }
            if (e.hasChild("snapshot")) {
                a.snapshot = o("WAWebSyncdDecode").decodeExternalBlobReference(t, e.child("snapshot").contentBytes());
            }
            n.push(a);
            if (a.version == null && a.patches == null && a.snapshot == null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: collection ",
                    " has no version, patches or snapshot"
                ])), t);
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: successfully parsed collection ",
                ""
            ])), t);
        });
        return n;
    });
    function h(e, t) {
        if (e.hasAttr("type") && e.attrString("type") === "error") {
            const n = e.child("error");
            const r = n.attrString("code");
            const a = n.attrString("text");
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: collection ",
                " got server error: ",
                ""
            ])), t, r);
            e: {
                if (r === "409") {
                    if (e.hasAttr("has_more_patches")) {
                        return o("WAWebSyncdConst").CollectionState.ConflictHasMore;
                    }
                    return o("WAWebSyncdConst").CollectionState.Conflict;
                }
                if (r === "400") {
                    o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_BAD_REQUEST_FOR_COLLECTION);
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: fatal error: collection ",
                        " throws ",
                        ""
                    ])), String(t), a).sendLogs(`syncd: fatal error 400: collection ${String(t)}`);
                    return o("WAWebSyncdConst").CollectionState.ErrorFatal;
                    break e;
                }
                if (r === "404") {
                    o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_NOT_FOUND_FOR_COLLECTION);
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: fatal error 404: collection ",
                        " throws ",
                        ""
                    ])), String(t), a).sendLogs(`syncd: fatal error: collection ${String(t)}`);
                    return o("WAWebSyncdConst").CollectionState.ErrorFatal;
                    break e;
                }
                {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: retryable error: collection ",
                        " throws ",
                        ""
                    ])), String(t), a).sendLogs(`syncd: retryable error: collection ${String(t)}`);
                    return o("WAWebSyncdConst").CollectionState.ErrorRetry;
                    break e;
                }
            }
        } else {
            if (e.hasAttr("has_more_patches")) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: collection ",
                    " got server code has_more_patches"
                ])), t);
                return o("WAWebSyncdConst").CollectionState.SuccessHasMore;
            }
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: collection ",
                " did not get server error"
            ])), t);
            return o("WAWebSyncdConst").CollectionState.Success;
        }
    }
    l.syncResponseParser = g;
}, 98);