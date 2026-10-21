__d("WAWebOpenAddParticipantModalFlow", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebAddGroupParticipantFlow.react",
    "WAWebAddGroupParticipantGroupHistoryContextProvider.react",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupMetadataTypeUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumTsSurface",
    "WAWebWidFactory",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = o("WAWebActionToast.react").genId("max_participant_toast");
    function m({ chat, communityName, entryPoint, groupMetadata, onBack, reopenAddGroupFlowCallback }) {
        const p = o("WAWebMiscGatingUtils").getGroupSizeLimit(o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(groupMetadata));
        const _ = o("WAWebWidFactory").asGroupWidOrThrow(chat.id);
        const f = o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(_) ? o("WATimeUtils").unixTime() : null;
        const messageCountPromise = f != null ? o("WAWebGetGroupHistoryBundleMessagesCount").getGroupHistoryBundleMessageCount({
            groupWid: _,
            targetStartMessageTime: f
        }) : null;
        if (messageCountPromise != null) {
            messageCountPromise.then((e)=>o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                    groupHistoryMessagesCount: e,
                    uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                })).catch((t)=>o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] add-member selectable message count failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("group-history-add-member-selectable-messages-load-failed"));
        }
        if (groupMetadata?.participants.length >= p) {
            const h = s._("Can't add more than {max} members", [
                s._param("max", p)
            ]);
            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                msg: h,
                id: d
            }));
        } else {
            const Component = r("WAWebAddGroupParticipantFlow.react");
            const Component_1 = r("WAWebAddGroupParticipantGroupHistoryContextProvider.react");
            const y = <Component_1 chat={chat} enterFlowTimestamp={f} messageCountPromise={messageCountPromise}><Component chat={o("WAWebStateUtils").unproxy(chat)} communityName={communityName} entryPoint={entryPoint} onBack={onBack} reopenAddGroupFlowCallback={reopenAddGroupFlowCallback}/></Component_1>;
            o("WAWebModalManager").ModalManager.open(y, {
                transition: "modal-flow"
            });
        }
    }
    l.openAddParticipantModalFlow = m;
}, 226);