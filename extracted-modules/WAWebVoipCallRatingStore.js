__d("WAWebVoipCallRatingStore", [
    "WALogger",
    "WAMd5",
    "WAWebCoreActionsODS",
    "WAWebLocalStorage",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    const u = "wa_voip_fieldstats_handoff_dedup_v1";
    function c(error) {
        o("WAWebCoreActionsODS").logCallFieldstatsDedupMarkerFailed();
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [Fieldstats] persisted handoff marker unavailable"
        ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-fieldstats-dedup-marker-failed", {
            employeeSampling: 1,
            sampling: 0.01,
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
        });
    }
    function d(e) {
        try {
            const a = JSON.parse(e);
            const i = a.call_ended_stats?.call_random_id ?? a.joinable_call_stats?.call_random_id;
            if (typeof i === "string" && i !== "") {
                return o("WAMd5").md5(`call:${i}`);
            }
        } catch (e) {}
        return o("WAMd5").md5(`payload:${e}`);
    }
    function m({ calleeOfferToRingT, callEnterPipModeCount, callFromUi, callRandomId, incomingCallUiAction, isAppInBgWhenCallStarts, jsonDataStr, lobbyEntryPoint }) {
        const c = {
            calleeOfferToRingT,
            callEnterPipModeCount,
            callFromUi,
            callRandomId,
            incomingCallUiAction,
            isAppInBgWhenCallStarts,
            jsonDataStr,
            lobbyEntryPoint
        };
        s = c;
        return c;
    }
    function p() {
        return s;
    }
    function _(e) {
        if (s === e) {
            s = null;
        }
    }
    function f(e) {
        try {
            if (r("WAWebLocalStorage") == null) {
                throw r("err")("localStorage unavailable");
            }
            r("WAWebLocalStorage").setItem(u, d(e));
        } catch (error) {
            c(error);
        }
    }
    function g(e) {
        try {
            if (r("WAWebLocalStorage") == null) {
                throw r("err")("localStorage unavailable");
            }
            return r("WAWebLocalStorage").getItem(u) === d(e);
        } catch (error) {
            c(error);
            return false;
        }
    }
    l.setPendingFieldstatsJsonStr = m;
    l.getPendingFieldstats = p;
    l.clearPendingFieldstats = _;
    l.markPersistedFieldstatsHandedOff = f;
    l.werePersistedFieldstatsHandedOff = g;
}, 98);