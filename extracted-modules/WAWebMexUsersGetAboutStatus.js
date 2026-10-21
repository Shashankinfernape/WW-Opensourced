__d("WAWebMexUsersGetAboutStatus", [
    "$InternalEnum",
    "WAWebMexUsync",
    "WAWebTrustedContactsUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "EMPTY",
        "NOT_ALLOWED",
        "NO_CHANGE"
    ]);
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ tcToken, wid }) {
            const a = {
                jid: wid.toJid()
            };
            if (tcToken != null) {
                a.privacy_token = {
                    tctoken: o("WAWebTrustedContactsUtils").encodeTcTokenForMex(tcToken)
                };
            }
            const i = yield o("WAWebMexUsync").mexUsyncQuery({
                users: [
                    a
                ],
                telemetry: {
                    context: "INTERACTIVE"
                },
                fetch: {
                    about_status: true
                }
            });
            const i_response = i.response;
            if (i_response != null) {
                const c = i_response[0].about_status_info?.text;
                const d = e.cast(i_response[0].about_status_info?.status);
                if (d == null) {
                    return {
                        status: c,
                        state: null
                    };
                }
                if (d === e.NOT_ALLOWED) {
                    return {
                        status: "",
                        state: null
                    };
                }
                if (d === e.EMPTY) {
                    return {
                        status: null,
                        state: null
                    };
                }
                return {
                    state: d
                };
            }
            return {
                state: e.EMPTY
            };
        });
        return u.apply(this, arguments);
    }
    l.getMexUsersAboutStatus = s;
}, 98);