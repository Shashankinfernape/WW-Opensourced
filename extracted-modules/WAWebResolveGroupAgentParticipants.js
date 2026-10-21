__d("WAWebResolveGroupAgentParticipants", [
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotStaticProfiles",
    "WAWebBotTos",
    "WAWebBotUtils",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.filter((e)=>e.endsWith("@bot")).map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e)).filter((e)=>!o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) && !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e));
            if (t.length === 0 || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return [];
            }
            return t;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const configuredGroupAgentParticipants = e.isCag === true || e.isAnnouncementGroup === true ? [] : e.groupAgentParticipants ?? [];
            const resolvedGroupAgentParticipants = configuredGroupAgentParticipants.length === 0 ? [] : yield m(configuredGroupAgentParticipants);
            return {
                configuredGroupAgentParticipants,
                resolvedGroupAgentParticipants
            };
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return [];
            }
            const t = yield C(e);
            if (t == null) {
                return [];
            }
            const n = t.some(y);
            const r = n && o("WAWebBotTos").hasAcceptedMuseGroupTos();
            o("WAWebBotTos").registerBotTosRequirements(t.flatMap((e)=>{
                if (e == null || y(e)) {
                    return [];
                }
                return e.groupTosRequirements ?? [];
            }));
            return e.filter((e, n)=>{
                const a = t[n];
                if (a == null || y(a)) {
                    return r;
                }
                const a_groupTosRequirements = a.groupTosRequirements;
                return a_groupTosRequirements == null || o("WAWebBotTos").hasAcceptedBlockingBotTos(a_groupTosRequirements);
            });
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return false;
            }
            const t = yield C(e);
            return t != null && t.some(y);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || !e.isBot()) {
                return false;
            }
            const t = o("WAWebBotStaticProfiles").getStaticBotSupportInput(e);
            if (t != null) {
                return o("WAWebBotGroupGatingUtils").isGroupAgent(babelHelpers.extends({}, t, {
                    isSynced: false
                }), o("WAWebBotGroupGatingUtils").BotGroupContext.GROUP);
            }
            const n = yield C([
                e
            ]);
            if (n == null) {
                return false;
            }
            const r = n[0];
            if (r == null) {
                return false;
            }
            return o("WAWebBotGroupGatingUtils").isGroupAgent({
                product: r.product,
                isDeprecated: r.isDeprecated,
                isDeleted: r.isDeleted,
                isSynced: true
            }, o("WAWebBotGroupGatingUtils").BotGroupContext.GROUP);
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return e?.product == null || o("WAWebBotProduct").usesMuseGroupTosNotice(e.product);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                return yield o("WAWebSchemaBotProfile").getBotProfileTable().bulkGet(t.map((e)=>e.toString()));
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[resolveGroupAgentParticipants] bot profile read failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("group-agent-profile-read-failed");
                return null;
            }
        });
        return b.apply(this, arguments);
    }
    l.resolveGroupAgentParticipants = s;
    l.resolveGroupAgentFanoutForGroupSend = c;
    l.resolveGroupAgentFanoutParticipants = m;
    l.hasMuseNoticeGroupAgent = _;
    l.isGroupAgentProfile = g;
}, 98);