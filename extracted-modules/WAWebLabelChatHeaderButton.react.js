__d("WAWebLabelChatHeaderButton.react", [
    "fbt",
    "WAJids",
    "WAWebCommonCTWADataSharing",
    "WAWebHeader.react",
    "WAWebLabelCollection",
    "WAWebLabels.react",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebLeadStageColors",
    "WAWebLeadStageNames",
    "WAWebLeadSublistGating",
    "WAWebListIconStacked.react",
    "WAWebListsIntroPopupLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNux",
    "WAWebSMBListsIntroPopup.react",
    "WAWebScreenWidthThresholds",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebTabOrder",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcSwitchAccount.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebLeadStageForChat",
    "useWAWebNux",
    "useWAWebPendingLeadStage",
    "useWAWebWindowSize"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect, useRef, useState } = c;
    const f = {
        button: {
            alignItems: "x6s0dn4",
            backgroundColor: "x1280gxy",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            borderStartStartRadius: "xhpystz",
            borderStartEndRadius: "xhmftvz",
            borderEndEndRadius: "x11v37me",
            borderEndStartRadius: "x1tw5c3r",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            cursor: "x1ypdohk",
            display: "x78zum5",
            columnGap: "x1s70e7g",
            height: "x10kmny3",
            paddingInlineStart: "x12w63v0",
            paddingInlineEnd: "x1nzty39",
            paddingLeft: null,
            paddingRight: null,
            ":hover_backgroundColor": "x1ubxc9n",
            $$css: true
        },
        icon: {
            color: "x14ug900",
            height: "x8lyb6r",
            width: "x1mzsije",
            $$css: true
        },
        switchAccountIcon: {
            color: "x14ug900",
            height: "x8lyb6r",
            marginInlineStart: "x150mmf0",
            width: "x1mzsije",
            $$css: true
        }
    };
    function GComponent(e) {
        const t = o("react-compiler-runtime").c(63);
        const e_chat = e.chat;
        const aRef = useRef(null);
        const i = useState(null);
        const anchor = i[0];
        const c = i[1];
        const d = useState(null);
        const g = d[0];
        const b = d[1];
        const v = r("useWAWebWindowSize")();
        const S = v.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD;
        const R = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS;
        const L = r("useWAWebNux")(R);
        const E = L[0];
        const k = L[1];
        let I;
        if (t[0] !== e_chat.labels) {
            I = e_chat.labels ?? [];
            t[0] = e_chat.labels;
            t[1] = I;
        } else {
            I = t[1];
        }
        let D;
        if (t[2] !== I) {
            D = I.map(h);
            t[2] = I;
            t[3] = D;
        } else {
            D = t[3];
        }
        let x;
        let $;
        if (t[4] !== e_chat.labels) {
            x = function() {
                return y(e_chat.labels);
            };
            $ = [
                e_chat.labels
            ];
            t[4] = e_chat.labels;
            t[5] = x;
            t[6] = $;
        } else {
            x = t[5];
            $ = t[6];
        }
        const P = r("useWAWebEventTargetValue")(o("WAWebLabelCollection").LabelCollection, D, x, $);
        let N;
        if (t[7] !== P) {
            N = P?.labelId != null && o("WAWebLabelCollection").LabelCollection.get(P.labelId)?.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
            t[7] = P;
            t[8] = N;
        } else {
            N = t[8];
        }
        const w = N;
        let A;
        if (t[9] !== e_chat.labels) {
            A = C(e_chat.labels);
            t[9] = e_chat.labels;
            t[10] = A;
        } else {
            A = t[10];
        }
        const F = A;
        let O;
        if (t[11] !== e_chat.id) {
            O = o("WAJids").unsafeCoerceToChatJid(e_chat.id.toString());
            t[11] = e_chat.id;
            t[12] = O;
        } else {
            O = t[12];
        }
        const B = O;
        let W;
        if (t[13] !== e_chat || t[14] !== F) {
            W = F != null && o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(e_chat);
            t[13] = e_chat;
            t[14] = F;
            t[15] = W;
        } else {
            W = t[15];
        }
        const q = r("useWAWebLeadStageForChat")(B, W);
        const { isResolved, stage } = q;
        const H = r("useWAWebPendingLeadStage")(B);
        const G = H ?? stage;
        const z = H != null || isResolved;
        let j;
        if (t[16] !== z || t[17] !== F || t[18] !== G) {
            j = F != null && z ? new Map([
                [
                    F,
                    o("WAWebLeadStageColors").getLeadStageDotColor(G ?? o("WAWebLeadStage").LeadStage.LEAD)
                ]
            ]) : null;
            t[16] = z;
            t[17] = F;
            t[18] = G;
            t[19] = j;
        } else {
            j = t[19];
        }
        const colorOverrides = j;
        let Q;
        if (t[20] !== colorOverrides) {
            Q = function(labelIds) {
                return <div className="x6s0dn4 x78zum5 x8lyb6r x150mmf0 x1n2onr6 x1mzsije">{u.jsx(r("WAWebListIconStacked.react"), {
                    colorOverrides,
                    labelIds
                })}</div>;
            };
            t[20] = colorOverrides;
            t[21] = Q;
        } else {
            Q = t[21];
        }
        const X = Q;
        let Y;
        if (t[22] !== z || t[23] !== w || t[24] !== P || t[25] !== G || t[26] !== S) {
            Y = function() {
                if (S) {
                    return null;
                }
                if (P?.name != null) {
                    if (w && z) {
                        return o("WAWebLeadStageNames").getLeadStageName(G ?? o("WAWebLeadStage").LeadStage.LEAD);
                    }
                    return P.name;
                }
                if (P?.count != null) {
                    return s._("{labelCount} selected", [
                        s._param("labelCount", P.count)
                    ]);
                }
                return s._("Add to list");
            };
            t[22] = z;
            t[23] = w;
            t[24] = P;
            t[25] = G;
            t[26] = S;
            t[27] = Y;
        } else {
            Y = t[27];
        }
        const J = Y;
        let Z;
        if (t[28] !== e_chat.labels || t[29] !== P || t[30] !== colorOverrides || t[31] !== X) {
            Z = function() {
                if (P?.labelId != null) {
                    return u.jsx(o("WAWebLabels.react").Labels, {
                        labels: [
                            P.labelId
                        ],
                        colorOverrides,
                        showName: false
                    });
                }
                if (P?.count != null && e_chat.labels != null) {
                    return X(e_chat.labels);
                }
                return u.jsx(r("WDSIconIcSwitchAccount.react"), {
                    iconXstyle: f.switchAccountIcon,
                    testid: "list-people"
                });
            };
            t[28] = e_chat.labels;
            t[29] = P;
            t[30] = colorOverrides;
            t[31] = X;
            t[32] = Z;
        } else {
            Z = t[32];
        }
        const ee = Z;
        let te;
        if (t[33] === Symbol.for("react.memo_cache_sentinel")) {
            te = function() {
                b(null);
            };
            t[33] = te;
        } else {
            te = t[33];
        }
        const requestDismiss = te;
        const reRef = useRef(r("WAWebNoop"));
        let oe;
        if (t[34] !== e_chat || t[35] !== anchor) {
            oe = function(t) {
                const e = babelHelpers.extends({}, o("WAWebHeader.react").createLabelsDropdownMenu(e_chat, function(e) {
                    return reRef.current(e);
                }, t), {
                    anchor,
                    anchorRef: aRef
                });
                b(e);
            };
            t[34] = e_chat;
            t[35] = anchor;
            t[36] = oe;
        } else {
            oe = t[36];
        }
        const ae = oe;
        let ie;
        let le;
        if (t[37] !== ae) {
            ie = function() {
                reRef.current = ae;
            };
            le = [
                ae
            ];
            t[37] = ae;
            t[38] = ie;
            t[39] = le;
        } else {
            ie = t[38];
            le = t[39];
        }
        useEffect(ie, le);
        let se;
        if (t[40] !== e_chat || t[41] !== g || t[42] !== ae || t[43] !== E || t[44] !== k) {
            se = function(t) {
                t.preventDefault();
                t.stopPropagation();
                if (e_chat) {
                    if (g != null) {
                        requestDismiss();
                    } else if (E) {
                        const E1 = o("WAWebMobilePlatforms").isSMB() ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
                        o("WAWebModalManager").ModalManager.open(<E1 onContinue={function() {
                            k();
                            r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
                                cb: function() {
                                    ae();
                                },
                                chats: [
                                    e_chat
                                ],
                                entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
                                target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
                            });
                        }}/>);
                    } else {
                        r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
                            cb: function() {
                                ae();
                            },
                            chats: [
                                e_chat
                            ],
                            entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
                            target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
                        });
                    }
                }
            };
            t[40] = e_chat;
            t[41] = g;
            t[42] = ae;
            t[43] = E;
            t[44] = k;
            t[45] = se;
        } else {
            se = t[45];
        }
        const ue = se;
        let ce;
        if (g != null) {
            let de;
            if (t[46] !== g) {
                const Component = o("WAWebUimUie.react").UIE;
                de = <Component displayName="LabelChatDropdownMenu" escapable popable dismissOnWindowResize requestDismiss={requestDismiss}>{u.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: g
                })}</Component>;
                t[46] = g;
                t[47] = de;
            } else {
                de = t[47];
            }
            ce = de;
        }
        let me;
        if (t[48] === Symbol.for("react.memo_cache_sentinel")) {
            me = {
                className: "x150mmf0"
            };
            t[48] = me;
        } else {
            me = t[48];
        }
        let pe;
        if (t[49] === Symbol.for("react.memo_cache_sentinel")) {
            pe = s._("Add to list");
            t[49] = pe;
        } else {
            pe = t[49];
        }
        let _e;
        if (t[50] !== ee) {
            _e = ee();
            t[50] = ee;
            t[51] = _e;
        } else {
            _e = t[51];
        }
        let fe;
        if (t[52] !== J || t[53] !== S) {
            const Component = r("WDSText.react");
            fe = !S && <Component type="Body2Emphasized" textAlign="center" colorName="contentDefault">{J()}</Component>;
            t[52] = J;
            t[53] = S;
            t[54] = fe;
        } else {
            fe = t[54];
        }
        let ge;
        if (t[55] === Symbol.for("react.memo_cache_sentinel")) {
            ge = u.jsx(r("WDSIconIcArrowDropDown.react"), {
                iconXstyle: f.icon
            });
            t[55] = ge;
        } else {
            ge = t[55];
        }
        let he;
        if (t[56] !== ue || t[57] !== _e || t[58] !== fe) {
            const Component = r("WAWebUnstyledButton.react");
            he = <div {...babelHelpers.extends({
                ref: c
            }, me, {
                children: <Component ref={aRef} testid="label-chat-header-button" dataTab={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} xstyle={f.button} onClick={ue} aria-label={pe}>{_e}{fe}{ge}</Component>
            })}/>;
            t[56] = ue;
            t[57] = _e;
            t[58] = fe;
            t[59] = he;
        } else {
            he = t[59];
        }
        let ye;
        if (t[60] !== he || t[61] !== ce) {
            ye = <>{he}{ce}</>;
            t[60] = he;
            t[61] = ce;
            t[62] = ye;
        } else {
            ye = t[62];
        }
        return ye;
    }
    function h(e) {
        return `label_updated_${e}`;
    }
    function y(labels) {
        if (labels == null || labels.length === 0) {
            return null;
        }
        if (labels.length === 1) {
            const labelId = labels[0];
            const n = o("WAWebLabelCollection").LabelCollection.get(labelId);
            if (n == null) {
                return null;
            }
            return {
                name: n.name,
                labelId
            };
        }
        return {
            count: labels.length
        };
    }
    function C(labels) {
        return (labels ?? []).find((e)=>o("WAWebLabelCollection").LabelCollection.get(e)?.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID);
    }
    l.LabelChatHeaderButton = GComponent;
}, 226);