__d("WAWebRichTextField.react", [
    "fbt",
    "$InternalEnum",
    "WAUnicodeUtils",
    "WAWebCharacterLimitPlugin",
    "WAWebCheckCircleCropViewBox",
    "WAWebDragIconWrapper.react",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebEmojiPickerPlugin",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebRichTextFieldEmojiTextBlock.react",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSButton.react",
    "WDSFocusStateStyles",
    "WDSIconIcCheck.react",
    "WDSIconIcCheckCircleFilled.react",
    "WDSIconIcEdit.react",
    "WDSIconIcErrorFilled.react",
    "WDSIconIcImage.react",
    "WDSIconIcInfo.react",
    "WDSIconIcMood.react",
    "WDSPaddings.stylex",
    "WDSTooltip.react",
    "react",
    "stylex",
    "useHoverState",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useRef, useState } = m;
    const h = {
        marginInlineStart10: {
            marginInlineStart: "x1hm9lzh",
            $$css: true
        },
        marginBottom6: {
            marginBottom: "xzueoph",
            $$css: true
        }
    };
    const y = 50;
    const C = 10;
    const b = 24;
    const v = n("$InternalEnum")({
        GroupInfoName: "groupInfoName",
        Desaturated: "desaturated",
        NoErrorInfo: "noErrorInfo",
        ChatInfoDefaultText: "chatInfoDefaultText",
        ChatInfoLargeText: "chatInfoLargeText",
        DisabledLabel: "disabledLabel",
        DigitalCode: "digitalCode"
    });
    const S = {
        sendBtn: {
            boxShadow: "x1gnnqk1",
            $$css: true
        },
        iconColor: {
            color: "xhslqc4",
            $$css: true
        },
        iconMain: {
            position: "x10l6tqk",
            top: "x1atx4j1",
            color: "x1heor9g",
            cursor: "x1ypdohk",
            $$css: true
        },
        btn: {
            color: "x1heor9g",
            cursor: "x1ypdohk",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        textInputFontSize13: {
            fontSize: "x1nxh6w3",
            $$css: true
        },
        textInputFontSize14: {
            fontSize: "x1f6kntn",
            $$css: true
        },
        textInputFontSize15: {
            fontSize: "x6prxxf",
            $$css: true
        },
        textInputFontSize16: {
            fontSize: "x1jchvi3",
            $$css: true
        },
        textInputFontSize17: {
            fontSize: "x1lkfr7t",
            $$css: true
        },
        textInputFontSize24: {
            fontSize: "xngnso2",
            $$css: true
        },
        btnFooterContainer: {
            display: "x78zum5",
            flexDirection: "x3ieub6",
            $$css: true
        },
        wrapperRefreshed: {
            position: "x1n2onr6",
            zIndex: "xhtitgo",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            $$css: true
        },
        inputWrapperRefreshed: {
            borderBottom: "x112ta8",
            paddingTop: "x3hdcf8",
            paddingInlineEnd: "xje27ih",
            paddingBottom: "x18dplov",
            paddingInlineStart: "xozx76t",
            $$css: true
        },
        iconMainRefreshed: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "x100vrsf",
            height: "x1vqgdyp",
            borderStartStartRadius: "xvs2etk",
            borderStartEndRadius: "xg3wpu6",
            borderEndEndRadius: "x1jwbhkm",
            borderEndStartRadius: "xgg4q86",
            cursor: "x1ypdohk",
            ":hover_backgroundColor": "x17gydlx",
            $$css: true
        },
        iconMainContainerRefreshed: {
            flexShrink: "x2lah0s",
            color: "x14ug900",
            $$css: true
        },
        iconMainContainerMultilineRefreshed: {
            alignSelf: "x1y8v6su",
            $$css: true
        },
        groupInfoLargeTextRefreshed: {
            color: "x14ug900",
            fontSize: "xngnso2",
            lineHeight: "xcgk4ki",
            $$css: true
        },
        chatInfoDefaultTextRefreshed: {
            fontSize: "x6prxxf",
            lineHeight: "x1o2sk6j",
            color: "x14ug900",
            $$css: true
        },
        alignSelfCenter: {
            alignSelf: "xamitd3",
            $$css: true
        },
        textAlign: {
            textAlign: "x1yc453h",
            $$css: true
        },
        largeEmojiVerticalAlign: {
            verticalAlign: "x523cq2",
            $$css: true
        },
        emojiTextSmall: {
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "x1gabggj",
            paddingBottom: "x10b6aqq",
            fontSize: "x1f6kntn",
            lineHeight: "x1fc57z9",
            $$css: true
        },
        emojiTextEditOnHover: {
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        emojiTextChatInfoDefault: {
            paddingTop: "xexx8yu",
            fontSize: "x1jchvi3",
            lineHeight: "x1o2sk6j",
            $$css: true
        },
        emojiTextChatInfoLarge: {
            fontSize: "xngnso2",
            lineHeight: "xgif2c7",
            $$css: true
        },
        successIcon: {
            color: "x1v5yvga",
            $$css: true
        },
        iconMainContainer: {
            position: "x1n2onr6",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            width: "xvy4d1p",
            height: "xxk0z11",
            paddingTop: "x1y1aw1k",
            $$css: true
        },
        iconMainContainerSmall: {
            paddingTop: "x1iorvi4",
            $$css: true
        },
        iconMainContainerEditOnHover: {
            paddingTop: "x1y1aw1k",
            paddingInlineStart: "x135b78x",
            $$css: true
        },
        iconMainContainerChatInfoLarge: {
            marginTop: "x1ok221b",
            $$css: true
        },
        iconsEditContainer: {
            display: "x78zum5",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            columnGap: "xtqikln",
            paddingTop: "x1y1aw1k",
            marginInlineEnd: "xjji8sl",
            $$css: true
        },
        iconsEditContainerInvite: {
            paddingTop: "xexx8yu",
            $$css: true
        },
        iconsEditContainerChatInfoLarge: {
            paddingTop: "xyinxu5",
            $$css: true
        },
        labelText: {
            position: "x10l6tqk",
            width: "xh8yej3",
            paddingTop: "x1y1aw1k",
            fontSize: "x1jchvi3",
            lineHeight: "x1fc57z9",
            color: "x2ens7a",
            transitionProperty: "x11xpdln",
            transitionDuration: "x1d8287x",
            transitionTimingFunction: "xrix70t",
            transform: "xo13l8a",
            $$css: true
        },
        labelTextEllipsified: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            display: "x104kibb",
            WebkitLineClamp: "x1h7i4cw",
            WebkitBoxOrient: "x1ua5tub",
            $$css: true
        },
        labelRichTextInput: {
            paddingTop: "x889kno",
            $$css: true
        },
        labelWithEmojiIcon: {
            width: "xm6i5cn",
            $$css: true
        },
        labelFloat: {
            fontSize: "x1pg5gke",
            lineHeight: "x1d3mw78",
            transform: "x1c1b4dv",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            whiteSpace: "xuxw1ft",
            textOverflow: "xlyipyv",
            display: "x1lliihq",
            WebkitLineClamp: "xh0615m",
            $$css: true
        },
        labelHideFloating: {
            width: "xktia5q",
            $$css: true
        },
        labelLabelInput: {
            paddingTop: "x1iorvi4",
            $$css: true
        },
        labelInvite: {
            paddingTop: "xexx8yu",
            $$css: true
        },
        labelEditor: {
            color: "x181ptb6",
            fontSize: "x1f6kntn",
            lineHeight: "x1d3mw78",
            $$css: true
        },
        labelEditorFloat: {
            color: "x1v5yvga",
            $$css: true
        },
        labelTransformNone: {
            transform: "x1c071of",
            $$css: true
        },
        labelDisabled: {
            color: "x54l9or",
            $$css: true
        },
        labelDigitalCode: {
            fontVariantNumeric: "xss6m8b",
            letterSpacing: "xtc2khw",
            $$css: true
        },
        wrapper: {
            position: "x1n2onr6",
            zIndex: "xhtitgo",
            display: "x78zum5",
            alignItems: "x1cy8zhl",
            borderBottomWidth: "xlxy82",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x16pkwpw",
            $$css: true
        },
        wrapperLocked: {
            borderBottomColor: "x16stqrj",
            $$css: true
        },
        wrapperFocused: {
            borderBottomColor: "x1rrvw3c",
            $$css: true
        },
        wrapperDesaturated: {
            borderBottomColor: "x16pkwpw",
            $$css: true
        },
        wrapperBorderNone: {
            borderBottomWidth: "x1qhh985",
            borderBottomStyle: "x1sy0etr",
            $$css: true
        },
        wrapperError: {
            paddingBottom: "x18d9i69",
            borderBottomWidth: "xlxy82",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x61tcke",
            $$css: true
        },
        textActive: {
            paddingBottom: "x18d9i69",
            $$css: true
        },
        wrapperSmall: {
            minHeight: "x21xpn4",
            $$css: true
        },
        wrapperEditOnHoverLocked: {
            marginInlineEnd: "xule2z1",
            $$css: true
        },
        wrapperDigitalCodeEditing: {
            letterSpacing: "x16gzlzp",
            $$css: true
        },
        inputWrapperInner: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "x1t1x2f9",
            minWidth: "xeuugli",
            $$css: true
        },
        inputWrapperInvite: {
            overflowY: "x1rife3k",
            height: "xjp8j0k",
            $$css: true
        },
        inputWrapperPhone: {
            paddingBottom: "x18d9i69",
            fontSize: "x6prxxf",
            lineHeight: "x1o2sk6j",
            fontWeight: "xo1h6xc",
            $$css: true
        },
        inputWrapperHighlight: {
            paddingTop: "xexx8yu",
            paddingInlineStart: "xe2zdcy",
            paddingInlineEnd: "x2vl965",
            paddingLeft: null,
            paddingRight: null,
            paddingBottom: "x10b6aqq",
            $$css: true
        },
        constrainedWidth: {
            width: "xktia5q",
            $$css: true
        },
        textInput: {
            position: "x1n2onr6",
            wordWrap: "x1vvkbs",
            $$css: true
        },
        containerGroupInfoNameActive: {
            marginBottom: "xzueoph",
            $$css: true
        },
        containerSmall: {
            minHeight: "x21xpn4",
            $$css: true
        },
        containerEditOnHover: {
            transitionProperty: "x13b0p5u",
            $$css: true
        },
        containerChatInfoDefault: {
            paddingTop: "xexx8yu",
            fontSize: "x1jchvi3",
            lineHeight: "x1o2sk6j",
            $$css: true
        },
        containerChatInfoLarge: {
            fontSize: "xngnso2",
            $$css: true
        },
        containerRequestReason: {
            width: "x14atkfc",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            paddingInlineStart: "xmzvs34",
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        containerGrayBackground: {
            paddingInlineStart: "xmzvs34",
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        containerEditor: {
            width: "xqv71hg",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            paddingInlineStart: "xmzvs34",
            fontSize: "x1f6kntn",
            backgroundColor: "x1ayflyp",
            $$css: true
        }
    };
    function RComponent(t) {
        const t_ref = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const l_customStyleThemes = l.customStyleThemes;
        const m = l_customStyleThemes === undefined ? [] : l_customStyleThemes;
        const { focusOnMount, selectOnMount, lockable, multiline, onBeginEdit, lowProfile, error, validate, onSave, onError, onCancel, emptyValuePlaceholder, editable } = l;
        const A = editable === undefined ? true : editable;
        const { pending, blockFocusOnLock, managed, managedError, testid } = l;
        const U = testid === undefined ? "text-input" : testid;
        const { inputPlaceholder, direction, maxCodeUnits, softMaxLength, setIsEditing, contextMsg, shutEmojiPickerOnSelect, onCharLimitReachedOnce, containerXstyle, showValidateIcon, showErrorIcon, showSuccessIcon, placeholderClickToEditEnabled } = l;
        const ne = placeholderClickToEditEnabled === undefined ? false : placeholderClickToEditEnabled;
        const l_isRefresh = l.isRefresh;
        const oe = l_isRefresh === undefined ? false : l_isRefresh;
        const { tabOrder, showSendBtn } = l;
        const le = showSendBtn === undefined ? false : showSendBtn;
        const l_onSend = l.onSend;
        const ue = l.emojiBtnPosition === "side";
        const ce = l.emojiBtnPosition === "footer";
        const de = l.photoBtnPosition === "side";
        const me = l.photoBtnPosition === "footer";
        const pe = ue || ce;
        const _e = m.includes(v.ChatInfoLargeText);
        const fe = m.includes(v.ChatInfoDefaultText);
        const inferLinesDirection = l.disableLockedLineDirectionInference !== true ? true : undefined;
        const settings = babelHelpers.extends({
            multiline,
            direction: "auto",
            inferLinesDirection,
            emojiXstyle: l.theme === "large" ? S.largeEmojiVerticalAlign : undefined
        }, l.emojiTextSettingsInLockMode);
        const emojiTextXstyle = [
            l.theme === "small" && S.emojiTextSmall,
            l.showEditOnHover === true && S.emojiTextEditOnHover,
            fe && S.emojiTextChatInfoDefault,
            _e && S.emojiTextChatInfoLarge
        ];
        const Ce = r("useHoverState")();
        const { onMouseEnter, onMouseLeave } = Ce;
        const Se = useState(l.value);
        const Re = Se[0];
        const Le = Se[1];
        const textContent = Re ?? l.value;
        const ke = !textContent;
        const Ie = inputPlaceholder == null || inputPlaceholder === "";
        useEffect(function() {
            Le(l.value);
        }, [
            l.value
        ]);
        const TeRef = useRef(null);
        const DeRef = useRef(null);
        const xeRef = useRef(null);
        const $eRef = useRef(null);
        const Pe = useState(l.startActive ?? false);
        const Ne = Pe[0];
        const Me = Pe[1];
        const we = useState(false);
        const Ae = we[0];
        const Fe = we[1];
        const Oe = useState(l.startActive !== true && !!lockable);
        const Be = Oe[0];
        const We = Oe[1];
        const qe = useState(null);
        const Ue = qe[0];
        const Ve = qe[1];
        const He = function() {
            TeRef.current?.focus();
        };
        useEffect(function() {
            if (setIsEditing != null && Ne !== setIsEditing) {
                Me(setIsEditing);
                We(!setIsEditing);
                He();
            }
        }, [
            setIsEditing
        ]);
        const GeRef = useRef(null);
        const zeRef = useRef(null);
        const jeRef = useRef(null);
        useEffect(function() {
            if (focusOnMount === true) {
                He();
            }
        }, []);
        const KeComponent = function(t) {
            if (t) {
                t.preventDefault();
                t.stopPropagation();
            }
            const Component = r("WAWebEmojiPanel.react");
            const e = <Component ref={DeRef} onEmoji={function(t) {
                if (shutEmojiPickerOnSelect === true) {
                    Qe();
                }
                TeRef.current?.replaceSelection(t);
            }}/>;
            Ve({
                menu: e,
                dirY: o("WAWebDropdown.react").DirY.TOP,
                type: o("WAWebDropdown.react").MenuType.EmojiPicker,
                anchor: t.target
            });
            He();
        };
        var Qe = function() {
            Ve(null);
        };
        const requestFocus = function() {
            DeRef.current?.restoreFocus();
        };
        const Ye = function() {
            let e = !(lowProfile !== true && error);
            if (validate && e) {
                e = validate(textContent);
            }
            if (e) {
                if (onSave) {
                    onSave();
                }
                We(true);
                Me(false);
            } else if (onError) {
                onError();
            }
        };
        const Je = function(t) {
            if (lockable === true) {
                Ye();
            }
            if (le === true && l_onSend != null) {
                l_onSend(textContent);
            }
            if (multiline !== true && t instanceof KeyboardEvent) {
                if (l.onEnter != null) {
                    l.onEnter(t);
                }
            }
        };
        const Ze = function(t) {
            Me(true);
            l.onFocus?.(t);
        };
        const onBlur = function(t) {
            Me(false);
            l.onBlur?.(t);
        };
        const tt = function() {
            if (onBeginEdit) {
                onBeginEdit();
            }
            We(false);
        };
        const nt = r("useWAWebStableCallback")(function() {
            if (onCancel) {
                onCancel();
            }
            We(true);
            Me(false);
            Le(l.value);
        });
        const rt = ()=>ke && emptyValuePlaceholder != null && emptyValuePlaceholder !== "" && Be;
        const ot = r("useWAWebStableCallback")(function() {
            return A && !Be;
        });
        const at = function() {
            if (Ue) {
                requestFocus();
            }
        };
        useEffect(function() {
            const GeRef_current = GeRef.current;
            const zeRef_current = zeRef.current;
            const jeRef_current = jeRef.current;
            GeRef.current = Be;
            zeRef.current = A;
            jeRef.current = pending;
            if (GeRef_current !== true && zeRef_current === true && !A) {
                nt();
            }
            if (xeRef.current) {
                const o = GeRef_current !== true && Be;
                const a = jeRef_current === true && !pending;
                if (blockFocusOnLock !== true && (o || a)) {
                    r("WAWebFocusTracer").focus(xeRef.current);
                }
            }
            const TeRef_current = TeRef.current;
            if ((!ot() || managed === true) && TeRef_current?.getTextContent() !== textContent) {
                if (TeRef_current != null) {
                    TeRef_current.setTextContent(textContent || "");
                }
            }
            if (managedError === true && error != null && Be) {
                We(false);
            }
        }, [
            blockFocusOnLock,
            A,
            error,
            nt,
            ot,
            Be,
            managed,
            managedError,
            pending,
            textContent
        ]);
        const triggerSelect = function() {
            settings.onReadMore?.();
            if (!A && l.editRestrictionInfo) {
                l.editRestrictionInfo();
            } else if (A && Be) {
                tt();
            }
        };
        const triggerFocus = function() {
            $eRef.current?.focus();
            TeRef.current?.focus();
        };
        const selectTextInput = function() {
            triggerFocus();
            TeRef.current?.selectAll();
        };
        const clearTextInput = function() {
            TeRef.current?.reset();
        };
        const focusEditBtn = function() {
            if (xeRef.current) {
                r("WAWebFocusTracer").focus(xeRef.current);
            }
        };
        useImperativeHandle(t_ref, function() {
            return {
                restoreFocus: He,
                triggerSelect,
                triggerFocus,
                selectTextInput,
                clearTextInput,
                focusEditBtn
            };
        });
        const dt = l.maxLength ?? 25;
        const mt = ot();
        const pt = mt && l.error != null && l.error !== "" && !l.lowProfile;
        const _t = m.includes(v.GroupInfoName);
        const ft = !ke || l.theme === "gray-background" && l.hideSpacer !== true;
        const gt = A && l.theme === "editor";
        const ht = gt || l.theme === "request-reason";
        const yt = ht || l.theme === "gray-background";
        const Ct = m.includes(v.DisabledLabel);
        const bt = m.includes(v.DigitalCode);
        const vt = m.includes(v.Desaturated);
        const St = m.includes(v.NoErrorInfo);
        const Rt = l.theme === "invite-message-caption";
        const Lt = {
            container: (u || (u = r("stylex")))(S.textInput, _t && ot() && S.containerGroupInfoNameActive, l.theme === "small" && S.containerSmall, l.showEditOnHover === true && S.containerEditOnHover, fe && S.containerChatInfoDefault, _e && S.containerChatInfoLarge, l.theme === "request-reason" && S.containerRequestReason, l.theme === "gray-background" && S.containerGrayBackground, gt && S.containerEditor, containerXstyle),
            label: u(S.labelText, S.labelTextEllipsified, l.theme !== "small" && S.labelRichTextInput, ke && ue && S.labelWithEmojiIcon, ft && S.labelFloat, l.hideFloatingLabel === true && S.labelHideFloating, l.theme === "label-input" && S.labelLabelInput, l.theme === "invite-message-caption" && S.labelInvite, ht && S.labelEditor, ht && ft && S.labelEditorFloat, yt && S.labelTransformNone, Ct && S.labelDisabled, bt && S.labelDigitalCode),
            inputWrapper: u(oe === true ? S.wrapperRefreshed : S.wrapper, !oe && Be && S.wrapperLocked, !oe && A && Ne && S.wrapperFocused, !oe && vt && S.wrapperDesaturated, !oe && ot() && Rt && S.wrapperBorderNone, !oe && yt && ot() && S.wrapperBorderNone, !oe && pt && S.wrapperError, !oe && l.theme === "small" && S.wrapperSmall, !oe && l.showEditOnHover === true && Be && S.wrapperEditOnHoverLocked, Ne && S.textActive, bt && ot() && S.wrapperDigitalCodeEditing),
            infoWrapper: {
                0: "x1n2onr6 x78zum5 x1cy8zhl x1hshjfz xyqdw3p x1pg5gke x1d3mw78",
                2: "x1n2onr6 x1cy8zhl x1hshjfz xyqdw3p x1pg5gke x1d3mw78 x1s85apg",
                1: "x1n2onr6 x78zum5 x1cy8zhl x1hshjfz xyqdw3p x1pg5gke x1d3mw78 x18d9i69",
                3: "x1n2onr6 x1cy8zhl x1hshjfz xyqdw3p x1pg5gke x1d3mw78 x1s85apg x18d9i69"
            }[!!St << 1 | !!Ne << 0]
        };
        let Et;
        let kt;
        if (l.lockable === true) {
            if (l.pending === true) {
                kt = <div key="spinner" className={oe ? "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x1ypdohk x17gydlx" : ({
                    0: "",
                    1: "xndqk7f"
                })[(l.theme === "small") << 0]}>{d.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 18,
                    stroke: 6,
                    color: "highlight"
                })}</div>;
            } else if (Be) {
                if (A) {
                    const xt = l.fieldName ?? "";
                    const $t = s._("Edit {fieldName}", [
                        s._param("fieldName", xt)
                    ]);
                    const Component = r("WDSButton.react");
                    const Component_1 = r("WDSTooltip.react");
                    kt = <Component_1 label={$t}><Component key="btn-edit" testid={`${U}-edit`} Icon={r("WDSIconIcEdit.react")} variant="borderless" onPress={tt} aria-label={$t} ref={xeRef}/></Component_1>;
                } else if (l.editRestrictionInfo && !A) {
                    const Nt = l.fieldName ?? "";
                    const Mt = Nt !== "" ? s._("{fieldName} edit restriction info", [
                        s._param("fieldName", Nt)
                    ]) : s._("Edit restriction info");
                    const Component = r("WAWebUnstyledButton.react");
                    kt = <Component key="btn-info" xstyle={[
                        oe ? S.iconMainRefreshed : S.iconMain,
                        o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
                    ]} onClick={l.editRestrictionInfo} testid={`${U}-info`} title={Mt}>{d.jsx(r("WDSIconIcInfo.react"), {
                        iconXstyle: S.iconColor
                    })}</Component>;
                }
            } else {
                const Tt = l.fieldName ?? "";
                const Component = r("WAWebUnstyledButton.react");
                kt = <Component key="btn-done" xstyle={[
                    oe ? S.iconMainRefreshed : S.iconMain,
                    o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
                ]} onClick={Ye} disabled={l.disabled} testid={`${U}-save`} title={s._("Click to save {fieldName}, AESC to cancel", [
                    s._param("fieldName", Tt)
                ])}>{d.jsx(r("WDSIconIcCheck.react"), {
                    width: 24,
                    height: 24,
                    testid: "text-field-save-icon"
                })}</Component>;
            }
            if (l.lockable === true && kt != null) {
                const wt = Be && A && !l.pending;
                const Component = r("WAWebVelocityTransitionGroup");
                Et = <Component exit={!l.showEditOnHover} enter={l.showEditOnHover !== true || !Be} xstyle={oe || wt ? [
                    S.iconMainContainerRefreshed,
                    oe && multiline && [
                        S.iconMainContainerMultilineRefreshed,
                        h.marginInlineStart10
                    ],
                    S.alignSelfCenter
                ] : [
                    S.iconMainContainer,
                    l.theme === "small" && S.iconMainContainerSmall,
                    l.showEditOnHover === true && S.iconMainContainerEditOnHover,
                    _e && ot() && S.iconMainContainerChatInfoLarge,
                    S.alignSelfCenter
                ]} transitionName="pop">{kt}</Component>;
            }
        } else if (showValidateIcon === true) {
            let At;
            if (l.pending === true) {
                At = d.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 18,
                    stroke: 6,
                    color: "highlight"
                });
            } else if (error != null || showErrorIcon === true) {
                At = d.jsx(r("WDSIconIcErrorFilled.react"), {
                    height: 18,
                    width: 18,
                    colorName: "secondaryNegative"
                });
            } else if (showSuccessIcon === true) {
                At = d.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                    xstyle: S.successIcon,
                    height: 20,
                    width: 20,
                    viewBox: o("WAWebCheckCircleCropViewBox").CHECK_CIRCLE_FILLED_CROP_VIEWBOX,
                    testid: "checkbox-round-checked"
                });
            }
            if (At != null) {
                const Component = r("WAWebVelocityTransitionGroup");
                Et = <Component appear xstyle={[
                    S.iconMainContainer,
                    l.theme === "small" && S.iconMainContainerSmall,
                    l.showEditOnHover === true && S.iconMainContainerEditOnHover,
                    _e && ot() && S.iconMainContainerChatInfoLarge
                ]} transitionName="pop"><div className="x10l6tqk xfr5jun xyqdw3p x1im30kd xg8j3zb x1djpfga">{At}</div></Component>;
            }
        } else if (le && l_onSend) {
            const disabled = textContent == null || textContent.trim() === "";
            const Component = o("WAWebRound.react").Round;
            const Component_1 = r("WAWebVelocityTransitionGroup");
            Et = <Component_1 appear transitionName="pop"><Component xstyle={[
                S.sendBtn,
                h.marginBottom6
            ]} medium theme={disabled ? o("WAWebRound.react").RoundTheme.Disabled : undefined} onClick={function() {
                return l_onSend(textContent);
            }} disabled={disabled} label={s._("Send")} testid="rich-text-send-button">{d.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
                directional: true
            })}</Component></Component_1>;
        }
        const Component = r("WAWebUnstyledButton.react");
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        const Ot = ot() && pe ? <Component_1 handlers={{
            enter: KeComponent,
            space: KeComponent
        }}><Component key="emoji-btn" dataTab={tabOrder} xstyle={[
            S.btn,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
        ]} onClick={KeComponent} onFocus={at} title={l.fieldName != null ? s._("Open emojis panel, {fieldName} field", [
            s._param("fieldName", l.fieldName)
        ]) : s._("Open emojis panel")}>{d.jsx(r("WDSIconIcMood.react"), {
            width: 24,
            height: 24,
            testid: "rich-text-field-emoji-icon"
        })}</Component></Component_1> : null;
        const Component_2 = r("WAWebUnstyledButton.react");
        const Component_3 = o("WAWebKeyboardHotKeys.react").HotKeys;
        const Bt = <Component_3><Component_2 key="photo-btn" xstyle={[
            S.btn,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
        ]} onClick={l.onPhotoIconClick} title={s._("Add photo")}>{d.jsx(r("WDSIconIcImage.react"), {
            width: b,
            height: b
        })}</Component_2></Component_3>;
        let Wt = null;
        if (l.showRemaining === true) {
            const Ut = o("WAUnicodeUtils").numCodepoints(textContent || "");
            const Vt = (maxCodeUnits ?? Infinity) - o("WAWebCharacterLimitPlugin").numCodeUnits(textContent || "");
            const Ht = Math.min(Vt, dt - Ut);
            const Gt = l.charLimit ?? y;
            const zt = Ht <= Gt && ot();
            if (zt) {
                const jt = Ht <= Math.min(Gt, C);
                Wt = <div key="counter" {...babelHelpers.extends({
                    "aria-label": s._("Characters remaining:"),
                    className: {
                        0: "x1p8j9ns xpcyujq x1f6kntn x19v9tvf xhslqc4 xp4054r",
                        1: "x1p8j9ns xpcyujq x1f6kntn x19v9tvf xp4054r x30a034"
                    }[(Ht < 0) << 0],
                    "aria-live": "polite",
                    "aria-atomic": "true",
                    "aria-busy": "true"
                }, jt && {
                    "aria-busy": "false"
                }, {
                    children: r("WAWebL10N").n(Ht)
                })}/>;
                if (!Ae) {
                    Fe(true);
                    if (onCharLimitReachedOnce != null) {
                        onCharLimitReachedOnce();
                    }
                }
            }
        }
        const Kt = Et != null;
        const Qt = multiline !== true && Be && Kt && oe === true ? <div className="x2lah0s x100vrsf x1vqgdyp"/> : null;
        const Component_4 = r("WAWebDragIconWrapper.react");
        const Xt = l.showDraggableIcon != null && l.showDraggableIcon === true ? null : <div><Component_4 onDragThumbMouseDown={l.onDragThumbMouseDown}/></div>;
        const Component_5 = r("WAWebVelocityTransitionGroup");
        const Yt = ue || l.showRemaining === true ? <Component_5 xstyle={[
            S.iconsEditContainer,
            l.theme === "invite-message-caption" && S.iconsEditContainerInvite,
            _e && ot() && S.iconsEditContainerChatInfoLarge
        ]} exit={!l.showEditOnHover} transitionName="none">{Wt}{de ? Bt : null}{ue ? Ot : null}{ot() && l.onDragThumbMouseDown != null ? Xt : null}</Component_5> : null;
        const Jt = l.error != null && l.error !== "" ? <><div className="x78zum5 x1iyjqo2 xs83m0k x1t1x2f9 x30a034" data-testid={`${U}-error-text`}>{pt ? l.error : null}</div><div className="x10l6tqk x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 xeh89do x1hyvwdk xuxw1ft" role="alert">{s._("Error: {error}", [
            s._param("error", l.error)
        ])}</div></> : null;
        const Zt = contextMsg != null && contextMsg !== "" ? <div className="x1pg5gke xhslqc4" data-testid={`${U}-context-msg`}>{contextMsg}</div> : null;
        const en = l.lowProfile !== true ? <div className="x78zum5 x1q0g3np"><div className="x78zum5 x3ieub6 x1iyjqo2"><div className={Lt.infoWrapper}>{Jt ?? Zt}</div></div>{me && Ne && <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(S.btnFooterContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop2), {
            children: Bt
        })}/>}{ce && <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(S.btnFooterContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop2), {
            children: Ot
        })}/>}</div> : null;
        let tn;
        if (l.lockable === true && !Be) {
            let nn;
            if (Ue) {
                const Component = o("WAWebUimUie.react").UIE;
                nn = <Component displayName="EmojiPicker" escapable popable dismissOnWindowResize requestDismiss={Qe} requestFocus={requestFocus}>{d.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: Ue
                })}</Component>;
            }
            const Component = o("WAWebUimUie.react").UIE;
            tn = <Component displayName="TextInput" escapable dismissOnWindowResize requestFocus={He} requestDismiss={nt}><div>{nn}</div></Component>;
        } else {
            if (l.lockable !== true && Ue) {
                const Component = o("WAWebUimUie.react").UIE;
                tn = <Component displayName="EmojiPicker" escapable popable dismissOnWindowResize requestDismiss={Qe} requestFocus={requestFocus}>{d.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: Ue
                })}</Component>;
            }
        }
        const rn = A && !Be;
        const on = rn;
        let an;
        let ln;
        if (!on) {
            if (ke) {
                if (!Ie) {
                    an = <div className="xhslqc4 xs83m0k x1iyjqo2">{d.jsx(r("WAWebRichTextFieldEmojiTextBlock.react"), {
                        settings,
                        textContent: inputPlaceholder,
                        testid: U,
                        emojiTextXstyle
                    })}</div>;
                }
            } else {
                an = d.jsx(r("WAWebRichTextFieldEmojiTextBlock.react"), {
                    settings,
                    textContent,
                    testid: U,
                    emojiTextXstyle
                });
                if (oe) {
                    an = <div className={(u || (u = r("stylex")))(S.inputWrapperInner, Rt && S.inputWrapperInvite, l.theme === "phone-input" && S.inputWrapperPhone, l.showHighlightOnHover === true && S.inputWrapperHighlight, S.inputWrapperRefreshed, _e && S.groupInfoLargeTextRefreshed, fe && S.chatInfoDefaultTextRefreshed)}>{an}</div>;
                } else if (l.showHighlightOnHover === true) {
                    an = <div className={{
                        0: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli",
                        4: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x1rife3k xjp8j0k",
                        2: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x18d9i69 x6prxxf x1o2sk6j xo1h6xc",
                        6: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x1rife3k xjp8j0k x18d9i69 x6prxxf x1o2sk6j xo1h6xc",
                        1: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli xexx8yu xe2zdcy x2vl965 x10b6aqq",
                        5: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x1rife3k xjp8j0k xexx8yu xe2zdcy x2vl965 x10b6aqq",
                        3: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x6prxxf x1o2sk6j xo1h6xc xexx8yu xe2zdcy x2vl965 x10b6aqq",
                        7: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x1rife3k xjp8j0k x6prxxf x1o2sk6j xo1h6xc xexx8yu xe2zdcy x2vl965 x10b6aqq"
                    }[!!Rt << 2 | (l.theme === "phone-input") << 1 | (l.showHighlightOnHover === true) << 0]}>{an}</div>;
                }
            }
        } else {
            let textXstyle;
            if (m.includes(v.ChatInfoLargeText)) {
                textXstyle = S.textInputFontSize24;
            } else if (m.includes(v.ChatInfoDefaultText) || l.theme === "label-input") {
                if (oe) {
                    textXstyle = S.textInputFontSize15;
                } else {
                    textXstyle = S.textInputFontSize16;
                }
            } else if (l.theme === "editor") {
                textXstyle = S.textInputFontSize14;
            } else if (l.theme === "small") {
                textXstyle = S.textInputFontSize13;
            } else {
                textXstyle = S.textInputFontSize17;
            }
            const style = l.theme === "phone-input" ? {} : {
                paddingTop: 8,
                paddingBottom: 5
            };
            const Component = r("WAWebRichTextInput.react");
            an = <div style={style} className={(u || (u = r("stylex")))(S.inputWrapperInner, Rt && S.inputWrapperInvite, l.theme === "phone-input" && S.inputWrapperPhone, l.showHighlightOnHover === true && S.inputWrapperHighlight, oe && S.inputWrapperRefreshed, l.constrainedWidth === true && S.constrainedWidth)}><Component title={l.title} ariaLabel={l.ariaLabel} testid={U} ref={TeRef} initialText={l.value} multiline={l.multiline} focusOnMount={focusOnMount} selectOnMount={selectOnMount} pasteFromHTML={l.pasteFromHTML} enterIsNewLine={l.enterIsNewLine} onChange={function(t, n) {
                Le(t.text);
                l.onChange?.(t, n);
            }} onFocus={Ze} onBlur={onBlur} onEnter={Je} onKeyDown={l.onKeyDown} onFiles={l.onFiles} maxLength={softMaxLength === true ? undefined : l.maxLength} maxVisibleLines={l.maxVisibleLines} minVisibleLines={l.minVisibleLines} maxCodeUnits={softMaxLength === true ? undefined : maxCodeUnits} placeholder={inputPlaceholder} textXstyle={textXstyle} lineWrap={l.lineWrap} readOnly={l.readOnly} tabOrder={tabOrder}>{d.jsx(r("WAWebRichTextInputPlugins.react"), {
                textFormatEnabled: l.textFormatEnabled,
                bulletPointsEnabled: l.bulletPointsEnabled,
                numberedListEnabled: l.numberedListEnabled,
                inlineCodeEnabled: l.inlineCodeEnabled,
                blockQuoteEnabled: l.blockQuoteEnabled,
                textFormatShortcutsEnabled: l.textFormatShortcutsEnabled,
                linksEnabled: l.linksEnabled,
                internLinksEnabled: l.internLinksEnabled,
                phoneNumbersEnabled: l.phoneNumbersEnabled,
                spoilerEnabled: l.spoilerEnabled,
                floatingToolbarEnabled: l.floatingToolbarEnabled
            })}{d.jsx(r("WAWebEmojiPickerPlugin"), {})}</Component></div>;
            ln = null;
        }
        let cn;
        let dn;
        if (l.placeholder != null) {
            cn = (ke || l.hideFloatingLabel !== true) && <span className={Lt.label}>{l.placeholder}</span>;
            if (l.hideSpacer !== true) {
                dn = <div className={{
                    0: "x1n2onr6 xxk0z11",
                    1: "x1n2onr6 xmix8c7"
                }[(l.theme === "label-input") << 0]}/>;
            }
        }
        const mn = function(t) {
            const $eRef_current = $eRef.current;
            if ($eRef_current != null && t.target instanceof HTMLElement) {
                $eRef_current.contains(t.target);
            }
        };
        const dir = direction ?? (r("WAWebL10N").isRTL() ? "rtl" : "ltr");
        const _n = {
            0: {
                className: "x1v5yvga"
            },
            1: {
                className: "x1v5yvga x1f6kntn"
            }
        }[(l.theme === "small") << 0];
        const fn = <div {...babelHelpers.extends({}, _n, {
            "data-testid": `${U}-empty-placeholder`,
            children: emptyValuePlaceholder
        })}/>;
        const Component_6 = r("WAWebUnstyledButton.react");
        const Component_7 = o("WAWebFlex.react").FlexRow;
        const Component_8 = o("WAWebFlex.react").FlexRow;
        const Component_9 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_9 className={Lt.container} onFocus={mn} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{cn}{dn}<div ref={$eRef} className={Lt.inputWrapper} dir={dir}>{Qt}{ln}{an}{rt() && (ne ? <Component_7 grow={1} paddingBottom={8}><Component_6 onClick={tt} xstyle={S.textAlign}>{fn}</Component_6></Component_7> : fn)}<Component_8 columnGap={8}>{Yt}{Et}</Component_8></div>{en}{tn}</Component_9>;
    }
    RComponent.displayName = `${RComponent.name} [from ${i.id}]`;
    const L = RComponent;
    l.TextInputCustomStyleThemes = v;
    l.RichTextField = L;
}, 226);