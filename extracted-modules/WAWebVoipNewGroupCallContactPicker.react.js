__d("WAWebVoipNewGroupCallContactPicker.react", [
    "fbt",
    "WAWebCallCollection",
    "WAWebCallUserJourneyInCallAction",
    "WAWebCallUserJourneyLogger",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebDrawerManager",
    "WAWebGroupMetadataCollection",
    "WAWebModalManager",
    "WAWebMultiSelectContactList.react",
    "WAWebNoop",
    "WAWebSelectModal.react",
    "WAWebShouldShowCallButtons",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipDarkThemeRoot.react",
    "WAWebVoipStartCall",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumSubSurface",
    "WAWebWid",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "WDSTooltip.react",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebVoipCanStartCall"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } = c;
    const y = {
        addButton: {
            flexGrow: "x1iyjqo2",
            height: "x1vqgdyp",
            maxWidth: "x1ncir08",
            $$css: true
        }
    };
    function C(e) {
        const t = o("react-compiler-runtime").c(8);
        const n = e.isAddingToExistingCall === true;
        let a;
        let i;
        if (t[0] !== n) {
            a = function() {
                if (n) {
                    o("WAWebCallUserJourneyInCallAction").logInCallAction(o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_ADD_PARTICIPANT, o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_HEADER);
                }
            };
            i = [
                n
            ];
            t[0] = n;
            t[1] = a;
            t[2] = i;
        } else {
            a = t[1];
            i = t[2];
        }
        useEffect(a, i);
        let l;
        if (t[3] !== e) {
            l = <B1Component {...babelHelpers.extends({}, e)}/>;
            t[3] = e;
            t[4] = l;
        } else {
            l = t[4];
        }
        const s = l;
        let c;
        if (t[5] !== s || t[6] !== e.isAddingToExistingCall) {
            const Component = r("WAWebVoipDarkThemeRoot.react");
            c = e.isAddingToExistingCall === true ? <Component>{s}</Component> : s;
            t[5] = s;
            t[6] = e.isAddingToExistingCall;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    function B1Component(e) {
        const t = o("react-compiler-runtime").c(101);
        const { chat, isAddingToExistingCall, isGroupMemberSelection, isVideoCall, onCallStart, onClose, participantWids, showCallTypeButtons } = e;
        const b = isAddingToExistingCall === undefined ? false : isAddingToExistingCall;
        const D = isGroupMemberSelection === undefined ? false : isGroupMemberSelection;
        const x = isVideoCall === undefined ? false : isVideoCall;
        const $ = showCallTypeButtons === undefined ? false : showCallTypeButtons;
        const P = useContext(r("WAWebVoipUiPopoutWindowContext"));
        const targetWindow = P.isContextInPopoutWindow && P.windowEl != null ? P.windowEl : undefined;
        const maxItems = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants") - 1;
        const w = o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(chat);
        const A = b ? true : w;
        let F;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            F = [];
            t[0] = F;
        } else {
            F = t[0];
        }
        const ORef = useRef(F);
        const BRef = useRef(false);
        let W;
        if (t[1] !== chat.id || t[2] !== D || t[3] !== $) {
            W = function() {
                return !D && $ && o("WAWebContactCollection").ContactCollection.get(chat.id) != null;
            };
            t[1] = chat.id;
            t[2] = D;
            t[3] = $;
            t[4] = W;
        } else {
            W = t[4];
        }
        const q = useState(W);
        const U = q[0];
        const V = q[1];
        let H;
        if (t[5] !== onClose) {
            H = function() {
                if (onClose != null) {
                    onClose();
                } else {
                    o("WAWebModalManager").ModalManager.close();
                }
            };
            t[5] = onClose;
            t[6] = H;
        } else {
            H = t[6];
        }
        const G = H;
        let z;
        if (t[7] !== b) {
            z = function(t) {
                if (!b) {
                    return false;
                }
                const activeCall = r("WAWebCallCollection").activeCall;
                if (activeCall == null) {
                    return false;
                }
                const n = r("WAWebWid").user(t);
                if (activeCall.isGroup) {
                    const o = activeCall.groupCallParticipantsConnected;
                    if (o != null) {
                        return o.some((e)=>r("WAWebWid").user(e) === n);
                    }
                    return false;
                }
                const e_peerJid = activeCall.peerJid;
                if (e_peerJid != null) {
                    return r("WAWebWid").user(e_peerJid) === n;
                }
                return false;
            };
            t[7] = b;
            t[8] = z;
        } else {
            z = t[8];
        }
        const j = z;
        let K;
        if (t[9] !== j) {
            K = function(t) {
                return j(t.id);
            };
            t[9] = j;
            t[10] = K;
        } else {
            K = t[10];
        }
        const Q = K;
        let X;
        if (t[11] !== j) {
            X = function(t) {
                if (j(t)) {
                    return s._("Already in the call");
                }
                return null;
            };
            t[11] = j;
            t[12] = X;
        } else {
            X = t[12];
        }
        const customSecondaryText = X;
        let J;
        if (t[13] !== chat.id || t[14] !== D || t[15] !== participantWids) {
            e: {
                if (!D) {
                    J = null;
                    break e;
                }
                const Z = T;
                if (participantWids != null && participantWids.length > 0) {
                    let ee;
                    if (t[17] !== participantWids) {
                        const te = r("compactMap")(participantWids, I);
                        ee = te.filter(Z);
                        t[17] = participantWids;
                        t[18] = ee;
                    } else {
                        ee = t[18];
                    }
                    J = ee;
                    break e;
                }
                const ne = r("WAWebGroupMetadataCollection").get(chat.id.toString());
                if (ne && ne.participants) {
                    const re = ne.participants.toArray();
                    const oe = r("compactMap")(re, k);
                    J = oe.filter(Z);
                    break e;
                }
                let ae;
                if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
                    ae = [];
                    t[19] = ae;
                } else {
                    ae = t[19];
                }
                J = ae;
            }
            t[13] = chat.id;
            t[14] = D;
            t[15] = participantWids;
            t[16] = J;
        } else {
            J = t[16];
        }
        const ie = J;
        let le;
        if (t[20] !== chat.id || t[21] !== D || t[22] !== $) {
            le = function() {
                if (D) {
                    return [];
                }
                if ($) {
                    const e = o("WAWebContactCollection").ContactCollection.get(chat.id);
                    if (e != null) {
                        return [
                            e
                        ];
                    }
                }
                return [];
            };
            t[20] = chat.id;
            t[21] = D;
            t[22] = $;
            t[23] = le;
        } else {
            le = t[23];
        }
        const getInitialItems = le;
        let ue;
        if (t[24] !== chat || t[25] !== G || t[26] !== ie || t[27] !== D || t[28] !== maxItems || t[29] !== onCallStart || t[30] !== participantWids) {
            ue = function(t) {
                const ORef_current = ORef.current;
                if (ORef_current.length === 0) {
                    o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Please select at least one contact to add")
                    }));
                    return;
                }
                if (ORef_current.length > maxItems) {
                    o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("_j{\"*\":\"Can't select more than {max-participants} people for a call\"}", [
                            s._param("max-participants", maxItems, [
                                0,
                                maxItems
                            ])
                        ])
                    }));
                    return;
                }
                const r = ORef_current.filter(E).map(L);
                const a = D && participantWids == null && ie != null && r.length === ie.length;
                if (a) {
                    o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(chat, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
                } else {
                    o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(r, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED, {
                        entryTrust: "user_gesture"
                    });
                }
                G();
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                if (onCallStart) {
                    onCallStart();
                }
            };
            t[24] = chat;
            t[25] = G;
            t[26] = ie;
            t[27] = D;
            t[28] = maxItems;
            t[29] = onCallStart;
            t[30] = participantWids;
            t[31] = ue;
        } else {
            ue = t[31];
        }
        const ce = ue;
        let de;
        if (t[32] !== G || t[33] !== onCallStart) {
            de = function() {
                const ORef_current = ORef.current;
                if (ORef_current.length === 0) {
                    o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Please select at least one contact to add")
                    }));
                    return;
                }
                o("WAWebCallUserJourneyInCallAction").logInCallAction(o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_CONFIRM_ADD_PARTICIPANT, o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER);
                BRef.current = true;
                ORef_current.filter(R).forEach(S);
                G();
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                if (onCallStart) {
                    onCallStart();
                }
            };
            t[32] = G;
            t[33] = onCallStart;
            t[34] = de;
        } else {
            de = t[34];
        }
        const me = de;
        let pe;
        if (t[35] !== maxItems) {
            pe = function({ selectedItems }) {
                ORef.current = selectedItems;
                V(selectedItems.length > 0);
                if (selectedItems.length > maxItems) {
                    o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("_j{\"*\":\"Can't select more than {max-participants} people for a call\"}", [
                            s._param("max-participants", maxItems, [
                                0,
                                maxItems
                            ])
                        ])
                    }));
                }
            };
            t[35] = maxItems;
            t[36] = pe;
        } else {
            pe = t[36];
        }
        const onSelectionChanged = pe;
        const feRef = useRef(false);
        let ge;
        if (t[37] !== b) {
            ge = function(t) {
                if (!(!b || feRef.current || t.length === 0)) {
                    feRef.current = true;
                    o("WAWebCallUserJourneyInCallAction").logInCallAction(o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TYPE_CHARACTER, o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER);
                }
            };
            t[37] = b;
            t[38] = ge;
        } else {
            ge = t[38];
        }
        const onSearchTermChanged = ge;
        const yeRef = useRef(false);
        let Ce;
        if (t[39] !== b) {
            Ce = function() {
                if (!(!b || yeRef.current)) {
                    yeRef.current = true;
                    o("WAWebCallUserJourneyInCallAction").logInCallAction(o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.OPEN_SEARCH_BAR, o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER);
                }
            };
            t[39] = b;
            t[40] = Ce;
        } else {
            Ce = t[40];
        }
        const onSearchMouseDown = Ce;
        let ve;
        let Se;
        if (t[41] !== b) {
            ve = function() {
                if (b) {
                    return function() {
                        if (!BRef.current) {
                            o("WAWebCallUserJourneyInCallAction").logInCallActionOnTeardown(o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE.TAP_DISMISS_BUTTON, o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER);
                        }
                    };
                }
            };
            Se = [
                b
            ];
            t[41] = b;
            t[42] = ve;
            t[43] = Se;
        } else {
            ve = t[42];
            Se = t[43];
        }
        useEffect(ve, Se);
        const Re = A && !U;
        const Le = useId();
        const Ee = useId();
        let ke;
        if (t[44] === Symbol.for("react.memo_cache_sentinel")) {
            ke = s._("Voice");
            t[44] = ke;
        } else {
            ke = t[44];
        }
        let Ie;
        if (t[45] !== ce) {
            Ie = function() {
                return ce(false);
            };
            t[45] = ce;
            t[46] = Ie;
        } else {
            Ie = t[46];
        }
        const Te = !A || !U;
        let secondaryButtonProps;
        if (t[47] !== Ie || t[48] !== Te) {
            secondaryButtonProps = {
                label: ke,
                variant: "filled",
                Icon: r("WDSIconIcCallFilled.react"),
                onPress: Ie,
                disabled: Te
            };
            t[47] = Ie;
            t[48] = Te;
            t[49] = secondaryButtonProps;
        } else {
            secondaryButtonProps = t[49];
        }
        let xe;
        if (t[50] === Symbol.for("react.memo_cache_sentinel")) {
            xe = s._("Video");
            t[50] = xe;
        } else {
            xe = t[50];
        }
        let $e;
        if (t[51] !== ce) {
            $e = function() {
                return ce(true);
            };
            t[51] = ce;
            t[52] = $e;
        } else {
            $e = t[52];
        }
        const Pe = !A || !U;
        let primaryButtonProps;
        if (t[53] !== $e || t[54] !== Pe) {
            primaryButtonProps = {
                label: xe,
                variant: "filled",
                Icon: r("WDSIconIcVideocamFilled.react"),
                onPress: $e,
                disabled: Pe
            };
            t[53] = $e;
            t[54] = Pe;
            t[55] = primaryButtonProps;
        } else {
            primaryButtonProps = t[55];
        }
        let Me;
        if (t[56] !== secondaryButtonProps || t[57] !== primaryButtonProps) {
            Me = u.jsx(r("WDSButtonGroup.react"), {
                orientation: "horizontal",
                width: "hug",
                secondaryButtonProps,
                primaryButtonProps
            });
            t[56] = secondaryButtonProps;
            t[57] = primaryButtonProps;
            t[58] = Me;
        } else {
            Me = t[58];
        }
        const we = Me;
        let Ae;
        if (t[59] !== me || t[60] !== ce || t[61] !== b || t[62] !== x) {
            Ae = b ? me : function() {
                return ce(x);
            };
            t[59] = me;
            t[60] = ce;
            t[61] = b;
            t[62] = x;
            t[63] = Ae;
        } else {
            Ae = t[63];
        }
        let Fe;
        if (t[64] === Symbol.for("react.memo_cache_sentinel")) {
            Fe = s._("Add");
            t[64] = Fe;
        } else {
            Fe = t[64];
        }
        const Oe = !A || !U;
        let Be;
        if (t[65] !== Ae || t[66] !== Oe) {
            const Component = r("WDSButton.react");
            Be = <Component type="default" variant="filled" size="medium" widthMode="flexible" onPress={Ae} label={Fe} xstyle={y.addButton} disabled={Oe}/>;
            t[65] = Ae;
            t[66] = Oe;
            t[67] = Be;
        } else {
            Be = t[67];
        }
        const We = Be;
        let qe;
        if (t[68] !== We || t[69] !== Ee || t[70] !== Le || t[71] !== we || t[72] !== $ || t[73] !== Re) {
            const Component = r("WDSTooltip.react");
            const Component_1 = r("WDSTooltip.react");
            qe = $ ? <div className="x6s0dn4 xx42vgk x13fuv20 x178xt8z x78zum5 x1q0g3np x2lah0s x1qvou4u x1s70e7g x13a6bvl x1p57kb1 xvpt6g3 xyo0t3i xb0esv5">{Re ? <Component id={Le} label={s._("Select people to start a call")}>{we}</Component> : we}</div> : <div className="x6s0dn4 xx42vgk x13fuv20 x178xt8z x78zum5 x1q0g3np x2lah0s x1qvou4u x1s70e7g x13a6bvl x1p57kb1 xvpt6g3 xyo0t3i xb0esv5">{Re ? <Component_1 id={Ee} label={s._("Select people to start a call")}>{We}</Component_1> : We}</div>;
            t[68] = We;
            t[69] = Ee;
            t[70] = Le;
            t[71] = we;
            t[72] = $;
            t[73] = Re;
            t[74] = qe;
        } else {
            qe = t[74];
        }
        const previewComponent = qe;
        let Ve;
        if (t[75] !== b || t[76] !== $) {
            Ve = function() {
                if ($ || !b) {
                    return s._("New group call");
                }
                return s._("Add people");
            };
            t[75] = b;
            t[76] = $;
            t[77] = Ve;
        } else {
            Ve = t[77];
        }
        const He = Ve;
        const Ge = v;
        const customGetKnownContacts = D ? Ge : undefined;
        let je;
        if (t[78] !== He) {
            je = He();
            t[78] = He;
            t[79] = je;
        } else {
            je = t[79];
        }
        let maxItemsExceedErrorMsg;
        if (t[80] !== maxItems) {
            maxItemsExceedErrorMsg = s._("_j{\"*\":\"Can't select more than {max-participants} people for a call\"}", [
                s._param("max-participants", maxItems, [
                    0,
                    maxItems
                ])
            ]);
            t[80] = maxItems;
            t[81] = maxItemsExceedErrorMsg;
        } else {
            maxItemsExceedErrorMsg = t[81];
        }
        const Qe = ie ?? undefined;
        let noResultsText;
        if (t[82] !== D) {
            noResultsText = D ? s._("No results") : undefined;
            t[82] = D;
            t[83] = noResultsText;
        } else {
            noResultsText = t[83];
        }
        let Ye;
        if (t[84] === Symbol.for("react.memo_cache_sentinel")) {
            Ye = {
                surface: "unknown",
                viewName: "voip-group-call-picker"
            };
            t[84] = Ye;
        } else {
            Ye = t[84];
        }
        let Je;
        if (t[85] !== customSecondaryText || t[86] !== G || t[87] !== previewComponent || t[88] !== customGetKnownContacts || t[89] !== getInitialItems || t[90] !== onSearchMouseDown || t[91] !== onSearchTermChanged || t[92] !== onSelectionChanged || t[93] !== Q || t[94] !== maxItems || t[95] !== targetWindow || t[96] !== je || t[97] !== maxItemsExceedErrorMsg || t[98] !== Qe || t[99] !== noResultsText) {
            const Component = o("WAWebSelectModal.react").SelectModal;
            Je = <Component title={je} listType={o("WAWebSelectModal.react").ListType.ParticipantManageModal} maxItems={maxItems} maxItemsExceedErrorMsg={maxItemsExceedErrorMsg} onCancel={G} onConfirm={r("WAWebNoop")} onSearchMouseDown={onSearchMouseDown} onSearchTermChanged={onSearchTermChanged} onSelectionChanged={onSelectionChanged} getInitialItems={getInitialItems} previewComponent={previewComponent} hideFooter disableContactPillAutoScroll isDisabled={Q} isSelected={Q} customSecondaryText={customSecondaryText} contacts={Qe} customGetKnownContacts={customGetKnownContacts} noResultsText={noResultsText} targetWindow={targetWindow} tsNavigationData={Ye}/>;
            t[85] = customSecondaryText;
            t[86] = G;
            t[87] = previewComponent;
            t[88] = customGetKnownContacts;
            t[89] = getInitialItems;
            t[90] = onSearchMouseDown;
            t[91] = onSearchTermChanged;
            t[92] = onSelectionChanged;
            t[93] = Q;
            t[94] = maxItems;
            t[95] = targetWindow;
            t[96] = je;
            t[97] = maxItemsExceedErrorMsg;
            t[98] = Qe;
            t[99] = noResultsText;
            t[100] = Je;
        } else {
            Je = t[100];
        }
        return Je;
    }
    function v(e) {
        const t = [];
        if (e.length > 0) {
            t.push({
                itemKey: o("WAWebMultiSelectContactList.react").ContactListSection.MEMBERS,
                type: o("WAWebMultiSelectContactList.react").ContactListSection.MEMBERS
            });
            t.push(...D(e));
        }
        return t;
    }
    function S(e) {
        o("WAWebVoipStartCall").inviteToCall(e.id);
    }
    function R(e) {
        return e instanceof r("WAWebContactModel");
    }
    function L(e) {
        return e.id;
    }
    function E(e) {
        return e instanceof r("WAWebContactModel");
    }
    function k(e) {
        return o("WAWebContactCollection").ContactCollection.get(e.id);
    }
    function I(e) {
        return o("WAWebContactCollection").ContactCollection.get(e);
    }
    function T(e) {
        return !o("WAWebContactGetters").getIsMe(e) && o("WAWebShouldShowCallButtons").canBeCallParticipant(e.id);
    }
    function D(e) {
        return e.map((e)=>({
                itemKey: e.id.toString(),
                type: o("WAWebMultiSelectContactList.react").Row.ROW_CONTACTS,
                data: e,
                isUnknownContact: false
            }));
    }
    l.default = C;
}, 226);