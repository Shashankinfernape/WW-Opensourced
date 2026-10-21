__d("WAWebDefenseModeTransitionListener", [
    "WALogger",
    "WAWebBulkUnquarantineMessagesJob",
    "WAWebUserPrefsGeneral"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c = false;
    function d() {
        if (!c) {
            c = true;
            u = o("WAWebUserPrefsGeneral").getUserPrivacySettings().defenseMode;
            o("WAWebUserPrefsGeneral").privacySettingsEventEmitter.on("all", function() {
                const defenseMode = o("WAWebUserPrefsGeneral").getUserPrivacySettings().defenseMode;
                const n = u === "on_standard";
                const r = defenseMode === "on_standard";
                u = defenseMode;
                if (n && !r) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[DefenseMode] disabled, triggering bulk unquarantine"
                    ])));
                    o("WAWebBulkUnquarantineMessagesJob").bulkUnquarantineMessagesJob().catch((e)=>{
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[DefenseMode] bulk unquarantine failed"
                        ]))).verbose();
                    });
                }
            });
        }
    }
    l.initDefenseModeTransitionListener = d;
}, 98);