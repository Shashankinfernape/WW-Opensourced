__d("WAWebPDFNContentElement.react", [
    "WAWebDomSanitize",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(10);
        const { as, content, xstyle } = t;
        const S = as;
        let c;
        if (n[0] !== content) {
            c = o("WAWebDomSanitize").sanitizeNoticeText(content);
            n[0] = content;
            n[1] = c;
        } else {
            c = n[1];
        }
        const d = c;
        let m;
        if (n[2] !== xstyle) {
            m = (e || (e = r("stylex"))).props(xstyle);
            n[2] = xstyle;
            n[3] = m;
        } else {
            m = n[3];
        }
        let p;
        if (n[4] !== d) {
            p = {
                __html: d
            };
            n[4] = d;
            n[5] = p;
        } else {
            p = n[5];
        }
        let _;
        if (n[6] !== S || n[7] !== m || n[8] !== p) {
            _ = <S {...babelHelpers.extends({}, m, {
                dangerouslySetInnerHTML: p
            })}/>;
            n[6] = S;
            n[7] = m;
            n[8] = p;
            n[9] = _;
        } else {
            _ = n[9];
        }
        return _;
    }
    l.default = c;
}, 98);