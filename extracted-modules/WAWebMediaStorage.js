__d("WAWebMediaStorage", [
    "WALogger",
    "WAWebMediaDataUtils",
    "WAWebMediaObject",
    "WAWebMediaStore",
    "WAWebMmsMediaTypes",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = {};
    function c(e, t) {
        e.addMsg(t);
    }
    function d(e, t) {
        t.mediaObject = null;
        e.removeMsg(t);
        if (!e.hasAssociatedMsgsOrStickers()) {
            g(e.filehash, o("WAWebMediaDataUtils").shouldUseLruMediaStore(o("WAWebMmsMediaTypes").getMsgMediaType(t)));
            e.delete();
        }
    }
    function m() {
        const e = u;
        u = {};
        for(const t in e){
            e[t].delete();
        }
    }
    function p(t) {
        if (Object.hasOwn(u, t)) {
            const n = u[t];
            const r = n.msgs.some((e)=>e[0]?.from.isBot());
            if (!r) {
                return n;
            }
            const a = n.msgs.length;
            const i = n.mediaBlob != null;
            const l = n.downloadStage;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] getOrCreateMediaObject bot hash=",
                " cnt=",
                " blob=",
                " dl=",
                ""
            ])), t, a, i, l);
        }
        return u[t] = new (o("WAWebMediaObject")).MediaObject;
    }
    function _(e, t) {
        e.addSticker(t);
    }
    function f(e, t) {
        t.mediaObject = null;
        e.removeSticker(t);
        if (!e.hasAssociatedMsgsOrStickers()) {
            g(e.filehash);
            e.delete();
        }
    }
    function g(filehash, t = true) {
        if (!r("isStringNullOrEmpty")(filehash)) {
            delete u[filehash];
            if (t) {
                o("WAWebMediaStore").LruMediaStore.del(filehash).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[Media Storage] del ArrayBuffer failed"
                    ])));
                });
            }
        }
    }
    l.associateMediaWithMsg = c;
    l.disassociateMediaFromMsg = d;
    l.delistAndDeleteAllMedia = m;
    l.getOrCreateMediaObject = p;
    l.associateMediaWithSticker = _;
    l.disassociateMediaFromSticker = f;
}, 98);