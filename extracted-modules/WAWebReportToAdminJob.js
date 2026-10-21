__d("WAWebReportToAdminJob", [
    "Promise",
    "WALogger",
    "WASmaxGroupsGetReportedMessagesRPC",
    "WASmaxGroupsReportMessagesRPC",
    "WAStanzaUtils",
    "WAWebBackendErrors",
    "WAWebDBCreateLidPnMappings",
    "WAWebJidToWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = {
                iqTo: o("WAWebWidToJid").widToGroupJid(r),
                reportMessageId: o("WAStanzaUtils").toStanzaId(t.id.id)
            };
            const i = yield o("WASmaxGroupsReportMessagesRPC").sendReportMessagesRPC(a);
            e: {
                const l = i;
                if ((typeof l === "object" && l !== null || typeof l === "function") && l.name === "ReportMessagesResponseSuccess") {
                    return (d || (d = n("Promise"))).resolve();
                }
                if ((typeof l === "object" && l !== null || typeof l === "function") && l.name === "ReportMessagesResponseServerError" && (typeof l.value === "object" && l.value !== null || typeof l.value === "function") && (typeof l.value.errorServerErrors === "object" && l.value.errorServerErrors !== null || typeof l.value.errorServerErrors === "function") && (typeof l.value.errorServerErrors.value === "object" && l.value.errorServerErrors.value !== null || typeof l.value.errorServerErrors.value === "function") && "code" in l.value.errorServerErrors.value && "text" in l.value.errorServerErrors.value) {
                    const u = l.value.errorServerErrors.value.code;
                    const c = l.value.errorServerErrors.value.text;
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while sending a message for admin review"
                    ])));
                    return (d || (d = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(u), c));
                    break e;
                }
                if ((typeof l === "object" && l !== null || typeof l === "function") && l.name === "ReportMessagesResponseClientError" && (typeof l.value === "object" && l.value !== null || typeof l.value === "function") && (typeof l.value.errorReportMessagesClientErrors === "object" && l.value.errorReportMessagesClientErrors !== null || typeof l.value.errorReportMessagesClientErrors === "function") && (typeof l.value.errorReportMessagesClientErrors.value === "object" && l.value.errorReportMessagesClientErrors.value !== null || typeof l.value.errorReportMessagesClientErrors.value === "function") && "code" in l.value.errorReportMessagesClientErrors.value && "text" in l.value.errorReportMessagesClientErrors.value) {
                    const m = l.value.errorReportMessagesClientErrors.value.code;
                    const p = l.value.errorReportMessagesClientErrors.value.text;
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while sending a message for admin review"
                    ])));
                    return (d || (d = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(m), p));
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${l}`);
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {
                iqTo: o("WAWebWidToJid").widToGroupJid(e)
            };
            const r = yield o("WASmaxGroupsGetReportedMessagesRPC").sendGetReportedMessagesRPC(t);
            switch(r.name){
                case "GetReportedMessagesResponseSuccess":
                    {
                        const reports = r.value;
                        const msgToReporterAndOrderMap = new Map;
                        const mappings = [];
                        reports.reportsReport.forEach((e)=>{
                            e.reporter.map((e)=>{
                                const n = o("WAWebJidToWid").userJidToUserWid(e.jid);
                                const r = e.identityMixin?.identityTypes.value.phoneNumber;
                                if (n.isLid() && r != null) {
                                    mappings.push({
                                        lid: n,
                                        pn: o("WAWebJidToWid").userJidToUserWid(r)
                                    });
                                }
                            });
                        });
                        if (mappings.length > 0) {
                            yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                                mappings,
                                flushImmediately: true,
                                learningSource: "report-to-admin"
                            });
                        }
                        reports.reportsReport.forEach((e, order)=>{
                            msgToReporterAndOrderMap.set(e.messageId, {
                                reporters: e.reporter.map((e)=>o("WAWebJidToWid").userJidToUserWid(e.jid)),
                                order
                            });
                        });
                        return (d || (d = n("Promise"))).resolve({
                            reports,
                            msgToReporterAndOrderMap
                        });
                    }
                case "GetReportedMessagesResponseClientError":
                    {
                        const s = r.value.errorGetReportedMessagesClientErrors.value;
                        const { code, text } = s;
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Error while getting reported message to admin for group"
                        ])));
                        return (d || (d = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                    }
                case "GetReportedMessagesResponseServerError":
                    {
                        const _ = r.value.errorServerErrors.value;
                        const { code, text } = _;
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Error while getting reported message to admin for group"
                        ])));
                        return (d || (d = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                    }
            }
        });
        return f.apply(this, arguments);
    }
    l.sendForAdminReview = m;
    l.getReportedMsgs = _;
}, 98);