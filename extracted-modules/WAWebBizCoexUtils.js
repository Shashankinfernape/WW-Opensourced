__d("WAWebBizCoexUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebCoexPrivacySysMsgWamEvent",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgKey",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebSchemaChat",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumCoexSysMsgInsertionChannel",
    "WAWebWamEnumCoexSysMsgStateTransitionAttempt",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 99;
    const u = [
        "biz_account_type_is_hosted",
        "biz_account_type_changed_to_hosted",
        "biz_me_account_type_is_hosted",
        "biz_me_account_type_is_hosted_transition"
    ];
    const c = new Set;
    const d = new Set;
    function m(e) {
        return e.some((e)=>e.isHosted());
    }
    function p(e, t) {
        if (e != null && e[0]?.id === s) {
            _(t);
        }
    }
    function _(e) {
        if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
            o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob([
                e
            ], null, null);
        } else {
            o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.addOfflinePendingDevice(e.toString(), null);
        }
    }
    function f(e) {
        if (e == null) {
            return false;
        }
        return u.includes(e);
    }
    function g(e) {
        return !!(o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() || e.isHosted === true);
    }
    function h(e) {
        return e.privacyMode?.hostStorage === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook;
    }
    function y(e) {
        b(e.map(([t, n])=>{
            if (t == null) {
                return null;
            }
            return {
                id: t.id,
                subtype: t.subtype
            };
        }));
    }
    function C(e) {
        b([
            {
                id: e?.id?.toString(),
                subtype: e?.subtype,
                channel: o("WAWebWamEnumCoexSysMsgInsertionChannel").COEX_SYS_MSG_INSERTION_CHANNEL.HISTORY_SYNC
            }
        ]);
    }
    function b(t) {
        try {
            const a = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
            const coexSysMsgMultiDeviceId = a?.device ?? 0;
            t.forEach((e)=>{
                if (e?.id != null) {
                    const t = r("WAWebMsgKey").fromString(e.id);
                    const n = {
                        coexSysMsgInsertionSuccess: true,
                        coexSysMsgMultiDeviceId,
                        coexSysMsgStateTransitionAttempt: o("WAWebWamEnumCoexSysMsgStateTransitionAttempt").COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.E2EE_TO_HOSTED,
                        coexSysMsgIsSelf: false
                    };
                    const l = new (o("WAWebCoexPrivacySysMsgWamEvent")).CoexPrivacySysMsgWamEvent(n);
                    if (e.channel != null) {
                        l.coexSysMsgInsertionChannel = e.channel;
                    }
                    switch(e.subtype){
                        case "biz_account_type_is_hosted":
                            {
                                l.coexSysMsgStateTransitionAttempt = o("WAWebWamEnumCoexSysMsgStateTransitionAttempt").COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.HOSTED_TO_HOSTED;
                                l.coexSysMsgBusinessId = t.remote.user;
                                break;
                            }
                        case "biz_account_type_changed_to_hosted":
                            {
                                l.coexSysMsgStateTransitionAttempt = o("WAWebWamEnumCoexSysMsgStateTransitionAttempt").COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.E2EE_TO_HOSTED;
                                l.coexSysMsgBusinessId = t.remote.user;
                                break;
                            }
                        case "biz_me_account_type_is_hosted":
                            {
                                l.coexSysMsgIsSelf = true;
                                l.coexSysMsgStateTransitionAttempt = o("WAWebWamEnumCoexSysMsgStateTransitionAttempt").COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.HOSTED_TO_HOSTED;
                                l.coexSysMsgBusinessId = a?.user ?? "";
                                break;
                            }
                        case "biz_me_account_type_is_hosted_transition":
                            {
                                l.coexSysMsgIsSelf = true;
                                l.coexSysMsgStateTransitionAttempt = o("WAWebWamEnumCoexSysMsgStateTransitionAttempt").COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.E2EE_TO_HOSTED;
                                l.coexSysMsgBusinessId = a?.user ?? "";
                                break;
                            }
                        case "encrypt":
                            {
                                l.coexSysMsgStateTransitionAttempt = o("WAWebWamEnumCoexSysMsgStateTransitionAttempt").COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.HOSTED_TO_E2EE;
                                l.coexSysMsgBusinessId = t?.remote?.user;
                                break;
                            }
                        default:
                            return;
                    }
                    l.commit();
                }
            });
        } catch (error) {
            const l = r("getErrorSafe")(error);
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coex] wam event commit failed"
            ]))).catching(l).verbose().sendLogs("coex wam event commit failed");
        }
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (c.has(e)) {
                return false;
            }
            const t = yield o("WAWebSchemaChat").getChatTable().get(e, false);
            c.add(e);
            return !t;
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        c.delete(e.toString());
    }
    function L(e) {
        const t = `${e.toString()}_${o("WATimeUtils").unixTime().toString()}`;
        if (d.has(t)) {
            return true;
        }
        d.add(t);
        return false;
    }
    function E() {
        d.clear();
    }
    l.HOSTED_DEVICE_ID = s;
    l.fanoutListContainsHostedDevice = m;
    l.triggerUsyncForCoexDeviceAdd = p;
    l.triggerUsyncForCoexUpdate = _;
    l.isCoexSystemMsgType = f;
    l.isMeOrCurrentContactHosted = g;
    l.isCloudApiContact = h;
    l.sendWamCoexPrivacySysMsgInsertSuccess = y;
    l.sendWamCoexPrivacySysMsgHistorySyncInsert = C;
    l.shouldCreateFallbackHostedAdvSystemMsgOnPlaceholder = v;
    l.deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache = R;
    l.shouldDedupInitialHostedSystemMsg = L;
    l.clearDedupInitialHostedSystemMsgCache = E;
}, 98);