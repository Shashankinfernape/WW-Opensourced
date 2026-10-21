__d("WAWebHandleIdentityChange", [
    "Promise",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebJidToWid",
    "WAWebManageE2ESessionsJob",
    "WAWebMarkBroadcastSenderKeyRotateForUser",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebOfflineHandler",
    "WAWebSecurityCodeApi",
    "WAWebSendTcTokenWhenDeviceIdentityChange",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = new (r("WADeprecatedWapParser"))("identityChange", function(e) {
        e.assertTag("notification");
        e.assertAttr("type", "encrypt");
        e.child("identity");
        return {
            wid: o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("from")),
            stanzaId: e.attrString("id"),
            displayName: e.maybeAttrString("display_name"),
            lid: e.hasAttr("lid") ? o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("lid")) : null,
            offline: e.maybeAttrString("offline")
        };
    });
    function _(t) {
        const a = p.parse(t);
        if (a.error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                ""
            ])), a.error.toString());
            return (m || (m = n("Promise"))).reject(a.error);
        }
        const i = a.success;
        const { displayName: l, lid: _, offline: f, stanzaId: g, wid: h } = i;
        const y = o("WAWap").wap("ack", {
            to: o("WAWebCommsWapMd").DEVICE_JID(h),
            id: o("WAWap").CUSTOM_STRING(g),
            class: "notification"
        });
        if (h.device != null && h.device !== o("WAJids").DEFAULT_DEVICE_ID) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleNewIdentity: ignore from companion device"
            ])));
            return (m || (m = n("Promise"))).resolve(y);
        }
        if (o("WAWebUserPrefsMeUser").isMePrimary(h)) {
            o("WAWebBackendApi").frontendFireAndForget("handleSelfPrimaryIdentityChange", {});
            return (m || (m = n("Promise"))).resolve(y);
        }
        const C = !r("isStringNullOrEmpty")(f) && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
        return o("WAWebMessageQueue").onMessageQueue({
            chatWid: h,
            isOffline: C,
            msgCategory: null,
            action: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = _ ? o("WAWebWidFactory").asUserLidOrThrow(_) : null;
                    yield o("WAWebIdentityChangeApiWorkerCompatible").clearDeviceRecordForIdentityChange({
                        wid: h,
                        stanzaLid: e,
                        offline: C
                    });
                    const t = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().loadIdentityKey(o("WAWebSignalCommonUtils").createSignalAddress(h).toString());
                    if (!r("isStringNullOrEmpty")(t)) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[handleE2eIdentityChange] ",
                            " old identity, new session"
                        ])), h.toString());
                        const n = o("WAWebWidFactory").asUserWidOrThrow(h);
                        yield o("WAWebSignal").Session.deleteRemoteInfo(h);
                        o("WAWebSecurityCodeApi").addSecurityCodeChangedNotifications({
                            user: n,
                            stanzaLid: e,
                            offline: C
                        }).catch((e)=>{
                            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "addSecurityCodeChangedNotifications failed: ",
                                ""
                            ])), String(e));
                        });
                        o("WAWebSendTcTokenWhenDeviceIdentityChange").sendTcTokenWhenDeviceIdentityChange(n);
                        o("WAWebUserPrefsStatus").markStatusSenderKeyRotate([
                            h
                        ]);
                        o("WAWebMarkBroadcastSenderKeyRotateForUser").markBroadcastSenderKeyRotateForUser(h);
                        if (!C) {
                            o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                                identityChanged: true,
                                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                                wids: [
                                    h
                                ]
                            }).catch((e)=>{
                                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleE2eIdentityChange: ensureE2ESessions failed with: ",
                                    ""
                                ])), String(e));
                            });
                        }
                        yield o("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob").createOrReplaceDisplayNamesAndLidPnMappings([
                            {
                                id: n,
                                lid: e,
                                displayName: l
                            }
                        ], !f);
                    }
                    return y;
                });
                function t() {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "identity_change"));
    }
    l.handleE2eIdentityChange = _;
}, 98);