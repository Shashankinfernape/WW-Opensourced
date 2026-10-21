__d("WAWebSuspendedCommunityUtils", [
    "fbt",
    "WAWebChatCollection",
    "WAWebConfirmPopup.react",
    "WAWebCxtUrl",
    "WAWebExternalLink.react",
    "WAWebGroupAppealInReviewModalLoadable",
    "WAWebGroupAppealRejectedModalLoadable",
    "WAWebModalManager",
    "WAWebSuspendedCommunityModalLoadable",
    "WAWebSuspendedGroupRedesignModalLoadable",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = "community-suspend-appeal";
    function d() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
            surface: "unknown",
            viewName: "suspended-community"
        }} onOK={o("WAWebModalManager").closeModalManager} onCancel={function() {
            o("WAWebModalManager").ModalManager.close();
            o("WAWebExternalLink.react").openExternalLink(o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl());
        }} okText={s._("Dismiss")} cancelText={s._("Learn more")} title={s._("This community is no longer available.")}/>, {
            transition: "modal-flow"
        });
    }
    function m(e) {
        const n = e.groupMetadata?.parentGroup;
        if (n != null) {
            const community = o("WAWebChatCollection").ChatCollection.get(n);
            if (community != null) {
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSuspendedCommunityModalLoadable").SuspendedCommunityModalLoadable, {
                    community
                }), {
                    transition: "modal-flow"
                });
            }
        }
    }
    function p(e) {
        const n = e.groupMetadata?.parentGroup;
        if (n != null) {
            const r = o("WAWebChatCollection").ChatCollection.get(n);
            if (r != null) {
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSuspendedGroupRedesignModalLoadable").SuspendedGroupRedesignModalLoadable, {
                    chat: r,
                    isCommunity: true
                }), {
                    transition: "modal-flow"
                });
            }
        }
    }
    function _(e) {
        const a = e.groupMetadata?.parentGroup;
        const i = a != null ? o("WAWebChatCollection").ChatCollection.get(a) : null;
        const l = i?.groupMetadata?.participants.iAmAdmin() === true;
        if (!l || i == null) {
            p(e);
            return;
        }
        const s = i?.groupMetadata?.suspendAppealStatus;
        e: {
            if (s === "IN_REVIEW") {
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebGroupAppealInReviewModalLoadable").GroupAppealInReviewModalLoadable, {
                    chat: i
                }), {
                    transition: "modal-flow"
                });
                break e;
            }
            if (s === "REJECTED") {
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebGroupAppealRejectedModalLoadable").GroupAppealRejectedModalLoadable, {
                    chat: i
                }), {
                    transition: "modal-flow"
                });
                break e;
            }
            {
                p(e);
                break e;
            }
        }
    }
    l.SUSPENDED_COMMUNITY_SUPPORT_TAG = c;
    l.openTerminatedCommunityModal = d;
    l.openSuspendedCommunityModal = m;
    l.openSuspendedCommunityRedesignModal = p;
    l.openSuspendedCommunityModalByAppealStatus = _;
}, 226);