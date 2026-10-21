__d("WAWebGroupCallParticipantSelector.react", [
    "fbt",
    "CometVirtualization.react",
    "WAWebActionMenuItem.react",
    "WAWebCallDropdownMenuItems.react",
    "WAWebCheckBox.react",
    "WAWebChevronCustomIcons",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactImage.react",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebGroupCallPickerJourney",
    "WAWebGroupCallTitleUtils",
    "WAWebGroupChatImage.react",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebSchedulingCallsNotSupportedModal.react",
    "WAWebSharableEventGatingUtils",
    "WAWebShouldShowCallButtons",
    "WAWebStackedCirclesImage.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipCallIdProvider",
    "WAWebVoipCallsTabScheduleCallModal.react",
    "WAWebVoipCreateCallLinksPopupLoadable.react",
    "WAWebVoipGatingUtils",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumSubSurface",
    "WDSIconIcCalendarMonthFilled.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcChevronDown.react",
    "WDSIconIcLink.react",
    "WDSIconIcVideocamFilled.react",
    "WDSTooltip.react",
    "compactMap",
    "cr:23046",
    "fbs",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useId, useMemo, useState } = d;
    const f = n("cr:23046") ?? {};
    const f_isWindowsHybridEnabled = f.isWindowsHybridEnabled;
    const h = {
        callButtonMenuItemIcon: {
            color: "x1pse0pq",
            height: "xxk0z11",
            width: "xvy4d1p",
            $$css: true
        },
        callButtonMenuItemIconDisabled: {
            color: "xhslqc4",
            height: "xxk0z11",
            width: "xvy4d1p",
            $$css: true
        },
        participantRow: {
            flex: "x98rzlu",
            width: "xh8yej3",
            $$css: true
        },
        dropdownContainer: {
            maxHeight: "x14c67g7",
            minHeight: "xi3av73",
            width: "xj6ak53",
            overflowX: "x6ikm8r",
            $$css: true
        },
        firstRowContainer: {
            flex: "x98rzlu",
            flexShrink: "x2lah0s",
            width: "xh8yej3",
            $$css: true
        },
        groupImageContainer: {
            flexShrink: "x2lah0s",
            $$css: true
        },
        groupTextContainer: {
            flex: "x98rzlu",
            minWidth: "xeuugli",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        participantListHeader: {
            flexShrink: "x2lah0s",
            $$css: true
        },
        participantListHeaderBorder: {
            borderTopColor: "xx42vgk",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x178xt8z",
            marginTop: "x1xmf6yo",
            width: "xh8yej3",
            $$css: true
        },
        callButtonsRow: {
            rowGap: "x1qvou4u",
            columnGap: "x1s70e7g",
            marginBottom: "xefnzgg",
            marginTop: "x1380le5",
            width: "xh8yej3",
            $$css: true
        },
        callButtonWrapper: {
            flex: "x1cqoux5",
            maxHeight: "x18wx58x",
            $$css: true
        },
        actionsContainer: {
            rowGap: "x1qvou4u",
            columnGap: "x1s70e7g",
            width: "xh8yej3",
            $$css: true
        },
        actionItemIcon: {
            color: "xhslqc4",
            $$css: true
        },
        contactImageContainer: {
            flexShrink: "x2lah0s",
            marginInlineStart: "x1uvdrpn",
            $$css: true
        },
        participantNameContainer: {
            minWidth: "xeuugli",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        checkboxContainer: {
            flexShrink: "x2lah0s",
            $$css: true
        },
        chevronContainer: {
            flexShrink: "x2lah0s",
            marginInlineStart: "x1uvdrpn",
            $$css: true
        },
        paddingAll8: {
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        paddingStart12: {
            paddingInlineStart: "x1iw51ew",
            $$css: true
        }
    };
    function YComponent(e) {
        const i = o("react-compiler-runtime").c(100);
        const { callFromUi, chat, groupImage, groupTitleOverride, hideActions, initialSubtext, isCallingDisabled, isVideo, logger, onActionTaken, onCallStart, origin, participantWids, preselectedWids, useUnifiedUIOverride } = e;
        const isAdHocGroupCall = participantWids != null;
        let w;
        if (i[0] !== isAdHocGroupCall || i[1] !== useUnifiedUIOverride) {
            w = useUnifiedUIOverride ?? o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
                isAdHocGroupCall,
                isCallLink: false,
                isGroup: !isAdHocGroupCall
            });
            i[0] = isAdHocGroupCall;
            i[1] = useUnifiedUIOverride;
            i[2] = w;
        } else {
            w = i[2];
        }
        const A = w;
        const F = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants");
        const O = useState(false);
        const B = O[0];
        const W = O[1];
        let q;
        if (i[3] !== chat || i[4] !== isAdHocGroupCall) {
            q = isAdHocGroupCall ? null : r("WAWebGroupMetadataCollection").get(chat.id.toString());
            i[3] = chat;
            i[4] = isAdHocGroupCall;
            i[5] = q;
        } else {
            q = i[5];
        }
        const U = q;
        let V;
        e: {
            const H = R;
            if (participantWids != null) {
                let G;
                if (i[6] !== participantWids) {
                    const z = r("compactMap")(participantWids, S);
                    G = z.filter(H);
                    i[6] = participantWids;
                    i[7] = G;
                } else {
                    G = i[7];
                }
                V = G;
                break e;
            }
            if (U && U.participants) {
                let j;
                if (i[8] !== U.participants) {
                    const K = U.participants.toArray();
                    const Q = r("compactMap")(K, v);
                    j = Q.filter(H);
                    i[8] = U.participants;
                    i[9] = j;
                } else {
                    j = i[9];
                }
                V = j;
                break e;
            }
            let X;
            if (i[10] === Symbol.for("react.memo_cache_sentinel")) {
                X = [];
                i[10] = X;
            } else {
                X = i[10];
            }
            V = X;
        }
        const Y = V;
        let J;
        if (i[11] !== Y || i[12] !== preselectedWids) {
            J = function() {
                if (preselectedWids == null) {
                    return new Set;
                }
                const e = new Set(preselectedWids.map(L));
                return new Set(Y.filter((t)=>e.has(L(t.id))).map(b));
            };
            i[11] = Y;
            i[12] = preselectedWids;
            i[13] = J;
        } else {
            J = i[13];
        }
        const Z = useState(J);
        const ee = Z[0];
        const te = Z[1];
        const ee_size = ee.size;
        const re = Y.length + 1;
        const oe = U?.size ?? U?.participants?.length ?? 0;
        const ae = ee_size === Y.length;
        const ie = ee_size === 0 ? B || re > F : ee_size + 1 > F;
        let le;
        if (i[14] !== oe || i[15] !== initialSubtext || i[16] !== isAdHocGroupCall || i[17] !== ae || i[18] !== B || i[19] !== ee_size) {
            const se = ()=>{
                const e = r("fbs")._("Select people");
                if (ee_size === 0) {
                    return e;
                }
                if (ae) {
                    if (B && initialSubtext != null) {
                        return initialSubtext;
                    }
                    if (isAdHocGroupCall) {
                        return e;
                    }
                    return s._("_j{\"*\":\"{number} members\",\"_1\":\"1 member\"}", [
                        s._plural(oe, "number")
                    ]);
                }
                return s._("{count} selected", [
                    s._param("count", ee_size)
                ]);
            };
            le = se();
            i[14] = oe;
            i[15] = initialSubtext;
            i[16] = isAdHocGroupCall;
            i[17] = ae;
            i[18] = B;
            i[19] = ee_size;
            i[20] = le;
        } else {
            le = i[20];
        }
        const ue = le;
        let ce;
        if (i[21] !== F || i[22] !== logger || i[23] !== origin) {
            ce = function(t) {
                const e = t.id.toString();
                te(function(t) {
                    const n = new Set(t);
                    if (n.has(e)) {
                        o("WAWebGroupCallPickerJourney").logGroupCallPickerSelection(logger, origin, false);
                        n.delete(e);
                    } else if (n.size + 1 < F) {
                        o("WAWebGroupCallPickerJourney").logGroupCallPickerSelection(logger, origin, true);
                        n.add(e);
                    } else {
                        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                            msg: s._("_j{\"*\":\"Can't select more than {max-participants} people for a call\"}", [
                                s._param("max-participants", F, [
                                    0,
                                    F
                                ])
                            ])
                        }));
                    }
                    return n;
                });
            };
            i[21] = F;
            i[22] = logger;
            i[23] = origin;
            i[24] = ce;
        } else {
            ce = i[24];
        }
        const de = ce;
        let me;
        if (i[25] !== B) {
            me = function() {
                W(!B);
            };
            i[25] = B;
            i[26] = me;
        } else {
            me = i[26];
        }
        const pe = me;
        let _e;
        if (i[27] !== ae || i[28] !== ee_size) {
            _e = ee_size === 0 || ae ? r("fbs")._("Call group") : s._("Call {count} selected", [
                s._param("count", ee_size)
            ]);
            i[27] = ae;
            i[28] = ee_size;
            i[29] = _e;
        } else {
            _e = i[29];
        }
        const fe = _e;
        let ge;
        if (i[30] !== F || i[31] !== callFromUi || i[32] !== chat || i[33] !== Y || i[34] !== isAdHocGroupCall || i[35] !== logger || i[36] !== onCallStart || i[37] !== origin || i[38] !== participantWids || i[39] !== ee) {
            ge = function(t) {
                const e = Y.filter((e)=>ee.has(e.id.toString()));
                const n = e.length + 1 > F;
                const r = n ? null : o("WAWebVoipCallIdProvider").generateAndStoreNewCallId();
                o("WAWebGroupCallPickerJourney").logGroupCallPickerConfirm(logger, origin, t, r);
                if (n) {
                    o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("_j{\"*\":\"Can't select more than {max-participants} people for a call\"}", [
                            s._param("max-participants", F, [
                                0,
                                F
                            ])
                        ])
                    }));
                    return;
                }
                const Y_length = Y.length;
                if (e.length > 0 && e.length < Y_length) {
                    const i = e.map(C);
                    o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(i, t, callFromUi ?? (Y_length > F ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.LARGE_GROUP_CHAT_PICKER : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER), o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED, {
                        entryTrust: "user_gesture"
                    });
                } else {
                    if (isAdHocGroupCall && participantWids != null) {
                        o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids([].concat(participantWids), t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED, {
                            entryTrust: "user_gesture"
                        });
                    } else {
                        o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(chat, t, callFromUi ?? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
                    }
                }
                onCallStart(t);
            };
            i[30] = F;
            i[31] = callFromUi;
            i[32] = chat;
            i[33] = Y;
            i[34] = isAdHocGroupCall;
            i[35] = logger;
            i[36] = onCallStart;
            i[37] = origin;
            i[38] = participantWids;
            i[39] = ee;
            i[40] = ge;
        } else {
            ge = i[40];
        }
        const he = ge;
        let ye;
        if (i[41] !== chat || i[42] !== de || i[43] !== ee) {
            ye = function(contact) {
                let e;
                const n = ee.has(contact.id.toString());
                const a = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(chat);
                const i = contact.id.toString();
                const Component = o("WAWebCheckBox.react").CheckBox;
                const Component_1 = o("WAWebText.react").WAWebTextTitle;
                const Component_2 = (e = o("WAWebFlex.react")).FlexRow;
                const Component_3 = o("WAWebCallDropdownMenuItems.react").ParticipantMenuItem;
                return <Component_3 key={i} optionId={`participant-${i}`} isSelected={n} onSelect={function() {
                    return de(contact);
                }}><Component_2 align="center" xstyle={[
                    h.paddingAll8,
                    h.participantRow
                ]}><e.FlexItem xstyle={h.checkboxContainer}><Component checked={n} theme={o("WAWebCheckBox.react").CheckboxTheme.OUTLINE} onChange={r("WAWebNoop")}/></e.FlexItem><e.FlexItem xstyle={h.contactImageContainer}>{c.jsx(r("WAWebContactImage.react"), {
                    contact,
                    size: 48,
                    loadPicture: true
                })}</e.FlexItem><e.FlexItem xstyle={[
                    h.paddingStart12,
                    h.participantNameContainer
                ]}><Component_1>{c.jsx(o("WAWebName.react").Name, {
                    contact,
                    showNotifyName: a,
                    elevatedPushNamesEnabled: a,
                    titlify: true,
                    ellipsify: true
                })}</Component_1></e.FlexItem></Component_2></Component_3>;
            };
            i[41] = chat;
            i[42] = de;
            i[43] = ee;
            i[44] = ye;
        } else {
            ye = i[44];
        }
        const Ce = ye;
        let be;
        if (i[45] !== chat || i[46] !== groupTitleOverride) {
            be = groupTitleOverride ?? o("WAWebGroupCallTitleUtils").getUnnamedGroupCallNameOverride(chat) ?? o("WAWebFrontendChatGetters").getFormattedTitle(chat);
            i[45] = chat;
            i[46] = groupTitleOverride;
            i[47] = be;
        } else {
            be = i[47];
        }
        const Se = be;
        const Re = useId();
        const Le = useId();
        let Ee;
        if (i[48] !== he || i[49] !== ie || i[50] !== isCallingDisabled || i[51] !== onActionTaken || i[52] !== Le || i[53] !== Re) {
            Ee = function(t) {
                const E1 = r(t ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react");
                const n = isCallingDisabled || ie;
                const a = t ? s._("Video") : s._("Voice");
                const Component = o("WAWebCallDropdownMenuItems.react").CallButtonMenuItem;
                const i = <Component optionId={t ? "video-call" : "voice-call"} testid={t ? "call-dropdown-video-button" : "call-dropdown-voice-button"} icon=<E1 iconXstyle={n ? h.callButtonMenuItemIconDisabled : h.callButtonMenuItemIcon}/> disabled={n} label={a} onSelect={function() {
                    onActionTaken();
                    he(t);
                }}/>;
                if (ie && !isCallingDisabled) {
                    const l = t ? s._("Select people to start a call") : s._("Select people to start a call");
                    const Component = r("WDSTooltip.react");
                    return <Component id={t ? Le : Re} label={l}>{i}</Component>;
                }
                return i;
            };
            i[48] = he;
            i[49] = ie;
            i[50] = isCallingDisabled;
            i[51] = onActionTaken;
            i[52] = Le;
            i[53] = Re;
            i[54] = Ee;
        } else {
            Ee = i[54];
        }
        const ke = Ee;
        let Ie;
        if (i[55] === Symbol.for("react.memo_cache_sentinel")) {
            Ie = [
                h.paddingAll8,
                h.dropdownContainer
            ];
            i[55] = Ie;
        } else {
            Ie = i[55];
        }
        let Te;
        if (i[56] !== chat || i[57] !== groupImage) {
            Te = groupImage ?? c.jsx(r("WAWebGroupChatImage.react"), {
                chat,
                theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_HEADER,
                regularChatImage: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: chat.id,
                    size: 40,
                    waitIdle: true
                }),
                selection: null,
                showCommunityInfo: false,
                size: 40
            });
            i[56] = chat;
            i[57] = groupImage;
            i[58] = Te;
        } else {
            Te = i[58];
        }
        let De;
        if (i[59] !== Te) {
            const Component = o("WAWebFlex.react").FlexItem;
            De = <Component xstyle={h.groupImageContainer}>{Te}</Component>;
            i[59] = Te;
            i[60] = De;
        } else {
            De = i[60];
        }
        let xe;
        if (i[61] === Symbol.for("react.memo_cache_sentinel")) {
            xe = [
                h.paddingStart12,
                h.groupTextContainer
            ];
            i[61] = xe;
        } else {
            xe = i[61];
        }
        let $e;
        if (i[62] !== Se) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            $e = <Component_1><Component textWrap="ellipsis">{Se}</Component></Component_1>;
            i[62] = Se;
            i[63] = $e;
        } else {
            $e = i[63];
        }
        let Pe;
        if (i[64] !== ue) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            Pe = <Component_1><Component>{ue}</Component></Component_1>;
            i[64] = ue;
            i[65] = Pe;
        } else {
            Pe = i[65];
        }
        let Ne;
        if (i[66] !== $e || i[67] !== Pe) {
            const Component = o("WAWebFlex.react").FlexColumn;
            Ne = <Component align="stretch" xstyle={xe} grow={1}>{$e}{Pe}</Component>;
            i[66] = $e;
            i[67] = Pe;
            i[68] = Ne;
        } else {
            Ne = i[68];
        }
        let Me;
        if (i[69] !== B) {
            const Component = o("WAWebFlex.react").FlexItem;
            Me = <Component xstyle={h.chevronContainer}>{B ? c.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
                height: 20
            }) : c.jsx(r("WDSIconIcChevronDown.react"), {
                width: 20,
                height: 20
            })}</Component>;
            i[69] = B;
            i[70] = Me;
        } else {
            Me = i[70];
        }
        let we;
        if (i[71] !== De || i[72] !== Ne || i[73] !== Me) {
            const Component = o("WAWebFlex.react").FlexRow;
            we = <Component align="center" grow={1} xstyle={h.firstRowContainer}>{De}{Ne}{Me}</Component>;
            i[71] = De;
            i[72] = Ne;
            i[73] = Me;
            i[74] = we;
        } else {
            we = i[74];
        }
        let Ae;
        if (i[75] !== pe || i[76] !== we) {
            const Component = o("WAWebCallDropdownMenuItems.react").ExpandableHeaderMenuItem;
            Ae = <Component optionId="group-header" onSelect={pe}>{we}</Component>;
            i[75] = pe;
            i[76] = we;
            i[77] = Ae;
        } else {
            Ae = i[77];
        }
        let Fe;
        if (i[78] !== Y || i[79] !== B || i[80] !== Ce) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            const Component_3 = o("WAWebFlex.react").FlexItem;
            Fe = B && <>{c.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: h.participantListHeaderBorder
            })}<Component_1 xstyle={[
                h.paddingAll8,
                h.participantListHeader
            ]}><Component weight="semibold">{r("fbs")._("Members")}</Component></Component_1>{Y.length > 0 && <Component_3><div className="x98rzlu x11emyvd x2lwn1j x6ikm8r x1odjw0f"><Component_2 grow={1} rowGap={2}>{Y.map((e)=>{
                const Component = r("CometVirtualization.react");
                return <Component key={e.id.toString()} unmountHiddenChildren pinChildrenOnInteraction={false}>{Ce(e)}</Component>;
            })}</Component_2></div></Component_3>}</>;
            i[78] = Y;
            i[79] = B;
            i[80] = Ce;
            i[81] = Fe;
        } else {
            Fe = i[81];
        }
        let Oe;
        if (i[82] !== fe || i[83] !== chat || i[84] !== he || i[85] !== hideActions || i[86] !== isAdHocGroupCall || i[87] !== ie || i[88] !== isCallingDisabled || i[89] !== B || i[90] !== isVideo || i[91] !== logger || i[92] !== onActionTaken || i[93] !== ke || i[94] !== A) {
            const Component = o("WAWebFlex.react").FlexItem;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            const Component_3 = o("WAWebText.react").WAWebTextTitle;
            const Component_4 = o("WAWebActionMenuItem.react").ActionMenuItem;
            const Component_5 = o("WAWebText.react").WAWebTextTitle;
            const Component_6 = o("WAWebActionMenuItem.react").ActionMenuItem;
            const Component_7 = o("WAWebFlex.react").FlexColumn;
            const Component_8 = o("WAWebCallDropdownMenuItems.react").CallButtonMenuItem;
            const Component_9 = o("WAWebFlex.react").FlexItem;
            const Component_10 = o("WAWebFlex.react").FlexRow;
            Oe = A ? <><Component_2 xstyle={h.callButtonsRow}><Component grow={1} xstyle={h.callButtonWrapper}>{ke(false)}</Component><Component_1 grow={1} xstyle={h.callButtonWrapper}>{ke(true)}</Component_1></Component_2>{!B && !isAdHocGroupCall && hideActions !== true && <><div className="x3x0x6p xjm9jq1 xav9cv8 x4tpdpg xh8yej3"/><Component_7 xstyle={h.actionsContainer}><Component_4 optionId="send-call-link" detailLeft={c.jsx(r("WDSIconIcLink.react"), {
                testid: "ic-link",
                xstyle: h.actionItemIcon
            })} primary=<Component_3 color="secondary">{s._("Send call link")}</Component_3> onSelect={function() {
                onActionTaken();
                logger.clickCreateVideoCallLinkChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER);
                o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebVoipCreateCallLinksPopupLoadable.react").WAWebVoipCreateCallLinksPopupLoadable, {
                    preCallLogger: logger,
                    targetChat: chat
                }));
            }}/>{f_isWindowsHybridEnabled?.() === true && <Component_6 optionId="schedule-call" detailLeft={c.jsx(r("WDSIconIcCalendarMonthFilled.react"), {
                xstyle: h.actionItemIcon
            })} primary=<Component_5 color="secondary">{s._("Schedule call")}</Component_5> onSelect={function() {
                onActionTaken();
                if (o("WAWebSharableEventGatingUtils").isSharableScheduledCallCreationEnabled(o("WAWebSharableEventGatingUtils").SharableScheduledCallCreationEntryPoint.NewCallPicker) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()) {
                    o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSchedulingCallsNotSupportedModal.react").SchedulingCallsNotSupportedModal, {}));
                } else {
                    logger.clickCreateEventChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER);
                    o("WAWebVoipCallsTabScheduleCallModal.react").handleScheduleCallForChat(chat);
                }
            }}/>}</Component_7></>}</> : <Component_10 xstyle={h.callButtonsRow}><Component_9 grow={1} xstyle={h.callButtonWrapper}><Component_8 optionId="call-button" testid="call-dropdown-button" icon={isVideo ? c.jsx(r("WDSIconIcVideocamFilled.react"), {
                iconXstyle: isCallingDisabled || ie ? h.callButtonMenuItemIconDisabled : h.callButtonMenuItemIcon
            }) : c.jsx(r("WDSIconIcCallFilled.react"), {
                iconXstyle: isCallingDisabled || ie ? h.callButtonMenuItemIconDisabled : h.callButtonMenuItemIcon
            })} disabled={isCallingDisabled || ie} label={fe} onSelect={function() {
                return he(isVideo);
            }}/></Component_9></Component_10>;
            i[82] = fe;
            i[83] = chat;
            i[84] = he;
            i[85] = hideActions;
            i[86] = isAdHocGroupCall;
            i[87] = ie;
            i[88] = isCallingDisabled;
            i[89] = B;
            i[90] = isVideo;
            i[91] = logger;
            i[92] = onActionTaken;
            i[93] = ke;
            i[94] = A;
            i[95] = Oe;
        } else {
            Oe = i[95];
        }
        let Be;
        if (i[96] !== Ae || i[97] !== Fe || i[98] !== Oe) {
            const Component = o("WAWebFlex.react").FlexColumn;
            Be = <Component grow={1} xstyle={Ie}>{Ae}{Fe}{Oe}</Component>;
            i[96] = Ae;
            i[97] = Fe;
            i[98] = Oe;
            i[99] = Be;
        } else {
            Be = i[99];
        }
        return Be;
    }
    function C(e) {
        return e.id;
    }
    function b(e) {
        return e.id.toString();
    }
    function v(e) {
        return o("WAWebContactCollection").ContactCollection.get(e.id);
    }
    function S(e) {
        return o("WAWebContactCollection").ContactCollection.get(e);
    }
    function R(e) {
        return !o("WAWebContactGetters").getIsMe(e) && o("WAWebShouldShowCallButtons").canBeCallParticipant(e.id);
    }
    function L(e) {
        if (e.isUser()) {
            return (o("WAWebLidMigrationUtils").toUserLid(e) ?? e).toString();
        }
        return e.toString();
    }
    l.default = YComponent;
}, 226);