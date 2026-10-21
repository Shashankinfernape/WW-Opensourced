__d("WAWebMexNewsletterJoinHandler", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCreateChat",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterQueues",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            yield (u || (u = n("Promise"))).all([
                o("WAWebNewsletterQueues").newsletterCreationQueue.wait(),
                o("WAWebNewsletterQueues").newsletterSubscribeQueue.wait()
            ]);
            if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
                const i = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(a.xwa2_notify_newsletter_on_join);
                if (i == null) {
                    throw r("err")("cannot parse xwa2_notify_newsletter_on_join response");
                }
                const l = o("WAWebNewsletterModelUtils").mapNewsletterToModels(i);
                const { chat, metadata, pic } = l;
                return o("WAWebNewsletterQueues").newsletterJoinNotificationQueue.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    try {
                        return yield m({
                            chat,
                            metadata,
                            newsletterJid: i.idJid,
                            pic
                        });
                    } catch (t) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[mex][newsletter][notification][join]"
                        ]))).tags("mex", "newsletter").sendLogs("mex-newsletter-notification-join-fail");
                    }
                }));
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, metadata, newsletterJid, pic }) {
            const i = yield _({
                chat,
                metadata,
                newsletterJid
            });
            const { msgsToStore, noEarlierMsgs } = i;
            yield o("WAWebNewsletterUpdateNewslettersRecordsJob").updateNewsletterChatRecords([
                o("WAWebCreateChat").createNewsletterObjectForStorage(chat)
            ]);
            yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(o("WAWebNewsletterStorageUtils").createNewsletterMetadataObjectForStorage(metadata));
            yield o("WAWebBackendApi").frontendSendAndReceive("joinNewsletter", {
                newsletter: chat,
                metadata,
                pic,
                msgs: msgsToStore,
                noEarlierMsgs
            });
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, metadata, newsletterJid }) {
            try {
                const i = o("WAWebNewsletterSystemMessages").genNewsletterCreationSystemMessages({
                    id: chat.id,
                    name: chat.name,
                    t: metadata.creationTime,
                    role: metadata.membershipType
                });
                const l = yield o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(newsletterJid, 1);
                const u = l.msgs;
                const noEarlierMsgs = u.length === 0;
                const d = u.every((e)=>!o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, e.viewMode));
                const msgsToStore = u.length > 0 && !d ? u : [].concat(i, u);
                chat.t = g(metadata.creationTime, msgsToStore);
                if (u.length > 0) {
                    yield o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(l);
                }
                yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(msgsToStore);
                return {
                    msgsToStore,
                    noEarlierMsgs
                };
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter][join] fetchLastMessage failed"
                ]))).tags("mex", "newsletter").catching(r("getErrorSafe")(error)).sendLogs("mex-newsletter-join-fetch-last-message-fail");
                return {
                    msgsToStore: [],
                    noEarlierMsgs: false
                };
            }
        });
        return f.apply(this, arguments);
    }
    function g(creationTime, msgsToStore) {
        return o("WATimeUtils").castToUnixTime(Math.min(Math.max(creationTime ?? 0, Math.max(...msgsToStore.map((e)=>e.t ?? 0))), Date.now() / 1000));
    }
    l.mexHandleNewsletterJoin = c;
}, 98);