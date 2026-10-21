__d("WAWebGroupMsgSendUtils", [
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebMsgGetters",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebWamGroupMetricUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(groupId, n, r) {
            const i = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(groupId);
            if (i == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "_getGroupData: no group metadata record found for: ",
                    ""
                ])), groupId);
            }
            const groupAgentParticipants = yield o("WAWebResolveGroupAgentParticipants").resolveGroupAgentParticipants(n?.participants ?? []);
            let s = {
                groupId,
                amIAdmin: null,
                isCag: null,
                isLid: null,
                isLidAddressingMode: null,
                wamTypeOfGroup: null,
                participantCount: null,
                deviceCount: null,
                deviceSizeBucket: null,
                isAnnouncementGroup: null,
                isCapiGroup: null,
                isOpenBotGroup: null,
                isTeeBotGroup: null,
                groupAgentParticipants
            };
            const u = i?.isLidAddressingMode === true;
            if (i != null) {
                const c = o("WAWebGroupMetadataGetters").getGroupType(i);
                const d = c === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
                s.wamTypeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(c);
                s.isLid = d && r?.type === "addon";
                s.isCag = d;
                s.isAnnouncementGroup = i.announce;
                s.isLidAddressingMode = u;
                s.isCapiGroup = i.hasCapi === true;
                s.isOpenBotGroup = o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && i.isOpenBotGroup === true;
            }
            if (n != null) {
                const m = o("WAWebGroupUtils").amIGroupAdmin(n.admins);
                s.amIAdmin = m;
                s.isTeeBotGroup = n.participants.includes(o("WAWebBotUtils").META_BOT_TEE_FBID_WID.toString());
                s = babelHelpers.extends({}, s, o("WAWebWamGroupMetricUtils").getGroupMetricsFromDbRecord(n));
            }
            return s;
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaParticipant").getParticipantTable().get(e);
            if (t == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "_getParticipantRecord: no participants record found for: ",
                    ""
                ])), e);
            }
            return t;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        if (t.isCag === true) {
            return o("WAWebMsgGetters").getIsReaction(e) || o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type);
        }
        return false;
    }
    function _(e) {
        const t = e.filter((e)=>e.isLid());
        const n = e.length - t.length;
        return `${t.length} lid participants & ${n} pn participants`;
    }
    function f(e) {
        const t = e.isLidAddressingMode === true ? "lid" : "pn";
        const n = e.isCag === true ? "cag" : "nonCag";
        return `group type: ${t}, ${n}`;
    }
    l.getGroupData = u;
    l.getParticipantRecord = d;
    l.isCagAddon = p;
    l.formatWidTypeCountsForLog = _;
    l.formatGroupTypeForLog = f;
}, 98);