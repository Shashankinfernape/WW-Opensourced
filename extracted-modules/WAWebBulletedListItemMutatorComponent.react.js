__d("WAWebBulletedListItemMutatorComponent.react", [
    "fbt",
    "WABidi",
    "WAWebCopyPasteSelectable.react",
    "WAWebFormatComponentUtils",
    "WAWebL10N",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(text) {
        if (!(text == null || text === "")) {
            return o("WABidi").bidiDir(text);
        }
    }
    function d(text) {
        const t = c(text) === "rtl";
        return t !== r("WAWebL10N").isRTL();
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(15);
        const { children, inline, selectable, symbol, text } = e;
        const c = children === undefined ? "" : children;
        const m = inline === undefined ? false : inline;
        if (m) {
            let p;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                p = s._("•");
                t[0] = p;
            } else {
                p = t[0];
            }
            let _;
            if (t[1] !== c || t[2] !== selectable) {
                const Component = o("WAWebCopyPasteSelectable.react").SelectableSpan;
                _ = <Component selectable={selectable}>{p}{c}</Component>;
                t[1] = c;
                t[2] = selectable;
                t[3] = _;
            } else {
                _ = t[3];
            }
            return _;
        }
        const f = `${symbol} `;
        let g;
        if (t[4] !== text) {
            g = ({
                0: {
                    className: "x3ct3a4 x1g0dm76 x1jieuv1 xo7wnuk x1gznph8 x1rkpvhg xlu7um4 xm78dhd x1r4uxqn"
                },
                1: {
                    className: "x3ct3a4 x1jieuv1 xo7wnuk xlu7um4 xm78dhd x1r4uxqn xp4054r x1c1uobl xpdmqnj xh6kr0w xl717p"
                }
            })[!!d(text) << 0];
            t[4] = text;
            t[5] = g;
        } else {
            g = t[5];
        }
        let h;
        if (t[6] !== c) {
            h = o("WAWebFormatComponentUtils").removeFirstLeadingSpace(c);
            t[6] = c;
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] !== f || t[9] !== selectable || t[10] !== h) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableSpan;
            y = <Component selectable={selectable} prePlainText={f}>{h}</Component>;
            t[8] = f;
            t[9] = selectable;
            t[10] = h;
            t[11] = y;
        } else {
            y = t[11];
        }
        let C;
        if (t[12] !== g || t[13] !== y) {
            C = <li {...babelHelpers.extends({
                dir: "auto"
            }, g, {
                children: y
            })}/>;
            t[12] = g;
            t[13] = y;
            t[14] = C;
        } else {
            C = t[14];
        }
        return C;
    }
    l.default = m;
}, 226);