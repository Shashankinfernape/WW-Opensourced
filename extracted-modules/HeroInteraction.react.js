__d("HeroInteraction.react", [
    "HeroLogger",
    "HeroPagelet.react",
    "HeroTracingCoreConfig",
    "HeroTracingCoreDependencies",
    "HeroTracingPlatformDependencies",
    "HeroTracingPlatformDependenciesType",
    "HiddenSubtreePassiveContext",
    "Promise",
    "PromiseAnnotate",
    "RelayProfilerContext",
    "clearImmediate",
    "foregroundRequestAnimationFrame",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "objectEntries",
    "objectValues",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "setImmediateAcrossTransitions",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = m;
    const { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef } = _;
    const v = r("HeroTracingCoreConfig").enableRemountCompletionContinuation === undefined ? false : r("HeroTracingCoreConfig").enableRemountCompletionContinuation;
    const S = r("HeroTracingCoreConfig").fixParentInteractionIdWhenCancel === undefined ? false : r("HeroTracingCoreConfig").fixParentInteractionIdWhenCancel;
    const R = "root";
    const L = new WeakSet;
    function E(e, t, n) {
        o("HeroLogger").markStart(e, t);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.markPlaceholderStart(e, t, (d || (d = r("performanceNow")))(), n, "SuspensePromise");
    }
    function k(e, t, n, a, i) {
        o("HeroLogger").markStartPlaceholder(e, t, undefined, n, a, i);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.markPlaceholderStart(e, t, (d || (d = r("performanceNow")))(), a, "PlaceholderWait");
    }
    function I(e, t, n, a) {
        o("HeroLogger").markEnd(e, n, "SuspensePromise", `Promise Wait: ${a}`, t, undefined, undefined, "Placeholder");
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.markPlaceholderEnd(e, t, a, (d || (d = r("performanceNow")))());
    }
    function T(e, placeholderUUID, n, a) {
        o("HeroLogger").markEndPlaceholder(e, n, "PlaceholderWait", `Placeholder Wait: ${a}`, placeholderUUID, {
            placeholderUUID
        }, undefined);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.markPlaceholderEnd(e, placeholderUUID, a, (d || (d = r("performanceNow")))());
    }
    function D(queries, t, n) {
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroRelay(t, {
            pageletStack: n,
            queries
        });
        for (const a of queries){
            if (!(a.isExecTime && a.flushes.length === 0)) {
                o("HeroLogger").measure(t, n, "Relay", a.name, a.start, a.end, {
                    full_duration: ((a.end ?? (d || (d = r("performanceNow")))()) - a.start) / 1000,
                    is_preloaded: a.isPreloaded === true,
                    networkStart: a.networkStart / 1000,
                    networkDuration: a.end != null ? (a.end - a.networkStart) / 1000 : 0
                });
                for(let l = 0; l < a.flushes.length; l++){
                    const flush = a.flushes[l];
                    o("HeroLogger").measure(t, n, "RelayFlush", `${a.name}(${flush.label})`, a.start, flush.time, {
                        flush: flush.label,
                        queryName: a.name,
                        full_duration: (flush.time - a.start) / 1000,
                        is_preloaded: a.isPreloaded === true
                    });
                }
            }
        }
    }
    function x(e, t, pageletStack) {
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroBootload(t, {
            moduleIDs: Array.from(e),
            pageletStack
        });
    }
    function $(e) {
        if (!e) {
            return "No placeholder";
        }
        const t = e.boundaryName != null ? `@${e.boundaryName}` : "";
        const n = o("hero-tracing-placeholder").HeroPlaceholderUtils.createThenableDescription(e.thenables) || "No Promises";
        return n + t;
    }
    function P(e, t) {
        if (e == null) {
            return null;
        }
        const n = {
            commitCount: 0,
            lastBaseDuration: 0,
            maxBaseDuration: 0,
            totalActualDuration: 0,
            totalCommitDuration: 0,
            totalPostCommitDuration: 0,
            zeroDurationCommitCount: 0,
            zeroDurationPostCommitCount: 0
        };
        for (const [a, i] of r("objectEntries")(e)){
            if (a > t) {
                break;
            }
            const l = i.actualDuration;
            const s = l === undefined ? 0 : l;
            const u = i.baseDuration;
            const c = u === undefined ? 0 : u;
            const d = i.commitDuration;
            const m = d === undefined ? 0 : d;
            const p = i.postCommitDuration;
            const _ = p === undefined ? 0 : p;
            n.commitCount++;
            if (i.commitDuration === 0) {
                n.zeroDurationCommitCount++;
            }
            if (i.postCommitDuration === 0) {
                n.zeroDurationPostCommitCount++;
            }
            n.maxBaseDuration = Math.max(n.maxBaseDuration, c);
            n.lastBaseDuration = c;
            n.totalActualDuration += s;
            n.totalCommitDuration += m;
            n.totalPostCommitDuration += _;
        }
        return n;
    }
    const N = new Set;
    const M = new Map;
    function w(unmountCleanupHandoffKey, __interactionUUID) {
        if (unmountCleanupHandoffKey == null || __interactionUUID == null) {
            return null;
        }
        return `${unmountCleanupHandoffKey}::${__interactionUUID}`;
    }
    function A(e) {
        if (e == null) {
            return false;
        }
        for (const t of M.keys()){
            if (t.endsWith(`::${e}`)) {
                return true;
            }
        }
        return false;
    }
    function F(e) {
        if (e != null) {
            r("clearImmediate")(e);
        }
    }
    function O(e) {
        if (e == null) {
            return false;
        }
        const t = M.get(e);
        if (t == null) {
            return false;
        }
        F(t);
        M.delete(e);
        return true;
    }
    function B(e) {
        return r("setImmediateAcrossTransitions")(e);
    }
    function W(e, t) {
        O(e);
        var n = B(function() {
            if (M.get(e) === n) {
                M.delete(e);
            }
            t();
        });
        M.set(e, n);
    }
    function useQ(e) {
        const t = o("react-compiler-runtime").c(16);
        const { currentInteractionRef, handoffIDRef, shouldDeferRef } = e;
        const iRef = useRef(null);
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                iRef.current = null;
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        const clearCompletionBlock = l;
        let u;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = function(t) {
                return iRef.current === t;
            };
            t[1] = u;
        } else {
            u = t[1];
        }
        const isCompletionBlockedForRemount = u;
        let d;
        if (t[2] !== handoffIDRef || t[3] !== shouldDeferRef) {
            d = function(t) {
                if (!v || handoffIDRef.current == null || shouldDeferRef.current?.() !== true) {
                    return false;
                }
                const e = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(t);
                return e != null && e.completed == null;
            };
            t[2] = handoffIDRef;
            t[3] = shouldDeferRef;
            t[4] = d;
        } else {
            d = t[4];
        }
        const m = d;
        let p;
        if (t[5] !== m) {
            p = function(t) {
                if (m(t)) {
                    iRef.current = t;
                }
            };
            t[5] = m;
            t[6] = p;
        } else {
            p = t[6];
        }
        const blockCompletionForRemount = p;
        let f;
        if (t[7] !== blockCompletionForRemount || t[8] !== currentInteractionRef) {
            f = function() {
                const currentInteractionRef_current = currentInteractionRef.current;
                if (currentInteractionRef_current != null) {
                    blockCompletionForRemount(currentInteractionRef_current.interactionUUID);
                }
            };
            t[7] = blockCompletionForRemount;
            t[8] = currentInteractionRef;
            t[9] = f;
        } else {
            f = t[9];
        }
        const blockCompletionForCurrentRemount = f;
        let h;
        if (t[10] !== currentInteractionRef) {
            h = function(t) {
                const currentInteractionRef_current = currentInteractionRef.current;
                if (!(currentInteractionRef_current == null || iRef.current !== currentInteractionRef_current.interactionUUID)) {
                    iRef.current = null;
                    t();
                }
            };
            t[10] = currentInteractionRef;
            t[11] = h;
        } else {
            h = t[11];
        }
        const releaseCompletionForCurrentRemount = h;
        let C;
        if (t[12] !== blockCompletionForCurrentRemount || t[13] !== blockCompletionForRemount || t[14] !== releaseCompletionForCurrentRemount) {
            C = {
                blockCompletionForCurrentRemount,
                blockCompletionForRemount,
                clearCompletionBlock,
                isCompletionBlockedForRemount,
                releaseCompletionForCurrentRemount
            };
            t[12] = blockCompletionForCurrentRemount;
            t[13] = blockCompletionForRemount;
            t[14] = releaseCompletionForCurrentRemount;
            t[15] = C;
        } else {
            C = t[15];
        }
        return C;
    }
    function HeroInteraction(t) {
        const t_ref = t.ref;
        const _ = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const v = useContext(o("hero-tracing-placeholder").HeroInteractionContext.Context);
        const N = useContext(o("hero-tracing-placeholder").HeroInteractionIDContext);
        const MRef = useRef(null);
        const FRef = useRef(null);
        const U = useContext(r("HiddenSubtreePassiveContext"));
        const interactionDesc = _.interactionDesc ?? "No Description";
        const __interactionUUID = _.interactionUUID;
        const G = _.pageletName ?? R;
        const zRef = useRef(_.shouldDeferUnmountCleanup);
        const jRef = useRef(_.preserveInteractionOnRemount);
        const K = w(_.unmountCleanupHandoffKey, __interactionUUID);
        const QRef = useRef(K);
        useLayoutEffect(function() {
            zRef.current = _.shouldDeferUnmountCleanup;
            jRef.current = _.preserveInteractionOnRemount;
            QRef.current = K;
        }, [
            _.shouldDeferUnmountCleanup,
            _.preserveInteractionOnRemount,
            K
        ]);
        const XRef = useRef({});
        const YRef = useRef({});
        const JRef = useRef({});
        const ZRef = useRef(null);
        const eeRef = useRef(N);
        const te = useQ({
            currentInteractionRef: ZRef,
            handoffIDRef: QRef,
            shouldDeferRef: zRef
        });
        const { blockCompletionForCurrentRemount, blockCompletionForRemount, clearCompletionBlock, isCompletionBlockedForRemount, releaseCompletionForCurrentRemount } = te;
        const le = r("useStable")(o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID);
        const se = useMemo(function() {
            return [].concat(v.pageletStack, [
                G
            ]);
        }, [
            v.pageletStack,
            G
        ]);
        const ueRef = useRef([]);
        const ceRef = useRef(new Set);
        const de = useCallback(function() {
            return r("objectValues")(XRef.current).some((e)=>e.shouldHold);
        }, []);
        const me = useCallback(function(e, t, n) {
            if (FRef.current !== e && MRef.current == null && !U.getCurrentState().hidden && !isCompletionBlockedForRemount(e) && !de()) {
                MRef.current = o("foregroundRequestAnimationFrame").foregroundRequestAnimationFrame(function() {
                    MRef.current = null;
                    if (!U.getCurrentState().hidden && FRef.current !== e && !isCompletionBlockedForRemount(e) && !de()) {
                        FRef.current = e;
                        if (n !== e) {
                            o("HeroLogger").endHeroInteraction(e, se, "SUCCESS");
                        }
                        if (n != null) {
                            v.unhold(n, `${n}_${le}`);
                        }
                        D(ueRef.current, e, se);
                        x(ceRef.current, e, se);
                        ueRef.current = [];
                        ceRef.current = new Set;
                    }
                });
            }
        }, [
            U,
            v,
            le,
            se,
            de,
            isCompletionBlockedForRemount
        ]);
        if (__interactionUUID != null) {
            const pe = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(__interactionUUID);
            if (pe != null && pe.completed == null) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addFirstMarkerPoint(__interactionUUID, "HeroTrace_start", "AppTiming", (d || (d = r("performanceNow")))());
            }
        }
        const _e = useCallback(function() {
            const ZRef_current = ZRef.current;
            if (ZRef_current != null) {
                me(ZRef_current.interactionUUID, ZRef_current.interactionDesc, eeRef.current);
            }
        }, [
            me
        ]);
        const fe = useCallback(function(e, t, n) {
            const ZRef_current = ZRef.current;
            if (ZRef_current != null && FRef.current !== ZRef_current.interactionUUID) {
                const i = jRef.current === true && t === "New Interaction" && e !== null && ZRef_current.interactionUUID === e.interactionUUID;
                const l = S ? eeRef.current : n;
                if (l != null) {
                    v.unhold(l, `${l}_${le}`);
                }
                if (r("HeroTracingCoreConfig").removeHoldOnParentContextOnNewInteraction) {
                    v.unhold(ZRef_current.interactionUUID, `${ZRef_current.interactionUUID}_${le}`);
                }
                if (!i) {
                    if (l !== ZRef_current.interactionUUID) {
                        o("HeroLogger").endHeroInteraction(ZRef_current.interactionUUID, se, "ABORT", t);
                    } else if (l != null) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(l, "childInteractionAborted", 1);
                    }
                }
                if (e !== null && ZRef_current.interactionUUID === e.interactionUUID) {
                    o("HeroLogger").genHeroInteractionUUIDAndMarkStart(e.interactionUUID);
                }
            }
            if (ZRef_current != null) {
                D(ueRef.current, ZRef_current.interactionUUID, se);
                x(ceRef.current, ZRef_current.interactionUUID, se);
            }
            ueRef.current = [];
            ceRef.current = new Set;
            FRef.current = null;
            clearCompletionBlock();
            if (MRef.current) {
                MRef.current();
            }
            MRef.current = null;
            ZRef.current = e;
            eeRef.current = n;
            if (e !== null) {
                blockCompletionForRemount(e.interactionUUID);
                if (n != null) {
                    v.hold(n, se, `Sub Interaction:${e.interactionDesc}`, `${n}_${le}`);
                }
            }
        }, [
            blockCompletionForRemount,
            clearCompletionBlock,
            v,
            le,
            se
        ]);
        const geRef = useRef(null);
        const he = useCallback(function(e) {
            const QRef_current = QRef.current;
            if (QRef_current != null) {
                const n = O(QRef_current);
                if (!(!n && A(e))) {
                    releaseCompletionForCurrentRemount(_e);
                }
            }
        }, [
            releaseCompletionForCurrentRemount,
            _e
        ]);
        useEffect(function() {
            he(__interactionUUID);
        }, [
            he,
            __interactionUUID
        ]);
        useEffect(function() {
            return function() {
                const e = function() {
                    return fe(null, "Unmount", eeRef.current);
                };
                const t = zRef.current?.() === true;
                if (t) {
                    const n = QRef.current;
                    if (n == null) {
                        geRef.current = B(e);
                    } else {
                        blockCompletionForCurrentRemount();
                        W(n, e);
                    }
                } else {
                    e();
                }
            };
        }, [
            blockCompletionForCurrentRemount,
            fe
        ]);
        useLayoutEffect(function() {
            if (!(r("HeroTracingCoreConfig").enableResetCompletedFix === true && __interactionUUID != null && o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(__interactionUUID)?.completed != null)) {
                let t = null;
                if (__interactionUUID != null) {
                    t = {
                        interactionDesc,
                        interactionUUID: __interactionUUID
                    };
                }
                fe(t, "New Interaction", N);
                if (__interactionUUID != null) {
                    me(__interactionUUID, interactionDesc, N);
                }
            }
        }, [
            interactionDesc,
            __interactionUUID,
            N,
            fe,
            me
        ]);
        useLayoutEffect(function() {
            if (__interactionUUID != null) {
                let e = U.getCurrentState().hidden;
                let t = U.getCurrentState().backgrounded;
                const n = U.subscribeToChanges(function({ hidden, backgrounded }) {
                    const i = e;
                    const l = t;
                    e = hidden;
                    t = backgrounded;
                    if (i !== hidden && hidden) {
                        fe({
                            interactionDesc,
                            interactionUUID: __interactionUUID
                        }, "Hidden", N);
                    } else if (i && !hidden || l && !backgrounded) {
                        const s = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(__interactionUUID);
                        if (s != null && s.completed == null && FRef.current === __interactionUUID) {
                            FRef.current = null;
                        }
                        me(__interactionUUID, interactionDesc, N);
                    }
                });
                if (__interactionUUID != null) {
                    me(__interactionUUID, interactionDesc, N);
                }
                return function() {
                    return n.remove();
                };
            }
        }, [
            U,
            __interactionUUID,
            interactionDesc,
            fe,
            me,
            N
        ]);
        const ye = useMemo(function() {
            var e = {
                consumeBootload: function(t) {
                    ceRef.current.add(t);
                },
                hold: function(r, a, i = "Hold", l, u) {
                    const t = l ?? o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID();
                    const d = new (s || (s = n("Promise")))(function() {});
                    (c || (c = o("PromiseAnnotate"))).setDisplayName(d, i);
                    e.suspenseCallback(r, t, a, new Set([
                        d
                    ]), u);
                    e.registerPlaceholder(r, t, a);
                    return t;
                },
                logHeroRender: function(t, n, r) {},
                logMetadata: function(t, n, r) {
                    const o = r[r.length - 1];
                    const a = YRef.current[o] ?? Object.create(null);
                    if (n != null) {
                        a[t] = n;
                    } else {
                        delete a[t];
                    }
                    YRef.current[o] = a;
                },
                logPageletVC: function(t, n, r, a, i) {
                    const e = i[i.length - 1];
                    const l = YRef.current[e];
                    let s = l != null ? babelHelpers.extends({}, l) : undefined;
                    if (s) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMountPointMetadata(t, e, s);
                    }
                    if (a != null) {
                        o("HeroLogger").measure(t, [].concat(i), "VCWithoutImage", `VCWithoutImage: ${i[i.length - 1]}`, Math.min(n, a), a, s);
                    }
                    if (r != null) {
                        s = Object.assign(s ?? babelHelpers.extends({}, null), P(JRef.current[e], r));
                        JRef.current[e] = {};
                        o("HeroLogger").measure(t, [].concat(i), "VC", `VC: ${i[i.length - 1]}`, Math.min(n, r), r, s);
                    }
                },
                logReactCommit: function(t, n, o, a, i, l, s) {
                    if ((u || (u = r("HeroTracingCoreDependencies"))).UserTimingUtils != null) {
                        (u || (u = r("HeroTracingCoreDependencies"))).UserTimingUtils.measureReactCommit(n, i, a);
                    }
                    if (FRef.current !== t && l) {
                        const d = s[s.length - 1];
                        const m = JRef.current[d] ?? Object.create(null);
                        const p = m[i] ?? Object.create(null);
                        p.commitDuration = a;
                        m[i] = p;
                        JRef.current[d] = m;
                    }
                },
                logReactPostCommit: function(t, n, o, a, i, l, s) {
                    if ((u || (u = r("HeroTracingCoreDependencies"))).UserTimingUtils != null) {
                        (u || (u = r("HeroTracingCoreDependencies"))).UserTimingUtils.measureReactPostCommit(n, a);
                    }
                    if (FRef.current !== t && l) {
                        const d = s[s.length - 1];
                        const m = JRef.current[d] ?? Object.create(null);
                        const p = m[i] ?? Object.create(null);
                        p.postCommitDuration = a;
                        m[i] = p;
                        JRef.current[d] = m;
                    }
                },
                logReactRender: function(t, n, r, a, i, actualDuration, baseDuration, u, c) {
                    if (FRef.current !== t && (o("HeroLogger").measure(t, [].concat(c), "ReactRender", `ReactRender: ${n}`, a, i, {
                        actualDuration,
                        baseDuration,
                        phase: r
                    }), u)) {
                        const m = c[c.length - 1];
                        const p = JRef.current[m] ?? Object.create(null);
                        const _ = p[i] ?? Object.create(null);
                        _.actualDuration = actualDuration;
                        _.baseDuration = baseDuration;
                        p[i] = _;
                        JRef.current[m] = p;
                    }
                },
                pageletStack: v.pageletStack,
                registerPlaceholder: function(t, n, r) {
                    const e = XRef.current[n];
                    if (MRef.current) {
                        MRef.current();
                    }
                    MRef.current = null;
                    if (e != null) {
                        e.shouldHold = true;
                        return;
                    }
                    const thenables = new Set;
                    XRef.current[n] = {
                        pageletStack: r,
                        shouldHold: true,
                        thenables
                    };
                    k(t, n, r, $(XRef.current[n]), t);
                },
                removePlaceholder: function(t, n) {
                    const e = XRef.current[n] != null;
                    if (e) {
                        const r = XRef.current[n];
                        delete XRef.current[n];
                        _e();
                        T(t, n, r.pageletStack, $(r));
                    }
                },
                suspenseCallback: function(t, n, r, thenables, boundaryName) {
                    const l = XRef.current[n];
                    const s = {
                        boundaryName,
                        pageletStack: r,
                        shouldHold: l?.shouldHold ?? false,
                        thenables
                    };
                    XRef.current[n] = s;
                    const u = $(s);
                    if (l == null) {
                        k(t, n, r, u);
                    }
                    thenables.forEach((e)=>{
                        if (!L.has(e)) {
                            L.add(e);
                            const a = (c || (c = o("PromiseAnnotate"))).getDisplayName(e) ?? "Promise";
                            const i = o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID();
                            E(t, i, a);
                            e.then(()=>{
                                I(t, i, r, a);
                            });
                        }
                    });
                    const d = $(l);
                    if (l != null && u !== d) {
                        T(t, n, r, d);
                        k(t, n, r, u);
                    }
                },
                unhold: function(n, r) {
                    e.removePlaceholder(n, r);
                }
            };
            return e;
        }, [
            v.pageletStack,
            _e
        ]);
        const Ce = useMemo(function() {
            return {
                consumeBootload: function(t) {
                    ceRef.current.add(t);
                },
                retainQuery: function(t) {
                    ueRef.current.push(t);
                },
                wrapPrepareQueryResource: function(t) {
                    return t();
                }
            };
        }, []);
        const be = o("HeroTracingPlatformDependenciesType").getHeroInteractionHostInstanceProps(_);
        const Component = r("HeroPagelet.react");
        const Component_1 = r("RelayProfilerContext").Provider;
        const Component_2 = o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext.Provider;
        const Component_3 = o("hero-tracing-placeholder").HeroInteractionIDContext.Provider;
        const Component_4 = o("hero-tracing-placeholder").HeroInteractionContext.Context.Provider;
        return <Component_4 value={ye}><Component_3 value={__interactionUUID}><Component_2 value={ZRef}><Component_1 value={Ce}><Component isMutationRoot name={G} observeTextMutation={_.observeTextMutation} ref={t_ref} alwaysMarkMutationRootAsVisualChange={_.alwaysMarkMutationRootAsVisualChange ?? r("HeroTracingCoreConfig").alwaysMarkMutationRootAsVisualChange}>{function(t, N1) {
            if (_.renderTrackedDOMElement) {
                return <>{_.renderTrackedDOMElement(t, _.children)}<N1/></>;
            }
            return p.jsxs(r("HeroTracingPlatformDependencies").HostInstanceTrackableComponent, babelHelpers.extends({}, be, {
                ref: t,
                children: [
                    <N1/>,
                    _.children
                ]
            }));
        }}</Component></Component_1></Component_2></Component_3></Component_4>;
    }
    HeroInteraction.displayName = `${HeroInteraction.name} [from ${i.id}]`;
    HeroInteraction.displayName = "HeroInteraction";
    l.default = HeroInteraction;
}, 98);