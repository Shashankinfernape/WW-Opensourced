__d("WDSRichTextField.react", [
    "Lexical",
    "LexicalClearEditorPlugin",
    "LexicalComposerContext",
    "LexicalContentEditable",
    "LexicalErrorBoundary",
    "LexicalHistoryPlugin",
    "LexicalPlainTextPlugin",
    "LexicalSelection",
    "MLCComposer.react",
    "UserAgent",
    "WAWebCopyPasteSelectable.react",
    "WDSBidiParagraphNode",
    "WDSFontTokenStyles",
    "WDSIconIcMood.react",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "WDSRichTextAddOns",
    "WDSRichTextCharLimitPlugin",
    "WDSRichTextEditorStatePlugin",
    "WDSRichTextInitialStatePlugin",
    "WDSRichTextOnEnterPlugin",
    "WDSRichTextShell.react",
    "WDSText.react",
    "err",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useId, useImperativeHandle, useMemo, useState } = d;
    const h = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb";
    const y = {
        root: {
            color: "x1heor9g",
            backgroundColor: "xjbqb8w",
            borderTopColor: "x1v8p93f",
            borderInlineEndColor: "x1o3jo1z",
            borderBottomColor: "x16stqrj",
            borderInlineStartColor: "xv5lvn5",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            boxSizing: "x9f619",
            maxWidth: "x193iq5w",
            width: "xh8yej3",
            lineHeight: "x1fc57z9",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            caretColor: "xjdcl3y",
            outline: "x1a2a7pz",
            "::selection_backgroundColor": "xkrh14z",
            $$css: true
        },
        singleLine: {
            whiteSpace: "x1whj5v",
            $$css: true
        },
        multiLine: {
            whiteSpace: "x126k92a",
            overflowY: "x1odjw0f",
            $$css: true
        },
        passwordMask: {
            "-webkit-text-security": "x1amp90o",
            $$css: true
        },
        errorCaret: {
            caretColor: "x1fmtg6p",
            $$css: true
        }
    };
    const C = {
        overlay: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            insetInlineEnd: "xtijo5x",
            pointerEvents: "x47corl",
            color: "xhslqc4",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            userSelect: "x87ps6o",
            $$css: true
        }
    };
    const b = {
        label: {
            cursor: "xt0e3qv",
            $$css: true
        }
    };
    const v = {
        paragraph: [
            o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS,
            "x15bjb6t xdj266r x14z9mp xat24cr x1lziwak xq9mrsl x1n2onr6"
        ].join(" "),
        text: {
            base: o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS,
            bold: "x117nqv4",
            italic: "x1k4tb9n",
            strikethrough: "xmqliwb x1t57i5m",
            code: "xldyu6s x7l0hbv"
        }
    };
    function SComponent(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { StartIcon, bottomText, children, disabled } = a;
        const S = disabled === undefined ? false : disabled;
        const { enableEmojiPicker, error } = a;
        const k = error === undefined ? false : error;
        const { errorText, initialText, label: label_1, labelTestId, loading } = a;
        const P = loading === undefined ? false : loading;
        const { maxCharacterCount, characterCountRenderer, maxLength, nodes, onBlur, onEnter, onFocus, onValueChange, placeholder, platform } = a;
        const platform_1 = platform === undefined ? h : platform;
        const { prefix, readOnly } = a;
        const isReadOnly = readOnly === undefined ? false : readOnly;
        const a_rows = a.rows;
        const K = a_rows === undefined ? 1 : a_rows;
        const { suffix, testid } = a;
        const Y = testid === undefined ? "text-input" : testid;
        const a_type = a.type;
        const Z = a_type === undefined ? "text" : a_type;
        const isMultiLine = K > 1;
        const te = useState(initialText ?? "");
        const ne = te[0];
        const re = te[1];
        const oe = useState(false);
        const ae = oe[0];
        const ie = oe[1];
        const le = useState(false);
        const se = le[0];
        const ue = le[1];
        const ce = useState(null);
        const editor = ce[0];
        const onEditor = ce[1];
        const pe = useState(false);
        const _e = pe[0];
        const fe = pe[1];
        const ge = useId();
        const bottomId = `bottom-text-${ge}`;
        const ye = `adjacent-label-${ge}`;
        const Ce = label_1 != null;
        const hasValue = ne.length > 0;
        const ve = maxCharacterCount != null && ne.length > maxCharacterCount;
        const Se = k || ve;
        const isDisabled = S === true && !Se;
        const editable = !S && !isReadOnly;
        const externalHistoryState = useMemo(function() {
            return o("LexicalHistoryPlugin").createEmptyHistoryState();
        }, []);
        const initialConfig = useMemo(function() {
            const e = nodes ?? [];
            const t = e.some((e)=>o("WDSBidiParagraphNode").isBidiNodeType(e.getType()));
            return {
                editor: {
                    theme: v,
                    nodes: t ? [].concat(e, [
                        {
                            replace: o("Lexical").ParagraphNode,
                            with: function() {
                                for (const t of e){
                                    if (t !== o("WDSBidiParagraphNode").WDSBidiParagraphNode && o("WDSBidiParagraphNode").isBidiNodeType(t.getType())) {
                                        return new t;
                                    }
                                }
                                return new (o("WDSBidiParagraphNode")).WDSBidiParagraphNode;
                            }
                        }
                    ]) : e,
                    onError: function(t) {
                        throw r("err")(t.message);
                    },
                    editable
                },
                policyProduct: "whatsapp",
                surface: "WAJS"
            };
        }, []);
        useEffect(function() {
            if (editor != null) {
                editor.setEditable(editable);
            }
        }, [
            editor,
            editable
        ]);
        const Ie = function(t) {
            re(t);
            onValueChange?.(t);
        };
        const Te = function() {
            ie(true);
            onFocus?.();
        };
        const De = function() {
            ie(false);
            onBlur?.();
        };
        const xe = function() {
            ue(true);
        };
        const $e = function(t) {
            const t_relatedTarget = t.relatedTarget;
            if (!(t_relatedTarget instanceof Node) || !t.currentTarget.contains(t_relatedTarget)) {
                ue(false);
            }
        };
        const Pe = a.type === "password" ? a.passwordVisibilityToggled : null;
        const Ne = function() {
            const e = !_e;
            fe(e);
            Pe?.(e);
        };
        useImperativeHandle(t_ref, function() {
            return {
                focus: function() {
                    editor?.focus();
                },
                blur: function() {
                    if (editor != null && document.activeElement === editor.getRootElement()) {
                        editor.blur();
                    }
                },
                isFocused: function() {
                    if (editor == null) {
                        return false;
                    }
                    return document.activeElement === editor.getRootElement();
                },
                getTextContent: function() {
                    if (editor == null) {
                        return "";
                    }
                    return editor.getEditorState().read(function() {
                        return o("Lexical").$getRoot().getChildren().map((e)=>e.getTextContent()).join("\n");
                    });
                },
                setTextContent: function(t) {
                    if (editor != null) {
                        editor.update(function() {
                            let e;
                            const n = (e = o("Lexical")).$getRoot();
                            n.clear();
                            const r = e.$createParagraphNode();
                            const a = new e.TextNode(t);
                            r.append(a);
                            n.append(r);
                            e.$setSelection(null);
                        });
                    }
                },
                selectAll: function() {
                    if (editor != null) {
                        editor.focus();
                        editor.update(function() {
                            const e = o("Lexical").$getRoot().select(0, o("Lexical").$getRoot().getChildrenSize());
                            if (e != null) {
                                o("LexicalSelection").$selectAll(e);
                            }
                        });
                    }
                },
                editor
            };
        }, [
            editor
        ]);
        let a_EndIcon = a.EndIcon;
        let a_endIconAriaLabel = a.endIconAriaLabel;
        let a_onEndIconClick = a.onEndIconClick;
        let SecondaryIcon = null;
        let Oe = null;
        let onSecondaryIconClick = null;
        if (a.type === "password") {
            const We = r(_e ? "WDSIconIcVisibility.react" : "WDSIconIcVisibilityOff.react");
            const qe = a.visibilityToggleButtonAriaLabel(_e);
            if (a.EndIcon != null) {
                SecondaryIcon = We;
                Oe = qe;
                onSecondaryIconClick = Ne;
            } else {
                a_EndIcon = We;
                a_endIconAriaLabel = qe;
                a_onEndIconClick = Ne;
            }
        }
        const Ue = a_EndIcon != null || SecondaryIcon != null || suffix != null || P || enableEmojiPicker != null;
        const Ve = se || enableEmojiPicker?.isEmojiPickerOpen === true;
        let addOnEnd = null;
        if (Ue) {
            const Component = o("WDSRichTextAddOns").RichTextFieldAddOnEnd;
            addOnEnd = <Component EmojiIcon={enableEmojiPicker != null ? r("WDSIconIcMood.react") : undefined} EndIcon={a_EndIcon} SecondaryIcon={SecondaryIcon} emojiIconAriaLabel={enableEmojiPicker?.emojiPickerAriaLabel} endIconAriaLabel={a_endIconAriaLabel ?? label_1} isDisabled={isReadOnly || S} isFocused={Ve} loading={P} onEmojiIconClick={enableEmojiPicker?.onEmojiPress} onEndIconClick={a_onEndIconClick} onSecondaryIconClick={onSecondaryIconClick} platform={platform_1} secondaryIconAriaLabel={Oe ?? label_1} suffix={suffix}/>;
        }
        const Ge = StartIcon != null || prefix != null;
        let addOnStart = null;
        if (Ge) {
            addOnStart = c.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnStart, {
                prefix,
                StartIcon,
                platform: platform_1
            });
        }
        const je = bottomText != null || errorText != null || maxCharacterCount != null;
        let addOnBottom = null;
        if (je) {
            addOnBottom = c.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnBottom, {
                bottomText,
                testid: undefined,
                errorText,
                maxCharacterCount,
                textLength: ne.length,
                platform: platform_1,
                shouldShowError: Se,
                bottomId,
                characterCountRenderer
            });
        }
        const Component = o("LexicalContentEditable").ContentEditable;
        const Component_1 = r("WDSRichTextEditorStatePlugin");
        const Component_2 = r("WDSRichTextOnEnterPlugin");
        const Component_3 = r("MLCComposer.react");
        const Component_4 = r("WDSRichTextShell.react");
        const Qe = <Component_4 label={undefined} isFocused={ae} hasValue={hasValue} platform={platform_1} shouldShowError={Se} isDisabled={isDisabled} isMultiLine={isMultiLine} isPlaceholderMode hasAddOnEnd={!!Ue} addOnStart={addOnStart} addOnEnd={addOnEnd} addOnBottom={addOnBottom} isReadOnly={isReadOnly} labelTestId={labelTestId}><Component_3 initialConfig={initialConfig}>{c.jsx(o("LexicalPlainTextPlugin").PlainTextPlugin, {
            contentEditable: <Component className={(s || (s = r("stylex")))(y.root, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2, isMultiLine ? y.multiLine : y.singleLine, Z === "password" && !_e && y.passwordMask, Se && y.errorCaret)} style={isMultiLine ? {
                height: `${K}lh`
            } : undefined} data-testid={undefined} ariaLabel={Ce || label_1 == null ? undefined : String(label_1)} ariaLabelledBy={Ce ? ye : undefined} ariaInvalid={Se} ariaDescribedBy={je ? bottomId : undefined} ariaMultiline={isMultiLine || undefined}/>,
            placeholder: <div {...babelHelpers.extends({}, s.props(C.overlay, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2), {
                children: placeholder
            })}/>,
            ErrorBoundary: o("LexicalErrorBoundary").LexicalErrorBoundary
        })}{c.jsx(o("LexicalHistoryPlugin").HistoryPlugin, {
            externalHistoryState
        })}{c.jsx(o("LexicalClearEditorPlugin").ClearEditorPlugin, {})}<RComponent onEditor={onEditor}/><Component_1 onValueChange={Ie} onFocus={Te} onBlur={De}/>{children}{c.jsx(r("WDSRichTextInitialStatePlugin"), {
            initialText
        })}{maxLength != null && c.jsx(r("WDSRichTextCharLimitPlugin"), {
            maxLength
        })}<Component_2 isMultiLine={isMultiLine} onEnter={onEnter}/></Component_3></Component_4>;
        if (Ce) {
            const Component = r("WDSText.react");
            return <div className="x78zum5 xdt5ytf" role="group" onFocus={xe} onBlur={$e}><label onClick={function() {
                return editable && editor?.focus();
            }}><Component testid={undefined} xstyle={b.label} id={ye} colorName="contentDeemphasized" type="Body2Emphasized">{label_1}</Component></label>{Qe}</div>;
        }
        return <div className="xjp7ctv" role="group" onFocus={xe} onBlur={$e}>{Qe}</div>;
    }
    SComponent.displayName = `${SComponent.name} [from ${i.id}]`;
    function RComponent({ onEditor }) {
        const n = o("LexicalComposerContext").useLexicalComposerContext();
        const r = n[0];
        useEffect(function() {
            onEditor(r);
        }, [
            r,
            onEditor
        ]);
        return null;
    }
    RComponent.displayName = `${RComponent.name} [from ${i.id}]`;
    l.default = SComponent;
}, 98);