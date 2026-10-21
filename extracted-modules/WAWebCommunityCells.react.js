__d("WAWebCommunityCells.react", [
    "fbt",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebCellFrame.react",
    "WAWebChat.react",
    "WAWebChatCell.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatGetters",
    "WAWebChatIcons.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatTimestamp.react",
    "WAWebChatstateInfo.react",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityGetActivityCellText",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebDefaultAddProfilePicture.react",
    "WAWebDeleteChatDialogV2.react",
    "WAWebDeleteChatPopup.react",
    "WAWebDetailImage.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebRoundShape.react",
    "WAWebShapeIcon.react",
    "WAWebSquircleIcon.react",
    "WAWebSubgroupsNuxIcon.react",
    "WAWebTabOrder",
    "WAWebThemeContext",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "WDSDialogBridge",
    "WDSFocusStateStyles",
    "WDSIconIcAdd.react",
    "WDSIconIcClose.react",
    "WDSIconIcDelete.react",
    "WDSIconIcGroupAdd.react",
    "WDSIconIcNotifications.react",
    "WDSIconWdsIcCommunitiesFilled.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "sumBy",
    "useMergeRefs",
    "useWAWebActiveSelection",
    "useWAWebChatValues",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "chat",
        "inChatList",
        "inCommandPalette",
        "inTabDrawer",
        "isNew",
        "onClick",
        "parentGroupChat",
        "parentGroupMetadata"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useContext, useState } = m;
    const f = {
        communityTitle: {
            fontWeight: "xk50ysn",
            $$css: true
        },
        viewAll: {
            paddingInlineStart: "x1rgrh6f",
            color: "xo1mcw5",
            fontWeight: "x1iikomf",
            height: "xzoqdy8",
            $$css: true
        },
        dangerText: {
            color: "x30a034",
            $$css: true
        },
        newCommunityCell: {
            paddingInlineEnd: "x1ccui7m",
            marginTop: "x1y332i5",
            $$css: true
        },
        btnRemove: {
            color: "xhslqc4",
            verticalAlign: "x16dsc37",
            cursor: "x1ypdohk",
            $$css: true
        },
        subgroupSuggestionsIconContainer: {
            backgroundColor: "xg8q4mo",
            $$css: true
        },
        subgroupSuggestionsIcon: {
            color: "xh42h1r",
            $$css: true
        },
        secondaryColor: {
            color: "xhslqc4",
            $$css: true
        },
        marginVert8: {
            marginTop: "x1380le5",
            marginBottom: "xefnzgg",
            $$css: true
        }
    };
    function g(e) {
        return {
            enter: e,
            space: e
        };
    }
    function h(e, t) {
        if (e.target === e.currentTarget) {
            t(e);
        }
    }
    function y(t) {
        const { chat, inChatList } = t;
        const i = inChatList === undefined ? false : inChatList;
        const t_inCommandPalette = t.inCommandPalette;
        const u = t_inCommandPalette === undefined ? false : t_inCommandPalette;
        const { inTabDrawer, isNew } = t;
        const y = isNew === undefined ? false : isNew;
        const { onClick, parentGroupChat, parentGroupMetadata } = t;
        const S = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const R = useState(null);
        const L = R[0];
        const E = R[1];
        const k = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(parentGroupChat);
        const I = useContext(o("WAWebThemeContext").ThemeContext);
        const I_theme = I.theme;
        const D = I_theme === "dark";
        const x = o("useWAWebChatValues").useChatValues(parentGroupChat.id, [
            o("WAWebFrontendChatGetters").getFormattedTitle
        ]);
        const $ = x[0];
        const P = inTabDrawer === true ? `community-header-${parentGroupChat.id.toString()}` : parentGroupChat.id.toString();
        const N = s._("Community: {community-name}", [
            s._param("community-name", $)
        ]);
        const M = r("useWAWebActiveSelection")(S.active, P);
        const w = M[0];
        const A = M[1];
        const F = ()=>{
            const e = [];
            if (k) {
                const onDeleteOrExit = function(t) {
                    parentGroupChat.pendingAction++;
                    t.finally(()=>{
                        parentGroupChat.pendingAction--;
                    });
                };
                const NComponent = function() {
                    if (o("WAWebABProps").getABPropConfigValue("wds_web_dialog")) {
                        const Component = r("WAWebDeleteChatDialogV2.react");
                        o("WDSDialogBridge").openWDSDialog(<Component chat={parentGroupChat} onDeleteOrExit={onDeleteOrExit}/>);
                    } else {
                        const Component = r("WAWebDeleteChatPopup.react");
                        o("WAWebModalManager").ModalManager.open(<Component chat={parentGroupChat} onDeleteOrExit={onDeleteOrExit}/>, {
                            transition: "modal-flow"
                        });
                    }
                };
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                e.push(<Component key="DeleteCommunityDropdownItem" action={NComponent} icon={d.jsx(r("WDSIconIcDelete.react"), {})} testid="mi-delete-community" xstyle={f.dangerText}>{s._("Delete community")}</Component>);
            }
            return e;
        };
        const O = function() {
            E(null);
        };
        const onContext = function(t) {
            if (L) {
                E(null);
                return;
            }
            const menu = F();
            E({
                menu,
                event: t.event,
                anchor: t.anchor
            });
        };
        let W;
        if (L) {
            const Component = o("WAWebUimUie.react").UIE;
            W = <Component dismissOnWindowResize displayName="CommunityContextMenu" escapable popable requestDismiss={O}>{d.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: L
            })}</Component>;
        }
        const q = parentGroupMetadata.getJoinedSubgroupsChat();
        const unreadCount = r("useWAWebEventTargetValue")(q, "change:unreadCount", function() {
            return r("sumBy")(q, function(e) {
                return Math.max(e.unreadCount, 0);
            });
        });
        let V;
        if (i && chat != null) {
            V = d.jsx(r("WAWebChatTimestamp.react"), {
                chat
            });
        }
        let H;
        if (y) {
            H = s._("New");
        } else if (k) {
            H = s._("This community is no longer available.");
        } else if (i && chat != null) {
            H = d.jsx(r("WAWebChatstateInfo.react"), {
                chat,
                fromCommunity: true
            });
        }
        let G;
        if (i && chat != null) {
            G = d.jsx(o("WAWebChatIcons.react").Icons, {
                chat,
                hideArchivedIcon: false,
                hideMuteIcon: false,
                mute: chat.mute,
                unreadCount,
                unreadMentionIcon: false
            });
        }
        if (parentGroupChat == null) {
            return null;
        }
        let z;
        if (!u && !i) {
            z = y ? "community-tab-home-new" : "community-tab-home";
        }
        const j = !u && !i ? ({
            0: "xsu8g44",
            1: "xko0x3n"
        })[!!D << 0] : "";
        const unreadStyle = i && chat != null && o("WAWebChatGetters").getHasUnread(chat);
        const Component = r("WAWebChatCell.react");
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_1 aria-label={N.toString()} data-testid="community-tab-community-cell" handlers={g(onClick)} onClick={function(t) {
            return h(t, onClick);
        }} ref={w} role="button"><Component active={A} activeStyleType="BORDER" className={j} contextEnabled={function() {
            return k;
        }} image={d.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: parentGroupMetadata.id,
            shape: o("WAWebDetailImage.react").DetailImageShape.Squircle
        })} onClick={onClick} onContext={onContext} primary={d.jsx(o("WAWebEmojiText.react").EmojiText, {
            ellipsify: true,
            text: $,
            xstyle: f.communityTitle
        })} primaryDetail={V} secondary={H} secondaryDetail={G} theme={z} unreadStyle={unreadStyle}/>{W}</Component_1>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C(e) {
        const t = o("react-compiler-runtime").c(13);
        const { Icon, iconHeight, onClick, testid, title } = e;
        const u = iconHeight === undefined ? 24 : iconHeight;
        let c;
        if (t[0] !== title) {
            c = s._("{menu-title}", [
                s._param("menu-title", title)
            ]);
            t[0] = title;
            t[1] = c;
        } else {
            c = t[1];
        }
        const m = c;
        let p;
        if (t[2] !== m) {
            p = m.toString();
            t[2] = m;
            t[3] = p;
        } else {
            p = t[3];
        }
        let _;
        if (t[4] !== Icon || t[5] !== u) {
            _ = <Icon iconXstyle={f.secondaryColor} height={u} width={u}/>;
            t[4] = Icon;
            t[5] = u;
            t[6] = _;
        } else {
            _ = t[6];
        }
        let g;
        if (t[7] !== onClick || t[8] !== p || t[9] !== _ || t[10] !== testid || t[11] !== title) {
            const Component = o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow;
            g = <Component ariaLabel={p} testid={testid} side="chevron" icon={_} onClick={onClick} spaced title={title}/>;
            t[7] = onClick;
            t[8] = p;
            t[9] = _;
            t[10] = testid;
            t[11] = title;
            t[12] = g;
        } else {
            g = t[12];
        }
        return g;
    }
    function b(e) {
        const t = o("react-compiler-runtime").c(26);
        const { active, onClick, subgroup } = e;
        let l;
        if (t[0] !== subgroup.id) {
            l = subgroup.id.toString();
            t[0] = subgroup.id;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = r("useWAWebActiveSelection")(active, `community-subgroup-${l}`);
        const c = u[0];
        const m = u[1];
        let p;
        if (t[2] !== onClick || t[3] !== subgroup) {
            p = function(t) {
                t.preventDefault();
                o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType.TAB_GROUP_NAVIGATIONS);
                new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
                    action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
                    surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_TAB,
                    chat: subgroup
                }).commit();
                onClick();
            };
            t[2] = onClick;
            t[3] = subgroup;
            t[4] = p;
        } else {
            p = t[4];
        }
        const _ = p;
        let f;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebFrontendChatGetters").getIsCAG
            ];
            t[5] = f;
        } else {
            f = t[5];
        }
        const y = o("useWAWebChatValues").useChatValues(subgroup.id, f);
        const C = y[0];
        let b;
        if (t[6] !== C || t[7] !== subgroup.formattedTitle) {
            b = C ? s._("Announcements") : s._("{sub-group-name} subgroup", [
                s._param("sub-group-name", subgroup.formattedTitle)
            ]);
            t[6] = C;
            t[7] = subgroup.formattedTitle;
            t[8] = b;
        } else {
            b = t[8];
        }
        const v = b;
        let S;
        if (t[9] !== v) {
            S = v.toString();
            t[9] = v;
            t[10] = S;
        } else {
            S = t[10];
        }
        let R;
        if (t[11] !== _) {
            R = g(_);
            t[11] = _;
            t[12] = R;
        } else {
            R = t[12];
        }
        let L;
        if (t[13] !== _) {
            L = function(t) {
                return h(t, _);
            };
            t[13] = _;
            t[14] = L;
        } else {
            L = t[14];
        }
        let showStatusRingAroundProfilePhoto;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            showStatusRingAroundProfilePhoto = o("WAWebABProps").getABPropConfigValue("wa_web_show_status_ring_for_no_unread");
            t[15] = showStatusRingAroundProfilePhoto;
        } else {
            showStatusRingAroundProfilePhoto = t[15];
        }
        let k;
        if (t[16] !== m || t[17] !== _ || t[18] !== subgroup) {
            const Component = o("WAWebChat.react").Chat;
            k = <Component chat={subgroup} forceActive={m} activeStyleType="BORDER" hideArchivedIcon hideTertiaryRow noContext onClick={_} overrideCommunityAnnouncementGroupName showSpeakerForCag showStatusRingAroundProfilePhoto={showStatusRingAroundProfilePhoto} theme="community-tab-subgroup"/>;
            t[16] = m;
            t[17] = _;
            t[18] = subgroup;
            t[19] = k;
        } else {
            k = t[19];
        }
        let I;
        if (t[20] !== c || t[21] !== S || t[22] !== R || t[23] !== L || t[24] !== k) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            I = <Component aria-label={S} data-testid="community-tab-subgroup-cell" handlers={R} onClick={L} ref={c} role="button">{k}</Component>;
            t[20] = c;
            t[21] = S;
            t[22] = R;
            t[23] = L;
            t[24] = k;
            t[25] = I;
        } else {
            I = t[25];
        }
        return I;
    }
    function v(e) {
        const t = o("react-compiler-runtime").c(23);
        const { active, onClick, parentGroupWid } = e;
        let l;
        if (t[0] !== parentGroupWid) {
            l = parentGroupWid.toString();
            t[0] = parentGroupWid;
            t[1] = l;
        } else {
            l = t[1];
        }
        const c = r("useWAWebActiveSelection")(active, `community-view-all-${l}`);
        const m = c[0];
        const p = c[1];
        let _;
        if (t[2] !== parentGroupWid) {
            _ = o("WAWebChatCollection").ChatCollection.get(parentGroupWid.toString())?.formattedTitle;
            t[2] = parentGroupWid;
            t[3] = _;
        } else {
            _ = t[3];
        }
        const C = _;
        let b;
        if (t[4] !== C) {
            b = s._("View all subgroups in {community-name}", [
                s._param("community-name", C)
            ]);
            t[4] = C;
            t[5] = b;
        } else {
            b = t[5];
        }
        const v = b;
        let S;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            S = (u || (u = r("stylex")))(false, f.viewAll);
            t[6] = S;
        } else {
            S = t[6];
        }
        const R = S;
        let L;
        if (t[7] !== v) {
            L = v.toString();
            t[7] = v;
            t[8] = L;
        } else {
            L = t[8];
        }
        let E;
        if (t[9] !== onClick) {
            E = g(onClick);
            t[9] = onClick;
            t[10] = E;
        } else {
            E = t[10];
        }
        let k;
        if (t[11] !== onClick) {
            k = function(t) {
                return h(t, onClick);
            };
            t[11] = onClick;
            t[12] = k;
        } else {
            k = t[12];
        }
        let I;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            I = s._("View all");
            t[13] = I;
        } else {
            I = t[13];
        }
        let T;
        if (t[14] !== p || t[15] !== onClick) {
            const Component = r("WAWebChatCell.react");
            T = <Component active={p} activeStyleType="BORDER" className={R} contextEnabled={o("WAWebBoolFunc").returnFalse} onClick={onClick} primary={I} theme="view-all"/>;
            t[14] = p;
            t[15] = onClick;
            t[16] = T;
        } else {
            T = t[16];
        }
        let D;
        if (t[17] !== m || t[18] !== L || t[19] !== E || t[20] !== k || t[21] !== T) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            D = <Component aria-label={L} data-testid="community-tab-view-all-cell" handlers={E} onClick={k} ref={m} role="button">{T}</Component>;
            t[17] = m;
            t[18] = L;
            t[19] = E;
            t[20] = k;
            t[21] = T;
            t[22] = D;
        } else {
            D = t[22];
        }
        return D;
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(29);
        const { active, activities, onClick, parentGroupWid } = e;
        let u;
        if (t[0] !== parentGroupWid) {
            u = parentGroupWid.toString();
            t[0] = parentGroupWid;
            t[1] = u;
        } else {
            u = t[1];
        }
        const c = r("useWAWebActiveSelection")(active, `community-activity-${u}`);
        const m = c[0];
        const p = c[1];
        let _;
        if (t[2] !== parentGroupWid) {
            _ = o("WAWebChatCollection").ChatCollection.get(parentGroupWid.toString())?.formattedTitle;
            t[2] = parentGroupWid;
            t[3] = _;
        } else {
            _ = t[3];
        }
        const y = _;
        let C;
        if (t[4] !== activities) {
            C = o("WAWebCommunityGetActivityCellText").getActivityCellText(activities);
            t[4] = activities;
            t[5] = C;
        } else {
            C = t[5];
        }
        const b = C;
        let v;
        if (t[6] !== b || t[7] !== y) {
            v = s._("New activity in {community-name}: {community-activity}", [
                s._param("community-name", y),
                s._param("community-activity", b)
            ]);
            t[6] = b;
            t[7] = y;
            t[8] = v;
        } else {
            v = t[8];
        }
        const S = v;
        if (activities.length === 0 || b == null) {
            return null;
        }
        let R;
        if (t[9] !== S) {
            R = S.toString();
            t[9] = S;
            t[10] = R;
        } else {
            R = t[10];
        }
        let L;
        if (t[11] !== onClick) {
            L = g(onClick);
            t[11] = onClick;
            t[12] = L;
        } else {
            L = t[12];
        }
        let E;
        if (t[13] !== onClick) {
            E = function(t) {
                return h(t, onClick);
            };
            t[13] = onClick;
            t[14] = E;
        } else {
            E = t[14];
        }
        let k;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            k = d.jsx(o("WAWebShapeIcon.react").ShapeIcon, {
                Icon: r("WDSIconIcNotifications.react"),
                shape: "circle",
                size: 40,
                theme: o("WAWebShapeIcon.react").ShapeIconTheme.Accent
            });
            t[15] = k;
        } else {
            k = t[15];
        }
        let I;
        if (t[16] !== b) {
            I = d.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: b
            });
            t[16] = b;
            t[17] = I;
        } else {
            I = t[17];
        }
        let T;
        if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
            T = d.jsx(o("WAWebChatIcons.react").UnreadIndicator, {
                noMarginRight: true
            });
            t[18] = T;
        } else {
            T = t[18];
        }
        let D;
        if (t[19] !== p || t[20] !== onClick || t[21] !== I) {
            const Component = r("WAWebChatCell.react");
            D = <Component active={p} activeStyleType="BORDER" contextEnabled={o("WAWebBoolFunc").returnFalse} image={k} onClick={onClick} secondary={I} secondaryDetail={T} theme="community-tab-activity-cell"/>;
            t[19] = p;
            t[20] = onClick;
            t[21] = I;
            t[22] = D;
        } else {
            D = t[22];
        }
        let x;
        if (t[23] !== m || t[24] !== D || t[25] !== R || t[26] !== L || t[27] !== E) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            x = <Component aria-label={R} data-testid="community-activity-cell" handlers={L} onClick={E} ref={m} role="button">{D}</Component>;
            t[23] = m;
            t[24] = D;
            t[25] = R;
            t[26] = L;
            t[27] = E;
            t[28] = x;
        } else {
            x = t[28];
        }
        return x;
    }
    function R(e) {
        const t = o("react-compiler-runtime").c(16);
        const { active, onNewCommunity } = e;
        const i = r("useWAWebActiveSelection")(active, "new-community-btn");
        const l = i[0];
        const c = i[1];
        let m;
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Create new community");
            p = (u || (u = r("stylex")))(f.newCommunityCell, false);
            t[0] = m;
            t[1] = p;
        } else {
            m = t[0];
            p = t[1];
        }
        let _;
        if (t[2] !== onNewCommunity) {
            _ = g(onNewCommunity);
            t[2] = onNewCommunity;
            t[3] = _;
        } else {
            _ = t[3];
        }
        let y;
        if (t[4] !== onNewCommunity) {
            y = function(t) {
                return h(t, onNewCommunity);
            };
            t[4] = onNewCommunity;
            t[5] = y;
        } else {
            y = t[5];
        }
        let C;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebSquircleIcon.react");
            C = <Component>{d.jsx(r("WDSIconWdsIcCommunitiesFilled.react"), {
                directional: true,
                height: 28,
                width: 28,
                testid: "community-group"
            })}</Component>;
            t[6] = C;
        } else {
            C = t[6];
        }
        let b;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("New community");
            t[7] = b;
        } else {
            b = t[7];
        }
        let v;
        if (t[8] !== c || t[9] !== onNewCommunity) {
            const Component = r("WAWebCellFrame.react");
            v = <Component active={c} activeStyleType="BORDER" image={C} onClick={onNewCommunity} primary={b} theme="no-border"/>;
            t[8] = c;
            t[9] = onNewCommunity;
            t[10] = v;
        } else {
            v = t[10];
        }
        let S;
        if (t[11] !== l || t[12] !== _ || t[13] !== y || t[14] !== v) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            S = <Component aria-label={m} className={p} data-testid="new-community-row" handlers={_} onClick={y} ref={l} role="button">{v}</Component>;
            t[11] = l;
            t[12] = _;
            t[13] = y;
            t[14] = v;
            t[15] = S;
        } else {
            S = t[15];
        }
        return S;
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_onClick = e.onClick;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Create new group");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
                type: "group",
                size: 40
            });
            t[1] = l;
        } else {
            l = t[1];
        }
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = s._("Create new group");
            t[2] = u;
        } else {
            u = t[2];
        }
        let c;
        if (t[3] !== e_onClick) {
            const Component = r("WAWebCellFrame.react");
            c = <Component ariaLabel={i} focusable image={l} onClick={e_onClick} primary={u} tabOrder={o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT} testid="create-new-group-row" theme="subgroup"/>;
            t[3] = e_onClick;
            t[4] = c;
        } else {
            c = t[4];
        }
        return c;
    }
    function E(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_onClick = e.onClick;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Add existing group");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebRoundShape.react");
            l = <Component>{d.jsx(r("WDSIconIcAdd.react"), {})}</Component>;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = l;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("Add existing group");
            t[2] = c;
        } else {
            c = t[2];
        }
        let m;
        if (t[3] !== e_onClick) {
            const Component = r("WAWebCellFrame.react");
            m = <Component ariaLabel={i} focusable image={u} onClick={e_onClick} primary={c} tabOrder={o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT} testid="add-existing-group-row" theme="subgroup"/>;
            t[3] = e_onClick;
            t[4] = m;
        } else {
            m = t[4];
        }
        return m;
    }
    function KComponent(e) {
        const t = o("react-compiler-runtime").c(22);
        const { active, groupName, onClick, ref, subgroup, tabIndex } = e;
        let m;
        if (t[0] !== subgroup) {
            m = subgroup?.toString();
            t[0] = subgroup;
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = r("useWAWebActiveSelection")(active, `remove-button-${m}`);
        const _ = p[0];
        const y = p[1];
        const C = r("useMergeRefs")(ref, _);
        let b;
        if (t[2] !== groupName) {
            b = s._("Remove {sub-group-name}", [
                s._param("sub-group-name", groupName)
            ]).toString();
            t[2] = groupName;
            t[3] = b;
        } else {
            b = t[3];
        }
        const v = b;
        let S;
        if (t[4] !== onClick) {
            S = g(onClick);
            t[4] = onClick;
            t[5] = S;
        } else {
            S = t[5];
        }
        let R;
        if (t[6] !== onClick) {
            R = function(t) {
                return h(t, onClick);
            };
            t[6] = onClick;
            t[7] = R;
        } else {
            R = t[7];
        }
        const L = tabIndex ?? -1;
        const E = y && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent;
        let k;
        if (t[8] !== E) {
            k = [
                f.btnRemove,
                E
            ];
            t[8] = E;
            t[9] = k;
        } else {
            k = t[9];
        }
        let I;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            I = d.jsx(r("WDSIconIcClose.react"), {});
            t[10] = I;
        } else {
            I = t[10];
        }
        let T;
        if (t[11] !== onClick || t[12] !== v || t[13] !== L || t[14] !== k) {
            const Component = r("WAWebUnstyledButton.react");
            T = <Component onClick={onClick} tabIndex={L} testid="btn-remove-group" title={v} xstyle={k}>{I}</Component>;
            t[11] = onClick;
            t[12] = v;
            t[13] = L;
            t[14] = k;
            t[15] = T;
        } else {
            T = t[15];
        }
        let D;
        if (t[16] !== C || t[17] !== v || t[18] !== S || t[19] !== R || t[20] !== T) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            D = <Component aria-label={v} handlers={S} onClick={R} ref={C} role="button">{T}</Component>;
            t[16] = C;
            t[17] = v;
            t[18] = S;
            t[19] = R;
            t[20] = T;
            t[21] = D;
        } else {
            D = t[21];
        }
        return D;
    }
    function I() {
        return KComponent;
    }
    const T = KComponent;
    function D(e) {
        const i = o("react-compiler-runtime").c(18);
        const { chat, onClick } = e;
        let c;
        if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                "bulk_add",
                "bulk_remove",
                "reset",
                "change:isAdmin"
            ];
            i[0] = c;
        } else {
            c = i[0];
        }
        let m;
        if (i[1] !== chat.groupMetadata?.participants) {
            m = function() {
                let e;
                return !!((e = chat.groupMetadata) != null && e.participants.iAmAdmin());
            };
            i[1] = chat.groupMetadata?.participants;
            i[2] = m;
        } else {
            m = i[2];
        }
        const _ = r("useWAWebEventTargetValue")(chat.groupMetadata?.participants, c, m);
        let g;
        if (i[3] === Symbol.for("react.memo_cache_sentinel")) {
            g = [
                "add",
                "remove",
                "reset"
            ];
            i[3] = g;
        } else {
            g = i[3];
        }
        let h;
        if (i[4] !== chat.groupMetadata) {
            h = function() {
                return chat.groupMetadata?.getSubgroupSuggestions().length ?? 0;
            };
            i[4] = chat.groupMetadata;
            i[5] = h;
        } else {
            h = i[5];
        }
        const y = r("useWAWebEventTargetValue")(chat.groupMetadata?.subgroupSuggestions, g, h);
        if (y === 0) {
            return null;
        }
        let C;
        if (i[6] !== _) {
            const Component = r("WAWebSquircleIcon.react");
            C = <Component size={40} transparent xstyle={f.subgroupSuggestionsIconContainer}>{_ ? d.jsx(o("WAWebSubgroupsNuxIcon.react").SubgroupsNuxIcon, {
                height: 24,
                iconXstyle: f.subgroupSuggestionsIcon
            }) : d.jsx(r("WDSIconIcGroupAdd.react"), {
                height: 24,
                iconXstyle: f.secondaryColor
            })}</Component>;
            i[6] = _;
            i[7] = C;
        } else {
            C = i[7];
        }
        const b = C;
        let v;
        if (i[8] !== _) {
            v = _ ? s._("Pending groups") : s._("Groups you suggested");
            i[8] = _;
            i[9] = v;
        } else {
            v = i[9];
        }
        const S = v;
        let R;
        if (i[10] !== _ || i[11] !== y) {
            R = _ ? s._("_j{\"*\":\"{number_of_group_suggestions} group suggestions\",\"_1\":\"1 group suggestion\"}", [
                s._plural(y, "number_of_group_suggestions")
            ]) : s._("_j{\"*\":\"{number_of_pending_groups} pending groups\",\"_1\":\"1 pending group\"}", [
                s._plural(y, "number_of_pending_groups")
            ]);
            i[10] = _;
            i[11] = y;
            i[12] = R;
        } else {
            R = i[12];
        }
        const L = R;
        let E;
        if (i[13] !== b || i[14] !== onClick || i[15] !== S || i[16] !== L) {
            const Component = r("WAWebCellFrame.react");
            E = <Component ariaLabel={S} focusable image={b} onClick={onClick} primary={S} secondary={L} tabOrder={o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT} theme="subgroup"/>;
            i[13] = b;
            i[14] = onClick;
            i[15] = S;
            i[16] = L;
            i[17] = E;
        } else {
            E = i[17];
        }
        return E;
    }
    function XComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_onClick = e.onClick;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Add group");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
                size: 40,
                type: "group"
            });
            t[1] = l;
        } else {
            l = t[1];
        }
        let u;
        if (t[2] !== e_onClick) {
            const Component = r("WAWebCellFrame.react");
            u = <Component ariaLabel={i} focusable image={l} onClick={e_onClick} primary={i} tabOrder={o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT} theme="subgroup"/>;
            t[2] = e_onClick;
            t[3] = u;
        } else {
            u = t[3];
        }
        return u;
    }
    function $() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSTextualLink.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            t = <Component_2 align="center" justify="center" xstyle={f.marginVert8}><Component_1 colorName="contentDeemphasized" type="Body2"><Component href={o("WAWebFaqUrl").getAboutCommunitiesFaqUrl()}>{s._("See example communities")}</Component></Component_1></Component_2>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    l.mapHandlers = g;
    l.CommunityCell = y;
    l.CommunityMenuButton = C;
    l.SubgroupChatCell = b;
    l.ViewAllCell = v;
    l.ActivityCell = S;
    l.NewCommunityCell = R;
    l.CreateNewGroupCell = L;
    l.AddExistingGroupsCell = E;
    l.RemoveButtonFactory = I;
    l.RemoveButton = T;
    l.SubgroupSuggestionsRow = D;
    l.AddGroupCell = XComponent;
    l.SeeExamplesLink = $;
}, 226);