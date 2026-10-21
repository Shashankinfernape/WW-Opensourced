__d("WAWebCommunitySettingsDrawer.react", [
    "fbt",
    "Promise",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySubgroupSuggestionsModals.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawer.react",
    "WAWebDrawerBlock.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupConstants",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSchemaGroupMetadata",
    "WAWebSetPropertyGroupAction",
    "WAWebSettingsPopup.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebFocusOnMount",
    "useWAWebGroupMetadataValues"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useMemo = c.useMemo;
    const p = {
        paddingTop20: {
            paddingTop: "x1h678fw",
            $$css: true
        }
    };
    function _(t) {
        const l = o("react-compiler-runtime").c(32);
        let u;
        let c;
        if (l[0] !== t) {
            c = t.ref;
            u = babelHelpers.objectWithoutPropertiesLoose(t, e);
            l[0] = t;
            l[1] = u;
            l[2] = c;
        } else {
            u = l[1];
            c = l[2];
        }
        const m = u;
        const { chat, onBack } = m;
        const y = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(u.chat.groupMetadata?.id, [
            o("WAWebFrontendGroupMetadataGetters").getAllowNonAdminSubGroupCreation
        ]) ?? [];
        const C = y[0];
        let S;
        if (l[3] !== chat.groupMetadata) {
            S = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(chat.groupMetadata);
            l[3] = chat.groupMetadata;
            l[4] = S;
        } else {
            S = l[4];
        }
        const R = S;
        const L = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(R?.id, [
            o("WAWebFrontendGroupMetadataGetters").getMemberAddMode
        ]) ?? [];
        const E = L[0];
        let k;
        if (l[5] !== E) {
            k = E != null && o("WAWebABProps").getABPropConfigValue("web_community_setting_add_members_enabled");
            l[5] = E;
            l[6] = k;
        } else {
            k = l[6];
        }
        const I = k;
        const T = r("useWAWebFocusOnMount")();
        let D;
        if (l[7] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                surface: "unknown",
                viewName: "community-settings"
            };
            l[7] = D;
        } else {
            D = l[7];
        }
        let x;
        if (l[8] === Symbol.for("react.memo_cache_sentinel")) {
            x = s._("Community settings");
            l[8] = x;
        } else {
            x = l[8];
        }
        let $;
        if (l[9] !== onBack) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            $ = <Component title={x} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL} onBack={onBack}/>;
            l[9] = onBack;
            l[10] = $;
        } else {
            $ = l[10];
        }
        let P;
        if (l[11] === Symbol.for("react.memo_cache_sentinel")) {
            P = s._("Community settings drawer");
            l[11] = P;
        } else {
            P = l[11];
        }
        let N;
        if (l[12] === Symbol.for("react.memo_cache_sentinel")) {
            N = s._("Community permissions");
            l[12] = N;
        } else {
            N = l[12];
        }
        let M;
        if (l[13] !== E || l[14] !== R || l[15] !== I) {
            M = I ? <B9Component isEnabled={E === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD} onClick={function() {
                const cagChat = o("WAWebChatCollection").ChatCollection.get(r("nullthrows")(R).id);
                if (cagChat != null) {
                    o("WAWebModalManager").ModalManager.open(<H5Component cagChat={cagChat}/>, {
                        transition: "modal"
                    });
                }
            }}/> : null;
            l[13] = E;
            l[14] = R;
            l[15] = I;
            l[16] = M;
        } else {
            M = l[16];
        }
        const isEnabled = !!C;
        let A;
        if (l[17] !== chat) {
            A = function() {
                o("WAWebModalManager").ModalManager.open(<F7Component settingType={o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION} chat={chat} groupMetadata={r("nullthrows")(chat.groupMetadata)}/>, {
                    transition: "modal"
                });
            };
            l[17] = chat;
            l[18] = A;
        } else {
            A = l[18];
        }
        let F;
        if (l[19] !== A || l[20] !== isEnabled) {
            F = <V7Component isEnabled={isEnabled} onClick={A}/>;
            l[19] = A;
            l[20] = isEnabled;
            l[21] = F;
        } else {
            F = l[21];
        }
        let O;
        if (l[22] !== F || l[23] !== M) {
            const Component = r("WAWebDrawerSection.react");
            const Component_1 = r("WAWebDrawerBody.react");
            O = <Component_1><Component title={N} titleXStyle={p.paddingTop20}>{M}{F}</Component></Component_1>;
            l[22] = F;
            l[23] = M;
            l[24] = O;
        } else {
            O = l[24];
        }
        let B;
        if (l[25] !== T || l[26] !== O) {
            B = <div role="complementary" ref={T} tabIndex={-1} aria-label={P}>{O}</div>;
            l[25] = T;
            l[26] = O;
            l[27] = B;
        } else {
            B = l[27];
        }
        let W;
        if (l[28] !== c || l[29] !== B || l[30] !== $) {
            const Component = r("WAWebDrawer.react");
            W = <Component ref={c} testid="community-settings-drawer" tsNavigationData={D}>{$}{B}</Component>;
            l[28] = c;
            l[29] = B;
            l[30] = $;
            l[31] = W;
        } else {
            W = l[31];
        }
        return W;
    }
    function F7Component(e) {
        const t = o("react-compiler-runtime").c(20);
        const e_settingType = e.settingType;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendGroupMetadataGetters").getAllowNonAdminSubGroupCreation,
                o("WAWebFrontendGroupMetadataGetters").getJoinedSubgroups,
                o("WAWebFrontendGroupMetadataGetters").getUnjoinedSubgroups
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebGroupMetadataValues").useGroupMetadataValues(e.groupMetadata.id, i);
        const u = l[0];
        const c = l[1];
        const m = l[2];
        const subgroupSuggestions = e.groupMetadata.subgroupSuggestions;
        let _;
        e: switch(e_settingType){
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                {
                    let f;
                    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                        f = [
                            {
                                label: s._("Everyone"),
                                secondaryLabel: s._("All community members can add new groups directly."),
                                value: 1
                            },
                            {
                                label: s._("Only community admins"),
                                secondaryLabel: s._("Only community admins can add new groups directly."),
                                value: 0
                            }
                        ];
                        t[1] = f;
                    } else {
                        f = t[1];
                    }
                    _ = f;
                    break e;
                }
            default:
                {
                    let h;
                    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                        h = [];
                        t[2] = h;
                    } else {
                        h = t[2];
                    }
                    _ = h;
                }
        }
        const y = _;
        let b;
        e: switch(e_settingType){
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                {
                    b = u === true ? 1 : 0;
                    break e;
                }
            default:
                b = 0;
        }
        const v = b;
        let S;
        e: switch(e_settingType){
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                {
                    let R;
                    if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                        R = s._("Who can add new groups");
                        t[3] = R;
                    } else {
                        R = t[3];
                    }
                    S = R;
                    break e;
                }
            default:
                S = "";
        }
        const L = S;
        let E;
        e: {
            if (e_settingType === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION) {
                let k;
                if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                    const Component = o("WAWebExternalLink.react").ExternalLink;
                    k = s._("Members can always suggest groups for admin approval. Community admins can remove any group. {=m1}", [
                        s._implicitParam("=m1", <Component href={o("WAWebFaqUrl").getMemberAddedGroupsUrl()}>{s._("Learn more")}</Component>)
                    ]);
                    t[4] = k;
                } else {
                    k = t[4];
                }
                E = k;
                break e;
            }
            E = null;
        }
        const explanation = E;
        let T;
        if (t[5] !== v || t[6] !== c || t[7] !== e.chat || t[8] !== e_settingType || t[9] !== subgroupSuggestions || t[10] !== m) {
            T = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    if (t === v) {
                        o("WAWebModalManager").ModalManager.close();
                        return;
                    }
                    const n = ()=>{
                        o("WAWebSetPropertyGroupAction").setGroupProperty(e.chat, e_settingType, t).catch(g);
                    };
                    e: switch(e_settingType){
                        case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                            {
                                const r = subgroupSuggestions.length;
                                if (t === 1 && r > 0) {
                                    if (!(yield C())) {
                                        break e;
                                    }
                                    const i = c.length + m.length;
                                    const l = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit() - i;
                                    if (r > l && !(yield o("WAWebCommunitySubgroupSuggestionsModals.react").confirmCommunityFull(l, r))) {
                                        break e;
                                    }
                                }
                                n();
                                break e;
                            }
                        default:
                            n();
                    }
                    o("WAWebModalManager").ModalManager.close();
                });
                return function(n) {
                    return t.apply(this, arguments);
                };
            })();
            t[5] = v;
            t[6] = c;
            t[7] = e.chat;
            t[8] = e_settingType;
            t[9] = subgroupSuggestions;
            t[10] = m;
            t[11] = T;
        } else {
            T = t[11];
        }
        const D = T;
        let x;
        if (t[12] !== D) {
            x = function(t) {
                D(t);
            };
            t[12] = D;
            t[13] = x;
        } else {
            x = t[13];
        }
        let $;
        if (t[14] !== explanation || t[15] !== v || t[16] !== y || t[17] !== L || t[18] !== x) {
            const Component = r("WAWebSettingsPopup.react");
            $ = <Component options={y} initialValue={v} title={L} onSelect={x} explanation={explanation}/>;
            t[14] = explanation;
            t[15] = v;
            t[16] = y;
            t[17] = L;
            t[18] = x;
            t[19] = $;
        } else {
            $ = t[19];
        }
        return $;
    }
    function g() {
        return r("WAWebNoop");
    }
    function H5Component(e) {
        const t = o("react-compiler-runtime").c(11);
        const e_cagChat = e.cagChat;
        let a;
        if (t[0] !== e_cagChat.groupMetadata) {
            a = r("nullthrows")(e_cagChat.groupMetadata);
            t[0] = e_cagChat.groupMetadata;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendGroupMetadataGetters").getMemberAddMode
            ];
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = o("useWAWebGroupMetadataValues").useGroupMetadataValues(a.id, i);
        const u = l[0];
        const c = u === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD ? 1 : 0;
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                {
                    label: s._("Everyone"),
                    secondaryLabel: s._("All community members can directly add other members."),
                    value: 1
                },
                {
                    label: s._("Only admins"),
                    secondaryLabel: s._("Only group and community admins can add new members."),
                    value: 0
                }
            ];
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        let _;
        if (t[4] !== e_cagChat || t[5] !== c) {
            _ = function(t) {
                if (t !== c) {
                    o("WAWebSetPropertyGroupAction").setGroupProperty(e_cagChat, o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE, t).catch(y);
                }
                o("WAWebModalManager").ModalManager.close();
            };
            t[4] = e_cagChat;
            t[5] = c;
            t[6] = _;
        } else {
            _ = t[6];
        }
        const f = _;
        let g;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Who can add new members");
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] !== f || t[9] !== c) {
            const Component = r("WAWebSettingsPopup.react");
            h = <Component options={p} initialValue={c} title={g} onSelect={f}/>;
            t[8] = f;
            t[9] = c;
            t[10] = h;
        } else {
            h = t[10];
        }
        return h;
    }
    function y() {
        return r("WAWebNoop");
    }
    function C() {
        return new (u || (u = n("Promise")))(function(e) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            o("WAWebModalManager").ModalManager.open(<Component title={s._("Approve all pending group suggestions?")} okText={s._("Approve")} onOK={function() {
                return e(true);
            }} onCancel={function() {
                return e(false);
            }} tsNavigationData={{
                surface: "unknown",
                viewName: "community-settings"
            }}>{s._("If you change this setting to \"Everyone,\" all pending group suggestions will be approved.")}</Component>);
        });
    }
    function B9Component(e) {
        const t = o("react-compiler-runtime").c(6);
        const { isEnabled, onClick } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Who can add new members");
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== isEnabled) {
            i = isEnabled ? s._("Everyone") : s._("Only admins");
            t[1] = isEnabled;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== onClick || t[4] !== i) {
            l = <S title={a} stateLabel={i} testid="who-can-add-new-members-setting" onClick={onClick}/>;
            t[3] = onClick;
            t[4] = i;
            t[5] = l;
        } else {
            l = t[5];
        }
        return l;
    }
    function V7Component(e) {
        const t = o("react-compiler-runtime").c(6);
        const { isEnabled, onClick } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Who can add new groups");
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== isEnabled) {
            i = isEnabled ? s._("Everyone") : s._("Only community admins");
            t[1] = isEnabled;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== onClick || t[4] !== i) {
            l = <S title={a} stateLabel={i} testid="who-can-add-new-groups-setting" onClick={onClick}/>;
            t[3] = onClick;
            t[4] = i;
            t[5] = l;
        } else {
            l = t[5];
        }
        return l;
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(12);
        const { onClick, stateLabel, testid, title } = e;
        let s;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                className: "x13m54ha"
            };
            t[0] = s;
        } else {
            s = t[0];
        }
        let u;
        if (t[1] !== title) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            u = <div {...babelHelpers.extends({}, s, {
                children: <Component>{title}</Component>
            })}/>;
            t[1] = title;
            t[2] = u;
        } else {
            u = t[2];
        }
        const c = `${testid}-state`;
        let m;
        if (t[3] !== stateLabel || t[4] !== c) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            m = <Component testid={c}>{stateLabel}</Component>;
            t[3] = stateLabel;
            t[4] = c;
            t[5] = m;
        } else {
            m = t[5];
        }
        let p;
        if (t[6] !== onClick || t[7] !== u || t[8] !== m || t[9] !== testid || t[10] !== title) {
            const Component = r("WAWebDrawerBlock.react");
            p = <Component onClick={onClick} focusable multiline tabOrder={o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT} testid={testid} ariaLabel={title}>{u}{m}</Component>;
            t[6] = onClick;
            t[7] = u;
            t[8] = m;
            t[9] = testid;
            t[10] = title;
            t[11] = p;
        } else {
            p = t[11];
        }
        return p;
    }
    l.default = _;
}, 226);