__d("WAWebToast.react", [
    "WAWebAccessibility.react",
    "WAWebFbtCommon",
    "WAWebFocusTracer",
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "WAWebToastManager",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "uniqueID",
    "useLazyRef",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect: m, useImperativeHandle: p, useRef: _ } = d;
    const f = {
        marginInlineStart15: {
            marginInlineStart: "xx6jrq6",
            $$css: true
        }
    };
    const g = 4000;
    const h = {
        btnSuccess: {
            color: "x1du590y",
            fontWeight: "x117nqv4",
            $$css: true
        },
        button: {
            color: "x17daq4n",
            cursor: "x1ypdohk",
            fontSize: "x1f6kntn",
            lineHeight: "x1evy7pa",
            flexShrink: "x2lah0s",
            ":focus-visible_borderStartStartRadius": "xfuo7wg",
            ":focus-visible_borderStartEndRadius": "xepj7l6",
            ":focus-visible_borderEndEndRadius": "x1911790",
            ":focus-visible_borderEndStartRadius": "xpxzo57",
            $$css: true
        },
        close: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            minHeight: "xjwf9q1",
            minWidth: "xnei2rj",
            color: "xto31z9",
            ":focus-visible_borderStartStartRadius": "xfuo7wg",
            ":focus-visible_borderStartEndRadius": "xepj7l6",
            ":focus-visible_borderEndEndRadius": "x1911790",
            ":focus-visible_borderEndStartRadius": "xpxzo57",
            $$css: true
        },
        right: {
            insetInlineEnd: "xtijo5x",
            left: null,
            right: null,
            $$css: true
        },
        toast: {
            alignItems: "x6s0dn4",
            backgroundColor: "x1e6sl3u",
            borderStartStartRadius: "x2yqj0j",
            borderStartEndRadius: "x1u1eq46",
            borderEndEndRadius: "x1fxmhz6",
            borderEndStartRadius: "xr2wkf5",
            color: "x17t9dm2",
            display: "x78zum5",
            fontSize: "x1f6kntn",
            lineHeight: "x1evy7pa",
            $$css: true
        }
    };
    function y(e = "") {
        return r("uniqueID")(e || "toast");
    }
    function C(t) {
        const a = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { msg: l, action: s, duration: u } = i;
        const d = u === void 0 ? g : u;
        const m = i.visible;
        const _ = m === void 0 ? true : m;
        const f = r("useLazyRef")(function() {
            return y();
        }).current;
        const h = i.id ?? f;
        const C = o("useWAWebTimeout").useTimeout(function() {
            o("WAWebToastManager").ToastManager.close(h);
        }, d, {
            immediate: true
        });
        const v = C[0];
        const R = function() {
            o("WAWebToastManager").ToastManager.close(h);
        };
        p(a, function() {
            return {
                restartDelay: v
            };
        });
        if (!_) {
            return c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
                text: l,
                assertive: true
            });
        }
        let L;
        if (s) {
            const E = Array.isArray(s) ? s : [
                s
            ];
            L = E.map((e, t)=><B2 key={e.actionText.toString() + t} buttonText={e.actionText} onClick={e.dismiss === true ? R : e.onAction} theme={e.theme} testid={e.testid}/>);
        }
        return <S actionText={l} actionButtons={L}/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function B2(e) {
        const t = o("react-compiler-runtime").c(8);
        const { buttonText: n, onClick: a, ref: i, testid: l, theme: u } = e;
        let d;
        if (t[0] !== u) {
            d = (s || (s = r("stylex"))).props(h.button, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, f.marginInlineStart15, u === "success" && h.btnSuccess);
            t[0] = u;
            t[1] = d;
        } else {
            d = t[1];
        }
        let m;
        if (t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== d || t[6] !== l) {
            m = <button {...babelHelpers.extends({}, d, {
                onClick: a,
                "data-testid": l,
                ref: i,
                children: n
            })}/>;
            t[2] = n;
            t[3] = a;
            t[4] = i;
            t[5] = d;
            t[6] = l;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    function v({ onClick: t, ref: n }) {
        return <button {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, h.close, f.marginInlineStart15), {
            onClick: t,
            "aria-label": r("WAWebFbtCommon")("Close"),
            ref: n,
            children: c.jsx(r("WDSIconIcClose.react"), {
                width: 19,
                height: 19,
                testid: "toast-dismiss"
            })
        })}/>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    function S(e) {
        const t = o("react-compiler-runtime").c(16);
        const { actionButtons: n, actionText: a, dismissButton: i, focusButtonRef: l, toastPosition: u } = e;
        let d;
        if (t[0] !== l) {
            d = function() {
                const e = l?.current;
                if (e instanceof HTMLButtonElement) {
                    e.focus();
                }
            };
            t[0] = l;
            t[1] = d;
        } else {
            d = t[1];
        }
        let p;
        if (t[2] !== a || t[3] !== l) {
            p = [
                a,
                l
            ];
            t[2] = a;
            t[3] = l;
            t[4] = p;
        } else {
            p = t[4];
        }
        m(d, p);
        const f = _(null);
        let g;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            g = function(t) {
                if (t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB) {
                    const e = f.current;
                    if (e != null && e.contains(document.activeElement)) {
                        const n = o("WAWebKeyboardTabUtils").getNextTabbableElement(e, t.shiftKey ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD : o("WAWebKeyboardTabUtils").TabDirection.FORWARD, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
                        if (n != null) {
                            t.stopPropagation();
                            t.preventDefault();
                            r("WAWebFocusTracer").focus(n);
                        }
                    }
                }
            };
            t[5] = g;
        } else {
            g = t[5];
        }
        const y = g;
        let C;
        if (t[6] !== u) {
            C = (s || (s = r("stylex"))).props(h.toast, o("WDSPaddings.stylex").wdsPaddings.paddingVer12, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, u === "RIGHT" && h.right);
            t[6] = u;
            t[7] = C;
        } else {
            C = t[7];
        }
        let b;
        if (t[8] !== a) {
            b = c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
                text: a,
                assertive: true
            });
            t[8] = a;
            t[9] = b;
        } else {
            b = t[9];
        }
        let v;
        if (t[10] !== n || t[11] !== a || t[12] !== i || t[13] !== C || t[14] !== b) {
            v = <div {...babelHelpers.extends({}, C, {
                ref: f,
                tabIndex: 0,
                onKeyDown: y,
                "data-testid": "toast-body",
                children: [
                    a,
                    n,
                    i,
                    b
                ]
            })}/>;
            t[10] = n;
            t[11] = a;
            t[12] = i;
            t[13] = C;
            t[14] = b;
            t[15] = v;
        } else {
            v = t[15];
        }
        return v;
    }
    function R({ action: t, msg: n }) {
        const a = y();
        let i = null;
        o("WAWebToastManager").ToastManager.open(<C id={a} msg={n} action={{
            actionText: r("WAWebFbtCommon")("Undo"),
            onAction: function() {
                if (i != null && i !== 0) {
                    window.clearTimeout(i);
                    i = null;
                    o("WAWebToastManager").ToastManager.close(a);
                }
            }
        }}/>);
        i = window.setTimeout(function() {
            t();
        }, g);
    }
    l.genId = y;
    l.Toast = C;
    l.ToastActionBtn = B2;
    l.ToastDismissBtn = v;
    l.ToastBody = S;
    l.openUndoToast = R;
}, 98);