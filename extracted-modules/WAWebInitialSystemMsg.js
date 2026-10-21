__d("WAWebInitialSystemMsg", [
    "WAWebABPropsSaga",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebApiDeviceList",
    "WAWebBizCoexUtils",
    "WAWebBotSystemMsg",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebContactSystemMsg",
    "WAWebMobilePlatforms",
    "WAWebPrivacyModeSystemMsg",
    "WAWebProtobufsAdv.pb",
    "WAWebSagaSystemMsg",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (r("WAWebWid").isPSA(e)) {
                return [
                    o("WAWebContactSystemMsg").genEncryptNotificationMsg(e, "chat_psa")
                ];
            }
            const a = e.isSupportAgentBot();
            if (e.isBot() && !a) {
                return [
                    o("WAWebBotSystemMsg").genBotInitSystemMsg(e)
                ];
            }
            if (r("WAWebWid").isBroadcast(e)) {
                return u(e);
            }
            if (a || r("WAWebWid").isCAPISupportAccount(e)) {
                const i = [
                    o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "support_system_message")
                ];
                if (a && r("WAWebWid").isCAPISupportAccount(e) && o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
                    i.push(o("WAWebSagaSystemMsg").genSagaInitSystemMsg(e));
                }
                return i;
            }
            if (n === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P) {
                return [
                    o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(e)
                ];
            }
            if (e.isUser()) {
                if (o("WAWebMobilePlatforms").isSMB() && (yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) === true) {
                    return [
                        r("nullthrows")(o("WAWebAdvHostedAccountTypeSystemMsg").genAdvMeAccountIsHostedNotificationMsg(e, e))
                    ];
                }
                const l = o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv();
                if (l && e.isUser()) {
                    const s = yield o("WAWebApiDeviceList").getDeviceRecord(e);
                    if (s?.advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED || s?.deletedChangedToHost === true) {
                        if (o("WAWebBizCoexUtils").shouldDedupInitialHostedSystemMsg(e)) {
                            return [];
                        }
                        return [
                            r("nullthrows")(o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeInitialSysMsg(e, e))
                        ];
                    }
                }
            }
            const c = [];
            const d = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(t);
            e: {
                if (d === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE) {
                    c.push(o("WAWebContactSystemMsg").genEncryptNotificationMsg(e));
                    break e;
                }
                if (d === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP) {
                    c.push(o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "biz_privacy_mode_init_bsp"));
                    break e;
                }
                if (d === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB) {
                    c.push(o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "biz_privacy_mode_init_fb"));
                    break e;
                }
                if (d === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP) {
                    c.push(o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "is_capi_hosted_group"));
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${d}`);
            }
            if (n === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P && o("WAWebBotTos").hasAcceptedBizBotTos()) {
                c.push(o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(e));
            }
            return c;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMobilePlatforms").isSMB()) {
                const t = yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount();
                if (t === true) {
                    return [
                        o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "biz_privacy_mode_init_fb")
                    ];
                }
            }
            return [
                o("WAWebContactSystemMsg").genEncryptNotificationMsg(e)
            ];
        });
        return c.apply(this, arguments);
    }
    l.default = e;
}, 98);