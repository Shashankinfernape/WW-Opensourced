;
__d("WAWebToastManagerImpl", [
    "WAAbortError",
    "WAWebL10N",
    "WAWebSetRefCache",
    "WAWebToastManager",
    "WAWebVelocityTransitionGroup",
    "WDSToast.react",
    "cr:782",
    "react",
    "stylex",
    "uniqueID",
    "useLazyRef",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const t = c(e, "string");
        if (typeof t === "symbol") {
            return t;
        }
        return `${t}`;
    }
    function c(e, t) {
        if (typeof e !== "object" || !e) {
            return e;
        }
        const n = e[typeof Symbol === "function" ? Symbol.toPrimitive : "@@toPrimitive"];
        if (n !== undefined) {
            const r = n.call(e, t || "default");
            if (typeof r !== "object") {
                return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
    }
    const d = s || (s = o("react"));
    const m = s;
    const { cloneElement, useEffect, useRef, useState } = m;
    const h = {
        slide0: {
            transform: "xnn1q72",
            $$css: true
        },
        slide1: {
            transform: "xvav9fi",
            $$css: true
        },
        slide2: {
            transform: "x8r675y",
            $$css: true
        },
        slide3: {
            opacity: "xg01cxk",
            transform: "x1o6clbr",
            $$css: true
        },
        wrapper: {
            opacity: "x1hc1fzr",
            bottom: "x1ey2m1c",
            lineHeight: "xzl6hoh",
            marginTop: "x98l61r",
            marginInlineEnd: "xviac27",
            marginBottom: "x1ua1l7f",
            marginInlineStart: "xlese2p",
            minHeight: "xjwf9q1",
            position: "x10l6tqk",
            zIndex: "xc9l9hb",
            transition: "x19seqdo",
            $$css: true
        },
        center: {
            insetInlineStart: "xbudbmw",
            left: null,
            right: null,
            marginInlineStart: "x1lziwak",
            marginInlineEnd: "x14z9mp",
            maxWidth: "x65f84u",
            $$css: true
        },
        transformLeft: {
            transform: "xuuh30",
            $$css: true
        },
        transformRight: {
            transform: "xitnhlw",
            $$css: true
        },
        right: {
            insetInlineEnd: "xtijo5x",
            left: null,
            right: null,
            $$css: true
        }
    };
    const y = 3;
    function CComponent() {
        const t = r("useLazyRef")(function() {
            return new Map;
        });
        const a = function(n, r) {
            if (r) {
                t.current.set(n, r);
            } else {
                t.current.delete(n);
            }
        };
        const i = o("WDSToast.react").useWDSToast();
        const i_showToast = i.showToast;
        const s = r("useLazyRef")(function() {
            return new (r("WAWebSetRefCache"))(a);
        });
        const cRef = useRef(false);
        const m = useState({});
        const C = m[0];
        const S = m[1];
        const RRef = useRef(null);
        function L({ action, duration, id: dedupId, msg, visible }, position) {
            if (visible === false || duration != null && duration !== 4000) {
                return false;
            }
            const u = position === o("WAWebToastManager").ToastPosition.LEFT || position === undefined ? "start" : position === o("WAWebToastManager").ToastPosition.CENTER ? "center" : position === o("WAWebToastManager").ToastPosition.RIGHT ? "end" : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${position}`);
            })();
            const c = Array.isArray(action) ? action[0] : action;
            if (c?.onAction != null) {
                i_showToast({
                    testid: "toast-body",
                    align: u,
                    type: "default",
                    message: msg,
                    dedupId,
                    action: {
                        label: c.actionText,
                        onPress: function() {
                            c.onAction();
                        },
                        testid: c.testid
                    }
                });
            } else {
                i_showToast({
                    testid: "toast-body",
                    align: u,
                    type: "default",
                    message: msg,
                    dedupId
                });
            }
            return true;
        }
        function E({ id, initialAction, onDismiss, pendingAction, settleDuration, toastPosition }, position) {
            if (settleDuration != null && settleDuration !== 5000) {
                return false;
            }
            const c = toastPosition ?? position;
            const d = c === o("WAWebToastManager").ToastPosition.LEFT || c === "LEFT" || c === undefined ? "start" : c === o("WAWebToastManager").ToastPosition.CENTER ? "center" : c === o("WAWebToastManager").ToastPosition.RIGHT || c === "RIGHT" ? "end" : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${c}`);
            })();
            if (initialAction) {
                const { action, handler, testid, text } = initialAction;
                let g = text;
                let h = null;
                let y = false;
                pendingAction.then((e)=>{
                    if (e) {
                        g = e.text;
                        if (e.action != null && e.handler != null) {
                            h = {
                                label: e.action,
                                handler: e.handler,
                                testid: e.testid
                            };
                        }
                    }
                }).catch((e)=>{
                    if (e != null && typeof e === "object" && e.name !== o("WAAbortError").ABORT_ERROR && e?.text != null) {
                        g = String(e.text);
                        if (e?.action != null && e?.handler != null) {
                            h = {
                                label: e.action,
                                handler: e.handler,
                                testid: e.testid
                            };
                        }
                    }
                });
                i_showToast({
                    align: d,
                    type: "loading",
                    message: function(t) {
                        if (t !== "loading") {
                            return g;
                        }
                        return text;
                    },
                    action: function(t) {
                        if (t !== "loading" && h != null) {
                            return {
                                label: h.label,
                                onPress: function() {
                                    let e;
                                    if (!y) {
                                        y = true;
                                        if ((e = h) != null) {
                                            e.handler();
                                        }
                                    }
                                },
                                testid: h.testid
                            };
                        }
                        if (t === "loading" && action != null && handler != null) {
                            return {
                                label: action,
                                onPress: function() {
                                    if (!y) {
                                        y = true;
                                        handler();
                                    }
                                },
                                testid
                            };
                        }
                        return null;
                    },
                    process: pendingAction
                });
            } else {
                let C = false;
                pendingAction.then((e)=>{
                    if (e) {
                        if (e.action != null && e.handler != null) {
                            i_showToast({
                                align: d,
                                type: "default",
                                message: e.text,
                                action: {
                                    label: e.action,
                                    onPress: function() {
                                        if (!C) {
                                            C = true;
                                            if (e.handler != null) {
                                                e.handler();
                                            }
                                        }
                                    },
                                    testid: e.testid
                                }
                            });
                        } else {
                            i_showToast({
                                align: d,
                                type: "default",
                                message: e.text
                            });
                        }
                    }
                }).catch((e)=>{
                    if (e != null && typeof e === "object" && e.name !== o("WAAbortError").ABORT_ERROR && e?.text != null) {
                        if (e?.action != null && e?.handler != null) {
                            i_showToast({
                                align: d,
                                type: "error",
                                message: e.text,
                                action: {
                                    label: e.action,
                                    onPress: function() {
                                        if (!C) {
                                            C = true;
                                            if (e.handler != null) {
                                                e.handler();
                                            }
                                        }
                                    },
                                    testid: e.testid
                                }
                            });
                        } else {
                            i_showToast({
                                align: d,
                                type: "error",
                                message: e.text
                            });
                        }
                    }
                });
            }
            return true;
        }
        const openToast = function(toast, position) {
            let o = false;
            const n_props = toast.props;
            if ("pendingAction" in n_props) {
                o = E(n_props, position);
            } else {
                o = L(n_props, position);
            }
            if (!o) {
                const id = n_props.id ?? v();
                const l = t.current.get(id);
                if (l) {
                    if (l.restartDelay != null) {
                        l.restartDelay();
                    }
                } else {
                    S(function(e) {
                        return babelHelpers.extends({}, e, {
                            [id]: {
                                toast,
                                position,
                                id
                            }
                        });
                    });
                }
            }
        };
        const I = function(t) {
            if (C[t]) {
                S(function(e) {
                    const n = e[t];
                    const r = babelHelpers.objectWithoutPropertiesLoose(e, [
                        t
                    ].map(u));
                    return r;
                });
            }
        };
        o("useWAWebListener").useListener(o("WAWebToastManager").ToastManager, "open_toast", openToast);
        o("useWAWebListener").useListener(o("WAWebToastManager").ToastManager, "close_toast", I);
        useEffect(function() {
            const RRef_current = RRef.current;
            RRef.current = C;
            cRef.current = Object.keys(RRef_current ?? {}).length > Object.keys(C).length;
        }, [
            C
        ]);
        const cRef_current = cRef.current;
        const D = Object.values(C).sort(b).map(({ id, position, toast }, n)=><div key={id} {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.wrapper, position === o("WAWebToastManager").ToastPosition.CENTER && h.center, position === o("WAWebToastManager").ToastPosition.RIGHT && h.right, n === 0 && cRef_current && h.slide0, n === 1 && h.slide1, n === 2 && h.slide2, n >= y && h.slide3), {
                children: <div {...babelHelpers.extends({}, e.props(position === o("WAWebToastManager").ToastPosition.CENTER && (r("WAWebL10N").isRTL() ? h.transformRight : h.transformLeft)), {
                    children: cloneElement(toast, {
                        ref: s.current.getRefSetter(id),
                        id
                    })
                })}/>
            })}/>);
        const Component = r("WAWebVelocityTransitionGroup");
        return <>{n("cr:782") != null && d.jsx(n("cr:782"), {
            openToast
        })}<Component transitionName="fade_sifo">{D}</Component></>;
    }
    CComponent.displayName = `${CComponent.name} [from ${i.id}]`;
    function b(e, t) {
        if (e.id === t.id) {
            return 0;
        }
        if (e.id < t.id) {
            return 1;
        }
        return -1;
    }
    function v(e) {
        return r("uniqueID")(e || "toast");
    }
    l.default = CComponent;
}, 98);
