__d("WAWebRichResponseTableFragment.react", [
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 150;
    const d = 4;
    const m = {
        boxSizing: "x9f619",
        borderCollapse: "x1mwwwfo",
        tableLayout: "x140o2bo",
        $$css: true
    };
    const p = {
        table: function(t) {
            return [
                m,
                {
                    width: t != null ? "x5lhr3w" : t,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(17);
        const t_fragment = t.fragment;
        let i;
        let l;
        let s;
        let c;
        if (n[0] !== t_fragment.table) {
            const m = t_fragment.table.find(h);
            const _ = t_fragment.table.filter(g);
            const C = m?.items.length ?? 0;
            if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
                c = {
                    className: "xh8yej3 x9f619 x1lliihq xyi3aci xwf5gio x1p453bz x1suzm8a x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xw2csxc"
                };
                n[5] = c;
            } else {
                c = n[5];
            }
            l = (e || (e = r("stylex"))).props(p.table(b(C)));
            const v = m == null ? undefined : m.items.map((e, t)=>{
                const n = t === m.items.length - 1;
                return <Y7Component key={t} isLast={n}>{e}</Y7Component>;
            });
            if (n[6] !== v) {
                s = <thead>{v}</thead>;
                n[6] = v;
                n[7] = s;
            } else {
                s = n[7];
            }
            i = _.map(f);
            n[0] = t_fragment.table;
            n[1] = i;
            n[2] = l;
            n[3] = s;
            n[4] = c;
        } else {
            i = n[1];
            l = n[2];
            s = n[3];
            c = n[4];
        }
        let S;
        if (n[8] !== i) {
            S = <tbody>{i}</tbody>;
            n[8] = i;
            n[9] = S;
        } else {
            S = n[9];
        }
        let R;
        if (n[10] !== l || n[11] !== s || n[12] !== S) {
            R = <table {...babelHelpers.extends({}, l, {
                children: [
                    s,
                    S
                ]
            })}/>;
            n[10] = l;
            n[11] = s;
            n[12] = S;
            n[13] = R;
        } else {
            R = n[13];
        }
        let L;
        if (n[14] !== c || n[15] !== R) {
            L = <div {...babelHelpers.extends({}, c, {
                children: R
            })}/>;
            n[14] = c;
            n[15] = R;
            n[16] = L;
        } else {
            L = n[16];
        }
        return L;
    }
    function f(e, t) {
        return <tr key={t}>{e.items.map((t, n)=>{
            const r = n === e.items.length - 1;
            return <C key={n} isLast={r}>{t}</C>;
        })}</tr>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(e) {
        return e.isHeading !== true;
    }
    function h(e) {
        return e.isHeading === true;
    }
    function Y7Component(e) {
        const t = o("react-compiler-runtime").c(7);
        const { children, isLast } = e;
        let a;
        if (t[0] !== isLast) {
            a = ({
                0: {
                    className: "x1yc453h x1xrf6ya x1nzty39 xscbp6u x12w63v0 x1h3rtpe xso031l x1q0q8m5 x120ee7l"
                },
                1: {
                    className: "x1yc453h x1xrf6ya x1nzty39 xscbp6u x12w63v0 x1h3rtpe xso031l x1q0q8m5 x120ee7l x1lun4ml x18b5jzi xbogo7e"
                }
            })[!isLast << 0];
            t[0] = isLast;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== children) {
            const Component = o("WAWebText.react").WAWebTextMutedRefreshed;
            i = <Component color="primary">{children}</Component>;
            t[2] = children;
            t[3] = i;
        } else {
            i = t[3];
        }
        let l;
        if (t[4] !== a || t[5] !== i) {
            l = <th {...babelHelpers.extends({}, a, {
                children: i
            })}/>;
            t[4] = a;
            t[5] = i;
            t[6] = l;
        } else {
            l = t[6];
        }
        return l;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(7);
        const { children, isLast } = e;
        let a;
        if (t[0] !== isLast) {
            a = ({
                0: {
                    className: "x1yc453h x1awj2ng x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xso031l x1q0q8m5 x120ee7l"
                },
                1: {
                    className: "x1yc453h x1awj2ng x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xso031l x1q0q8m5 x120ee7l x1lun4ml x18b5jzi xbogo7e"
                }
            })[!isLast << 0];
            t[0] = isLast;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== children) {
            const Component = o("WAWebText.react").WAWebTextMutedRefreshed;
            i = <Component color="primary">{children}</Component>;
            t[2] = children;
            t[3] = i;
        } else {
            i = t[3];
        }
        let l;
        if (t[4] !== a || t[5] !== i) {
            l = <td {...babelHelpers.extends({}, a, {
                children: i
            })}/>;
            t[4] = a;
            t[5] = i;
            t[6] = l;
        } else {
            l = t[6];
        }
        return l;
    }
    function b(e) {
        if (e > d) {
            return `${c * e}px`;
        }
        return "100%";
    }
    l.default = _;
}, 98);