__d("WAWebUimUieMenu.react", [
    "WAWebCmd",
    "nullthrows",
    "react",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const { useEffect: c, useImperativeHandle: d, useRef: m } = u;
    function p(t) {
        const n = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const i = a.contextMenu;
        const l = r("useWAWebUIM")();
        const s = m(null);
        c(function() {
            o("WAWebCmd").Cmd.openContextMenu({
                menuOptions: i,
                uim: r("nullthrows")(l)
            }, function(e) {
                s.current = e;
            });
            return function() {
                o("WAWebCmd").Cmd.closeContextMenu(l);
            };
        }, []);
        const u = function() {
            return s.current;
        };
        d(n, function() {
            return {
                getElement: u
            };
        });
        return null;
    }
    l.default = p;
}, 98);