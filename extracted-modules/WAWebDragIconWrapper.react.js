__d("WAWebDragIconWrapper.react", [
    "WDSIconIcDragHandle.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        dragIconRefreshed: {
            marginInlineEnd: "x14z9mp",
            color: "xhslqc4",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_onDragThumbMouseDown = e.onDragThumbMouseDown;
        const u_dragIconRefreshed = u.dragIconRefreshed;
        let i;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x1jm3nie"
            };
            l = s.jsx(r("WDSIconIcDragHandle.react"), {
                height: 24,
                width: 24,
                iconXstyle: u_dragIconRefreshed
            });
            t[0] = i;
            t[1] = l;
        } else {
            i = t[0];
            l = t[1];
        }
        let c;
        if (t[2] !== e_onDragThumbMouseDown) {
            c = <div {...babelHelpers.extends({
                onMouseDown: e_onDragThumbMouseDown
            }, i, {
                children: l
            })}/>;
            t[2] = e_onDragThumbMouseDown;
            t[3] = c;
        } else {
            c = t[3];
        }
        return c;
    }
    l.default = c;
}, 98);