__d("useWAWebCagEventsAwarenessBanner.react", [
    "WATimeUtils",
    "WAWebChatGroupUtils",
    "WAWebNux",
    "WAWebUserPrefsEvents",
    "react-compiler-runtime",
    "useWAWebIAmCommunityAdmin",
    "useWAWebNux"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(10);
        const n = r("useWAWebNux")(o("WAWebNux").NUX.CAG_EVENTS_AWARENESS_BANNER);
        const a = n[0];
        const i = n[2];
        let l;
        if (t[0] !== e.groupMetadata) {
            l = e.groupMetadata?.getParentGroupChat()?.groupMetadata;
            t[0] = e.groupMetadata;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = r("useWAWebIAmCommunityAdmin")(l);
        let c;
        if (t[2] !== e || t[3] !== u || t[4] !== a) {
            c = a && u && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e);
            t[2] = e;
            t[3] = u;
            t[4] = a;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d = c;
        if (d) {
            if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                const m = o("WAWebUserPrefsEvents").getCagEventsAwarenessBannerFirstSeenTimestamp();
                if (m != null) {
                    d = o("WATimeUtils").happenedWithin(m, o("WATimeUtils").WEEK_SECONDS);
                }
                t[6] = d;
            } else {
                d = t[6];
            }
        }
        let p;
        if (t[7] !== i || t[8] !== d) {
            p = [
                d,
                i
            ];
            t[7] = i;
            t[8] = d;
            t[9] = p;
        } else {
            p = t[9];
        }
        return p;
    }
    l.default = e;
}, 98);