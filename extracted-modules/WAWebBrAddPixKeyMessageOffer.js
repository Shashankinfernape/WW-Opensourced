__d("WAWebBrAddPixKeyMessageOffer", [
    "WAWebBrAddPixKeyDeepLinkPrefill",
    "WAWebInteractiveMessageType",
    "WAWebMsgType",
    "WAWebUserPrefsTypes",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "offer_payment_account";
    const s = "PIX";
    const u = "wa_add_pix_key_saved";
    function c(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        return d({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            type: e.type
        });
    }
    function d({ interactivePayload, interactiveType, type }) {
        if (type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW) {
            return null;
        }
        const l = interactivePayload?.buttons;
        if (l == null) {
            return null;
        }
        for (const s of l){
            if (s?.name === e && s.buttonParamsJson != null) {
                return h(s.buttonParamsJson);
            }
        }
        return null;
    }
    function m(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return false;
        }
        return p({
            interactivePayload: e.interactivePayload,
            type: e.type
        });
    }
    function p({ interactivePayload, type }) {
        if (type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return false;
        }
        for (const a of interactivePayload?.buttons ?? []){
            if (a?.name === e && a.buttonParamsJson != null) {
                return g(a.buttonParamsJson)?.[u] === true;
            }
        }
        return false;
    }
    function _(t, n) {
        let i = false;
        const buttons = t?.buttons?.map(function(t) {
            if (t.name !== e || t.buttonParamsJson == null) {
                return t;
            }
            const s = g(t.buttonParamsJson);
            const c = y(s?.payment_account);
            const d = c == null ? null : C(c, "identifier_value");
            if (s == null || s[u] === true || d == null) {
                return t;
            }
            const m = o("WAWebUserPrefsTypes").PixKeyType.cast(C(r("nullthrows")(c), "identifier_type")?.toUpperCase());
            if (f(d, m) !== f(n, m)) {
                return t;
            }
            i = true;
            return {
                name: t.name,
                buttonParamsJson: JSON.stringify(babelHelpers.extends({}, s, {
                    [u]: true
                }))
            };
        });
        if (i && t != null) {
            return babelHelpers.extends({}, t, {
                buttons
            });
        }
        return null;
    }
    function f(e, t) {
        if (t === o("WAWebUserPrefsTypes").PixKeyType.CPF || t === o("WAWebUserPrefsTypes").PixKeyType.CNPJ || t === o("WAWebUserPrefsTypes").PixKeyType.PHONE) {
            return e.replace(/\D/g, "");
        }
        return e.trim().toLowerCase();
    }
    function g(buttonParamsJson) {
        try {
            return y(JSON.parse(buttonParamsJson));
        } catch (e) {
            return null;
        }
    }
    function h(buttonParamsJson) {
        let n;
        try {
            n = JSON.parse(buttonParamsJson);
        } catch (e) {
            return null;
        }
        const r = y(y(n)?.payment_account);
        if (r == null || C(r, "account_type") !== s) {
            return null;
        }
        const a = C(r, "identifier_type");
        const keyType = a == null ? null : o("WAWebUserPrefsTypes").PixKeyType.cast(a.toUpperCase());
        const keyValue = C(r, "identifier_value");
        if (keyType == null || keyValue == null || !o("WAWebBrAddPixKeyDeepLinkPrefill").isAcceptablePixKeyValue(keyValue, keyType)) {
            return null;
        }
        const u = C(r, "holder_name");
        const holderName = u != null && o("WAWebBrAddPixKeyDeepLinkPrefill").isAcceptableCappedText(u, o("WAWebBrAddPixKeyDeepLinkPrefill").MAX_NAME_LENGTH) ? u : null;
        return {
            holderName,
            keyType,
            keyValue
        };
    }
    function y(e) {
        if (e != null && typeof e === "object" && !Array.isArray(e)) {
            return e;
        }
        return null;
    }
    function C(e, t) {
        const n = e[t];
        if (typeof n === "string") {
            return n;
        }
        return null;
    }
    l.OFFER_PAYMENT_ACCOUNT_BUTTON_NAME = e;
    l.getAddPixKeyMessageOffer = c;
    l.getAddPixKeyMessageOfferFor = d;
    l.isAddPixKeyMessageOfferSaved = m;
    l.isAddPixKeyMessageOfferSavedFor = p;
    l.withAddPixKeyOfferSaved = _;
}, 98);