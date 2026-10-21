__d("WAWebConfirmPopup.react", [
    "Promise",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "onCancel",
        "onOK",
        "onOverlayClick"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect: p, useRef: _ } = m;
    function F1(t) {
        const i = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const s = l.buttonAlign;
        const u = s === void 0 ? "end" : s;
        const c = l.buttonWidth;
        const m = c === void 0 ? "hug" : c;
        const f = l.okInputGuardMs;
        const h = _(f != null);
        const y = _(null);
        const C = r("useWAWebStableCallback")(function() {
            if (f != null) {
                h.current = true;
                if (y.current != null) {
                    self.clearTimeout(y.current);
                }
                y.current = self.setTimeout(function() {
                    h.current = false;
                }, f);
            }
        });
        p(function() {
            if (f == null) {
                h.current = false;
                return;
            }
            C();
            const t = function() {
                if (globalThis.document?.hidden === false) {
                    C();
                }
            };
            globalThis.document?.addEventListener("visibilitychange", t);
            return function() {
                globalThis.document?.removeEventListener("visibilitychange", t);
                if (y.current != null) {
                    self.clearTimeout(y.current);
                }
            };
        }, [
            C,
            f
        ]);
        const b = function(t) {
            t.stopPropagation();
            t.preventDefault();
            if (h.current) {
                C();
                l.onOkInputGuarded?.();
                return;
            }
            l.onOK?.();
        };
        const v = function(t) {
            t.stopPropagation();
            t.preventDefault();
            l.onCancel?.(t);
        };
        const Component = o("WAWebButton.react").Button;
        const S = l.onOK ? <Component testid={l.okButtonTestid ?? "popup-controls-ok"} type={l.okButtonType ? l.okButtonType : "primary"} onClick={b} disabled={l.okDisabled} spinner={l.okSpinner === true}>{l.okText ?? r("WAWebFbtCommon")("OK")}</Component> : null;
        let R = null;
        if (l.onCancel) {
            const Component = r("WDSButton.react");
            R = <Component variant="borderless" onPress={v} testid="popup-controls-cancel" disabled={l.cancelDisabled} size="medium" type="default" label={l.cancelText != null && l.cancelText !== "" ? l.cancelText : r("WAWebFbtCommon")("Cancel")}/>;
        }
        const L = l.extraButtonNode ?? (l.extraButtonProps ? <G4 {...babelHelpers.extends({}, l.extraButtonProps)}/> : null);
        const E = {
            escape: l.onCancel ? v : r("WAWebNoop")
        };
        let k = null;
        if (L != null && l.splitLayout === true) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            k = <Component_1 justify="all" align="center" grow={1}>{L}<Component columnGap={8}>{R}{S}</Component></Component_1>;
        } else if (L != null) {
            const T = [
                R,
                L,
                S
            ];
            const Component = o("WAWebButton.react").ButtonGroup;
            k = <Component direction={l.buttonsDirection ?? "vertical"} align={u}>{T[0]}{T[1]}{T[2]}</Component>;
        } else if (R != null || S != null) {
            const D = R != null && S != null;
            if (D) {
                k = d.jsx(r("WDSButtonGroup.react"), {
                    width: m,
                    orientation: (l.buttonsDirection ?? "horizontal") === "horizontal" ? "horizontal" : "stacked",
                    primaryButtonProps: {
                        variant: "filled",
                        onPress: b,
                        testid: "popup-controls-ok",
                        disabled: l.okDisabled,
                        loading: l.okSpinner === true,
                        size: "medium",
                        Icon: l.okIcon,
                        type: l.okButtonType === "solid-warning" || l.okButtonType === "warning" || l.okButtonType === "negative-destructive" ? "destructive" : "default",
                        label: l.okText ?? r("WAWebFbtCommon")("OK")
                    },
                    tertiaryButtonProps: {
                        variant: "borderless",
                        onPress: v,
                        testid: "popup-controls-cancel",
                        disabled: l.cancelDisabled,
                        size: "medium",
                        type: "default",
                        label: l.cancelText != null && l.cancelText !== "" ? l.cancelText : r("WAWebFbtCommon")("Cancel")
                    }
                });
            } else {
                const Component = o("WAWebButton.react").ButtonGroup;
                k = <Component direction={l.buttonsDirection ?? "horizontal"} columnGap={(l.buttonsDirection ?? "horizontal") === "horizontal" ? 8 : void 0} align={u}>{R}{S}</Component>;
            }
        }
        const Component_1 = o("WAWebModal.react").Modal;
        const Component_2 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_2 data-testid="confirm-popup" handlers={E} ref={i}><Component_1 actions={k} controlsStyle={l.buttonGroupStyle} cover={l.cover} onDragChange={l.onDragChange} onOverlayClick={l.onOverlayClick} onDrop={l.onDrop} type={l.type} title={l.title} testid={l.testid} overflow={l.overflow} ariaLabel={l.ariaLabel} contentRef={l.contentRef} tsNavigationData={l.tsNavigationData}>{l.children}</Component_1></Component_2>;
    }
    F1.displayName = `${F1.name} [from ${i.id}]`;
    function G4(e) {
        const t = o("react-compiler-runtime").c(8);
        const { disabled: n, onClick: r, primary: a, spinner: i, text: l, type: s } = e;
        const u = n === void 0 ? false : n;
        const c = a === void 0 ? false : a;
        let m;
        if (t[0] !== r) {
            m = function(t) {
                t.stopPropagation();
                t.preventDefault();
                r();
            };
            t[0] = r;
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = m;
        const _ = s ?? (c ? "primary" : "secondary");
        let f;
        if (t[2] !== u || t[3] !== p || t[4] !== i || t[5] !== _ || t[6] !== l) {
            const Component = o("WAWebButton.react").Button;
            f = <Component testid="popup-controls-extra" type={_} onClick={p} disabled={u} spinner={i}>{l}</Component>;
            t[2] = u;
            t[3] = p;
            t[4] = i;
            t[5] = _;
            t[6] = l;
            t[7] = f;
        } else {
            f = t[7];
        }
        return f;
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { onCancel: t, onOK: r, onOverlayClick: a } = e;
            const i = babelHelpers.objectWithoutPropertiesLoose(e, s);
            return new (u || (u = n("Promise")))(function(e) {
                const n = function() {
                    o("WAWebModalManager").ModalManager.off("close_modal", n);
                    e(false);
                };
                const l = function() {
                    o("WAWebModalManager").ModalManager.off("close_modal", n);
                    r?.();
                    o("WAWebModalManager").ModalManager.close();
                    e(true);
                };
                const s = function(a) {
                    o("WAWebModalManager").ModalManager.off("close_modal", n);
                    t?.(a);
                    o("WAWebModalManager").ModalManager.close();
                    e(false);
                };
                const u = function(r) {
                    o("WAWebModalManager").ModalManager.off("close_modal", n);
                    a?.(r);
                    o("WAWebModalManager").ModalManager.close();
                    e(false);
                };
                o("WAWebModalManager").ModalManager.on("close_modal", n);
                o("WAWebModalManager").ModalManager.open(<F1 {...babelHelpers.extends({
                    onOverlayClick: u,
                    onCancel: s,
                    onOK: l
                }, i)}/>);
            });
        });
        return y.apply(this, arguments);
    }
    l.ConfirmPopup = F1;
    l.waitForConfirmPopup = h;
}, 98);