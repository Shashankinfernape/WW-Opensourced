__d("WAWebHandleDisappearingModeNotification", [
    "WADeprecatedWapParser",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUpdateDisappearingModeForContact",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new (r("WADeprecatedWapParser"))("disappearingModeNotification", function(e) {
        e.assertTag("notification");
        const t = e.child("disappearing_mode");
        return {
            stanzaId: e.attrString("id"),
            from: o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("from")),
            duration: t.attrInt("duration", 0),
            ts: t.attrTime("t")
        };
    });
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ duration, from, stanzaId, ts }) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleDisappearingModeNotification: received d=",
                ":t=",
                "\n    for ",
                ""
            ])), duration, ts, from.toString()).tags("DM", "DDM");
            yield o("WAWebUpdateDisappearingModeForContact").updateDisappearingModeForContact({
                contactId: from,
                newDuration: duration,
                newSettingTimestamp: ts
            });
            return o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(stanzaId),
                to: o("WAWebCommsWapMd").JID(from),
                class: "notification",
                type: "disappearing_mode"
            });
        });
        return d.apply(this, arguments);
    }
    function m(t) {
        const LOW = o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW;
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("handleDisappearingModeNotification", function() {
            const n = u.parse(t);
            if (n.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), n.error.toString());
                return Promise.reject(n.error);
            }
            return c(n.success);
        }, {
            priority: LOW
        }).waitUntilCompleted({
            node: t
        });
    }
    l.handleDisappearingModeNotificationJob = m;
}, 98);