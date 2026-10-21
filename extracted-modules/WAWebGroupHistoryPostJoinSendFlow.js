__d("WAWebGroupHistoryPostJoinSendFlow", [
    "fbt",
    "WALogger",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryParticipantAvatarRow.react",
    "WAWebGroupHistoryPostJoinConfirmPopup.react",
    "WAWebGroupHistoryPostJoinEligibilityFull",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySendMessagesModal.react",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupHistorySentOnceAction",
    "WAWebGroupHistoryShareToggleDefaultAction",
    "WAWebGroupMetadataCollection",
    "WAWebModalManager",
    "WAWebSendHistoryBundleAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumTsSurface",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = _ || (_ = o("react"));
    const g = 64;
    const h = {
        titleHeader: {
            rowGap: "x8a3fw1",
            alignItems: "x1qjc9v5",
            $$css: true
        }
    };
    const y = 100;
    function C(e) {
        let t = false;
        const n = function() {
            o("WAWebModalManager").ModalManager.off("close_modal", n);
            if (!t) {
                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bottomsheetDismissed(e);
            }
        };
        return {
            start: function() {
                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bottomsheetDisplayed(e);
                o("WAWebModalManager").ModalManager.on("close_modal", n);
            },
            markConfirm: function() {
                if (!t) {
                    t = true;
                    o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bottomsheetConfirmButtonClicked(e);
                }
            },
            markCancel: function() {
                if (!t) {
                    t = true;
                    o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bottomsheetCancelButtonClicked(e);
                }
            }
        };
    }
    function b(e, t, n, r, o, a) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a, i = o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT, l) {
            if (t.length !== 0) {
                const s = o("WAWebWidFactory").asGroupWidOrThrow(e);
                const u = r("WAWebGroupMetadataCollection").get(s);
                if (u == null) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] post-join: missing groupMetadata ",
                        ""
                    ])), s.toString()).sendLogs("group-history-post-join-missing-group");
                    return;
                }
                const c = S(t);
                const { recipients, restrictedWids } = c;
                if (recipients.length === 1) {
                    yield R(e, s, u, recipients[0], n, a, i, l, restrictedWids);
                    return;
                }
                yield E(e, s, u, recipients, n, a, i, l, restrictedWids);
            }
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        const t = e.filter((e)=>!o("WAWebGroupHistoryRestrictionHelper").isHistoryRestrictedWid(e.id));
        if (t.length === 0) {
            return {
                recipients: e,
                restrictedWids: []
            };
        }
        return {
            recipients: t,
            restrictedWids: e.filter((e)=>o("WAWebGroupHistoryRestrictionHelper").isHistoryRestrictedWid(e.id)).map((e)=>e.contact.id)
        };
    }
    function R(e, t, n, r, o, a, i, l, s) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(groupWid, t, a, i, l, u, c, d, restrictedWids) {
            const joinTime = i.joinTime ?? l;
            if (joinTime != null) {
                let y;
                try {
                    y = yield o("WAWebGroupHistoryPostJoinEligibilityFull").isEligibleForPostJoinHistoryFull({
                        groupMetadata: a,
                        groupWid: t,
                        joinTimeFallback: l,
                        participant: i
                    });
                } catch (error) {
                    x(error);
                    P();
                    return;
                }
                if (!y.eligible) {
                    if (u != null) {
                        o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
                            ineligibleReason: o("WAWebGroupHistorySenderUserJourneyLogger").mapEligibilityResultToIneligibleReason(y.reason),
                            uiSurface: c
                        });
                    }
                    P();
                    return;
                }
                const contactName = o("WAWebFrontendContactGetters").getFormattedShortName(i.contact);
                const v = u != null ? C({
                    bundleSendSource: u,
                    recipientCount: 1,
                    uiSurface: c
                }) : null;
                const S = (()=>{
                    const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(messageCount, r) {
                        v?.markConfirm();
                        let s;
                        try {
                            s = yield o("WAWebGroupHistoryPostJoinEligibilityFull").isEligibleForPostJoinHistoryFull({
                                groupMetadata: a,
                                groupWid: t,
                                joinTimeFallback: l,
                                participant: i
                            });
                        } catch (error) {
                            r();
                            x(error);
                            P();
                            return;
                        }
                        r();
                        if (!s.eligible) {
                            if (u != null) {
                                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick({
                                    ineligibleReason: o("WAWebGroupHistorySenderUserJourneyLogger").mapEligibilityResultToIneligibleReason(s.reason),
                                    uiSurface: c
                                });
                            }
                            P();
                            return;
                        }
                        yield O({
                            bundleSendSource: u,
                            contactName,
                            groupHistorySystemMessageType: d,
                            groupWid,
                            joinTime,
                            messageCount,
                            receiverWid: i.contact.id,
                            restrictedWids,
                            uiSurface: c
                        });
                    });
                    return function(t, n) {
                        return r.apply(this, arguments);
                    };
                })();
                const R = y.messageCount;
                if (u != null) {
                    o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                        groupHistoryMessagesCount: R,
                        uiSurface: c
                    });
                }
                const L = function() {
                    TComponent({
                        bundleSendSource: u,
                        groupOnlyWid: t,
                        onDone: function(t) {
                            S(t, function() {
                                o("WAWebModalManager").ModalManager.closeSupportModal();
                                o("WAWebModalManager").ModalManager.close();
                            });
                        },
                        totalMessages: R,
                        uiSurface: c
                    });
                };
                v?.start();
                const Component = o("WAWebDetailImage.react").DetailImage;
                const Component_1 = o("WAWebFlex.react").FlexColumn;
                const Component_2 = r("WAWebGroupHistoryPostJoinConfirmPopup.react");
                $(<Component_2 title=<Component_1 xstyle={h.titleHeader}><div className="x78zum5 xl56j7k" data-testid="group-history-post-join-modal-avatar"><Component id={i.contact.id} size={g} onClick={function() {
                    return D(t);
                }}/></div>{s._("Send message history to {contactName}?", [
                    s._param("contactName", contactName)
                ])}</Component_1> okText={s._("Send")} onCancel={function() {
                    v?.markCancel();
                    o("WAWebModalManager").closeModalManager();
                }} onConfirm={function() {
                    return S(null, o("WAWebModalManager").closeModalManager);
                }}>{s._("{contactName} will get {recentMessagesLink} from this group.", [
                    s._param("contactName", contactName),
                    s._param("recentMessagesLink", IComponent(L))
                ])}</Component_2>, t);
            }
        });
        return L.apply(this, arguments);
    }
    function E(e, t, n, r, o, a, i, l, s) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, participants, l, u, c, d, m) {
            let p;
            try {
                p = yield o("WAWebGroupHistoryPostJoinEligibilityFull").isEligibleForPostJoinHistoryFullMulti({
                    groupMetadata: a,
                    groupWid: t,
                    joinTimeFallback: l,
                    participants
                });
            } catch (error) {
                x(error);
                P();
                return;
            }
            if (p.eligible.length === 0) {
                if (u != null) {
                    o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
                        ineligibleReason: o("WAWebGroupHistorySenderUserJourneyLogger").mapEligibilityResultToIneligibleReason(p.ineligible[0]?.reason),
                        uiSurface: c
                    });
                }
                N(p.ineligible);
                return;
            }
            const g = o("WAWebFrontendContactGetters").getFormattedShortName(participants[0].contact);
            const y = participants.length - 1;
            const b = u != null ? C({
                bundleSendSource: u,
                recipientCount: participants.length,
                uiSurface: c
            }) : null;
            const v = (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, r) {
                    b?.markConfirm();
                    let s;
                    try {
                        s = yield o("WAWebGroupHistoryPostJoinEligibilityFull").isEligibleForPostJoinHistoryFullMulti({
                            groupMetadata: a,
                            groupWid: t,
                            joinTimeFallback: l,
                            participants
                        });
                    } catch (error) {
                        r();
                        x(error);
                        P();
                        return;
                    }
                    r();
                    if (s.eligible.length === 0) {
                        if (u != null) {
                            o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick({
                                ineligibleReason: o("WAWebGroupHistorySenderUserJourneyLogger").mapEligibilityResultToIneligibleReason(s.ineligible[0]?.reason),
                                uiSurface: c
                            });
                        }
                        N(s.ineligible);
                        return;
                    }
                    yield W(e, s.eligible, l, n, u, c, d, m);
                    M(s.ineligible);
                });
                return function(t, n) {
                    return r.apply(this, arguments);
                };
            })();
            const p_messageCount = p.messageCount;
            if (u != null) {
                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                    groupHistoryMessagesCount: p_messageCount,
                    uiSurface: c
                });
            }
            const R = function() {
                TComponent({
                    bundleSendSource: u,
                    groupOnlyWid: t,
                    onDone: function(t) {
                        v(t, function() {
                            o("WAWebModalManager").ModalManager.closeSupportModal();
                            o("WAWebModalManager").ModalManager.close();
                        });
                    },
                    totalMessages: p_messageCount,
                    uiSurface: c
                });
            };
            b?.start();
            const Component = r("WAWebGroupHistoryParticipantAvatarRow.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = r("WAWebGroupHistoryPostJoinConfirmPopup.react");
            $(<Component_2 title=<Component_1 xstyle={h.titleHeader}><Component participants={participants} onAvatarClick={function() {
                return D(t);
            }}/>{s._("_j{\"*\":\"Send message history to {firstPersonName} and {number of other recipients} others?\",\"_1\":\"Send message history to {firstPersonName} and 1 other?\"}", [
                s._plural(y, "number of other recipients"),
                s._param("firstPersonName", g)
            ])}</Component_1> okText={s._("Send")} onCancel={function() {
                b?.markCancel();
                o("WAWebModalManager").closeModalManager();
            }} onConfirm={function() {
                return v(null, o("WAWebModalManager").closeModalManager);
            }}>{s._("They'll get {recentMessagesLink} from this group.", [
                s._param("recentMessagesLink", IComponent(R))
            ])}</Component_2>, t);
        });
        return k.apply(this, arguments);
    }
    function IComponent(e) {
        const Component = r("WDSTextualLink.react");
        return <Component onClick={e} testid="group-history-post-join-recent-messages-link" textConfig="Body2">{s._("recent messages")}</Component>;
    }
    IComponent.displayName = `${IComponent.name} [from ${i.id}]`;
    function TComponent({ bundleSendSource, groupOnlyWid, onDone, totalMessages, uiSurface }) {
        if (bundleSendSource != null) {
            o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.countChangeEntryPointClicked({
                groupHistoryMessagesCount: totalMessages,
                uiSurface
            });
        }
        const selectedMessageCount = Math.min(y, totalMessages);
        const Component = r("WAWebGroupHistorySendMessagesModal.react");
        o("WAWebModalManager").ModalManager.openSupportModal(<Component currentMessageCount={totalMessages} selectedMessageCount={selectedMessageCount} showPinDisclaimer={o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(groupOnlyWid)} primaryButtonLabel={s._("Send")} onDone={onDone} onCountChanged={function(n) {
            if (bundleSendSource != null) {
                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.countChanged({
                    groupHistoryMessagesCount: n,
                    uiSurface
                });
            }
        }} onCancel={function() {
            return o("WAWebModalManager").ModalManager.closeSupportModal();
        }}/>);
    }
    function D(e) {
        const t = o("WAWebChatCollection").ChatCollection.get(e);
        if (t != null) {
            o("WAWebModalManager").ModalManager.close();
            o("WAWebCmd").Cmd.chatInfoDrawer(t, {
                scrollToParticipantList: true
            });
        }
    }
    function x(error) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[group-history] post-join eligibility probe failed"
        ]))).catching(r("getErrorSafe")(error)).sendLogs("group-history-post-join-eligibility-failed");
    }
    function $(e, t) {
        try {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            o("WAWebModalManager").ModalManager.openSupportModal(<Component name="GroupHistoryPostJoinConfirmModal" onError={function(n) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] post-join: confirm modal crashed while rendering for ",
                    ""
                ])), t.toLogString()).catching(r("getErrorSafe")(n)).sendLogs("group-history-post-join-modal-render-failed");
            }}>{e}</Component>);
        } catch (error) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] post-join: failed to open the send-history confirm modal for ",
                ""
            ])), t.toLogString()).catching(r("getErrorSafe")(error)).sendLogs("group-history-post-join-modal-open-failed");
        }
    }
    function P() {
        o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Message history is not available")
        }));
    }
    function N(ineligible) {
        const t = w(ineligible);
        if (t.length > 0 && t.length === ineligible.length) {
            AComponent(t);
            return;
        }
        P();
    }
    function M(ineligible) {
        const t = w(ineligible);
        if (t.length > 0) {
            AComponent(t);
        }
    }
    function w(ineligible) {
        return ineligible.filter((e)=>e.reason === "already_received").map((e)=>e.participant);
    }
    function AComponent(e) {
        if (e.length !== 0) {
            const t = o("WAWebFrontendContactGetters").getFormattedShortName(e[0].contact);
            const n = e.length - 1;
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            o("WAWebModalManager").ModalManager.openSupportModal(<Component tsNavigationData={{
                surface: "unknown",
                viewName: "group-history-post-join-ineligible"
            }} onOK={function() {
                return o("WAWebModalManager").ModalManager.closeSupportOrModal();
            }} okText={s._("OK")}>{F(t, n)}</Component>);
        }
    }
    function F(e, t) {
        if (t === 0) {
            return s._("You can't send {memberName} message history because they already received it.", [
                s._param("memberName", e)
            ]);
        }
        return s._("_j{\"*\":\"You can't send {firstMemberName} and {number of other members} others message history because they already received it.\",\"_1\":\"You can't send {firstMemberName} and 1 other message history because they already received it.\"}", [
            s._plural(t, "number of other members"),
            s._param("firstMemberName", e)
        ]);
    }
    F.displayName = `${F.name} [from ${i.id}]`;
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ bundleSendSource, contactName, groupHistorySystemMessageType, groupWid, joinTime, messageCount, receiverWid, restrictedWids, uiSurface }) {
            const p = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([
                receiverWid
            ].concat(restrictedWids));
            const { historyReceivers, nonHistoryReceivers } = p;
            if (historyReceivers.length !== 0) {
                if (bundleSendSource != null) {
                    o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bundleMessageSent({
                        bundleSendSource,
                        groupHistoryMessagesCount: messageCount,
                        groupHistorySystemMessageType,
                        recipientCount: historyReceivers.length,
                        uiSurface
                    });
                    o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.noticeMessageSent({
                        bundleSendSource,
                        groupHistorySystemMessageType,
                        recipientCount: historyReceivers.length,
                        uiSurface
                    });
                }
                const h = o("WAWebWidToJid").widToGroupJid(groupWid);
                try {
                    const y = yield o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(h, historyReceivers, nonHistoryReceivers, messageCount, joinTime);
                    const { bundleAcked, noticeAcked } = y;
                    o("WAWebGroupHistoryShareToggleDefaultAction").setGroupHistoryShareToggleDefault(groupWid, true);
                    if (o("WAWebGroupHistoryGating").isGroupHistorySendOnceDefaultOnEnabled()) {
                        o("WAWebGroupHistorySentOnceAction").markGroupHistorySentOnce();
                    }
                    if (bundleSendSource != null) {
                        if (bundleAcked) {
                            o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bundleMessageAcked({
                                bundleSendSource,
                                groupHistorySystemMessageType,
                                recipientCount: historyReceivers.length,
                                uiSurface
                            });
                        }
                        if (noticeAcked) {
                            o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.noticeMessageAcked({
                                bundleSendSource,
                                groupHistorySystemMessageType,
                                recipientCount: historyReceivers.length,
                                uiSurface
                            });
                        }
                    }
                    o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Message history sent to {contactName}", [
                            s._param("contactName", contactName)
                        ])
                    }));
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] failed to send post-join history bundle: ",
                        ""
                    ])), error).sendLogs("group-history-post-join-send-failed");
                }
            }
        });
        return B.apply(this, arguments);
    }
    function W(e, t, n, r, o, a, i, l) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a, i, l, u) {
            const c = n ?? t[0].joinTime;
            if (c != null) {
                const d = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([].concat(t.map((e)=>e.contact.id), u));
                const { historyReceivers, nonHistoryReceivers } = d;
                if (historyReceivers.length !== 0) {
                    if (a != null) {
                        o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bundleMessageSent({
                            bundleSendSource: a,
                            groupHistoryMessagesCount: r,
                            groupHistorySystemMessageType: l,
                            recipientCount: historyReceivers.length,
                            uiSurface: i
                        });
                        o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.noticeMessageSent({
                            bundleSendSource: a,
                            groupHistorySystemMessageType: l,
                            recipientCount: historyReceivers.length,
                            uiSurface: i
                        });
                    }
                    const g = o("WAWebFrontendContactGetters").getFormattedShortName(t[0].contact);
                    const h = t.length - 1;
                    const y = o("WAWebWidToJid").widToGroupJid(e);
                    try {
                        const C = yield o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(y, historyReceivers, nonHistoryReceivers, r, c);
                        const { bundleAcked, noticeAcked } = C;
                        o("WAWebGroupHistoryShareToggleDefaultAction").setGroupHistoryShareToggleDefault(e, true);
                        if (o("WAWebGroupHistoryGating").isGroupHistorySendOnceDefaultOnEnabled()) {
                            o("WAWebGroupHistorySentOnceAction").markGroupHistorySentOnce();
                        }
                        if (a != null) {
                            if (bundleAcked) {
                                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bundleMessageAcked({
                                    bundleSendSource: a,
                                    groupHistorySystemMessageType: l,
                                    recipientCount: historyReceivers.length,
                                    uiSurface: i
                                });
                            }
                            if (noticeAcked) {
                                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.noticeMessageAcked({
                                    bundleSendSource: a,
                                    groupHistorySystemMessageType: l,
                                    recipientCount: historyReceivers.length,
                                    uiSurface: i
                                });
                            }
                        }
                        o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebToast.react").Toast, {
                            msg: s._("_j{\"*\":\"Message history sent to {firstPersonName} and {number of other recipients} others\",\"_1\":\"Message history sent to {firstPersonName} and 1 other\"}", [
                                s._plural(h, "number of other recipients"),
                                s._param("firstPersonName", g)
                            ])
                        }));
                    } catch (error) {
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history] post-join multi send failed: ",
                            ""
                        ])), error).sendLogs("group-history-post-join-send-multi-failed");
                    }
                }
            }
        });
        return q.apply(this, arguments);
    }
    l.startPostJoinSendFlow = b;
}, 226);