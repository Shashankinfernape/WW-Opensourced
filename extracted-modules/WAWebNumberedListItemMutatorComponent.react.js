__d("WAWebNumberedListItemMutatorComponent.react", [
    "WABidi",
    "WAWebCopyPasteSelectable.react",
    "WAWebFormatComponentUtils",
    "WAWebL10N",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(text) {
        if (!(text == null || text === "")) {
            return o("WABidi").bidiDir(text);
        }
    }
    function c(text) {
        const t = u(text) === "rtl";
        return t !== r("WAWebL10N").isRTL();
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(18);
        const { children, inline, numbering, selectable, text } = e;
        const u = children === undefined ? "" : children;
        const d = inline === undefined ? false : inline;
        if (d) {
            let m;
            if (t[0] !== u || t[1] !== numbering || t[2] !== selectable) {
                const Component = o("WAWebCopyPasteSelectable.react").SelectableSpan;
                m = <Component selectable={selectable}>{numbering}{u}</Component>;
                t[0] = u;
                t[1] = numbering;
                t[2] = selectable;
                t[3] = m;
            } else {
                m = t[3];
            }
            return m;
        }
        const p = `${numbering} `;
        let _;
        if (t[4] !== numbering) {
            _ = numbering.replace(".", "");
            t[4] = numbering;
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] !== text) {
            f = ({
                0: {
                    className: "x4tra6z"
                },
                1: {
                    className: "xp4054r x1cy9i3i x4tra6z"
                }
            })[!!c(text) << 0];
            t[6] = text;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== u) {
            g = o("WAWebFormatComponentUtils").removeFirstLeadingSpace(u);
            t[8] = u;
            t[9] = g;
        } else {
            g = t[9];
        }
        let h;
        if (t[10] !== p || t[11] !== selectable || t[12] !== g) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableSpan;
            h = <Component selectable={selectable} prePlainText={p}>{g}</Component>;
            t[10] = p;
            t[11] = selectable;
            t[12] = g;
            t[13] = h;
        } else {
            h = t[13];
        }
        let y;
        if (t[14] !== _ || t[15] !== f || t[16] !== h) {
            y = <li {...babelHelpers.extends({
                dir: "auto",
                value: _
            }, f, {
                children: h
            })}/>;
            t[14] = _;
            t[15] = f;
            t[16] = h;
            t[17] = y;
        } else {
            y = t[17];
        }
        return y;
    }
    l.default = d;
}, 98);