__d("WAWebVelocityTransitionGroup", [
    "WAWebClassnames",
    "WAWebThirdPartyMigrationGatingUtils",
    "WAWebVelocityTransition",
    "react",
    "react-compiler-runtime",
    "react-transition-group",
    "stylex",
    "useWAWebTransitionPresence"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u.Children;
    function m(t) {
        const n = o("react-compiler-runtime").c(20);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { appear: u, component: m, delay: f, displayName: g, enter: h, exit: y, onAnimationComplete: C, testid: b, transitionName: v, xstyle: S } = l;
        const R = m === void 0 ? "span" : m;
        const L = v === void 0 ? "default" : v;
        let E;
        if (n[3] !== S) {
            E = o("WAWebClassnames").classnamesConvertMeToStylexPlease((s || (s = r("stylex")))(S));
            n[3] = S;
            n[4] = E;
        } else {
            E = n[4];
        }
        let k;
        if (n[5] !== u || n[6] !== f || n[7] !== g || n[8] !== h || n[9] !== y || n[10] !== C || n[11] !== a.children || n[12] !== L) {
            const Component = o("react-transition-group").TransitionGroup;
            k = o("WAWebThirdPartyMigrationGatingUtils").isVelocityAnimateMigrationEnabled() ? <P8 appear={u} enter={h} exit={y} transitionName={L} delay={f} onAnimationComplete={C} displayName={g}>{a.children}</P8> : <Component component={null} appear={u} enter={h} exit={y}>{d.toArray(a.children)?.map(function(e, t) {
                const Component = r("WAWebVelocityTransition");
                return <Component key={_(e, t)} transitionName={L} delay={f} onAnimationComplete={C} displayName={g}>{e}</Component>;
            })}</Component>;
            n[5] = u;
            n[6] = f;
            n[7] = g;
            n[8] = h;
            n[9] = y;
            n[10] = C;
            n[11] = a.children;
            n[12] = L;
            n[13] = k;
        } else {
            k = n[13];
        }
        let T;
        if (n[14] !== R || n[15] !== i || n[16] !== E || n[17] !== k || n[18] !== b) {
            T = <R ref={i} className={E} data-testid={b}>{k}</R>;
            n[14] = R;
            n[15] = i;
            n[16] = E;
            n[17] = k;
            n[18] = b;
            n[19] = T;
        } else {
            T = n[19];
        }
        return T;
    }
    function P8(e) {
        const t = o("react-compiler-runtime").c(20);
        const { appear: n, delay: a, displayName: i, enter: l, exit: s, onAnimationComplete: u, transitionName: m } = e;
        let p;
        if (t[0] !== a || t[1] !== i || t[2] !== s || t[3] !== u || t[4] !== e.children || t[5] !== m) {
            p = [];
            d.toArray(e.children)?.forEach(function(e, t) {
                if (e != null) {
                    p.push({
                        key: _(e, t),
                        element: {
                            child: e,
                            delay: a,
                            displayName: i,
                            exit: s,
                            onAnimationComplete: u,
                            transitionName: m
                        }
                    });
                }
            });
            t[0] = a;
            t[1] = i;
            t[2] = s;
            t[3] = u;
            t[4] = e.children;
            t[5] = m;
            t[6] = p;
        } else {
            p = t[6];
        }
        const g = r("useWAWebTransitionPresence")(p);
        const { initialKeys: h, items: y, notifyExited: C } = g;
        let b;
        if (t[7] !== n || t[8] !== l || t[9] !== h || t[10] !== y || t[11] !== C) {
            let v;
            if (t[13] !== n || t[14] !== l || t[15] !== h || t[16] !== C) {
                v = function(t) {
                    const e = t.element;
                    const Component = r("WAWebVelocityTransition");
                    return <Component key={t.key} in={t.isPresent} appear={h.has(t.key) ? n === true : l !== false} enter={l} exit={e.exit} transitionName={e.transitionName} delay={e.delay} onAnimationComplete={e.onAnimationComplete} displayName={e.displayName} onExited={function() {
                        return C(t.key);
                    }}>{e.child}</Component>;
                };
                t[13] = n;
                t[14] = l;
                t[15] = h;
                t[16] = C;
                t[17] = v;
            } else {
                v = t[17];
            }
            b = y.map(v);
            t[7] = n;
            t[8] = l;
            t[9] = h;
            t[10] = y;
            t[11] = C;
            t[12] = b;
        } else {
            b = t[12];
        }
        let S;
        if (t[18] !== b) {
            S = <>{b}</>;
            t[18] = b;
            t[19] = S;
        } else {
            S = t[19];
        }
        return S;
    }
    function _(e, t) {
        const n = Reflect.get(e, "key");
        if (n == null) {
            return `unkeyed-${t}`;
        }
        return String(n);
    }
    l.default = m;
}, 98);