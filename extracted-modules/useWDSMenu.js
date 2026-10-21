__d("useWDSMenu", [
    "BaseContextualLayer.react",
    "WAWebUimUie.react",
    "WDSGlobalContext",
    "WDSMenuContext",
    "react",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } = u;
    const h = {
        menu: {
            zIndex: "xoz0ns6",
            $$css: true
        },
        menuGap: {
            paddingTop: "x1tiyuxx",
            paddingBottom: "x1nbhmlj",
            $$css: true
        }
    };
    const y = {
        LEFT: 0,
        RIGHT: 2
    };
    function C(e, { defaultView }) {
        if (defaultView == null) {
            return e.isConnected;
        }
        const r = e.getBoundingClientRect();
        return r.bottom > 0 && r.right > 0 && r.top < defaultView.innerHeight && r.left < defaultView.innerWidth;
    }
    function b(e, t) {
        const n = document.createElement("div");
        n.style.position = "fixed";
        n.style.left = `${e}px`;
        n.style.top = `${t}px`;
        n.style.width = "0px";
        n.style.height = "0px";
        n.style.pointerEvents = "none";
        return n;
    }
    function useV() {
        const e = useState(null);
        const virtualElement = e[0];
        const n = e[1];
        const rRef = useRef(null);
        const createAndMount = useCallback(function(e, t) {
            const o = b(e, t);
            if (document.body) {
                document.body.appendChild(o);
            }
            rRef.current = o;
            n(o);
            return o;
        }, []);
        const cleanup = useCallback(function() {
            const rRef_current = rRef.current;
            if (rRef_current != null) {
                document.body.removeChild(rRef_current);
                rRef.current = null;
            }
            n(null);
        }, []);
        return {
            virtualElement,
            createAndMount,
            cleanup
        };
    }
    function SComponent({ align, contextMenuArea = false, dismissable = true, enableUIM = true, isContainer = false, menu, onClose, onOpen, ownerDocument, position, positionOnAnyClick = false, repositionOnScroll = false, targetRef } = {}) {
        const w = useId();
        const A = useContext(o("WDSGlobalContext").WDSContext);
        const { closeAllMenus, registerMenu, unregisterMenu } = A;
        const W = useState(false);
        const q = W[0];
        const U = W[1];
        const V = useState(false);
        const isClosing = V[0];
        const G = V[1];
        const zRef = useRef(null);
        const jRef = useRef(null);
        const K = useV();
        const { cleanup, createAndMount, virtualElement } = K;
        function J(e) {
            return e.button === y.RIGHT || e.button === y.LEFT && (e.ctrlKey === true || e.metaKey === true);
        }
        const Z = useCallback(function(e) {
            if (e == null) {
                return null;
            }
            const t = J(e);
            if (positionOnAnyClick && e.clientX != null && e.clientY != null) {
                e.preventDefault();
                return {
                    x: e.clientX,
                    y: e.clientY
                };
            }
            if (t) {
                e.preventDefault();
                return {
                    x: e.clientX,
                    y: e.clientY
                };
            }
            return null;
        }, [
            positionOnAnyClick
        ]);
        const closeMenu = useCallback(function() {
            if (!isClosing) {
                U(function(e) {
                    return e;
                });
                unregisterMenu(w);
                G(true);
                self.setTimeout(function() {
                    U(false);
                    G(false);
                    cleanup();
                    onClose?.();
                }, o("WDSGlobalContext").MENU_EXIT_ANIMATION_DURATION);
            }
        }, [
            w,
            onClose,
            unregisterMenu,
            isClosing,
            cleanup
        ]);
        const te = useCallback(function(e) {
            G(true);
            U(false);
            cleanup();
            window.requestAnimationFrame(function() {
                createAndMount(e.x, e.y);
                G(false);
                U(function(e) {
                    if (!(e || onOpen == null)) {
                        onOpen();
                    }
                    return true;
                });
            });
        }, [
            cleanup,
            createAndMount,
            onOpen
        ]);
        const ne = useCallback(function(e) {
            createAndMount(e.x, e.y);
            G(false);
            U(function(e) {
                if (!e) {
                    registerMenu(w, closeMenu);
                    if (onOpen != null) {
                        onOpen();
                    }
                }
                return true;
            });
        }, [
            createAndMount,
            registerMenu,
            w,
            closeMenu,
            onOpen
        ]);
        const re = useCallback(function() {
            G(false);
            U(function(e) {
                if (!e) {
                    registerMenu(w, closeMenu);
                    if (onOpen != null) {
                        onOpen();
                    }
                }
                return true;
            });
        }, [
            registerMenu,
            w,
            closeMenu,
            onOpen
        ]);
        const openMenu = useCallback(function(e) {
            if (!isClosing) {
                const t = Z(e);
                const n = t != null;
                if (q && n && t != null) {
                    te(t);
                    return;
                }
                closeAllMenus();
                if (n && t != null) {
                    ne(t);
                } else if (targetRef?.current != null) {
                    re();
                }
            }
        }, [
            isClosing,
            Z,
            q,
            te,
            closeAllMenus,
            ne,
            re,
            targetRef
        ]);
        const ae = useCallback(function(e) {
            const zRef_current = zRef.current;
            const o = zRef_current?.ownerDocument?.defaultView ?? self;
            const { Node, Element } = o;
            if (e instanceof Node) {
                if (zRef_current && zRef_current.contains(e)) {
                    return true;
                }
                if (e instanceof Element) {
                    return e.closest("[data-menu-content]") != null;
                }
                return false;
            }
            return false;
        }, []);
        useEffect(function() {
            if (q && dismissable) {
                const e = (t)=>{
                    const r = targetRef?.current;
                    if (r == null || t == null) {
                        return false;
                    }
                    const o = r.ownerDocument?.defaultView?.Node ?? Node;
                    return t instanceof o && r.contains(t);
                };
                const t = function(n) {
                    const n_target = n.target;
                    const r = n != null && J(n);
                    const o = n.button === y.LEFT;
                    if (r) {
                        if (ae(n_target)) {
                            n.preventDefault();
                            n.stopPropagation();
                            return;
                        }
                        if (!e(n_target)) {
                            G(true);
                            closeMenu();
                        }
                        return;
                    }
                    if (o) {
                        if (!(ae(n_target) || !contextMenuArea && e(n_target))) {
                            G(true);
                            closeMenu();
                        }
                    }
                };
                const n = ownerDocument ?? document;
                n.addEventListener("mousedown", t, true);
                const r = ownerDocument != null && ownerDocument !== document;
                if (r) {
                    document.addEventListener("mousedown", t, true);
                }
                return function() {
                    n.removeEventListener("mousedown", t, true);
                    if (r) {
                        document.removeEventListener("mousedown", t, true);
                    }
                };
            }
        }, [
            q,
            dismissable,
            closeMenu,
            targetRef,
            contextMenuArea,
            ae,
            ownerDocument
        ]);
        const ie = useCallback(function(e) {
            e.stopPropagation();
            e.preventDefault();
        }, []);
        const le = useCallback(function(e) {
            const t = e.key.toLowerCase();
            const n = e.ctrlKey || e.metaKey || e.altKey;
            if (!n) {
                if (t === "escape") {
                    ie(e);
                    closeMenu();
                    return;
                }
                if (isContainer) {
                    if ([
                        "arrowup",
                        "arrowdown",
                        "arrowleft",
                        "arrowright",
                        "tab"
                    ].includes(t)) {
                        e.stopPropagation();
                    }
                    return;
                }
                ie(e);
            }
        }, [
            ie,
            closeMenu,
            isContainer
        ]);
        const onContextMenu = useCallback(function(e) {
            e.preventDefault();
        }, []);
        const contextRef = virtualElement ? {
            current: virtualElement
        } : targetRef;
        useEffect(function() {
            if (!(!q || !dismissable)) {
                const e = function(t) {
                    if (!ae(t.target)) {
                        if (repositionOnScroll) {
                            const n = ownerDocument ?? document;
                            const r = virtualElement ?? targetRef?.current;
                            if (r == null || !C(r, n)) {
                                closeMenu();
                                return;
                            }
                            jRef.current?.reposition({
                                autoflip: true
                            });
                            return;
                        }
                        closeMenu();
                    }
                };
                const t = ownerDocument ?? document;
                t.addEventListener("scroll", e, {
                    capture: true,
                    passive: true
                });
                return function() {
                    t.removeEventListener("scroll", e, {
                        capture: true
                    });
                };
            }
        }, [
            closeMenu,
            dismissable,
            ae,
            ownerDocument,
            repositionOnScroll,
            q,
            targetRef,
            virtualElement
        ]);
        const ce = useMemo(function() {
            return {
                isClosing,
                position: position ?? "below",
                align: align ?? "start"
            };
        }, [
            isClosing,
            position,
            align
        ]);
        const Component = o("WDSMenuContext").WDSMenuAnimationContext.Provider;
        const Component_1 = o("react-strict-dom").html.div;
        const Component_2 = o("react-strict-dom").html.div;
        const Component_3 = r("BaseContextualLayer.react");
        const de = q ? <Component_3 contextRef={contextRef} imperativeRef={jRef} xstyle={h.menu} align={align ?? "start"} position={position ?? "below"} ownerDocument={ownerDocument} containFocus><Component_2 style={h.menuGap}><Component_1 ref={zRef} data-menu-content onContextMenu={onContextMenu} onKeyDown={le}><Component value={ce}>{menu}</Component></Component_1></Component_2></Component_3> : null;
        const Component_4 = o("WAWebUimUie.react").UIE;
        const menuPortal = enableUIM && de != null ? <Component_4 displayName="WDSMenu" escapable popable={!isContainer} dismissOnWindowResize requestDismiss={function(t, n) {
            const o = zRef.current?.ownerDocument?.defaultView?.MouseEvent ?? MouseEvent;
            if (!(n instanceof o && ae(n.target))) {
                closeMenu();
            }
        }}><div>{de}</div></Component_4> : de;
        return {
            openMenu,
            closeMenu,
            isMenuOpen: q && !isClosing,
            menuPortal,
            menuRef: zRef
        };
    }
    l.default = SComponent;
}, 98);