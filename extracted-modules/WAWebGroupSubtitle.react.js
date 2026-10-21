__d("WAWebGroupSubtitle.react", [
    "fbt",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebChatAssignmentLogEvents",
    "WAWebChatCollection",
    "WAWebChatSubtitleText",
    "WAWebChatstateGetters",
    "WAWebCurrentUser",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebFrontendPresenceGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupQueryJob",
    "WAWebGroupType",
    "WAWebParticipantsList.react",
    "WAWebPresenceEnum",
    "WAWebTypingIndicatorGatingUtils",
    "getErrorSafe",
    "react",
    "useWAWebChatstateValues",
    "useWAWebGroupMetadataValues",
    "useWAWebIAmGroupAdmin",
    "useWAWebIAmGroupMember",
    "useWAWebPresenceValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const d_useEffect = d.useEffect;
    function _({ assignmentSubtitle, chatId, chatstate, groupMetadata, location, placeholder, presence }) {
        let n;
        const h = o("useWAWebChatstateValues").useChatstateValues(chatstate, [
            o("WAWebChatstateGetters").getType,
            o("WAWebChatstateGetters").getDeny,
            o("WAWebChatstateGetters").getT
        ]);
        const y = h[0];
        const C = h[1];
        const b = h[2];
        const v = o("useWAWebGroupMetadataValues").useGroupMetadataValues(groupMetadata.id, [
            (n = o("WAWebFrontendGroupMetadataGetters")).getAnnounce,
            n.getSize,
            n.getId,
            n.getHasCapi,
            n.getIsOpenBotGroup
        ]);
        const S = v[0];
        const R = v[1];
        const L = v[2];
        const E = v[3];
        const k = v[4];
        const I = r("useWAWebIAmGroupAdmin")(groupMetadata);
        const T = r("useWAWebIAmGroupMember")(groupMetadata);
        const D = o("useWAWebGroupMetadataValues").useGroupMetadataValues(groupMetadata.id, [
            o("WAWebGroupMetadataGetters").getIsCag,
            o("WAWebGroupMetadataGetters").getGroupType
        ]);
        const x = D[0];
        const $ = D[1];
        const P = o("useWAWebPresenceValues").usePresenceValues(presence.id, [
            o("WAWebFrontendPresenceGetters").getForceDisplay,
            o("WAWebFrontendPresenceGetters").getGroupOnlineCount,
            o("WAWebFrontendPresenceGetters").getWithholdDisplayStage
        ]);
        const N = P[0];
        const M = P[1];
        const w = P[2];
        const A = ()=>$ === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && T && !I;
        d_useEffect(function() {
            if (A() && x && L.isGroup() && !R) {
                o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                    id: L
                }).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[CAG][Group Subtitle]"
                    ]))).catching(r("getErrorSafe")(t));
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[CAG][Group Subtitle] Failed to query group metadata for CAG"
                    ]))).sendLogs("failed-to-query-group-metadata-for-cag");
                    if (o("WAWebCurrentUser").isEmployee()) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[CAG] Failed to query group metadata ",
                            " isCAG=",
                            " isGroup=",
                            ""
                        ])), L.toString(), x, L.isGroup());
                    }
                });
            }
        }, []);
        d_useEffect(function() {
            if (assignmentSubtitle != null && w === o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment) {
                o("WAWebChatAssignmentLogEvents").logChatStatusTickerShown(chatId);
            }
        }, [
            chatId,
            w,
            assignmentSubtitle
        ]);
        const elevatedPushNamesEnabled = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(o("WAWebChatCollection").ChatCollection.get(chatId));
        const O = ()=>{
            if ($ === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                return {
                    text: s._("Announcements")
                };
            }
            return presence.getGroupSubtitleText({
                elevatedPushNamesEnabled,
                isTypingIndicatorMessageBubbleEnabled: o("WAWebTypingIndicatorGatingUtils").isTypingIndicatorMessageBubbleEnabled(chatId)
            });
        };
        let overridingText;
        let W;
        let showLockIcon = false;
        if (w === o("WAWebPresenceEnum").WithholdDisplayStage.CommunityName) {
            const V = o("WAWebChatCollection").ChatCollection.get(chatId);
            const H = V?.groupMetadata?.getParentGroupChat();
            const G = H?.contact;
            const z = G != null ? o("WAWebFrontendContactGetters").getFormattedName(G) : null;
            overridingText = s._("{community}", [
                s._param("community", z)
            ]);
        } else if (w === o("WAWebPresenceEnum").WithholdDisplayStage.OnlyAdminsCanSend) {
            overridingText = s._("Only admins can send messages");
        } else if (E === true) {
            overridingText = assignmentSubtitle;
        } else if (w === o("WAWebPresenceEnum").WithholdDisplayStage.E2EE) {
            overridingText = o("WAWebChatSubtitleText").e2eChatSubtitleText();
            showLockIcon = true;
        } else if (w === o("WAWebPresenceEnum").WithholdDisplayStage.Info) {
            overridingText = placeholder;
        } else if (assignmentSubtitle != null && w === o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment) {
            overridingText = assignmentSubtitle;
        } else {
            const j = O();
            if (j != null) {
                overridingText = j.text;
                W = j.ariaLabel;
            }
        }
        if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && k === true) {
            showLockIcon = false;
            overridingText = undefined;
        }
        return m.jsx(r("WAWebParticipantsList.react"), {
            groupMetadata,
            overridingText,
            placeholder,
            ariaLabel: W,
            location,
            showLockIcon
        });
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 226);