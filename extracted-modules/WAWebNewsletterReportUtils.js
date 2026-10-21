__d("WAWebNewsletterReportUtils", [
    "Promise",
    "WAJids",
    "WALogger",
    "WASmaxSpamNewsletterReportRPC",
    "WASmaxSpamStatusReportV2RPC",
    "WAWebDBMsgUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgType",
    "WAWebOutgoingMessage",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportSpamJob",
    "WAWebReportUtils",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(t) {
        e: {
            const n = t;
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.name === "NewsletterReportResponseError" && "value" in n) {
                const r = n.value;
                const a = r.errorSpamIqErrors.value.code;
                const i = r.errorSpamIqErrors.name;
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseNewsletterReportResponse: server response with ",
                    ", ",
                    ""
                ])), a, i);
                return {
                    errorCode: a,
                    errorText: i
                };
                break e;
            }
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.name === "NewsletterReportResponseSuccess" && "value" in n) {
                const l = n.value;
                return l;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
        }
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.parentMsgKey != null) {
                return o("WAWebDBMsgUtils").getMsgByMsgKey(e.parentMsgKey);
            }
            return null;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e == null) {
                return o("WAWebReportSpamJob").loadMsgsForSpamReport(t, o("WAWebReportSpamJob").SPAM_REPORT_MESSAGE_COUNT, null);
            }
            const n = [
                e
            ];
            if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION && e.pollContentType === o("WAWebPollCreationUtils").PollContentType.IMAGE) {
                n.push(...o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id));
            } else if (e.associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL) {
                const r = yield d(e);
                if (r != null) {
                    n.push(...o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(r.id));
                }
            }
            return n;
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n, r) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            const t_serverId = t.serverId;
            if (t_serverId == null) {
                throw r("err")("reportNewsletterStatus failed: missing serverId");
            }
            const spamListJid = o("WAJids").toNewsletterJid(e.id.toJid());
            const e_name = e.name;
            const c = o("WAWebReportSpamJob").getSpamMessageProtobuf(o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Report, t));
            const plaintextElementValue = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, c).readByteArrayView();
            const newsletterPlaintextPayloadMixinArgs = {
                plaintextElementValue
            };
            const statusNewsletterTextOrMediaMixinGroupArgs = t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? {
                statusNewsletterMedia: {
                    plaintextMediatype: "image",
                    newsletterPlaintextPayloadMixinArgs
                }
            } : t.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? {
                statusNewsletterMedia: {
                    plaintextMediatype: "video",
                    newsletterPlaintextPayloadMixinArgs
                }
            } : {
                statusNewsletterText: {
                    newsletterPlaintextPayloadMixinArgs
                }
            };
            const _ = babelHelpers.extends({
                spamListSpamFlow: n,
                spamListWiTraceId: a,
                spamListJid
            }, e_name != null && e_name !== "" ? {
                entitySubjectMixinArgs: {
                    spamListSubject: e_name
                }
            } : null, {
                reportableNewsletterStatusMixinArgs: {
                    statusServerId: t_serverId,
                    statusT: t.t,
                    statusNewsletterTextOrMediaMixinGroupArgs
                }
            });
            const f = yield o("WASmaxSpamStatusReportV2RPC").sendStatusReportV2RPC(_);
            e: {
                const g = f;
                if ((typeof g === "object" && g !== null || typeof g === "function") && g.name === "StatusReportV2ResponseError" && "value" in g) {
                    const h = g.value;
                    const y = h.errorIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup.value;
                    const { code, text } = y;
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "reportNewsletterStatus: server error response ",
                        ""
                    ])), code);
                    return {
                        errorCode: code,
                        errorText: text
                    };
                    break e;
                }
                if ((typeof g === "object" && g !== null || typeof g === "function") && g.name === "StatusReportV2ResponseSuccess" && "value" in g) {
                    const v = g.value;
                    return v;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${g}`);
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, t, n, r) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a) {
            const i = yield p(t, e);
            let l;
            const s = yield (u || (u = n("Promise"))).all(i.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const n = yield o("WAWebReportUtils").getMessageMixinArgs(t);
                    if (n != null) {
                        l = babelHelpers.extends({
                            messageFrom: o("WAJids").toNewsletterJid(e.id.toJid())
                        }, n);
                    }
                    return l;
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
            const d = {
                spamListJid: o("WAJids").toNewsletterJid(e.id.toJid()),
                spamListSpamFlow: r,
                spamListWiTraceId: a,
                spamListSubject: e.name,
                messageArgs: s.filter(Boolean)
            };
            const m = yield o("WASmaxSpamNewsletterReportRPC").sendNewsletterReportRPC(d);
            return c(m);
        });
        return y.apply(this, arguments);
    }
    l.sendNewsletterStatusReport = f;
    l.sendNewsletterReport = h;
}, 98);