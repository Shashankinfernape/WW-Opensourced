__d("WAWebMixedMultiSelectBar.react", [
    "fbt",
    "WAWebBizChatAssignmentAiRepliesModal.react",
    "WAWebBizChatAssignmentForMultipleChatsAiRepliesModal.react",
    "WAWebBizChatAssignmentModal.react",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
    "WAWebChatModel",
    "WAWebCommonCTWADataSharing",
    "WAWebManageLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebQplFlowWrapper",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSIconIcClose.react",
    "WDSIconIcDelete.react",
    "WDSIconIcLabelOff.react",
    "WDSIconIcSwitchAccount.react",
    "WDSIconWdsIcTransferOwnership.react",
    "qpl",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebSourceSnapshot",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useEffect = c.useEffect;
    const p = {
        multiselectIcon: {
            flex: "x1okw0bk",
            paddingTop: "x1y1aw1k",
            paddingInlineEnd: "xf159sx",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xmzvs34",
            $$css: true
        },
        multiselectIconChatList: {
            color: "xhslqc4 xg8cxui",
            $$css: true
        },
        multiselectIconDrawerHeader: {
            color: "x1riek7e xmzs2yd xpcgjw",
            $$css: true
        }
    };
    const _ = r("qpl")._(701183376, "3423");
    function f(t) {
        const n = o("react-compiler-runtime").c(58);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { labelEditEnabled, multiSelectEntryPoint, onCancel, onDelete, onRemoveLabel, selectedModels } = l;
        const S = labelEditEnabled === undefined ? false : labelEditEnabled;
        const R = multiSelectEntryPoint === o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatAssignment;
        const modelsToUpdate = r("useWAWebSourceSnapshot")(selectedModels, "all", h);
        const L_length = modelsToUpdate.length;
        let k;
        if (n[3] !== modelsToUpdate || n[4] !== onCancel) {
            k = function() {
                const Component = o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable;
                o("WAWebModalManager").ModalManager.open(<Component onLabelUpdateComplete={onCancel} modelsToUpdate={modelsToUpdate} onClose={o("WAWebModalManager").closeModalManager} entryPoint={o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS}/>);
            };
            n[3] = modelsToUpdate;
            n[4] = onCancel;
            n[5] = k;
        } else {
            k = n[5];
        }
        const cb = k;
        let T;
        if (n[6] !== cb || n[7] !== modelsToUpdate) {
            T = function() {
                const e = modelsToUpdate.reduce(g, []);
                r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
                    cb,
                    chats: e,
                    entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
                    target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
                });
            };
            n[6] = cb;
            n[7] = modelsToUpdate;
            n[8] = T;
        } else {
            T = n[8];
        }
        const D = T;
        const x = r("useWAWebStableCallback")(onCancel);
        let $;
        let P;
        if (n[9] !== x || n[10] !== L_length) {
            $ = function() {
                if (L_length === 0) {
                    x();
                }
            };
            P = [
                L_length,
                x
            ];
            n[9] = x;
            n[10] = L_length;
            n[11] = $;
            n[12] = P;
        } else {
            $ = n[11];
            P = n[12];
        }
        c_useEffect($, P);
        const L_length_1 = modelsToUpdate.length;
        let M;
        let w;
        let A;
        let F;
        const O = a.theme === "drawer-header";
        const B = a.theme === "chatlist-panel";
        let W = null;
        if (O) {
            W = p.multiselectIconDrawerHeader;
        } else if (B) {
            W = p.multiselectIconChatList;
        }
        if (R && L_length_1 > 0) {
            let q;
            if (n[13] !== modelsToUpdate || n[14] !== onCancel) {
                q = function() {
                    const e = modelsToUpdate;
                    o("WAWebQplFlowWrapper").QPL.markerStart(_, {
                        annotations: {
                            string: {
                                CHAT_ASSIGNMENT_ENTRY_POINT: "MULTI_SELECT"
                            }
                        }
                    });
                    if (o("WAWebChatAssignmentUtils").canAssignAllChats(e) === false) {
                        if (e.length === 1) {
                            o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizChatAssignmentAiRepliesModal.react"), {
                                chat: e[0]
                            }));
                            return;
                        }
                        o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizChatAssignmentForMultipleChatsAiRepliesModal.react"), {}));
                        return;
                    }
                    const Component = r("WAWebBizChatAssignmentModal.react");
                    o("WAWebModalManager").ModalManager.open(<Component chats={e} onSave={onCancel} entryPoint={o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.MULTI_SELECT}/>);
                };
                n[13] = modelsToUpdate;
                n[14] = onCancel;
                n[15] = q;
            } else {
                q = n[15];
            }
            const U = q;
            const V = !L_length_1;
            let H;
            if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
                H = s._("Assign chat");
                n[16] = H;
            } else {
                H = n[16];
            }
            let G;
            if (n[17] !== U || n[18] !== W || n[19] !== V) {
                G = <Y4Component testid="btn-icon-assign-chat" Icon={r("WDSIconWdsIcTransferOwnership.react")} disabled={V} title={H} onClick={U} xstyle={W}/>;
                n[17] = U;
                n[18] = W;
                n[19] = V;
                n[20] = G;
            } else {
                G = n[20];
            }
            M = G;
        }
        if (S && L_length_1 > 0) {
            let z;
            if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
                z = s._("Add to list");
                n[21] = z;
            } else {
                z = n[21];
            }
            const j = z;
            let wdsIcon;
            if (n[22] === Symbol.for("react.memo_cache_sentinel")) {
                wdsIcon = d.jsx(r("WDSIconIcSwitchAccount.react"), {
                    testid: "list-people"
                });
                n[22] = wdsIcon;
            } else {
                wdsIcon = n[22];
            }
            const Q = !L_length_1;
            let X;
            if (n[23] !== D || n[24] !== W || n[25] !== Q) {
                X = <Y4Component testid="btn-icon-add-label" wdsIcon={wdsIcon} disabled={Q} title={j} onClick={D} xstyle={W}/>;
                n[23] = D;
                n[24] = W;
                n[25] = Q;
                n[26] = X;
            } else {
                X = n[26];
            }
            w = X;
        }
        if (onRemoveLabel && L_length_1 > 0) {
            let Y;
            if (n[27] === Symbol.for("react.memo_cache_sentinel")) {
                Y = s._("Remove from a list");
                n[27] = Y;
            } else {
                Y = n[27];
            }
            const J = Y;
            const Z = !L_length_1;
            let ee;
            if (n[28] !== W || n[29] !== onRemoveLabel || n[30] !== Z) {
                ee = <Y4Component testid="btn-icon-remove-label" Icon={r("WDSIconIcLabelOff.react")} disabled={Z} title={J} onClick={onRemoveLabel} xstyle={W}/>;
                n[28] = W;
                n[29] = onRemoveLabel;
                n[30] = Z;
                n[31] = ee;
            } else {
                ee = n[31];
            }
            F = ee;
        }
        if (onDelete && L_length_1 > 0) {
            let te;
            if (n[32] === Symbol.for("react.memo_cache_sentinel")) {
                te = s._("Delete list");
                n[32] = te;
            } else {
                te = n[32];
            }
            const ne = te;
            const re = !L_length_1;
            let oe;
            if (n[33] !== W || n[34] !== onDelete || n[35] !== re) {
                oe = <Y4Component testid="btn-icon-delete-label" Icon={r("WDSIconIcDelete.react")} disabled={re} title={ne} onClick={onDelete} xstyle={W}/>;
                n[33] = W;
                n[34] = onDelete;
                n[35] = re;
                n[36] = oe;
            } else {
                oe = n[36];
            }
            A = oe;
        }
        let ae;
        if (n[37] !== O) {
            ae = ({
                0: {
                    className: "x1n2onr6 xgxk9ee x1o0tod x1yg4o9v x9f619 x78zum5 x6s0dn4 xh8yej3 xdiz9cm x889kno x1a8lsjc xf7dkkf xv54qhq xjbqb8w"
                },
                1: {
                    className: "x1n2onr6 xgxk9ee x1o0tod x1yg4o9v x9f619 x78zum5 x6s0dn4 xh8yej3 xsvpx8p x4i7bpe x18d9i69 x1xnnf8n x1gx403c x17t9dm2 x1280gxy"
                }
            })[!!O << 0];
            n[37] = O;
            n[38] = ae;
        } else {
            ae = n[38];
        }
        let ie;
        if (n[39] !== W || n[40] !== a.onCancel) {
            ie = <Y4Component testid="btn-icon-cancel" Icon={r("WDSIconIcClose.react")} onClick={a.onCancel} xstyle={W}/>;
            n[39] = W;
            n[40] = a.onCancel;
            n[41] = ie;
        } else {
            ie = n[41];
        }
        let le;
        if (n[42] !== O) {
            le = ({
                0: {
                    className: "x12lumcd x1sa5p1d xyqm7xq x7yx35o xuxw1ft"
                },
                1: {
                    className: "x12lumcd x1sa5p1d xyqm7xq x7yx35o xuxw1ft x17t9dm2"
                }
            })[!!O << 0];
            n[42] = O;
            n[43] = le;
        } else {
            le = n[43];
        }
        let se;
        if (n[44] !== L_length_1) {
            se = s._("_j{\"*\":\"{count} selected\",\"_1\":\"1 selected\"}", [
                s._plural(L_length_1, "count")
            ]);
            n[44] = L_length_1;
            n[45] = se;
        } else {
            se = n[45];
        }
        let ue;
        if (n[46] !== le || n[47] !== se) {
            ue = <div {...babelHelpers.extends({}, le, {
                children: se
            })}/>;
            n[46] = le;
            n[47] = se;
            n[48] = ue;
        } else {
            ue = n[48];
        }
        let ce;
        if (n[49] !== M || n[50] !== w || n[51] !== A || n[52] !== i || n[53] !== F || n[54] !== ue || n[55] !== ae || n[56] !== ie) {
            ce = <div {...babelHelpers.extends({}, ae, {
                ref: i,
                children: [
                    ie,
                    ue,
                    M,
                    w,
                    A,
                    F
                ]
            })}/>;
            n[49] = M;
            n[50] = w;
            n[51] = A;
            n[52] = i;
            n[53] = F;
            n[54] = ue;
            n[55] = ae;
            n[56] = ie;
            n[57] = ce;
        } else {
            ce = n[57];
        }
        return ce;
    }
    function g(e, t) {
        if (t instanceof o("WAWebChatModel").Chat) {
            e.push(t);
        }
        return e;
    }
    function h(e) {
        return e.getSelected();
    }
    function Y4Component(e) {
        const t = o("react-compiler-runtime").c(13);
        const { Icon, directional, disabled, onClick, testid, title, wdsIcon, xstyle } = e;
        const f = testid ?? "btn-icon";
        let g;
        if (t[0] !== xstyle) {
            g = (u || (u = r("stylex"))).props(p.multiselectIcon, xstyle);
            t[0] = xstyle;
            t[1] = g;
        } else {
            g = t[1];
        }
        const h = disabled === true;
        let y;
        if (t[2] !== Icon || t[3] !== directional || t[4] !== wdsIcon) {
            y = wdsIcon ?? (Icon != null && <Icon directional={directional}/>);
            t[2] = Icon;
            t[3] = directional;
            t[4] = wdsIcon;
            t[5] = y;
        } else {
            y = t[5];
        }
        let C;
        if (t[6] !== onClick || t[7] !== f || t[8] !== g || t[9] !== h || t[10] !== y || t[11] !== title) {
            C = <button {...babelHelpers.extends({
                "data-testid": f
            }, g, {
                title,
                onClick,
                disabled: h,
                children: y
            })}/>;
            t[6] = onClick;
            t[7] = f;
            t[8] = g;
            t[9] = h;
            t[10] = y;
            t[11] = title;
            t[12] = C;
        } else {
            C = t[12];
        }
        return C;
    }
    l.default = f;
}, 226);