__d("useWAWebNewsletterPrivacyBanner", [
    "WAWebChatGetters",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterPrivacyMsgBar.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useState } = u;
    function m(e) {
        const e_newsletterMetadata = e.newsletterMetadata;
        return o("WAWebChatGetters").getIsNewsletter(e) && e_newsletterMetadata != null && o("WAWebNewsletterMetadataGetters").getIsPreview(e_newsletterMetadata) && !e.isSuspendedOrTerminated();
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(8);
        let n;
        if (t[0] !== e) {
            n = m(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = useState(n);
        const i = a[0];
        const l = a[1];
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                "change:membershipType"
            ];
            t[2] = u;
        } else {
            u = t[2];
        }
        let c;
        if (t[3] !== e) {
            c = function() {
                return l(m(e));
            };
            t[3] = e;
            t[4] = c;
        } else {
            c = t[4];
        }
        o("useWAWebListener").useListener(e.newsletterMetadata, u, c);
        let p;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = function() {
                l(false);
            };
            t[5] = p;
        } else {
            p = t[5];
        }
        const _ = p;
        let f;
        if (t[6] !== i) {
            const Component = r("WAWebNewsletterPrivacyMsgBar.react");
            f = i ? <Component onDismiss={_}/> : null;
            t[6] = i;
            t[7] = f;
        } else {
            f = t[7];
        }
        return f;
    }
    l.default = p;
}, 98);