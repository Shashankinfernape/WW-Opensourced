__d("WAWebFutureproofReparseMsgsAction", [
    "Promise",
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebHandleMsgProcess",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterReparseMsgAction",
    "WAWebProcessMsgInfoForLid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const { futureproofBuffer, futureproofParams } = t;
                if (o("WAWebMsgGetters").getIsNewsletterMsg(t)) {
                    return yield o("WAWebNewsletterReparseMsgAction").reparseNewsletterMsg(t);
                }
                if (futureproofBuffer != null) {
                    if (futureproofParams) {
                        const { info, msgMeta } = futureproofParams;
                        if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(info.chat) && info.accountLid == null) {
                            yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
                                msgInfo: info,
                                msgMeta
                            });
                        }
                        yield o("WAWebHandleMsgProcess").processDecryptedMessageProto(babelHelpers.extends({}, futureproofParams, {
                            decrypted: futureproofBuffer,
                            reparsing: true
                        }));
                    }
                    return t;
                }
                return null;
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "reparseFutureproof: reparse error: ",
                    ""
                ])), error).sendLogs("reparse-futureproof-error");
                return null;
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = [];
                const r = [];
                e.forEach((e)=>{
                    const n = o("WAWebDBMessageSerialization").messageFromDbRow(e);
                    const a = o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type) || !!o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(n);
                    if (a) {
                        t.push(n);
                    } else if (e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN) {
                        r.push(n);
                    }
                });
                yield (u || (u = n("Promise"))).all(r.map((e)=>c(e)));
                yield u.all(t.map((e)=>c(e)));
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "reparseFutureproof: processFutureproof error"
                ])));
            }
        });
        return p.apply(this, arguments);
    }
    l.processFutureproof = m;
}, 98);