__d("WAWebVelocityTransition", [
    "invariant",
    "Promise",
    "WALogger",
    "WAWebIdleTaskRunner",
    "WAWebThirdPartyMigrationGatingUtils",
    "WAWebTransitionPrimitive.react",
    "WAWebTransitions",
    "WAWebUiIdleEventBus",
    "WAWebUimUtils",
    "WAWebVelocityAnimate",
    "compactMap",
    "err",
    "isEmptyIterable",
    "omit",
    "react",
    "react-transition-group",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let c;
    const d = [
        "children",
        "delay",
        "displayName",
        "nodeRef",
        "onAnimationComplete",
        "onEnter",
        "onExit",
        "transitionName"
    ];
    const m = [
        "selector"
    ];
    let p;
    let _;
    const f = _ || (_ = o("react"));
    const g = _;
    const { Children: h, cloneElement: y, useLayoutEffect: C, useRef: b } = g;
    const v = {
        APPEAR: "appear",
        ENTER: "enter",
        LEAVE: "leave"
    };
    function S(t) {
        const { children: a, delay: i } = t;
        const l = i === void 0 ? 0 : i;
        const { displayName: u, nodeRef: c, onAnimationComplete: _, onEnter: g, onExit: S, transitionName: E } = t;
        const k = babelHelpers.objectWithoutPropertiesLoose(t, d);
        const I = b(true);
        const T = b();
        const D = b();
        const x = b();
        const $ = b(0);
        const P = function(n = true) {
            if (c != null && c.current != null) {
                return c.current;
            }
            const t = T.current;
            if (t != null) {
                if (t instanceof HTMLElement || o("WAWebUimUtils").isCrossWindowHTMLElement(t)) {
                    return t;
                }
                const r = t.getElement?.();
                if (r) {
                    return r;
                }
            }
            if (!n) {
                return null;
            }
            const a = D.current;
            if (a != null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[VelocityTransitionGroupChild] findDOMNode fallback: ",
                    ""
                ])), u).sendLogs("velocity-transition-group-find-dom-node");
            }
            return a;
        };
        const N = r("useWAWebStableCallback")(function() {
            return P(false) ?? D.current;
        });
        const M = b(0);
        C(function() {
            M.current += 1;
            const e = M.current;
            I.current = true;
            return function() {
                I.current = false;
                const t = N();
                queueMicrotask(()=>{
                    if (M.current === e && !I.current) {
                        $.current += 1;
                        x.current = null;
                        r("WAWebVelocityAnimate")(t, "finish");
                    }
                });
            };
        }, [
            N
        ]);
        const w = b(false);
        const A = b();
        const F = function() {
            A.current = o("WAWebIdleTaskRunner").UIBusyTasks.setBusy(A.current);
            if (!w.current) {
                w.current = true;
                o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(true);
            }
        };
        const O = function() {
            if (A.current != null) {
                o("WAWebIdleTaskRunner").UIBusyTasks.clearBusy(A.current);
                delete A.current;
            }
            if (w.current) {
                w.current = false;
                o("WAWebUiIdleEventBus").UiIdleEventBus.setUiBusy(false);
            }
        };
        const B = function(t, n) {
            let e = n;
            if (!e) {
                return [];
            }
            if (!Array.isArray(e)) {
                e = [
                    e
                ];
            }
            const o = {};
            return r("compactMap")(e, function(e) {
                const n = e.selector;
                const a = babelHelpers.objectWithoutPropertiesLoose(e, m);
                let i;
                if (n != null) {
                    if (n in o) {
                        i = o[n];
                    } else {
                        i = o[n] = t ? Array.from(t.querySelectorAll(n)) : void 0;
                    }
                } else {
                    i = t;
                }
                if (i != null && (!Array.isArray(i) || !r("isEmptyIterable")(i))) {
                    return babelHelpers.extends({
                        nodes: i
                    }, a);
                }
            });
        };
        const W = function(t) {
            let e = t;
            if (e === v.APPEAR) {
                e = v.ENTER;
            }
            if (!(e === "enter" || e === "leave")) {
                s(0, 66980);
            }
            const o = R(E);
            const a = o[e];
            if (!o || !a) {
                return (p || (p = n("Promise"))).resolve();
            }
            const i = r("omit")(o, [
                "enter",
                "leave"
            ]);
            const u = P();
            const c = B(u, a);
            if (e === v.LEAVE) {
                if (u != null) {
                    u.setAttribute("pointerEvents", "none");
                }
                if (u != null) {
                    u.addEventListener("keypress", L, true);
                }
                if (u != null) {
                    u.addEventListener("keydown", L, true);
                }
            }
            return (p || (p = n("Promise"))).all(c.map(({ delay: a, drag: s, duration: u, easing: c, nodes: d, props: m, stagger: p })=>{
                let _ = i.delay ?? 0;
                if (l) {
                    _ = l;
                } else if (a != null && a !== 0) {
                    _ = a;
                }
                return r("WAWebVelocityAnimate")(d, m, {
                    easing: c ?? i.easing ?? "easeInSine",
                    duration: u || (i.duration ?? 0),
                    delay: _,
                    queue: i.queue || false,
                    stagger: p ?? false,
                    drag: s || false
                });
            })).finally(()=>{
                if (i.cleanOnComplete === true && e === v.ENTER) {
                    c.forEach(({ nodes: t })=>{
                        const n = Array.isArray(t) ? t : [
                            t
                        ];
                        n.forEach((e)=>e?.removeAttribute("style"));
                    });
                }
                if (e === v.LEAVE) {
                    if (u != null) {
                        u.removeEventListener("keypress", L, true);
                    }
                    if (u != null) {
                        u.removeEventListener("keydown", L, true);
                    }
                }
                _?.();
            });
        };
        const q = function(n) {
            const e = t.appear;
            const r = e === void 0 ? false : e;
            const o = t.enter;
            const a = o === void 0 ? true : o;
            const i = t.exit;
            const l = i === void 0 ? true : i;
            const s = n === v.ENTER ? a : n === v.LEAVE ? l : n === v.APPEAR ? r : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
            })();
            if (s) {
                F();
                $.current += 1;
                const u = $.current;
                W(n).finally(()=>{
                    O();
                }).then(()=>{
                    if (!(!I.current || u !== $.current || x.current == null)) {
                        x.current();
                    }
                });
            } else {
                x.current?.();
            }
        };
        const U = function(t, n) {
            g?.();
            D.current = t;
            q(n ? v.APPEAR : v.ENTER);
        };
        const V = function(t) {
            S?.();
            D.current = t;
            q(v.LEAVE);
        };
        const H = function(t) {
            const n = (t == null || t.getComponent == null ? void 0 : t.getComponent()) ?? t;
            T.current = n;
            const r = a?.ref;
            if (r) {
                if (typeof r === "function") {
                    r(n);
                } else {
                    r.current = n;
                }
            }
        };
        let G = a;
        if (c == null) {
            const z = h.only(G);
            G = y(z, {
                ref: H
            });
        }
        if (o("WAWebThirdPartyMigrationGatingUtils").isVelocityAnimateMigrationEnabled()) {
            return f.jsx(r("WAWebTransitionPrimitive.react"), babelHelpers.extends({
                resolveNode: function() {
                    return P();
                }
            }, k, {
                addEndListener: function(t, n) {
                    x.current = n;
                },
                onEnter: U,
                onExit: V,
                children: G
            }));
        }
        return f.jsx(o("react-transition-group").Transition, babelHelpers.extends({
            nodeRef: c
        }, k, {
            addEndListener: function(t, n) {
                x.current = n;
            },
            onEnter: U,
            onExit: V,
            children: G
        }));
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    function R(e) {
        if (e && !o("WAWebTransitions").Transitions[e]) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                " ",
                " wasn't found in VelocityTransitionGroupChild transitions."
            ])), e).sendLogs("transition-name");
            throw r("err")("Invalid transitionName");
        }
        return o("WAWebTransitions").Transitions[e];
    }
    function L(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    l.default = S;
}, 98);