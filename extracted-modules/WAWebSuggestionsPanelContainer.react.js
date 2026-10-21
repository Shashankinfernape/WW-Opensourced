__d("WAWebSuggestionsPanelContainer.react", [
    "$InternalEnum",
    "WAWebDropdown.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalFocusState",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useImperativeHandle, useRef, useState } = u;
    const p = {
        container: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            width: "xh8yej3",
            $$css: true
        }
    };
    const _ = n("$InternalEnum").Mirrored([
        "ComposeBox",
        "MediaEditorCaption",
        "MessageEditModal",
        "Menu"
    ]);
    function f(e) {
        const t = o("react-compiler-runtime").c(20);
        const { children, editor, kind, onDismiss, onHide, onToggleVisibility } = e;
        const d = useState(true);
        const f = d[0];
        const h = d[1];
        let y;
        if (t[0] !== onHide || t[1] !== onToggleVisibility) {
            y = function(t) {
                if (t) {
                    if (onToggleVisibility?.(true) === false) {
                        return;
                    }
                    self.setTimeout(function() {
                        return h(true);
                    });
                } else {
                    if (onToggleVisibility?.(false) === false) {
                        return;
                    }
                    h(false);
                    onHide?.();
                }
            };
            t[0] = onHide;
            t[1] = onToggleVisibility;
            t[2] = y;
        } else {
            y = t[2];
        }
        const C = r("useWAWebStableCallback")(y);
        o("useWAWebLexicalFocusState").useLexicalFocusStateListener(editor, C);
        let b;
        if (t[3] !== editor) {
            b = function() {
                editor.focus();
            };
            t[3] = editor;
            t[4] = b;
        } else {
            b = t[4];
        }
        const v = r("useWAWebStableCallback")(b);
        let S;
        if (t[5] !== onDismiss || t[6] !== onHide) {
            S = function() {
                onDismiss();
                onHide?.();
            };
            t[5] = onDismiss;
            t[6] = onHide;
            t[7] = S;
        } else {
            S = t[7];
        }
        const R = S;
        if (kind === _.Menu) {
            let L;
            if (t[8] !== children || t[9] !== v || t[10] !== onDismiss) {
                L = <G36 requestDismiss={onDismiss} requestFocus={v}>{children}</G36>;
                t[8] = children;
                t[9] = v;
                t[10] = onDismiss;
                t[11] = L;
            } else {
                L = t[11];
            }
            return L;
        }
        let E;
        if (t[12] !== children || t[13] !== R || t[14] !== v || t[15] !== kind || t[16] !== f) {
            const Component = o("WAWebUimUie.react").UIE;
            E = f && children != null ? <Component displayName="RichTextInputSuggestions" escapable requestDismiss={R} requestFocus={v} requestRecentFocusOnUnmount={false}><div {...babelHelpers.extends({}, {
                0: {
                    className: "x10l6tqk x1ey2m1c x1o0tod x9f619 xh8yej3 xhjsbib x188jz7k x4py3vj"
                },
                1: {
                    className: "x10l6tqk x1ey2m1c x1o0tod x9f619 xh8yej3 xhjsbib x188jz7k x67bb7w xrlxcrs x7g1fbw x1sr759z"
                }
            }[(kind === _.MediaEditorCaption) << 0], {
                children: [
                    children,
                    <div className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xhtitgo x47corl x14obwa1 xcj5v2p"/>
                ]
            })}/></Component> : null;
            t[12] = children;
            t[13] = R;
            t[14] = v;
            t[15] = kind;
            t[16] = f;
            t[17] = E;
        } else {
            E = t[17];
        }
        let k;
        if (t[18] !== E) {
            const Component = r("WAWebVelocityTransitionGroup");
            k = <Component component="div" xstyle={p.container} transitionName="slide-up">{E}</Component>;
            t[18] = E;
            t[19] = k;
        } else {
            k = t[19];
        }
        return k;
    }
    function G36({ children, requestDismiss, requestFocus }) {
        const lRef = useRef();
        const u = useState(null);
        const anchor = u[0];
        const p = u[1];
        const Component = o("WAWebUimUie.react").UIE;
        const _ = anchor == null || children == null ? null : <Component displayName="RichTextInputSuggestions" escapable requestDismiss={requestDismiss} requestFocus={requestFocus}>{s.jsx(r("WAWebUimUieMenu.react"), {
            contextMenu: {
                menu: <H3Component ref={lRef} initialChildren={children}/>,
                type: o("WAWebDropdown.react").MenuType.Suggestions,
                anchor,
                dirY: o("WAWebDropdown.react").DirY.TOP
            }
        })}</Component>;
        lRef.current?.setChildren(children);
        return <div className="x10l6tqk x13vifvy xh8yej3" ref={p}>{_}</div>;
    }
    G36.displayName = `${G36.name} [from ${i.id}]`;
    function H3Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const { initialChildren, ref } = e;
        const a = useState(initialChildren);
        const i = a[0];
        const l = a[1];
        let u;
        if (t[0] !== i) {
            u = function() {
                return {
                    setChildren: function(t) {
                        if (t !== i) {
                            l(t);
                        }
                    }
                };
            };
            t[0] = i;
            t[1] = u;
        } else {
            u = t[1];
        }
        useImperativeHandle(ref, u);
        let d;
        if (t[2] !== i) {
            d = <>{i}</>;
            t[2] = i;
            t[3] = d;
        } else {
            d = t[3];
        }
        return d;
    }
    l.SuggestionsPanelKind = _;
    l.SuggestionsPanelContainer = f;
}, 98);