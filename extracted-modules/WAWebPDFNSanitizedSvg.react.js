__d("WAWebPDFNSanitizedSvg.react", [
    "WAWebDomSanitize",
    "WAWebImg.react",
    "WAWebPDFNUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(12);
        const { ariaLabel, classNames, iconSvg } = e;
        const l = o("WAWebPDFNUtils").usePDFNThemedIcon(iconSvg);
        if (l == null) {
            return null;
        }
        if (l.startsWith("data:image/png")) {
            const u = ariaLabel ?? "";
            let c;
            if (t[0] !== classNames || t[1] !== l || t[2] !== u) {
                const Component = r("WAWebImg.react");
                c = <Component src={l} alt={u} className={classNames}/>;
                t[0] = classNames;
                t[1] = l;
                t[2] = u;
                t[3] = c;
            } else {
                c = t[3];
            }
            return c;
        }
        let d;
        if (t[4] !== l) {
            d = o("WAWebDomSanitize").sanitizeNoticeSVG(l);
            t[4] = l;
            t[5] = d;
        } else {
            d = t[5];
        }
        const m = d;
        if (m == null) {
            return null;
        }
        let p;
        if (t[6] !== m) {
            p = {
                __html: m
            };
            t[6] = m;
            t[7] = p;
        } else {
            p = t[7];
        }
        const _ = ariaLabel ?? "";
        let f;
        if (t[8] !== classNames || t[9] !== p || t[10] !== _) {
            f = <span className={classNames} dangerouslySetInnerHTML={p} aria-label={_}/>;
            t[8] = classNames;
            t[9] = p;
            t[10] = _;
            t[11] = f;
        } else {
            f = t[11];
        }
        return f;
    }
    l.default = u;
}, 98);