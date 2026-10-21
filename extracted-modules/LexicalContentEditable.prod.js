__d("LexicalContentEditable.prod", [
    "Lexical",
    "LexicalComposerContext",
    "LexicalText",
    "react"
], function $module_LexicalContentEditable_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    const _excluded = [
        "editor",
        "ariaActiveDescendant",
        "ariaAutoComplete",
        "ariaControls",
        "ariaDescribedBy",
        "ariaErrorMessage",
        "ariaExpanded",
        "ariaInvalid",
        "ariaLabel",
        "ariaLabelledBy",
        "ariaMultiline",
        "ariaOwns",
        "ariaRequired",
        "autoCapitalize",
        "className",
        "id",
        "role",
        "spellCheck",
        "style",
        "tabIndex",
        "data-testid"
    ];
    const _excluded2 = [
        "placeholder"
    ];
    let _require_closure_react;
    const a = _require_closure_react || (_require_closure_react = require("react"));
    const i = _require_closure_react;
    const n = require("Lexical").CAN_USE_DOM ? a.useLayoutEffect : a.useEffect;
    function OComponent(_ref, w) {
        const { editor, ariaActiveDescendant, ariaAutoComplete, ariaControls, ariaDescribedBy, ariaErrorMessage, ariaExpanded, ariaInvalid, ariaLabel, ariaLabelledBy, ariaMultiline, ariaOwns, ariaRequired, autoCapitalize, className, id, role, spellCheck: _ref$spellCheck } = _ref;
        const y = _ref$spellCheck === undefined ? true : _ref$spellCheck;
        const { style, tabIndex, "data-testid": data_testid } = _ref;
        const q = babelHelpers.objectWithoutPropertiesLoose(_ref, _excluded);
        const [R, setR] = a.useState(editor.isEditable());
        const D = a.useCallback(function(a) {
            if (a && a.ownerDocument && a.ownerDocument.defaultView) {
                editor.setRootElement(a);
            } else {
                editor.setRootElement(null);
            }
        }, [
            editor
        ]);
        const S = a.useMemo(function() {
            return ((...e)=>function(a) {
                    for (const _t of e){
                        if (typeof _t === "function") {
                            _t(a);
                        } else if (_t != null) {
                            _t.current = a;
                        }
                    }
                })(w, D);
        }, [
            D,
            w
        ]);
        n(function() {
            setR(editor.isEditable());
            return editor.registerEditableListener(function(e) {
                setR(e);
            });
        }, [
            editor
        ]);
        const M = babelHelpers.extends({
            "aria-activedescendant": R ? ariaActiveDescendant : undefined,
            "aria-autocomplete": R ? ariaAutoComplete : "none",
            "aria-controls": R ? ariaControls : undefined,
            "aria-describedby": ariaDescribedBy
        }, ariaErrorMessage != null ? {
            "aria-errormessage": ariaErrorMessage
        } : {}, {
            "aria-expanded": role === "combobox" ? ariaExpanded ?? false : undefined
        }, ariaInvalid != null ? {
            "aria-invalid": ariaInvalid
        } : {}, {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-multiline": ariaMultiline,
            "aria-owns": R ? ariaOwns : undefined,
            "aria-readonly": !R || undefined,
            "aria-required": ariaRequired
        }, q);
        const k = [
            M["aria-label"],
            M["aria-labelledby"],
            M.title
        ].some((e)=>typeof e === "string" && e.trim() !== "");
        const A = role === undefined ? R || k ? "textbox" : undefined : role;
        if (A == null) {
            M["aria-activedescendant"] = undefined;
            M["aria-autocomplete"] = undefined;
            M["aria-expanded"] = undefined;
            M["aria-multiline"] = undefined;
            M["aria-placeholder"] = undefined;
            M["aria-readonly"] = undefined;
            M["aria-required"] = undefined;
        }
        return <div {...babelHelpers.extends({
            autoCapitalize,
            className,
            contentEditable: R,
            "data-testid": data_testid,
            id,
            ref: S,
            role: A,
            spellCheck: y,
            style,
            tabIndex: tabIndex ?? (R ? undefined : -1)
        }, M)}/>;
    }
    const L1 = a.forwardRef(OComponent);
    function d(editor) {
        return editor.read("latest", require("LexicalText").$canShowPlaceholderCurry(editor.isComposing()));
    }
    const s = a.forwardRef(u);
    function u(a, t) {
        const a_placeholder = a.placeholder;
        const n = babelHelpers.objectWithoutPropertiesLoose(a, _excluded2);
        const _e$useLexicalComposer = require("LexicalComposerContext").useLexicalComposerContext();
        const editor = _e$useLexicalComposer[0];
        return <><L1 {...babelHelpers.extends({
            editor
        }, n, {
            ref: t
        })}/>{a_placeholder != null && <C1Component editor={editor} content={a_placeholder}/>}</>;
    }
    function C1Component({ content, editor }) {
        const o = ((editor_1)=>{
            const [i, setI] = a.useState(function() {
                return d(editor_1);
            });
            n(function() {
                function a() {
                    const a = d(editor_1);
                    setI(a);
                }
                a();
                return require("Lexical").mergeRegister(editor_1.registerUpdateListener(function() {
                    a();
                }), editor_1.registerEditableListener(function() {
                    a();
                }));
            }, [
                editor_1
            ]);
            return i;
        })(editor);
        const [l, setL] = a.useState(editor.isEditable());
        n(function() {
            setL(editor.isEditable());
            return editor.registerEditableListener(function(e) {
                setL(e);
            });
        }, [
            editor
        ]);
        if (!o) {
            return null;
        }
        let u = null;
        if (typeof content === "function") {
            u = content(l);
        } else if (content !== null) {
            u = content;
        }
        if (u === null) {
            return null;
        }
        return <div aria-hidden>{u}</div>;
    }
    exports.ContentEditable = s;
    exports.ContentEditableElement = L1;
}, null);