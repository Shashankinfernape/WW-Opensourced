__d("WAWebBusinessProfileCopyPnDataToLidRows", [
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
            if (!r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.BusinessProfileLidTableMigrationComplete)) {
                let a = false;
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "business-profile"
                ], (()=>{
                    const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*([i]) {
                        try {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "copyBusinessProfilePnDataToLidRows: start migration"
                            ])));
                            const l = r("compactMap")(t, function(e) {
                                if (e == null) {
                                    return null;
                                }
                                const l = o("WAWebWidFactory").createUserWidOrThrow(e?.id);
                                if (l.isLid()) {
                                    return null;
                                }
                                const s = o("WAWebLidMigrationUtils").toPn(l);
                                const u = o("WAWebLidMigrationUtils").toLid(l);
                                if (u == null || s?.user == null) {
                                    return null;
                                }
                                return {
                                    id: u.toString(),
                                    commandsDescription: e.commandsDescription ?? e.commandsDescription,
                                    commands: e.commands ?? e.commands,
                                    prompts: e.prompts ?? e.prompts,
                                    automatedType: e.automatedType ?? e.automatedType,
                                    welcomeMsgProtocolMode: e.welcomeMsgProtocolMode ?? e.welcomeMsgProtocolMode
                                };
                            });
                            yield i.bulkCreateOrMerge(l);
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "copyBusinessProfilePnDataToLidRows: end migration"
                            ])));
                            a = true;
                        } catch (error) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "copyBusinessProfilePnDataToLidRows: error ",
                                ""
                            ])), error).sendLogs("business-profile-lid-migration");
                            a = false;
                        }
                    });
                    return function(e) {
                        return i.apply(this, arguments);
                    };
                })());
                r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.BusinessProfileLidTableMigrationComplete, a);
            }
        });
        return d.apply(this, arguments);
    }
    l.copyBusinessProfilePnDataToLidRows = c;
}, 98);