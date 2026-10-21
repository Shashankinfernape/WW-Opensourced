__d("WAWebVoipLidUtils", [
    "WALogger",
    "WAPromiseEach",
    "WAWebABProps",
    "WAWebAsISOCountryCode",
    "WAWebContactExternalUserState",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandlePushnameUpdate",
    "WAWebSetUsernameJob",
    "WAWebUpdateContactExternalUserState",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebVoipGatingUtils",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const flushImmediately = !e.is_offline;
            const e_peer_jid = e.peer_jid;
            if (e_peer_jid.isUser()) {
                const a = e.caller_pn;
                yield c({
                    jid: e_peer_jid,
                    phoneNumber: a != null && a.isUser() ? a : null,
                    username: e.caller_username,
                    countryCode: e.caller_country_code,
                    pushName: e.caller_push_name,
                    flushImmediately
                });
            }
            const e_group_info_updates = e.group_info_updates;
            if (e_group_info_updates != null) {
                let l = -1;
                for(let s = 0; s < e_group_info_updates.length; s++){
                    if (e_group_info_updates[s].jid.isUser()) {
                        l = s;
                    }
                }
                yield o("WAPromiseEach").promiseEach(e_group_info_updates, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                        const e_jid = e.jid;
                        if (e_jid.isUser()) {
                            const o = e.user_pn;
                            return c({
                                jid: e_jid,
                                phoneNumber: o != null && o.isUser() ? o : null,
                                username: e.username,
                                pushName: e.push_name,
                                accountKind: e.account_kind,
                                flushImmediately: flushImmediately && n === l
                            });
                        }
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                })());
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ accountKind, countryCode, flushImmediately, jid, phoneNumber, pushName, username }) {
            const d = o("WAWebWidFactory").asUserWidOrThrow(jid);
            const p = m(accountKind);
            if (p != null && o("WAWebABProps").getABPropConfigValue("web_guest_calling_representation_enabled")) {
                o("WAWebUpdateContactExternalUserState").updateContactExternalUserState(jid, p);
            }
            if (!r("isStringNullOrEmpty")(pushName)) {
                o("WAWebHandlePushnameUpdate").updatePushname(jid, pushName, false);
            }
            if (d.isLid()) {
                if (username != null && o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                    const _ = o("WAWebUsernameTypes").asMaybeUsername(username);
                    if (_ != null) {
                        const f = {
                            userId: d,
                            username: _
                        };
                        if (countryCode != null) {
                            const g = o("WAWebAsISOCountryCode").asISOCountryCode(countryCode);
                            if (g != null) {
                                f.usernameCountryCode = g;
                            }
                        }
                        yield o("WAWebSetUsernameJob").setUsernamesJob([
                            f
                        ]);
                        if (phoneNumber != null && o("WAWebABProps").getABPropConfigValue("enable_calling_phone_number_privacy")) {
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] PN+username given for LID, skip LID<>PN mapping"
                            ]))).sendLogs("voip_phone_number_privacy_enforcement_violated");
                            return;
                        }
                    }
                }
                if (phoneNumber != null && !o("WAWebVoipGatingUtils").isGuestViewer()) {
                    yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                        mappings: [
                            {
                                lid: d,
                                pn: o("WAWebWidFactory").asUserWidOrThrow(phoneNumber)
                            }
                        ],
                        flushImmediately,
                        learningSource: "voip-lid"
                    });
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m(accountKind) {
        return ((e)=>{
            if (e === o("WAWebVoipWaCallEnums").AccountKind.Guest) {
                return o("WAWebContactExternalUserState").ExternalUserState.GuestUser;
            }
            if (e === o("WAWebVoipWaCallEnums").AccountKind.Unknown) {
                return null;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(o("WAWebVoipWaCallEnums").wireStringToAccountKind(accountKind));
    }
    l.persistAttributesAndLidMappingsForCall = s;
    l.attemptPersistLidMappingAndUserAttributes = c;
}, 98);