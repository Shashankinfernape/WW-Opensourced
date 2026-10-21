__d("useCometPressableContextMenu", [
    "CometContainerPressableContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useEffect, useRef } = s;
    function m(e) {
        const t = o("react-compiler-runtime").c(16);
        const { isContainerTarget, linkProps, localRef, onContextMenu, preventContextMenu } = e;
        const m = isContainerTarget === undefined ? false : isContainerTarget;
        const p = useContext(r("CometContainerPressableContext"));
        const _RefRef = useRef(null);
        let f;
        if (t[0] !== p || t[1] !== m || t[2] !== linkProps?.target || t[3] !== linkProps?.url || t[4] !== localRef || t[5] !== onContextMenu || t[6] !== preventContextMenu) {
            f = function() {
                if (m && p) {
                    p.onMount({
                        onContextMenu: function(t) {
                            if (preventContextMenu === true) {
                                t.preventDefault();
                            }
                            if (onContextMenu != null) {
                                onContextMenu(t);
                            }
                        },
                        onPress: function(t) {
                            const localRef_current = localRef.current;
                            if (localRef_current) {
                                localRef_current.click();
                            }
                        },
                        target: linkProps?.target,
                        url: linkProps?.url
                    }, _RefRef);
                }
            };
            t[0] = p;
            t[1] = m;
            t[2] = linkProps?.target;
            t[3] = linkProps?.url;
            t[4] = localRef;
            t[5] = onContextMenu;
            t[6] = preventContextMenu;
            t[7] = f;
        } else {
            f = t[7];
        }
        const g = linkProps?.url;
        const h = linkProps?.target;
        let y;
        if (t[8] !== p || t[9] !== m || t[10] !== localRef || t[11] !== onContextMenu || t[12] !== preventContextMenu || t[13] !== g || t[14] !== h) {
            y = [
                p,
                m,
                onContextMenu,
                preventContextMenu,
                g,
                h,
                localRef
            ];
            t[8] = p;
            t[9] = m;
            t[10] = localRef;
            t[11] = onContextMenu;
            t[12] = preventContextMenu;
            t[13] = g;
            t[14] = h;
            t[15] = y;
        } else {
            y = t[15];
        }
        useEffect(f, y);
    }
    l.default = m;
}, 98);