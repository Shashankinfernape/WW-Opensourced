__d("WAWebMusicParsingUtils", [
    "WABase64",
    "WALogger",
    "WALongInt",
    "WAWebAsISOCountryCode",
    "WAWebMusicGatingUtils",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = 2147483647;
    const f = [
        ".fbcdn.net",
        ".whatsapp.net"
    ];
    function g(e) {
        const t = [];
        for (const n of e){
            t.push(n.charCodeAt(0), n.charCodeAt(1));
        }
        return new Uint8Array(t).buffer;
    }
    function h(t) {
        for(var n = Array.from(new Uint8Array(t)).map((e)=>String.fromCharCode(e)), r = new Set, a = new Set, i = 0; i < n.length - 1; i += 2){
            const l = `${n[i]}${n[i + 1]}`.toUpperCase();
            const s = o("WAWebAsISOCountryCode").asISOCountryCode(l);
            if (s != null) {
                r.add(s);
            } else {
                a.add(l);
            }
        }
        if (a.size > 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[music] invalid country codes"
            ]))).sendLogs("music-invalid-country-codes");
        }
        return r;
    }
    function y({ artistAttribution: t, artworkDirectPath: n, artworkEncSha256: r, artworkMediaKey: a, artworkSha256: i, author: l, countryBlocklist: s, isExplicit: u, musicContentMediaId: c, songId: d, title: m }) {
        if (c == null || d == null || l == null || m == null) {
            return null;
        }
        return {
            musicContentMediaId: c,
            songId: d,
            author: l,
            title: m,
            artworkDirectPath: n,
            artworkSha256: i != null ? o("WABase64").encodeB64(i) : void 0,
            artworkEncSha256: r != null ? o("WABase64").encodeB64(r) : void 0,
            artworkMediaKey: a != null ? o("WABase64").encodeB64(a) : void 0,
            isExplicit: !!u,
            artistAttribution: t,
            countryBlocklist: s != null ? h(s) : new Set
        };
    }
    function C({ artworkUri: r, embeddedMusic: a, songUri: i, style: l }) {
        if (a == null) {
            return null;
        }
        const { artistAttribution: c, artworkDirectPath: d, artworkEncSha256: m, artworkMediaKey: p, artworkSha256: _, author: f, countryBlocklist: g, isExplicit: h, musicContentMediaId: y, musicSongStartTimeInMs: C, overlapDurationInMs: b, songId: L, title: E } = a;
        if (y == null || L == null || f == null || E == null) {
            return null;
        }
        if (i == null) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[music] music message has no song uri"
            ])));
        }
        if (r == null) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[music] music message has no artwork uri"
            ])));
        }
        const k = S(C);
        return {
            musicContentMediaId: y,
            songId: L,
            author: f,
            title: E,
            songUri: v(i, "song"),
            artworkUri: v(r, "artwork"),
            style: o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle.cast(l) ?? void 0,
            songStartTimeMs: k ?? void 0,
            clipDurationMs: R(k, b) ?? void 0,
            isExplicit: h,
            countryBlocklist: g,
            artistAttribution: c,
            artworkDirectPath: d,
            artworkSha256: _,
            artworkEncSha256: m,
            artworkMediaKey: p
        };
    }
    function b(e) {
        return e != null && e.style === o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle.VINYL && e.songUri != null && o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled();
    }
    function v(e, t) {
        if (e != null) {
            let n;
            try {
                n = new URL(e);
            } catch (e) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] dropped unparseable ",
                    " uri"
                ])), t).sendLogs("music-uri-not-allowed");
                return;
            }
            const r = n;
            const { hostname: a, protocol: i } = r;
            if (i !== "https:" || !f.some((e)=>a.endsWith(e))) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] dropped ",
                    " uri on ",
                    "//",
                    ""
                ])), t, i, a).sendLogs("music-uri-not-allowed");
                return;
            }
            return e;
        }
    }
    function S(e) {
        if (e == null) {
            return 0;
        }
        const t = o("WALongInt").maybeNumber(e);
        if (t == null || t < 0 || t > _) {
            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[music] song start time out of range: ",
                ""
            ])), String(e));
            return null;
        }
        return t;
    }
    function R(e, t) {
        if (e == null || t == null) {
            return null;
        }
        const n = o("WALongInt").maybeNumber(t);
        if (n == null || n <= 0 || n > _ - e) {
            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[music] clip duration out of range: ",
                ""
            ])), String(t));
            return null;
        }
        return n;
    }
    l.countryCodeSetToBuffer = g;
    l.mapToCountryCode = h;
    l.toMusicMetadata = y;
    l.toMusicData = C;
    l.canRenderMusicMessage = b;
    l.toAllowedUri = v;
}, 98);