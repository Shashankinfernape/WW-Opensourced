__d("WAWebDesktopSharerContext.react", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebEnvironment",
    "WAWebNoop",
    "WAWebPdfViewerTestIds",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfSharer",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } = m;
    const b = r("JSResourceForInteraction")("WAWebTPReturnPdfHandler").__setRef("WAWebDesktopSharerContext.react");
    const v = 15;
    const sandbox = "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";
    const R = 9999;
    const L = 16;
    const E = {
        viewer: null,
        sessionId: "",
        hide: r("WAWebNoop"),
        destroy: r("WAWebNoop"),
        updatePosition: r("WAWebNoop")
    };
    const k = {
        createSession: function(t, n) {
            n.onViewerReady(E);
            return "";
        },
        destroySession: r("WAWebNoop"),
        hideSession: r("WAWebNoop"),
        updateSessionPosition: r("WAWebNoop")
    };
    const IContext = createContext(k);
    const T = {
        insetInlineStart: "",
        insetInlineEnd: "",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        pointerEvents: "x67bb7w",
        position: "xixxii4",
        zIndex: "x1q2oy4v",
        $$css: true
    };
    const D = {
        sessionContainer: function(t, n, r, o) {
            return [
                T,
                {
                    height: o != null ? "x16ye13r" : o,
                    left: n != null ? "xgq9j65" : n,
                    top: t != null ? "xjbys53" : t,
                    width: r != null ? "x5lhr3w" : r,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(o),
                    "--x-left": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(n),
                    "--x-top": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(r)
                }
            ];
        },
        sessionContainerHidden: {
            height: "xqtp20y",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            visibility: "xlshs6z",
            width: "xnalus7",
            $$css: true
        },
        sessionContainerInlineRadius: {
            borderStartStartRadius: "xbjudin",
            borderStartEndRadius: "xnlwouz",
            borderEndEndRadius: "xpp8er5",
            borderEndStartRadius: "xs9wviy",
            $$css: true
        },
        sessionContainerAppRadius: {
            borderStartStartRadius: "xrlxcrs",
            borderStartEndRadius: "x7g1fbw",
            borderEndEndRadius: "xxl59ln",
            borderEndStartRadius: "xmw6rta",
            $$css: true
        }
    };
    function X1Component({ children }) {
        const a = useState([]);
        const i = a[0];
        const l = a[1];
        const cRef = useRef([]);
        const mRef = useRef(new Map);
        const pRef = useRef(new Map);
        const fRef = useRef(new Map);
        const SRef = useRef(new Map);
        const RRef = useRef(0);
        useEffect(function() {
            const cRef_current = cRef.current;
            const mRef_current = mRef.current;
            const pRef_current = pRef.current;
            const fRef_current = fRef.current;
            const SRef_current = SRef.current;
            return function() {
                for (const a of mRef_current.values()){
                    a.destroy();
                }
                mRef_current.clear();
                pRef_current.clear();
                fRef_current.clear();
                for (const i of SRef_current.values()){
                    i();
                }
                SRef_current.clear();
                cRef_current.length = 0;
            };
        }, []);
        const L = useCallback(function(t) {
            const n = mRef.current.get(t);
            if (n != null) {
                n.destroy();
                mRef.current.delete(t);
            }
            pRef.current.delete(t);
            const r = cRef.current.indexOf(t);
            if (r !== -1) {
                cRef.current.splice(r, 1);
            }
            const a = fRef.current.has(t);
            fRef.current.delete(t);
            const i = SRef.current.get(t);
            SRef.current.delete(t);
            if (a) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebDesktopSharerContext] evicted pending, no iframe ",
                    ""
                ])), t).sendLogs("webtp-desktop-sharer-evict-pending");
            }
            if (i != null) {
                i();
            }
        }, []);
        const E = useCallback(function(e) {
            L(e);
            l(function(t) {
                return t.filter((t)=>t.id !== e);
            });
        }, [
            L
        ]);
        const destroySession = useCallback(function(e) {
            const t = mRef.current.get(e);
            if (t != null) {
                t.destroy();
                mRef.current.delete(e);
            }
            pRef.current.delete(e);
            fRef.current.delete(e);
            SRef.current.delete(e);
            const n = cRef.current.indexOf(e);
            if (n !== -1) {
                cRef.current.splice(n, 1);
            }
            l(function(t) {
                return t.filter((t)=>t.id !== e);
            });
        }, []);
        const hideSession = useCallback(function(e) {
            l(function(t) {
                return t.map((t)=>{
                    if (t.id === e) {
                        return babelHelpers.extends({}, t, {
                            visible: false
                        });
                    }
                    return t;
                });
            });
        }, []);
        const updateSessionPosition = useCallback(function(e, t) {
            l(function(n) {
                return n.map((n)=>{
                    if (n.id === e) {
                        return babelHelpers.extends({}, n, {
                            top: t.top,
                            left: t.left,
                            width: t.width,
                            height: t.height,
                            visible: true
                        });
                    }
                    return n;
                });
            });
        }, []);
        const handleIframeRef = useCallback(function(sessionId, t) {
            const n = pRef.current.get(sessionId);
            if (t == null) {
                const a = mRef.current.get(sessionId);
                if (a != null) {
                    a.destroy();
                    mRef.current.delete(sessionId);
                }
                pRef.current.delete(sessionId);
                return;
            }
            if (!(n === t && mRef.current.has(sessionId))) {
                const i = mRef.current.get(sessionId);
                if (i != null) {
                    i.destroy();
                }
                const viewer = new (o("WAWebTPPdfSharer")).WAWebTPPdfSharer(t);
                mRef.current.set(sessionId, viewer);
                pRef.current.set(sessionId, t);
                b.load();
                viewer.listenForReturnPdf(function({ buffer, fileName }) {
                    b.load().then((e)=>e({
                            buffer,
                            fileName
                        })).catch((e)=>{
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "webtp return-pdf handler failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("webtp-return-pdf-handler-fail");
                    });
                });
                viewer.listenForInactive(function() {
                    E(sessionId);
                });
                const u = fRef.current.get(sessionId);
                fRef.current.delete(sessionId);
                if (u != null) {
                    const c = {
                        viewer,
                        sessionId,
                        hide: function() {
                            return hideSession(sessionId);
                        },
                        destroy: function() {
                            return destroySession(sessionId);
                        },
                        updatePosition: function(n) {
                            return updateSessionPosition(sessionId, n);
                        }
                    };
                    u(c);
                }
            }
        }, [
            hideSession,
            destroySession,
            updateSessionPosition,
            E
        ]);
        const createSession = useCallback(function(e, t) {
            const n = String(RRef.current++);
            fRef.current.set(n, t.onViewerReady);
            if (t.onEvicted != null) {
                SRef.current.set(n, t.onEvicted);
            }
            cRef.current.push(n);
            const r = [];
            for (const o of cRef.current){
                if (cRef.current.length - r.length <= v) {
                    break;
                }
                if (o !== n) {
                    r.push(o);
                }
            }
            l(function(o) {
                const a = o.filter((e)=>!r.includes(e.id));
                a.push({
                    id: n,
                    top: e.top,
                    left: e.left,
                    width: e.width,
                    height: e.height,
                    inline: t.inline === true,
                    visible: true
                });
                return a;
            });
            for (const a of r){
                L(a);
            }
            for (const i of mRef.current.values()){
                i.checkInactive();
            }
            return n;
        }, [
            L
        ]);
        const M = useMemo(function() {
            return {
                createSession,
                destroySession,
                hideSession,
                updateSessionPosition
            };
        }, [
            createSession,
            destroySession,
            hideSession,
            updateSessionPosition
        ]);
        return <IContext.Provider value={M}>{children}<div data-testid={r("WAWebPdfViewerTestIds").SHARER_POOL} className="x47corl">{i.map((e)=><div key={e.id} {...babelHelpers.extends({
                "data-testid": r("WAWebPdfViewerTestIds").SHARER_SESSION_CONTAINER
            }, (u || (u = r("stylex"))).props(D.sessionContainer(e.top, e.left, e.visible ? e.width : 0, e.visible ? e.height : 0), e.inline ? D.sessionContainerInlineRadius : D.sessionContainerAppRadius, !e.visible && D.sessionContainerHidden), {
                children: <Component sessionId={e.id} inline={e.inline} handleIframeRef={handleIframeRef}/>
            })}/>)}</div></IContext.Provider>;
    }
    X1Component.displayName = `${X1Component.name} [from ${i.id}]`;
    function Component(e) {
        const t = o("react-compiler-runtime").c(12);
        const { handleIframeRef, inline, sessionId } = e;
        let l;
        if (t[0] !== handleIframeRef || t[1] !== sessionId) {
            l = function(t) {
                return handleIframeRef(sessionId, t);
            };
            t[0] = handleIframeRef;
            t[1] = sessionId;
            t[2] = l;
        } else {
            l = t[2];
        }
        const s = l;
        let src;
        if (t[3] !== inline) {
            src = inline ? o("WAWebTPFrameUrlBuilder").getWAWebTPPdfInlineSharerUrl() : o("WAWebTPFrameUrlBuilder").getWAWebTPPdfSharerUrl();
            t[3] = inline;
            t[4] = src;
        } else {
            src = t[4];
        }
        const c = inline ? r("WAWebPdfViewerTestIds").EDIT_INLINE_IFRAME : r("WAWebPdfViewerTestIds").EDIT_MODAL_IFRAME;
        let m;
        if (t[5] !== inline) {
            m = ({
                0: {
                    className: "x972fbf x10w94by x1qhh985 x14e42zd x1lliihq x5yr21d xh8yej3 xrlxcrs x7g1fbw xxl59ln xmw6rta"
                },
                1: {
                    className: "x972fbf x10w94by x1qhh985 x14e42zd x1lliihq x5yr21d xh8yej3 xbjudin xnlwouz xpp8er5 xs9wviy"
                }
            })[!!inline << 0];
            t[5] = inline;
            t[6] = m;
        } else {
            m = t[6];
        }
        let p;
        if (t[7] !== s || t[8] !== src || t[9] !== c || t[10] !== m) {
            p = <iframe {...babelHelpers.extends({
                ref: s,
                src,
                sandbox,
                "data-testid": c
            }, m)}/>;
            t[7] = s;
            t[8] = src;
            t[9] = c;
            t[10] = m;
            t[11] = p;
        } else {
            p = t[11];
        }
        return p;
    }
    function PComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_children = e.children;
        if (r("WAWebEnvironment").isWindows) {
            let a;
            if (t[0] !== e_children) {
                a = <X1Component>{e_children}</X1Component>;
                t[0] = e_children;
                t[1] = a;
            } else {
                a = t[1];
            }
            return a;
        }
        let i;
        if (t[2] !== e_children) {
            i = <>{e_children}</>;
            t[2] = e_children;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function useN() {
        return useContext(IContext);
    }
    l.MAX_POOL_SIZE = v;
    l.WAWebDesktopSharerProvider = X1Component;
    l.WAWebDesktopSharerProviderGate = PComponent;
    l.useDesktopSharerContext = useN;
}, 98);