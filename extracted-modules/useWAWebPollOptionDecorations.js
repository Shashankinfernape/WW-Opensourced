__d("useWAWebPollOptionDecorations", [
    "react-compiler-runtime",
    "useWAWebPollAddOptionContributors",
    "useWAWebPollAssociatedMessagesMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        const a = o("react-compiler-runtime").c(6);
        let i;
        if (a[0] !== t) {
            i = Array.from(t.keys());
            a[0] = t;
            a[1] = i;
        } else {
            i = a[1];
        }
        const l = i;
        const optionsMsgsMap = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(l, n);
        const addOptionMsgs = r("useWAWebPollAddOptionContributors")(e, l);
        let c;
        if (a[2] !== addOptionMsgs || a[3] !== l || a[4] !== optionsMsgsMap) {
            c = {
                addOptionMsgs,
                options: l,
                optionsMsgsMap
            };
            a[2] = addOptionMsgs;
            a[3] = l;
            a[4] = optionsMsgsMap;
            a[5] = c;
        } else {
            c = a[5];
        }
        return c;
    }
    l.default = e;
}, 98);