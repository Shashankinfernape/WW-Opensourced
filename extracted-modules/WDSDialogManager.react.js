__d("WDSDialogManager.react", [
    "WAWebUimUie.react",
    "WDSDialogBridge",
    "react",
    "tabbable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useEffect, useRef, useState } = u;
    const _ = "x1k48ry3-B";
    const f = "xg0bqix-B";
    const g = "x18re5ia-B";
    const h = "x1jn504y-B";
    function y() {
        const e = useState(null);
        const t = e[0];
        const n = e[1];
        const r = useState(false);
        const a = r[0];
        const i = r[1];
        const lRef = useRef(false);
        const uRef = useRef(null);
        const _RefRef = useRef(null);
        const fRef = useRef(null);
        const requestDismiss = useCallback(function() {
            if (!lRef.current) {
                lRef.current = true;
                i(true);
                uRef.current = self.setTimeout(function() {
                    n(null);
                    i(false);
                    lRef.current = false;
                    uRef.current = null;
                    fRef.current?.focus();
                    fRef.current = null;
                }, o("WDSDialogBridge").DIALOG_EXIT_ANIMATION_DURATION);
            }
        }, []);
        useEffect(function() {
            const e = function(t) {
                if (uRef.current != null) {
                    self.clearTimeout(uRef.current);
                    uRef.current = null;
                }
                lRef.current = false;
                i(false);
                n(t);
            };
            const t = o("WDSDialogBridge").registerDialogManager(e, requestDismiss);
            return function() {
                t();
                if (uRef.current != null) {
                    self.clearTimeout(uRef.current);
                }
            };
        }, [
            requestDismiss
        ]);
        useEffect(function() {
            const _Ref_current = _RefRef.current;
            if (!(t == null || _Ref_current == null)) {
                fRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                const n = o("tabbable").tabbable(_Ref_current);
                if (n.length > 0) {
                    n[0].focus();
                } else {
                    _Ref_current.focus();
                }
            }
        }, [
            t
        ]);
        const h = useCallback(function(e) {
            if (!(e.key !== "Tab" || e.metaKey || e.ctrlKey)) {
                const t = _RefRef.current;
                if (t != null) {
                    const n = o("tabbable").tabbable(t);
                    if (n.length === 0) {
                        e.preventDefault();
                        return;
                    }
                    const r = n[0];
                    const a = n[n.length - 1];
                    if (e.shiftKey && document.activeElement === r) {
                        e.preventDefault();
                        a.focus();
                    } else if (!e.shiftKey && document.activeElement === a) {
                        e.preventDefault();
                        r.focus();
                    }
                }
            }
        }, []);
        if (t == null) {
            return null;
        }
        const Component = o("WAWebUimUie.react").UIE;
        return <div className="x6s0dn4 x78zum5 x5yr21d x1o0tod xl56j7k x1a2a7pz xixxii4 x13vifvy xh8yej3 x1f9r2xx" aria-modal onKeyDown={h} ref={_RefRef} role="dialog" tabIndex={-1}><div {...babelHelpers.extends({}, {
            0: {
                className: "x1honnu5 x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3 x5hsz1j x10e4vud xqcmdr3 xa3vuyk"
            },
            1: {
                className: "x1honnu5 x5yr21d x1o0tod x10l6tqk x13vifvy xh8yej3 xtsvl71 x10e4vud xxp0q0x xn0cd8s"
            }
        }[!!a << 0])}/><Component displayName="WDSDialog" escapable popable dismissOnWindowResize requestDismiss={requestDismiss}><div {...babelHelpers.extends({}, {
            0: {
                className: "x1n2onr6 x1vjfegm x5hsz1j x10e4vud x97zbip xa3vuyk"
            },
            1: {
                className: "x1n2onr6 x1vjfegm xtsvl71 x10e4vud x1ddemy6 xn0cd8s"
            }
        }[!!a << 0], {
            children: t
        })}/></Component></div>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    l.default = y;
}, 98);