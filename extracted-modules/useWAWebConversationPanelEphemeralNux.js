__d("useWAWebConversationPanelEphemeralNux", [
    "WAWebAfterReadNux.react",
    "WAWebAfterReadNuxLogging",
    "WAWebAfterReadUtils",
    "WAWebChatEphemerality",
    "WAWebEphemeralAfterReadKicNux.react",
    "WAWebEphemeralKicNux.react",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebWamEnumAfterReadScreenEntryPointType",
    "react",
    "useWAWebNux"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function c(e) {
        const t = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL);
        const n = t[0];
        const a = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ);
        const i = a[0];
        e_useEffect(function() {
            const t = o("WAWebChatEphemerality").getAfterReadDurationForChat(e);
            if (n && o("WAWebChatEphemerality").isEphemeralSettingOn(e)) {
                if (t != null) {
                    o("WAWebAfterReadNuxLogging").logArInterstitialScreenImpression({
                        accountAfterReadDuration: t,
                        afterReadScreenEntryPoint: o("WAWebWamEnumAfterReadScreenEntryPointType").AFTER_READ_SCREEN_ENTRY_POINT_TYPE.CHAT_ENTRY,
                        nuxVersion: o("WAWebAfterReadNuxLogging").AR_NUX_VERSION_AFTER_READ_EPHEMERAL
                    });
                    o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebEphemeralAfterReadKicNux.react"), {
                        duration: t
                    }));
                } else if (o("WAWebAfterReadUtils").isAfterReadOptionAvailable()) {
                    o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebEphemeralKicNux.react"), {
                        chat: e,
                        fromMe: false
                    }));
                }
                return;
            }
            if (i && t != null) {
                o("WAWebAfterReadNuxLogging").logArInterstitialScreenImpression({
                    accountAfterReadDuration: t,
                    afterReadScreenEntryPoint: o("WAWebWamEnumAfterReadScreenEntryPointType").AFTER_READ_SCREEN_ENTRY_POINT_TYPE.CHAT_ENTRY,
                    nuxVersion: o("WAWebAfterReadNuxLogging").AR_NUX_VERSION_AFTER_READ
                });
                o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebAfterReadNux.react"), {}));
            }
        }, []);
    }
    l.default = c;
}, 98);