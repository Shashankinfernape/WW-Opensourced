__d("WAWebDrawerResolver.react", [
    "WAWebAdaptiveLayoutContext.react",
    "WAWebArchivedFlowLoadable",
    "WAWebChatSearchDrawerLoadable",
    "WAWebCommunityFlowLoadable",
    "WAWebContactMsgInfoFlowLoadable",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebEventInfoFlowLoadable",
    "WAWebExistingGroupPermissionsDrawerLoadable",
    "WAWebGroupMembershipApprovalRequestsFlowLoadable",
    "WAWebGroupMsgInfoFlowLoadable",
    "WAWebInfoFlowLoadable",
    "WAWebMeTabFlowLoadable",
    "WAWebMidDrawerEmptyStateLoadable",
    "WAWebNewChatFlowLoadable",
    "WAWebNewGroupFlowLoadable",
    "WAWebNewsletterTabFlowLoadable",
    "WAWebNotificationsFlowLoadable",
    "WAWebSettingsFlowLoadable",
    "WAWebStatusDrawerFlowLoadable",
    "WAWebVerificationDrawerLoadable",
    "WAWebVoipCallsTabDrawerFlowLoadable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    function c(e) {
        const t = o("react-compiler-runtime").c(54);
        const e_descriptor = e.descriptor;
        const a = e_useContext(r("WAWebAdaptiveLayoutContext.react"));
        const a_isNarrow = a.isNarrow;
        switch(e_descriptor.descriptorType){
            case "archived":
                {
                    let l;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        const Component = o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable;
                        l = <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>;
                        t[0] = l;
                    } else {
                        l = t[0];
                    }
                    return l;
                }
            case "calls_tab":
                {
                    let c;
                    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                        const Component = o("WAWebVoipCallsTabDrawerFlowLoadable").VoipCallsTabDrawerFlowLoadable;
                        c = <Component onBack={o("WAWebDrawerManager").closeDrawerLeft}/>;
                        t[1] = c;
                    } else {
                        c = t[1];
                    }
                    return c;
                }
            case "chat_search":
                {
                    let m;
                    if (t[2] !== e_descriptor.chat || t[3] !== e_descriptor.threadId) {
                        m = s.jsx(o("WAWebChatSearchDrawerLoadable").ChatSearchDrawerLoadable, {
                            chat: e_descriptor.chat,
                            threadId: e_descriptor.threadId
                        });
                        t[2] = e_descriptor.chat;
                        t[3] = e_descriptor.threadId;
                        t[4] = m;
                    } else {
                        m = t[4];
                    }
                    return m;
                }
            case "community_flow":
                {
                    let p;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        p = s.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {});
                        t[5] = p;
                    } else {
                        p = t[5];
                    }
                    return p;
                }
            case "contact_msg_info":
                {
                    let _;
                    if (t[6] !== e_descriptor.msg) {
                        _ = s.jsx(o("WAWebContactMsgInfoFlowLoadable").ContactMsgInfoFlowLoadable, {
                            msg: e_descriptor.msg
                        });
                        t[6] = e_descriptor.msg;
                        t[7] = _;
                    } else {
                        _ = t[7];
                    }
                    return _;
                }
            case "deactivate_community":
                {
                    let f;
                    if (t[8] !== e_descriptor.chat) {
                        const Component = o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable;
                        f = <Component chat={e_descriptor.chat} onBack={o("WAWebDrawerManager").closeDrawerRight}/>;
                        t[8] = e_descriptor.chat;
                        t[9] = f;
                    } else {
                        f = t[9];
                    }
                    return f;
                }
            case "event_info":
                {
                    let g;
                    if (t[10] !== e_descriptor.chat || t[11] !== e_descriptor.msg) {
                        const Component = o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable;
                        g = <Component chat={e_descriptor.chat} msg={e_descriptor.msg} onEnd={o("WAWebDrawerManager").closeDrawerRight}/>;
                        t[10] = e_descriptor.chat;
                        t[11] = e_descriptor.msg;
                        t[12] = g;
                    } else {
                        g = t[12];
                    }
                    return g;
                }
            case "existing_group_permissions":
                {
                    let h;
                    if (t[13] !== e_descriptor.chat || t[14] !== e_descriptor.groupMetadata) {
                        const Component = o("WAWebExistingGroupPermissionsDrawerLoadable").ExistingGroupPermissionsDrawerLoadable;
                        h = <Component chat={e_descriptor.chat} groupMetadata={e_descriptor.groupMetadata} onClose={o("WAWebDrawerManager").closeDrawerRight}/>;
                        t[13] = e_descriptor.chat;
                        t[14] = e_descriptor.groupMetadata;
                        t[15] = h;
                    } else {
                        h = t[15];
                    }
                    return h;
                }
            case "group_membership_approval_requests":
                {
                    let y;
                    if (t[16] !== e_descriptor.chat) {
                        const Component = o("WAWebGroupMembershipApprovalRequestsFlowLoadable").GroupMembershipApprovalRequestsFlowLoadable;
                        y = <Component chat={e_descriptor.chat} onBack={o("WAWebDrawerManager").closeDrawerRight}/>;
                        t[16] = e_descriptor.chat;
                        t[17] = y;
                    } else {
                        y = t[17];
                    }
                    return y;
                }
            case "group_msg_info":
                {
                    let C;
                    if (t[18] !== e_descriptor.msg) {
                        C = s.jsx(o("WAWebGroupMsgInfoFlowLoadable").GroupMsgInfoFlowLoadable, {
                            msg: e_descriptor.msg
                        });
                        t[18] = e_descriptor.msg;
                        t[19] = C;
                    } else {
                        C = t[19];
                    }
                    return C;
                }
            case "info_flow":
                {
                    const onBack = a_isNarrow || e_descriptor.showBackButton === true ? o("WAWebDrawerManager").closeDrawerRight : undefined;
                    let v;
                    if (t[20] !== e_descriptor.chat || t[21] !== e_descriptor.contactProp || t[22] !== e_descriptor.displayName || t[23] !== e_descriptor.emailInviteOrigin || t[24] !== e_descriptor.focusGroupDescriptionOnMount || t[25] !== e_descriptor.focusGroupSubjectOnMount || t[26] !== e_descriptor.focusNewsletterDescriptionOnMount || t[27] !== e_descriptor.initialGalleryTab || t[28] !== e_descriptor.initialStep || t[29] !== e_descriptor.initialSubStep || t[30] !== e_descriptor.newsletterLinkShareScreenEntryPoint || t[31] !== e_descriptor.profileEntryPoint || t[32] !== e_descriptor.scrollToParticipantList || t[33] !== e_descriptor.showFullGroupDescription || t[34] !== e_descriptor.sourceGroupChatOrNewsletter || t[35] !== e_descriptor.threadId || t[36] !== onBack) {
                        const Component = o("WAWebInfoFlowLoadable").InfoFlowLoadable;
                        v = <Component chat={e_descriptor.chat} initialStep={e_descriptor.initialStep} initialSubStep={e_descriptor.initialSubStep} emailInviteOrigin={e_descriptor.emailInviteOrigin} initialGalleryTab={e_descriptor.initialGalleryTab} showFullGroupDescription={e_descriptor.showFullGroupDescription} scrollToParticipantList={e_descriptor.scrollToParticipantList} profileEntryPoint={e_descriptor.profileEntryPoint} sourceGroupChatOrNewsletter={e_descriptor.sourceGroupChatOrNewsletter} focusNewsletterDescriptionOnMount={e_descriptor.focusNewsletterDescriptionOnMount} focusGroupSubjectOnMount={e_descriptor.focusGroupSubjectOnMount} focusGroupDescriptionOnMount={e_descriptor.focusGroupDescriptionOnMount} newsletterLinkShareScreenEntryPoint={e_descriptor.newsletterLinkShareScreenEntryPoint} threadId={e_descriptor.threadId} contactProp={e_descriptor.contactProp} displayName={e_descriptor.displayName} onBack={onBack} onEnd={o("WAWebDrawerManager").closeDrawerRight}/>;
                        t[20] = e_descriptor.chat;
                        t[21] = e_descriptor.contactProp;
                        t[22] = e_descriptor.displayName;
                        t[23] = e_descriptor.emailInviteOrigin;
                        t[24] = e_descriptor.focusGroupDescriptionOnMount;
                        t[25] = e_descriptor.focusGroupSubjectOnMount;
                        t[26] = e_descriptor.focusNewsletterDescriptionOnMount;
                        t[27] = e_descriptor.initialGalleryTab;
                        t[28] = e_descriptor.initialStep;
                        t[29] = e_descriptor.initialSubStep;
                        t[30] = e_descriptor.newsletterLinkShareScreenEntryPoint;
                        t[31] = e_descriptor.profileEntryPoint;
                        t[32] = e_descriptor.scrollToParticipantList;
                        t[33] = e_descriptor.showFullGroupDescription;
                        t[34] = e_descriptor.sourceGroupChatOrNewsletter;
                        t[35] = e_descriptor.threadId;
                        t[36] = onBack;
                        t[37] = v;
                    } else {
                        v = t[37];
                    }
                    return v;
                }
            case "mid_drawer_empty_state":
                {
                    let S;
                    if (t[38] !== e_descriptor.navBarItem) {
                        S = s.jsx(o("WAWebMidDrawerEmptyStateLoadable").MidDrawerEmptyStateLoadable, {
                            type: e_descriptor.navBarItem
                        });
                        t[38] = e_descriptor.navBarItem;
                        t[39] = S;
                    } else {
                        S = t[39];
                    }
                    return S;
                }
            case "new_chat":
                {
                    let R;
                    if (t[40] !== e_descriptor.initialStep) {
                        const Component = o("WAWebNewChatFlowLoadable").NewChatFlowLoadable;
                        R = <Component initialStep={e_descriptor.initialStep} onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>;
                        t[40] = e_descriptor.initialStep;
                        t[41] = R;
                    } else {
                        R = t[41];
                    }
                    return R;
                }
            case "new_group":
                {
                    let L;
                    if (t[42] !== e_descriptor.isSubFlow) {
                        const Component = o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable;
                        L = <Component isSubFlow={e_descriptor.isSubFlow} onEnd={o("WAWebDrawerManager").closeDrawerLeft} onCreateGroup={onCreateGroup}/>;
                        t[42] = e_descriptor.isSubFlow;
                        t[43] = L;
                    } else {
                        L = t[43];
                    }
                    return L;
                }
            case "newsletter_tab":
                {
                    let E;
                    if (t[44] === Symbol.for("react.memo_cache_sentinel")) {
                        E = s.jsx(o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable, {});
                        t[44] = E;
                    } else {
                        E = t[44];
                    }
                    return E;
                }
            case "notifications":
                {
                    let k;
                    if (t[45] === Symbol.for("react.memo_cache_sentinel")) {
                        const Component = o("WAWebNotificationsFlowLoadable").NotificationsFlowLoadable;
                        k = <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>;
                        t[45] = k;
                    } else {
                        k = t[45];
                    }
                    return k;
                }
            case "profile":
                {
                    let I;
                    if (t[46] === Symbol.for("react.memo_cache_sentinel")) {
                        const Component = o("WAWebMeTabFlowLoadable").MeTabFlowLoadable;
                        I = <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>;
                        t[46] = I;
                    } else {
                        I = t[46];
                    }
                    return I;
                }
            case "settings":
                {
                    let T;
                    if (t[47] !== e_descriptor.initialStep) {
                        const Component = o("WAWebSettingsFlowLoadable").SettingsFlowLoadable;
                        T = <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft} initialStep={e_descriptor.initialStep}/>;
                        t[47] = e_descriptor.initialStep;
                        t[48] = T;
                    } else {
                        T = t[48];
                    }
                    return T;
                }
            case "status":
                {
                    let D;
                    if (t[49] === Symbol.for("react.memo_cache_sentinel")) {
                        const Component = o("WAWebStatusDrawerFlowLoadable").StatusDrawerFlowLoadable;
                        D = <Component onBack={o("WAWebDrawerManager").closeDrawerLeft}/>;
                        t[49] = D;
                    } else {
                        D = t[49];
                    }
                    return D;
                }
            case "verification":
                {
                    let x;
                    if (t[50] !== e_descriptor.contact || t[51] !== e_descriptor.isFirstLevel || t[52] !== e_descriptor.lid) {
                        x = s.jsx(r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
                            lid: e_descriptor.lid,
                            contact: e_descriptor.contact,
                            isFirstLevel: e_descriptor.isFirstLevel
                        });
                        t[50] = e_descriptor.contact;
                        t[51] = e_descriptor.isFirstLevel;
                        t[52] = e_descriptor.lid;
                        t[53] = x;
                    } else {
                        x = t[53];
                    }
                    return x;
                }
            default:
                return null;
        }
    }
    function onCreateGroup(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield e;
                if (t != null) {
                    o("WAWebDrawerManager").closeDrawerLeft();
                }
            } catch (e) {}
        });
        return m.apply(this, arguments);
    }
    l.default = c;
}, 98);