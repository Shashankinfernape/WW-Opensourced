__d("WAWebBrSavePartnerPixKeyFeature", [
    "WAWebAddEditPixFeature",
    "WAWebBrSavePartnerPixKeyModalLoadable",
    "WAWebModalManager",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsTypes",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = "+55";
    function c() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS)?.pix != null;
    }
    function d(e, t, n, r) {
        p("chat", "chat", {
            keyType: e.keyType,
            name: e.holderName ?? undefined,
            value: e.keyValue
        }, t, n, r);
    }
    function m() {
        o("WAWebAddEditPixFeature").openPixCredentialManagementModal("chat", "chat");
    }
    function p(e, t, n, resolvedAttribution, partnerCatalogId, onPixKeySaved) {
        const m = (a, i)=>{
            o("WAWebAddEditPixFeature").openPixCredentialManagementModal(e, t, n, a, i);
        };
        const p = n?.value;
        if (n == null || p == null || p === "" || c()) {
            m();
            return;
        }
        const pixKeyType = n.keyType ?? o("WAWebUserPrefsTypes").PixKeyType.PHONE;
        const pixKey = pixKeyType === o("WAWebUserPrefsTypes").PixKeyType.PHONE && p.startsWith(u) ? p.slice(u.length) : p;
        const Component = o("WAWebBrSavePartnerPixKeyModalLoadable").BrSavePartnerPixKeyModalLoadable;
        o("WAWebModalManager").ModalManager.open(<Component bankId={n.bankId} displayName={n.name ?? ""} onClose={o("WAWebModalManager").closeModalManager} onOpenForm={function(t) {
            o("WAWebModalManager").ModalManager.close();
            m(t, onPixKeySaved);
        }} onPixKeySaved={onPixKeySaved} partnerCatalogId={partnerCatalogId} pixKey={pixKey} pixKeyType={pixKeyType} referral={t} resolvedAttribution={resolvedAttribution}/>);
    }
    l.openAddPixKeyMessageScreen = d;
    l.openSavedPixKeyFromMessage = m;
    l.openAddPixKeyDeepLinkScreen = p;
}, 98);