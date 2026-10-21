__d("WAWebDBChatEphemeralExemptionData", [
    "WAWebChatEphemeralExemptionCache",
    "WAWebDBUpdateChatTable",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.toString();
            if (r("WAWebChatEphemeralExemptionCache").has(t)) {
                return r("WAWebChatEphemeralExemptionCache").get(t);
            }
            const n = yield o("WAWebSchemaChat").getChatTable().get(e.toString(), false);
            const a = n == null ? null : {
                id: t,
                ephemeralDuration: n?.ephemeralDuration,
                ephemeralDisplayedExemptions: n?.ephemeralDisplayedExemptions
            };
            r("WAWebChatEphemeralExemptionCache").add(t, a);
            return a;
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n) {
        const a = e.toString();
        r("WAWebChatEphemeralExemptionCache").add(a, {
            id: a,
            ephemeralDuration: t,
            ephemeralDisplayedExemptions: n
        });
        o("WAWebDBUpdateChatTable").updateChatTable(e, {
            ephemeralDisplayedExemptions: n
        }).catch(()=>{});
    }
    function c(e, t) {
        const o = e.toString();
        const a = r("WAWebChatEphemeralExemptionCache").get(o);
        const i = {
            id: o,
            ephemeralDuration: t,
            ephemeralDisplayedExemptions: a?.ephemeralDisplayedExemptions ?? null
        };
        r("WAWebChatEphemeralExemptionCache").add(o, i);
    }
    l.getChatEphemeralExemptionDataFromChat = e;
    l.persistsEphemeralDisplayedExemptions = u;
    l.updateEphemeralDurationCache = c;
}, 98);