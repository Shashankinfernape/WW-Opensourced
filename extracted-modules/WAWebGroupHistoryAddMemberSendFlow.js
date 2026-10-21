__d("WAWebGroupHistoryAddMemberSendFlow", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryAddMemberEntryPoint",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinConfirmPopup.react",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySentOnceAction",
    "WAWebGroupHistoryShareToggleDefaultAction",
    "WAWebModalManager",
    "WAWebSendHistoryBundleAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
    const p = m || (m = o("react"));
    const _ = 64;
    const f = {
        titleHeader: {
            rowGap: "x8a3fw1",
            alignItems: "x1qjc9v5",
            $$css: true
        }
    };
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupMetadata }, n, a) {
            if (groupMetadata != null) {
                const groupWid = o("WAWebWidFactory").asGroupWidOrThrow(groupMetadata.id);
                if (y(groupMetadata, groupWid, n, a)) {
                    const targetStartMessageTime = o("WATimeUtils").unixTime();
                    let u;
                    try {
                        u = yield o("WAWebGetGroupHistoryBundleMessagesCount").getGroupHistoryBundleMessageCount({
                            groupWid,
                            targetStartMessageTime
                        });
                    } catch (error) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history] add-member availability probe failed"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("group-history-add-member-probe-failed");
                        return;
                    }
                    if (u !== 0) {
                        b(groupWid, n, targetStartMessageTime);
                    }
                }
            }
        });
        return h.apply(this, arguments);
    }
    function y(groupMetadata, groupWid, n, r) {
        return o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupStructurallyEligible(o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(groupMetadata)) && !o("WAWebGroupHistoryRestrictionHelper").isHistoryRestrictedWid(n.id) && !groupMetadata.participants.isParticipantWidOrAlternateWidValid(o("WAWebWidFactory").asUserWidOrThrow(n.id), function(e) {
            return o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(e?.groupHistorySentState);
        }) && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(groupWid) && C(r);
    }
    function C(e) {
        if (e === o("WAWebGroupHistoryAddMemberEntryPoint").AddMemberGroupHistoryEntryPoint.Mention) {
            return o("WAWebABProps").getABPropConfigValue("group_history_send_adding_from_mention");
        }
        if (e === o("WAWebGroupHistoryAddMemberEntryPoint").AddMemberGroupHistoryEntryPoint.ContactCard) {
            return o("WAWebABProps").getABPropConfigValue("group_history_send_adding_from_contact_message");
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function b(groupWid, t, targetStartMessageTime) {
        const i = o("WAWebFrontendContactGetters").getFormattedShortName(t);
        const Component = o("WAWebFlex.react").FlexColumn;
        const Component_1 = r("WAWebGroupHistoryPostJoinConfirmPopup.react");
        o("WAWebModalManager").ModalManager.openSupportModal(<Component_1 title=<Component xstyle={f.titleHeader}><div className="x78zum5 xl56j7k" data-testid="group-history-add-member-modal-avatar">{p.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: t.id,
            size: _
        })}</div>{s._("Send message history to {contactName}?", [
            s._param("contactName", i)
        ])}</Component> okText={s._("Send history")} cancelText={s._("Not now")} onCancel={o("WAWebModalManager").closeModalManager} onConfirm={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebModalManager").closeModalManager();
            yield v(groupWid, t, targetStartMessageTime);
        })}>{s._("{contactName} will get recent messages from this group.", [
            s._param("contactName", i)
        ])}</Component_1>);
    }
    function v(e, t, n) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([
                t.id
            ]);
            const { historyReceivers, nonHistoryReceivers } = a;
            if (historyReceivers.length === 0) {
                R(t);
                return;
            }
            try {
                const m = yield o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(o("WAWebWidToJid").widToGroupJid(e), historyReceivers, nonHistoryReceivers, null, n);
                const _ = m.bundleAcked;
                if (!_) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] add-member history bundle was not acked"
                    ]))).sendLogs("group-history-add-member-send-not-acked");
                    R(t);
                    return;
                }
                if (o("WAWebGroupHistoryGating").isGroupHistorySendOnceDefaultOnEnabled()) {
                    o("WAWebGroupHistorySentOnceAction").markGroupHistorySentOnce();
                }
                o("WAWebGroupHistoryShareToggleDefaultAction").setGroupHistoryShareToggleDefault(e, true).catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] failed to seed share-toggle default"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("group-history-add-member-toggle-default-failed");
                });
                o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Message history sent to {contactName}", [
                        s._param("contactName", o("WAWebFrontendContactGetters").getFormattedShortName(t))
                    ])
                }));
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] failed to send add-member history bundle"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("group-history-add-member-send-failed");
                R(t);
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Couldn't send message history to {contactName}", [
                s._param("contactName", o("WAWebFrontendContactGetters").getFormattedShortName(e))
            ])
        }));
    }
    l.offerGroupHistoryAfterAddingMember = g;
}, 226);