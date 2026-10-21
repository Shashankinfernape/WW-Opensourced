__d("WAWebModalManagerImplWrapper.react", [
    "WALogger",
    "WAUpperFirst",
    "WAWebDrawerManagerContext",
    "WAWebFocusTracer",
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebPopover.react",
    "WAWebUimContext",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "uniqueID",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebWeakElementRef"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { cloneElement, useRef, useState } = d;
    const f = {
        DEFAULT: "modal",
        NONE: "none"
    };
    const g = "modal";
    const h = "media";
    const y = "alert";
    const C = "support";
    function BComponent(t) {
        let n;
        let a;
        const { contextMenuRef, type } = t;
        const uRef = useRef(null);
        const dRef = useRef(false);
        const h = r("useWAWebWeakElementRef")();
        const y = useState();
        const C = y[0];
        const b = y[1];
        const v = r("useWAWebIsKeyboardUser")();
        const v_isKeyboardUser = v.isKeyboardUser;
        const R = useState(undefined);
        const L = R[0];
        const E = R[1];
        const k = useState(null);
        const I = k[0];
        const T = k[1];
        const D = useState({
            type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
        const focusType = D[0];
        const $ = D[1];
        const P = useState(f.DEFAULT);
        const transitionName = P[0];
        const M = P[1];
        const w = useState(undefined);
        const A = w[0];
        const F = w[1];
        const O = useState(false);
        const B = O[0];
        const W = O[1];
        const q = (t)=>{
            const e = t.querySelector('[role="dialog"]');
            if (e instanceof HTMLElement) {
                return e;
            }
            return t;
        };
        const requestFocus_1 = function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ModalManager][requestFocus] focus on ",
                " called"
            ])), type);
            if (uRef.current) {
                const t = uRef.current.getElement();
                if (!(!t || t.contains(document.activeElement))) {
                    r("WAWebFocusTracer").focus(q(t));
                }
            }
        };
        const requestFocus = function() {
            if (uRef.current) {
                const e = uRef.current.getElement();
                if (e) {
                    r("WAWebFocusTracer").focus(q(e));
                }
            }
        };
        const H = (t)=>document.getElementById(o("WAWebPopover.react").ANCHOR_PORTAL_ID)?.contains(t) || t.closest('[role="menu"]') != null;
        const G = ()=>{
            if (type !== g) {
                return false;
            }
            let e = false;
            o("WAWebModalManager").ModalManager.existsSupportModal(function(t) {
                e = t;
            });
            return e;
        };
        const z = (t)=>{
            const t_relatedTarget = t.relatedTarget;
            const n = contextMenuRef?.current;
            const r = n ? n.isOpen() : false;
            return C ?? (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[ModalManager][requestFocus]: forceShouldRequestFocus = null"
            ]))), t_relatedTarget instanceof HTMLElement && !t.currentTarget.contains(t_relatedTarget) && !H(t_relatedTarget) && !r && !G() && dRef.current === false);
        };
        const onBlur = function(t) {
            if (z(t)) {
                requestFocus_1();
            }
        };
        const K = function(t, n = {}) {
            h.current = v_isKeyboardUser ? document.activeElement || document.body : null;
            let a = n.transition || f.DEFAULT;
            const i = n.focusType ?? {
                type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
            };
            const s = n;
            const { blockClose, uim } = s;
            if (L) {
                a = f.NONE;
            }
            const p = r("uniqueID")(`ModalManager${type}`);
            let _ = t;
            if (type === g) {
                _ = cloneElement(t, {
                    requestFocus
                });
            }
            dRef.current = false;
            $(i);
            E(_);
            T(p);
            M(a);
            F(uim);
            W(blockClose ?? false);
        };
        const Q = function(t) {
            t(dRef.current === true ? false : !!L);
        };
        const X = function(t) {
            if (L) {
                E(undefined);
                T(null);
                if (t) {
                    M(t);
                }
                dRef.current = true;
                const e = h.current;
                r("WAWebFocusTracer").focus(e instanceof HTMLElement || e instanceof SVGElement ? e : null);
            }
        };
        const Y = (t)=>{
            if (t === I) {
                X();
                o("WAWebModalManager").ModalManager.trigger(o("WAWebModalManager").getCloseEventForType(type));
            }
        };
        const J = function(t) {
            t(uRef.current?.getElement());
        };
        (n = o("useWAWebListener")).useListener((a = o("WAWebModalManager")).ModalManager, `open_${type}`, K);
        n.useListener(a.ModalManager, `exists_${type}`, Q);
        n.useListener(a.ModalManager, `close_${type}`, X);
        n.useListener(a.ModalManager, "get_ref", J);
        n.useListener(a.ModalManager, `set_force_should_request_focus_${type}`, b);
        let Z;
        if (L) {
            const Component = r("WAWebKeyboardRotateFocusModal.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            Z = <Component_1 key={I} displayName={`Modal${r("WAUpperFirst")(t.type)}`} escapable={!B} ref={uRef} requestFocus={requestFocus_1} requestDismiss={function() {
                return Y(I);
            }}><Component focusType={focusType} onBlur={onBlur}>{L}</Component></Component_1>;
        }
        const Component = r("WAWebUimContext").Consumer;
        const Component_1 = o("WAWebDrawerManagerContext").DrawerManagerGlobalBridgeProvider;
        return <Component_1><Component>{function(t) {
            const Component = r("WAWebVelocityTransitionGroup");
            const Component_1 = r("WAWebUimContext").Provider;
            return <Component_1 value={A || t}><Component transitionName={transitionName}>{Z}</Component></Component_1>;
        }}</Component></Component_1>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    l.ModalType = g;
    l.MediaType = h;
    l.AlertType = y;
    l.SupportType = C;
    l.ModalManagerImplWrapper = BComponent;
}, 98);