__d("WAWebChatContextMenuItemAddContact.react", [
    "JSResourceForInteraction",
    "Promise",
    "WAWebAddContactLabel",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebContactManagementGating",
    "WDSIconIcPersonAdd.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = r("JSResourceForInteraction")("WAWebContactEditUtils").__setRef("WAWebChatContextMenuItemAddContact.react");
    const d = r("JSResourceForInteraction")("WAWebContactLogging").__setRef("WAWebChatContextMenuItemAddContact.react");
    const m = r("JSResourceForInteraction")("WAWebContactUtils").__setRef("WAWebChatContextMenuItemAddContact.react");
    function PComponent(t) {
        let a;
        const i = o("react-compiler-runtime").c(6);
        const t_chat = t.chat;
        let s;
        if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                o("WAWebChatGetters").getIsUser
            ];
            i[0] = s;
        } else {
            s = i[0];
        }
        const p = o("useWAWebChatValues").useChatValues(t_chat.id, s);
        const _ = p[0];
        const l_contact = t_chat.contact;
        if (!_ || l_contact == null) {
            return null;
        }
        const l_contact_id = l_contact.id;
        const h = o("WAWebContactGetters").getIsMe(l_contact);
        const y = !!(o("WAWebContactGetters").getIsUser(l_contact) && ((a = o("WAWebContactGetters").getName(l_contact)) != null && a.length || l_contact.isUsernameContact));
        if (!l_contact_id.isRegularUser() || l_contact_id.isAiHub() || h || l_contact_id.isIAS() || l_contact_id.isCAPISupportAccount() || l_contact_id.isSupportAccount() || y || !o("WAWebContactManagementGating").addContactChatListEnabled()) {
            return null;
        }
        let C;
        if (i[1] !== l_contact) {
            C = function() {
                (e || (e = n("Promise"))).all([
                    c.load(),
                    d.load(),
                    m.load()
                ]).then(([t, n, r])=>{
                    const t_openContactEditDrawer = t.openContactEditDrawer;
                    const n_ContactSourceType = n.ContactSourceType;
                    const r_getContactDataFromContactModel = r.getContactDataFromContactModel;
                    t_openContactEditDrawer(r_getContactDataFromContactModel(l_contact), n_ContactSourceType.ChatListMenu);
                });
            };
            i[1] = l_contact;
            i[2] = C;
        } else {
            C = i[2];
        }
        const b = C;
        let v;
        if (i[3] === Symbol.for("react.memo_cache_sentinel")) {
            v = o("WAWebAddContactLabel").getAddToContactsLabel();
            i[3] = v;
        } else {
            v = i[3];
        }
        let S;
        if (i[4] !== b) {
            const Component = r("WDSMenuItem.react");
            S = <Component key="AddContact" Icon={r("WDSIconIcPersonAdd.react")} title={v} onPress={b} testid="mi-add-contact"/>;
            i[4] = b;
            i[5] = S;
        } else {
            S = i[5];
        }
        return S;
    }
    l.default = PComponent;
}, 98);