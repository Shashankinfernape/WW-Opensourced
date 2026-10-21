__d("WAWebStickersParseStickerAudio", [
    "WABase64Sanitize",
    "WALogger",
    "WALongInt",
    "WAWebE2EProtoParserApi",
    "WAWebSoundStickerGating",
    "WAWebSoundStickerUtils",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 32;
    function u({ audioMessage: t, baseMessage: n, msgContext: a }) {
        if (t == null || a === "quoted" || a === "history_quoted" || !o("WAWebSoundStickerGating").isSoundStickerConsumptionEnabled()) {
            return null;
        }
        const { directPath: i, fileEncSha256: l, fileSha256: s, mediaKey: u, mimetype: m } = t;
        const _ = o("WAWebE2EProtoParserApi").decodeUrl(t.url);
        const g = c(t);
        if (g == null) {
            p();
            return null;
        }
        const { mediaKeyTimestamp: h, size: y } = g;
        const C = f(u);
        if (d({
            audioMessage: t,
            baseMessage: n,
            msgContext: a,
            size: y,
            url: _
        })) {
            p();
            return null;
        }
        return {
            directPath: f(i) ? i : null,
            deprecatedMms3Url: _,
            mediaKey: C ? r("WABase64Sanitize")(o("WAWebE2EProtoParserApi").decodeBytes(u)) : null,
            mediaKeyTimestamp: h,
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(s),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(l),
            size: y,
            mimetype: m,
            duration: t.seconds
        };
    }
    function c(e) {
        try {
            return {
                mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(e.mediaKeyTimestamp),
                size: o("WALongInt").maybeNumberOrThrowIfTooLarge(e.fileLength) ?? 0
            };
        } catch (e) {
            return null;
        }
    }
    function d({ audioMessage: t, baseMessage: n, msgContext: r, size: o, url: a }) {
        const { directPath: i, fileEncSha256: l, fileSha256: s, mediaKey: u, mimetype: c } = t;
        const d = f(u);
        const p = f(i) || f(a);
        return !d && !p || g(u) || g(s) || g(l) || _(n, r) && m({
            hasLocation: p,
            hasMediaKey: d,
            mimetype: c,
            size: o
        });
    }
    function m({ hasLocation: t, hasMediaKey: n, mimetype: r, size: a }) {
        return !n || !t || a <= 0 || !o("WAWebSoundStickerUtils").isSoundStickerAudioMimetype(r);
    }
    function p() {
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[sound-sticker] dropping unusable audio descriptor"
        ]))).sendLogs("sound-sticker-audio-descriptor-dropped", {
            sampling: 0.01
        });
    }
    function _(e, t) {
        const n = e.from instanceof r("WAWebWid") && e.from.isNewsletter();
        return t !== "history" && !n;
    }
    function f(e) {
        if (e == null) {
            return false;
        }
        if (typeof e === "string") {
            return e.length > 0;
        }
        return e.byteLength > 0;
    }
    function g(e) {
        return f(e) && e?.byteLength !== s;
    }
    l.default = u;
}, 98);