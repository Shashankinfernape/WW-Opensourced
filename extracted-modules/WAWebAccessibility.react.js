__d("WAWebAccessibility.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect: c, useState: d } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(2);
        const n = e.children;
        let r;
        if (t[0] !== n) {
            r = <span aria-label={n}/>;
            t[0] = n;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== n) {
            a = <span {...babelHelpers.extends({}, r, {
                children: n
            })}/>;
            t[1] = n;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function _({ assertive: n = false, startWithText: o = false, text: a }) {
        const i = d(o ? a : "");
        const l = i[0];
        const u = i[1];
        c(function() {
            window.setTimeout(function() {
                u(a);
            }, 10);
        }, [
            a
        ]);
        return <span aria-live={n ? "assertive" : "polite"} aria-atomic="true" className="xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s">{l}</span>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f({ disabled: t, onClick: n }) {
        const r = function(t) {
            return n?.(t);
        };
        const o = function(n) {
            if (t !== true) {
                r(n);
            }
        };
        const a = function(t) {
            const e = t.key === "Enter" || t.key === " " || t.key === "Spacebar" || t.which === 13 || t.which === 32;
            if (e) {
                t.preventDefault();
                r(t);
            }
        };
        return {
            onClick: o,
            onKeyPress: a,
            disabled: t,
            tabIndex: t === true ? -1 : 0,
            role: "button"
        };
    }
    l.InvisibleLabel = m;
    l.VisuallyHiddenText = p;
    l.InvisibleAnnouncement = _;
    l.accessibleClickableButtonProps = f;
}, 98);