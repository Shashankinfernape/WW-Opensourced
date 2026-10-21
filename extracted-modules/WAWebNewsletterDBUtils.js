__d("WAWebNewsletterDBUtils", [
    "WATimeUtils",
    "WAWebApiChatCommon",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterDBConstants",
    "WAWebSchemaMessage",
    "WAWebSchemaNewsletterMetadata",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (yield o("WAWebApiChatCommon").getChatRecord(o("WAWebJidToWid").newsletterJidToWid(e))) != null;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().get(e);
            return t == null || t.membershipType === o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest;
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().bulkGet(Array.from(new Set(e)));
            const n = new Set;
            t.forEach((e)=>{
                if (e != null && e.membershipType === o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest) {
                    n.add(e.id);
                }
            });
            return n;
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield u(e);
            return !t;
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().all();
            return e.some(({ membershipType })=>membershipType !== o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest);
        });
        return g.apply(this, arguments);
    }
    const h = Number.MAX_SAFE_INTEGER - 10000;
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = o("WAWebDBMessageUtils").InternalIdPrefix.Default) {
            const r = o("WAWebDBMessageUtils").craftInternalId({
                chatId: t,
                inChatMsgId: e,
                internalIdPrefix: n
            });
            const a = yield o("WAWebSchemaMessage").getMessageTable().anyOf([
                "internalId"
            ], [
                r
            ]);
            const i = a[0];
            if (i == null) {
                return null;
            }
            return o("WAWebDBMessageSerialization").messageFromDbRow(i);
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = o("WAWebDBMessageUtils").InternalIdPrefix.Default) {
            const r = new Map;
            const a = new Map(e.map((e)=>[
                    o("WAWebDBMessageUtils").craftInternalId({
                        chatId: t,
                        inChatMsgId: e,
                        internalIdPrefix: n
                    }),
                    e
                ]));
            const i = yield o("WAWebSchemaMessage").getMessageTable().anyOf([
                "internalId"
            ], Array.from(a.keys()));
            i.forEach((e)=>{
                if (e.internalId != null) {
                    const t = a.get(e.internalId);
                    if (t != null) {
                        r.set(t, o("WAWebDBMessageSerialization").messageFromDbRow(e));
                    }
                }
            });
            return r;
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        const n = t instanceof r("WAWebWid") ? t : o("WAWebWidFactory").createWid(t);
        return new (r("WAWebMsgKey"))({
            remote: n,
            fromMe: true,
            id: e.toString(10)
        });
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = o("WAWebDBMessageUtils").InternalIdPrefix.Default) {
            const n = o("WAWebDBMessageUtils").craftInternalId({
                chatId: e.toJid(),
                inChatMsgId: h,
                internalIdPrefix: t
            });
            const r = `${t}${o("WAWebDBMessageUtils").endOfChat(e)}`;
            const a = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], n, r, {
                lowerInclusive: true,
                upperInclusive: false,
                limit: 1,
                reverse: true
            });
            if (a.length === 0 || a[0].internalId == null) {
                return h;
            }
            const i = o("WAWebDBMessageUtils").getInChatMsgId(a[0].internalId);
            return Math.min(i + 1, Number.MAX_SAFE_INTEGER);
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(e.map(String));
            const n = t.filter(Boolean).map((e)=>({
                    id: e.id,
                    viewed: true
                }));
            yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(n);
        });
        return k.apply(this, arguments);
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebDBMsgUtils").getMsgsByChatId(t);
            const r = o("WATimeUtils").unixTime();
            const a = n.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE).map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e));
            return a.filter((t)=>{
                const o = t.newsletterAdminInviteInfo ?? {};
                const { inviteExpiration, newsletterId } = o;
                if (newsletterId == null || inviteExpiration == null) {
                    return false;
                }
                return r < inviteExpiration && e.equals(newsletterId);
            });
        });
        return T.apply(this, arguments);
    }
    l.doesNewsletterExistInStorage = e;
    l.isPreviewNewsletter = u;
    l.getGuestNewsletterJids = d;
    l.isSubscribedNewsletter = p;
    l.hasSubscribedNewsletterInStorage = f;
    l.TEMPORARY_SERVER_ID_LOWER_BOUND = h;
    l.getMessageByServerId = y;
    l.bulkGetMessagesByServerIds = b;
    l.craftNewsletterMsgKeyFromServerId = S;
    l.getTemporaryServerId = R;
    l.updateMsgViewReceipt = E;
    l.getUnexpiredNewsletterAdminInviteMessageRecordsFromChat = I;
}, 98);