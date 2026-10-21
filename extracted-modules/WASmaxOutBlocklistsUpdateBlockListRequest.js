__d("WASmaxOutBlocklistsUpdateBlockListRequest", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBlocklistsUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup",
    "WASmaxOutBlocklistsUpdateBlockListReportBlockEntryPointMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ bizOptOutReason, bizOptOutReasonDescription, bizOptOutEntryPoint, bizOptOutFirstMessage, bizOptOutBusinessDiscoveryEntryPoint, bizOptOutBusinessDiscoveryTimestamp, bizOptOutBusinessDiscoveryId }) {
        let t;
        let n;
        const d = o("WASmaxJsx").smax("biz_opt_out", {
            reason: (t = o("WASmaxAttrs")).OPTIONAL((n = o("WAWap")).CUSTOM_STRING, bizOptOutReason),
            reason_description: t.OPTIONAL(n.CUSTOM_STRING, bizOptOutReasonDescription),
            entry_point: t.OPTIONAL(n.CUSTOM_STRING, bizOptOutEntryPoint),
            first_message: t.OPTIONAL(n.CUSTOM_STRING, bizOptOutFirstMessage),
            business_discovery_entry_point: t.OPTIONAL(n.CUSTOM_STRING, bizOptOutBusinessDiscoveryEntryPoint),
            business_discovery_timestamp: t.OPTIONAL(n.INT, bizOptOutBusinessDiscoveryTimestamp),
            business_discovery_id: t.OPTIONAL(n.CUSTOM_STRING, bizOptOutBusinessDiscoveryId)
        });
        return d;
    }
    function s({ bizOptOutArgs, updateBlockListReportBlockEntryPointMixinArgs, itemDhash, updateBlockListBlockOrUpdateBlockListUnblockItemMixinGroupArgs }) {
        const l = o("WASmaxMixins").optionalMerge(o("WASmaxOutBlocklistsUpdateBlockListReportBlockEntryPointMixin").mergeUpdateBlockListReportBlockEntryPointMixin, o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "blocklist",
            type: "set",
            id: o("WAWap").generateId()
        }, o("WASmaxOutBlocklistsUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup").mergeUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup(o("WASmaxJsx").smax("item", {
            dhash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, itemDhash)
        }, o("WASmaxChildren").OPTIONAL_CHILD(e, bizOptOutArgs)), updateBlockListBlockOrUpdateBlockListUnblockItemMixinGroupArgs)), updateBlockListReportBlockEntryPointMixinArgs);
        return l;
    }
    l.makeUpdateBlockListRequestItemBizOptOut = e;
    l.makeUpdateBlockListRequest = s;
}, 98);