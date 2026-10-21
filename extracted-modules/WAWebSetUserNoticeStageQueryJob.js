__d("WAWebSetUserNoticeStageQueryJob", [
    "Promise",
    "WAComms",
    "WASmaxUserNoticeSetRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebTos",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        0: "UNKNOWN",
        1: "UNKNOWN",
        2: "UNKNOWN",
        3: "UNKNOWN",
        4: "UNKNOWN",
        5: "ACCEPTED"
    };
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, noticeStage) {
            const a = {
                stageMixinArgs: {
                    noticeId: t,
                    noticeStage
                }
            };
            const i = o("WASmaxUserNoticeSetRPC").makeSetRequest(a);
            const l = yield o("WAComms").sendSmaxStanza(i);
            const u = yield o("WASmaxUserNoticeSetRPC").parseSetResponseSuccess(l, i);
            if (u.success) {
                const c = o("WATimeUtils").unixTime();
                const d = s[noticeStage];
                o("WAWebTos").TosManager.setState(t.toString(), d, c);
                return (e || (e = n("Promise"))).resolve(true);
            }
            const m = yield o("WASmaxUserNoticeSetRPC").parseSetResponseClientError(l, i);
            if (m.success) {
                const p = m.value.errorIQErrorBadRequestMixin;
                const { code, text } = p;
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
            }
            const g = yield o("WASmaxUserNoticeSetRPC").parseSetResponseServerError(l, i);
            if (g.success) {
                const h = g.value.errorIQErrorInternalServerErrorOrRateOverlimitMixinGroup.value;
                const { code, text } = h;
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
            }
            return (e || (e = n("Promise"))).resolve(false);
        });
        return c.apply(this, arguments);
    }
    l.SetUserNoticeStageQueryJob = u;
}, 98);