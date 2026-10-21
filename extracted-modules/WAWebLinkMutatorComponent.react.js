__d("WAWebLinkMutatorComponent.react", [
    "WAWebCopyPasteSelectable.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        link: {
            textDecoration: "x1bvjpef x1lku1pv x11iimpl xbvygy2 x1wp9yj1 x1e2wovf",
            color: "x1ph7ams x17f7hit",
            backgroundColor: "x9dqhi0 xn69kzl",
            textUnderlineOffset: "xrys4gj xhmieyt",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(15);
        const { children, dataTab, href, onClick, selectable, xstyle } = e;
        const d = children === undefined ? "" : children;
        let m;
        if (t[0] !== href || t[1] !== onClick) {
            m = function(t) {
                onClick?.(href);
            };
            t[0] = href;
            t[1] = onClick;
            t[2] = m;
        } else {
            m = t[2];
        }
        let p;
        if (t[3] !== onClick) {
            p = function(t) {
                onClick?.();
            };
            t[3] = onClick;
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] !== xstyle) {
            _ = [
                u.link,
                xstyle
            ];
            t[5] = xstyle;
            t[6] = _;
        } else {
            _ = t[6];
        }
        let f;
        if (t[7] !== d || t[8] !== dataTab || t[9] !== href || t[10] !== selectable || t[11] !== m || t[12] !== p || t[13] !== _) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableLink;
            f = <Component onClick={m} onContextMenu={p} xstyle={_} href={href} title={href} target="_blank" rel="noopener noreferrer" selectable={selectable} dataTab={dataTab}>{d}</Component>;
            t[7] = d;
            t[8] = dataTab;
            t[9] = href;
            t[10] = selectable;
            t[11] = m;
            t[12] = p;
            t[13] = _;
            t[14] = f;
        } else {
            f = t[14];
        }
        return f;
    }
    l.default = c;
}, 98);