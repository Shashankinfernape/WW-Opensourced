__d("WAWebVoipPopoutModalManagerWrapper.react", [
    "WALogger",
    "WAUpperFirst",
    "WAWebFocusTracer",
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebPopover.react",
    "WAWebUimContext",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "WAWebVoipDarkThemeRoot.react",
    "WAWebVoipFullScreenContext",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipUiPopoutWindowContext",
    "react",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebWeakElementRef"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { cloneElement, useCallback, useContext, useRef, useState } = d;
    const h = {
        DEFAULT: "modal",
        NONE: "none"
    };
    const y = "modal";
    const C = "support";
    const b = "media";
    function v({ contextMenuRef, popoverPortalId, type }) {
        const u = useContext(r("WAWebVoipUiPopoutWindowContext"));
        const d = useContext(r("WAWebVoipFullScreenContext"));
        const d_isFullScreen = d.isFullScreen;
        const b = u.documentEl ?? document;
        const vRef = useRef(null);
        const SRef = useRef(false);
        const R = r("useWAWebWeakElementRef")();
        const L = useState();
        const E = L[0];
        const k = L[1];
        const I = r("useWAWebIsKeyboardUser")();
        const I_isKeyboardUser = I.isKeyboardUser;
        const D = useState(undefined);
        const x = D[0];
        const $ = D[1];
        const P = useState(null);
        const N = P[0];
        const M = P[1];
        const w = useState({
            type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
        const focusType = w[0];
        const F = w[1];
        const O = useState(h.DEFAULT);
        const transitionName = O[0];
        const W = O[1];
        const q = useState(undefined);
        const U = q[0];
        const V = q[1];
        const H = useState(false);
        const G = H[0];
        const z = H[1];
        const j = function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[VoipPopoutModalManager] requestFocus called ",
                ""
            ])), type);
            if (vRef.current) {
                const t = vRef.current.getElement();
                if (!(!t || t.contains(b.activeElement))) {
                    r("WAWebFocusTracer").focus(t);
                }
            }
        };
        const requestFocus = function() {
            if (vRef.current) {
                const e = vRef.current.getElement();
                if (e) {
                    r("WAWebFocusTracer").focus(e);
                }
            }
        };
        const Q = (t)=>{
            const n = popoverPortalId ?? o("WAWebPopover.react").ANCHOR_PORTAL_ID;
            return b.getElementById(n)?.contains(t);
        };
        const X = (t)=>{
            const t_relatedTarget = t.relatedTarget;
            const n = contextMenuRef?.current;
            const r = n ? n.isOpen() : false;
            return E ?? (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[VoipPopoutModalManager] forceShouldRequestFocus=null"
            ]))), t_relatedTarget instanceof HTMLElement && !t.currentTarget.contains(t_relatedTarget) && !Q(t_relatedTarget) && !r && SRef.current === false);
        };
        const Y = function(t) {
            if (X(t)) {
                j();
            }
        };
        const J = function(t, n = {}) {
            R.current = I_isKeyboardUser ? b.activeElement || b.body : null;
            let r = n.transition || h.DEFAULT;
            const a = n.focusType ?? {
                type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
            };
            const i = n;
            const { blockClose, uim } = i;
            if (x) {
                r = h.NONE;
            }
            const c = `VoipPopoutModalManager${type}${Date.now()}`;
            let d = t;
            if (type === y) {
                d = cloneElement(t, {
                    requestFocus
                });
            }
            SRef.current = false;
            F(a);
            $(d);
            M(c);
            W(r);
            V(uim);
            z(blockClose ?? false);
        };
        const Z = function(t) {
            t(SRef.current === true ? false : !!x);
        };
        const ee = useCallback(function(e) {
            if (x) {
                $(undefined);
                M(null);
                if (e) {
                    W(e);
                }
                SRef.current = true;
                r("WAWebFocusTracer").focus(R.current);
            }
        }, [
            x,
            R
        ]);
        const te = useCallback(function(e) {
            if (e === N) {
                ee();
                o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.trigger(o("WAWebModalManager").getCloseEventForType(type));
            }
        }, [
            ee,
            N,
            type
        ]);
        const ne = useCallback(function() {
            te(N);
        }, [
            N,
            te
        ]);
        const re = function(t) {
            t(vRef.current?.getElement());
        };
        o("useWAWebListener").useListener(o("WAWebVoipPopoutModalManager").VoipPopoutModalManager, `open_${type}`, J);
        o("useWAWebListener").useListener(o("WAWebVoipPopoutModalManager").VoipPopoutModalManager, `exists_${type}`, Z);
        o("useWAWebListener").useListener(o("WAWebVoipPopoutModalManager").VoipPopoutModalManager, `close_${type}`, ee);
        o("useWAWebListener").useListener(o("WAWebVoipPopoutModalManager").VoipPopoutModalManager, "get_ref", re);
        o("useWAWebListener").useListener(o("WAWebVoipPopoutModalManager").VoipPopoutModalManager, `set_force_should_request_focus_${type}`, k);
        let oe;
        if (x) {
            const Component = r("WAWebVoipDarkThemeRoot.react");
            const ae = <Component>{x}</Component>;
            const ie = d_isFullScreen ? <div className="dark">{ae}</div> : ae;
            const Component_1 = r("WAWebKeyboardRotateFocusModal.react");
            const Component_2 = o("WAWebUimUie.react").UIE;
            oe = <Component_2 key={N} displayName={`VoipPopoutModal${r("WAUpperFirst")(type)}`} escapable={!G} popable={!G} ref={vRef} requestFocus={j} requestDismiss={ne}><Component_1 focusType={focusType} onBlur={Y}>{ie}</Component_1></Component_2>;
        }
        const Component = r("WAWebUimContext").Consumer;
        return <Component>{function(t) {
            const Component = r("WAWebVelocityTransitionGroup");
            const Component_1 = r("WAWebUimContext").Provider;
            return <Component_1 value={U || t}><Component transitionName={transitionName}>{oe}</Component></Component_1>;
        }}</Component>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    l.ModalType = y;
    l.SupportType = C;
    l.MediaType = b;
    l.VoipPopoutModalManagerWrapper = v;
}, 98);