__d("WAWebUimUieTooltip.react", [
    "WAWebCmd",
    "react",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useImperativeHandle, useRef } = c;
    function useComponent(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const a_tooltip = a.tooltip;
        const lRef = useRef(null);
        const uim = r("useWAWebUIM")();
        useEffect(function() {
            if (uim != null) {
                o("WAWebCmd").Cmd.openTooltip({
                    menuOptions: a_tooltip,
                    uim
                }, function(e) {
                    lRef.current = e;
                });
                return function() {
                    o("WAWebCmd").Cmd.closeTooltip(uim);
                };
            }
        }, []);
        const u = function() {
            return lRef.current;
        };
        useImperativeHandle(t_ref, function() {
            return {
                getElement: u
            };
        });
        return null;
    }
    useComponent.displayName = `${useComponent.name} [from ${i.id}]`;
    l.default = useComponent;
}, 98);