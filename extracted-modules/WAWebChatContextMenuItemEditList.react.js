__d("WAWebChatContextMenuItemEditList.react", [
    "fbt",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebListSubmenuContentLoadable",
    "WAWebListsIntroPopupLoadable",
    "WAWebManageLabelFlowLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNux",
    "WAWebSMBListsIntroPopup.react",
    "WAWebSchemaLabel",
    "WAWebStateUtils",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumSmbListFeatureNameType",
    "WAWebWamEnumSmbListSurfaceType",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamSmbListEventReporter",
    "WDSIconIcSwitchAccount.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(e) {
        const t = o("react-compiler-runtime").c(21);
        const { chat, displayContext, onSMBLabelMenuItemClick } = e;
        const l = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS;
        const d = r("useWAWebNux")(l);
        const p = d[0];
        const _ = d[1];
        let f;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebChatGetters").getLabels,
                o("WAWebFrontendChatGetters").getIsFavorite
            ];
            t[0] = f;
        } else {
            f = t[0];
        }
        const g = o("useWAWebChatValues").useChatValues(chat.id, f);
        const chatLabels = g[0];
        const y = g[1];
        let C;
        if (t[1] !== chatLabels || t[2] !== y) {
            C = (chatLabels == null || chatLabels.length === 0) && !(y && o("WAWebLabelCollection").LabelCollection.some(m)) ? s._("Add to list") : s._("Change list");
            t[1] = chatLabels;
            t[2] = y;
            t[3] = C;
        } else {
            C = t[3];
        }
        const b = C;
        let v;
        if (t[4] !== chat || t[5] !== displayContext || t[6] !== onSMBLabelMenuItemClick || t[7] !== p || t[8] !== _) {
            v = function() {
                if (o("WAWebMobilePlatforms").isSMB()) {
                    if (p) {
                        const Component = o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup;
                        o("WAWebModalManager").ModalManager.open(<Component onContinue={function() {
                            _();
                            o("WAWebWamSmbListEventReporter").logSmbListEvent({
                                labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
                                updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX,
                                smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.INBOX_CHAT_BOTTOM_SHEET_ADD_TO_LIST,
                                smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LIST_APPLICATION
                            });
                            onSMBLabelMenuItemClick?.();
                        }}/>);
                    } else {
                        o("WAWebWamSmbListEventReporter").logSmbListEvent({
                            labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
                            updateEntryPoint: displayContext === "chat-header" ? o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS,
                            smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.INBOX_CHAT_BOTTOM_SHEET_ADD_TO_LIST,
                            smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LIST_APPLICATION
                        });
                        if (onSMBLabelMenuItemClick != null) {
                            onSMBLabelMenuItemClick();
                        }
                    }
                    return;
                }
                const EComponent = (t)=>{
                    const e = t === undefined ? false : t;
                    const r = [
                        o("WAWebStateUtils").unproxy(chat)
                    ];
                    let i;
                    if (e) {
                        i = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX;
                    } else if (displayContext === "chat-header") {
                        i = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS;
                    } else {
                        i = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS;
                    }
                    const Component = o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable;
                    o("WAWebModalManager").ModalManager.open(<Component modelsToUpdate={r} onClose={o("WAWebModalManager").closeModalManager} entryPoint={i}/>);
                };
                if (p) {
                    const Component = o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
                    o("WAWebModalManager").ModalManager.open(<Component onContinue={function() {
                        _();
                        EComponent(true);
                    }}/>);
                } else {
                    EComponent();
                }
            };
            t[4] = chat;
            t[5] = displayContext;
            t[6] = onSMBLabelMenuItemClick;
            t[7] = p;
            t[8] = _;
            t[9] = v;
        } else {
            v = t[9];
        }
        const S = v;
        let R;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            R = o("WAWebMobilePlatforms").isSMB();
            t[10] = R;
        } else {
            R = t[10];
        }
        const L = !R;
        const E = displayContext === "chat-header" ? o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS : o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS;
        let k;
        let I;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            k = function() {
                if (L) {
                    o("WAWebListSubmenuContentLoadable").requireBundle();
                }
            };
            I = [
                L
            ];
            t[11] = k;
            t[12] = I;
        } else {
            k = t[11];
            I = t[12];
        }
        e_useEffect(k, I);
        let T;
        if (t[13] !== chat || t[14] !== chatLabels || t[15] !== E) {
            T = L ? u.jsx(o("WAWebListSubmenuContentLoadable").ListSubmenuContentLoadable, {
                chat,
                chatLabels,
                entryPoint: E
            }) : undefined;
            t[13] = chat;
            t[14] = chatLabels;
            t[15] = E;
            t[16] = T;
        } else {
            T = t[16];
        }
        const D = T;
        const x = L ? r("WAWebNoop") : S;
        let $;
        if (t[17] !== b || t[18] !== D || t[19] !== x) {
            const Component = r("WDSMenuItem.react");
            $ = <Component key="EditList" Icon={r("WDSIconIcSwitchAccount.react")} title={b} onPress={x} hasSubmenu={L} submenuContent={D} testid="mi-edit-list"/>;
            t[17] = b;
            t[18] = D;
            t[19] = x;
            t[20] = $;
        } else {
            $ = t[20];
        }
        return $;
    }
    function m(e) {
        return e.type === o("WAWebSchemaLabel").ListType.FAVORITES;
    }
    l.default = d;
}, 226);