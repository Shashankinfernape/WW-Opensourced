__d("ReactContextMenuEvent.react", [
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function useU(e, t) {
        const n = o("react-compiler-runtime").c(7);
        const { disabled, onContextMenu, preventDefault } = t;
        const u = r("ReactUseEvent.react")("contextmenu");
        let c;
        let d;
        if (n[0] !== u || n[1] !== disabled || n[2] !== onContextMenu || n[3] !== preventDefault || n[4] !== e) {
            c = function() {
                const e_current = e.current;
                if (e_current !== null) {
                    u.setListener(e_current, function(e) {
                        if (disabled !== true) {
                            if (!o("ReactEventHookPropagation").hasEventHookPropagationStopped(e, "useContextMenu")) {
                                o("ReactEventHookPropagation").stopEventHookPropagation(e, "useContextMenu");
                                if (preventDefault !== false && !e.nativeEvent.defaultPrevented) {
                                    e.preventDefault();
                                }
                                if (onContextMenu) {
                                    onContextMenu(e);
                                }
                            }
                        }
                    });
                }
            };
            d = [
                disabled,
                e,
                u,
                preventDefault,
                onContextMenu
            ];
            n[0] = u;
            n[1] = disabled;
            n[2] = onContextMenu;
            n[3] = preventDefault;
            n[4] = e;
            n[5] = c;
            n[6] = d;
        } else {
            c = n[5];
            d = n[6];
        }
        useEffect(c, d);
    }
    l.useContextMenu = useU;
}, 98);