__d("WAWebChatContextMenuItemEditLabel.react", [
    "WAWebCommonCTWADataSharing",
    "WAWebManageLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebStateUtils",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumUpdateEntryPoint",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = (t, n)=>{
        const e = [
            o("WAWebStateUtils").unproxy(t)
        ];
        const Component = o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable;
        o("WAWebModalManager").ModalManager.open(<Component modelsToUpdate={e} onClose={o("WAWebModalManager").closeModalManager} entryPoint={n}/>);
    };
    function c(e, t = o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS) {
        r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
            cb: function() {
                return u(e, t);
            },
            chats: [
                e
            ],
            entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
            target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
        });
    }
    function d({ chat, multiSelection, onStartMultiSelect, searchQuery, selectableState }) {
        if (searchQuery && !searchQuery.isEmptyQuery()) {
            c(chat);
            return;
        }
        if (chat.archive) {
            c(chat);
            return;
        }
        if (selectableState && multiSelection && onStartMultiSelect) {
            selectableState.setSelectable(true);
            multiSelection.setVal(o("WAWebStateUtils").unproxy(chat));
            onStartMultiSelect(o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.Label);
        }
    }
    l.checkDataSharingOrHandleLabelAction = c;
    l.handleLabelMenuItemClick = d;
}, 98);