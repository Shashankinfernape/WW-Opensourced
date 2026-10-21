__d("WAWebContactStatusBridge", [
    "WALogger",
    "WAWebABProps",
    "WAWebAck",
    "WAWebApiStatus",
    "WAWebGetAboutQueryJob",
    "WAWebMexUsersGetAboutStatus",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
    "WAWebSendReadReceiptJob",
    "WAWebSetAboutJob",
    "asyncToGeneratorRuntime",
    "cr:11133",
    "cr:12317"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const t_wid = t.wid;
            if ((n("cr:11133") == null ? undefined : n("cr:11133")()) === true && (n("cr:12317") == null ? undefined : n("cr:12317").getComms()) == null) {
                return {
                    id: t_wid,
                    stale: true,
                    status: null
                };
            }
            if (o("WAWebABProps").getABPropConfigValue("mex_usync_about_status")) {
                const a = yield o("WAWebMexUsersGetAboutStatus").getMexUsersAboutStatus(t);
                const { state, status } = a;
                if (state == null) {
                    return {
                        id: t_wid,
                        status
                    };
                }
                return {
                    id: t_wid,
                    stale: true,
                    status: null
                };
            }
            return o("WAWebGetAboutQueryJob").getAbout(t).then((t)=>{
                if (t.error) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getStatus: failed ",
                        " : ",
                        ""
                    ])), t.error.errorCode, t.error.errorText);
                    return {
                        id: t.id,
                        stale: true,
                        status: ""
                    };
                }
                return {
                    id: t.id,
                    status: t.status
                };
            });
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return o("WAWebRestOperations").runRestOperation(o("WAWebScheduledOperations").ScheduledOperation.SET_ABOUT, function() {
            return o("WAWebSetAboutJob").sendSetAbout(e);
        }, function() {
            return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilCompleted(o("WAWebPersistedJobDefinitions").jobSerializers.setAbout(e));
        });
    }
    function d() {
        return o("WAWebApiStatus").getAllStatuses();
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            try {
                yield o("WAWebSendReadReceiptJob").markStatusRead(e, t, n);
                e.ack = o("WAWebAck").ACK.READ;
                return true;
            } catch (e) {
                return false;
            }
        });
        return p.apply(this, arguments);
    }
    l.getStatus = s;
    l.setMyStatus = c;
    l.queryStatusAll = d;
    l.sendReadStatus = m;
}, 98);