__d("WAWebSuspiciousLinkMutatorComponent.react", [
    "WAWebCmd",
    "WAWebCopyPasteSelectable.react",
    "WAWebModalManager",
    "WAWebSuspiciousLinkPopup.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(13);
        const { children, className, dataTab, link, onClick, selectable } = e;
        const d = children === undefined ? "" : children;
        let m;
        if (t[0] !== link || t[1] !== onClick) {
            m = function() {
                o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSuspiciousLinkPopup.react"), {
                    link
                }));
                o("WAWebCmd").Cmd.openLongLinkModal();
                onClick?.(link.href);
            };
            t[0] = link;
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
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                cursor: "pointer"
            };
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] !== d || t[7] !== className || t[8] !== dataTab || t[9] !== selectable || t[10] !== m || t[11] !== p) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableLink;
            f = <Component className={className} onClick={m} onContextMenu={p} selectable={selectable} style={_} dataTab={dataTab}>{d}</Component>;
            t[6] = d;
            t[7] = className;
            t[8] = dataTab;
            t[9] = selectable;
            t[10] = m;
            t[11] = p;
            t[12] = f;
        } else {
            f = t[12];
        }
        return f;
    }
    l.default = u;
}, 98);