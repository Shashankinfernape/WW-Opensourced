__d("WAWebGetUserDisclosuresQueryJob", [
    "WASmaxUserNoticeGetDisclosuresRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const getUserDisclosuresT = o("WATimeUtils").unixTime();
            const t = yield o("WASmaxUserNoticeGetDisclosuresRPC").sendGetDisclosuresRPC({
                getUserDisclosuresT
            });
            switch(t.name){
                case "GetDisclosuresResponseClientSuccess":
                    return t.value.notice;
                case "GetDisclosuresResponseClientError":
                    {
                        const n = t.value.errorIQErrorBadRequestMixin;
                        const { code, text } = n;
                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
                    }
                case "GetDisclosuresResponseServerError":
                    {
                        const i = t.value.errorUserNoticeServerError.value;
                        const { code, text } = i;
                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
                    }
            }
        });
        return s.apply(this, arguments);
    }
    l.queryAllUserDisclosures = e;
}, 98);