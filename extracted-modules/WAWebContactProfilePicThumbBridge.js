__d("WAWebContactProfilePicThumbBridge", [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebChangeProfilePicThumb",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchNewsletterProfilePic",
    "WAWebProfilePicConstants",
    "WAWebSendProfilePictureJob",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = r("requireDeferred")("WAWebFetchCommunityProfilePic").__setRef("WAWebContactProfilePicThumbBridge");
    const h = r("requireDeferred")("WAWebGetProfilePicJob").__setRef("WAWebContactProfilePicThumbBridge");
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("WAWebSendProfilePictureJob")(e, null).then(()=>({
                    status: 200
                }));
            const n = yield t;
            o("WAWebChangeProfilePicThumb").changeProfilePicThumb(e, o("WAWebProfilePicConstants").ProfilePicCommand.Remove).catch((e)=>{
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "changeProfilePicThumb failed with error ",
                    ""
                ])), r("getErrorSafe")(e).message);
            });
            return n;
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            const data = r("WAWebURLUtils").parseDataURL(a).data;
            const l = o("WABase64").decodeB64(data);
            const s = r("WAWebSendProfilePictureJob")(e, l).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield h.load();
                const t_getProfilePic = t.getProfilePic;
                const r = yield t_getProfilePic(e, {
                    preview: false
                });
                return {
                    tag: r.tag,
                    eurl: r.eurl,
                    fullDirectPath: r.directPath,
                    filehash: r.filehash,
                    status: 200
                };
            }));
            const c = yield s;
            o("WAWebChangeProfilePicThumb").changeProfilePicThumb(e, o("WAWebProfilePicConstants").ProfilePicCommand.Set).catch((e)=>{
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "changeProfilePicThumb failed with error ",
                    ""
                ])), r("getErrorSafe")(e).message);
            });
            return c;
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return {
            id: e.toString(),
            eurl: t?.eurl ?? null,
            previewEurl: t?.previewEurl ?? null,
            tag: t?.tag ?? null,
            previewDirectPath: t?.previewDirectPath ?? null,
            fullDirectPath: t?.fullDirectPath ?? null,
            filehash: t?.filehash ?? null,
            timestamp: Date.now()
        };
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = S(e, t);
            yield o("WAWebDBBulkPersistProfilePic").persistProfilePicBatched(n);
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = h.load().then(({ getProfilePic })=>(f || (f = n("Promise"))).all([
                    getProfilePic(e, babelHelpers.extends({}, t, {
                        preview: false
                    })),
                    getProfilePic(e, babelHelpers.extends({}, t, {
                        preview: true
                    }))
                ])).then(([n, r])=>{
                const o = {
                    eurl: n.eurl,
                    tag: n.tag,
                    previewEurl: r.eurl,
                    previewDirectPath: r.directPath,
                    fullDirectPath: n.directPath
                };
                const a = r.filehash ?? n.filehash;
                if (a != null) {
                    o.filehash = a;
                }
                return o;
            });
            try {
                const i = yield a;
                R(e, i).catch((e)=>{
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "persistProfilePicToDB failed with error ",
                        ""
                    ])), r("getErrorSafe")(e).message);
                });
                D(e, i.eurl);
            } catch (error) {
                D(e);
                I(e, r("getErrorSafe")(error)).catch((e)=>{
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[profilePicFind] persistProfilePicToDB failed: ",
                        ""
                    ])), r("getErrorSafe")(e).message);
                });
            }
            return a;
        });
        return k.apply(this, arguments);
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                const n = t.status;
                if (n === 500 || n === 501 || n === 503) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "profilePicFind failed with serverCode: ",
                        ""
                    ])), n);
                } else if (n === 404) {
                    yield R(e);
                } else if (n === 401 && !e.isGroup()) {
                    yield R(e);
                }
            }
        });
        return T.apply(this, arguments);
    }
    function D(e, t) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
            o("WAWebUserPrefsMultiDevice").setCachedProfilePicEURL(t ?? "");
        }
    }
    function x(t) {
        return (f || (f = n("Promise"))).all(t.map((()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                try {
                    const n = yield E(t.id, {
                        tcToken: t.tcToken,
                        commonGid: t.commonGid
                    });
                    return {
                        id: t.id,
                        eurl: n.eurl,
                        tag: n.tag,
                        previewEurl: n.previewEurl,
                        previewDirectPath: n.previewDirectPath,
                        fullDirectPath: n.fullDirectPath,
                        filehash: n.filehash,
                        stale: false,
                        eurlStale: false,
                        timestamp: Date.now()
                    };
                } catch (error) {
                    if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                        switch(error.status){
                            case 401:
                            case 404:
                                return {
                                    tag: "",
                                    id: t.id,
                                    stale: false,
                                    eurlStale: false,
                                    timestamp: Date.now()
                                };
                            default:
                                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "ProfilePicThumb:resyncPictures error - ",
                                    ", ",
                                    ""
                                ])), error.status, error.message);
                                return {
                                    id: t.id,
                                    stale: false,
                                    eurlStale: false,
                                    timestamp: Date.now()
                                };
                        }
                    }
                    throw error;
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })()));
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ commonGid, id, newsletterRole, parentGroupId, tcToken }) {
            try {
                if (id.isNewsletter()) {
                    const u = yield o("WAWebFetchNewsletterProfilePic").fetchNewsletterProfilePic(o("WAWebWidFactory").asNewsletterWidOrThrow(id), newsletterRole);
                    R(id, u).catch((e)=>{
                        o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "persistProfilePicToDB failed with error ",
                            ""
                        ])), r("getErrorSafe")(e).message);
                    });
                    return u;
                }
                if (parentGroupId != null) {
                    const c = yield g.load();
                    const d = c.fetchCommunityProfilePic;
                    const m = yield d(id, parentGroupId);
                    R(id, m).catch((e)=>{
                        o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "persistProfilePicToDB failed with error ",
                            ""
                        ])), r("getErrorSafe")(e).message);
                    });
                    return m;
                }
                const h = yield E(id, {
                    tcToken,
                    commonGid
                });
                const y = babelHelpers.extends({}, h, {
                    id,
                    timestamp: Date.now(),
                    eurlStale: false,
                    stale: false
                });
                return y;
            } catch (error) {
                if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                    const C = {
                        id
                    };
                    switch(error.status){
                        case 401:
                        case 404:
                            C.tag = "";
                            C.timestamp = Date.now();
                            C.eurlStale = false;
                            C.stale = false;
                            break;
                        case 423:
                            C.stale = true;
                            break;
                        case 429:
                            C.stale = true;
                            break;
                        default:
                            C.eurlStale = false;
                            break;
                    }
                    return (f || (f = n("Promise"))).resolve(C);
                }
                throw error;
            }
        });
        return P.apply(this, arguments);
    }
    l.requestDeletePicture = y;
    l.sendSetPicture = b;
    l.mapProfilePictureToProfilePicThumbRowType = S;
    l.persistProfilePicToDB = R;
    l.profilePicResync = x;
    l.requestProfilePicFromServer = $;
}, 98);