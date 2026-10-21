__d("useWAWebCommunityNux", [
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCommunityPopupNux.react",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebOpenCommunityAdminPromotionNotificationPopupAction",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebNux"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useEffect } = u;
    function m(e) {
        const n = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e?.groupMetadata);
        const a = r("useWAWebNux")(o("WAWebNux").NUX.COMMUNITY_HOME);
        const i = a[0];
        const l = a[1];
        const u = r("useWAWebEventTargetValue")(o("WAWebChatCollection").ChatCollection, [
            "add"
        ], function() {
            if (n === o("WAWebGroupType").GroupType.COMMUNITY) {
                return e;
            }
            return e?.groupMetadata?.getParentGroupChat();
        });
        const m = r("useWAWebEventTargetValue")(u?.groupMetadata?.participants, [
            "bulk_add"
        ], function() {
            let e;
            return !!(!(u == null || (e = u.groupMetadata) == null) && e.participants.iAmAdmin());
        });
        const p = useCallback(function() {
            let t;
            if (!i || m) {
                if (o("WAWebOpenCommunityAdminPromotionNotificationPopupAction").shouldOpenCommunityAdminPromotionNotificationPopup(e)) {
                    o("WAWebOpenCommunityAdminPromotionNotificationPopupAction").openCommunityAdminPromotionNotificationPopup(e);
                }
                return;
            }
            const Component = r("WAWebCommunityPopupNux.react");
            if (e != null && o("WAWebChatGetters").getIsGroup(e)) {
                if (!(n == null || n === o("WAWebGroupType").GroupType.DEFAULT || n !== o("WAWebGroupType").GroupType.COMMUNITY && !((t = e.groupMetadata) != null && t.participants.iAmMember()))) {
                    if (u != null) {
                        o("WAWebModalManager").ModalManager.open(<Component parentChat={u} onClose={function() {
                            l();
                        }}/>);
                    }
                }
            }
        }, [
            m
        ]);
        useEffect(function() {
            p();
        }, [
            p
        ]);
    }
    l.default = m;
}, 98);