__d("WAWebDBStoreNewsletterEncryptedMsgs", [
    "WALogger",
    "WAPromiseMap",
    "WAWebDBExperienceIdStore",
    "WAWebDBStoreMessage",
    "WAWebDBStoreMessageAssociations",
    "WAWebDBStoreMsgsUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNewsletterDBUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, a) {
        const i = [
            "message",
            "chat",
            "message-association"
        ];
        if (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(t.map(([t])=>t))) {
            i.push("experience-id");
        }
        return o("WAWebModelStorageUtils").getStorage().lock(i, (()=>{
            const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*([l, u, c]) {
                const d = yield o("WAWebDBStoreMsgsUtils").getLastRowId(l);
                const m = (yield o("WAPromiseMap").promiseMap(t, (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([l, s], n) {
                        const u = l.serverId ?? (yield o("WAWebNewsletterDBUtils").getTemporaryServerId(l.to));
                        if (u == null) {
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[newsletter][storage] serverId is missing from message"
                            ]))).tags("newsletter").sendLogs("newsletter-missing-serverId");
                            return null;
                        }
                        const c = r("WAWebMsgKey").fromString(l.id);
                        const m = o("WAWebDBStoreMessage").isPendingUnreadReceipt(c, l);
                        const p = c.remote.toString();
                        const _ = m && !a.has(p);
                        const f = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                            msg: l,
                            chatId: p,
                            hasLink: s,
                            inChatMsgId: u,
                            rowId: d + n + 1,
                            pendingReadReceipt: _
                        });
                        delete f.serverId;
                        return f;
                    });
                    return function(e, n) {
                        return t.apply(this, arguments);
                    };
                })())).filter(Boolean);
                try {
                    yield o("WAWebDBStoreMessageAssociations").bulkStoreMessageAssociations(m);
                    yield l.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(m);
                    yield o("WAWebDBExperienceIdStore").recordReceivedExperienceIds(m);
                } catch (e) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter-store] Failed to store messages"
                    ]))).tags("newsletter");
                }
            });
            return function(e) {
                return i.apply(this, arguments);
            };
        })());
    }
    l.storeEncryptedNewsletterMessages = u;
}, 98);