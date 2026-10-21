__d("WAWebResendGroupMsgJob", [
    "WALogger",
    "WAWebDefinePersistedJob",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("resendUserGroupMsg", (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ackTime: n, groupId: r, isDirect: a, msgId: i, msgRecordType: l, msgType: s, oldList: u, phash: c, serverAddressingMode: d }) {
            try {
                const m = yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("resendGroupMsg", {
                    msgId: i,
                    msgType: s,
                    msgRecordType: l,
                    groupId: r,
                    isDirect: a,
                    oldList: u,
                    phash: c,
                    ackTime: n,
                    serverAddressingMode: d
                });
                return m;
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "resendGroupMsgJob: failed to resend message: ",
                    ""
                ])), t).tags("messaging").sendLogs("persisted-group-message-resend-failed");
            }
        });
        return function(e) {
            return t.apply(this, arguments);
        };
    })()).end();
    l.resendGroupMsgJob = s;
}, 98);