__d("WAWebPopoverArrow.react", [
    "WAWebPopoverPosition",
    "WAWebTriangle.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        popoverArrowContainer: {
            position: "x10l6tqk",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(10);
        const { containerXStyle: a, coords: i, popoverPosition: l, width: s, xstyle: d } = t;
        let m;
        e: switch(l){
            case o("WAWebPopoverPosition").PopoverPosition.Top:
                {
                    m = "down";
                    break e;
                }
            case o("WAWebPopoverPosition").PopoverPosition.Bottom:
                {
                    m = "up";
                    break e;
                }
            case o("WAWebPopoverPosition").PopoverPosition.Start:
                {
                    m = "right";
                    break e;
                }
            case o("WAWebPopoverPosition").PopoverPosition.End:
                m = "left";
        }
        let p;
        if (n[0] !== a) {
            p = (e || (e = r("stylex")))(c.popoverArrowContainer, a);
            n[0] = a;
            n[1] = p;
        } else {
            p = n[1];
        }
        let _;
        if (n[2] !== m || n[3] !== s || n[4] !== d) {
            _ = u.jsx(r("WAWebTriangle.react"), {
                width: s,
                direction: m,
                xstyle: d
            });
            n[2] = m;
            n[3] = s;
            n[4] = d;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] !== i || n[7] !== p || n[8] !== _) {
            f = <div className={p} style={i}>{_}</div>;
            n[6] = i;
            n[7] = p;
            n[8] = _;
            n[9] = f;
        } else {
            f = n[9];
        }
        return f;
    }
    l.PopoverArrow = d;
}, 98);