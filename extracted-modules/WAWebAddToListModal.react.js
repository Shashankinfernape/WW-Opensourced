__d("WAWebAddToListModal.react", [
    "fbt",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(13);
        const { chatFilter, excludeContacts, isEditMode, onClose, preselectedChats } = e;
        let c;
        if (t[0] !== isEditMode) {
            c = isEditMode === true ? s._("Edit list items") : s._("Add to list");
            t[0] = isEditMode;
            t[1] = c;
        } else {
            c = t[1];
        }
        let d;
        if (t[2] !== onClose) {
            d = function({ selectedItems }) {
                return onClose(selectedItems);
            };
            t[2] = onClose;
            t[3] = d;
        } else {
            d = t[3];
        }
        let getInitialItems;
        if (t[4] !== preselectedChats) {
            getInitialItems = function() {
                return [].concat(preselectedChats);
            };
            t[4] = preselectedChats;
            t[5] = getInitialItems;
        } else {
            getInitialItems = t[5];
        }
        let p;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                surface: "smb-lists-picker"
            };
            t[6] = p;
        } else {
            p = t[6];
        }
        let _;
        if (t[7] !== chatFilter || t[8] !== excludeContacts || t[9] !== c || t[10] !== d || t[11] !== getInitialItems) {
            const Component = o("WAWebSelectModal.react").SelectModal;
            _ = <Component chatFilter={chatFilter} excludeContacts={excludeContacts} listType={o("WAWebSelectModal.react").ListType.ChatSelectModal} title={c} ephemeralIcon="chat-list" onConfirm={d} shouldShowSelectedChatList shouldShowSelectionSummary={false} singleSelectionFooterType={o("WAWebSelectModalFooter.react").FooterType.CONFIRM} multipleSelectionFooterType={o("WAWebSelectModalFooter.react").FooterType.CONFIRM} getInitialItems={getInitialItems} activeWithoutSelection tsNavigationData={p}/>;
            t[7] = chatFilter;
            t[8] = excludeContacts;
            t[9] = c;
            t[10] = d;
            t[11] = getInitialItems;
            t[12] = _;
        } else {
            _ = t[12];
        }
        return _;
    }
    l.default = CComponent;
}, 226);