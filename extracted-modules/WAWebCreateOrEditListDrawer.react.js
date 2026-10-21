__d("WAWebCreateOrEditListDrawer.react", [
    "fbt",
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebABProps",
    "WAWebAEOnboardedState",
    "WAWebAddToFavoritesAction",
    "WAWebAddToListModal.react",
    "WAWebApplyLeadStageSublistAction",
    "WAWebAutomaticEventsUserJourneyWamEvent",
    "WAWebButton.react",
    "WAWebCTWAConstants",
    "WAWebCellFrame.react",
    "WAWebCellV2.react",
    "WAWebChatGetters",
    "WAWebChatSearchFilters",
    "WAWebChatstateInfo.react",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebCustomerManagerGating",
    "WAWebDBFavoriteDatabaseApi",
    "WAWebDOIntroPopup.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebErrorBoundary.react",
    "WAWebFbtCommon",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebGroupChatImage.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebLabelCollection",
    "WAWebLabelEditInput.react",
    "WAWebLeadStageChatCounts",
    "WAWebLeadStageNames",
    "WAWebLeadStageStore",
    "WAWebLeadSublistGating",
    "WAWebListIcon.react",
    "WAWebListNameValidation",
    "WAWebListUtils",
    "WAWebListsActions",
    "WAWebListsLogging",
    "WAWebListsUtil",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNonEmptyString",
    "WAWebNoop",
    "WAWebNux",
    "WAWebOrderConfirmDiscardModal",
    "WAWebRemoveFromFavoritesAction",
    "WAWebSchemaLabel",
    "WAWebStackedCirclesImage.react",
    "WAWebSuggestedLists.react",
    "WAWebSyncLeadStageToProfile",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebWamEnumAutomaticEventsTargetComponentEnum",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumListAction",
    "WAWebWamEnumListUpdateUserJourneyAction",
    "WAWebWamEnumSmbListFeatureNameType",
    "WAWebWamEnumSmbListSurfaceType",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamSmbListEventReporter",
    "WDSBanner.react",
    "WDSButton.react",
    "WDSFontTokenStyles",
    "WDSIconIcAdd.react",
    "WDSIconIcDelete.react",
    "WDSIconIcMoreVert.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "WDSToast.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebNux",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = [
        "ref"
    ];
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = p;
    const { useEffect, useMemo, useRef, useState } = f;
    const b = {
        sectionHeader: {
            height: "x1gnnpzl",
            paddingBottom: "x18d9i69",
            $$css: true
        },
        sectionHeaderTopPadding: {
            paddingTop: "x1sk1jro",
            $$css: true
        },
        chatsListPadding: {
            paddingInlineStart: "xe2zdcy",
            $$css: true
        },
        buttonPadding: {
            paddingInlineStart: "xzm8p2n",
            $$css: true
        },
        inputRowPadding: {
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        noShrink: {
            flexShrink: "x2lah0s",
            $$css: true
        },
        ctaPadding: {
            paddingBottom: "xvpt6g3",
            paddingTop: "x14a8spa",
            $$css: true
        },
        educationalTextPadding: {
            paddingTop: "x1p57kb1",
            $$css: true
        },
        paddingHoriz24: {
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        presetDescription: {
            paddingTop: "x1p57kb1",
            paddingBottom: "xvpt6g3",
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            flexShrink: "x2lah0s",
            $$css: true
        },
        disableButtonRow: {
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            paddingTop: "x1p57kb1",
            paddingBottom: "xvpt6g3",
            flexShrink: "x2lah0s",
            $$css: true
        },
        mutedTextColor: {
            color: "xhslqc4",
            $$css: true
        },
        secondaryText: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    function useV() {
        const e = o("react-compiler-runtime").c(2);
        const t = useState(S);
        const n = t[0];
        let a;
        if (e[0] !== n) {
            a = function() {
                if (n != null && document.body != null && document.body.contains(n)) {
                    n.focus();
                }
            };
            e[0] = n;
            e[1] = a;
        } else {
            a = e[1];
        }
        r("useWAWebOnUnmount")(a);
    }
    function S() {
        const document_activeElement = document.activeElement;
        if (document_activeElement instanceof HTMLElement) {
            return document_activeElement;
        }
        return null;
    }
    function RComponent(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, c);
        useV();
        const { entryPoint, leadStage, listId, onBack, onClose, preselectedChats } = i;
        const R = useState(false);
        const spinner = R[0];
        const $ = R[1];
        const P = o("WAWebMobilePlatforms").isSMB();
        const N = o("WDSToast.react").useWDSToast();
        const N_showToast = N.showToast;
        const isEditMode = listId != null;
        const A = useMemo(function() {
            if (listId == null) {
                const e = preselectedChats != null ? [].concat(preselectedChats) : [];
                return [
                    null,
                    e,
                    null,
                    null
                ];
            }
            const t = o("WAWebLabelCollection").LabelCollection.get(listId);
            if (t == null) {
                return [
                    null,
                    [],
                    null,
                    null
                ];
            }
            const n = leadStage == null ? o("WAWebListsUtil").getAllChatsInList(t) : o("WAWebLeadStageChatCounts").getLeadListChatsAtStage(t, leadStage);
            const a = r("isStringNullOrEmpty")(t.name) ? null : t.name;
            const t_colorIndex = t.colorIndex;
            return [
                t,
                n,
                a,
                t_colorIndex
            ];
        }, [
            leadStage,
            listId,
            preselectedChats
        ]);
        const F = A[0];
        const O = A[1];
        const B = A[2];
        const W = A[3];
        const q = P && F?.isImmutable === true;
        const U = o("WAWebListUtils").isBuiltInList(F?.type) || o("WAWebListUtils").isAiList(F?.type);
        const V = o("WAWebListUtils").hasFixedIdentity(F);
        const H = F?.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING;
        const G = F?.type === o("WAWebSchemaLabel").ListType.FAVORITES;
        const z = !P && !U;
        const j = o("WAWebListUtils").getPresetListHelperText(F?.type);
        const K = useState(B);
        const Q = K[0];
        const X = K[1];
        const Y = useState(W);
        const J = Y[0];
        const Z = Y[1];
        const ee = useState(O);
        const te = ee[0];
        const ne = ee[1];
        const re = !H || te.length > 0;
        const oe = useState(0);
        const ae = oe[0];
        const ie = oe[1];
        const le = useState(false);
        const se = le[0];
        const ue = le[1];
        const ceRef = useRef(false);
        const de = useState("");
        const filterText = de[0];
        const pe = de[1];
        const _e = z && te.length === 0;
        const fe = useMemo(function() {
            return new (r("WAWebFlatListController"));
        }, []);
        useEffect(function() {
            if (!isEditMode) {
                o("WAWebListsLogging").logListUpdateUserJorney({
                    listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
                    userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.START,
                    entryPoint
                });
            }
        }, [
            isEditMode,
            entryPoint
        ]);
        useEffect(function() {
            if (isEditMode && listId != null) {
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
                    labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.EDIT_LABEL_DIALOG,
                    updateEntryPoint: entryPoint,
                    listId: Number(listId)
                });
            } else if (!isEditMode) {
                o("WAWebWamSmbListEventReporter").logSmbListEvent({
                    labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
                    labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.ADD_LABEL_DIALOG,
                    updateEntryPoint: entryPoint
                });
            }
        }, [
            isEditMode,
            listId,
            entryPoint
        ]);
        const ge = function() {
            if (F != null) {
                o("WAWebListsUtil").openListDisableConfirmPopup(F, onClose);
            }
        };
        const he = function(t, n) {
            X((t || "").trim());
            Z(n);
            if (P) {
                pe(t);
                if ((t ?? "").trim() !== (Q ?? "")) {
                    ue(false);
                    ceRef.current = false;
                }
            }
        };
        const ye = function(t) {
            X(t.displayName?.toString() ?? t.name);
            Z(t.colorIndex);
            ue(true);
            ceRef.current = true;
            ie(function(e) {
                return e + 1;
            });
            o("WAWebWamSmbListEventReporter").logSmbListEvent({
                labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.SUGGESTION_CLICKED,
                updateEntryPoint: entryPoint,
                predefinedId: t.predefinedId
            });
        };
        const Ce = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
                    return false;
                }
                const e = o("WAWebListsUtil").getTwoArraysDifference(O, te);
                const { addedItems, removedItems } = e;
                if (addedItems.length === 0 && removedItems.length === 0) {
                    return false;
                }
                if (addedItems.length > 0) {
                    const i = yield o("WAWebDBFavoriteDatabaseApi").getAllFavorites();
                    const l = o("WAWebABProps").getABPropConfigValue("favorites_limit") ?? 100;
                    const u = i.length - removedItems.length + addedItems.length;
                    if (u > l) {
                        o("WAWebAddToFavoritesAction").showFavoritesLimitExceededPopup(l);
                        return false;
                    }
                }
                yield removedItems.reduce((acc, removedItem)=>acc.then(()=>o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(removedItem.id, {
                            suppressToast: true,
                            entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.FILTER_MANAGE_FAVORITE_ACTION
                        })), (m || (m = n("Promise"))).resolve());
                if (addedItems.length > 0) {
                    yield o("WAWebAddToFavoritesAction").addToFavoritesAction(addedItems.map((e)=>e.id), {
                        suppressToast: true,
                        entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.FILTER_MANAGE_FAVORITE_ACTION
                    });
                }
                N_showToast({
                    type: "success",
                    message: s._("List saved")
                });
                return true;
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const be = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (leadStage == null) {
                    return false;
                }
                if (!o("WAWebCustomerManagerGating").customerManagerEnabled()) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[customer_manager] lead stage save blocked: Customer Manager is off"
                    ]))).tags("lists").sendLogs("lead-stage-save-without-contact-manager");
                    return false;
                }
                const t = o("WAWebListsUtil").getTwoArraysDifference(O, te);
                const { addedItems, removedItems } = t;
                const a = addedItems.filter((e)=>o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(e));
                const chatsBeforeUpdate = F != null ? o("WAWebListsUtil").getAllChatsInList(F) : [];
                let c = false;
                if (removedItems.length > 0 && F != null) {
                    o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([
                        {
                            id: F.id,
                            type: "remove"
                        }
                    ], removedItems, {
                        suppressSuccessToast: true
                    });
                    c = true;
                }
                const d = yield I(a, leadStage);
                if (F != null) {
                    k({
                        leadList: F,
                        entryPoint,
                        chatsBeforeUpdate,
                        stagedChats: a.filter((e)=>!d.includes(e)),
                        removedChats: removedItems
                    });
                }
                if (d.length > 0) {
                    N_showToast({
                        type: "error",
                        message: s._("Couldn't update lead stage. Try again.")
                    });
                    return false;
                }
                const m = addedItems.length - a.length;
                if (m > 0) {
                    N_showToast({
                        type: "error",
                        message: s._("_j{\"*\":\"Some chats were not added: they cannot have a lead stage.\",\"_1\":\"A chat was not added: it cannot have a lead stage.\"}", [
                            s._plural(m)
                        ])
                    });
                } else if (c || a.length > 0) {
                    N_showToast({
                        type: "success",
                        message: s._("List saved")
                    });
                }
                return true;
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const ve = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (Q != null) {
                    if (_e) {
                        o("WAWebListsUtil").showMinChatsModal();
                        return;
                    }
                    $(true);
                    try {
                        let e;
                        if (listId != null && F != null) {
                            if (leadStage != null) {
                                const t = yield be();
                                if (!t) {
                                    return;
                                }
                            } else if (G) {
                                const n = yield Ce();
                                if (!n) {
                                    return;
                                }
                            } else {
                                const r = Q !== F.name || J !== F.colorIndex;
                                yield o("WAWebListsActions").editListAction({
                                    newName: Q,
                                    newColor: J,
                                    labelModel: F,
                                    updatedAssociatedChats: te,
                                    entryPoint
                                });
                                if (r) {
                                    N_showToast({
                                        type: "success",
                                        message: s._("List saved")
                                    });
                                }
                            }
                        } else {
                            o("WAWebWamSmbListEventReporter").logSmbListEvent({
                                labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
                                updateEntryPoint: entryPoint,
                                smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.NEW_LIST,
                                smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LISTS_CREATION,
                                userActionTarget: "toolbar_done_button",
                                extraAttributes: JSON.stringify({
                                    is_suggestion: ceRef.current
                                })
                            });
                            const a = yield o("WAWebListsActions").createNewListAction({
                                chats: te,
                                color: J,
                                entryPoint,
                                name: Q
                            });
                            e = a != null ? String(a) : undefined;
                            if (a != null) {
                                o("WAWebListsLogging").logListUpdateUserJorney({
                                    listId: `${a}`,
                                    listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
                                    userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.CREATE_LIST,
                                    entryPoint
                                });
                                if (te.length > 0) {
                                    o("WAWebCmd").Cmd.trigger("set_active_filter", o("WAWebChatSearchFilters").SearchFilters.LABELS, String(a));
                                } else {
                                    N_showToast({
                                        type: "success",
                                        message: s._("List created")
                                    });
                                }
                            }
                        }
                        onClose(e);
                    } finally{
                        $(false);
                    }
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const SeComponent = function() {
            const Component = r("WAWebAddToListModal.react");
            o("WAWebModalManager").ModalManager.open(<Component chatFilter={leadStage != null ? o("WAWebLeadSublistGating").isChatEligibleForLeadSublist : undefined} excludeContacts={leadStage != null} preselectedChats={te} isEditMode={isEditMode} onClose={function(t) {
                ne(t);
                o("WAWebModalManager").ModalManager.close();
            }}/>);
        };
        const Re = F?.name;
        const Le = F?.colorIndex;
        const Ee = ()=>{
            if (isEditMode) {
                if (!q && (Q !== Re || P && J !== Le)) {
                    return true;
                }
                const e = o("WAWebListsUtil").getTwoArraysDifference(O, te);
                const { addedItems, removedItems } = e;
                return addedItems.length > 0 || removedItems.length > 0;
            }
            return !r("isStringNullOrEmpty")(Q) || te.length > 0;
        };
        const KeComponent = function() {
            if (Ee()) {
                const Component = r("WAWebOrderConfirmDiscardModal");
                o("WAWebModalManager").ModalManager.open(<Component onOK={onBack}/>);
            } else {
                onBack();
            }
        };
        const Ie = function(t) {
            ne(function(e) {
                return e.filter((e)=>e !== t);
            });
        };
        const TeComponent = function(t) {
            return <LComponent chat={t.data} onRemove={Ie} showRemove={!U || G} disableRemove={z && te.length <= 1}/>;
        };
        const De = te.map((e)=>({
                itemKey: `chat-${e.id.toString()}`,
                data: e
            }));
        const xe = useMemo(function() {
            return function() {
                if (spinner) {
                    return true;
                }
                if (isEditMode) {
                    if (!q) {
                        if (r("isStringNullOrEmpty")(Q) || Q !== Re && o("WAWebListNameValidation").isListNameDuplicate(Q)) {
                            return true;
                        }
                        if (Q !== Re || P && J !== Le) {
                            return false;
                        }
                    }
                    if (O.length !== te.length) {
                        return false;
                    }
                    const e = o("WAWebListsUtil").getTwoArraysDifference(O, te);
                    const { addedItems, removedItems } = e;
                    return addedItems.length === 0 && removedItems.length === 0;
                }
                const a = P && J == null;
                return r("isStringNullOrEmpty")(Q) || o("WAWebListNameValidation").isListNameDuplicate(Q) || _e || a;
            };
        }, [
            spinner,
            isEditMode,
            Q,
            J,
            P,
            q,
            Le,
            Re,
            te,
            O,
            _e
        ]);
        const $e = listId != null && F == null;
        const Pe = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL);
        const Ne = Pe[1];
        const Me = F?.predefinedId;
        const we = te.length > 0;
        const Ae = o("WAWebAEOnboardedState").useIsAEOnboarded();
        const FeRef = useRef(false);
        useEffect(function() {
            if (!FeRef.current && P && Ae && (Me === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || Me === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && we) {
                FeRef.current = true;
                new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
                    surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS,
                    smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
                    automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
                }).commit();
            }
        }, [
            P,
            Me,
            we,
            Ae
        ]);
        const Component = r("WAWebClickableLink.react");
        const Component_1 = o("WAWebText.react").WAWebTextMuted;
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const Oe = P && Ae && (Me === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || Me === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && <Component_2 align="center" justify="center" xstyle={[
            b.educationalTextPadding,
            b.paddingHoriz24
        ]}><Component_1>{s._("Some chats are automatically added.")} <Component onClick={function() {
            const Component = r("WAWebDOIntroPopup.react");
            o("WAWebModalManager").ModalManager.open(<Component onContinue={function() {
                Ne();
                o("WAWebModalManager").ModalManager.close();
            }} surfaceType={o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS}/>);
            new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_DETAILS,
                smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
            }).commit();
        }}>{r("WAWebFbtCommon")("Learn more")}</Component></Component_1></Component_2>;
        const Be = isEditMode ? s._("Save list") : s._("Create list");
        const We = E(F);
        const qe = We ?? s._("View preset list");
        const Ue = x(leadStage, V, qe);
        const Ve = isEditMode ? Ue : s._("Create new list");
        const b_chatsListPadding = b.chatsListPadding;
        const Component_3 = r("WDSMenuItem.react");
        const Component_4 = r("WDSMenu.react");
        const Ge = isEditMode && listId != null && !q && !V && _.jsx(r("WDSMenuBarItem.react"), {
            testid: "edit-list-menu-button",
            icon: r("WDSIconIcMoreVert.react"),
            title: s._("Menu"),
            wdsMenuToRender: <Component_4><Component_3 Icon={r("WDSIconIcDelete.react")} title={s._("Delete list")} onPress={function() {
                return o("WAWebListsUtil").openListDeleteConfirmPopup(o("WAWebNonEmptyString").asNonEmptyString(listId), entryPoint, onClose);
            }} destructive testid="mi-delete-list"/></Component_4>,
            menuAlign: "end"
        });
        let ze;
        if (q) {
            const Component = o("WAWebFlex.react").FlexRow;
            ze = <Component align="center" xstyle={[
                b.inputRowPadding,
                b.paddingHoriz24,
                b.noShrink
            ]}>{_.jsx(r("WAWebListIcon.react"), {
                color: F?.colorIndex != null ? o("WAWebListUtils").colorIndexToHex(F.colorIndex) : null,
                size: 16
            })}<span className="x1lkfr7t xo1l8bm x12w63v0">{F?.name}</span></Component>;
        } else {
            const Component = r("WAWebLabelEditInput.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            ze = <Component_1 align="center" xstyle={b.noShrink}><div className="xh8yej3"><Component key={ae} editable={!U} label={F} initialName={Q ?? undefined} initialColorIndex={J ?? undefined} onSave={U ? r("WAWebNoop") : he} onCancel={r("WAWebNoop")} listsFlow rowTheme={P ? "create-new-list-smb" : "create-new-list-consumer"} entryPoint={null}/></div></Component_1>;
        }
        const Component_5 = o("WAWebDrawerHeader.react").DrawerHeader;
        const Component_6 = r("WDSText.react");
        const Component_7 = r("WAWebSuggestedLists.react");
        const Component_8 = r("WAWebCellFrame.react");
        const Component_9 = o("WAWebFlex.react").FlexRow;
        const Component_10 = o("WAWebButton.react").WAWebButtonPrimary;
        const Component_11 = o("WAWebFlex.react").FlexRow;
        const Component_12 = r("WDSButton.react");
        const Component_13 = o("WAWebFlex.react").FlexRow;
        const Component_14 = r("WAWebDrawerBody.react");
        const Component_15 = r("WAWebDrawer.react");
        return <Component_15 ref={t_ref} theme="settings" testid="create-new-list-drawer-container" tsNavigationData={{
            surface: "smb-lists-create"
        }}><Component_5 testid="create-new-list-drawer-header" onBack={KeComponent} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL} title={Ve}>{Ge}</Component_5><Component_14 flatListControllers={[
            fe
        ]}>{$e || V ? null : ze}{j != null && (H ? <Component_6 colorName="contentDeemphasized" testid="ai-responding-list-description" type="Body2" xstyle={b.presetDescription}>{j}</Component_6> : <div className="xb0esv5 xyo0t3i x1p57kb1 x2lah0s">{_.jsx(r("WDSBanner.react"), {
            type: "tip",
            body: j,
            testid: "preset-list-helper-banner"
        })}</div>)}{Oe}{!isEditMode && P && !se && <Component_7 filterText={filterText} onSelect={ye} suggestedListTheme="list-creation-drawer"/>}{re && _.jsx(r("WAWebDrawerSection.react"), {
            title: s._("Included"),
            theme: "list-section",
            animation: false,
            xstyle: [
                !Oe && b.sectionHeaderTopPadding,
                b.noShrink
            ],
            titleXStyle: b.sectionHeader
        })}{(!U || G) && <Component_9 align="center" xstyle={b.noShrink}><div className="xh8yej3 xuzvuw4"><Component_8 testid="list-add-chats-button" theme="label-selection-new-label" onClick={SeComponent} focusable tabIndex={0} tabOrder={o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT} image=<div className="x78zum5 x6s0dn4 xl56j7k x100vrsf x16wdlz0 xt8t1vi x1xc408v x129tdwq x15urzxu xfn3atn x1pse0pq x1ypdohk x1m2oepg">{_.jsx(r("WDSIconIcAdd.react"), {
            viewBox: {
                x: 3,
                y: 3,
                width: 18,
                height: 18
            }
        })}</div> primary={D(isEditMode, leadStage)}/></div></Component_9>}<div className="xe2zdcy xvtqlqk">{_.jsx(o("WAWebFlatList.react").FlatList, {
            "aria-label": s._("Chat list"),
            testid: "new-list-chat-list",
            data: De,
            renderItem: TeComponent,
            flatListController: fe,
            direction: "vertical",
            role: "grid",
            "aria-rowcount": te.length
        })}</div>{(!U || G) && <Component_11 xstyle={[
            b.ctaPadding,
            b.buttonPadding,
            b.noShrink
        ]}><Component_10 testid="list-save-button" tabOrder={o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER} onClick={ve} spinner={spinner} disabled={xe()}>{Be}</Component_10></Component_11>}{o("WAWebListUtils").isDisableablePresetList(F?.type) && <Component_13 xstyle={b.disableButtonRow}><Component_12 variant="borderless" widthMode="constrained" size="small" type="destructive" testid="disable-preset-list-button" label={s._("Disable list")} onPress={ge}/></Component_13>}</Component_14></Component_15>;
    }
    RComponent.displayName = `${RComponent.name} [from ${i.id}]`;
    function LComponent(e) {
        const t = o("react-compiler-runtime").c(28);
        const { chat, disableRemove, onRemove, showRemove } = e;
        let u;
        if (t[0] !== chat || t[1] !== onRemove) {
            u = function() {
                onRemove(chat);
            };
            t[0] = chat;
            t[1] = onRemove;
            t[2] = u;
        } else {
            u = t[2];
        }
        const c = u;
        let m;
        if (t[3] !== chat.id) {
            m = _.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: chat.id,
                size: 40,
                waitIdle: true
            });
            t[3] = chat.id;
            t[4] = m;
        } else {
            m = t[4];
        }
        const p = m;
        let f;
        if (t[5] !== chat || t[6] !== p) {
            f = o("WAWebChatGetters").getIsGroup(chat) ? _.jsx(r("WAWebGroupChatImage.react"), {
                chat,
                regularChatImage: p,
                showCommunityInfo: false,
                size: 40,
                theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
            }) : p;
            t[5] = chat;
            t[6] = p;
            t[7] = f;
        } else {
            f = t[7];
        }
        const g = f;
        const chat_contact = chat.contact;
        let y;
        if (o("WAWebChatGetters").getIsGroup(chat)) {
            let C;
            if (t[8] !== chat) {
                C = _.jsx(o("WAWebName.react").Name, {
                    chat,
                    ellipsify: true,
                    titlify: true
                });
                t[8] = chat;
                t[9] = C;
            } else {
                C = t[9];
            }
            y = C;
        } else {
            let v;
            if (t[10] !== chat_contact) {
                v = chat_contact != null ? _.jsx(o("WAWebName.react").Name, {
                    contact: chat_contact,
                    ellipsify: true,
                    showBusinessCheckmark: o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(chat_contact),
                    titlify: true,
                    you: true
                }) : null;
                t[10] = chat_contact;
                t[11] = v;
            } else {
                v = t[11];
            }
            y = v;
        }
        let S;
        if (t[12] !== g) {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            S = <Component name="chat-cell-image">{g}</Component>;
            t[12] = g;
            t[13] = S;
        } else {
            S = t[13];
        }
        let R;
        if (t[14] !== y) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            R = <Component>{y}</Component>;
            t[14] = y;
            t[15] = R;
        } else {
            R = t[15];
        }
        let L;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            L = (d || (d = r("stylex"))).props(b.mutedTextColor, b.secondaryText, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2);
            t[16] = L;
        } else {
            L = t[16];
        }
        let E;
        if (t[17] !== chat) {
            E = <div {...babelHelpers.extends({}, L, {
                "data-testid": "list_drawer_chat_secondary_text",
                children: _.jsx(r("WAWebChatstateInfo.react"), {
                    chat
                })
            })}/>;
            t[17] = chat;
            t[18] = E;
        } else {
            E = t[18];
        }
        let k;
        if (t[19] !== disableRemove || t[20] !== c || t[21] !== showRemove) {
            const Component = r("WDSButton.react");
            k = showRemove ? <Component Icon={r("WDSIconIcDelete.react")} variant="borderless" size="small" type="destructive" onPress={c} disabled={disableRemove} aria-label={s._("Remove from list")} testid="remove-chat-from-list"/> : null;
            t[19] = disableRemove;
            t[20] = c;
            t[21] = showRemove;
            t[22] = k;
        } else {
            k = t[22];
        }
        let I;
        if (t[23] !== S || t[24] !== R || t[25] !== E || t[26] !== k) {
            I = _.jsx(r("WAWebCellV2.react"), {
                size: "medium",
                interactive: false,
                detailLeft: S,
                primary: R,
                secondary: E,
                detailRight: k
            });
            t[23] = S;
            t[24] = R;
            t[25] = E;
            t[26] = k;
            t[27] = I;
        } else {
            I = t[27];
        }
        return I;
    }
    function E(e) {
        if (e == null) {
            return null;
        }
        if (o("WAWebListUtils").isLeadList(e)) {
            if (o("WAWebCustomerManagerGating").customerManagerEnabled()) {
                return o("WAWebListUtils").getLeadStageListName();
            }
            return e.name;
        }
        return o("WAWebListUtils").getPresetListLocalizedName(e.type);
    }
    function k({ chatsBeforeUpdate, entryPoint, leadList, removedChats, stagedChats }) {
        const l = new Set(chatsBeforeUpdate.map((e)=>e.id.toString()));
        const addedChats = stagedChats.filter((e)=>!l.has(e.id.toString()));
        if (!(addedChats.length === 0 && removedChats.length === 0)) {
            const u = Number(leadList.id);
            o("WAWebListsLogging").logListUpdate({
                listId: u,
                listAction: o("WAWebWamEnumListAction").LIST_ACTION.UPDATE_MEMBERS,
                entryPoint,
                chatsBeforeUpdate,
                addedChats,
                removedChats
            });
            o("WAWebListsActions").logUpdateMembersPerChat(addedChats, {
                entryPoint,
                listId: u,
                customListTitle: leadList.name,
                listsApplied: String(u)
            });
            o("WAWebListsActions").logUpdateMembersPerChat(removedChats, {
                entryPoint,
                listId: u,
                customListTitle: leadList.name,
                listsRemoved: String(u)
            });
        }
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = [];
            yield e.reduce((acc, item)=>acc.then(()=>o("WAWebApplyLeadStageSublistAction").applyLeadStageSublist(o("WAJids").unsafeCoerceToChatJid(item.id.toString()), t, o("WAWebLeadStageStore").getLeadStageFromStore(item.id.toString()), {
                        logLeadSignal: true
                    }).then(()=>{
                        o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(o("WAWebSyncLeadStageToProfile").getLeadProfileChatJid(item), t);
                    }, (e)=>{
                        a.push(item);
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[customer_manager] lead stage write from the list drawer failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("lead-stage-list-drawer-apply-fail");
                    })), (m || (m = n("Promise"))).resolve());
            return a;
        });
        return T.apply(this, arguments);
    }
    function D(isEditMode, leadStage) {
        if (leadStage != null) {
            return s._("Edit people");
        }
        if (isEditMode) {
            return s._("Edit people or groups");
        }
        return s._("Add people or groups");
    }
    function x(e, t, n) {
        if (e != null) {
            return o("WAWebLeadStageNames").getPipelineColumnHeaderLabel(e);
        }
        if (t) {
            return n;
        }
        return s._("Edit list");
    }
    x.displayName = `${x.name} [from ${i.id}]`;
    l.default = RComponent;
}, 226);