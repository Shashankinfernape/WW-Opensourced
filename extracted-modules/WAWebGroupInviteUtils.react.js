__d("WAWebGroupInviteUtils.react", [
    "fbt",
    "WAWebCxtUrl",
    "WAWebExternalLink.react",
    "WAWebGroupInviteLockModal.react",
    "WAWebGroupMemberLinkMode",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const onLearnMoreClicked = function() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebCxtUrl").getGroupInviteGrowthLockedFaqUrl());
    };
    function d() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Invite link unavailable");
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebGroupInviteLockModal.react");
            n = <Component title={t} onLearnMoreClicked={onLearnMoreClicked} onOkClicked={o("WAWebModalManager").closeModalManager}>{s._("You can't join this group because the invite link is unavailable.")}</Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function m(e, t = true, n = o("WAWebGroupMemberLinkMode").MemberLinkMode.ADMIN_LINK) {
        if (!e && n !== o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK) {
            const a = s._("You can't view this group's invite link because you're not an admin.");
            o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                msg: a
            }));
            return;
        }
        const i = t ? s._("Invite via link unavailable") : s._("Invite via link was unavailable");
        const l = t ? s._("Invite via link is temporarily unavailable for this group.") : s._("Invite via link was temporarily unavailable for this group.");
        const Component = r("WAWebGroupInviteLockModal.react");
        o("WAWebModalManager").ModalManager.open(<Component title={i} onLearnMoreClicked={onLearnMoreClicked} onOkClicked={o("WAWebModalManager").closeModalManager}>{l}</Component>, {
            transition: "modal-flow"
        });
    }
    l.GrowthLockedModal = d;
    l.openGrowthLockedModal = m;
}, 226);