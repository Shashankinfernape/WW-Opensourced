__d("WAWebBotCommandMutatorComponent.react", [
    "WAWebClickable.react",
    "WAWebComposeBoxActions",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        link: {
            color: "x1ph7ams",
            $$css: true
        }
    };
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_children = e.children;
        const r = e_children === undefined ? "" : e_children;
        let a;
        if (t[0] !== r) {
            a = function() {
                o("WAWebComposeBoxActions").ComposeBoxActions.paste(null, `${String(r)} `, {
                    insertLeadingSpace: true
                });
            };
            t[0] = r;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] !== r || t[3] !== i) {
            const Component = o("WAWebClickable.react").Clickable;
            l = <Component as="span" xstyle={u.link} onClick={i}>{r}</Component>;
            t[2] = r;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    l.default = CComponent;
}, 98);