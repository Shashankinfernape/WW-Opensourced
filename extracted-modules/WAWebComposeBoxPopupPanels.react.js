__d("WAWebComposeBoxPopupPanels.react", [
    "WAWebABProps",
    "WAWebAnimationGroupItem.react",
    "WAWebAskMetaAiQuotedMediaSend",
    "WAWebBizCtwaContextImagePreview.react",
    "WAWebCallLinkPreviewThumbnail.react",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebComposeBoxExpressionPanels.react",
    "WAWebComposeBoxPanelsMenu.react",
    "WAWebComposeBoxPopupPanel.react",
    "WAWebConversationSpam.react",
    "WAWebDisplayType",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetCallLinkPreviewSubtitle",
    "WAWebGetCallLinkPreviewTitle",
    "WAWebMediaLinkPreview.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebMsgType",
    "WAWebMultiStepFormButton",
    "WAWebMultiStepFormPanel.react",
    "WAWebNoop",
    "WAWebParseCallLinkType",
    "WAWebPaymentLinkPreviewWithAmountFeature",
    "WAWebQuestionReplyQuotedMessage.react",
    "WAWebQuestions.flow",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebQuotedMsg.react",
    "WAWebQuotedMsgAdminGroupName.react",
    "WAWebResizeObserver.react",
    "WAWebThreadsViewComposeQuotedMsgContext",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "WDSMargins.stylex",
    "cr:5981",
    "gkx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatInternalStatusHookWrapper",
    "useWAWebChatValues",
    "useWAWebListener",
    "useWAWebMeasure",
    "useWAWebSetModelValue"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useContext, useEffect, useImperativeHandle, useRef, useState } = c;
    const g = {
        marginTop6: {
            marginTop: "x1k70j0n",
            $$css: true
        }
    };
    const h = {
        overlay: {
            position: "x10l6tqk",
            bottom: "x1ey2m1c",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            boxSizing: "x9f619",
            width: "xh8yej3",
            $$css: true
        },
        overlayRefresh: {
            width: "x8pckko",
            $$css: true
        },
        topPanelContainer: {
            borderStartStartRadius: "x12l2aii",
            borderStartEndRadius: "x1mbk4o",
            maxWidth: "xazf962",
            display: "x1lliihq",
            $$css: true
        },
        inputBoxShadow: {
            boxShadow: "xkfubxc",
            $$css: true
        },
        overlayWithForm: {
            bottom: "xcsbdjy",
            $$css: true
        }
    };
    function Y10(e) {
        const t = o("react-compiler-runtime").c(4);
        const { chat, onClickDismissSpam, onClickNotSpam } = e;
        let l;
        if (t[0] !== chat || t[1] !== onClickDismissSpam || t[2] !== onClickNotSpam) {
            const Component = r("WAWebConversationSpam.react");
            l = <Component chat={chat} onClickNotSpam={onClickNotSpam} onClickDismissSpam={onClickDismissSpam}/>;
            t[0] = chat;
            t[1] = onClickDismissSpam;
            t[2] = onClickNotSpam;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function C({ getComposeBlockWidth, onEmoji, onExpressionPanelChange, onExpressionPanelClose, onGif, onSticker, ref, restoreFocus, selectedExpressionPanel }) {
        const fRef = useRef(null);
        const gRef = useRef();
        const onDisplayCache = function(t) {
            gRef.current = t;
        };
        useImperativeHandle(ref, function() {
            return {
                restoreFocus: function(t) {
                    fRef.current?.restoreFocus(t);
                }
            };
        });
        const y = r("useWAWebMeasure")();
        const C = y[0];
        const b = y[1];
        const v = b.width > 0 ? b.width : getComposeBlockWidth();
        const onFocusRelease = function() {
            restoreFocus();
        };
        const Component = r("WAWebComposeBoxExpressionPanels.react");
        const Component_1 = r("WAWebAnimationGroupItem.react");
        return <Component_1 ref={C}><Component displayCache={gRef.current} width={v} onDisplayCache={onDisplayCache} onEmoji={onEmoji} onFocusRelease={onFocusRelease} onGif={onGif} onExpressionPanelChange={onExpressionPanelChange} onSticker={onSticker} requestDismiss={onExpressionPanelClose} ref={fRef} selectedExpressionPanel={selectedExpressionPanel} theme={o("WAWebComposeBoxPanelsMenu.react").PanelsTheme.ChatComposeBox}/></Component_1>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function B4Component(e) {
        "use no forget";
        const { chat, isTopmostPanel, questionType, rawQuotedMsg, ref, restoreFocus } = e;
        const m = o("useWAWebSetModelValue").useSetModelValue(chat, "composeQuotedMsg");
        const p = useContext(r("WAWebThreadsViewComposeQuotedMsgContext"));
        const _ = p?.setQuotedMsg ?? m;
        const f = function(t = o("WAWebUim").DismissReason.UIM_INTERACTION) {
            if (t !== o("WAWebUim").DismissReason.LIFECYCLE) {
                _(null);
                o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageDeleted(chat.id);
            }
        };
        const Component = r("WAWebQuotedMsg.react");
        const Component_1 = r("WAWebComposeBoxPopupPanel.react");
        const Component_2 = o("WAWebUimUie.react").UIE;
        return <Component_2 ref={ref} displayName="ComposeBoxQuotedMsg" escapable requestFocus={restoreFocus} requestDismiss={f}><Component_1 onOmit={f} questionType={questionType} isTopmostPanel={isTopmostPanel}><Component key={rawQuotedMsg.id.toString()} msg={rawQuotedMsg.safe()} displayType={o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION} composeQuotedMsgRemoteJid={chat.composeQuotedMsgRemoteJid} theme="composeBox" chat={o("WAWebFrontendMsgGetters").getChat(rawQuotedMsg)} onClick={function() {
            o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageTappedInComposer(chat.id);
        }} shouldHideQuotedMsgAuthor={rawQuotedMsg.shouldHideQuotedMsgAuthor} shouldHideQuotedMsgCaption={o("WAWebAskMetaAiQuotedMediaSend").shouldHideAskMetaAiQuotedCaption(chat, rawQuotedMsg)}/></Component_1></Component_2>;
    }
    B4Component.displayName = `${B4Component.name} [from ${i.id}]`;
    function V4Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const { isTopmostPanel, questionReplyQuotedMessage, ref } = e;
        let l;
        if (t[0] !== questionReplyQuotedMessage) {
            l = u.jsx(r("WAWebQuestionReplyQuotedMessage.react"), {
                questionReplyQuotedMessage
            });
            t[0] = questionReplyQuotedMessage;
            t[1] = l;
        } else {
            l = t[1];
        }
        let s;
        if (t[2] !== isTopmostPanel || t[3] !== l) {
            const Component = r("WAWebComposeBoxPopupPanel.react");
            s = <Component onOmit={r("WAWebNoop")} isTopmostPanel={isTopmostPanel} questionType={o("WAWebQuestions.flow").QuestionType.Reply} showCloseButton={false}>{l}</Component>;
            t[2] = isTopmostPanel;
            t[3] = l;
            t[4] = s;
        } else {
            s = t[4];
        }
        let c;
        if (t[5] !== ref || t[6] !== s) {
            const Component = o("WAWebUimUie.react").UIE;
            c = <Component ref={ref} displayName="QuestionReplyQuotedMsg" escapable={false}>{s}</Component>;
            t[5] = ref;
            t[6] = s;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(18);
        const { chat, questionType, quotedGroupJid, ref, restoreFocus } = e;
        const c = o("useWAWebSetModelValue").useSetModelValue(chat, "quotedMsgAdminGroupJid");
        let d;
        if (t[0] !== c) {
            d = function(t) {
                const e = t === undefined ? o("WAWebUim").DismissReason.UIM_INTERACTION : t;
                if (e !== o("WAWebUim").DismissReason.LIFECYCLE) {
                    c(null);
                }
            };
            t[0] = c;
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = d;
        const quotedParentGroupJid = chat.quotedMsgAdminGroupSubject != null ? chat.quotedMsgAdminParentGroupJid : undefined;
        const chat_quotedMsgAdminGroupSubject = chat.quotedMsgAdminGroupSubject;
        let f;
        if (t[2] !== quotedGroupJid) {
            f = quotedGroupJid.toString();
            t[2] = quotedGroupJid;
            t[3] = f;
        } else {
            f = t[3];
        }
        let g;
        if (t[4] !== chat.quotedMsgAdminGroupSubject || t[5] !== quotedGroupJid || t[6] !== quotedParentGroupJid || t[7] !== f) {
            g = u.jsx(o("WAWebQuotedMsgAdminGroupName.react").QuotedMsgAdminGroupName, {
                isComposePreview: true,
                quotedGroupJid,
                quotedParentGroupJid,
                quotedGroupSubject: chat_quotedMsgAdminGroupSubject
            }, f);
            t[4] = chat.quotedMsgAdminGroupSubject;
            t[5] = quotedGroupJid;
            t[6] = quotedParentGroupJid;
            t[7] = f;
            t[8] = g;
        } else {
            g = t[8];
        }
        let h;
        if (t[9] !== m || t[10] !== questionType || t[11] !== g) {
            const Component = r("WAWebComposeBoxPopupPanel.react");
            h = <Component questionType={questionType} onOmit={m} isTopmostPanel>{g}</Component>;
            t[9] = m;
            t[10] = questionType;
            t[11] = g;
            t[12] = h;
        } else {
            h = t[12];
        }
        let y;
        if (t[13] !== m || t[14] !== ref || t[15] !== restoreFocus || t[16] !== h) {
            const Component = o("WAWebUimUie.react").UIE;
            y = <Component ref={ref} displayName="QuotedMsgAdminGroupName" escapable requestFocus={restoreFocus} requestDismiss={m}>{h}</Component>;
            t[13] = m;
            t[14] = ref;
            t[15] = restoreFocus;
            t[16] = h;
            t[17] = y;
        } else {
            y = t[17];
        }
        return y;
    }
    function R({ isTopmostPanel, linkPreviewData, links, omitLinkPreview, questionType, ref }) {
        const { description, inviteGrpType, isLoading, matchedText, thumbnail, thumbnailHeight, thumbnailHQ, thumbnailWidth, title } = linkPreviewData;
        const C = o("WAWebMediaLinkPreviewContainer.react").getHostnameForUrl(matchedText);
        const b = o("WAWebPaymentLinkPreviewWithAmountFeature").isPaymentLinkPreviewWithAmountEnabled(linkPreviewData, links);
        const callType = r("WAWebParseCallLinkType")(matchedText);
        const S = callType != null ? u.jsx(r("WAWebCallLinkPreviewThumbnail.react"), {
            callType
        }) : null;
        const Component = r("WAWebComposeBoxPopupPanel.react");
        const Component_1 = o("WAWebUimUie.react").UIE;
        return <Component_1 ref={ref} displayName="ComposeBoxLinkPreview" escapable requestDismiss={omitLinkPreview}><div data-testid="compose-box-link-preview" className="x6ikm8r"><Component onOmit={omitLinkPreview} bodyBackground={false} isTopmostPanel={isTopmostPanel} questionType={questionType} showCloseButton={!b}>{u.jsx(r("WAWebMediaLinkPreview.react"), {
            title: callType != null ? String(r("WAWebGetCallLinkPreviewTitle")(callType)) : title,
            compose: true,
            isCallLink: callType != null,
            thumbnail: S,
            thumbnailJpegHQ: S != null ? null : thumbnailHQ,
            matchedText: callType != null ? undefined : C ?? matchedText,
            description: callType != null ? String(r("WAWebGetCallLinkPreviewSubtitle")()) : description,
            thumbnailJpeg: S != null ? null : thumbnail,
            inviteGrpType,
            isLoading,
            thumbnailJpegWidth: thumbnailWidth,
            thumbnailJpegHeight: thumbnailHeight,
            linkPreviewData,
            links
        })}</Component></div></Component_1>;
    }
    R.displayName = `${R.name} [from ${i.id}]`;
    function L(e) {
        const t = o("react-compiler-runtime").c(12);
        const { ctwaContextData, ctwaContextLinkData, isTopmostPanel, omitCtwa, questionType, ref } = e;
        let d;
        if (t[0] !== ctwaContextData || t[1] !== ctwaContextLinkData.sourceUrl) {
            d = u.jsx(r("WAWebBizCtwaContextImagePreview.react"), {
                context: ctwaContextData,
                sourceUrl: ctwaContextLinkData.sourceUrl,
                compose: true
            });
            t[0] = ctwaContextData;
            t[1] = ctwaContextLinkData.sourceUrl;
            t[2] = d;
        } else {
            d = t[2];
        }
        let m;
        if (t[3] !== isTopmostPanel || t[4] !== omitCtwa || t[5] !== questionType || t[6] !== d) {
            const Component = r("WAWebComposeBoxPopupPanel.react");
            m = <Component onOmit={omitCtwa} questionType={questionType} isTopmostPanel={isTopmostPanel}>{d}</Component>;
            t[3] = isTopmostPanel;
            t[4] = omitCtwa;
            t[5] = questionType;
            t[6] = d;
            t[7] = m;
        } else {
            m = t[7];
        }
        let p;
        if (t[8] !== omitCtwa || t[9] !== ref || t[10] !== m) {
            const Component = o("WAWebUimUie.react").UIE;
            p = <Component ref={ref} displayName="ComposeBoxCtwaContextPreview" escapable requestDismiss={omitCtwa}>{m}</Component>;
            t[8] = omitCtwa;
            t[9] = ref;
            t[10] = m;
            t[11] = p;
        } else {
            p = t[11];
        }
        return p;
    }
    function E(t, { chat, ctwaContextData, ctwaContextLinkData, getComposeBlockWidth, linkPreviewData, links, omitCtwa, omitLinkPreview, onClickDismissSpam, onClickNotSpam, onComposeHeightChange, onEmoji, onExpressionPanelChange, onExpressionPanelClose, onGif, onSticker, questionReplyQuotedMessage, questionType, restoreFocus, selectedExpressionPanel, showSpamPanel }) {
        let s;
        const HRef = useRef(null);
        const G = function() {
            if (o("WAWebABProps").getABPropConfigValue("im_nfm_multi_step_form_killswitch")) {
                return null;
            }
            const t = chat.msgs.last();
            if (t == null || t.id.fromMe) {
                return null;
            }
            const n = t.safe();
            if (n.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
                return null;
            }
            const r = n.interactivePayload?.messageParamsJson;
            if (r == null) {
                return null;
            }
            const a = o("WAWebMultiStepFormButton").parseMultiStepFormButton(r);
            if (a == null) {
                return null;
            }
            return {
                formInfo: a,
                msg: n
            };
        };
        const z = useState(G);
        const j = z[0];
        const K = z[1];
        o("useWAWebListener").useListener(chat.msgs, "add", function(e) {
            if (j == null && !o("WAWebABProps").getABPropConfigValue("im_nfm_multi_step_form_killswitch") && !e.id.fromMe) {
                const n = e.interactivePayload?.messageParamsJson;
                if (n != null) {
                    const r = o("WAWebMultiStepFormButton").parseMultiStepFormButton(n);
                    if (r != null) {
                        K({
                            formInfo: r,
                            msg: e
                        });
                    }
                }
            }
        });
        o("useWAWebListener").useListener(chat.msgs, "remove_msgs", function(e) {
            if (j != null) {
                const t = j.msg.id;
                if (e.some((e)=>{
                    if (e == null) {
                        return undefined;
                    }
                    return e.id.equals(t);
                })) {
                    K(null);
                }
            }
        });
        o("useWAWebListener").useListener(chat.msgs, "reset", function() {
            if (j != null) {
                K(null);
            }
        });
        const Q = [];
        const X = [];
        const Y = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebChatGetters").getIsPSA,
            (s = o("WAWebFrontendChatGetters")).getShouldAppearInList,
            s.getComposeQuotedMsg,
            s.getComposeQuotedMsgRemoteJid,
            s.getQuotedMsgAdminGroupJid,
            s.getQuotedMsgAdminGroupSubject,
            s.getQuotedMsgAdminParentGroupJid,
            s.getMsgs,
            s.getContact
        ]);
        const J = Y[0];
        const Z = Y[1];
        const ee = Y[2];
        const te = Y[3];
        const quotedGroupJid = Y[4];
        const re = Y[5];
        const oe = Y[6];
        const ae = Y[7];
        const ie = Y[8];
        const le = useContext(r("WAWebThreadsViewComposeQuotedMsgContext"));
        const rawQuotedMsg = le?.quotedMsg ?? ee;
        let ue = null;
        if (showSpamPanel && !J && Z && ae && ae.length > 0) {
            ue = <Y10 chat={chat} onClickNotSpam={onClickNotSpam} onClickDismissSpam={onClickDismissSpam}/>;
        }
        if (selectedExpressionPanel && getComposeBlockWidth() != null) {
            X.push(<C getComposeBlockWidth={getComposeBlockWidth} onEmoji={onEmoji} onExpressionPanelChange={onExpressionPanelChange} onExpressionPanelClose={onExpressionPanelClose} onGif={onGif} onSticker={onSticker} restoreFocus={restoreFocus} ref={t} selectedExpressionPanel={selectedExpressionPanel}/>);
        } else {
            X.push(null);
        }
        const ce = r("useWAWebChatInternalStatusHookWrapper")(chat.id) ?? {};
        const ce_hasActiveStatus = ce.hasActiveStatus;
        if (r("gkx")("26258") === false && o("WAWebChatGetters").getIsGroup(chat) === false && n("cr:5981") != null && ce_hasActiveStatus === true) {
            Q.push(u.jsx(n("cr:5981").InternalStatusWarningComposeBox, {
                id: chat.contact.id,
                renderImmediately: true
            }));
        } else {
            Q.push(null);
        }
        if (questionReplyQuotedMessage) {
            Q.push(<V4Component questionReplyQuotedMessage={questionReplyQuotedMessage} isTopmostPanel={!Q.some(Boolean)}/>);
        } else if (rawQuotedMsg) {
            Q.push(<B4Component chat={chat} rawQuotedMsg={rawQuotedMsg} isTopmostPanel={!Q.some(Boolean)} restoreFocus={restoreFocus} questionType={questionType}/>);
        } else if (quotedGroupJid) {
            Q.push(<S chat={chat} restoreFocus={restoreFocus} quotedGroupJid={quotedGroupJid} questionType={questionType}/>);
        } else {
            Q.push(null);
        }
        if (linkPreviewData) {
            Q.push(<R linkPreviewData={linkPreviewData} links={links} isTopmostPanel={!Q.some(Boolean)} omitLinkPreview={omitLinkPreview} questionType={questionType}/>);
        } else {
            Q.push(null);
        }
        if (ctwaContextLinkData) {
            Q.push(<L ctwaContextLinkData={ctwaContextLinkData} isTopmostPanel={!Q.some(Boolean)} omitCtwa={omitCtwa} ctwaContextData={ctwaContextData} questionType={questionType}/>);
        } else {
            Q.push(null);
        }
        const hasTopPanels = Q.some(Boolean) || j != null;
        const pe = [
            h.overlay
        ];
        pe.push(h.overlayRefresh, o("WDSMargins.stylex").wdsMargins.marginHor12);
        if (hasTopPanels) {
            pe.push(g.marginTop6);
        }
        if (j != null) {
            pe.push(h.overlayWithForm);
        }
        const _e = hasTopPanels || ue != null;
        const fe = r("gkx")("15107");
        const geRef = useRef(fe && !_e ? 0 : null);
        const onResize = function(t) {
            if (!(t != null && geRef.current === t.height && fe)) {
                const overlay = HRef?.current?.clientHeight;
                if (geRef.current !== overlay) {
                    onComposeHeightChange({
                        overlay
                    }, true);
                    geRef.current = overlay;
                }
            }
        };
        useEffect(function() {
            if (geRef.current == null) {
                onResize();
            }
        }, []);
        const Component = r("WAWebMultiStepFormPanel.react");
        const Component_1 = r("WAWebVelocityTransitionGroup");
        const Component_2 = r("WAWebResizeObserver.react");
        const PopupPanels = <div className="x10l6tqk x13vifvy x1o0tod xh8yej3"><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(pe), {
            children: [
                X,
                <Component_2 onResize={onResize} debounceMs={10}><div ref={HRef}>{ue}{j != null && <Component formInfo={j.formInfo} msg={j.msg} onDismiss={function() {
                    K(null);
                    o("WAWebCmd").Cmd.trigger("scroll_chat_to_bottom");
                }}/>}<Component_1 displayName="ComposeBoxPanels" transitionName="compose-panel-down" xstyle={[
                    h.topPanelContainer,
                    questionType == null && h.inputBoxShadow,
                    o("WDSMargins.stylex").wdsMargins.marginHorAuto
                ]}>{Q}</Component_1></div></Component_2>
            ]
        })}/></div>;
        return {
            PopupPanels,
            hasTopPanels,
            hideComposer: j != null
        };
    }
    l.useComposePopupPanels = E;
}, 98);