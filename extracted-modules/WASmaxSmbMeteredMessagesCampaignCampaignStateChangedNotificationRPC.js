__d("WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC", [
    "WAResultOrError",
    "WASmaxInSmbMeteredMessagesCampaignEnums",
    "WASmaxInSmbMeteredMessagesCampaignServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = s(e);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("CampaignStateChangedNotification", {
                Request: t
            }));
        }
        return {
            parsedRequest: t.value
        };
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "mm_campaign");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "business");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "ad_id");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "ad_group_id");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "ad_creative_id");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").attrStringEnum(n.value, "status", o("WASmaxInSmbMeteredMessagesCampaignEnums").ENUM_INTEGRITYNOTCLEARED_OK);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxInSmbMeteredMessagesCampaignServerNotificationMixin").parseServerNotificationMixin(e);
        if (c.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: r.value,
                type: a.value,
                mmCampaignAdId: i.value,
                mmCampaignAdGroupId: l.value,
                mmCampaignAdCreativeId: s.value,
                mmCampaignStatus: u.value
            }, c.value));
        }
        return c;
    }
    l.receiveCampaignStateChangedNotificationRPC = e;
    l.parseCampaignStateChangedNotificationRequest = s;
}, 98);