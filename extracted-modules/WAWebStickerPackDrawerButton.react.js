__d("WAWebStickerPackDrawerButton.react", [
    "fbt",
    "WDSButton.react",
    "WDSIconIcFastForward.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_handleClick = e.handleClick;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Share this pack");
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e_handleClick) {
            const Component = r("WDSButton.react");
            i = <Component variant="tonal" Icon={r("WDSIconIcFastForward.react")} label={a} onPress={e_handleClick}/>;
            t[1] = e_handleClick;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    l.default = c;
}, 226);