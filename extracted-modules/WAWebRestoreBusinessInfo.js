__d("WAWebRestoreBusinessInfo", [
    "WALogger",
    "WAWebApiBusinessProfile",
    "WAWebBackendApi",
    "WAWebBusinessProfileCopyPnDataToLidRows",
    "WAWebBusinessProfileTypes",
    "WAWebSchemaBusinessProfile",
    "WAWebSchemaVerifiedBusinessName",
    "WAWebVerifiedBusinessNameCopyPnDataToLidRows",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebSchemaVerifiedBusinessName").getVerifiedBusinessNameTable().all();
            yield o("WAWebVerifiedBusinessNameCopyPnDataToLidRows").copyVerifiedNamePnDataToLidRows(t);
            const entries = [];
            t.forEach((t)=>{
                let r;
                try {
                    r = o("WAWebWidFactory").createUserWidOrThrow(t.id);
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "restore-business-info: invalid wid"
                    ]))).sendLogs("restore-business-info: invalid wid");
                    return;
                }
                entries.push({
                    wid: o("WAWebWidToJid").widToUserJid(r),
                    contactData: {
                        isBusiness: true,
                        isEnterprise: t.isApi,
                        verifiedName: t.name,
                        verifiedLevel: c(t.level),
                        privacyMode: t.privacyMode
                    }
                });
            });
            yield o("WAWebBackendApi").frontendSendAndReceive("restoreVerifiedBusinessContacts", {
                entries
            });
            const r = yield o("WAWebSchemaBusinessProfile").getBusinessProfileTable().all();
            yield o("WAWebBusinessProfileCopyPnDataToLidRows").copyBusinessProfilePnDataToLidRows(r);
            const profiles = r.map((e)=>o("WAWebApiBusinessProfile").businessProfileFromDbRow(e));
            yield o("WAWebBackendApi").frontendSendAndReceive("restoreBusinessProfiles", {
                profiles
            });
        });
        return u.apply(this, arguments);
    }
    function c(level) {
        switch(level){
            case "unknown":
                return o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.UNKNOWN;
            case "low":
                return o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW;
            case "high":
                return o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH;
        }
        return o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.UNKNOWN;
    }
    l.restoreBusinessInfo = s;
}, 98);