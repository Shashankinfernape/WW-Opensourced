__d("useWAWebHdImageChildMsg", [
    "WAWebDualUploadsPreferredMsg",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebAssociatedMessages",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(e) {
        const n = o("react-compiler-runtime").c(3);
        const r = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(e);
        const a = o("useWAWebMsgValues").useOptionalMsgValues(e, [
            o("WAWebMsgGetters").getType
        ]) ?? [
            null
        ];
        const i = a[0];
        let l;
        if (n[0] !== r || n[1] !== i) {
            l = i == null ? null : o("WAWebDualUploadsPreferredMsg").findHdChildMsg(r, i);
            n[0] = r;
            n[1] = i;
            n[2] = l;
        } else {
            l = n[2];
        }
        return l;
    }
    l.useHdImageChildMsg = u;
}, 98);