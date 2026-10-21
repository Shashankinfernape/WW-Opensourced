__d("WAWebQRCode.react", [
    "WAWeb-qrcode",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useRef } = c;
    function p(t) {
        const { ariaLabel, colorDark, correctLevel, data, onChange, size } = t;
        const cRef = useRef(null);
        const pRef = useRef(null);
        useEffect(function() {
            const pRef_current = pRef.current;
            if (data == null) {
                if (pRef_current != null) {
                    pRef_current.clear();
                }
            } else if (pRef_current) {
                pRef_current.updateAriaLabel(ariaLabel);
                pRef_current.makeCode(data);
            } else if (cRef.current) {
                pRef.current = new (r("WAWeb-qrcode"))(cRef.current, babelHelpers.extends({
                    ariaLabel,
                    correctLevel: r("WAWeb-qrcode").CorrectLevel[correctLevel ?? "L"],
                    height: size,
                    text: data,
                    width: size
                }, colorDark != null && {
                    colorDark
                }));
            }
            onChange?.(cRef.current);
        }, [
            data,
            size,
            onChange,
            ariaLabel,
            colorDark,
            correctLevel
        ]);
        if (t.children) {
            return t.children(cRef);
        }
        return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(t.xstyle), {
            ref: cRef
        })}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 98);