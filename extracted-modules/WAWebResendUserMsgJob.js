__d("WAWebResendUserMsgJob", [
    "WALogger",
    "WAWebDefinePersistedJob",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("resendUserMsg", (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ackTime: n, excludeList: r, msgId: a, msgRecordType: i, msgType: l }) {
            try {
                const s = yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("resendUserMsg", {
                    msgId: a,
                    msgType: l,
                    msgRecordType: i,
                    excludeList: r,
                    ackTime: n
                });
                return s;
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsgJob: failed to resend message: ",
                    ""
                ])), t).tags("messaging").sendLogs("persisted-message-resend-failed");
            }
        });
        return function(e) {
            return t.apply(this, arguments);
        };
    })()).end();
    l.resendUserMsgJob = s;
}, 98);