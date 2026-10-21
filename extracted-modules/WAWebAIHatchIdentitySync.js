__d("WAWebAIHatchIdentitySync", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebAIHatchIdentityStore",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebMediaInMemoryBlobCache",
    "WAWebProfilePicThumbCollection",
    "WAWebWamEnumDownloadOriginType",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = false;
    const u = r("JSResourceForInteraction")("WAWebHatchDownloadSecureAvatar").__setRef("WAWebAIHatchIdentitySync");
    let c = null;
    let d = null;
    function m() {
        if (!s) {
            s = true;
            o("WAWebAIHatchIdentityStore").subscribeToIdentityChanges(function(e) {
                const t = o("WAWebContactCollection").ContactCollection.get(o("WAWebBotUtils").HATCH_BOT_FBID_WID);
                if (t != null) {
                    _(t, o("WAWebBotUtils").HATCH_BOT_FBID_WID, e);
                }
            });
        }
    }
    function p({ contact, wid }) {
        m();
        const r = o("WAWebAIHatchIdentityStore").getCachedHatchIdentity();
        if (r != null) {
            _(contact, wid, r);
        }
    }
    function _(e, t, n) {
        g(e, n.name);
        f(t, n);
    }
    function f(t, { secureImage }) {
        if (secureImage != null) {
            const l = secureImage.filehash;
            d?.abort();
            const s = new AbortController;
            d = s;
            u.load().then(({ downloadHatchSecureMedia })=>downloadHatchSecureMedia(secureImage, s.signal, o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.PROFILE_PICTURE)).then((e)=>{
                if (e != null && d === s) {
                    C(l);
                    h(t, e);
                }
            }).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch: secure thumb resolve failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("hatch-secure-thumb-resolve-failed");
            }).finally(()=>{
                if (d === s) {
                    d = null;
                }
            });
        }
    }
    function g(e, name) {
        if (name !== "" && name !== e.get("name")) {
            e.set({
                name
            });
        }
    }
    function h(e, t) {
        if (!y(o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(e), t)) {
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(e).set({
                eurl: t,
                previewEurl: t,
                raw: undefined,
                previewDirectPath: null,
                fullDirectPath: null,
                filehash: null,
                tag: "hat",
                stale: false,
                eurlStale: false,
                timestamp: Date.now()
            });
        }
    }
    function y(e, t) {
        return e != null && e.eurl === t && e.previewEurl === t && e.raw == null && e.previewDirectPath == null && e.fullDirectPath == null && e.filehash == null && !e.stale && !e.eurlStale;
    }
    function C(e) {
        if (c !== e) {
            b();
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.increaseUsageCount(e);
            c = e;
        }
    }
    function b() {
        if (c != null) {
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.decreaseUsageCount(c);
            c = null;
        }
    }
    function v() {
        s = false;
        d?.abort();
        d = null;
        c = null;
    }
    l.syncHatchContactIdentity = p;
    l.__resetHatchIdentitySyncForTesting = v;
}, 98);