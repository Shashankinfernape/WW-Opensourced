__d("WAWebActionListener", [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebAIAgentAIReplyUtils",
    "WAWebActionListenerHelpers",
    "WAWebActionToast.react",
    "WAWebAddToFavoritesAction",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiRepliesControlPopup.react",
    "WAWebBizChatAssignmentAiRepliesModal.react",
    "WAWebBizChatAssignmentModal.react",
    "WAWebBizMerchantDetailsEntityTypePopup.react",
    "WAWebBusinessMuteWamEvent",
    "WAWebBusinessUnmuteWamEvent",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatMuteLogger",
    "WAWebChatSendMessages",
    "WAWebClearChatDialogV2.react",
    "WAWebClearChatPopup.react",
    "WAWebClearSelectedChatsPopupLoadable",
    "WAWebCmd",
    "WAWebCommandPalette.react",
    "WAWebConfirmPopup.react",
    "WAWebCountrySelectorPopup.react",
    "WAWebDeleteChatDialogV2.react",
    "WAWebDeleteChatPopup.react",
    "WAWebDeleteSelectedChatsPopup.react",
    "WAWebDrawerManager",
    "WAWebEventInfoFlowLoadable",
    "WAWebFbtCommon",
    "WAWebGroupsV4InviteFlowLoadable",
    "WAWebHeader.react",
    "WAWebKeyboardTabUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebMMUserControlsLogger",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMetaAiChatActionLogger",
    "WAWebMiscErrors",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebMuteExpirations",
    "WAWebMutePopup.react",
    "WAWebNewsletterRevokeMsgAction",
    "WAWebNoop",
    "WAWebProductCatalogProductImageViewFlowLoadable",
    "WAWebQplFlowWrapper",
    "WAWebRemoveFromFavoritesAction",
    "WAWebSendMsgResultAction",
    "WAWebSendProductModalLoadable",
    "WAWebSetArchiveChatAction",
    "WAWebSetPinChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUpdateUnreadChatAction",
    "WAWebUserPrefsGeneral",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumChatActionType",
    "WAWebWamEnumMmUserControlsAction",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumProfileEntryPoint",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "countWhere",
    "err",
    "gkx",
    "isStringNullOrEmpty",
    "qpl",
    "react",
    "react-compiler-runtime",
    "useWAWebBotActionListeners",
    "useWAWebCommunityActionListeners",
    "useWAWebListener",
    "useWAWebNewsletterActionListeners",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = r("qpl")._(701183376, "3423");
    const _ = new Map([
        [
            o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONTACT_INFO,
            o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BUSINESS_PROFILE
        ],
        [
            o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN,
            o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET
        ]
    ]);
    function f(e, t, n) {
        const r = _.get(n);
        if (r != null) {
            const a = e.contact;
            if (a != null) {
                const i = o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMUserControlsEligible({
                    id: a.id,
                    isEverOptedOutOfMarketingMessages: a.isEverOptedOutOfMarketingMessages,
                    isMarketingMessageThread: a.isMarketingMessageThread
                });
                if (!(!i || !o("WAWebMarketingMessagesUserFeedbackGatingUtils").isSimplifiedManageMessagesLoggingSymmetryEnabled())) {
                    o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
                        action: t ? o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.MUTE : o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.UNMUTE,
                        entryPoint: r,
                        isSuccess: true
                    });
                }
            }
        }
    }
    function g(t) {
        const a = o("react-compiler-runtime").c(63);
        const { activeNavBarItem, updateActiveNavBarItem } = t;
        const d = r("useWAWebUIM")();
        let p;
        if (a[0] !== d) {
            p = function({ onSend, product }) {
                const Component = o("WAWebSendProductModalLoadable").SendProductModalLoadable;
                o("WAWebModalManager").ModalManager.open(<Component product={product} onSend={onSend}/>, {
                    transition: "modal-flow",
                    uim: d
                });
            };
            a[0] = d;
            a[1] = p;
        } else {
            p = a[1];
        }
        const _ = p;
        let g;
        if (a[2] !== d) {
            g = function(t, n) {
                o("WAWebModalManager").ModalManager.openMedia(m.jsx(o("WAWebProductCatalogProductImageViewFlowLoadable").ProductCatalogProductImageViewFlowLoadable, {
                    activeProductImage: t.activeProductImage,
                    productImageCollection: t.productImageCollection,
                    getZoomNode: t.getZoomNode,
                    product: t.product,
                    sessionId: n
                }), {
                    transition: "media-viewer",
                    uim: d
                });
            };
            a[2] = d;
            a[3] = g;
        } else {
            g = a[3];
        }
        const C = g;
        const b = BComponent;
        let $;
        if (a[4] !== d) {
            $ = function(t) {
                o("WAWebHeader.react").openInfoPanel({
                    chat: t,
                    profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.NOTIFICATION_BLOCK_ACTION,
                    uim: d
                });
            };
            a[4] = d;
            a[5] = $;
        } else {
            $ = a[5];
        }
        const W = $;
        let q;
        if (a[6] !== d) {
            q = function(t, n, a, i, l) {
                const e = i === undefined ? true : i;
                const u = l === undefined ? true : l;
                if (n) {
                    const c = function(n, r, i) {
                        const e = i === 1 ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CHAT_LIST_SCREEN : i === 2 ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONTACT_INFO : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN;
                        const l = r === Infinity ? -1 : r;
                        if (o("WAWebChatGetters").getIsPSA(t) && a !== 0) {
                            o("WAWebWamChatPSALogger").logChatPSAMute(e, l);
                        } else if (!o("WAWebChatGetters").getIsPSA(t) && !o("WAWebChatGetters").getIsNewsletter(t)) {
                            o("WAWebChatMuteLogger").logChatMute(t, e, l);
                        }
                        t.pendingAction = t.pendingAction + 1;
                        t.mute.mute({
                            expiration: n,
                            sendDevice: true,
                            showToast: u
                        }).finally(()=>{
                            t.pendingAction = t.pendingAction - 1;
                        });
                        if (t.isBusinessGroup() || t.contact.isBusiness) {
                            new (o("WAWebBusinessMuteWamEvent")).BusinessMuteWamEvent().commit();
                        }
                        o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserMuteEvent({
                            chat: t
                        });
                        f(t, true, e);
                    };
                    if (e) {
                        const p = s._("Mute notifications");
                        const Component = r("WAWebMutePopup.react");
                        o("WAWebModalManager").ModalManager.open(<Component title={p} mute={t.mute} onMute={c} entryPoint={a}>{s._("No one else in this chat will see that you muted it, and you will still be notified if you are mentioned.")}</Component>, {
                            transition: "modal",
                            uim: d
                        });
                    } else {
                        const g = o("WAWebMuteExpirations").calculateMuteExpiration(Number.POSITIVE_INFINITY);
                        c(g, Number.POSITIVE_INFINITY, a ?? 0);
                    }
                } else {
                    t.pendingAction = t.pendingAction + 1;
                    t.mute.unmute({
                        sendDevice: true,
                        showToast: u
                    }).finally(()=>{
                        t.pendingAction = t.pendingAction - 1;
                    });
                    const h = a === 1 ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CHAT_LIST_SCREEN : a === 2 ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONTACT_INFO : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN;
                    if (o("WAWebChatGetters").getIsPSA(t) && a !== 0) {
                        o("WAWebWamChatPSALogger").logChatPSAUnmute(h);
                    } else if (!o("WAWebChatGetters").getIsPSA(t) && !o("WAWebChatGetters").getIsNewsletter(t)) {
                        o("WAWebChatMuteLogger").logChatUnmute(t, h);
                    }
                    if (t.isBusinessGroup() || t.contact.isBusiness) {
                        new (o("WAWebBusinessUnmuteWamEvent")).BusinessUnmuteWamEvent().commit();
                    }
                    f(t, false, h);
                }
            };
            a[6] = d;
            a[7] = q;
        } else {
            q = a[7];
        }
        const U = q;
        let V;
        if (a[8] !== d) {
            V = function(t, n, a) {
                if (t) {
                    const e = s._("_j{\"*\":\"Mute selected chats for...\",\"_1\":\"Mute selected chat for...\"}", [
                        s._plural(t.length)
                    ]);
                    if (n) {
                        const i = function(n, r, o) {
                            t.forEach((e)=>{
                                e.pendingAction = e.pendingAction + 1;
                                e.mute.mute({
                                    expiration: n,
                                    sendDevice: true,
                                    fromMultiselect: true
                                }).finally(()=>{
                                    e.pendingAction = e.pendingAction - 1;
                                });
                            });
                            a();
                        };
                        const Component = r("WAWebMutePopup.react");
                        o("WAWebModalManager").ModalManager.open(<Component title={e} mute={t[0].mute} onMute={i}/>, {
                            transition: "modal",
                            uim: d
                        });
                    } else {
                        t.forEach(O);
                        a();
                    }
                }
            };
            a[8] = d;
            a[9] = V;
        } else {
            V = a[9];
        }
        const H = V;
        let G;
        if (a[10] !== U) {
            G = function(t, n, r, o) {
                return U(t, n, 0, r, o);
            };
            a[10] = U;
            a[11] = G;
        } else {
            G = a[11];
        }
        const z = G;
        const j = F;
        const K = A;
        let Q;
        if (a[12] !== d) {
            Q = function(mute, n, a) {
                const e = a === undefined ? false : a;
                const i = s._("Turn off all reactions notifications for:");
                const l = s._("Reactions notifications enabled");
                const u = s._("Enable sounds and notifications for reactions?");
                if (n) {
                    const c = function(n, r) {
                        mute.mute({
                            expiration: n
                        });
                        K(false);
                        o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
                            msg: o("WAWebActionListenerHelpers").getMuteAllDurationLabel(r),
                            id: o("WAWebToast.react").genId()
                        }));
                    };
                    const Component = r("WAWebMutePopup.react");
                    o("WAWebModalManager").ModalManager.open(<Component mute={mute} title={i} onMute={c}/>, {
                        transition: "modal",
                        uim: d
                    });
                } else {
                    if (e) {
                        mute.unmute();
                        K(true);
                        return;
                    }
                    const p = function() {
                        mute.unmute();
                        K(true);
                        o("WAWebModalManager").ModalManager.close();
                        o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
                            msg: l,
                            id: o("WAWebToast.react").genId()
                        }));
                    };
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    o("WAWebModalManager").ModalManager.open(<Component onOK={p} okText={s._("Unmute")} onCancel={o("WAWebModalManager").closeModalManager} cancelText={r("WAWebFbtCommon")("Cancel")}>{u}</Component>);
                }
            };
            a[12] = d;
            a[13] = Q;
        } else {
            Q = a[13];
        }
        const X = Q;
        let Y;
        if (a[14] !== d) {
            Y = function(t, n, a, i) {
                const onDeleteOrExit = function(r) {
                    o("WAWebMetaAiChatActionLogger").startMetaAiChatListAction(t.id, o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.DELETE, i)?.commit();
                    t.pendingAction = t.pendingAction + 1;
                    if (o("WAWebChatGetters").getIsPSA(t) && n !== 0) {
                        const a = t.msgs.last();
                        o("WAWebWamChatPSALogger").logChatPSARemove(a, 6, n);
                    }
                    r.finally(()=>{
                        t.pendingAction = t.pendingAction - 1;
                    });
                };
                if (o("WAWebABProps").getABPropConfigValue("wds_web_dialog")) {
                    const Component = r("WAWebDeleteChatDialogV2.react");
                    o("WDSDialogBridge").openWDSDialog(<Component chat={t} onDeleteOrExit={onDeleteOrExit}/>);
                } else {
                    const Component = r("WAWebDeleteChatPopup.react");
                    o("WAWebModalManager").ModalManager.open(<Component chat={t} onDeleteOrExit={onDeleteOrExit}/>, {
                        transition: "modal",
                        uim: d
                    });
                }
            };
            a[14] = d;
            a[15] = Y;
        } else {
            Y = a[15];
        }
        const J = Y;
        let Z;
        if (a[16] !== J) {
            Z = function(t) {
                J(t, 0);
            };
            a[16] = J;
            a[17] = Z;
        } else {
            Z = a[17];
        }
        const ee = Z;
        const te = w;
        const ne = M;
        let re;
        if (a[18] !== d) {
            re = function(t, n, a) {
                const onClearConfirmed = function() {
                    o("WAWebMetaAiChatActionLogger").startMetaAiChatListAction(t.id, o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.CLEAR, a)?.commit();
                };
                if (o("WAWebABProps").getABPropConfigValue("wds_web_dialog")) {
                    const Component = r("WAWebClearChatDialogV2.react");
                    o("WDSDialogBridge").openWDSDialog(<Component chat={t} onClearConfirmed={onClearConfirmed}/>);
                } else {
                    const Component = r("WAWebClearChatPopup.react");
                    o("WAWebModalManager").ModalManager.open(<Component chat={t} onClearConfirmed={onClearConfirmed}/>, {
                        transition: "modal",
                        uim: d
                    });
                }
            };
            a[18] = d;
            a[19] = re;
        } else {
            re = a[19];
        }
        const oe = re;
        let ae;
        if (a[20] !== d) {
            ae = function(t, n) {
                const Component = o("WAWebClearSelectedChatsPopupLoadable").ClearSelectedChatsPopupLoadable;
                o("WAWebModalManager").ModalManager.open(<Component chats={t} onComplete={n}/>, {
                    transition: "modal",
                    uim: d
                });
            };
            a[20] = d;
            a[21] = ae;
        } else {
            ae = a[21];
        }
        const ie = ae;
        let le;
        if (a[22] !== d) {
            le = function(t, n) {
                const Component = r("WAWebDeleteSelectedChatsPopup.react");
                o("WAWebModalManager").ModalManager.open(<Component chats={t} onComplete={n}/>, {
                    transition: "modal",
                    uim: d
                });
            };
            a[22] = d;
            a[23] = le;
        } else {
            le = a[23];
        }
        const se = le;
        const ue = N;
        let ce;
        if (a[24] === Symbol.for("react.memo_cache_sentinel")) {
            ce = function({ archive, chat, showToast }) {
                ue({
                    archive,
                    chat,
                    entryPoint: 0,
                    showToast
                });
            };
            a[24] = ce;
        } else {
            ce = a[24];
        }
        const de = ce;
        const me = P;
        const pe = x;
        const _e = D;
        const fe = T;
        let ge;
        let he;
        if (a[25] === Symbol.for("react.memo_cache_sentinel")) {
            ge = function(chat_, record, l, u, d, p) {
                const toastPosition = d === undefined ? "LEFT" : d;
                const i_list = record.list;
                if (!i_list || i_list.some(I)) {
                    return (c || (c = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
                }
                const f = r("isStringNullOrEmpty")(u) ? o("WAWebActionToast.react").genId() : u;
                const __length = i_list.length;
                const h = new AbortController;
                const h_signal = h.signal;
                let C;
                if (record.type !== "addon") {
                    o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(chat_, record, "shown");
                    record.list.forEach(k);
                    chat_.pendingDeleteForMeCount = chat_.pendingDeleteForMeCount + record.list.length;
                    const b = s._("_j{\"*\":\"Deleted {number_of_messages} items\",\"_1\":\"Deleted 1 item\"}", [
                        s._plural(__length, "number_of_messages")
                    ]);
                    const v = __length === 1 ? s._("Message deleted for me") : s._("_j{\"*\":\"{number_of_messages} messages deleted for me\",\"_1\":\"1 message deleted for me\"}", [
                        s._plural(__length, "number_of_messages")
                    ]);
                    const S = p === "mediaHub" ? b : v;
                    C = new (o("WAWebActionToast.react")).ActionType(S, {
                        actionText: s._("Undo"),
                        testid: "chat_thread_delete_msg_undo_button",
                        actionHandler: (()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                h.abort();
                                record.list.forEach(E);
                                o("WAWebMessageAssociationUIUtils").makeParentMessagesVisibleInChat(record.list);
                                chat_.pendingDeleteForMeCount = chat_.pendingDeleteForMeCount - record.list.length;
                                o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(chat_, record, "undo");
                                yield pe(record.list, f);
                            });
                            function t() {
                                return e.apply(this, arguments);
                            }
                            return t;
                        })()
                    });
                } else {
                    C = new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Deleting messages\",\"_1\":\"Deleting message\"}", [
                        s._plural(__length)
                    ]));
                }
                let R = (c || (c = n("Promise"))).resolve();
                if (record.type !== "addon") {
                    R = R.then(L);
                }
                R = R.then(()=>{
                    if (h_signal.aborted) {
                        throw new (o("WAAbortError")).AbortError;
                    }
                    return o("WAWebChatSendMessages").sendDeleteMsgs({
                        chat_,
                        clearMedia: l,
                        record
                    });
                }).then((e)=>{
                    chat_.pendingDeleteForMeCount = chat_.pendingDeleteForMeCount - e;
                    if (e === __length) {
                        o("WAWebActionListenerHelpers").logMessageDeleteActionsMetric(chat_, record, false);
                        if (record.type !== "addon") {
                            return null;
                        }
                        return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"{count} messages deleted\",\"_1\":\"1 message deleted\"}", [
                            s._plural(__length, "count")
                        ]));
                    }
                    const t = __length - e;
                    return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't delete messages\",\"_1\":\"Couldn't delete message\"}", [
                        s._plural(t)
                    ]));
                }).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch((n)=>{
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "chatAction:sendDeleteMsgs dropped"
                    ])));
                    return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't delete messages\",\"_1\":\"Couldn't delete message\"}", [
                        s._plural(__length)
                    ]), {
                        actionText: s._("Try again."),
                        testid: "chat_thread_delete_msg_retry_button",
                        actionHandler: function() {
                            return ge(chat_, record, false, f, toastPosition);
                        }
                    });
                });
                o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebActionToast.react").ActionToast, {
                    id: f,
                    toastPosition,
                    initialAction: C,
                    pendingAction: R
                }));
                return R;
            };
            const ye = R;
            he = function(t, a, i) {
                const i_clearMedia = i.clearMedia;
                const p = i.toastId ?? o("WAWebActionToast.react").genId();
                const toastPosition = i.toastPosition ?? "LEFT";
                const a_list = a.list;
                if (!a_list) {
                    return (c || (c = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
                }
                const g = a_list.reduce(S, [
                    false,
                    null
                ]);
                const h = g[0];
                const y = g[1];
                if (h) {
                    return (c || (c = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
                }
                if (y) {
                    ye(t, y);
                }
                const f_length = a_list.length;
                const b = new (o("WAWebActionToast.react")).ActionType(o("WAWebChatGetters").getIsNewsletter(t) ? s._("_j{\"*\":\"Deleting updates\",\"_1\":\"Deleting update\"}", [
                    s._plural(f_length)
                ]) : s._("_j{\"*\":\"Deleting messages\",\"_1\":\"Deleting message\"}", [
                    s._plural(f_length)
                ]));
                let R;
                if (a.type === "addon") {
                    R = o("WAWebChatSendMessages").sendRevokeMsgs(t, a, i_clearMedia);
                } else if (o("WAWebChatGetters").getIsNewsletter(t)) {
                    R = o("WAWebNewsletterRevokeMsgAction").sendNewsletterRevokeMsgs(t, a.list, i_clearMedia);
                } else {
                    R = o("WAWebChatSendMessages").sendRevokeMsgs(t, a, i_clearMedia);
                }
                const L = R.then((e)=>{
                    const n = r("countWhere")(e, v);
                    if (n > 0) {
                        throw r("err")(`${n} / ${e.length} dropped`);
                    }
                    o("WAWebActionListenerHelpers").logMessageDeleteActionsMetric(t, a, true);
                    return new (o("WAWebActionToast.react")).ActionType(o("WAWebChatGetters").getIsNewsletter(t) ? s._("_j{\"*\":\"{number_of_updates} updates deleted\",\"_1\":\"Update deleted\"}", [
                        s._plural(f_length, "number_of_updates")
                    ]) : s._("_j{\"*\":\"{count} messages deleted\",\"_1\":\"1 message deleted\"}", [
                        s._plural(f_length, "count")
                    ]));
                }).catch((e)=>{
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "chatAction:sendRevokeMsgs fail"
                    ])));
                    if (o("WAWebChatEphemerality").isEphemeralSettingOn(t)) {
                        return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't delete {count} messages because the messages may have expired\",\"_1\":\"Couldn't delete message because the message may have expired\"}", [
                            s._plural(f_length, "count")
                        ]));
                    }
                    return new (o("WAWebActionToast.react")).ActionType(o("WAWebChatGetters").getIsNewsletter(t) ? s._("_j{\"*\":\"Couldn't delete {number_of_updates} updates\",\"_1\":\"Couldn't delete update\"}", [
                        s._plural(f_length, "number_of_updates")
                    ]) : s._("_j{\"*\":\"Couldn't delete messages\",\"_1\":\"Couldn't delete message\"}", [
                        s._plural(f_length)
                    ]));
                });
                o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebActionToast.react").ActionToast, {
                    id: p,
                    toastPosition,
                    initialAction: b,
                    pendingAction: L
                }));
                return L;
            };
            a[25] = ge;
            a[26] = he;
        } else {
            ge = a[25];
            he = a[26];
        }
        const Ce = he;
        let be;
        if (a[27] !== d) {
            be = function(legalEntityDetails, n) {
                const Component = r("WAWebBizMerchantDetailsEntityTypePopup.react");
                o("WAWebModalManager").ModalManager.open(<Component legalEntityDetails={legalEntityDetails} onSave={n}/>, {
                    transition: "modal",
                    uim: d
                });
            };
            a[27] = d;
            a[28] = be;
        } else {
            be = a[28];
        }
        const ve = be;
        let Se;
        if (a[29] !== d) {
            Se = function(t, n, countryCode, lastUsedCountryCode, countries, s, surface) {
                const Component = r("WAWebCountrySelectorPopup.react");
                o("WAWebModalManager").ModalManager.open(<Component title={t} description={n} countryCode={countryCode} lastUsedCountryCode={lastUsedCountryCode} countries={countries} onSave={s} surface={surface}/>, {
                    transition: "modal",
                    uim: d
                });
            };
            a[29] = d;
            a[30] = Se;
        } else {
            Se = a[30];
        }
        const Re = Se;
        let Le;
        if (a[31] !== d) {
            Le = function() {
                o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebCommandPalette.react").CommandPaletteModal, {}), {
                    transition: "modal",
                    uim: d
                });
            };
            a[31] = d;
            a[32] = Le;
        } else {
            Le = a[32];
        }
        const Ee = Le;
        const ke = y;
        const Ie = HComponent;
        let Te;
        if (a[33] === Symbol.for("react.memo_cache_sentinel")) {
            Te = [
                "mute_all_reactions"
            ];
            a[33] = Te;
        } else {
            Te = a[33];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Te, X);
        let De;
        if (a[34] === Symbol.for("react.memo_cache_sentinel")) {
            De = [
                "mute_chat"
            ];
            a[34] = De;
        } else {
            De = a[34];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, De, z);
        let xe;
        if (a[35] === Symbol.for("react.memo_cache_sentinel")) {
            xe = [
                "mute_chat_multiselect"
            ];
            a[35] = xe;
        } else {
            xe = a[35];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, xe, H);
        let $e;
        if (a[36] === Symbol.for("react.memo_cache_sentinel")) {
            $e = [
                "mute_chat_with_duration"
            ];
            a[36] = $e;
        } else {
            $e = a[36];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, $e, j);
        let Pe;
        if (a[37] === Symbol.for("react.memo_cache_sentinel")) {
            Pe = [
                "mute_chat_from_entrypoint"
            ];
            a[37] = Pe;
        } else {
            Pe = a[37];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Pe, U);
        let Ne;
        if (a[38] === Symbol.for("react.memo_cache_sentinel")) {
            Ne = [
                "archive_chat"
            ];
            a[38] = Ne;
        } else {
            Ne = a[38];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ne, de);
        let Me;
        if (a[39] === Symbol.for("react.memo_cache_sentinel")) {
            Me = [
                "archive_chat_from_entrypoint"
            ];
            a[39] = Me;
        } else {
            Me = a[39];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Me, ue);
        let we;
        if (a[40] === Symbol.for("react.memo_cache_sentinel")) {
            we = [
                "clear_chat"
            ];
            a[40] = we;
        } else {
            we = a[40];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, we, oe);
        let Ae;
        if (a[41] === Symbol.for("react.memo_cache_sentinel")) {
            Ae = [
                "clear_selected_chats"
            ];
            a[41] = Ae;
        } else {
            Ae = a[41];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ae, ie);
        let Fe;
        if (a[42] === Symbol.for("react.memo_cache_sentinel")) {
            Fe = [
                "delete_selected_chats"
            ];
            a[42] = Fe;
        } else {
            Fe = a[42];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Fe, se);
        let Oe;
        if (a[43] === Symbol.for("react.memo_cache_sentinel")) {
            Oe = [
                "mark_chat_unread"
            ];
            a[43] = Oe;
        } else {
            Oe = a[43];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Oe, me);
        let Be;
        if (a[44] === Symbol.for("react.memo_cache_sentinel")) {
            Be = [
                "pin_chat"
            ];
            a[44] = Be;
        } else {
            Be = a[44];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Be, te);
        let We;
        if (a[45] === Symbol.for("react.memo_cache_sentinel")) {
            We = [
                "assign_chat"
            ];
            a[45] = We;
        } else {
            We = a[45];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, We, _e);
        let qe;
        if (a[46] === Symbol.for("react.memo_cache_sentinel")) {
            qe = [
                "favorite_chat"
            ];
            a[46] = qe;
        } else {
            qe = a[46];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, qe, ne);
        let Ue;
        if (a[47] === Symbol.for("react.memo_cache_sentinel")) {
            Ue = [
                "send_star_msgs"
            ];
            a[47] = Ue;
        } else {
            Ue = a[47];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ue, o("WAWebActionListenerHelpers").handleSendStarMsgs);
        let Ve;
        if (a[48] === Symbol.for("react.memo_cache_sentinel")) {
            Ve = [
                "send_unstar_msgs"
            ];
            a[48] = Ve;
        } else {
            Ve = a[48];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ve, o("WAWebActionListenerHelpers").handleSendUnstarMsgs);
        let He;
        if (a[49] === Symbol.for("react.memo_cache_sentinel")) {
            He = [
                "send_delete_msgs"
            ];
            a[49] = He;
        } else {
            He = a[49];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, He, ge);
        let Ge;
        if (a[50] === Symbol.for("react.memo_cache_sentinel")) {
            Ge = [
                "send_revoke_msgs"
            ];
            a[50] = Ge;
        } else {
            Ge = a[50];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ge, Ce);
        let ze;
        if (a[51] === Symbol.for("react.memo_cache_sentinel")) {
            ze = [
                "delete_or_exit_chat"
            ];
            a[51] = ze;
        } else {
            ze = a[51];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, ze, ee);
        let je;
        if (a[52] === Symbol.for("react.memo_cache_sentinel")) {
            je = [
                "delete_or_exit_chat_from_entrypoint"
            ];
            a[52] = je;
        } else {
            je = a[52];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, je, J);
        let Ke;
        if (a[53] === Symbol.for("react.memo_cache_sentinel")) {
            Ke = [
                "product_image_viewer_modal"
            ];
            a[53] = Ke;
        } else {
            Ke = a[53];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ke, C);
        let Qe;
        if (a[54] === Symbol.for("react.memo_cache_sentinel")) {
            Qe = [
                "mute_all_reactions"
            ];
            a[54] = Qe;
        } else {
            Qe = a[54];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Qe, X);
        let Xe;
        if (a[55] === Symbol.for("react.memo_cache_sentinel")) {
            Xe = [
                "attach_product"
            ];
            a[55] = Xe;
        } else {
            Xe = a[55];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Xe, _);
        let Ye;
        if (a[56] === Symbol.for("react.memo_cache_sentinel")) {
            Ye = [
                "show_country_selector_popup"
            ];
            a[56] = Ye;
        } else {
            Ye = a[56];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ye, Re);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "show_merchant_details_entity_type_popup", ve);
        let Je;
        if (a[57] === Symbol.for("react.memo_cache_sentinel")) {
            Je = [
                "open_groups_v4_invite_request_flow"
            ];
            a[57] = Je;
        } else {
            Je = a[57];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Je, b);
        let Ze;
        if (a[58] === Symbol.for("react.memo_cache_sentinel")) {
            Ze = [
                "open_profile"
            ];
            a[58] = Ze;
        } else {
            Ze = a[58];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ze, W);
        let et;
        if (a[59] === Symbol.for("react.memo_cache_sentinel")) {
            et = [
                "open_command_palette"
            ];
            a[59] = et;
        } else {
            et = a[59];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, et, Ee);
        r("useWAWebBotActionListeners")(activeNavBarItem, updateActiveNavBarItem);
        r("useWAWebCommunityActionListeners")();
        r("useWAWebNewsletterActionListeners")();
        let tt;
        if (a[60] === Symbol.for("react.memo_cache_sentinel")) {
            tt = [
                "trigger_bugreport_v2"
            ];
            a[60] = tt;
        } else {
            tt = a[60];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, tt, ke);
        let nt;
        if (a[61] === Symbol.for("react.memo_cache_sentinel")) {
            nt = [
                "open_event_info_drawer"
            ];
            a[61] = nt;
        } else {
            nt = a[61];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, nt, Ie);
        let rt;
        if (a[62] === Symbol.for("react.memo_cache_sentinel")) {
            rt = [
                "change_ai_reply_status"
            ];
            a[62] = rt;
        } else {
            rt = a[62];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, rt, fe);
        return null;
    }
    function HComponent(e, t, n, r) {
        const Component = o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component key={`event-info-drawer-${t.id.toString()}`} chat={e} msg={t} onBack={n} onEnd={r}/>, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    function y(e = {}) {
        const t = e;
        const { options, prefilledDescription, prefilledTitle } = t;
        if (r("gkx")("9092")) {
            r("WAWebLazyLoadedRetriable")(C, "bugnub_v2_popup")().then((e)=>{
                e({
                    options,
                    prefilledDescription,
                    prefilledTitle
                });
            });
        }
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("WAWebBugnubV2Popup.react").__setRef("WAWebActionListener").load();
            return e.openBugNubV2Popup;
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK;
    }
    function S(e, t) {
        const n = o("WAWebMsgActionCapability").canSenderRevokeMsg(t) || o("WAWebMsgActionCapability").canAdminRevokeMsg(t) || o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(t);
        const r = t.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE && !o("WAWebMsgGetters").getIsGroupsV4InviteExpired(t) ? t : null;
        return [
            e[0] || !n,
            e[1] || r
        ];
    }
    function R(e, t) {
        throw r("err")("This call is not supported");
    }
    function L() {
        return o("WAPromiseDelays").delayMs(o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION);
    }
    function E(e) {
        e.pendingDeleteForMe = false;
    }
    function k(e) {
        e.pendingDeleteForMe = true;
        o("WAWebMsgModelUtils").hideParentMessageInChat(e, {
            duringDetach: false
        });
        const t = o("WAWebMsgGetters").getBotPluginSearchProvider(e);
        const n = !!(t == null && o("WAWebMsgGetters").getBotPluginMaybeParent(e));
        const r = o("WAWebMsgGetters").getBotResponseTargetId(e);
        if (n || t != null && r != null) {
            o("WAWebCmd").Cmd.botTogglePluginSearchDetailsToggle(r, false);
        }
    }
    function I(e) {
        return !e.id;
    }
    function T(e, t) {
        if (o("WAWebBizAiAgentStatusUtils").canChangeAiReplyStatus(e)) {
            if (t) {
                o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebBizAiRepliesControlPopup.react"), {
                    chat: e
                }));
            } else {
                o("WAWebAIAgentAIReplyUtils").mutateAiReplyStatus(e);
            }
        }
    }
    function D(e, t) {
        if (o("WAWebChatAssignmentUtils").canAssignChat(e) === false) {
            o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebBizChatAssignmentAiRepliesModal.react"), {
                chat: e
            }));
            return;
        }
        const CHAT_ASSIGNMENT_ENTRY_POINT = o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.getName(t);
        o("WAWebQplFlowWrapper").QPL.markerStart(p, {
            annotations: {
                string: {
                    CHAT_ASSIGNMENT_ENTRY_POINT
                }
            }
        });
        o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebBizChatAssignmentModal.react"), {
            chats: [
                e
            ],
            entryPoint: t
        }));
    }
    function x(e, t) {
        if (!e || e.some($)) {
            throw new (o("WAWebMiscErrors")).ActionError;
        }
        const n = r("isStringNullOrEmpty")(t) ? o("WAWebActionToast.react").genId() : t;
        o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
            id: n,
            msg: s._("_j{\"*\":\"Messages were restored\",\"_1\":\"Message was restored\"}", [
                s._plural(e.length)
            ])
        }));
    }
    function $(e) {
        return !e.id;
    }
    function P(e, t) {
        e.pendingAction = e.pendingAction + 1;
        o("WAWebUpdateUnreadChatAction").markUnread(e, t).finally(()=>{
            e.pendingAction = e.pendingAction - 1;
        });
    }
    function N({ archive, chat, entryPoint, showToast }) {
        if (o("WAWebChatGetters").getIsPSA(chat) && entryPoint !== 0 && chat.msgs.length > 0) {
            const l = chat.msgs.last();
            o("WAWebWamChatPSALogger").logChatPSARemove(l, archive ? 3 : 4, entryPoint);
        }
        chat.pendingAction = chat.pendingAction + 1;
        o("WAWebSetArchiveChatAction").setArchive(chat, archive, showToast).catch(r("WAWebNoop")).finally(()=>{
            chat.pendingAction = chat.pendingAction - 1;
        });
    }
    function M(e, t, n) {
        e.pendingAction = e.pendingAction + 1;
        if (t) {
            o("WAWebAddToFavoritesAction").addToFavoritesAction([
                e.id
            ], {
                entryPoint: n
            }).catch(r("WAWebNoop")).finally(()=>{
                e.pendingAction = e.pendingAction - 1;
            });
        } else {
            o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(e.id, {
                entryPoint: n
            }).catch(r("WAWebNoop")).finally(()=>{
                e.pendingAction = e.pendingAction - 1;
            });
        }
    }
    function w(e, t) {
        e.pendingAction = e.pendingAction + 1;
        o("WAWebSetPinChatAction").setPin(e, t).catch(r("WAWebNoop")).finally(()=>{
            e.pendingAction = e.pendingAction - 1;
        });
    }
    function A(e) {
        const t = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
        if (!t) {
            o("WAWebMuteCollection").MuteCollection.setGlobalNotificationReactionsEnabled(e);
            o("WAWebMuteCollection").MuteCollection.setGlobalGroupNotificationReactionsEnabled(e);
            o("WAWebMuteCollection").MuteCollection.setGlobalStatusNotificationReactionsEnabled(e);
        }
    }
    function F(e, t, n) {
        const r = o("WAWebMuteExpirations").calculateMuteExpiration(t);
        o("WAWebUserPrefsGeneral").setLastChatMuteDuration(t);
        e.pendingAction = e.pendingAction + 1;
        e.mute.mute({
            expiration: r,
            sendDevice: true
        }).finally(()=>{
            e.pendingAction = e.pendingAction - 1;
        });
        if (e.isBusinessGroup() || e.contact.isBusiness) {
            new (o("WAWebBusinessMuteWamEvent")).BusinessMuteWamEvent().commit();
        }
        o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserMuteEvent({
            chat: e
        });
        f(e, true, n);
    }
    function O(e) {
        e.pendingAction = e.pendingAction + 1;
        e.mute.unmute({
            sendDevice: true,
            fromMultiselect: true
        }).finally(()=>{
            e.pendingAction = e.pendingAction - 1;
        });
    }
    function BComponent(participantNeedInvite, groupGid, subject, groupDesc, onFinish) {
        const Component = o("WAWebGroupsV4InviteFlowLoadable").GroupsV4InviteFlowLoadable;
        o("WAWebModalManager").ModalManager.open(<Component participantNeedInvite={participantNeedInvite} groupGid={groupGid} subject={subject} groupDesc={groupDesc} onFinish={onFinish}/>);
    }
    l.default = g;
}, 226);