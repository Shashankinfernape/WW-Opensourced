__d("createKeyCommandWrapper", [
    "CometKeyCommandContext",
    "CometKeyCommandSettingsContext",
    "CometKeyCommandUtilsContext",
    "FBLogger",
    "areKeyCombinationsEqual",
    "createKeyCommand",
    "isSingleCharKey",
    "react",
    "stylex",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useContext, useMemo, useRef } = c;
    const f = {
        wrapperFocusable: {
            ":focus_outline": "x1uvtmcs",
            $$css: true
        }
    };
    function g(target) {
        if (target instanceof HTMLInputElement) {
            return target.type !== "hidden" && target.type !== "file" && !target.disabled;
        }
        if (target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
            return !target.disabled;
        }
        return target instanceof HTMLElement && target.isContentEditable;
    }
    function h(target) {
        if (target instanceof HTMLElement && target.getAttribute("role") === "listbox") {
            return !target.getAttribute("aria-disabled");
        }
        return false;
    }
    function y(e, groupID, commandID) {
        for (const [o, a] of e){
            if (a.groupID === groupID && a.commandID === commandID) {
                return e.get(o);
            }
        }
    }
    function C(target, t) {
        return t.triggerFromInputs === true && g(target) && t.command?.alt === true;
    }
    const b = function(t, n) {
        r("FBLogger")("comet_ax").mustfix("Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set");
    };
    const v = function(t, n) {
        r("FBLogger")("comet_ax").mustfix("Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set");
    };
    function S(t, n) {
        function OComponent(o) {
            const a = useContext(r("CometKeyCommandContext"));
            const i = useContext(r("CometKeyCommandUtilsContext"));
            const l = useContext(r("CometKeyCommandSettingsContext"));
            const s = i?.setActiveWrapper;
            const cRef = useRef(b);
            const SRef = useRef(v);
            const R = r("useStable")(function() {
                return new Map;
            });
            const L = useCallback(function(e) {
                let o = R.get(e);
                if (o?.groupID != null && o?.commandID != null) {
                    const i = l.getCustomKeyCombination(o.groupID, o.commandID);
                    if (i == null || r("areKeyCombinationsEqual")(i, o?.command)) {
                        return o;
                    }
                    o = null;
                }
                const s = l.getCustomCommandsMap().get(e);
                if (s != null && s.groupID != null && s.commandID != null) {
                    const u = y(R, s.groupID, s.commandID);
                    if (u != null) {
                        o = u;
                    }
                }
                return o;
            }, [
                l,
                R
            ]);
            const E = useMemo(function() {
                return {
                    addCommands: function(t, n) {
                        t.forEach((e)=>{
                            const e_command = e.command;
                            if (e_command != null) {
                                const o = r("createKeyCommand")(e_command);
                                const a = R.has(o);
                                const l = a && n === true;
                                const s = l || !a || n === undefined;
                                if (s) {
                                    R.set(o, e);
                                    if (i != null) {
                                        i.notifyCommandUpdate();
                                    }
                                }
                            }
                        });
                        return function() {
                            t.forEach((e)=>{
                                const e_command = e.command;
                                const n = r("createKeyCommand")(e_command);
                                const o = R.get(n);
                                if (o === e) {
                                    R.delete(n);
                                }
                            });
                            i?.notifyCommandUpdate();
                        };
                    },
                    applyCommand: function(t, n) {
                        const o = L(t);
                        if (o == null) {
                            return false;
                        }
                        const a = /^[a-z0-9]$/;
                        if (o.command?.alt === true && l.getModifiedKeyboardShortcutsPreference() === 1) {
                            return true;
                        }
                        if (!o.triggerFromInputs && g(n.target) || h(n.target) && a.test(t) || n.type === "keyup" && o.triggerOnKeyUp !== true && o.triggerOnKeyUpAndKeyDown !== true || n.type === "keydown" && o.triggerOnKeyUp === true) {
                            return false;
                        }
                        const o_handler = o.handler;
                        if (o.shouldPreventDefault !== false) {
                            if (C(n.target, o) && l.getModifiedKeyboardShortcutsPreference() === 3) {
                                return true;
                            }
                            if (o_handler) {
                                n.preventDefault();
                            }
                        }
                        if (o.triggerOnRepeats === false && n.repeat === true) {
                            return false;
                        }
                        if (o_handler != null) {
                            const s = o.command;
                            if (s != null && C(n.target, o) && l.getModifiedKeyboardShortcutsPreference() === 4) {
                                SRef.current(s, o.singleCharDescription);
                                return true;
                            }
                            const u = l && l.getAreSingleKeysDisabled();
                            const d = r("isSingleCharKey")(t);
                            if (u === true && d) {
                                return true;
                            }
                            if (u === null && d) {
                                cRef.current(t, o.singleCharDescription);
                                return true;
                            }
                            o_handler();
                            return o.shouldStopPropagation !== false;
                        }
                        return false;
                    },
                    debugName: o.debugName,
                    getCommandMap: function() {
                        return R;
                    },
                    getParent: function() {
                        return a;
                    },
                    removeCommand: function(t) {
                        R.delete(t);
                        i?.notifyCommandUpdate();
                    },
                    setShowModifiedKeyCommandWrapperDialogRef: function(t) {
                        SRef.current = t;
                        return function() {
                            SRef.current = v;
                        };
                    },
                    setShowSingleCharacterKeyCommandWrapperDialogRef: function(t) {
                        cRef.current = t;
                        return function() {
                            cRef.current = b;
                        };
                    }
                };
            }, [
                l,
                i,
                R,
                a,
                o.debugName,
                L
            ]);
            const k = useCallback(function() {
                if (!s) {
                    r("FBLogger")("comet_ax").mustfix("setActiveWrapper is undefined in %s", o.debugName ?? "unknown");
                    return;
                }
                s(E);
            }, [
                s,
                E,
                o.debugName
            ]);
            let I;
            if (t || o.elementType !== undefined) {
                const D = o.elementType ?? "div";
                I = <D {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o.isWrapperFocusable ? f.wrapperFocusable : undefined, o.xstyle), {
                    "data-testid": undefined,
                    onFocusCapture: t ? k : undefined,
                    tabIndex: o.isWrapperFocusable ? -1 : undefined,
                    children: o.children
                })}/>;
            } else {
                I = o.children;
            }
            if (n) {
                I = <n.Provider value={E}>{I}</n.Provider>;
            }
            const Component = r("CometKeyCommandContext").Provider;
            return <Component value={E}>{I}</Component>;
        }
        OComponent.displayName = `${OComponent.name} [from ${i.id}]`;
        return OComponent;
    }
    l.default = S;
}, 98);