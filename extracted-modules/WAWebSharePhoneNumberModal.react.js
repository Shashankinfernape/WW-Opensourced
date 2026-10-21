__d("WAWebSharePhoneNumberModal.react", [
    "fbt",
    "WAWebChatCollection",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebLogRequestPhoneNumber",
    "WAWebModalManager",
    "WAWebPhoneNumberPrivacyNux.react",
    "WAWebPhoneUtils",
    "WAWebSendSharePhoneNumberChatAction",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPnhActionType",
    "WAWebWamEnumPnhChatTypeType",
    "WAWebWamEnumPnhMessageChatParty",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = (t)=>{
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e) {
            if (t != null) {
                o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
                    action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_NUMBER,
                    chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
                    chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                    entryPoint: t
                });
            }
            o("WAWebSendSharePhoneNumberChatAction").sendSharePhoneNumber(o("WAWebStateUtils").unproxy(e));
        }
        o("WAWebModalManager").ModalManager.close();
    };
    const m = function(t) {
        const e = o("WAWebChatCollection").ChatCollection.getActive();
        if (e) {
            if (t != null) {
                o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
                    action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.DISMISS,
                    chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
                    chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                    entryPoint: t
                });
            }
            o("WAWebModalManager").ModalManager.close();
        }
    };
    const p = function() {
        const e = o("WAWebFaqUrl").getPhoneNumberHidingFaqUrl();
        o("WAWebExternalLink.react").openExternalLink(e);
    };
    const Component = r("WAWebClickableLink.react");
    const _ = <Component onClick={p}>{s._("Learn more")}</Component>;
    function f(e) {
        const t = o("react-compiler-runtime").c(15);
        const e_entryPoint = e.entryPoint;
        let a;
        let i;
        if (t[0] !== e_entryPoint) {
            a = function() {
                if (e_entryPoint) {
                    o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
                        action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR,
                        chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
                        chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                        entryPoint: e_entryPoint
                    });
                }
            };
            i = [
                e_entryPoint
            ];
            t[0] = e_entryPoint;
            t[1] = a;
            t[2] = i;
        } else {
            a = t[1];
            i = t[2];
        }
        e_useEffect(a, i);
        let l;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Your phone number isn't shared in this chat");
            t[3] = l;
        } else {
            l = t[3];
        }
        const p = l;
        let f;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Businesses that have your phone number saved in their contacts will be able to see it on WhatsApp. {learnMoreLink}", [
                s._param("learnMoreLink", _)
            ]);
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        let h;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("Share number");
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = h;
        let C;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Not now");
            t[6] = C;
        } else {
            C = t[6];
        }
        const b = C;
        let v;
        if (t[7] !== e_entryPoint) {
            v = function() {
                d(e_entryPoint);
            };
            t[7] = e_entryPoint;
            t[8] = v;
        } else {
            v = t[8];
        }
        let S;
        if (t[9] !== e_entryPoint) {
            S = function() {
                m(e_entryPoint);
            };
            t[9] = e_entryPoint;
            t[10] = S;
        } else {
            S = t[10];
        }
        let R;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = o("WAWebUserPrefsMeUser").getMaybeMeDisplayName();
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] !== v || t[13] !== S) {
            const Component = r("WAWebPhoneNumberPrivacyNux.react");
            L = <Component onOK={v} okText={y} onCancel={S} title={p} subTitle={g} cancelText={b} displayName={R} okButtonType="secondary" testid="phone-number-not-shared-modal"/>;
            t[12] = v;
            t[13] = S;
            t[14] = L;
        } else {
            L = t[14];
        }
        return L;
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(15);
        const e_entryPoint = e.entryPoint;
        let a;
        let i;
        if (t[0] !== e_entryPoint) {
            a = function() {
                if (e_entryPoint) {
                    o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
                        action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR,
                        chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.CONSUMER,
                        chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                        entryPoint: e_entryPoint
                    });
                }
            };
            i = [
                e_entryPoint
            ];
            t[0] = e_entryPoint;
            t[1] = a;
            t[2] = i;
        } else {
            a = t[1];
            i = t[2];
        }
        e_useEffect(a, i);
        let l;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Share phone number?");
            t[3] = l;
        } else {
            l = t[3];
        }
        const p = l;
        let f;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("This business will be able to see your number and add you to their contacts. {learnMoreLink}", [
                s._param("learnMoreLink", _)
            ]);
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        let h;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("Share number");
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = h;
        let C;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Not now");
            t[6] = C;
        } else {
            C = t[6];
        }
        const b = C;
        let v;
        if (t[7] !== e_entryPoint) {
            v = function() {
                d(e_entryPoint);
            };
            t[7] = e_entryPoint;
            t[8] = v;
        } else {
            v = t[8];
        }
        let S;
        if (t[9] !== e_entryPoint) {
            S = function() {
                m(e_entryPoint);
            };
            t[9] = e_entryPoint;
            t[10] = S;
        } else {
            S = t[10];
        }
        let R;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = o("WAWebUserPrefsMeUser").getMaybeMeDisplayName();
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] !== v || t[13] !== S) {
            const Component = r("WAWebPhoneNumberPrivacyNux.react");
            L = <Component onOK={v} okText={y} onCancel={S} title={p} subTitle={g} cancelText={b} displayName={R} okButtonType="secondary" testid="phone-number-not-shared-restricted-modal"/>;
            t[12] = v;
            t[13] = S;
            t[14] = L;
        } else {
            L = t[14];
        }
        return L;
    }
    function h({ entryPoint, mePnUser }) {
        const a = s._("Your phone number is shared in this chat");
        const i = s._("This business can see your phone number.");
        const l = r("WAWebFbtCommon")("OK");
        const c = s._("Learn more");
        const Component = r("WAWebPhoneNumberPrivacyNux.react");
        return <Component onOK={m} okText={l} onCancel={function() {
            p();
            m();
        }} title={a} subTitle={i} cancelText={c} displayName={o("WAWebPhoneUtils").formatPhone(mePnUser.user)} testid="phone-number-shared-modal"/>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.SharePhoneNumberModal = f;
    l.SharePhoneNumberRestrictedActionModal = g;
    l.PostSharePhoneNumberModal = h;
}, 226);