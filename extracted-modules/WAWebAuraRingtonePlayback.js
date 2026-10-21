__d("WAWebAuraRingtonePlayback", [
    "WALogger",
    "WAWebAuraRingtoneDownloader",
    "WAWebAuraRingtonePrefs",
    "bx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = r("bx").getURL(r("bx")("78755"));
    function p(t) {
        if (t != null) {
            const n = o("WAWebAuraRingtonePrefs").getChatRingtoneId(t);
            if (n != null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] Resolved ringtone ID: ",
                    " (per-chat)"
                ])), n);
                return n;
            }
        }
        const r = o("WAWebAuraRingtonePrefs").getSelectedRingtoneId();
        if (r === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID) {
            return null;
        }
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[aura_ringtones] Resolved ringtone ID: ",
            " (global)"
        ])), r);
        return r;
    }
    function _(e) {
        const t = p(e);
        if (t == null) {
            return m;
        }
        if (t === o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Using silent ringtone"
            ])));
            return null;
        }
        const n = o("WAWebAuraRingtoneDownloader").getRingtoneBlobUrl(t);
        if (n != null) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Using premium ringtone URL: ",
                ""
            ])), t);
            return n;
        }
        if (e != null && o("WAWebAuraRingtonePrefs").getChatRingtoneId(e) != null) {
            const r = o("WAWebAuraRingtonePrefs").getSelectedRingtoneId();
            if (r !== o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID && r !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID) {
                const a = o("WAWebAuraRingtoneDownloader").getRingtoneBlobUrl(r);
                if (a != null) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[aura_ringtones] chat tone uncached, fallback: ",
                        ""
                    ])), r);
                    return a;
                }
            }
        }
        return m;
    }
    l.getRingtoneId = p;
    l.getRingtoneURL = _;
}, 98);