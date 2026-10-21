__d("WAWebCommunitySubgroupSwitcher.react", [
    "fbt",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatComparatorCommunity",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCommunityFeatureUsageWamEvent",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySubgroupsMaxReached",
    "WAWebComposeBoxActions",
    "WAWebDrawerButton.react",
    "WAWebEmojiText.react",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebGroupsModal.react",
    "WAWebModalManager",
    "WAWebRoundShape.react",
    "WAWebWamEnumCommunityFeatureUiActionTakenType",
    "WAWebWamEnumCommunityUiFeatureType",
    "WDSIconIcChevronRight.react",
    "WDSIconIcGroupAddFilled.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebEventTargetValue",
    "useWAWebGroupMetadataValues",
    "useWAWebHandleNewGroupCreated"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        surface: "community-subgroup-switcher"
    };
    const m = {
        row: {
            minHeight: "x1qafhyn",
            $$css: true
        },
        rowRefreshed: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "xe2zdcy",
            $$css: true
        },
        verticalCenter: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            $$css: true
        }
    };
    function p(t) {
        const a = o("react-compiler-runtime").c(38);
        const { chat, parentChat } = t;
        let u;
        if (a[0] !== chat?.groupMetadata || a[1] !== parentChat) {
            u = parentChat ?? chat?.groupMetadata?.getParentGroupChat();
            a[0] = chat?.groupMetadata;
            a[1] = parentChat;
            a[2] = u;
        } else {
            u = a[2];
        }
        const f = u;
        const g = f?.groupMetadata;
        const h = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(g?.id, [
            o("WAWebFrontendGroupMetadataGetters").getJoinedSubgroups
        ]) ?? [];
        const y = h[0];
        let C;
        if (a[3] !== y) {
            C = y === undefined ? [] : y;
            a[3] = y;
            a[4] = C;
        } else {
            C = a[4];
        }
        const b = C;
        let v;
        if (a[5] !== b) {
            v = b.map(_).sort(r("WAWebChatComparatorCommunity"));
            a[5] = b;
            a[6] = v;
        } else {
            v = a[6];
        }
        const S = v;
        let R;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            R = [
                "change:allowNonAdminSubGroupCreation"
            ];
            a[7] = R;
        } else {
            R = a[7];
        }
        let L;
        if (a[8] !== f) {
            L = function() {
                return o("WAWebChatCommunityUtils").canAddGroupToCommunity(f);
            };
            a[8] = f;
            a[9] = L;
        } else {
            L = a[9];
        }
        const E = r("useWAWebEventTargetValue")(f?.groupMetadata, R, L);
        let k;
        if (a[10] !== f?.id.user) {
            k = function(t) {
                new (o("WAWebCommunityFeatureUsageWamEvent")).CommunityFeatureUsageWamEvent({
                    communityId: f?.id.user,
                    communityUiAction: o("WAWebWamEnumCommunityFeatureUiActionTakenType").COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.GROUP_NAV,
                    communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType").COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
                }).commit();
                o("WAWebCmd").Cmd.openChatFromUnread({
                    chat: t,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunitySubgroupSwitcher
                }).then((e)=>{
                    if (e) {
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
                    }
                });
                o("WAWebModalManager").ModalManager.close();
            };
            a[10] = f?.id.user;
            a[11] = k;
        } else {
            k = a[11];
        }
        const onGroup = k;
        let T;
        if (a[12] !== f) {
            T = function() {
                if (f != null && f.id) {
                    new (o("WAWebCommunityFeatureUsageWamEvent")).CommunityFeatureUsageWamEvent({
                        communityId: f?.id.user,
                        communityUiAction: o("WAWebWamEnumCommunityFeatureUiActionTakenType").COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.COMMUNITY_NAV,
                        communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType").COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
                    }).commit();
                    o("WAWebCmd").Cmd.openCommunityHome(f.id);
                    o("WAWebModalManager").ModalManager.close();
                }
            };
            a[12] = f;
            a[13] = T;
        } else {
            T = a[13];
        }
        const D = T;
        let x;
        if (a[14] === Symbol.for("react.memo_cache_sentinel")) {
            x = s._("View community");
            a[14] = x;
        } else {
            x = a[14];
        }
        const $ = x;
        let P;
        if (a[15] === Symbol.for("react.memo_cache_sentinel")) {
            P = (e || (e = r("stylex")))([
                m.row,
                m.rowRefreshed
            ]);
            a[15] = P;
        } else {
            P = a[15];
        }
        const N = P;
        let M;
        if (a[16] === Symbol.for("react.memo_cache_sentinel")) {
            M = <div className="x78zum5 x6s0dn4 xl56j7k xhslqc4 x15jighw x112a4uq">{c.jsx(r("WDSIconIcChevronRight.react"), {
                directional: true,
                height: 30,
                width: 30
            })}</div>;
            a[16] = M;
        } else {
            M = a[16];
        }
        let w;
        if (a[17] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            w = <Component type="Body1" colorName="accent" testid="community-switcher-view-community-text">{$}</Component>;
            a[17] = w;
        } else {
            w = a[17];
        }
        let A;
        if (a[18] !== D) {
            const Component = o("WAWebDrawerButton.react").DrawerButtonSimple;
            A = <Component testid="view-community-row" className={N} ariaLabel={$} icon={M} onClick={D}>{w}</Component>;
            a[18] = D;
            a[19] = A;
        } else {
            A = a[19];
        }
        const lastRow = A;
        const O = r("useWAWebHandleNewGroupCreated")();
        let B;
        if (a[20] !== chat?.groupMetadata || a[21] !== chat?.id || a[22] !== O || a[23] !== f || a[24] !== g) {
            B = function() {
                if (f?.id && (new (o("WAWebCommunityFeatureUsageWamEvent")).CommunityFeatureUsageWamEvent({
                    communityId: f?.id.user,
                    communityUiAction: o("WAWebWamEnumCommunityFeatureUiActionTakenType").COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.GROUP_ADD,
                    communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType").COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
                }).commit(), o("WAWebModalManager").ModalManager.close(), !o("WAWebCommunitySubgroupsMaxReached").subgroupsMaxReached(g))) {
                    if (g != null && g.participants.iAmAdmin() || o("WAWebCommunityGatingUtils").memberSuggestedGroupsM3SenderEnabled()) {
                        o("WAWebCmd").Cmd.openCommunityHomeManageGroups(f.id);
                    } else {
                        const e = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat?.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || chat == null ? undefined : chat.id;
                        o("WAWebCmd").Cmd.communityAddNewGroup(f.id, O, e);
                    }
                }
            };
            a[20] = chat?.groupMetadata;
            a[21] = chat?.id;
            a[22] = O;
            a[23] = f;
            a[24] = g;
            a[25] = B;
        } else {
            B = a[25];
        }
        const W = B;
        let q;
        if (a[26] === Symbol.for("react.memo_cache_sentinel")) {
            q = s._("Add group");
            a[26] = q;
        } else {
            q = a[26];
        }
        const U = q;
        let V;
        if (a[27] !== W || a[28] !== E) {
            const Component = r("WAWebRoundShape.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebDrawerButton.react").DrawerButtonSimple;
            V = E ? <Component_2 testid="add-group-row" className={N} ariaLabel={U} icon=<Component theme="group-modal">{c.jsx(r("WDSIconIcGroupAddFilled.react"), {
                height: 28
            })}</Component> onClick={W}><Component_1 type="Body1" colorName="contentDefault" testid="community-switcher-add-group-text">{U}</Component_1></Component_2> : null;
            a[27] = W;
            a[28] = E;
            a[29] = V;
        } else {
            V = a[29];
        }
        const firstRow = V;
        const G = f?.contact.name;
        let z;
        if (a[30] !== G) {
            z = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: G,
                xstyle: m.verticalCenter,
                preserveWhitespace: true
            });
            a[30] = G;
            a[31] = z;
        } else {
            z = a[31];
        }
        let j;
        if (a[32] !== firstRow || a[33] !== onGroup || a[34] !== S || a[35] !== z || a[36] !== lastRow) {
            const Component = r("WAWebGroupsModal.react");
            j = <Component chats={S} onGroup={onGroup} onCancel={o("WAWebModalManager").closeModalManager} mode={o("WAWebChat.react").Mode.LAST} title={z} firstRow={firstRow} lastRow={lastRow} tsNavigationData={d} hideSearchBar showSpeakerForCag rotateList type="subgroup_switcher"/>;
            a[32] = firstRow;
            a[33] = onGroup;
            a[34] = S;
            a[35] = z;
            a[36] = lastRow;
            a[37] = j;
        } else {
            j = a[37];
        }
        return j;
    }
    function _(e) {
        return o("WAWebChatCollection").ChatCollection.assertGet(e);
    }
    l.default = p;
}, 226);