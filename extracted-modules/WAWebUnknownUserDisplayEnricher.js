__d("WAWebUnknownUserDisplayEnricher", [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebCooldownBatcher",
    "WAWebUnknownUserDisplayStore",
    "WAWebUnknownUserDisplayedLogger",
    "WAWebUnknownUserRecoveryManager",
    "WAWebUnknownUserSelfHealFromDb",
    "WAWebWamEnumUnknownUserRecoveryPath",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const presence = {
        hasUn: null,
        hasPn: null,
        hasPush: null,
        inDb: null
    };
    const s = o("WAWebCooldownBatcher").createCooldownBatcher({
        windowMs: 250,
        maxWindowMs: 5000,
        cooldownMs: 0
    }, (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = yield o("WAWebApiContact").bulkGetContactRecord(t);
                const a = n.map((e, n)=>{
                    const o = t[n];
                    return {
                        hasUn: e?.username != null && e.usernameSoftDeleted !== true,
                        hasPn: o.isLid() ? e?.phoneNumber != null : o.isRegularUserPn(),
                        hasPush: !r("isStringNullOrEmpty")(e?.pushname),
                        inDb: e != null
                    };
                });
                o("WAWebUnknownUserSelfHealFromDb").healUnknownUsersFromDbRows(t, n);
                for(let i = 0; i < t.length; i++){
                    o("WAWebUnknownUserRecoveryManager").maybeRecoverUnknownUser(t[i], a[i]);
                }
                return t.map((e, t)=>({
                        isRecovering: o("WAWebUnknownUserSelfHealFromDb").isSelfHealInFlight(e) || o("WAWebUnknownUserRecoveryManager").isUsyncRecoveryInFlight(e),
                        presence: a[t]
                    }));
            } catch (n) {
                return t.map((t)=>({
                        isRecovering: o("WAWebUnknownUserSelfHealFromDb").isSelfHealInFlight(t) || o("WAWebUnknownUserRecoveryManager").isUsyncRecoveryInFlight(t),
                        presence
                    }));
            }
        });
        return function(e) {
            return t.apply(this, arguments);
        };
    })());
    const u = new Set([
        "contact_info",
        "chat_list",
        "chat_header",
        "group_member_list",
        "group_message_quoted",
        "group_message_cag_masked",
        "group_message_cag_masked_bare",
        "group_message_cag_masked_noparent",
        "group_message_cag",
        "group_message_community_sub",
        "group_message_group",
        "group_system_message",
        "group_mention"
    ]);
    function c(e, t) {
        const n = o("WATimeUtils").unixTimeMs();
        if (o("WAWebUnknownUserDisplayedLogger").unknownUserLoggingEnabled()) {
            s(t).then(({ isRecovering, presence })=>{
                if (!isRecovering) {
                    d(e, t, n, presence);
                }
            }, ()=>d(e, t, n, null));
        }
    }
    function d(e, t, clientTsMs, r) {
        if (o("WAWebUnknownUserDisplayedLogger").reserveUnknownUserEmission()) {
            const a = u.has(e) ? o("WAWebUnknownUserDisplayStore").recordDisplayForJid(t) : null;
            o("WAWebUnknownUserDisplayedLogger").commitUnknownUserDisplayed(e, t, {
                clientTsMs,
                isFirstDisplay: a?.isFirstDisplay,
                durationInSecs: a?.durationInSecs,
                hasUn: r?.hasUn,
                hasPn: r?.hasPn,
                hasPush: r?.hasPush,
                inDb: r?.inDb,
                unknownUserRecoveryPath: r != null ? o("WAWebUnknownUserRecoveryManager").getUnknownUserRecoveryPath(t, r) : o("WAWebWamEnumUnknownUserRecoveryPath").UNKNOWN_USER_RECOVERY_PATH.NONE
            });
        }
    }
    l.logUnknownUserDisplayed = c;
}, 98);