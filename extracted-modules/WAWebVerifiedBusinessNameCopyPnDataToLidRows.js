__d("WAWebVerifiedBusinessNameCopyPnDataToLidRows", [
    "WALogger",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!o("WAWebUserPrefsKeys").UserPrefs.VerifiedBusinessNameLidTableMigrationComplete) {
                let a = false;
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "verified-business-name"
                ], (()=>{
                    const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*([i]) {
                        try {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "copyVerifiedNamePnDataToLidRows: start migration"
                            ])));
                            const l = r("compactMap")(t, function(e) {
                                if (e == null) {
                                    return null;
                                }
                                const s = o("WAWebWidFactory").createUserWidOrThrow(e?.id);
                                if (s.isLid()) {
                                    return null;
                                }
                                const u = o("WAWebLidMigrationUtils").toPn(s);
                                const c = o("WAWebLidMigrationUtils").toLid(s);
                                if (c == null || u?.user == null) {
                                    return null;
                                }
                                return {
                                    id: c.toString(),
                                    name: e.name ?? e.name,
                                    isApi: e.isApi ?? e.isApi,
                                    isSmb: e.isSmb ?? e.isSmb,
                                    level: e.level ?? e.level,
                                    privacyMode: e.privacyMode ?? e.privacyMode,
                                    serial: e.serial ?? e.serial
                                };
                            });
                            yield i.bulkCreateOrMerge(l);
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "copyVerifiedNamePnDataToLidRows: end migration"
                            ])));
                            a = true;
                        } catch (error) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "copyVerifiedNamePnDataToLidRows: error ",
                                ""
                            ])), error).sendLogs("verified-business-name-lid-migration");
                            a = false;
                        }
                    });
                    return function(e) {
                        return i.apply(this, arguments);
                    };
                })());
                r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.VerifiedBusinessNameLidTableMigrationComplete, a);
            }
        });
        return d.apply(this, arguments);
    }
    l.copyVerifiedNamePnDataToLidRows = c;
}, 98);