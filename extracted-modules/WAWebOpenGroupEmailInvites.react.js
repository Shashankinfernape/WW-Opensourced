__d("WAWebOpenGroupEmailInvites.react", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebDrawerManager",
    "WAWebEmailInviteGating",
    "WAWebEmailInviteLoggingUtils",
    "WAWebGroupInviteUtils.react",
    "WAWebGroupInviteViaEmailModalLoadable.react",
    "WAWebGroupMetadataGetters",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e, t, n = "context_card") {
        const r = t.participants.iAmAdmin();
        if (o("WAWebEmailInviteGating").isInviteByEmailEnabled({
            iAmAdmin: r,
            iAmMember: t.participants.iAmMember(),
            isInviteLinkRestricted: o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(t),
            isSupportGroup: t.support,
            memberLinkMode: t.memberLinkMode
        })) {
            const a = n === "context_card" ? "context_card_email" : n === "invite_link" ? "invite_link_email" : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
            })();
            o("WAWebEmailInviteLoggingUtils").logEmailInviteEntryPointClick({
                origin: a
            });
            if (o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(e)) {
                o("WAWebGroupInviteUtils.react").openGrowthLockedModal(r, true, t.memberLinkMode);
                return;
            }
            if (o("WAWebGroupMetadataGetters").getIsUnnamed(t)) {
                o("WAWebCmd").Cmd.chatInfoDrawer(e, {
                    focusGroupSubjectOnMount: true
                });
                return;
            }
            if (o("WAWebEmailInviteGating").isEmailInviteServerSendEnabled()) {
                const initialStep = n === "context_card" ? o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo : n === "invite_link" ? o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink : (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
                })();
                const Component = o("WAWebInfoFlowLoadable").InfoFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "info_flow",
                    chat: e,
                    initialStep,
                    initialSubStep: o("WAWebInfoFlowStep").InfoFlowStep.GroupEmailInvites,
                    emailInviteOrigin: a
                } : <Component chat={e} initialStep={initialStep} initialSubStep={o("WAWebInfoFlowStep").InfoFlowStep.GroupEmailInvites} emailInviteOrigin={a} onEnd={o("WAWebDrawerManager").closeDrawerRight}/>);
                return;
            }
            const Component = o("WAWebGroupInviteViaEmailModalLoadable.react").WAWebGroupInviteViaEmailModalLoadable;
            o("WAWebModalManager").ModalManager.open(<Component chat={e} groupMetadata={t} onClose={o("WAWebModalManager").closeModalManager} origin={a}/>, {
                transition: "modal-flow"
            });
        }
    }
    l.openGroupEmailInvites = u;
}, 98);