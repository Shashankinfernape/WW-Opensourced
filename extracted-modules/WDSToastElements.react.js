__d("WDSToastElements.react", [
    "BaseToast.react",
    "WDSButton.react",
    "WDSIconIcCheckCircle.react",
    "WDSIconIcError.react",
    "WDSSpinner.react",
    "WDSText.react",
    "emptyFunction",
    "getPlatformByGK",
    "promiseDone",
    "react",
    "stylex",
    "uniqueID"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "id",
        "removed",
        "resolvedValue",
        "restartedAt"
    ];
    const s = [
        "onActionClick",
        "resolvedValue"
    ];
    const u = [
        "type"
    ];
    const c = [
        "type"
    ];
    const d = [
        "process"
    ];
    let m;
    let p;
    function _(e) {
        if (e == null) {
            throw new TypeError(`Cannot destructure ${e}`);
        }
    }
    const f = p || (p = o("react"));
    const g = p;
    const { useCallback, useEffect, useImperativeHandle, useRef, useState } = g;
    const S = 4000;
    const R = 7000;
    const L = 75;
    const E = 3;
    const k = {
        width: 20,
        height: 20
    };
    const I = "x9vcbzf-B";
    const T = "xvowxyv-B";
    const D = "x1n29qb0-B";
    const x = "xva7eij-B";
    const $ = {
        entry: {
            animationDuration: "xeooxyl",
            animationName: "x1ek3uh9",
            animationTimingFunction: "xpdgw1o",
            $$css: true
        },
        exit: {
            animationDuration: "xeooxyl",
            animationFillMode: "x10e4vud",
            animationName: "xilmffa",
            animationTimingFunction: "x2n60on",
            $$css: true
        }
    };
    const P = {
        entry: {
            animationDuration: "xeooxyl",
            animationName: "x1ek3uh9",
            animationTimingFunction: "xpdgw1o",
            $$css: true
        },
        exit: {
            animationDuration: "xeooxyl",
            animationFillMode: "x10e4vud",
            animationName: "xilmffa",
            animationTimingFunction: "x2n60on",
            $$css: true
        }
    };
    const N = {
        entry: {
            animationDuration: "xeooxyl",
            animationName: "xy43ex2",
            animationTimingFunction: "xpdgw1o",
            $$css: true
        },
        exit: {
            animationDuration: "x2mfxb",
            animationFillMode: "x10e4vud",
            animationName: "x1fvbyvl",
            animationTimingFunction: "x18yl69g",
            $$css: true
        }
    };
    const M = {
        none: {
            paddingLeft: "x1tnhpae",
            paddingRight: "x8177ur",
            paddingInlineStart: null,
            paddingInlineEnd: null,
            $$css: true
        },
        left: {
            paddingLeft: "x1tj70yd",
            paddingRight: "x8177ur",
            paddingInlineStart: null,
            paddingInlineEnd: null,
            $$css: true
        },
        right: {
            paddingTop: "x1tiyuxx",
            paddingBottom: "x1nbhmlj",
            paddingLeft: "x1tnhpae",
            paddingRight: "x5u1mw9",
            paddingInlineStart: null,
            paddingInlineEnd: null,
            $$css: true
        },
        both: {
            paddingLeft: "x1tj70yd",
            paddingRight: "x5u1mw9",
            paddingInlineStart: null,
            paddingInlineEnd: null,
            paddingTop: "x1tiyuxx",
            paddingBottom: "x1nbhmlj",
            $$css: true
        }
    };
    const w = {
        size: {
            maxWidth: "xxc7z9f",
            minHeight: "x1wxaq2x",
            $$css: true
        },
        container: {
            alignItems: "x6s0dn4",
            backgroundColor: "xpip370",
            borderStartStartRadius: "x1g83kfv",
            borderStartEndRadius: "x3qq2k7",
            borderEndEndRadius: "x2x8art",
            borderEndStartRadius: "x1qor8vf",
            boxShadow: "xi5p3m0",
            minWidth: "xeuugli",
            transition: "x1yhwi1h",
            paddingTop: "x16ovd2e",
            paddingBottom: "x12xbjc7",
            pointerEvents: "x71s49j",
            $$css: true
        },
        iconSize: {
            height: "x1qx5ct2",
            $$css: true
        },
        toastAlignStart: {
            alignSelf: "xqcrz7y",
            $$css: true
        },
        toastAlignCenter: {
            alignSelf: "xamitd3",
            $$css: true
        },
        toastAlignEnd: {
            alignSelf: "xpvyfi4",
            $$css: true
        },
        spinner: {
            color: "xowaa7l",
            $$css: true
        },
        item: {
            paddingBottom: "x10b6aqq",
            paddingTop: "x1yrsyyn",
            paddingInlineStart: "x25sj25",
            paddingInlineEnd: "x1icxu4v",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const A = o("getPlatformByGK").WDS_PLATFORM === "android" ? $ : o("getPlatformByGK").WDS_PLATFORM === "iOS" ? P : o("getPlatformByGK").WDS_PLATFORM === "windowsWeb" || o("getPlatformByGK").WDS_PLATFORM === "macWeb" ? N : (()=>{
        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${o("getPlatformByGK").WDS_PLATFORM}`);
    })();
    function FComponent({ item, onCleanup, onRemove, onUpdateType, paused }) {
        const item_align = item.align;
        const c = item_align === undefined ? "start" : item_align;
        const { id, message, removed, resolvedValue, testid } = item;
        const C = testid === undefined ? "toast-body" : testid;
        const item_type = item.type;
        const E = String(typeof message === "function" ? message(item_type ?? "default", resolvedValue) : message);
        const k = E.length >= L ? R : S;
        const I = 650;
        const T = k + I;
        const DRef = useRef(T);
        const xRef = useRef(0);
        const $RefRef = useRef(null);
        const PRef = useRef(item.restartedAt);
        const N = item.type === "loading" ? item.process : null;
        useEffect(function() {
            if (!(removed || N == null)) {
                let e = true;
                r("promiseDone")(N, function(t) {
                    if (e) {
                        onUpdateType(id, "success", N, t);
                    }
                }, function(t) {
                    if (e) {
                        onUpdateType(id, "error", N, t);
                    }
                });
                return function() {
                    e = false;
                };
            }
        }, [
            id,
            N,
            onUpdateType,
            removed
        ]);
        useEffect(function() {
            if (!(removed || item.type === "loading") && (PRef.current !== item.restartedAt && (PRef.current = item.restartedAt, DRef.current = T), !paused)) {
                xRef.current = Date.now();
                $RefRef.current = window.setTimeout(function() {
                    onRemove(id);
                }, DRef.current);
                return function() {
                    if ($RefRef.current != null && $RefRef.current !== 0) {
                        window.clearTimeout($RefRef.current);
                        $RefRef.current = null;
                        const e = Date.now() - xRef.current;
                        DRef.current = Math.max(0, DRef.current - e);
                    }
                };
            }
        }, [
            removed,
            id,
            onRemove,
            item.restartedAt,
            item.type,
            paused,
            T
        ]);
        useEffect(function() {
            if (removed) {
                const e = o("getPlatformByGK").WDS_PLATFORM === "windowsWeb" || o("getPlatformByGK").WDS_PLATFORM === "macWeb" ? 400 : 650;
                const t = e + 100;
                const n = window.setTimeout(function() {
                    onCleanup(id);
                }, t);
                return function() {
                    return window.clearTimeout(n);
                };
            }
        }, [
            removed,
            id,
            onCleanup
        ]);
        const onAnimationEnd = function(t) {
            if (t.target === t.currentTarget && removed) {
                onCleanup(id);
            }
        };
        const onActionClick = function() {
            return onRemove(id);
        };
        const { id: id_1, removed: removed_1, resolvedValue: resolvedValue_1, restartedAt } = item;
        const V = babelHelpers.objectWithoutPropertiesLoose(item, e);
        const H = c === "start" ? w.toastAlignStart : c === "center" ? w.toastAlignCenter : c === "end" ? w.toastAlignEnd : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${c}`);
        })();
        return <li {...babelHelpers.extends({}, (m || (m = r("stylex"))).props([
            removed ? A.exit : A.entry,
            w.size
        ], H), {
            "data-id": id,
            "data-testid": undefined,
            "data-removed": removed,
            onAnimationEnd,
            role: "status",
            "aria-atomic": "true",
            "aria-live": "polite",
            children: <OComponent {...babelHelpers.extends({
                onActionClick,
                resolvedValue
            }, V)}/>
        })}/>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    function OComponent(e) {
        const { onActionClick, resolvedValue } = e;
        const o = babelHelpers.objectWithoutPropertiesLoose(e, s);
        const a = ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && "type" in e && (e.type === "default" || e.type === undefined)) {
                const t = e.type;
                const r = babelHelpers.objectWithoutPropertiesLoose(e, u);
                return {
                    action: r.action,
                    message: r.message,
                    type: "default",
                    Icon: r.Icon
                };
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && "type" in e) {
                const { type, type: type_1 } = e;
                const i = babelHelpers.objectWithoutPropertiesLoose(e, c);
                return {
                    action: typeof i.action === "function" ? i.action(type, resolvedValue) : i.action,
                    message: typeof i.message === "function" ? i.message(type, resolvedValue) : i.message,
                    type
                };
            }
            if (typeof e === "object" && e !== null || typeof e === "function") {
                const l = babelHelpers.extends({}, (_(e), e));
                return {
                    action: l.action,
                    message: l.message,
                    type: "default",
                    Icon: l.Icon
                };
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(o);
        const { action, message, type } = a;
        const mRef = useRef(null);
        const p = function() {
            action?.onPress();
            onActionClick?.();
        };
        const Component = r("WDSButton.react");
        const action_1 = action != null ? {
            element: <Component ref={mRef} aria-label={action.ariaLabel} aria-live="polite" type="media" size="small" variant="tonal" label={action.label} onPress={p} testid={undefined}/>
        } : undefined;
        const OIcon = o.Icon;
        const y = type === "default" ? OIcon ? <OIcon {...babelHelpers.extends({
            colorName: "contentInverse"
        }, k, {
            xstyle: w.iconSize
        })}/> : null : type === "success" ? f.jsx(r("WDSSpinner.react"), {
            size: 20,
            xstyle: w.spinner,
            morphToIcon: true,
            iconToMorphTo: r("WDSIconIcCheckCircle.react"),
            iconProps: {
                xstyle: w.iconSize,
                colorName: "contentInverse"
            }
        }) : type === "error" ? f.jsx(r("WDSSpinner.react"), {
            size: 20,
            xstyle: w.spinner,
            morphToIcon: true,
            iconToMorphTo: r("WDSIconIcError.react"),
            iconProps: {
                xstyle: w.iconSize,
                colorName: "secondaryNegative"
            }
        }) : type === "loading" ? f.jsx(r("WDSSpinner.react"), {
            size: 20,
            xstyle: w.spinner
        }) : null;
        const C = y != null;
        const v = action != null;
        let S;
        if (!C && !v) {
            S = "none";
        } else if (C && v) {
            S = "both";
        } else if (C) {
            S = "left";
        } else {
            S = "right";
        }
        const container = [
            w.container,
            M[S]
        ];
        const LRef = useRef(null);
        const Component_1 = r("BaseToast.react");
        return <Component_1 toastRef={LRef} onDismiss={r("emptyFunction")} message={function() {
            const Component = r("WDSText.react");
            return <Component colorName="contentInverse" type="Body2Emphasized" preserveNewLines={false}>{message}</Component>;
        }} action={action_1} addOnStart={y} size="fit-content" variant={{
            xstyleConfig: {
                container,
                item: w.item
            }
        }} canBeAutofocused={false}/>;
    }
    OComponent.displayName = `${OComponent.name} [from ${i.id}]`;
    function BComponent({ ref, targetWindow = window }) {
        const a = useState([]);
        const i = a[0];
        const l = a[1];
        const s = useState(false);
        const u = s[0];
        const c = s[1];
        const m = useState(false);
        const p = m[0];
        const _ = m[1];
        const paused = u || p;
        const y = function() {
            return c(true);
        };
        const b = function() {
            return c(false);
        };
        const S = function() {
            return _(true);
        };
        const R = function(t) {
            if ((t.relatedTarget instanceof HTMLElement || t.relatedTarget instanceof targetWindow.window.HTMLElement) && !t.currentTarget.contains(t.relatedTarget)) {
                _(false);
            }
            if (t.relatedTarget == null) {
                _(false);
            }
        };
        const onRemove = useCallback(function(e) {
            l(function(t) {
                return t.map((t)=>{
                    if (t.id === e && !t.removed) {
                        return babelHelpers.extends({}, t, {
                            removed: true
                        });
                    }
                    return t;
                });
            });
        }, []);
        const onCleanup = useCallback(function(e) {
            l(function(t) {
                return t.filter((t)=>t.id !== e);
            });
        }, []);
        const onUpdateType = useCallback(function(e, t, n, resolvedValue) {
            l(function(o) {
                return o.map((o)=>{
                    if (o.id === e && o.type === "loading" && o.process === n) {
                        const a = o.process;
                        const i = babelHelpers.objectWithoutPropertiesLoose(o, d);
                        return babelHelpers.extends({}, i, {
                            type: t,
                            resolvedValue
                        });
                    }
                    return o;
                });
            });
        }, []);
        useImperativeHandle(ref, function() {
            return {
                showToast: function(t) {
                    l(function(e) {
                        const n = t.dedupId == null ? -1 : e.findIndex((e)=>!e.removed && e.dedupId === t.dedupId);
                        let o;
                        let a;
                        if (n === -1) {
                            o = `${r("uniqueID")("toast")}`;
                            a = [].concat(e, [
                                babelHelpers.extends({}, t, {
                                    removed: false,
                                    id: o
                                })
                            ]);
                        } else {
                            o = e[n].id;
                            a = e.map((e, r)=>{
                                if (r === n) {
                                    return babelHelpers.extends({}, t, {
                                        id: e.id,
                                        removed: false,
                                        resolvedValue: e.resolvedValue,
                                        restartedAt: (e.restartedAt ?? 0) + 1
                                    });
                                }
                                return e;
                            });
                        }
                        if (t.isAnchoredToBottom === true) {
                            a = a.map((e)=>{
                                if (e.id !== o && !e.removed && e.isAnchoredToBottom === true) {
                                    return babelHelpers.extends({}, e, {
                                        removed: true
                                    });
                                }
                                return e;
                            });
                        }
                        const i = a.some((e)=>!e.removed && e.isAnchoredToBottom === true) ? 1 : 0;
                        const l = E - i;
                        let s = Math.max(0, a.filter((e)=>!e.removed && e.isAnchoredToBottom !== true).length - l);
                        a = a.map((e)=>{
                            if (s > 0 && !e.removed && e.isAnchoredToBottom !== true) {
                                s -= 1;
                                return babelHelpers.extends({}, e, {
                                    removed: true
                                });
                            }
                            return e;
                        });
                        return a;
                    });
                }
            };
        }, []);
        if (i.length === 0) {
            return null;
        }
        const T = [].concat(i).sort((e, t)=>+(!e.removed && e.isAnchoredToBottom === true) - +(!t.removed && t.isAnchoredToBottom === true));
        return <ul className="x78zum5 xdt5ytf xl56j7k x1qvou4u" aria-live="polite" aria-relevant="additions removals" onMouseEnter={y} onMouseLeave={b} onFocus={S} onBlur={R}>{T.map((item)=><FComponent key={item.id} item={item} onRemove={onRemove} onCleanup={onCleanup} onUpdateType={onUpdateType} paused={paused}/>)}</ul>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    l.WDSToast = OComponent;
    l.WDSToastList = BComponent;
}, 98);