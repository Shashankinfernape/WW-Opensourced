__d("WAWebSubgroupSwitcherButton.react", [
    "fbt",
    "WAWebCommunityFeatureUsageWamEvent",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebCommunitySubgroupSwitcher.react",
    "WAWebModalManager",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebTabOrder",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumCommunityFeatureUiActionTakenType",
    "WAWebWamEnumCommunityUiFeatureType",
    "WAWebWamEnumSurfaceType",
    "WDSButton.react",
    "WDSProfilePhoto.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebDefaultProfileColors",
    "useWAWebProfilePicThumbValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function C2(e) {
        const t = o("react-compiler-runtime").c(12);
        const { name, parentGroupId } = e;
        let i;
        if (t[0] !== parentGroupId) {
            i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(parentGroupId);
            t[0] = parentGroupId;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let s;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                o("WAWebProfilePicThumbGetters").getImg
            ];
            t[2] = s;
        } else {
            s = t[2];
        }
        const c = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(l.id, s);
        const d = c[0];
        let m;
        if (t[3] !== parentGroupId) {
            m = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(parentGroupId);
            t[3] = parentGroupId;
            t[4] = m;
        } else {
            m = t[4];
        }
        let placeholderIcon;
        if (t[5] !== parentGroupId) {
            placeholderIcon = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(parentGroupId);
            t[5] = parentGroupId;
            t[6] = placeholderIcon;
        } else {
            placeholderIcon = t[6];
        }
        let _;
        if (t[7] !== name || t[8] !== d || t[9] !== m || t[10] !== placeholderIcon) {
            _ = u.jsx(r("WDSProfilePhoto.react"), {
                type: "community",
                size: "xxSmall",
                name,
                src: d,
                color: m,
                placeholderIcon,
                isDecorative: true
            });
            t[7] = name;
            t[8] = d;
            t[9] = m;
            t[10] = placeholderIcon;
            t[11] = _;
        } else {
            _ = t[11];
        }
        return _;
    }
    function d(e) {
        const n = o("react-compiler-runtime").c(9);
        const e_chat = e.chat;
        const parentGroupId = e_chat.groupMetadata?.parentGroup;
        if (parentGroupId == null) {
            return null;
        }
        let l;
        if (n[0] !== e_chat || n[1] !== parentGroupId) {
            l = function(t) {
                t?.stopPropagation();
                new (o("WAWebCommunityFeatureUsageWamEvent")).CommunityFeatureUsageWamEvent({
                    communityId: parentGroupId.toString(),
                    communityUiAction: o("WAWebWamEnumCommunityFeatureUiActionTakenType").COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.ENTRY,
                    communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType").COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
                }).commit();
                new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
                    action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SUBGROUP_SWITCHER_CLICK,
                    surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                    chat: e_chat
                }).commit();
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebCommunitySubgroupSwitcher.react"), {
                    chat: e_chat
                }));
            };
            n[0] = e_chat;
            n[1] = parentGroupId;
            n[2] = l;
        } else {
            l = n[2];
        }
        const d = l;
        let m;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Subgroup switcher");
            n[3] = m;
        } else {
            m = n[3];
        }
        const p = m;
        let profilePhoto;
        if (n[4] !== parentGroupId) {
            profilePhoto = <C2 name={p} parentGroupId={parentGroupId}/>;
            n[4] = parentGroupId;
            n[5] = profilePhoto;
        } else {
            profilePhoto = n[5];
        }
        let f;
        if (n[6] !== d || n[7] !== profilePhoto) {
            const Component = r("WDSButton.react");
            const Component_1 = r("WDSTooltip.react");
            f = <Component_1 label={p}><Component variant="borderless" size="medium" tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} profilePhoto={profilePhoto} showEndDropdownIcon onPress={d} aria-label={p} testid="subgroup-switcher-button"/></Component_1>;
            n[6] = d;
            n[7] = profilePhoto;
            n[8] = f;
        } else {
            f = n[8];
        }
        return f;
    }
    l.default = d;
}, 226);