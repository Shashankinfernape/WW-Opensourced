__d("WAWebViewRepliesMenuItem.react", [
    "fbt",
    "WAWebIsInThreadsViewContext",
    "WAWebModalManager",
    "WAWebViewRepliesContextMenuUtils",
    "WAWebViewRepliesThreadsModal.react",
    "WDSIconIcReply.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useContext, useMemo } = c;
    function _(e, t) {
        const n = o("react-compiler-runtime").c(12);
        const a = useContext(r("WAWebIsInThreadsViewContext"));
        let i;
        if (n[0] !== t || n[1] !== a || n[2] !== e) {
            i = a ? null : o("WAWebViewRepliesContextMenuUtils").getViewRepliesThreadIdForContextMenu(e, t);
            n[0] = t;
            n[1] = a;
            n[2] = e;
            n[3] = i;
        } else {
            i = n[3];
        }
        const l = i;
        let c;
        if (n[4] !== t || n[5] !== e.id.id || n[6] !== l) {
            c = function() {
                if (l != null) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebViewRepliesThreadsModal.react"), {
                        chat: t,
                        threadId: l,
                        focusMsgId: e.id.id
                    }));
                }
            };
            n[4] = t;
            n[5] = e.id.id;
            n[6] = l;
            n[7] = c;
        } else {
            c = n[7];
        }
        const d = c;
        let p;
        e: {
            if (l == null) {
                let _;
                if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
                    _ = [];
                    n[8] = _;
                } else {
                    _ = n[8];
                }
                p = _;
                break e;
            }
            let f;
            if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
                f = s._("View replies");
                n[9] = f;
            } else {
                f = n[9];
            }
            const g = f;
            let h;
            if (n[10] !== d) {
                const Component = r("WDSMenuItem.react");
                h = [
                    <Component key="view-replies" Icon={r("WDSIconIcReply.react")} title={g} onPress={d} testid="mi-msg-view-replies"/>
                ];
                n[10] = d;
                n[11] = h;
            } else {
                h = n[11];
            }
            p = h;
        }
        return p;
    }
    l.useViewRepliesMenuItems = _;
}, 226);