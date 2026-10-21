__d("WAWebMessageComposer.react", [
    "WAWebAiModeSelector.react",
    "WAWebAttachMenuBarItem.react",
    "WAWebBot3pMediaGating",
    "WAWebBotGating",
    "WAWebBotProfileGetters",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebComposeBoxSendButton.react",
    "WAWebContactGetters",
    "WAWebEnvironment",
    "WAWebExpressionsPanelPicker.react",
    "WAWebIsInThreadsViewContext",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPttComposer.react",
    "WAWebQuestions.flow",
    "WAWebQuestionsAdminGatingUtils",
    "WAWebQuestionsGatingUtils",
    "WAWebQuickReplyComposerButton.react",
    "WAWebQuickReplyGatingUtils",
    "WAWebResolveSupportedMediaTypes",
    "WAWebScheduleMessageButton.react",
    "WAWebScheduledMsgActionLogger",
    "WAWebScheduledMsgConstants",
    "WAWebStateUtils",
    "WDSMargins.stylex",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCloseMenusOnAgentTakeover",
    "useWAWebListener",
    "useWAWebOptionalBotProfileValues",
    "useWAWebScheduledMsgCount"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useContext, useRef } = c;
    const p = {
        padding5: {
            paddingTop: "x123j3cw",
            paddingInlineEnd: "x1gabggj",
            paddingBottom: "xs9asl8",
            paddingInlineStart: "xaso8d8",
            $$css: true
        }
    };
    const _ = "border-radius 300ms, box-shadow 300ms";
    const f = 200;
    const g = 160;
    const h = {
        inputContainer: {
            boxSizing: "x9f619",
            flex: "x12lumcd",
            width: "x1qrby5j",
            minWidth: "xeuugli",
            minHeight: "xisnujt",
            fontSize: "x6prxxf",
            fontWeight: "x1fcty0u",
            lineHeight: "x1fc57z9",
            backgroundColor: "xk7ee7b",
            borderTopColor: "x1v8p93f",
            borderInlineEndColor: "x1o3jo1z",
            borderBottomColor: "x16stqrj",
            borderInlineStartColor: "xv5lvn5",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            outline: "x1a2a7pz",
            willChange: "x13w7htt",
            display: "x78zum5",
            $$css: true
        },
        inputContainerMaterial: {
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            $$css: true
        },
        inputContainerRefresh: {
            minHeight: "x1wiwyrm",
            height: "xt7dq6l",
            borderStartStartRadius: "x17m9png",
            borderStartEndRadius: "x91sizk",
            borderEndEndRadius: "x1vva9xg",
            borderEndStartRadius: "x1jfkl46",
            alignItems: "x6s0dn4",
            transition: "x1m0b2ad",
            $$css: true
        },
        inputBoxShadow: {
            boxShadow: "xkfubxc",
            $$css: true
        },
        questionInputContainer: {
            backgroundColor: "x4wrhlh",
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            $$css: true
        },
        withoutTopBorder: {
            borderTopWidth: "x972fbf",
            $$css: true
        },
        inputContainerRefreshNoTopPanel: {
            transition: "x1p0mfcu",
            $$css: true
        },
        inputContainerHasTopPanel: {
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            boxShadow: "xz16w4b",
            transition: "x1m0b2ad",
            $$css: true
        },
        containedInputRow: {
            backgroundColor: "xjbqb8w",
            boxShadow: "x1gnnqk1",
            $$css: true
        },
        containedInputRowTwoLine: {
            flexDirection: "xdt5ytf",
            alignItems: "x1qjc9v5",
            rowGap: "x129bwdz",
            minHeight: "x65nank",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            borderEndEndRadius: "x1e7945m",
            borderEndStartRadius: "x11o6v7j",
            paddingBottom: "x6q6752",
            paddingTop: "x1xrf6ya",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    function y(t) {
        const n = o("react-compiler-runtime").c(219);
        const { chat, closePttComposer, expressionsPanelPickerRef, expressionsPanelWrapperRef, getCurrentComposeContent, handleInputBlur, handleInputFocus, handleMetaUpDebounced, handlePanelsGif, handlePanelsSticker, handlePanelsStickerFromStore, handleSendText, handleTab, hasTextState, hasTopPanel, input, inputHotkeyRef, isMessageToBot, onAlternateSendFlowStart, onPttSend, onScheduleSend, pttComposerActive, questionReplyQuotedMessage, questionType, recordingSession, ref, replaceInputSelection, richTextInputRef, smartComposer, startRecording, threadId, updateTextAfterMediaDrawerClose, wwaiButton } = t;
        const GRef = useRef(null);
        let z;
        if (n[0] !== smartComposer?.agentActive) {
            z = function() {
                const GRef_current = GRef.current;
                if (GRef_current != null && smartComposer?.agentActive !== true) {
                    GRef_current.open();
                }
            };
            n[0] = smartComposer?.agentActive;
            n[1] = z;
        } else {
            z = n[1];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_attachment_dropdown", z);
        const j = questionType === o("WAWebQuestions.flow").QuestionType.Question;
        const K = questionType === o("WAWebQuestions.flow").QuestionType.Reply;
        let Q;
        if (n[2] !== chat) {
            Q = o("WAWebQuestionsAdminGatingUtils").isQuestionsM2FeatureEnabledForAdmins(chat);
            n[2] = chat;
            n[3] = Q;
        } else {
            Q = n[3];
        }
        const X = Q;
        const Y = useContext(r("WAWebIsInThreadsViewContext"));
        const J = r("useWAWebScheduledMsgCount")(onScheduleSend != null ? chat.id : null);
        const atLimit = J >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT;
        const ee = smartComposer?.agentActive === true;
        let te;
        if (n[4] !== chat.id) {
            te = chat.id.isAiHub();
            n[4] = chat.id;
            n[5] = te;
        } else {
            te = n[5];
        }
        const ne = te;
        let re;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            re = [
                o("WAWebBotProfileGetters").getProduct,
                o("WAWebBotProfileGetters").getIsDeprecated,
                o("WAWebBotProfileGetters").getIsDeleted
            ];
            n[6] = re;
        } else {
            re = n[6];
        }
        o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(chat.id, re);
        let oe;
        let ae;
        let isInteractive;
        let le;
        let se;
        let ue;
        let ce;
        let supportsPtt;
        let handlePanelsGif_1;
        let isDisabled;
        let isStickerEnabled;
        let isGifEnabled;
        let expressionsPanelWrapperRef_1;
        let expressionsPanelPickerRef_1;
        let replaceInputSelection_1;
        let handlePanelsSticker_1;
        let handlePanelsStickerFromStore_1;
        if (n[7] !== ee || n[8] !== chat || n[9] !== expressionsPanelPickerRef || n[10] !== expressionsPanelWrapperRef || n[11] !== handlePanelsGif || n[12] !== handlePanelsSticker || n[13] !== handlePanelsStickerFromStore || n[14] !== Y || n[15] !== ne || n[16] !== isMessageToBot || n[17] !== j || n[18] !== K || n[19] !== X || n[20] !== pttComposerActive || n[21] !== replaceInputSelection || n[22] !== richTextInputRef || n[23] !== smartComposer) {
            const ve = o("WAWebResolveSupportedMediaTypes").resolveBot3pMediaMode(chat);
            const Se = ve == null ? null : o("WAWebBot3pMediaGating").getBot3pSupportedMediaTypes(ve);
            supportsPtt = !Y && (!o("WAWebChatGetters").getIsNewsletter(chat) || o("WAWebNewsletterGatingUtils").isNewsletterPTTReceivingEnabled()) && (!j || X && o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(o("WAWebMsgType").MSG_TYPE.PTT)) && (!K || X && o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(o("WAWebMsgType").MSG_TYPE.PTT)) && !o("WAWebContactGetters").getIsCAPISupportAccount(chat.contact) && (!isMessageToBot || chat.id.isSupportAgentBot() || o("WAWebBotGating").isBotPttEnabled(chat.id)) && (Se == null || Se.has(o("WAWebMsgType").MSG_TYPE.PTT)) && !o("WAWebChatGetters").getIsBroadcast(chat) && !ne;
            ue = pttComposerActive && !ee;
            ae = smartComposer != null;
            se = ae && !ue;
            let Re;
            if (n[41] !== ae || n[42] !== ue || n[43] !== richTextInputRef) {
                Re = function({ currentTarget, target }) {
                    const r = ae && target instanceof Node && target.parentNode === currentTarget;
                    if ((target === currentTarget || r) && ue === false) {
                        if (richTextInputRef != null) {
                            richTextInputRef.focus();
                        }
                    }
                };
                n[41] = ae;
                n[42] = ue;
                n[43] = richTextInputRef;
                n[44] = Re;
            } else {
                Re = n[44];
            }
            oe = Re;
            let Le;
            if (n[45] !== chat.id) {
                Le = o("WAWebBotUtils").isMetaAiBot(chat.id);
                n[45] = chat.id;
                n[46] = Le;
            } else {
                Le = n[46];
            }
            const Ee = Le;
            let ke;
            if (n[47] !== chat.id) {
                ke = o("WAWebBotUtils").isBotChannelFBID(chat.id);
                n[47] = chat.id;
                n[48] = ke;
            } else {
                ke = n[48];
            }
            const Te = isMessageToBot && (o("WAWebBotGating").isMediaInputEnabledForAssistantBotChat(chat.id) || ke || chat.id.isSupportAgentBot() || Se != null && Se.size > 0);
            le = !isMessageToBot || Te;
            const De = !ee && le;
            const xe = (t)=>{
                if (!De || Se != null && !Se.has(t)) {
                    return false;
                }
                if (j) {
                    return o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(t);
                }
                if (K) {
                    return o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(t);
                }
                return !o("WAWebChatGetters").getIsBroadcast(chat);
            };
            ce = Ee;
            let $e;
            if (n[49] !== ce) {
                $e = ce && o("WAWebBotGating").isAiModeSelectorInteractive();
                n[49] = ce;
                n[50] = $e;
            } else {
                $e = n[50];
            }
            isInteractive = $e;
            const Pe = !ne && (ve != null ? o("WAWebBot3pMediaGating").isBot3pExpressionsSupported(ve) : !isMessageToBot);
            expressionsPanelWrapperRef_1 = expressionsPanelWrapperRef;
            expressionsPanelPickerRef_1 = expressionsPanelPickerRef;
            replaceInputSelection_1 = replaceInputSelection;
            handlePanelsSticker_1 = handlePanelsSticker;
            handlePanelsStickerFromStore_1 = handlePanelsStickerFromStore;
            handlePanelsGif_1 = handlePanelsGif;
            isDisabled = ee;
            isStickerEnabled = Pe && xe(o("WAWebMsgType").MSG_TYPE.STICKER);
            isGifEnabled = Pe && xe(o("WAWebMsgType").MSG_TYPE.VIDEO);
            n[7] = ee;
            n[8] = chat;
            n[9] = expressionsPanelPickerRef;
            n[10] = expressionsPanelWrapperRef;
            n[11] = handlePanelsGif;
            n[12] = handlePanelsSticker;
            n[13] = handlePanelsStickerFromStore;
            n[14] = Y;
            n[15] = ne;
            n[16] = isMessageToBot;
            n[17] = j;
            n[18] = K;
            n[19] = X;
            n[20] = pttComposerActive;
            n[21] = replaceInputSelection;
            n[22] = richTextInputRef;
            n[23] = smartComposer;
            n[24] = oe;
            n[25] = ae;
            n[26] = isInteractive;
            n[27] = le;
            n[28] = se;
            n[29] = ue;
            n[30] = ce;
            n[31] = supportsPtt;
            n[32] = handlePanelsGif_1;
            n[33] = isDisabled;
            n[34] = isStickerEnabled;
            n[35] = isGifEnabled;
            n[36] = expressionsPanelWrapperRef_1;
            n[37] = expressionsPanelPickerRef_1;
            n[38] = replaceInputSelection_1;
            n[39] = handlePanelsSticker_1;
            n[40] = handlePanelsStickerFromStore_1;
        } else {
            oe = n[24];
            ae = n[25];
            isInteractive = n[26];
            le = n[27];
            se = n[28];
            ue = n[29];
            ce = n[30];
            supportsPtt = n[31];
            handlePanelsGif_1 = n[32];
            isDisabled = n[33];
            isStickerEnabled = n[34];
            isGifEnabled = n[35];
            expressionsPanelWrapperRef_1 = n[36];
            expressionsPanelPickerRef_1 = n[37];
            replaceInputSelection_1 = n[38];
            handlePanelsSticker_1 = n[39];
            handlePanelsStickerFromStore_1 = n[40];
        }
        let Ne;
        let handleClose;
        if (n[51] !== richTextInputRef) {
            Ne = function() {
                return richTextInputRef;
            };
            handleClose = function() {
                return richTextInputRef?.focus();
            };
            n[51] = richTextInputRef;
            n[52] = Ne;
            n[53] = handleClose;
        } else {
            Ne = n[52];
            handleClose = n[53];
        }
        const we = K || j ? o("WAWebExpressionsPanelPicker.react").ExpressionsPanelSize.SMALL : undefined;
        let Ae;
        if (n[54] !== handlePanelsGif_1 || n[55] !== isDisabled || n[56] !== isStickerEnabled || n[57] !== isGifEnabled || n[58] !== Ne || n[59] !== handleClose || n[60] !== we || n[61] !== expressionsPanelWrapperRef_1 || n[62] !== expressionsPanelPickerRef_1 || n[63] !== replaceInputSelection_1 || n[64] !== handlePanelsSticker_1 || n[65] !== handlePanelsStickerFromStore_1) {
            Ae = {
                expressionsPanelWrapperRef: expressionsPanelWrapperRef_1,
                expressionsPanelPickerRef: expressionsPanelPickerRef_1,
                replaceInputSelection: replaceInputSelection_1,
                handlePanelsSticker: handlePanelsSticker_1,
                handlePanelsStickerFromStore: handlePanelsStickerFromStore_1,
                handlePanelsGif: handlePanelsGif_1,
                isDisabled,
                isStickerEnabled,
                isGifEnabled,
                getComposeBoxEditorRef: Ne,
                handleClose,
                size: we
            };
            n[54] = handlePanelsGif_1;
            n[55] = isDisabled;
            n[56] = isStickerEnabled;
            n[57] = isGifEnabled;
            n[58] = Ne;
            n[59] = handleClose;
            n[60] = we;
            n[61] = expressionsPanelWrapperRef_1;
            n[62] = expressionsPanelPickerRef_1;
            n[63] = replaceInputSelection_1;
            n[64] = handlePanelsSticker_1;
            n[65] = handlePanelsStickerFromStore_1;
            n[66] = Ae;
        } else {
            Ae = n[66];
        }
        const Fe = Ae;
        let Oe;
        let Be;
        let We;
        let qe;
        let Ue;
        if (n[67] !== ee || n[68] !== chat || n[69] !== closePttComposer || n[70] !== Fe || n[71] !== getCurrentComposeContent || n[72] !== handleMetaUpDebounced || n[73] !== handleSendText || n[74] !== handleTab || n[75] !== hasTextState || n[76] !== hasTopPanel || n[77] !== input || n[78] !== inputHotkeyRef || n[79] !== atLimit || n[80] !== ae || n[81] !== Y || n[82] !== isInteractive || n[83] !== le || n[84] !== isMessageToBot || n[85] !== j || n[86] !== K || n[87] !== se || n[88] !== onAlternateSendFlowStart || n[89] !== onPttSend || n[90] !== onScheduleSend || n[91] !== ue || n[92] !== questionReplyQuotedMessage || n[93] !== questionType || n[94] !== recordingSession || n[95] !== richTextInputRef || n[96] !== ce || n[97] !== smartComposer || n[98] !== startRecording || n[99] !== supportsPtt || n[100] !== threadId || n[101] !== updateTextAfterMediaDrawerClose || n[102] !== wwaiButton) {
            const Ve = ue ? [
                p.padding5
            ] : [];
            const He = ae ? Ve : [
                p.padding5,
                o("WDSMargins.stylex").wdsMargins.marginHor12,
                o("WDSMargins.stylex").wdsMargins.marginBottom12
            ];
            let Ge;
            if (n[108] !== onAlternateSendFlowStart || n[109] !== startRecording) {
                Ge = function() {
                    onAlternateSendFlowStart();
                    startRecording();
                };
                n[108] = onAlternateSendFlowStart;
                n[109] = startRecording;
                n[110] = Ge;
            } else {
                Ge = n[110];
            }
            const onStartRecording = Ge;
            let showAiSendIcon;
            if (n[111] !== chat.id || n[112] !== isMessageToBot) {
                showAiSendIcon = isMessageToBot && !chat.id.isPaymentSupportAgentBot();
                n[111] = chat.id;
                n[112] = isMessageToBot;
                n[113] = showAiSendIcon;
            } else {
                showAiSendIcon = n[113];
            }
            const buttonVariant = (K || j) && !hasTextState ? "tonal" : undefined;
            let Qe;
            if (n[114] !== handleSendText || n[115] !== onStartRecording || n[116] !== hasTextState || n[117] !== recordingSession || n[118] !== supportsPtt || n[119] !== showAiSendIcon || n[120] !== buttonVariant) {
                const Component = o("WAWebComposeBoxSendButton.react").SendButtonRefresh;
                Qe = <Component supportsPtt={supportsPtt} onClickSend={handleSendText} recordingSession={recordingSession} onStartRecording={onStartRecording} hasTextState={hasTextState} showAiSendIcon={showAiSendIcon} buttonVariant={buttonVariant}/>;
                n[114] = handleSendText;
                n[115] = onStartRecording;
                n[116] = hasTextState;
                n[117] = recordingSession;
                n[118] = supportsPtt;
                n[119] = showAiSendIcon;
                n[120] = buttonVariant;
                n[121] = Qe;
            } else {
                Qe = n[121];
            }
            const Xe = Qe;
            let Ye;
            if (n[122] !== chat || n[123] !== hasTextState || n[124] !== atLimit || n[125] !== onScheduleSend || n[126] !== recordingSession) {
                const Component = r("WAWebScheduleMessageButton.react");
                Ye = onScheduleSend != null && hasTextState && recordingSession == null ? <Component atLimit={atLimit} isGroup={o("WAWebChatGetters").getIsGroup(chat)} onOpenPicker={function() {
                    return o("WAWebScheduledMsgActionLogger").logScheduledMsgOpenPicker(chat);
                }} onScheduleSend={onScheduleSend} onSelectDateTime={function() {
                    return o("WAWebScheduledMsgActionLogger").logScheduledMsgSelectDateTime(chat);
                }}/> : null;
                n[122] = chat;
                n[123] = hasTextState;
                n[124] = atLimit;
                n[125] = onScheduleSend;
                n[126] = recordingSession;
                n[127] = Ye;
            } else {
                Ye = n[127];
            }
            const Je = Ye;
            let Ze;
            if (!Y && le && (!j || o("WAWebQuestionsGatingUtils").getEnabledQuestionAttachmentTypes().size > 0) && (!K || o("WAWebQuestionsGatingUtils").getEnabledQuestionReplyAttachmentTypes().size > 0)) {
                let et;
                if (n[128] === Symbol.for("react.memo_cache_sentinel")) {
                    et = {
                        className: "x100vrsf x1vqgdyp x78zum5 x6s0dn4 xpvyfi4"
                    };
                    n[128] = et;
                } else {
                    et = n[128];
                }
                let tt;
                if (n[129] !== chat) {
                    tt = o("WAWebStateUtils").unproxy(chat);
                    n[129] = chat;
                    n[130] = tt;
                } else {
                    tt = n[130];
                }
                let nt;
                if (n[131] !== richTextInputRef) {
                    nt = function() {
                        return richTextInputRef;
                    };
                    n[131] = richTextInputRef;
                    n[132] = nt;
                } else {
                    nt = n[132];
                }
                let rt;
                if (n[133] !== getCurrentComposeContent || n[134] !== onAlternateSendFlowStart || n[135] !== questionReplyQuotedMessage || n[136] !== questionType || n[137] !== tt || n[138] !== nt || n[139] !== threadId || n[140] !== updateTextAfterMediaDrawerClose) {
                    const Component = r("WAWebAttachMenuBarItem.react");
                    rt = <div {...babelHelpers.extends({}, et, {
                        children: <Component ref={GRef} chat={tt} getComposeContents={getCurrentComposeContent} getComposeBoxEditorRef={nt} onAlternateSendFlowStart={onAlternateSendFlowStart} onMenuComplete={updateTextAfterMediaDrawerClose} questionType={questionType} questionReplyQuotedMessage={questionReplyQuotedMessage} threadId={threadId}/>
                    })}/>;
                    n[133] = getCurrentComposeContent;
                    n[134] = onAlternateSendFlowStart;
                    n[135] = questionReplyQuotedMessage;
                    n[136] = questionType;
                    n[137] = tt;
                    n[138] = nt;
                    n[139] = threadId;
                    n[140] = updateTextAfterMediaDrawerClose;
                    n[141] = rt;
                } else {
                    rt = n[141];
                }
                Ze = rt;
            }
            let ot;
            if (n[142] !== Fe) {
                ot = <V5Component {...babelHelpers.extends({}, Fe)}/>;
                n[142] = Fe;
                n[143] = ot;
            } else {
                ot = n[143];
            }
            let at;
            if (n[144] !== chat) {
                at = o("WAWebQuickReplyGatingUtils").isQuickReplyComposerEntryPointEnabled(o("WAWebStateUtils").unproxy(chat)) && u.jsx(r("WAWebQuickReplyComposerButton.react"), {});
                n[144] = chat;
                n[145] = at;
            } else {
                at = n[145];
            }
            let it;
            if (n[146] !== Ze || n[147] !== ot || n[148] !== at) {
                it = <>{Ze}{ot}{at}</>;
                n[146] = Ze;
                n[147] = ot;
                n[148] = at;
                n[149] = it;
            } else {
                it = n[149];
            }
            const leadingActions = it;
            const st = !ce && smartComposer?.modePill;
            let ut;
            if (n[150] !== chat || n[151] !== isInteractive || n[152] !== ce || n[153] !== threadId) {
                ut = ce && u.jsx(r("WAWebAiModeSelector.react"), {
                    chat,
                    threadId,
                    isInteractive
                });
                n[150] = chat;
                n[151] = isInteractive;
                n[152] = ce;
                n[153] = threadId;
                n[154] = ut;
            } else {
                ut = n[154];
            }
            let ct;
            if (n[155] !== st || n[156] !== ut) {
                ct = <>{st}{ut}</>;
                n[155] = st;
                n[156] = ut;
                n[157] = ct;
            } else {
                ct = n[157];
            }
            const modeControls = ct;
            let mt;
            if (n[158] !== Je || n[159] !== Xe || n[160] !== wwaiButton) {
                mt = <>{Je}{wwaiButton}{Xe}</>;
                n[158] = Je;
                n[159] = Xe;
                n[160] = wwaiButton;
                n[161] = mt;
            } else {
                mt = n[161];
            }
            const trailingActions = mt;
            if (ue) {
                let _t;
                if (n[162] === Symbol.for("react.memo_cache_sentinel")) {
                    _t = {
                        className: "x78zum5 x13a6bvl xh8yej3 x67bb7w"
                    };
                    n[162] = _t;
                } else {
                    _t = n[162];
                }
                let ft;
                if (n[163] !== chat) {
                    ft = o("WAWebStateUtils").unproxy(chat);
                    n[163] = chat;
                    n[164] = ft;
                } else {
                    ft = n[164];
                }
                let gt;
                if (n[165] !== recordingSession) {
                    gt = r("nullthrows")(recordingSession);
                    n[165] = recordingSession;
                    n[166] = gt;
                } else {
                    gt = n[166];
                }
                let ht;
                if (n[167] !== closePttComposer || n[168] !== onPttSend || n[169] !== questionReplyQuotedMessage || n[170] !== questionType || n[171] !== ft || n[172] !== gt || n[173] !== threadId) {
                    const Component = r("WAWebPttComposer.react");
                    ht = <div {...babelHelpers.extends({}, _t, {
                        children: <Component chat={ft} recordingSession={gt} onComplete={closePttComposer} onSend={onPttSend} questionType={questionType} questionReplyQuotedMessage={questionReplyQuotedMessage} threadId={threadId}/>
                    })}/>;
                    n[167] = closePttComposer;
                    n[168] = onPttSend;
                    n[169] = questionReplyQuotedMessage;
                    n[170] = questionType;
                    n[171] = ft;
                    n[172] = gt;
                    n[173] = threadId;
                    n[174] = ht;
                } else {
                    ht = n[174];
                }
                Be = ht;
            } else if (smartComposer != null) {
                let yt;
                if (n[175] !== ee || n[176] !== input || n[177] !== leadingActions || n[178] !== modeControls || n[179] !== smartComposer.status || n[180] !== smartComposer.stop || n[181] !== trailingActions) {
                    yt = <C agentActive={ee} input={input} leadingActions={leadingActions} modeControls={modeControls} statusSlot={smartComposer.status} stopSlot={smartComposer.stop} trailingActions={trailingActions}/>;
                    n[175] = ee;
                    n[176] = input;
                    n[177] = leadingActions;
                    n[178] = modeControls;
                    n[179] = smartComposer.status;
                    n[180] = smartComposer.stop;
                    n[181] = trailingActions;
                    n[182] = yt;
                } else {
                    yt = n[182];
                }
                Be = yt;
            } else {
                let Ct;
                if (n[183] !== input || n[184] !== leadingActions || n[185] !== modeControls || n[186] !== trailingActions) {
                    Ct = <>{leadingActions}{input}{modeControls}{trailingActions}</>;
                    n[183] = input;
                    n[184] = leadingActions;
                    n[185] = modeControls;
                    n[186] = trailingActions;
                    n[187] = Ct;
                } else {
                    Ct = n[187];
                }
                Be = Ct;
            }
            const bt = r("WAWebEnvironment").isWindows;
            let vt;
            if (n[188] !== ee || n[189] !== handleMetaUpDebounced) {
                vt = ee ? {} : babelHelpers.extends({}, bt ? {
                    "ctrl+up": handleMetaUpDebounced
                } : {
                    "meta+up": handleMetaUpDebounced
                }, {
                    up: handleMetaUpDebounced
                });
                n[188] = ee;
                n[189] = handleMetaUpDebounced;
                n[190] = vt;
            } else {
                vt = n[190];
            }
            let St;
            if (n[191] !== handleTab || n[192] !== vt) {
                St = babelHelpers.extends({
                    tab: handleTab,
                    "shift+tab": handleTab
                }, vt);
                n[191] = handleTab;
                n[192] = vt;
                n[193] = St;
            } else {
                St = n[193];
            }
            We = St;
            Oe = o("WAWebKeyboardHotKeys.react").HotKeys;
            qe = inputHotkeyRef;
            Ue = (e || (e = r("stylex")))(h.inputContainer, He, h.inputContainerMaterial, h.inputContainerRefresh, !questionType && h.inputBoxShadow, !hasTopPanel && h.inputContainerRefreshNoTopPanel, hasTopPanel && h.inputContainerHasTopPanel, questionType && h.questionInputContainer, questionType != null && hasTopPanel && h.withoutTopBorder, ae && h.containedInputRow, se && h.containedInputRowTwoLine);
            n[67] = ee;
            n[68] = chat;
            n[69] = closePttComposer;
            n[70] = Fe;
            n[71] = getCurrentComposeContent;
            n[72] = handleMetaUpDebounced;
            n[73] = handleSendText;
            n[74] = handleTab;
            n[75] = hasTextState;
            n[76] = hasTopPanel;
            n[77] = input;
            n[78] = inputHotkeyRef;
            n[79] = atLimit;
            n[80] = ae;
            n[81] = Y;
            n[82] = isInteractive;
            n[83] = le;
            n[84] = isMessageToBot;
            n[85] = j;
            n[86] = K;
            n[87] = se;
            n[88] = onAlternateSendFlowStart;
            n[89] = onPttSend;
            n[90] = onScheduleSend;
            n[91] = ue;
            n[92] = questionReplyQuotedMessage;
            n[93] = questionType;
            n[94] = recordingSession;
            n[95] = richTextInputRef;
            n[96] = ce;
            n[97] = smartComposer;
            n[98] = startRecording;
            n[99] = supportsPtt;
            n[100] = threadId;
            n[101] = updateTextAfterMediaDrawerClose;
            n[102] = wwaiButton;
            n[103] = Oe;
            n[104] = Be;
            n[105] = We;
            n[106] = qe;
            n[107] = Ue;
        } else {
            Oe = n[103];
            Be = n[104];
            We = n[105];
            qe = n[106];
            Ue = n[107];
        }
        let Rt;
        if (n[194] !== Oe || n[195] !== Be || n[196] !== handleInputBlur || n[197] !== oe || n[198] !== handleInputFocus || n[199] !== We || n[200] !== qe || n[201] !== Ue) {
            Rt = <Oe ref={qe} className={Ue} handlers={We} onClick={oe} onFocus={handleInputFocus} onBlur={handleInputBlur}>{Be}</Oe>;
            n[194] = Oe;
            n[195] = Be;
            n[196] = handleInputBlur;
            n[197] = oe;
            n[198] = handleInputFocus;
            n[199] = We;
            n[200] = qe;
            n[201] = Ue;
            n[202] = Rt;
        } else {
            Rt = n[202];
        }
        const Lt = Rt;
        let Et;
        if (n[203] === Symbol.for("react.memo_cache_sentinel")) {
            Et = {
                className: "x78zum5 xuk3077"
            };
            n[203] = Et;
        } else {
            Et = n[203];
        }
        let kt;
        if (n[204] !== hasTopPanel || n[205] !== ae || n[206] !== se || n[207] !== ue) {
            kt = ({
                0: {
                    className: "x78zum5 x98rzlu xuk3077 xeuugli"
                },
                8: {
                    className: "x78zum5 x98rzlu xeuugli x1qjc9v5 xk7ee7b xuqqiot x1lkg3h2 x17mbzc4 xcouhex x1ejq31n x18oe1m7 x1sy0etr xstzfhl xkfubxc x9f619 xdt5ytf xcytdqz x1uvdrpn x14mko6t x16ovd2e x12xbjc7 x1n2onr6 x1m0b2ad"
                },
                4: {
                    className: "x78zum5 x98rzlu xuk3077 xeuugli x1gxa6cn xa0aww2 x4tra6z x1j8ymqv"
                },
                12: {
                    className: "x78zum5 x98rzlu xeuugli x1qjc9v5 xk7ee7b xuqqiot x1lkg3h2 x17mbzc4 xcouhex x1ejq31n x18oe1m7 x1sy0etr xstzfhl xkfubxc x9f619 xdt5ytf xcytdqz x1uvdrpn x14mko6t x1n2onr6 x1m0b2ad x1gxa6cn xa0aww2 x4tra6z x1j8ymqv"
                },
                2: {
                    className: "x78zum5 x98rzlu xuk3077 xeuugli x1bczwif x17un8ov"
                },
                10: {
                    className: "x78zum5 x98rzlu xeuugli x1qjc9v5 xk7ee7b x17mbzc4 xcouhex x1ejq31n x18oe1m7 x1sy0etr xstzfhl xkfubxc x9f619 xdt5ytf xcytdqz x1uvdrpn x14mko6t x16ovd2e x12xbjc7 x1n2onr6 x1m0b2ad x1bczwif x17un8ov"
                },
                6: {
                    className: "x78zum5 x98rzlu xuk3077 xeuugli x1gxa6cn xa0aww2 x4tra6z x1j8ymqv x1bczwif x17un8ov"
                },
                14: {
                    className: "x78zum5 x98rzlu xeuugli x1qjc9v5 xk7ee7b x17mbzc4 xcouhex x1ejq31n x18oe1m7 x1sy0etr xstzfhl xkfubxc x9f619 xdt5ytf xcytdqz x1uvdrpn x14mko6t x1n2onr6 x1m0b2ad x1gxa6cn xa0aww2 x4tra6z x1j8ymqv x1bczwif x17un8ov"
                },
                1: {
                    className: "x78zum5 x98rzlu xuk3077 xeuugli x47corl"
                },
                9: {
                    className: "x78zum5 x98rzlu xeuugli x1qjc9v5 xk7ee7b xuqqiot x1lkg3h2 x17mbzc4 xcouhex x1ejq31n x18oe1m7 x1sy0etr xstzfhl xkfubxc x9f619 xdt5ytf xcytdqz x1uvdrpn x14mko6t x16ovd2e x12xbjc7 x1n2onr6 x1m0b2ad x47corl"
                },
                5: {
                    className: "x78zum5 x98rzlu xuk3077 xeuugli x1gxa6cn xa0aww2 x4tra6z x1j8ymqv x47corl"
                },
                13: {
                    className: "x78zum5 x98rzlu xeuugli x1qjc9v5 xk7ee7b xuqqiot x1lkg3h2 x17mbzc4 xcouhex x1ejq31n x18oe1m7 x1sy0etr xstzfhl xkfubxc x9f619 xdt5ytf xcytdqz x1uvdrpn x14mko6t x1n2onr6 x1m0b2ad x1gxa6cn xa0aww2 x4tra6z x1j8ymqv x47corl"
                },
                3: {
                    className: "x78zum5 x98rzlu xuk3077 xeuugli x1bczwif x17un8ov x47corl"
                },
                11: {
                    className: "x78zum5 x98rzlu xeuugli x1qjc9v5 xk7ee7b x17mbzc4 xcouhex x1ejq31n x18oe1m7 x1sy0etr xstzfhl xkfubxc x9f619 xdt5ytf xcytdqz x1uvdrpn x14mko6t x16ovd2e x12xbjc7 x1n2onr6 x1m0b2ad x1bczwif x17un8ov x47corl"
                },
                7: {
                    className: "x78zum5 x98rzlu xuk3077 xeuugli x1gxa6cn xa0aww2 x4tra6z x1j8ymqv x1bczwif x17un8ov x47corl"
                },
                15: {
                    className: "x78zum5 x98rzlu xeuugli x1qjc9v5 xk7ee7b x17mbzc4 xcouhex x1ejq31n x18oe1m7 x1sy0etr xstzfhl xkfubxc x9f619 xdt5ytf xcytdqz x1uvdrpn x14mko6t x1n2onr6 x1m0b2ad x1gxa6cn xa0aww2 x4tra6z x1j8ymqv x1bczwif x17un8ov x47corl"
                }
            })[!!ae << 3 | !!se << 2 | !!(ae && hasTopPanel) << 1 | !!ue << 0];
            n[204] = hasTopPanel;
            n[205] = ae;
            n[206] = se;
            n[207] = ue;
            n[208] = kt;
        } else {
            kt = n[208];
        }
        let It;
        if (n[209] !== Lt || n[210] !== hasTopPanel || n[211] !== smartComposer) {
            It = smartComposer == null ? Lt : <>{smartComposer.frame}<div {...babelHelpers.extends({}, {
                0: {
                    className: "x1n2onr6 x1vjfegm x78zum5 xdt5ytf x1iyjqo2 xeuugli xk7ee7b x1twants xzebnir x1vyvd0q xgul3q2"
                },
                1: {
                    className: "x1n2onr6 x1vjfegm x78zum5 xdt5ytf x1iyjqo2 xeuugli xk7ee7b x1vyvd0q xgul3q2 x1bczwif x17un8ov"
                }
            }[!!hasTopPanel << 0], {
                "data-testid": "composer_contained_surface",
                children: [
                    smartComposer.card,
                    Lt
                ]
            })}/></>;
            n[209] = Lt;
            n[210] = hasTopPanel;
            n[211] = smartComposer;
            n[212] = It;
        } else {
            It = n[212];
        }
        let Tt;
        if (n[213] !== kt || n[214] !== It) {
            Tt = <div {...babelHelpers.extends({}, kt, {
                children: It
            })}/>;
            n[213] = kt;
            n[214] = It;
            n[215] = Tt;
        } else {
            Tt = n[215];
        }
        let Dt;
        if (n[216] !== ref || n[217] !== Tt) {
            Dt = <div {...babelHelpers.extends({
                ref
            }, Et, {
                children: Tt
            })}/>;
            n[216] = ref;
            n[217] = Tt;
            n[218] = Dt;
        } else {
            Dt = n[218];
        }
        return Dt;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(42);
        const { agentActive, input, leadingActions, modeControls, statusSlot, stopSlot, trailingActions } = e;
        r("useWAWebCloseMenusOnAgentTakeover")(agentActive);
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x9f619 x6s0dn4 xeuugli xrvj5dj x1y6fwsi xisnujt x56sm4b xqd92o2"
            };
            t[0] = m;
        } else {
            m = t[0];
        }
        let p;
        if (t[1] !== agentActive) {
            p = ({
                0: {
                    className: "xcrlgei x1agbcgv x78zum5 x6s0dn4 xeuugli x2c3f24 x9kvfbb"
                },
                1: {
                    className: "xcrlgei x1agbcgv x78zum5 x6s0dn4 xeuugli x2c3f24 x9kvfbb xg01cxk x47corl xdr9t0c x6ikm8r x10wlt62"
                }
            })[!!agentActive << 0];
            t[1] = agentActive;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = agentActive ? true : undefined;
        let f;
        if (t[3] !== agentActive || t[4] !== input || t[5] !== p || t[6] !== _) {
            f = <div {...babelHelpers.extends({}, p, {
                "aria-hidden": agentActive,
                "data-testid": "composer_input_line",
                inert: _,
                children: input
            })}/>;
            t[3] = agentActive;
            t[4] = input;
            t[5] = p;
            t[6] = _;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== agentActive) {
            g = ({
                0: {
                    className: "xcrlgei x1agbcgv x78zum5 x6s0dn4 xeuugli x2c3f24 x9kvfbb"
                },
                1: {
                    className: "xcrlgei x1agbcgv x78zum5 x6s0dn4 xeuugli x2c3f24 x9kvfbb xg01cxk x47corl xdr9t0c x6ikm8r x10wlt62"
                }
            })[!agentActive << 0];
            t[8] = agentActive;
            t[9] = g;
        } else {
            g = t[9];
        }
        const h = !agentActive;
        const y = agentActive ? undefined : true;
        let C;
        if (t[10] !== statusSlot || t[11] !== g || t[12] !== h || t[13] !== y) {
            C = <div {...babelHelpers.extends({}, g, {
                "aria-hidden": h,
                "data-testid": "composer_status_line",
                inert: y,
                children: statusSlot
            })}/>;
            t[10] = statusSlot;
            t[11] = g;
            t[12] = h;
            t[13] = y;
            t[14] = C;
        } else {
            C = t[14];
        }
        let v;
        if (t[15] !== f || t[16] !== C) {
            v = <div {...babelHelpers.extends({}, m, {
                "data-testid": "composer_text_line",
                children: [
                    f,
                    C
                ]
            })}/>;
            t[15] = f;
            t[16] = C;
            t[17] = v;
        } else {
            v = t[17];
        }
        let S;
        if (t[18] !== agentActive) {
            S = ({
                0: {
                    className: "x9f619 x78zum5 x6s0dn4 xeuugli x1ba4aug x1qe2gcz x1e739qn xo9andd x9kvfbb"
                },
                1: {
                    className: "x9f619 x78zum5 x6s0dn4 xeuugli x1ba4aug x1e739qn xo9andd x9kvfbb xyuozue"
                }
            })[!agentActive << 0];
            t[18] = agentActive;
            t[19] = S;
        } else {
            S = t[19];
        }
        const R = agentActive ? "active" : "inactive";
        const L = !agentActive;
        let E;
        if (t[20] !== leadingActions || t[21] !== L) {
            E = <B5Component isOpen={L} testid="composer_leading_actions">{leadingActions}</B5Component>;
            t[20] = leadingActions;
            t[21] = L;
            t[22] = E;
        } else {
            E = t[22];
        }
        let k;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            k = {
                className: "x78zum5 x6s0dn4 x13a6bvl x1iyjqo2 xeuugli"
            };
            t[23] = k;
        } else {
            k = t[23];
        }
        const I = !agentActive;
        let T;
        if (t[24] !== I || t[25] !== trailingActions) {
            T = <B5Component isOpen={I} testid="composer_trailing_actions">{trailingActions}</B5Component>;
            t[24] = I;
            t[25] = trailingActions;
            t[26] = T;
        } else {
            T = t[26];
        }
        let D;
        if (t[27] !== agentActive || t[28] !== stopSlot) {
            D = <B5Component isOpen={agentActive} testid="composer_stop_action">{stopSlot}</B5Component>;
            t[27] = agentActive;
            t[28] = stopSlot;
            t[29] = D;
        } else {
            D = t[29];
        }
        let x;
        if (t[30] !== T || t[31] !== D) {
            x = <div {...babelHelpers.extends({}, k, {
                children: [
                    T,
                    D
                ]
            })}/>;
            t[30] = T;
            t[31] = D;
            t[32] = x;
        } else {
            x = t[32];
        }
        let $;
        if (t[33] !== modeControls || t[34] !== S || t[35] !== R || t[36] !== E || t[37] !== x) {
            $ = <div {...babelHelpers.extends({}, S, {
                "data-agent-state": R,
                "data-testid": "composer_action_line",
                children: [
                    E,
                    modeControls,
                    x
                ]
            })}/>;
            t[33] = modeControls;
            t[34] = S;
            t[35] = R;
            t[36] = E;
            t[37] = x;
            t[38] = $;
        } else {
            $ = t[38];
        }
        let P;
        if (t[39] !== $ || t[40] !== v) {
            P = <>{v}{$}</>;
            t[39] = $;
            t[40] = v;
            t[41] = P;
        } else {
            P = t[41];
        }
        return P;
    }
    function B5Component(e) {
        const t = o("react-compiler-runtime").c(11);
        const { children, isOpen, testid } = e;
        let i;
        if (t[0] !== isOpen) {
            i = ({
                0: {
                    className: "xrvj5dj x1y6fwsi x6s0dn4 x101abm8 x1s73dr8 x1ob4eux x1cz01zg x9kvfbb"
                },
                1: {
                    className: "xrvj5dj x6s0dn4 x101abm8 x1s73dr8 x1ob4eux x1cz01zg x9kvfbb x131gcsw xg01cxk x47corl"
                }
            })[!isOpen << 0];
            t[0] = isOpen;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = !isOpen;
        const s = isOpen ? undefined : true;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x78zum5 x6s0dn4 xeuugli x101abm8 x1s73dr8 x1ob4eux"
            };
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== children) {
            d = <div {...babelHelpers.extends({}, c, {
                children
            })}/>;
            t[3] = children;
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] !== i || t[6] !== l || t[7] !== s || t[8] !== d || t[9] !== testid) {
            m = <div {...babelHelpers.extends({}, i, {
                "aria-hidden": l,
                "data-testid": testid,
                inert: s,
                children: d
            })}/>;
            t[5] = i;
            t[6] = l;
            t[7] = s;
            t[8] = d;
            t[9] = testid;
            t[10] = m;
        } else {
            m = t[10];
        }
        return m;
    }
    function V5Component(e) {
        const t = o("react-compiler-runtime").c(11);
        const { expressionsPanelPickerRef, expressionsPanelWrapperRef, getComposeBoxEditorRef, handleClose, handlePanelsGif, handlePanelsSticker, handlePanelsStickerFromStore, isDisabled, isGifEnabled, isStickerEnabled, replaceInputSelection, size } = e;
        const onSticker = isStickerEnabled ? handlePanelsSticker : undefined;
        const onStickerFromStore = isStickerEnabled ? handlePanelsStickerFromStore : undefined;
        const onGif = isGifEnabled ? handlePanelsGif : undefined;
        let C;
        if (t[0] !== expressionsPanelPickerRef || t[1] !== expressionsPanelWrapperRef || t[2] !== getComposeBoxEditorRef || t[3] !== handleClose || t[4] !== isDisabled || t[5] !== replaceInputSelection || t[6] !== size || t[7] !== onSticker || t[8] !== onStickerFromStore || t[9] !== onGif) {
            const Component = o("WAWebExpressionsPanelPicker.react").ExpressionsPanelPicker;
            C = <Component ref={expressionsPanelPickerRef} wrapperRef={expressionsPanelWrapperRef} isDisabled={isDisabled} onEmoji={replaceInputSelection} onSticker={onSticker} onStickerFromStore={onStickerFromStore} onGif={onGif} getComposeBoxEditorRef={getComposeBoxEditorRef} onClose={handleClose} size={size}/>;
            t[0] = expressionsPanelPickerRef;
            t[1] = expressionsPanelWrapperRef;
            t[2] = getComposeBoxEditorRef;
            t[3] = handleClose;
            t[4] = isDisabled;
            t[5] = replaceInputSelection;
            t[6] = size;
            t[7] = onSticker;
            t[8] = onStickerFromStore;
            t[9] = onGif;
            t[10] = C;
        } else {
            C = t[10];
        }
        return C;
    }
    l.default = y;
}, 98);