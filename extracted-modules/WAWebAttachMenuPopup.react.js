__d("WAWebAttachMenuPopup.react", [
    "WAWebAttachMenuPopupItemAudio.react",
    "WAWebAttachMenuPopupItemCamera.react",
    "WAWebAttachMenuPopupItemCatalog.react",
    "WAWebAttachMenuPopupItemContacts.react",
    "WAWebAttachMenuPopupItemDocuments.react",
    "WAWebAttachMenuPopupItemEvents.react",
    "WAWebAttachMenuPopupItemOrders.react",
    "WAWebAttachMenuPopupItemPhotos.react",
    "WAWebAttachMenuPopupItemPolls.react",
    "WAWebAttachMenuPopupItemQuestion.react",
    "WAWebAttachMenuPopupItemQuickReplies.react",
    "WAWebAttachMenuPopupItemQuiz.react",
    "WAWebAttachMenuPopupItemStickers.react",
    "WAWebAttachMenuPopupPix.react",
    "WAWebAttachMenuPopupUprPaymentRequest.react",
    "WAWebAttachMenuPopupUtils",
    "WAWebAttachMenuUtils",
    "WAWebAttachmentMenuLogger",
    "WAWebBotProfileGetters",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPixAttachmentTrayFeature",
    "WAWebQuestions.flow",
    "WAWebQuestionsGatingUtils",
    "WAWebQuestionsSenderGatingUtils",
    "WAWebQuickReplyGatingUtils",
    "WAWebResolveBotProfile",
    "WAWebResolveSupportedMediaTypes",
    "WAWebUprAttachmentTrayFeature",
    "WAWebWamEnumMediaPickerOriginType",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebOptionalBotProfileValues",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(155);
        const { chat, getComposeBoxEditorRef, getComposeContents, onAlternateSendFlowStart, onMenuComplete, questionReplyQuotedMessage, questionType, threadId } = e;
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebChatGetters").getIsNewsletter
            ];
            t[0] = _;
        } else {
            _ = t[0];
        }
        const f = o("useWAWebChatValues").useChatValues(chat.id, _);
        const g = f[0];
        let h;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                o("WAWebChatGetters").getIsBroadcast
            ];
            t[1] = h;
        } else {
            h = t[1];
        }
        const y = o("useWAWebChatValues").useChatValues(chat.id, h);
        const C = y[0];
        let b;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            b = [
                o("WAWebChatGetters").getIsMetaAiBot
            ];
            t[2] = b;
        } else {
            b = t[2];
        }
        const v = o("useWAWebChatValues").useChatValues(chat.id, b);
        const S = v[0];
        let R;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            R = [
                o("WAWebChatGetters").getIsBusinessAssistantBot
            ];
            t[3] = R;
        } else {
            R = t[3];
        }
        const L = o("useWAWebChatValues").useChatValues(chat.id, R);
        const E = L[0];
        const k = S || E;
        let I;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            I = [
                o("WAWebChatGetters").getIsBotChannel
            ];
            t[4] = I;
        } else {
            I = t[4];
        }
        const T = o("useWAWebChatValues").useChatValues(chat.id, I);
        const D = T[0];
        let x;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            x = [
                o("WAWebBotProfileGetters").getProduct,
                o("WAWebBotProfileGetters").getIsDeprecated,
                o("WAWebBotProfileGetters").getIsDeleted
            ];
            t[5] = x;
        } else {
            x = t[5];
        }
        o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(chat.id, x);
        let $;
        if (t[6] !== chat.id) {
            $ = chat.id.isAiHub();
            t[6] = chat.id;
            t[7] = $;
        } else {
            $ = t[7];
        }
        const P = $;
        const N = r("useWAWebUIM")();
        let M;
        if (t[8] !== N) {
            M = function() {
                N?.requestDismiss();
            };
            t[8] = N;
            t[9] = M;
        } else {
            M = t[9];
        }
        const dismissMenu = M;
        let A;
        if (t[10] !== chat || t[11] !== getComposeContents || t[12] !== onMenuComplete || t[13] !== questionReplyQuotedMessage || t[14] !== questionType || t[15] !== threadId) {
            A = function({ attachments, onCancel, onSend, openTrigger, sendAsSticker = false }) {
                o("WAWebCmd").Cmd.attachMediaDrawer({
                    chat,
                    attachments,
                    bot3pMediaInputAuthorized: o("WAWebResolveSupportedMediaTypes").isBot3pMediaInputEnabled(chat),
                    fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
                    initCaption: getComposeContents?.(),
                    onComplete: function(t, n) {
                        onMenuComplete(t, n);
                    },
                    onSend,
                    onCancel,
                    openTrigger,
                    sendAsSticker,
                    isQuestion: questionType === o("WAWebQuestions.flow").QuestionType.Question,
                    questionReplyQuotedMessage,
                    threadId
                });
            };
            t[10] = chat;
            t[11] = getComposeContents;
            t[12] = onMenuComplete;
            t[13] = questionReplyQuotedMessage;
            t[14] = questionType;
            t[15] = threadId;
            t[16] = A;
        } else {
            A = t[16];
        }
        const F = A;
        let O;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            O = o("WAWebAttachMenuUtils").shouldShowDisabledCatalogOption();
            t[17] = O;
        } else {
            O = t[17];
        }
        const B = O;
        let W;
        if (t[18] !== chat.id) {
            W = o("WAWebAttachMenuPopupUtils").canOfferSmbBusinessTools(chat.id);
            t[18] = chat.id;
            t[19] = W;
        } else {
            W = t[19];
        }
        const q = W;
        let U;
        if (t[20] !== q || t[21] !== chat) {
            U = o("WAWebAttachMenuUtils").shouldShowCatalogOption(chat) && q;
            t[20] = q;
            t[21] = chat;
            t[22] = U;
        } else {
            U = t[22];
        }
        const V = U;
        let H;
        if (t[23] !== q || t[24] !== chat) {
            H = o("WAWebQuickReplyGatingUtils").canSendQuickReplyInChat(chat) && q;
            t[23] = q;
            t[24] = chat;
            t[25] = H;
        } else {
            H = t[25];
        }
        const G = H;
        let z;
        if (t[26] !== q || t[27] !== chat) {
            z = o("WAWebAttachMenuUtils").canSendOrder(chat) && !o("WAWebContactGetters").getIsMe(chat.contact) && q;
            t[26] = q;
            t[27] = chat;
            t[28] = z;
        } else {
            z = t[28];
        }
        const j = z;
        const K = V || G || j;
        let Q;
        if (t[29] !== chat || t[30] !== E) {
            Q = E ? null : o("WAWebUprAttachmentTrayFeature").resolveUprMethodForChat(chat);
            t[29] = chat;
            t[30] = E;
            t[31] = Q;
        } else {
            Q = t[31];
        }
        const methods = Q;
        let Y;
        let J;
        if (t[32] !== chat || t[33] !== dismissMenu || t[34] !== getComposeBoxEditorRef || t[35] !== D || t[36] !== C || t[37] !== E || t[38] !== P || t[39] !== k || t[40] !== g || t[41] !== onAlternateSendFlowStart || t[42] !== onMenuComplete || t[43] !== F || t[44] !== questionReplyQuotedMessage || t[45] !== questionType || t[46] !== threadId) {
            const Z = o("WAWebResolveBotProfile").resolveBotSupportInput(chat.id);
            const ee = o("WAWebResolveSupportedMediaTypes").resolveSupportedMediaTypesForChat(chat);
            let te;
            if (t[49] !== chat || t[50] !== E) {
                te = o("WAWebPixAttachmentTrayFeature").shouldShowPixInAttachmentTray(chat) && !E;
                t[49] = chat;
                t[50] = E;
                t[51] = te;
            } else {
                te = t[51];
            }
            J = te;
            Y = [];
            if (questionType == null) {
                if (ee.has(o("WAWebMsgType").MSG_TYPE.DOCUMENT)) {
                    let ne;
                    if (t[52] !== chat.id) {
                        ne = o("WAWebResolveSupportedMediaTypes").resolveSupportsMultipleUploads(chat.id, "document");
                        t[52] = chat.id;
                        t[53] = ne;
                    } else {
                        ne = t[53];
                    }
                    let onDocumentPick;
                    if (t[54] !== chat || t[55] !== F) {
                        onDocumentPick = function(t) {
                            F({
                                attachments: t,
                                onSend: function() {
                                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT);
                                },
                                onCancel: function() {
                                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT);
                                }
                            });
                        };
                        t[54] = chat;
                        t[55] = F;
                        t[56] = onDocumentPick;
                    } else {
                        onDocumentPick = t[56];
                    }
                    let oe;
                    if (t[57] !== chat || t[58] !== dismissMenu || t[59] !== onAlternateSendFlowStart || t[60] !== ne || t[61] !== onDocumentPick) {
                        const Component = r("WAWebAttachMenuPopupItemDocuments.react");
                        oe = <Component chat={chat} dismissMenu={dismissMenu} multiple={ne} onAlternateSendFlowStart={onAlternateSendFlowStart} onDocumentPick={onDocumentPick}/>;
                        t[57] = chat;
                        t[58] = dismissMenu;
                        t[59] = onAlternateSendFlowStart;
                        t[60] = ne;
                        t[61] = onDocumentPick;
                        t[62] = oe;
                    } else {
                        oe = t[62];
                    }
                    Y.push(oe);
                }
                const ae = o("WAWebAttachMenuPopupUtils").getMediaSelectionType(chat.id, ee);
                if (ae != null) {
                    let ie;
                    if (t[63] !== chat.id) {
                        ie = o("WAWebResolveSupportedMediaTypes").resolveSupportsMultipleUploads(chat.id, "image");
                        t[63] = chat.id;
                        t[64] = ie;
                    } else {
                        ie = t[64];
                    }
                    let le;
                    if (t[65] !== chat || t[66] !== F) {
                        le = function(t) {
                            F({
                                attachments: t,
                                onSend: function() {
                                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
                                },
                                onCancel: function() {
                                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
                                }
                            });
                        };
                        t[65] = chat;
                        t[66] = F;
                        t[67] = le;
                    } else {
                        le = t[67];
                    }
                    const Component = o("WAWebAttachMenuPopupItemPhotos.react").AttachMenuPopupItemPhotos;
                    Y.push(<Component chat={chat} dismissMenu={dismissMenu} multiple={ie} onAlternateSendFlowStart={onAlternateSendFlowStart} onMediaPick={le} mediaSelectionType={ae}/>);
                }
                if (ee.has(o("WAWebMsgType").MSG_TYPE.IMAGE)) {
                    let se;
                    if (t[68] !== onMenuComplete || t[69] !== threadId) {
                        se = function() {
                            o("WAWebCmd").Cmd.openCaptureMedia({
                                onMenuComplete,
                                threadId
                            });
                        };
                        t[68] = onMenuComplete;
                        t[69] = threadId;
                        t[70] = se;
                    } else {
                        se = t[70];
                    }
                    let ue;
                    if (t[71] !== chat || t[72] !== onAlternateSendFlowStart || t[73] !== se) {
                        const Component = r("WAWebAttachMenuPopupItemCamera.react");
                        ue = <Component chat={chat} onAlternateSendFlowStart={onAlternateSendFlowStart} onCaptureClick={se}/>;
                        t[71] = chat;
                        t[72] = onAlternateSendFlowStart;
                        t[73] = se;
                        t[74] = ue;
                    } else {
                        ue = t[74];
                    }
                    Y.push(ue);
                }
                if (o("WAWebQuestionsSenderGatingUtils").isQuestionSenderEnabled(chat)) {
                    let ce;
                    if (t[75] !== chat || t[76] !== getComposeBoxEditorRef || t[77] !== onAlternateSendFlowStart) {
                        const Component = r("WAWebAttachMenuPopupItemQuestion.react");
                        ce = <Component chat={chat} getComposeBoxEditorRef={getComposeBoxEditorRef} onAlternateSendFlowStart={onAlternateSendFlowStart}/>;
                        t[75] = chat;
                        t[76] = getComposeBoxEditorRef;
                        t[77] = onAlternateSendFlowStart;
                        t[78] = ce;
                    } else {
                        ce = t[78];
                    }
                    Y.push(ce);
                }
                if (!P && (g && o("WAWebNewsletterGatingUtils").isNewsletterAudioFileSendingEnabled() || !g && !C && !k && !D && ee.has(o("WAWebMsgType").MSG_TYPE.AUDIO))) {
                    let de;
                    if (t[79] !== chat.id) {
                        de = o("WAWebResolveSupportedMediaTypes").resolveSupportsMultipleUploads(chat.id);
                        t[79] = chat.id;
                        t[80] = de;
                    } else {
                        de = t[80];
                    }
                    let me;
                    if (t[81] !== chat || t[82] !== F) {
                        me = function(t) {
                            F({
                                attachments: t,
                                onSend: function() {
                                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.AUDIO);
                                },
                                onCancel: function() {
                                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.AUDIO);
                                }
                            });
                        };
                        t[81] = chat;
                        t[82] = F;
                        t[83] = me;
                    } else {
                        me = t[83];
                    }
                    let pe;
                    if (t[84] !== chat || t[85] !== dismissMenu || t[86] !== onAlternateSendFlowStart || t[87] !== de || t[88] !== me) {
                        const Component = r("WAWebAttachMenuPopupItemAudio.react");
                        pe = <Component chat={chat} dismissMenu={dismissMenu} multiple={de} onAlternateSendFlowStart={onAlternateSendFlowStart} onMediaPick={me}/>;
                        t[84] = chat;
                        t[85] = dismissMenu;
                        t[86] = onAlternateSendFlowStart;
                        t[87] = de;
                        t[88] = me;
                        t[89] = pe;
                    } else {
                        pe = t[89];
                    }
                    Y.push(pe);
                }
                if (!P && !g && !C && !k && ee.has(o("WAWebMsgType").MSG_TYPE.VCARD)) {
                    let _e;
                    if (t[90] !== chat || t[91] !== onAlternateSendFlowStart || t[92] !== onMenuComplete) {
                        const Component = r("WAWebAttachMenuPopupItemContacts.react");
                        _e = <Component chat={chat} onAlternateSendFlowStart={onAlternateSendFlowStart} onMenuComplete={onMenuComplete}/>;
                        t[90] = chat;
                        t[91] = onAlternateSendFlowStart;
                        t[92] = onMenuComplete;
                        t[93] = _e;
                    } else {
                        _e = t[93];
                    }
                    Y.push(_e);
                }
                if (chat.canSendPolls() && o("WAWebAttachMenuPopupUtils").canOfferTrayCreations(Z)) {
                    let fe;
                    if (t[94] !== chat || t[95] !== getComposeBoxEditorRef || t[96] !== onAlternateSendFlowStart) {
                        const Component = r("WAWebAttachMenuPopupItemPolls.react");
                        fe = <Component chat={chat} getComposeBoxEditorRef={getComposeBoxEditorRef} onAlternateSendFlowStart={onAlternateSendFlowStart}/>;
                        t[94] = chat;
                        t[95] = getComposeBoxEditorRef;
                        t[96] = onAlternateSendFlowStart;
                        t[97] = fe;
                    } else {
                        fe = t[97];
                    }
                    Y.push(fe);
                }
                if (!o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) && J) {
                    let ge;
                    if (t[98] !== chat || t[99] !== dismissMenu || t[100] !== onAlternateSendFlowStart) {
                        const Component = r("WAWebAttachMenuPopupPix.react");
                        ge = <Component chat={chat} dismissMenu={dismissMenu} onAlternateSendFlowStart={onAlternateSendFlowStart}/>;
                        t[98] = chat;
                        t[99] = dismissMenu;
                        t[100] = onAlternateSendFlowStart;
                        t[101] = ge;
                    } else {
                        ge = t[101];
                    }
                    Y.push(ge);
                }
                if (!P && g && o("WAWebNewsletterGatingUtils").isNewsletterQuizSenderEnabled()) {
                    let he;
                    if (t[102] !== chat || t[103] !== getComposeBoxEditorRef || t[104] !== onAlternateSendFlowStart) {
                        const Component = o("WAWebAttachMenuPopupItemQuiz.react").AttachMenuPopupItemQuiz;
                        he = <Component chat={chat} getComposeBoxEditorRef={getComposeBoxEditorRef} onAlternateSendFlowStart={onAlternateSendFlowStart}/>;
                        t[102] = chat;
                        t[103] = getComposeBoxEditorRef;
                        t[104] = onAlternateSendFlowStart;
                        t[105] = he;
                    } else {
                        he = t[105];
                    }
                    Y.push(he);
                }
                const Component = r("WAWebAttachMenuPopupItemStickers.react");
                const ye = !P && ee.has(o("WAWebMsgType").MSG_TYPE.STICKER) ? <Component chat={chat} dismissMenu={dismissMenu} onAlternateSendFlowStart={onAlternateSendFlowStart} onMediaPick={function(t) {
                    F({
                        attachments: t,
                        sendAsSticker: true,
                        onSend: function() {
                            o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.STICKER_MAKER);
                        },
                        onCancel: function() {
                            o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.STICKER_MAKER);
                        }
                    });
                }}/> : null;
                const Component_1 = r("WAWebAttachMenuPopupItemEvents.react");
                const Ce = !P && o("WAWebAttachMenuPopupUtils").canOfferTrayCreations(Z) && (o("WAWebChatGetters").getIsGroup(chat) || o("WAWebChatGetters").getIsUser(chat) && !o("WAWebContactGetters").getIsMe(chat.contact) && !k && !D) ? <Component_1 chat={chat} onAlternateSendFlowStart={onAlternateSendFlowStart}/> : null;
                let be;
                if (t[106] !== Ce || t[107] !== ye) {
                    be = [
                        Ce,
                        ye
                    ];
                    t[106] = Ce;
                    t[107] = ye;
                    t[108] = be;
                } else {
                    be = t[108];
                }
                Y.push(be);
            } else {
                const ve = o("WAWebQuestionsGatingUtils").getEnabledAttachmentTypesForQuestionType(questionType);
                const Se = o("WAWebAttachMenuPopupUtils").getMediaSelectionTypeForSupportedTypes(ve);
                if (Se != null) {
                    let Re;
                    if (t[109] !== chat || t[110] !== F) {
                        Re = function(t) {
                            o("WAWebModalManager").ModalManager.close();
                            F({
                                attachments: t,
                                onSend: function() {
                                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
                                },
                                onCancel: function() {
                                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
                                }
                            });
                        };
                        t[109] = chat;
                        t[110] = F;
                        t[111] = Re;
                    } else {
                        Re = t[111];
                    }
                    const Component = o("WAWebAttachMenuPopupItemPhotos.react").AttachMenuPopupItemPhotos;
                    Y.push(<Component chat={chat} dismissMenu={dismissMenu} multiple={false} onAlternateSendFlowStart={onAlternateSendFlowStart} onMediaPick={Re} mediaSelectionType={Se}/>);
                }
                if (ve.has(o("WAWebMsgType").MSG_TYPE.IMAGE)) {
                    let Le;
                    if (t[112] !== onMenuComplete || t[113] !== questionReplyQuotedMessage || t[114] !== questionType || t[115] !== threadId) {
                        Le = function() {
                            o("WAWebCmd").Cmd.openCaptureMedia({
                                onMenuComplete,
                                questionType,
                                questionReplyQuotedMessage,
                                threadId
                            });
                        };
                        t[112] = onMenuComplete;
                        t[113] = questionReplyQuotedMessage;
                        t[114] = questionType;
                        t[115] = threadId;
                        t[116] = Le;
                    } else {
                        Le = t[116];
                    }
                    let Ee;
                    if (t[117] !== chat || t[118] !== onAlternateSendFlowStart || t[119] !== Le) {
                        const Component = r("WAWebAttachMenuPopupItemCamera.react");
                        Ee = <Component chat={chat} onAlternateSendFlowStart={onAlternateSendFlowStart} onCaptureClick={Le}/>;
                        t[117] = chat;
                        t[118] = onAlternateSendFlowStart;
                        t[119] = Le;
                        t[120] = Ee;
                    } else {
                        Ee = t[120];
                    }
                    Y.push(Ee);
                }
            }
            t[32] = chat;
            t[33] = dismissMenu;
            t[34] = getComposeBoxEditorRef;
            t[35] = D;
            t[36] = C;
            t[37] = E;
            t[38] = P;
            t[39] = k;
            t[40] = g;
            t[41] = onAlternateSendFlowStart;
            t[42] = onMenuComplete;
            t[43] = F;
            t[44] = questionReplyQuotedMessage;
            t[45] = questionType;
            t[46] = threadId;
            t[47] = Y;
            t[48] = J;
        } else {
            Y = t[47];
            J = t[48];
        }
        let ke;
        if (t[121] !== K) {
            ke = K && <C2/>;
            t[121] = K;
            t[122] = ke;
        } else {
            ke = t[122];
        }
        let Ie;
        if (t[123] !== chat || t[124] !== dismissMenu || t[125] !== onAlternateSendFlowStart || t[126] !== J) {
            const Component = r("WAWebAttachMenuPopupPix.react");
            Ie = o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) && J && <Component chat={chat} dismissMenu={dismissMenu} onAlternateSendFlowStart={onAlternateSendFlowStart}/>;
            t[123] = chat;
            t[124] = dismissMenu;
            t[125] = onAlternateSendFlowStart;
            t[126] = J;
            t[127] = Ie;
        } else {
            Ie = t[127];
        }
        let Te;
        if (t[128] !== chat || t[129] !== dismissMenu || t[130] !== onAlternateSendFlowStart || t[131] !== methods) {
            const Component = r("WAWebAttachMenuPopupUprPaymentRequest.react");
            Te = methods != null && <Component chat={chat} methods={methods} dismissMenu={dismissMenu} onAlternateSendFlowStart={onAlternateSendFlowStart}/>;
            t[128] = chat;
            t[129] = dismissMenu;
            t[130] = onAlternateSendFlowStart;
            t[131] = methods;
            t[132] = Te;
        } else {
            Te = t[132];
        }
        let De;
        if (t[133] !== chat || t[134] !== dismissMenu || t[135] !== onAlternateSendFlowStart || t[136] !== V) {
            const Component = r("WAWebAttachMenuPopupItemCatalog.react");
            De = V && <Component chat={chat} disabled={B} dismissMenu={dismissMenu} onAlternateSendFlowStart={onAlternateSendFlowStart}/>;
            t[133] = chat;
            t[134] = dismissMenu;
            t[135] = onAlternateSendFlowStart;
            t[136] = V;
            t[137] = De;
        } else {
            De = t[137];
        }
        let xe;
        if (t[138] !== chat || t[139] !== dismissMenu || t[140] !== G) {
            xe = G && s.jsx(r("WAWebAttachMenuPopupItemQuickReplies.react"), {
                chat,
                dismissMenu
            });
            t[138] = chat;
            t[139] = dismissMenu;
            t[140] = G;
            t[141] = xe;
        } else {
            xe = t[141];
        }
        let $e;
        if (t[142] !== chat || t[143] !== dismissMenu || t[144] !== onAlternateSendFlowStart || t[145] !== j) {
            const Component = r("WAWebAttachMenuPopupItemOrders.react");
            $e = j && <Component chat={chat} dismissMenu={dismissMenu} onAlternateSendFlowStart={onAlternateSendFlowStart}/>;
            t[142] = chat;
            t[143] = dismissMenu;
            t[144] = onAlternateSendFlowStart;
            t[145] = j;
            t[146] = $e;
        } else {
            $e = t[146];
        }
        let Pe;
        if (t[147] !== Y || t[148] !== ke || t[149] !== Ie || t[150] !== Te || t[151] !== De || t[152] !== xe || t[153] !== $e) {
            const Ne = <>{Y}{ke}{Ie}{Te}{De}{xe}{$e}</>;
            const Component = r("WDSMenu.react");
            Pe = <Component>{Ne}</Component>;
            t[147] = Y;
            t[148] = ke;
            t[149] = Ie;
            t[150] = Te;
            t[151] = De;
            t[152] = xe;
            t[153] = $e;
            t[154] = Pe;
        } else {
            Pe = t[154];
        }
        return Pe;
    }
    function C2() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s.jsx(r("WDSMenuItem.react"), {
                type: "separator"
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    l.default = u;
}, 98);