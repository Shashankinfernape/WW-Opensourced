__d("WAWebSetUserDisclosureStageQueryJob", [
    "Promise",
    "WAComms",
    "WASmaxUserNoticeSetResultRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebTos",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        5: "ACCEPTED",
        105: "SHOWN",
        155: "ACCEPTED",
        160: "SOFT_OPT_IN",
        "-1": "UNKNOWN"
    };
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(trackableId, trackableResult) {
            const a = {
                trackableId,
                trackableResult
            };
            const i = yield o("WASmaxUserNoticeSetResultRPC").makeSetResultRequest(a);
            const l = yield o("WAComms").sendSmaxStanza(i);
            const u = yield o("WASmaxUserNoticeSetResultRPC").parseSetResultResponseSuccess(l, i);
            if (u.success) {
                const c = o("WATimeUtils").unixTime();
                const d = s[trackableResult];
                o("WAWebTos").TosManager.setState(trackableId.toString(), d, c);
                return (e || (e = n("Promise"))).resolve(true);
            }
            const m = yield o("WASmaxUserNoticeSetResultRPC").parseSetResultResponseClientError(l, i);
            if (m.success) {
                const p = m.value.errorIQErrorBadRequestOrRateOverlimitMixinGroup.value;
                const { code, text } = p;
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
            }
            const g = yield o("WASmaxUserNoticeSetResultRPC").parseSetResultResponseServerError(l, i);
            if (g.success) {
                const h = g.value.errorIQErrorInternalServerErrorMixin;
                const { code, text } = h;
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
            }
            return (e || (e = n("Promise"))).resolve(false);
        });
        return c.apply(this, arguments);
    }
    l.SetUserDisclosureStageQueryJob = u;
}, 98);