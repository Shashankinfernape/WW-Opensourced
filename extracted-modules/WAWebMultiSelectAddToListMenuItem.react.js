__d("WAWebMultiSelectAddToListMenuItem.react", [
    "fbt",
    "WAWebCommonCTWADataSharing",
    "WAWebManageLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSIconIcSwitchAccount.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const { chats, onComplete } = e;
        let i;
        if (t[0] !== chats || t[1] !== onComplete) {
            i = function() {
                r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
                    cb: function() {
                        const Component = o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable;
                        o("WAWebModalManager").ModalManager.open(<Component onLabelUpdateComplete={onComplete} modelsToUpdate={chats} onClose={o("WAWebModalManager").closeModalManager} entryPoint={o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS}/>);
                    },
                    chats,
                    entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
                    target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
                });
            };
            t[0] = chats;
            t[1] = onComplete;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let c;
        if (t[3] !== chats) {
            c = chats.some(d);
            t[3] = chats;
            t[4] = c;
        } else {
            c = t[4];
        }
        const m = c;
        let p;
        if (t[5] !== m) {
            p = m ? s._("Change list") : s._("Add to list");
            t[5] = m;
            t[6] = p;
        } else {
            p = t[6];
        }
        let _;
        if (t[7] !== l || t[8] !== p) {
            const Component = r("WDSMenuItem.react");
            _ = <Component Icon={r("WDSIconIcSwitchAccount.react")} onPress={l} testid="multi-select-bar-overflow-menu-item-add-to-list" title={p}/>;
            t[7] = l;
            t[8] = p;
            t[9] = _;
        } else {
            _ = t[9];
        }
        return _;
    }
    function d(e) {
        return e.labels != null && e.labels.length > 0;
    }
    l.default = c;
}, 226);