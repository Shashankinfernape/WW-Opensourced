__d("WAWebLongLinkMutatorComponent.react", [
    "WAWebCmd",
    "WAWebCopyPasteSelectable.react",
    "WAWebLongLinkPop.react",
    "WAWebModalManager",
    "WAWebStatusContext",
    "WAWebSuspiciousLinkMutatorComponent.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useContext = s.useContext;
    const d = {
        link: {
            cursor: "x1ypdohk",
            $$css: true
        }
    };
    function m(t) {
        let n;
        const a = o("react-compiler-runtime").c(18);
        const { children, dataTab, link, selectable, xstyle } = t;
        const _ = children === undefined ? "" : children;
        const f = s_useContext(o("WAWebStatusContext").StatusContext);
        const f_statusItemViewEventRef = f.statusItemViewEventRef;
        if ((n = link.suspiciousCharacters) != null && n.size) {
            let h;
            if (a[0] !== xstyle) {
                h = (e || (e = r("stylex")))(xstyle);
                a[0] = xstyle;
                a[1] = h;
            } else {
                h = a[1];
            }
            let y;
            if (a[2] !== _ || a[3] !== link || a[4] !== selectable || a[5] !== h) {
                const Component = r("WAWebSuspiciousLinkMutatorComponent.react");
                y = <Component className={h} link={link} selectable={selectable}>{_}</Component>;
                a[2] = _;
                a[3] = link;
                a[4] = selectable;
                a[5] = h;
                a[6] = y;
            } else {
                y = a[6];
            }
            return y;
        }
        let C;
        if (a[7] !== link || a[8] !== f_statusItemViewEventRef) {
            C = function(t) {
                t.preventDefault();
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebLongLinkPop.react"), {
                    link,
                    statusItemViewEventRef: f_statusItemViewEventRef
                }));
                o("WAWebCmd").Cmd.openLongLinkModal();
            };
            a[7] = link;
            a[8] = f_statusItemViewEventRef;
            a[9] = C;
        } else {
            C = a[9];
        }
        let b;
        if (a[10] !== xstyle) {
            b = (e || (e = r("stylex")))(d.link, xstyle);
            a[10] = xstyle;
            a[11] = b;
        } else {
            b = a[11];
        }
        let v;
        if (a[12] !== _ || a[13] !== dataTab || a[14] !== selectable || a[15] !== C || a[16] !== b) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableLink;
            v = <Component dataTab={dataTab} onClick={C} selectable={selectable} className={b}>{_}</Component>;
            a[12] = _;
            a[13] = dataTab;
            a[14] = selectable;
            a[15] = C;
            a[16] = b;
            a[17] = v;
        } else {
            v = a[17];
        }
        return v;
    }
    l.default = m;
}, 98);