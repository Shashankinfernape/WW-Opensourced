__d("useWAWebChatListChannelsListener", [
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebIsChannelsInChatListEnabled",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e, t) {
        const n = o("react-compiler-runtime").c(4);
        const a = r("useWAWebIsChannelsInChatListEnabled")();
        o("useWAWebListener").useListener(a ? r("WAWebNewsletterCollection") : null, e, t);
        o("useWAWebListener").useListener(a ? r("WAWebNewsletterMetadataCollection") : null, "change:membershipType", t);
        const iRef = useRef(a);
        const l = r("useWAWebStableCallback")(t);
        let s;
        let d;
        if (n[0] !== a || n[1] !== l) {
            s = function() {
                if (iRef.current !== a) {
                    iRef.current = a;
                    l();
                }
            };
            d = [
                a,
                l
            ];
            n[0] = a;
            n[1] = l;
            n[2] = s;
            n[3] = d;
        } else {
            s = n[2];
            d = n[3];
        }
        useEffect(s, d);
    }
    l.default = d;
}, 98);