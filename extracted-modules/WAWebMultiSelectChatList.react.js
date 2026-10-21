__d("WAWebMultiSelectChatList.react", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebBotFrontendUtils",
    "WAWebBotUtils",
    "WAWebCellFrame.react",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatModel",
    "WAWebChatUnblockableContactWrapper.react",
    "WAWebCheckBox.react",
    "WAWebCheckboxSelectableWrapper.react",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebEmptyState.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlatList.react",
    "WAWebFrontendChatGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebL10NAccentFold",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebLogStatusPrivacySettings",
    "WAWebModalManager",
    "WAWebMultiSelectChatListTypes",
    "WAWebMultiSelectListHotKeys.react",
    "WAWebNewsletterCollection",
    "WAWebNonContactPushNameSearchModel",
    "WAWebNoop",
    "WAWebOrgMemberPickerCell.react",
    "WAWebOrgMemberPickerRows",
    "WAWebOrgMemberPickerStatusRow.react",
    "WAWebOrgMemberSearchRows",
    "WAWebOrgTimelock",
    "WAWebPhoneNumberSearch",
    "WAWebReachoutTimelockActions",
    "WAWebReachoutTimelockButterBarLoadable.react",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebRound.react",
    "WAWebSectionHeader.react",
    "WAWebStatusJidUtils",
    "WAWebStatusPostingUtils",
    "WAWebStatusPrivacySettingsFlowLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosCountryGating",
    "WAWebTosGating",
    "WAWebUnsavedOrgMemberPickerRow.react",
    "WAWebUserPrefsMeUser",
    "WDSButton.react",
    "WDSIconIcMoreHoriz.react",
    "WDSIconWdsIcAddToStatus.react",
    "compactMap",
    "countWhere",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebHover",
    "useWAWebListener",
    "useWAWebOrgMemberSearch",
    "useWAWebStableCallback",
    "useWAWebStatusPrivacySettingConfig"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useMemo, useRef, useState } = m;
    const y = {
        SEC_CHATS: "SEC_CHATS",
        SEC_MY_NEWSLETTERS: "SEC_MY_NEWSLETTERS",
        SEC_CONTACTS: "SEC_CONTACTS",
        SEC_NON_CONTACT_PUSHNAME: "SEC_NON_CONTACT_PUSHNAME",
        REACHOUT_TIMELOCK_BANNER: "REACHOUT_TIMELOCK_BANNER"
    };
    const C = {
        myStatus: {
            color: "x1pse0pq",
            backgroundColor: "xfn3atn",
            $$css: true
        },
        emptyStateFill: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            minHeight: "x2lwn1j",
            $$css: true
        }
    };
    function B3Component(e) {
        const t = o("react-compiler-runtime").c(16);
        const { active, model, onEditStatusAudience } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("My status");
            t[0] = l;
        } else {
            l = t[0];
        }
        const u = l;
        const c = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig();
        const { statusPostingPrivacyConfig, updateStatusPostingPrivacyConfig } = c;
        let _;
        if (t[1] !== statusPostingPrivacyConfig) {
            _ = statusPostingPrivacyConfig ? o("WAWebStatusPostingUtils").formatStatusSetting(statusPostingPrivacyConfig) : null;
            t[1] = statusPostingPrivacyConfig;
            t[2] = _;
        } else {
            _ = t[2];
        }
        const f = _;
        const hRef = useRef(null);
        const y = o("useWAWebHover").useWAWebHover(hRef);
        let b;
        if (t[3] !== onEditStatusAudience || t[4] !== statusPostingPrivacyConfig || t[5] !== updateStatusPostingPrivacyConfig) {
            const v = function(t) {
                t.stopPropagation();
                if (onEditStatusAudience != null) {
                    onEditStatusAudience();
                    return;
                }
                o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(o("WAWebStatusPrivacySettingsFlowLoadable").StatusPrivacySettingsFlowLoadable, {
                    statusPostingPrivacyConfig,
                    setStatusPostingPrivacyConfig: updateStatusPostingPrivacyConfig,
                    surface: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.STATUS_PRIVACY_SETTINGS
                }));
            };
            const Component = r("WDSButton.react");
            b = <Component Icon={r("WDSIconIcMoreHoriz.react")} onPress={v} variant="borderless" testid="status-privacy-config-button"/>;
            t[3] = onEditStatusAudience;
            t[4] = statusPostingPrivacyConfig;
            t[5] = updateStatusPostingPrivacyConfig;
            t[6] = b;
        } else {
            b = t[6];
        }
        const S = b;
        let R;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebRound.react").Round;
            R = <Component xstyle={C.myStatus} theme={o("WAWebRound.react").RoundTheme.NoShadow}>{d.jsx(r("WDSIconWdsIcAddToStatus.react"), {
                directional: true
            })}</Component>;
            t[7] = R;
        } else {
            R = t[7];
        }
        const L = R;
        let E;
        if (t[8] !== active || t[9] !== y || t[10] !== model) {
            E = y || active.value?.id.equals(model.id);
            t[8] = active;
            t[9] = y;
            t[10] = model;
            t[11] = E;
        } else {
            E = t[11];
        }
        let I;
        if (t[12] !== f || t[13] !== S || t[14] !== E) {
            const Component = r("WAWebCellFrame.react");
            I = <Component ref={hRef} active={E} focusable image={L} primary={u} secondary={f} testid="my-status-row" theme="chat-checkbox" onClick={r("WAWebNoop")} detail={S}/>;
            t[12] = f;
            t[13] = S;
            t[14] = E;
            t[15] = I;
        } else {
            I = t[15];
        }
        return I;
    }
    function V5Component(e) {
        let t;
        const n = o("react-compiler-runtime").c(15);
        const { active, chat, customSecondaryText, disabled, ephemeralIcon, hasFrequentlyForwarded, isMaxGroupsSelected, isMaxNewslettersSelected, onEditStatusAudience, selected } = e;
        let g = disabled;
        let h;
        if (n[0] !== chat || n[1] !== customSecondaryText || n[2] !== disabled) {
            h = customSecondaryText?.(chat, disabled);
            n[0] = chat;
            n[1] = customSecondaryText;
            n[2] = disabled;
            n[3] = h;
        } else {
            h = n[3];
        }
        let y = h;
        const C = !!((t = chat.groupMetadata) != null && t.noFrequentlyForwarded);
        if (hasFrequentlyForwarded && C) {
            g = true;
            let v;
            if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
                v = s._("Can't send messages that have been forwarded many times");
                n[4] = v;
            } else {
                v = n[4];
            }
            y = v;
        } else {
            if (isMaxGroupsSelected && !selected || isMaxNewslettersSelected && !selected && o("WAWebChatGetters").getIsNewsletter(chat)) {
                g = true;
            }
        }
        const S = g ? "chat-checkbox-disabled" : "chat-checkbox";
        if (chat.id.isStatus()) {
            let R;
            if (n[5] !== active || n[6] !== chat || n[7] !== onEditStatusAudience) {
                R = <B3Component active={active} model={chat} onEditStatusAudience={onEditStatusAudience}/>;
                n[5] = active;
                n[6] = chat;
                n[7] = onEditStatusAudience;
                n[8] = R;
            } else {
                R = n[8];
            }
            return R;
        }
        let L;
        if (n[9] !== active || n[10] !== chat || n[11] !== ephemeralIcon || n[12] !== y || n[13] !== S) {
            L = d.jsx(o("WAWebChat.react").ChatOrContact, {
                theme: S,
                active,
                chat,
                mode: o("WAWebChat.react").Mode.INFO,
                noContext: true,
                secondary: y,
                ephemeralIcon
            });
            n[9] = active;
            n[10] = chat;
            n[11] = ephemeralIcon;
            n[12] = y;
            n[13] = S;
            n[14] = L;
        } else {
            L = n[14];
        }
        return L;
    }
    function S({ contact, customSecondaryText, disabled, isMetaAiBot, isSearchResult }) {
        const l = customSecondaryText?.(contact, disabled);
        if (disabled && l != null) {
            return l;
        }
        if (isMetaAiBot) {
            return s._("Ask me anything");
        }
        if (!isSearchResult && o("WAWebContactGetters").getIsMe(contact)) {
            return s._("Message yourself");
        }
        return null;
    }
    function RComponent(e) {
        const t = o("react-compiler-runtime").c(12);
        const { active, contact, customSecondaryText, disabled, ephemeralIcon, isMetaAiBot, isSearchResult } = e;
        const isMetaAiBot_1 = isMetaAiBot === undefined ? false : isMetaAiBot;
        let p;
        if (t[0] !== contact || t[1] !== customSecondaryText || t[2] !== disabled || t[3] !== isMetaAiBot_1 || t[4] !== isSearchResult) {
            p = S({
                contact,
                customSecondaryText,
                disabled,
                isMetaAiBot: isMetaAiBot_1,
                isSearchResult
            });
            t[0] = contact;
            t[1] = customSecondaryText;
            t[2] = disabled;
            t[3] = isMetaAiBot_1;
            t[4] = isSearchResult;
            t[5] = p;
        } else {
            p = t[5];
        }
        const customSecondaryText_1 = p;
        let f;
        if (t[6] !== active || t[7] !== contact || t[8] !== disabled || t[9] !== ephemeralIcon || t[10] !== customSecondaryText_1) {
            const Component = r("WAWebChatUnblockableContactWrapper.react");
            f = <Component contact={contact} onSelect={r("WAWebNoop")} active={active} customSecondaryText={customSecondaryText_1} ephemeralIcon={ephemeralIcon} disabled={disabled} theme="multi-select-chat-list"/>;
            t[6] = active;
            t[7] = contact;
            t[8] = disabled;
            t[9] = ephemeralIcon;
            t[10] = customSecondaryText_1;
            t[11] = f;
        } else {
            f = t[11];
        }
        return f;
    }
    function LComponent(e) {
        const t = o("react-compiler-runtime").c(30);
        const { active, isDisabled, isMaxChatsSelected, lid, member, onClick, selections } = e;
        let m;
        if (t[0] !== lid) {
            m = function() {
                return o("WAWebContactCollection").ContactCollection.get(lid);
            };
            t[0] = lid;
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = useState(m);
        const _ = p[0];
        const f = p[1];
        let g;
        if (t[2] !== lid) {
            g = lid.toString();
            t[2] = lid;
            t[3] = g;
        } else {
            g = t[3];
        }
        let y;
        if (t[4] !== lid) {
            y = function() {
                f(o("WAWebContactCollection").ContactCollection.get(lid));
            };
            t[4] = lid;
            t[5] = y;
        } else {
            y = t[5];
        }
        o("useWAWebListener").useListener(selections, g, y);
        if (_ == null) {
            let onSelect;
            if (t[6] !== lid || t[7] !== onClick) {
                onSelect = function() {
                    return onClick(o("WAWebContactCollection").ContactCollection.gadd(lid));
                };
                t[6] = lid;
                t[7] = onClick;
                t[8] = onSelect;
            } else {
                onSelect = t[8];
            }
            let b;
            if (t[9] !== isMaxChatsSelected || t[10] !== lid || t[11] !== member || t[12] !== onSelect) {
                const Component = r("WAWebUnsavedOrgMemberPickerRow.react");
                b = <Component disabled={isMaxChatsSelected} lid={lid} member={member} onSelect={onSelect}/>;
                t[9] = isMaxChatsSelected;
                t[10] = lid;
                t[11] = member;
                t[12] = onSelect;
                t[13] = b;
            } else {
                b = t[13];
            }
            return b;
        }
        let v;
        if (t[14] !== _ || t[15] !== selections) {
            v = selections.isSelected(_);
            t[14] = _;
            t[15] = selections;
            t[16] = v;
        } else {
            v = t[16];
        }
        let S;
        if (t[17] !== active || t[18] !== lid || t[19] !== member) {
            S = function(t) {
                return <E active={active} disabled={t} lid={lid} member={member}/>;
            };
            t[17] = active;
            t[18] = lid;
            t[19] = member;
            t[20] = S;
        } else {
            S = t[20];
        }
        let R;
        if (t[21] !== active || t[22] !== _ || t[23] !== isDisabled || t[24] !== isMaxChatsSelected || t[25] !== onClick || t[26] !== selections || t[27] !== v || t[28] !== S) {
            R = <K1Component isMaxChatsSelected={isMaxChatsSelected} onClick={onClick} active={active} model={_} selections={selections} selected={v} isDisabled={isDisabled}>{S}</K1Component>;
            t[21] = active;
            t[22] = _;
            t[23] = isDisabled;
            t[24] = isMaxChatsSelected;
            t[25] = onClick;
            t[26] = selections;
            t[27] = v;
            t[28] = S;
            t[29] = R;
        } else {
            R = t[29];
        }
        return R;
    }
    function E(e) {
        const t = o("react-compiler-runtime").c(7);
        const { active, disabled, lid, member } = e;
        let s;
        if (t[0] !== lid) {
            s = lid.toString();
            t[0] = lid;
            t[1] = s;
        } else {
            s = t[1];
        }
        const u = r("useWAWebActiveSelection")(active, s);
        const c = u[1];
        let m;
        if (t[2] !== disabled || t[3] !== c || t[4] !== lid || t[5] !== member) {
            m = d.jsx(r("WAWebOrgMemberPickerCell.react"), {
                active: c,
                disabled,
                lid,
                member
            });
            t[2] = disabled;
            t[3] = c;
            t[4] = lid;
            t[5] = member;
            t[6] = m;
        } else {
            m = t[6];
        }
        return m;
    }
    function K1Component({ active, children, isDisabled, isMaxChatsSelected, model, onClick, selected, selections }) {
        const m = selections.isSelected(model);
        let p = isMaxChatsSelected && !m;
        let _;
        if (isDisabled) {
            _ = isDisabled(model);
            if (!p) {
                p = _;
            }
        }
        const f = function() {
            if (!_) {
                onClick(model);
            }
        };
        const Component = r("WAWebCheckboxSelectableWrapper.react");
        return <Component key={model.id.toString()} onClick={f} active={active} wrapperTestid="checkbox-selectable-wrapper" model={model} selections={selections} disabled={p} checkboxTheme={o("WAWebCheckBox.react").CheckboxTheme.OUTLINE}>{children(p)}</Component>;
    }
    K1Component.displayName = `${K1Component.name} [from ${i.id}]`;
    function IComponent(e) {
        const t = o("react-compiler-runtime").c(59);
        const { active, customSecondaryText, data, ephemeralIcon, hasFrequentlyForwarded, isDisabled, isMaxChatsSelected, isMaxGroupsSelected, isMaxNewslettersSelected, isSearchResult, onChatClick, onEditStatusAudience, onRetryOrgMemberSearch, selections } = e;
        switch(data.type){
            case y.REACHOUT_TIMELOCK_BANNER:
                {
                    let E;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        E = d.jsx(o("WAWebReachoutTimelockButterBarLoadable.react").ReachoutTimelockButterBarLoadable, {});
                        t[0] = E;
                    } else {
                        E = t[0];
                    }
                    return E;
                }
            case y.SEC_CHATS:
                {
                    let I;
                    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                        I = d.jsx(r("WAWebSectionHeader.react"), {
                            header: s._("Recent chats"),
                            uppercase: false
                        });
                        t[1] = I;
                    } else {
                        I = t[1];
                    }
                    return I;
                }
            case y.SEC_MY_NEWSLETTERS:
                {
                    if (data.type === y.SEC_MY_NEWSLETTERS) {
                        let T;
                        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                            T = d.jsx(r("WAWebSectionHeader.react"), {
                                header: s._("My Channels"),
                                uppercase: false
                            });
                            t[2] = T;
                        } else {
                            T = t[2];
                        }
                        return T;
                    }
                    let D;
                    if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                        D = d.jsx(r("WAWebSectionHeader.react"), {
                            header: s._("My channels"),
                            uppercase: false
                        });
                        t[3] = D;
                    } else {
                        D = t[3];
                    }
                    return D;
                }
            case y.SEC_CONTACTS:
                {
                    let x;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        x = d.jsx(r("WAWebSectionHeader.react"), {
                            header: s._("Other contacts"),
                            uppercase: false
                        });
                        t[4] = x;
                    } else {
                        x = t[4];
                    }
                    return x;
                }
            case y.SEC_NON_CONTACT_PUSHNAME:
                {
                    let $;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        $ = d.jsx(r("WAWebSectionHeader.react"), {
                            header: o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader(),
                            uppercase: false
                        });
                        t[5] = $;
                    } else {
                        $ = t[5];
                    }
                    return $;
                }
            case o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS:
                {
                    const P = data.data;
                    let N;
                    if (t[6] !== P || t[7] !== selections) {
                        N = selections.isSelected(P);
                        t[6] = P;
                        t[7] = selections;
                        t[8] = N;
                    } else {
                        N = t[8];
                    }
                    const M = N;
                    let w;
                    if (t[9] !== active || t[10] !== P || t[11] !== customSecondaryText || t[12] !== ephemeralIcon || t[13] !== hasFrequentlyForwarded || t[14] !== isMaxGroupsSelected || t[15] !== isMaxNewslettersSelected || t[16] !== isSearchResult || t[17] !== onEditStatusAudience || t[18] !== M) {
                        w = function(t) {
                            if (o("WAWebChatGetters").getIsUser(P)) {
                                return <RComponent active={active} contact={P.contact} customSecondaryText={customSecondaryText} disabled={t} ephemeralIcon={ephemeralIcon} isSearchResult={isSearchResult}/>;
                            }
                            return <V5Component active={active} chat={P} customSecondaryText={customSecondaryText} disabled={t} ephemeralIcon={ephemeralIcon} hasFrequentlyForwarded={hasFrequentlyForwarded} isMaxGroupsSelected={isMaxGroupsSelected} isMaxNewslettersSelected={isMaxNewslettersSelected} onEditStatusAudience={onEditStatusAudience} selected={M}/>;
                        };
                        t[9] = active;
                        t[10] = P;
                        t[11] = customSecondaryText;
                        t[12] = ephemeralIcon;
                        t[13] = hasFrequentlyForwarded;
                        t[14] = isMaxGroupsSelected;
                        t[15] = isMaxNewslettersSelected;
                        t[16] = isSearchResult;
                        t[17] = onEditStatusAudience;
                        t[18] = M;
                        t[19] = w;
                    } else {
                        w = t[19];
                    }
                    let A;
                    if (t[20] !== active || t[21] !== P || t[22] !== isDisabled || t[23] !== isMaxChatsSelected || t[24] !== onChatClick || t[25] !== M || t[26] !== selections || t[27] !== w) {
                        A = <K1Component isMaxChatsSelected={isMaxChatsSelected} onClick={onChatClick} active={active} model={P} selections={selections} selected={M} isDisabled={isDisabled}>{w}</K1Component>;
                        t[20] = active;
                        t[21] = P;
                        t[22] = isDisabled;
                        t[23] = isMaxChatsSelected;
                        t[24] = onChatClick;
                        t[25] = M;
                        t[26] = selections;
                        t[27] = w;
                        t[28] = A;
                    } else {
                        A = t[28];
                    }
                    return A;
                }
            case o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS:
                {
                    const F = data.data;
                    let O;
                    if (t[29] !== F || t[30] !== selections) {
                        O = selections.isSelected(F);
                        t[29] = F;
                        t[30] = selections;
                        t[31] = O;
                    } else {
                        O = t[31];
                    }
                    const B = O;
                    let W;
                    if (t[32] !== active || t[33] !== F.id || t[34] !== customSecondaryText || t[35] !== data.data || t[36] !== ephemeralIcon || t[37] !== isSearchResult) {
                        W = function(t) {
                            return <RComponent active={active} contact={data.data} customSecondaryText={customSecondaryText} disabled={t} ephemeralIcon={ephemeralIcon} isSearchResult={isSearchResult} isMetaAiBot={o("WAWebBotUtils").isMetaAiBot(F.id)}/>;
                        };
                        t[32] = active;
                        t[33] = F.id;
                        t[34] = customSecondaryText;
                        t[35] = data.data;
                        t[36] = ephemeralIcon;
                        t[37] = isSearchResult;
                        t[38] = W;
                    } else {
                        W = t[38];
                    }
                    let q;
                    if (t[39] !== active || t[40] !== F || t[41] !== isDisabled || t[42] !== isMaxChatsSelected || t[43] !== onChatClick || t[44] !== B || t[45] !== selections || t[46] !== W) {
                        q = <K1Component isMaxChatsSelected={isMaxChatsSelected} onClick={onChatClick} active={active} model={F} selections={selections} selected={B} isDisabled={isDisabled}>{W}</K1Component>;
                        t[39] = active;
                        t[40] = F;
                        t[41] = isDisabled;
                        t[42] = isMaxChatsSelected;
                        t[43] = onChatClick;
                        t[44] = B;
                        t[45] = selections;
                        t[46] = W;
                        t[47] = q;
                    } else {
                        q = t[47];
                    }
                    return q;
                }
            case o("WAWebMultiSelectChatListTypes").Row.ROW_ORG_MEMBER:
                {
                    let U;
                    if (t[48] !== active || t[49] !== data.data || t[50] !== data.lid || t[51] !== isDisabled || t[52] !== isMaxChatsSelected || t[53] !== onChatClick || t[54] !== selections) {
                        U = <LComponent active={active} isDisabled={isDisabled} isMaxChatsSelected={isMaxChatsSelected} lid={data.lid} member={data.data} onClick={onChatClick} selections={selections}/>;
                        t[48] = active;
                        t[49] = data.data;
                        t[50] = data.lid;
                        t[51] = isDisabled;
                        t[52] = isMaxChatsSelected;
                        t[53] = onChatClick;
                        t[54] = selections;
                        t[55] = U;
                    } else {
                        U = t[55];
                    }
                    return U;
                }
            case o("WAWebMultiSelectChatListTypes").Row.ROW_ORG_MEMBERS_STATUS:
                {
                    let V;
                    if (t[56] !== data.status || t[57] !== onRetryOrgMemberSearch) {
                        const Component = r("WAWebOrgMemberPickerStatusRow.react");
                        V = <Component onRetry={onRetryOrgMemberSearch} status={data.status}/>;
                        t[56] = data.status;
                        t[57] = onRetryOrgMemberSearch;
                        t[58] = V;
                    } else {
                        V = t[58];
                    }
                    return V;
                }
            default:
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "UnknownDataError: invoked from WAWebMultiSelectChatList"
                ])));
                throw new (o("WAWebFlatList.react")).UnknownDataError(data);
        }
    }
    function T(e, excludeChat, contactFilter) {
        const r = o("WAWebContactCollection").ContactCollection.get(e);
        if (r == null) {
            return !o("WAWebUserPrefsMeUser").isMeAccount(e) && excludeChat?.accountLid?.equals(e) !== true;
        }
        return !o("WAWebUserPrefsMeUser").isMeAccount(r.id) && !o("WAWebTosGating").shouldBlockByTos(r) && !o("WAWebTosCountryGating").shouldBlockByCountry(r) && (excludeChat == null ? undefined : excludeChat.id.equals(r.id)) !== true && contactFilter?.(r) !== false;
    }
    function D(e) {
        const t = o("react-compiler-runtime").c(2);
        const { flatList, isEmpty, searchText } = e;
        if (isEmpty) {
            if (searchText) {
                let i;
                if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                    i = d.jsx(o("WAWebEmptyState.react").Search, {});
                    t[0] = i;
                } else {
                    i = t[0];
                }
                return i;
            }
            let l;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                l = d.jsx(o("WAWebEmptyState.react").ListChats, {});
                t[1] = l;
            } else {
                l = t[1];
            }
            return l;
        }
        return flatList;
    }
    function XComponent(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { active, customItemSecondaryText, ephemeralIcon, excludeChat, excludeContacts } = a;
        const b = excludeContacts === undefined ? false : excludeContacts;
        const { flatListController, getInitialItems, hasForwarded } = a;
        const L = hasForwarded === undefined ? false : hasForwarded;
        const a_hasFrequentlyForwarded = a.hasFrequentlyForwarded;
        const hasFrequentlyForwarded = a_hasFrequentlyForwarded === undefined ? false : a_hasFrequentlyForwarded;
        const a_includeNewsletters = a.includeNewsletters;
        const $ = a_includeNewsletters === undefined ? false : a_includeNewsletters;
        const a_includeOrgMembers = a.includeOrgMembers;
        const N = a_includeOrgMembers === undefined ? false : a_includeOrgMembers;
        const a_isCommunityExistingGroupsDrawer = a.isCommunityExistingGroupsDrawer;
        const w = a_isCommunityExistingGroupsDrawer === undefined ? false : a_isCommunityExistingGroupsDrawer;
        const { isDisabled, maxChats, onChatsLoaded, onEditStatusAudience, onSelectionChanged, searchText, selections } = a;
        const VRef = useRef();
        const H = o("WAWebStatusJidUtils").getStatusChat();
        const G = (t)=>t.filter((e)=>!o("WAWebTosGating").shouldBlockByTos(e) && !o("WAWebTosCountryGating").shouldBlockByCountry(e));
        const z = (t, n)=>{
            let e = n;
            if (e) {
                e = o("WAWebL10NAccentFold").accentFold(e);
                const a = o("WAWebPhoneNumberSearch").numberSearch(e);
                return t.filter((t)=>t.canSend && o("WAWebFrontendChatGetters").getShouldAppearInList(t) && t.contact.searchMatchExact(e, a));
            }
            return t.filter((e)=>e.canSend && o("WAWebFrontendChatGetters").getShouldAppearInList(e)).sort(r("WAWebChatComparator"));
        };
        const j = (t)=>{
            let e = t;
            const n = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
                showMe: true
            });
            if (a.includeMetaAi === true) {
                const r = o("WAWebBotFrontendUtils").getMetaAiContact();
                if (r) {
                    n.push(r);
                }
            }
            if (a.includeHatch === true) {
                const i = o("WAWebBotFrontendUtils").getHatchContact();
                if (i) {
                    n.push(i);
                }
            }
            if (!e) {
                return n;
            }
            e = o("WAWebL10NAccentFold").accentFold(e);
            const l = o("WAWebPhoneNumberSearch").numberSearch(e);
            return n.filter((t)=>t.searchMatchExact(e, l));
        };
        const K = r("useWAWebStableCallback")(function(e) {
            const t = {};
            const n = z(o("WAWebChatCollection").ChatCollection, e);
            const newsletters = $ ? z(r("WAWebNewsletterCollection"), e) : [];
            const chats = r("compactMap")(n, function(e) {
                if (o("WAWebChatGetters").getIsBroadcast(e) || o("WAWebChatGroupUtils").isSuspendedGroup(e) || a.includeMetaAi !== true && o("WAWebBotUtils").isMetaAiBot(e.id) || a.includeHatch !== true && o("WAWebBotUtils").isHatchBot(e.id) || a.chatFilter && !a.chatFilter(e)) {
                    return null;
                }
                const n = o("WAWebLidMigrationUtils").toPn(e.id);
                if (n) {
                    t[n] = true;
                }
                if (a.excludeAcp2RestrictedChats === true && o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(e)) {
                    return null;
                }
                return e;
            });
            let s = [];
            if (!b) {
                const u = G(j(e));
                const c = chats.some((e)=>o("WAWebBotUtils").isMetaAiBot(e.id));
                const d = chats.some((e)=>o("WAWebBotUtils").isHatchBot(e.id));
                s = r("compactMap")(u, function(e) {
                    if (c && o("WAWebBotUtils").isMetaAiBot(e.id) || d && o("WAWebBotUtils").isHatchBot(e.id)) {
                        return null;
                    }
                    const n = o("WAWebLidMigrationUtils").toPn(e.id);
                    if (n && t[n] || a.contactFilter && !a.contactFilter(e)) {
                        return null;
                    }
                    return e;
                });
                o("WAWebReachoutTimelockActions").maybeSetCanSendMsgWhileTimelockedProp(s);
            }
            if (!e) {
                const m = function(t, n) {
                    if (o("WAWebUserPrefsMeUser").isMeAccount(t.id)) {
                        return -1;
                    }
                    if (o("WAWebUserPrefsMeUser").isMeAccount(n.id)) {
                        return 1;
                    }
                    return 0;
                };
                chats.sort(m);
                s.sort(m);
            }
            if (w) {
                chats.sort((e, t)=>{
                    if (isDisabled) {
                        const n = r("WAWebGroupMetadataCollection").get(e.id.toString());
                        const a = n != null && o("WAWebGroupMetadataGetters").getIsUnnamed(n);
                        if (isDisabled(e) && !a) {
                            return 1;
                        }
                        if (isDisabled(t)) {
                            return -1;
                        }
                    }
                    return 1;
                });
            }
            return {
                statusChat: H,
                chats,
                contacts: s,
                newsletters
            };
        });
        const Q = useState(function() {
            return K(searchText);
        });
        const X = Q[0];
        const Y = Q[1];
        const JRef = useRef(null);
        const ZRef = useRef(null);
        const ee = useMemo(function() {
            if (b) {
                return o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES;
            }
            let e = G(o("WAWebNonContactPushNameSearchModel").searchNonContactPushnames(searchText));
            if (a.contactFilter != null) {
                e = e.filter(a.contactFilter);
            }
            if (excludeChat != null) {
                const t = o("WAWebUserPrefsMeUser").isMeAccount(excludeChat.id);
                e = e.filter((e)=>{
                    if (t) {
                        return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
                    }
                    return !excludeChat.id.equals(e.id);
                });
            }
            o("WAWebReachoutTimelockActions").maybeSetCanSendMsgWhileTimelockedProp(e);
            if (e.length === 0) {
                return o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES;
            }
            return e;
        }, [
            excludeChat,
            b,
            a.contactFilter,
            searchText
        ]);
        const te = r("useWAWebOrgMemberSearch")(searchText, N);
        const ne = te[0];
        const onRetryOrgMemberSearch = te[1];
        const oe = useMemo(function() {
            return o("WAWebOrgMemberSearchRows").dedupeOrgMemberSections(ne, X.chats, X.contacts);
        }, [
            ne,
            X.chats,
            X.contacts
        ]);
        const ae = useMemo(function() {
            return o("WAWebOrgMemberPickerRows").toOrgMemberPickerRows(oe, function(e) {
                return T(e, excludeChat, a.contactFilter);
            });
        }, [
            oe,
            excludeChat,
            a.contactFilter
        ]);
        const ie = useMemo(function() {
            return ae.flatMap((e)=>{
                if (e.type === o("WAWebMultiSelectChatListTypes").Row.ROW_ORG_MEMBER) {
                    return [
                        e.lid
                    ];
                }
                return [];
            });
        }, [
            ae
        ]);
        const le = useMemo(function() {
            const e = Array.from(new Set(r("compactMap")(ie, function(e) {
                return o("WAWebContactCollection").ContactCollection.get(e);
            })));
            o("WAWebReachoutTimelockActions").maybeSetCanSendMsgWhileTimelockedProp(e);
            return e;
        }, [
            ie
        ]);
        const se = useMemo(function() {
            return o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(o("WAWebOrgMemberSearchRows").withoutOrgMembers(ee, oe), X.chats, X.contacts);
        }, [
            ee,
            oe,
            X.chats,
            X.contacts
        ]);
        const ue = r("useWAWebStableCallback")(function({ chats, contacts, newsletters, statusChat }) {
            const l = statusChat != null && a.includeMyStatus === true ? [
                statusChat
            ] : [];
            return l.concat(chats, contacts, newsletters, le, o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(o("WAWebOrgMemberSearchRows").withoutOrgMembers(ee, oe), chats, contacts));
        });
        useEffect(function() {
            const e = ue(X);
            active.init(e);
            if (getInitialItems) {
                getInitialItems().forEach((e)=>selections.setVal(e, true));
            }
            if (onChatsLoaded) {
                onChatsLoaded(e);
            }
        }, []);
        const ce = useState(false);
        const isMaxChatsSelected = ce[0];
        const me = ce[1];
        const pe = useState(false);
        const isMaxGroupsSelected = pe[0];
        const fe = pe[1];
        const ge = useState(false);
        const isMaxNewslettersSelected = ge[0];
        const ye = ge[1];
        o("useWAWebListener").useListener(selections, "all", function() {
            me(r("countWhere")(selections.getSelected(), function(e) {
                return e instanceof r("WAWebContactModel") || !o("WAWebChatGetters").getIsNewsletter(e);
            }) === maxChats);
            fe(L && selections.getSelected().some((e)=>{
                if (e instanceof o("WAWebChatModel").Chat) {
                    return o("WAWebChatGetters").getIsGroup(e);
                }
                return o("WAWebContactGetters").getIsGroup(e);
            }));
            ye(selections.getSelected().some((e)=>e instanceof o("WAWebChatModel").Chat && o("WAWebChatGetters").getIsNewsletter(e)));
        });
        const Ce = ({ chat, focus, willBeSelected })=>{
            if (willBeSelected) {
                let l;
                let u;
                if (typeof maxChats === "number" && selections.getSelected().length >= maxChats) {
                    if (w && onSelectionChanged) {
                        onSelectionChanged(chat, willBeSelected);
                        return;
                    } else if (hasFrequentlyForwarded) {
                        l = s._("_j{\"*\":\"Messages forwarded many times can only be shared with up to {count} chats at a time.\",\"_1\":\"Messages forwarded many times can only be shared with up to 1 chat at a time.\"}", [
                            s._plural(maxChats, "count")
                        ]);
                        u = {
                            actionText: s._("Learn more"),
                            onAction: function() {
                                return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getFrequentlyForwardedFaqUrl());
                            }
                        };
                    } else {
                        l = a.maxChatsExceedErrorMsg ?? s._("_j{\"*\":\"You can only share with up to {count} chats\",\"_1\":\"You can only share with up to 1 chat\"}", [
                            s._plural(maxChats, "count")
                        ]);
                    }
                } else {
                    if (isMaxGroupsSelected && (chat instanceof o("WAWebChatModel").Chat ? o("WAWebChatGetters").getIsGroup(chat) : o("WAWebContactGetters").getIsGroup(chat))) {
                        l = s._("Forwarded messages can only be sent to one group chat at a time.");
                        u = {
                            actionText: s._("Learn more"),
                            onAction: function() {
                                return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getFrequentlyForwardedFaqUrl());
                            }
                        };
                    } else if (isMaxNewslettersSelected && chat instanceof o("WAWebChatModel").Chat && o("WAWebChatGetters").getIsNewsletter(chat)) {
                        l = s._("You can only forward to 1 channel.");
                    }
                }
                if (l != null) {
                    o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                        msg: l,
                        action: u
                    }), o("WAWebToastManager").ToastPosition.CENTER);
                    return;
                }
            }
            selections.setVal(chat, willBeSelected, focus);
            active.setVal(chat, focus);
            if (onSelectionChanged) {
                onSelectionChanged(chat, willBeSelected);
            }
        };
        const be = function(t) {
            ZRef.current?.scrollIntoViewIfNeeded(t);
        };
        const ve = function(t) {
            if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndHidden()) {
                if (t instanceof o("WAWebChatModel").Chat && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                    chat: t,
                    contact: t.contact
                })) {
                    o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
                    return;
                }
                if (t instanceof r("WAWebContactModel")) {
                    const e = t;
                    const n = e.id;
                    const a = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(n);
                    if (!o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                        chat: a,
                        contact: e
                    })) {
                        o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
                        return;
                    }
                }
            }
            const i = selections.isSelected(t);
            Ce({
                chat: t,
                focus: false,
                willBeSelected: !i
            });
        };
        useEffect(function() {
            const VRef_current = VRef.current;
            VRef.current = searchText;
            if (searchText !== VRef_current) {
                const t = K(searchText);
                Y(t);
                active.init(ue(t));
            }
        }, [
            active,
            K,
            searchText,
            ue
        ]);
        const SeRef = useRef(le);
        useEffect(function() {
            if (SeRef.current !== le) {
                SeRef.current = le;
                active.init(ue(X));
            }
        }, [
            active,
            X,
            ue,
            le
        ]);
        const Re = ()=>{
            const { chats, contacts, newsletters } = X;
            return !chats.length && !contacts.length && !newsletters.length && !ae.length && !se.length;
        };
        const Le = ()=>{
            const e = [];
            const { chats, contacts, newsletters } = X;
            const i = excludeChat != null && o("WAWebUserPrefsMeUser").isMeAccount(excludeChat.id);
            let l = excludeChat ? chats.filter((e)=>{
                if (i) {
                    return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
                }
                return !excludeChat.id.equals(e.id);
            }) : chats;
            let s = excludeChat ? contacts.filter((e)=>{
                if (i) {
                    return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
                }
                return !excludeChat.id.equals(e.id);
            }) : contacts;
            if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible()) {
                e.push({
                    itemKey: y.REACHOUT_TIMELOCK_BANNER,
                    type: y.REACHOUT_TIMELOCK_BANNER,
                    height: 110
                });
            }
            if (a.includeMetaAi === true) {
                const u = o("WAWebBotFrontendUtils").maybeGetTopMetaAiRow(l, s);
                if (u && !o("WAWebABProps").getABPropConfigValue("ai_forward_flow_surface_meta_ai_as_contact_enabled")) {
                    e.push(u);
                    l = l.filter((e)=>!o("WAWebBotUtils").isMetaAiBot(e.id));
                    s = s.filter((e)=>!o("WAWebBotUtils").isMetaAiBot(e.id));
                }
            }
            if (a.includeMyStatus === true) {
                e.push({
                    itemKey: H.id.toString(),
                    type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
                    data: H
                });
            }
            if (l.length) {
                if (b !== true) {
                    e.push({
                        itemKey: y.SEC_CHATS,
                        type: y.SEC_CHATS
                    });
                }
                e.push(...l.map((e)=>({
                        itemKey: e.id.toString(),
                        type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
                        data: e
                    })));
            }
            if (newsletters.length) {
                e.push({
                    itemKey: y.SEC_MY_NEWSLETTERS,
                    type: y.SEC_MY_NEWSLETTERS
                });
                e.push(...newsletters.map((e)=>({
                        itemKey: e.id.toString(),
                        type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
                        data: e
                    })));
            }
            if (s.length) {
                e.push({
                    itemKey: y.SEC_CONTACTS,
                    type: y.SEC_CONTACTS
                });
                e.push(...s.map((e)=>({
                        itemKey: e.id.toString(),
                        type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
                        data: e
                    })));
            }
            e.push(...ae);
            if (se.length) {
                e.push({
                    itemKey: y.SEC_NON_CONTACT_PUSHNAME,
                    type: y.SEC_NON_CONTACT_PUSHNAME
                });
                e.push(...se.map((e)=>({
                        itemKey: `non-contact-pushname-${e.id.toString()}`,
                        type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
                        data: e
                    })));
            }
            return e;
        };
        const Ee = function(t) {
            const { chats, contacts } = X;
            let r;
            if (chats.length) {
                r = chats[0];
            } else if (contacts.length) {
                r = contacts[0];
            } else if (ie.length && (!o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() || o("WAWebOrgTimelock").canMessageOrgMemberWhileTimelocked(ie[0]))) {
                r = o("WAWebContactCollection").ContactCollection.gadd(ie[0]);
            } else if (se.length) {
                r = se[0];
            } else {
                return;
            }
            const willBeSelected = !selections.isSelected(r);
            Ce({
                chat: r,
                focus: t,
                willBeSelected
            });
        };
        useImperativeHandle(t_ref, function() {
            return {
                toggleFirst: Ee
            };
        });
        const Component = o("WAWebFlatList.react").FlatList;
        const Component_1 = r("WAWebMultiSelectListHotKeys.react");
        return <Component_1 active={a.active} onLeave={a.onLeaveList} ref={JRef} onIndexChange={be} xstyle={Re() ? C.emptyStateFill : undefined}><D flatList=<Component ref={ZRef} flatListController={flatListController} direction="vertical" forceConsistentRenderCount={false} data={Le()} renderItem={function(t) {
            return <IComponent data={t} active={active} isSearchResult={!!searchText} selections={selections} hasFrequentlyForwarded={hasFrequentlyForwarded} ephemeralIcon={ephemeralIcon} onChatClick={ve} isMaxChatsSelected={isMaxChatsSelected} isMaxGroupsSelected={isMaxGroupsSelected} isMaxNewslettersSelected={isMaxNewslettersSelected} isDisabled={isDisabled} customSecondaryText={customItemSecondaryText} onEditStatusAudience={onEditStatusAudience} onRetryOrgMemberSearch={onRetryOrgMemberSearch}/>;
        }}/> searchText={searchText} isEmpty={Re()}/></Component_1>;
    }
    XComponent.displayName = `${XComponent.name} [from ${i.id}]`;
    l.default = XComponent;
}, 226);