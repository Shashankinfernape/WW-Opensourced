__d("WAWebConversationLoadMoreMessagesHistorySync", [
    "fbt",
    "WALogger",
    "WAWebChatConstants",
    "WAWebClock",
    "WAWebConfirmPopup.react",
    "WAWebHistorySyncInProgressPopup.react",
    "WAWebHistorySyncOnDemandEvents",
    "WAWebHistorySyncPausedPopup.react",
    "WAWebHistorySyncProgressGetters",
    "WAWebHistorySyncUIText",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebModalManager",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebSpinner.react",
    "WAWebSyncGatingUtils",
    "WAWebUserPrefsHistorySync",
    "WDSIconIcErrorFilled.react",
    "WDSIconIcSync.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebHistorySyncProgressValues",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const d_useState = d.useState;
    function _() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebLinkDeviceCommonInstructions.react").Strong;
            t = s._("Tap {=m1} and find this device.", [
                s._implicitParam("=m1", <Component>{s._("Linked devices")}</Component>)
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function F1Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebLinkDeviceCommonInstructions.react").Strong;
            const Component_1 = o("WAWebLinkDeviceCommonInstructions.react").Strong;
            t = s._("In {=m1} settings enable {=m4}, and then try again.", [
                s._implicitParam("=m1", <Component>{s._("Chat history")}</Component>),
                s._implicitParam("=m4", <Component_1>{s._("All chat history")}</Component_1>)
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    const g = {
        popoverButtonGroup: {
            paddingTop: "x1h678fw",
            $$css: true
        }
    };
    function h() {
        return s._("Click here to get older messages from your phone.");
    }
    function YComponent() {
        const Component = r("WDSText.react");
        const e = <Component type="Headline2" colorName="contentDefault">{s._("This device needs your permission to load older messages.")}</Component>;
        const t = [
            m.jsx(o("WAWebLinkDeviceCommonInstructions.react").LinkDeviceInstructionOpenWhatsAppOnPhone, {}, "step1"),
            m.jsx(o("WAWebLinkDeviceCommonInstructions.react").LinkDeviceInstructionNavigateToSettings, {}, "step2"),
            <_ key="step3"/>,
            <F1Component key="step4"/>
        ];
        const n = t.length - 1;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component_1 tsNavigationData={{
            surface: "unknown",
            viewName: "load-more-messages"
        }} title={e} onOK={o("WAWebModalManager").closeModalManager} buttonGroupStyle={g.popoverButtonGroup}><ol className="x3yw8vx xlese2p">{t.map((e, t)=><li key={`step-${t}`} {...babelHelpers.extends({}, {
                0: {},
                1: {
                    className: "xefnzgg"
                }
            }[(t !== n) << 0], {
                children: e
            })}/>)}</ol></Component_1>);
    }
    function C({ chatId, mdHistorySyncTransferState, threadId }) {
        const l = o("useWAWebHistorySyncProgressValues").useHistorySyncProgressValues([
            o("WAWebHistorySyncProgressGetters").getInProgress,
            o("WAWebHistorySyncProgressGetters").getPaused
        ]);
        const d = l[0];
        const _ = l[1];
        const f = mdHistorySyncTransferState === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
        const g = chatId?.toJid();
        const C = d_useState(function() {
            if (g != null) {
                return new Set(o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").inFlightHistorySyncOnDemandRequests.values()).has(g);
            }
            return false;
        });
        const b = C[0];
        const v = C[1];
        const S = d_useState(null);
        const R = S[0];
        const L = S[1];
        o("useWAWebListener").useListener(o("WAWebHistorySyncOnDemandEvents").WAWebHistorySyncOnDemandEvents, "history_sync_on_demand_events:success_history_sync_od", function(t) {
            if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() && t === g) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][on demand] success for chat ",
                    ""
                ])), chatId?.toLogString());
                v(false);
                L(true);
                if (mdHistorySyncTransferState === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS && o("WAWebSyncGatingUtils").isHistorySyncOnDemandCompleteCompanionEnabled()) {
                    YComponent();
                }
            }
        });
        o("useWAWebListener").useListener(o("WAWebHistorySyncOnDemandEvents").WAWebHistorySyncOnDemandEvents, "history_sync_on_demand_events:error_history_sync_od", function(e) {
            if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() && e === g) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][on demand] fail for chat ",
                    ""
                ])), chatId?.toLogString());
                v(false);
                L(false);
            }
        });
        let E;
        let k;
        let I;
        if (threadId != null) {
            E = s._("Use WhatsApp on your phone to see older messages.");
        } else if (f && d) {
            E = _ ? o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_SYSTEM_MESSAGE_TEXT() : o("WAWebHistorySyncUIText").SYNC_IN_PROGRESS_CONTEXTUAL_SYSTEM_MESSAGE_TEXT();
            k = _ ? m.jsx(r("WDSIconIcErrorFilled.react"), {
                width: 16,
                height: 16,
                colorName: "secondaryWarning",
                testid: "alert-sync-paused"
            }) : m.jsx(r("WDSIconIcSync.react"), {
                height: 24,
                width: 24,
                viewBox: {
                    x: -10,
                    y: -5,
                    width: 32,
                    height: 32
                }
            });
            I = _ ? function() {
                o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebHistorySyncPausedPopup.react"), {}));
            } : function() {
                o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebHistorySyncInProgressPopup.react"), {}));
            };
        } else {
            if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() && mdHistorySyncTransferState != null && !d && !b && !o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils").historySyncOnDemandRequestsFailureRecord.disableRequestSending) {
                switch(mdHistorySyncTransferState){
                    case o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY:
                    case o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS:
                        {
                            if (mdHistorySyncTransferState === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS && !o("WAWebSyncGatingUtils").isHistorySyncOnDemandCompleteCompanionEnabled()) {
                                break;
                            }
                            if (chatId != null) {
                                if (R !== false) {
                                    E = h();
                                } else {
                                    E = s._("Couldn't get older messages. Open WhatsApp on your phone and click here to try again.");
                                    k = m.jsx(r("WDSIconIcErrorFilled.react"), {
                                        width: 16,
                                        height: 16,
                                        colorName: "secondaryWarning",
                                        testid: "alert-sync-paused"
                                    });
                                }
                                I = function() {
                                    v(true);
                                    L(null);
                                    o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND, {
                                        chatId
                                    }).catch(()=>{
                                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                            "[history sync][on demand] failed to send request for chat ",
                                            ""
                                        ])), chatId?.toLogString()).sendLogs("history-sync-on-demand-request-failed");
                                        v(false);
                                        L(false);
                                    });
                                };
                            }
                            break;
                        }
                    case o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY:
                        E = s._("Use WhatsApp on your phone to see older messages.");
                        break;
                    case o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY:
                    case o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE:
                    case o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC:
                        break;
                }
            }
            if (E == null) {
                const T = o("WAWebClock").Clock.relativeDateStr(o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate());
                E = s._("Use WhatsApp on your phone to see older messages from before {date}.", [
                    s._param("date", T)
                ]);
            }
        }
        if (o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() && b) {
            return <div className="x78zum5 x1okw0bk xl56j7k xexx8yu xyri2b xvg22vi x1c1uobl"><div className="x78zum5 x6s0dn4 xl56j7k x187nhsf xn3w4p2 xdj266r x11t971q xat24cr xvc5jky xhslqc4 x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1wpep30">{m.jsx(o("WAWebSpinner.react").Spinner, {
                stroke: 6,
                size: 24,
                color: "highlight"
            })}</div></div>;
        }
        const D = <div className="x78zum5 x6s0dn4 x1r0jzty x17zd0t2">{k}<div>{E}</div></div>;
        const x = {
            0: "x9f619 x1rg5ohu x1okw0bk x193iq5w x123j3cw xpdmqnj x10b6aqq x1g0dm76 x13a8xbf xdod15v x2b8uid xyi3aci xwf5gio x1p453bz x1suzm8a",
            2: "x1bvqhpb x1iyt1tq x1s0q3zl x9f619 x1rg5ohu x1okw0bk x193iq5w x123j3cw xpdmqnj x10b6aqq x1g0dm76 x13a8xbf xdod15v x2b8uid xyi3aci xwf5gio x1p453bz x1suzm8a",
            1: "x1bvqhpb x1280gxy x1b9z3ur x9f619 x1rg5ohu x1okw0bk x193iq5w x123j3cw xpdmqnj x10b6aqq x1g0dm76 x13a8xbf xdod15v x2b8uid xyi3aci xwf5gio x1p453bz x1suzm8a",
            3: "x1bvqhpb x1280gxy x1b9z3ur x9f619 x1rg5ohu x1okw0bk x193iq5w x123j3cw xpdmqnj x10b6aqq x1g0dm76 x13a8xbf xdod15v x2b8uid xyi3aci xwf5gio x1p453bz x1suzm8a"
        }[!f << 1 | !!f << 0];
        const $ = I != null ? <button className={x} onClick={I}>{D}</button> : <div className={x}>{D}</div>;
        return <div className="x78zum5 x1okw0bk xl56j7k xqy66fx xyri2b x1hhzuzn x1c1uobl">{$}</div>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.default = C;
}, 226);