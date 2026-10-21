__d("WAWebLabelsDropdown.react", [
    "fbt",
    "WAJids",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebApplyLeadStageSublistAction",
    "WAWebCTWADataSharingModel",
    "WAWebChatThreadLogging",
    "WAWebCheckBox.react",
    "WAWebCommonCTWADataSharing",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebCustomLabels3pdSignalUtils",
    "WAWebDomScroll",
    "WAWebDrawerManager",
    "WAWebDropdownItem.react",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelFlowLoadable",
    "WAWebLabels.react",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebLeadStageStore",
    "WAWebLeadSublistGating",
    "WAWebLeadSublistRows.react",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebListsUtil",
    "WAWebNoop",
    "WAWebSchemaLabel",
    "WAWebSmb3pdConversionSignalAction",
    "WAWebSmbMarkAsXLabelAction",
    "WAWebStateUtils",
    "WAWebSyncLeadStageToProfile",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamLabelEventReporter",
    "WAWebWamSmbListEventReporter",
    "WDSIconIcAdd.react",
    "WDSIconIcSwitchAccount.react",
    "countWhere",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebLeadStageForChat"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useMemo, useRef, useState } = d;
    const h = {
        labelIcon: {
            height: "xxk0z11",
            width: "xvy4d1p",
            marginTop: "xav9cv8",
            $$css: true
        },
        footerIconSize: {
            height: "xmix8c7",
            width: "x1xp8n7a",
            $$css: true
        }
    };
    function YComponent(e) {
        const t = o("react-compiler-runtime").c(101);
        const { chat, onRequestReopen, pendingNewListId } = e;
        let l;
        if (t[0] !== chat) {
            l = o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(chat);
            t[0] = chat;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = l;
        let d;
        if (t[2] !== u) {
            d = o("WAWebLabelCollection").LabelCollection.filter((e)=>{
                if (e.name) {
                    return e.isActive !== false && (e.type === o("WAWebSchemaLabel").ListType.CUSTOM || e.type === o("WAWebSchemaLabel").ListType.PREDEFINED || e.type === o("WAWebSchemaLabel").ListType.LEAD && u);
                }
                return false;
            });
            o("WAWebListUtils").sortLabels(d);
            const m = d.findIndex(L);
            if (u && m !== -1) {
                d.push(d.splice(m, 1)[0]);
            }
            t[2] = u;
            t[3] = d;
        } else {
            d = t[3];
        }
        const _ = d;
        let y;
        if (t[4] !== chat.labels) {
            y = chat.labels || [];
            t[4] = chat.labels;
            t[5] = y;
        } else {
            y = t[5];
        }
        let k;
        if (t[6] !== y) {
            k = new Set(y);
            t[6] = y;
            t[7] = k;
        } else {
            k = t[7];
        }
        const I = k;
        let T;
        if (t[8] !== I || t[9] !== _) {
            T = {};
            _.forEach((e)=>{
                T[e.id] = I.has(e.id);
            });
            t[8] = I;
            t[9] = _;
            t[10] = T;
        } else {
            T = t[10];
        }
        const D = T;
        let x;
        e: {
            if (pendingNewListId == null) {
                x = D;
                break e;
            }
            let $;
            if (t[11] !== D || t[12] !== pendingNewListId) {
                $ = babelHelpers.extends({}, D, {
                    [pendingNewListId]: true
                });
                t[11] = D;
                t[12] = pendingNewListId;
                t[13] = $;
            } else {
                $ = t[13];
            }
            x = $;
        }
        const M = useState(x);
        const w = M[0];
        const A = M[1];
        let F;
        if (t[14] !== _) {
            F = _.find(R);
            t[14] = _;
            t[15] = F;
        } else {
            F = t[15];
        }
        const O = F;
        const isSublistEnabled = u && O != null;
        let W;
        if (t[16] !== chat.id) {
            W = o("WAJids").unsafeCoerceToChatJid(chat.id.toString());
            t[16] = chat.id;
            t[17] = W;
        } else {
            W = t[17];
        }
        const q = W;
        const U = r("useWAWebLeadStageForChat")(q, isSublistEnabled);
        const { isResolved, stage } = U;
        let G;
        if (t[18] !== chat || t[19] !== isSublistEnabled) {
            G = isSublistEnabled ? o("WAWebSyncLeadStageToProfile").getLeadProfileChatJid(chat) : null;
            t[18] = chat;
            t[19] = isSublistEnabled;
            t[20] = G;
        } else {
            G = t[20];
        }
        const profileChatJid = G;
        const j = stage ?? o("WAWebLeadStage").LeadStage.LEAD;
        const K = useState(null);
        const pickedStage = K[0];
        const X = K[1];
        const selectedStage = pickedStage ?? j;
        const currentStage = O != null && w[O.id] === true ? selectedStage : null;
        const ZRef = useRef(null);
        const eeRef = useRef(null);
        let te;
        let ne;
        if (t[21] !== pendingNewListId) {
            te = function() {
                if (pendingNewListId != null) {
                    const e = window.requestAnimationFrame(function() {
                        const eeRef_current = eeRef.current;
                        const ZRef_current = ZRef.current;
                        if (eeRef_current != null && ZRef_current != null) {
                            o("WAWebDomScroll").scrollIntoViewIfNeeded(eeRef_current, false, ZRef_current);
                        }
                    });
                    return function() {
                        return window.cancelAnimationFrame(e);
                    };
                }
            };
            ne = [
                pendingNewListId
            ];
            t[21] = pendingNewListId;
            t[22] = te;
            t[23] = ne;
        } else {
            te = t[22];
            ne = t[23];
        }
        useEffect(te, ne);
        let re;
        if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
            re = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
            t[24] = re;
        } else {
            re = t[24];
        }
        const isDataSharingEnabled = re === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
        let ae;
        let ie;
        if (t[25] !== chat.id) {
            ae = function() {
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(chat.id.toString()).then(S);
            };
            ie = [
                chat.id
            ];
            t[25] = chat.id;
            t[26] = ae;
            t[27] = ie;
        } else {
            ae = t[26];
            ie = t[27];
        }
        useEffect(ae, ie);
        const leRef = useRef(D);
        const seRef = useRef(w);
        let ue;
        if (t[28] !== pendingNewListId) {
            ue = pendingNewListId != null ? new Set([
                pendingNewListId
            ]) : new Set;
            t[28] = pendingNewListId;
            t[29] = ue;
        } else {
            ue = t[29];
        }
        const ceRef = useRef(ue);
        const leadListId = O?.id;
        let me;
        if (t[30] !== q || t[31] !== isResolved || t[32] !== isSublistEnabled || t[33] !== pickedStage || t[34] !== profileChatJid || t[35] !== stage || t[36] !== selectedStage || t[37] !== leadListId) {
            me = {
                chatJid: q,
                isStageResolved: isResolved,
                isSublistEnabled,
                leadListId,
                pickedStage,
                profileChatJid,
                selectedStage,
                storedStage: stage
            };
            t[30] = q;
            t[31] = isResolved;
            t[32] = isSublistEnabled;
            t[33] = pickedStage;
            t[34] = profileChatJid;
            t[35] = stage;
            t[36] = selectedStage;
            t[37] = leadListId;
            t[38] = me;
        } else {
            me = t[38];
        }
        const peRef = useRef(me);
        let _e;
        let fe;
        if (t[39] !== w) {
            _e = function() {
                seRef.current = w;
            };
            fe = [
                w
            ];
            t[39] = w;
            t[40] = _e;
            t[41] = fe;
        } else {
            _e = t[40];
            fe = t[41];
        }
        useEffect(_e, fe);
        let ge;
        if (t[42] !== q || t[43] !== isResolved || t[44] !== isSublistEnabled || t[45] !== O?.id || t[46] !== pickedStage || t[47] !== profileChatJid || t[48] !== stage || t[49] !== selectedStage) {
            ge = function() {
                peRef.current = {
                    chatJid: q,
                    isStageResolved: isResolved,
                    isSublistEnabled,
                    leadListId: O?.id,
                    pickedStage,
                    profileChatJid,
                    selectedStage,
                    storedStage: stage
                };
            };
            t[42] = q;
            t[43] = isResolved;
            t[44] = isSublistEnabled;
            t[45] = O?.id;
            t[46] = pickedStage;
            t[47] = profileChatJid;
            t[48] = stage;
            t[49] = selectedStage;
            t[50] = ge;
        } else {
            ge = t[50];
        }
        const he = O?.id;
        let ye;
        if (t[51] !== q || t[52] !== isResolved || t[53] !== isSublistEnabled || t[54] !== pickedStage || t[55] !== profileChatJid || t[56] !== stage || t[57] !== selectedStage || t[58] !== he) {
            ye = [
                q,
                isResolved,
                isSublistEnabled,
                he,
                pickedStage,
                profileChatJid,
                stage,
                selectedStage
            ];
            t[51] = q;
            t[52] = isResolved;
            t[53] = isSublistEnabled;
            t[54] = pickedStage;
            t[55] = profileChatJid;
            t[56] = stage;
            t[57] = selectedStage;
            t[58] = he;
            t[59] = ye;
        } else {
            ye = t[59];
        }
        useEffect(ge, ye);
        let Ce;
        let be;
        if (t[60] !== chat) {
            Ce = function() {
                const leRef_current = leRef.current;
                const ceRef_current = ceRef.current;
                return function() {
                    const a = [];
                    const i = new Set([].concat(Object.keys(leRef_current), Object.keys(seRef.current)));
                    i.forEach((t)=>{
                        const n = leRef_current[t] || false;
                        const r = seRef.current[t] || false;
                        if (n !== r) {
                            a.push({
                                id: t,
                                type: r ? "add" : "remove"
                            });
                        }
                    });
                    if (a.length > 0) {
                        o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(a, [
                            chat
                        ]);
                    }
                    E(peRef.current, seRef.current);
                    if (a.length > 0) {
                        const l = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(chat);
                        const s = r("countWhere")(Object.keys(leRef_current), function(t) {
                            return leRef_current[t];
                        });
                        const u = r("countWhere")(a, v);
                        const c = r("countWhere")(a, b);
                        const d = s + u - c;
                        const m = l != null ? "ctwa_ad" : undefined;
                        o("WAWebChatThreadLogging").getChatThreadIDHMAC(chat.id.toString()).then((e)=>{
                            a.forEach(({ id, type })=>{
                                const a = o("WAWebLabelCollection").LabelCollection.get(id);
                                if (a) {
                                    const i = o("WAWebLabelConstants").mapLabelNameToPredefinedId(a.name);
                                    const l = i ?? a.predefinedId;
                                    o("WAWebWamLabelEventReporter").logLabelOperationEvent(type === "add" ? o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD : o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.DELETE, undefined, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT, e ?? undefined, l ?? undefined, l != null ? undefined : a.name, m, o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.CHAT_HEADER);
                                }
                            });
                            o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_LABEL_COUNT, d, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT, e ?? undefined, undefined, undefined, m, o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.CHAT_HEADER);
                        });
                        a.forEach(({ id, type })=>{
                            const i = o("WAWebLabelCollection").LabelCollection.get(id);
                            if (i != null) {
                                const listId = Number(id);
                                const s = String(listId);
                                o("WAWebListsActions").logUpdateMembersPerChat([
                                    chat
                                ], {
                                    entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER,
                                    listId,
                                    customListTitle: i.name ?? "",
                                    listsApplied: type === "add" ? s : undefined,
                                    listsRemoved: type === "remove" ? s : undefined
                                });
                            }
                        });
                    }
                    if (ceRef_current.size > 0) {
                        const p = Array.from(ceRef_current);
                        o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels([
                            chat
                        ], p, isDataSharingEnabled);
                        o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats({
                            isDataSharingEnabled,
                            labelIds: p,
                            models: [
                                chat
                            ]
                        });
                        o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(p, [
                            chat
                        ], isDataSharingEnabled);
                    }
                };
            };
            be = [
                chat,
                isDataSharingEnabled
            ];
            t[60] = chat;
            t[61] = Ce;
            t[62] = be;
        } else {
            Ce = t[61];
            be = t[62];
        }
        useEffect(Ce, be);
        let ve;
        if (t[63] !== chat || t[64] !== w) {
            ve = function(t) {
                const e = w[t] || false;
                const r = !e;
                A(function(e) {
                    return babelHelpers.extends({}, e, {
                        [t]: r
                    });
                });
                const a = [
                    {
                        id: t,
                        type: r ? "add" : "remove"
                    }
                ];
                o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(a, [
                    chat
                ]);
                if (r) {
                    ceRef.current.add(t);
                } else {
                    ceRef.current.delete(t);
                }
            };
            t[63] = chat;
            t[64] = w;
            t[65] = ve;
        } else {
            ve = t[65];
        }
        const Se = ve;
        let Re;
        if (t[66] !== q || t[67] !== Se || t[68] !== w || t[69] !== O?.id) {
            Re = function(t) {
                const e = O?.id;
                if (e != null) {
                    const n = w[e] === true;
                    if (t == null) {
                        X(null);
                        o("WAWebLeadStageStore").clearPendingLeadStage(q);
                        if (n) {
                            Se(e);
                        }
                        return;
                    }
                    X(t);
                    o("WAWebLeadStageStore").publishPendingLeadStage(q, t);
                    if (!n) {
                        Se(e);
                    }
                }
            };
            t[66] = q;
            t[67] = Se;
            t[68] = w;
            t[69] = O?.id;
            t[70] = Re;
        } else {
            Re = t[70];
        }
        O?.id;
        const onSelectStage = Re;
        let Ee;
        if (t[71] !== onRequestReopen) {
            Ee = function(t) {
                o("WAWebDrawerManager").closeDrawerLeft();
                onRequestReopen?.(t);
            };
            t[71] = onRequestReopen;
            t[72] = Ee;
        } else {
            Ee = t[72];
        }
        const ke = Ee;
        let Ie;
        if (t[73] !== chat || t[74] !== ke) {
            Ie = function() {
                if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
                    o("WAWebListsUtil").showMaxListsModal();
                    return;
                }
                const Component = r("WAWebCreateOrEditListDrawer.react");
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onBack={ke} onClose={ke} entryPoint={o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER} preselectedChats={[
                    o("WAWebStateUtils").unproxy(chat)
                ]}/>);
            };
            t[73] = chat;
            t[74] = ke;
            t[75] = Ie;
        } else {
            Ie = t[75];
        }
        const Te = Ie;
        const action = C;
        let xe;
        if (t[76] !== Se || t[77] !== onSelectStage || t[78] !== isResolved || t[79] !== isSublistEnabled || t[80] !== _ || t[81] !== w || t[82] !== pendingNewListId || t[83] !== pickedStage || t[84] !== currentStage) {
            xe = _.map((e)=>{
                const checked = w[e.id] || false;
                if (isSublistEnabled && e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID) {
                    const Component = r("WAWebLeadSublistRows.react");
                    return <Component key={`lead_stage_row_${e.id}`} currentStage={currentStage} isStageResolved={isResolved || pickedStage != null || currentStage == null} onSelectStage={onSelectStage}/>;
                }
                const Component = o("WAWebCheckBox.react").CheckBox;
                const Component_1 = o("WAWebDropdownItem.react").DropdownItem;
                return <Component_1 key={`label_item_${e.id}`} testid={`label_item_${e.id}`} action={function() {
                    Se(e.id);
                    return false;
                }}><div ref={e.id === pendingNewListId ? eeRef : undefined} className="x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew"><div className="x2i0jwv x6ikm8r x10wlt62 x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i xav9cv8">{c.jsx(o("WAWebLabels.react").Labels, {
                    labels: [
                        e.id
                    ],
                    showName: true,
                    theme: "label-filter",
                    iconXstyle: h.labelIcon
                })}</div><div className="x1uvdrpn"><Component checked={checked} onChange={r("WAWebNoop")}/></div></div></Component_1>;
            });
            t[76] = Se;
            t[77] = onSelectStage;
            t[78] = isResolved;
            t[79] = isSublistEnabled;
            t[80] = _;
            t[81] = w;
            t[82] = pendingNewListId;
            t[83] = pickedStage;
            t[84] = currentStage;
            t[85] = xe;
        } else {
            xe = t[85];
        }
        const $e = xe;
        let Pe;
        if (t[86] === Symbol.for("react.memo_cache_sentinel")) {
            Pe = {
                className: "xuyqlj2 x1odjw0f"
            };
            t[86] = Pe;
        } else {
            Pe = t[86];
        }
        let Ne;
        if (t[87] !== $e) {
            Ne = <div {...babelHelpers.extends({
                ref: ZRef,
                "data-testid": "label-chat-header-dropdown-items"
            }, Pe, {
                children: $e
            })}/>;
            t[87] = $e;
            t[88] = Ne;
        } else {
            Ne = t[88];
        }
        let Me;
        if (t[89] !== _.length) {
            Me = ({
                0: {},
                1: {
                    className: "x13fuv20 x178xt8z xx42vgk x1380le5 x16ovd2e"
                }
            })[(_.length > 0) << 0];
            t[89] = _.length;
            t[90] = Me;
        } else {
            Me = t[90];
        }
        let we;
        if (t[91] === Symbol.for("react.memo_cache_sentinel")) {
            we = <div className="x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew"><div className="x14ug900 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x2lah0s x1sbwfh8 x16q7b9a">{c.jsx(r("WDSIconIcAdd.react"), {
                iconXstyle: h.footerIconSize
            })}</div><span className="x1f6kntn xggjnk3 x14ug900 x1wbi8v6">{s._("New list")}</span></div>;
            t[91] = we;
        } else {
            we = t[91];
        }
        let Ae;
        if (t[92] !== Te) {
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            Ae = <Component action={Te} testid="labels-dropdown-new-list">{we}</Component>;
            t[92] = Te;
            t[93] = Ae;
        } else {
            Ae = t[93];
        }
        let Fe;
        if (t[94] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            Fe = <Component action={action} testid="labels-dropdown-manage-lists"><div className="x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew"><div className="x14ug900 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x2lah0s x1sbwfh8 x16q7b9a">{c.jsx(r("WDSIconIcSwitchAccount.react"), {
                iconXstyle: h.footerIconSize,
                testid: "list-people"
            })}</div><span className="x1f6kntn xggjnk3 x14ug900 x1wbi8v6">{s._("Manage lists")}</span></div></Component>;
            t[94] = Fe;
        } else {
            Fe = t[94];
        }
        let Oe;
        if (t[95] !== Me || t[96] !== Ae) {
            Oe = <div {...babelHelpers.extends({}, Me, {
                children: [
                    Ae,
                    Fe
                ]
            })}/>;
            t[95] = Me;
            t[96] = Ae;
            t[97] = Oe;
        } else {
            Oe = t[97];
        }
        let Be;
        if (t[98] !== Ne || t[99] !== Oe) {
            Be = <>{Ne}{Oe}</>;
            t[98] = Ne;
            t[99] = Oe;
            t[100] = Be;
        } else {
            Be = t[100];
        }
        return Be;
    }
    function C() {
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
            isInitialStep: true,
            entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER
        }));
    }
    function b({ type }) {
        return type === "remove";
    }
    function v({ type }) {
        return type === "add";
    }
    function S(e) {
        o("WAWebWamSmbListEventReporter").logSmbListEvent({
            labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
            labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_CHAT_DIALOG,
            updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER,
            threadIdHmac: e ?? undefined
        });
    }
    function R(e) {
        return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
    }
    function L(e) {
        return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
    }
    function E({ chatJid, isStageResolved, isSublistEnabled, leadListId, pickedStage, profileChatJid, selectedStage, storedStage }, n) {
        if (!isSublistEnabled || leadListId == null) {
            o("WAWebLeadStageStore").clearPendingLeadStage(chatJid);
            return;
        }
        if (pickedStage == null) {
            o("WAWebLeadStageStore").clearPendingLeadStage(chatJid);
            return;
        }
        if (n[leadListId] !== true) {
            o("WAWebLeadStageStore").clearPendingLeadStage(chatJid);
            return;
        }
        if (isStageResolved && storedStage != null && selectedStage === storedStage) {
            o("WAWebLeadStageStore").clearPendingLeadStage(chatJid);
            return;
        }
        o("WAWebApplyLeadStageSublistAction").applyLeadStageSublist(chatJid, selectedStage, storedStage, {
            logLeadSignal: true
        }).then(()=>o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(profileChatJid, selectedStage), (t)=>{
            o("WAWebLeadStageStore").clearPendingLeadStage(chatJid);
            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Lead stage could not be updated")
            }));
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] lead stage sub-list write failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("lead-stage-sublist-apply-fail");
        });
    }
    l.default = YComponent;
}, 226);