__d("WAWebVerifiedNameBridgeApi", [
    "WAWebBizCreateBizStateChangeNotificationMsgsAction",
    "WAWebContactCollection",
    "WAWebJidToWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    const e = {
        generateAndUpdatePrivacySystemMessages: function({ currentState, previousState, shouldRunMATonWid, userJid }) {
            return o("WAWebBizCreateBizStateChangeNotificationMsgsAction").createBizStateChangeNotificationMsgs({
                currentState,
                previousState,
                shouldRunMATonWid,
                wid: o("WAWebWidFactory").createUserWidOrThrow(userJid)
            });
        },
        applyBusinessRemoval: function({ wid }) {
            const wid_1 = o("WAWebJidToWid").userJidToUserWid(wid);
            const r = o("WAWebContactCollection").ContactCollection.get(wid_1);
            const previousState = r ? {
                isBusiness: r.isBusiness,
                privacyMode: r.privacyMode
            } : {
                isBusiness: false
            };
            if (r != null) {
                r.set({
                    isBusiness: false,
                    verifiedLevel: null,
                    verifiedName: null
                });
            }
            return o("WAWebBizCreateBizStateChangeNotificationMsgsAction").createBizStateChangeNotificationMsgs({
                currentState: {
                    isBusiness: false
                },
                previousState,
                wid: wid_1
            });
        }
    };
    l.VerifiedNameBridgeApiType = e;
}, 98);