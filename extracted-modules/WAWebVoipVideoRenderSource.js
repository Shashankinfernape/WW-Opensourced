__d("WAWebVoipVideoRenderSource", [
    "$InternalEnum",
    "WALogger",
    "WAWebVoipSelfPreviewJid",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum").Mirrored([
        "CAMERA",
        "SCREEN_SHARE"
    ]);
    const u = "#ss";
    const c = 128;
    const d = new Map;
    const m = new Set;
    class p {
        constructor(e, t, n, { intentionallyUsePrivateConstructor }){
            if (!intentionallyUsePrivateConstructor) {
                throw r("err")("Use WAWebVoipVideoRenderSource.peer()/self()/fromWire() instead of the constructor.");
            }
            this.wid = e;
            this.stream = t;
            this.key = n;
        }
        static peer(t, n) {
            return _(t, n);
        }
        static self(t) {
            return _(null, t);
        }
        static fromWire(t, n) {
            const e = n ? s.SCREEN_SHARE : s.CAMERA;
            if (t === o("WAWebVoipSelfPreviewJid").selfPreviewJid) {
                return _(null, e);
            }
            const r = g(t);
            if (r == null) {
                return null;
            }
            return _(r, e);
        }
        isSelf() {
            return this.wid == null;
        }
        isScreenShare() {
            return this.stream === s.SCREEN_SHARE;
        }
        withStream(t) {
            return _(this.wid, t);
        }
        toString() {
            return this.key;
        }
        toJSON() {
            return this.key;
        }
    }
    function _(e, t) {
        const n = f(e == null ? o("WAWebVoipSelfPreviewJid").selfPreviewJid : e.toString(), t);
        const r = d.get(n);
        if (r != null) {
            return r;
        }
        const a = new p(e, t, n, {
            intentionallyUsePrivateConstructor: true
        });
        d.set(n, a);
        return a;
    }
    function f(e, t) {
        if (t === s.SCREEN_SHARE) {
            return e + u;
        }
        return e;
    }
    function g(e) {
        if (m.has(e)) {
            return null;
        }
        try {
            return o("WAWebWidFactory").createWid(e);
        } catch (t) {
            h(e);
            return null;
        }
    }
    function h(t) {
        if (m.size >= c) {
            const n = m.keys().next();
            if (!n.done) {
                m.delete(n.value);
            }
        }
        m.add(t);
        const r = t.lastIndexOf("@");
        const a = r < 0 ? "(none)" : t.slice(r + 1);
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: VideoRenderSource: dropping frames for invalid JID, server=",
            " length=",
            ""
        ])), a, t.length).sendLogs("voip-video-render-source-invalid-jid");
    }
    l.selfPreviewJid = o("WAWebVoipSelfPreviewJid").selfPreviewJid;
    l.WAWebVoipVideoRenderStream = s;
    l.WAWebVoipVideoRenderSource = p;
}, 98);