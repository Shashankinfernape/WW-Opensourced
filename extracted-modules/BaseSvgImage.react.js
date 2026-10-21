__d("BaseSvgImage.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "onError",
        "src",
        "testid"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef } = c;
    function PComponent(t) {
        const n = o("react-compiler-runtime").c(12);
        let r;
        let a;
        let xlinkHref;
        let l;
        if (n[0] !== t) {
            a = t.onError;
            xlinkHref = t.src;
            l = t.testid;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = xlinkHref;
            n[4] = l;
        } else {
            r = n[1];
            a = n[2];
            xlinkHref = n[3];
            l = n[4];
        }
        const sRef = useRef(null);
        const cRef = useRef(xlinkHref);
        let p;
        let _;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = function() {
                if (sRef.current && sRef.current.getAttribute("xlink:href") !== cRef.current) {
                    sRef.current?.setAttribute("xlink:href", cRef.current);
                }
            };
            _ = [];
            n[5] = p;
            n[6] = _;
        } else {
            p = n[5];
            _ = n[6];
        }
        useEffect(p, _);
        let f;
        if (n[7] !== r || n[8] !== a || n[9] !== xlinkHref || n[10] !== l) {
            f = <image {...babelHelpers.extends({}, r, {
                "data-testid": undefined,
                height: "100%",
                onError: a,
                preserveAspectRatio: "xMidYMid slice",
                ref: sRef,
                width: "100%",
                xlinkHref
            })}/>;
            n[7] = r;
            n[8] = a;
            n[9] = xlinkHref;
            n[10] = l;
            n[11] = f;
        } else {
            f = n[11];
        }
        return f;
    }
    l.default = PComponent;
}, 98);