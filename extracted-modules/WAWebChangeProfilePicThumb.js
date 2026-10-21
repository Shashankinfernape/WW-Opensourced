__d("WAWebChangeProfilePicThumb", [
    "Promise",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactProfilePicThumbBridge",
    "WAWebProfilePicConstants",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = [
                c(t, r)
            ];
            if (t.isUser()) {
                const i = o("WAWebApiContact").getAlternateUserWid(t);
                if (i) {
                    a.push(c(i, r));
                }
            }
            yield (e || (e = n("Promise"))).all(a);
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t === o("WAWebProfilePicConstants").ProfilePicCommand.Remove) {
                yield o("WAWebContactProfilePicThumbBridge").persistProfilePicToDB(e);
                o("WAWebBackendApi").frontendFireAndForget("removeProfilePicThumb", {
                    wid: e
                });
            } else {
                return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("setProfilePicThumb", {
                    wid: e
                });
            }
        });
        return d.apply(this, arguments);
    }
    l.changeProfilePicThumb = s;
}, 98);