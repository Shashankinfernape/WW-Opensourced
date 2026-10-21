__d("WAWebHandlePresence", [
    "Promise",
    "WALogger",
    "WASmaxPresenceServerUpdateRPC",
    "WATimeUtils",
    "WAWebChangeGroupPresenceHandlerAction",
    "WAWebChangePresenceHandlerAction",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = [
        "deny",
        "none",
        "error"
    ];
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const a = o("WASmaxPresenceServerUpdateRPC").receiveServerUpdateRPC(t);
                const i = a.parsedRequest.presenceUpdates;
                if (i.name === "GroupAvailable") {
                    r("WAWebChangeGroupPresenceHandlerAction")({
                        id: o("WAWebJidToWid").chatJidToChatWid(i.value.from),
                        count: i.value.count
                    });
                    return;
                }
                if (i.name === "GroupUnavailable") {
                    r("WAWebChangeGroupPresenceHandlerAction")({
                        id: o("WAWebJidToWid").chatJidToChatWid(i.value.from),
                        count: 0
                    });
                    return;
                }
                i.name;
                const l = o("WAWebJidToWid").lidUserJidToUserLid(i.value.from);
                if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                    return;
                }
                if (!l.isLid()) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[presence] Migrated client has a PN presence"
                    ])));
                    return;
                }
                const c = {
                    id: l,
                    type: i.value.type || "available",
                    deny: i.value.last === "deny" || undefined,
                    t: i.value.type === "unavailable" ? p(i.value.last) : undefined
                };
                r("WAWebChangePresenceHandlerAction")(c);
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), r("getErrorSafe")(error).toString());
                return (u || (u = n("Promise"))).reject(r("getErrorSafe")(error));
            }
        });
        return m.apply(this, arguments);
    }
    function p(last) {
        if (last != null) {
            if (!c.includes(last)) {
                return o("WATimeUtils").castToUnixTime(Number(last));
            }
        } else {
            return o("WATimeUtils").unixTime();
        }
    }
    l.default = d;
}, 98);