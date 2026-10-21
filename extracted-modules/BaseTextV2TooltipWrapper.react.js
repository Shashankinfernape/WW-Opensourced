__d("BaseTextV2TooltipWrapper.react", [
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useRef, useState } = u;
    const m = r("JSResourceForInteraction")("BaseTooltip.react").__setRef("BaseTextV2TooltipWrapper.react");
    const P1 = r("lazyLoadComponent")(m);
    function _(e) {
        const t = o("react-compiler-runtime").c(12);
        const { children, truncationTooltip } = e;
        const iRef = useRef(null);
        const l = useState(false);
        const u = l[0];
        const _ = l[1];
        const f = useState();
        const tooltipImpl = f[0];
        const h = f[1];
        let y;
        if (t[0] !== u || t[1] !== truncationTooltip) {
            y = function() {
                const iRef_current = iRef.current;
                if (!(iRef_current == null || truncationTooltip.tooltipImpl == null)) {
                    const t = iRef_current.offsetWidth < iRef_current.scrollWidth || iRef_current.offsetHeight < iRef_current.scrollHeight;
                    if (t !== u) {
                        _(t);
                    }
                    if (t) {
                        m.preload();
                        r("promiseDone")(truncationTooltip.tooltipImpl.load(), function(e) {
                            h(function(t) {
                                return e;
                            });
                        });
                    }
                }
            };
            t[0] = u;
            t[1] = truncationTooltip;
            t[2] = y;
        } else {
            y = t[2];
        }
        const C = y;
        let b;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            b = function(t) {
                const n = t?.children[0]?.children[0];
                if (n != null) {
                    iRef.current = {
                        offsetHeight: n.offsetHeight,
                        offsetWidth: n.offsetWidth,
                        scrollHeight: n.scrollHeight,
                        scrollWidth: n.scrollWidth
                    };
                }
            };
            t[3] = b;
        } else {
            b = t[3];
        }
        const v = b;
        let S;
        if (t[4] !== children || t[5] !== u || t[6] !== tooltipImpl || t[7] !== truncationTooltip) {
            S = u && tooltipImpl != null ? <P1 {...babelHelpers.extends({
                tooltipImpl
            }, truncationTooltip.tooltipProps, {
                children
            })}/> : children;
            t[4] = children;
            t[5] = u;
            t[6] = tooltipImpl;
            t[7] = truncationTooltip;
            t[8] = S;
        } else {
            S = t[8];
        }
        let R;
        if (t[9] !== C || t[10] !== S) {
            const Component = o("react-strict-dom").html.span;
            R = <Component onMouseEnter={C} ref={v}>{S}</Component>;
            t[9] = C;
            t[10] = S;
            t[11] = R;
        } else {
            R = t[11];
        }
        return R;
    }
    l.default = _;
}, 98);