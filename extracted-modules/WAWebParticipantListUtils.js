__d("WAWebParticipantListUtils", [
    "fbt",
    "WAWebAlphaRegex",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebCompactMapString",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebGroupAgentProfileRouting",
    "WAWebMiscGatingUtils",
    "WAWebOrgMemberContactName",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "compactMap",
    "fbs",
    "isStringNullOrEmpty",
    "partitionArray"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e.participants.length === 0) {
            return s._("Group").toString();
        }
        if (e.participants.length === 1) {
            const n = e.participants.head()?.contact;
            if (n != null && o("WAWebContactGetters").getIsMe(n)) {
                return r("WAWebFbtCommon")("You").toString();
            }
        }
        const a = c(e, true);
        if (a.length === 1) {
            return a[0];
        }
        if (a.length <= 3) {
            return r("WAWebFbtIntlList")(a, r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
        }
        if (a.length >= 4) {
            const i = a[0];
            const l = s._("_j{\"*\":\"{other_participants} others\",\"_1\":\"1 other\"}", [
                s._plural(a.length - 1, "other_participants")
            ]).toString();
            return r("WAWebFbtIntlList")([
                i,
                l
            ], r("WAWebFbtIntlList").CONJUNCTIONS.AND).toString();
        }
        return a.join();
    }
    function u(e, t = false, n = false) {
        if (e.participants.length === 0) {
            if (n) {
                return r("fbs")._("Waiting for others to join").toString();
            }
            return r("fbs")._("Group").toString();
        }
        if (e.participants.length === 1) {
            const i = e.participants.head()?.contact;
            if (i != null && o("WAWebContactGetters").getIsMe(i)) {
                return r("WAWebFbtCommon")("You").toString();
            }
        }
        const l = c(e, t);
        if (l.length === 1) {
            return l[0];
        }
        const s = r("WAWebFbtIntlList")(l, r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
        return s.toString();
    }
    function c(e, t = false, n = true) {
        let a;
        const length = e.participants.length;
        if (t) {
            a = e.participants.filter((e)=>!o("WAWebContactGetters").getIsMe(e.contact));
        } else {
            a = e.participants;
        }
        const l = a.filter((e)=>o("WAWebFrontendContactGetters").getIsMyContact(e.contact));
        const s = r("partitionArray")(a.filter((e)=>!o("WAWebFrontendContactGetters").getIsMyContact(e.contact)), function(e) {
            return o("WAWebOrgMemberContactName").getOrgMemberDisplayName(e.contact) != null;
        });
        const u = s[0];
        const c = s[1];
        let d = [];
        if (length >= 3) {
            d = c.filter((e)=>o("WAWebContactGetters").getNotifyName(e.contact) != null);
        }
        const p = c.filter((e)=>!d.includes(e));
        const _ = p;
        let f = [];
        if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
            f = l.map(({ contact })=>{
                if (e.hasUniqueShortNameMention(contact)) {
                    return o("WAWebFrontendContactGetters").getFormattedShortNameWithNonBreakingSpaces(contact);
                }
                return o("WAWebFrontendContactGetters").getFormattedName(contact).replace(/\s/g, " ");
            });
        } else {
            f = l.map((e)=>{
                const t = n ? o("WAWebFrontendContactGetters").getFormattedShortNameWithNonBreakingSpaces(e.contact) : o("WAWebFrontendContactGetters").getFormattedName(e.contact);
                if (t === "" && e.contact.name) {
                    return e.contact.name;
                }
                return t;
            });
        }
        let g = [];
        if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
            g = d.map(({ contact })=>{
                const n = o("WAWebContactGetters").getNotifyName(contact);
                const r = n ?? o("WAWebFrontendContactGetters").getFormattedName(contact);
                return `~${r.replace(/\s/g, " ")}`;
            });
        } else {
            g = d.map((e)=>{
                const t = o("WAWebContactGetters").getNotifyName(e.contact);
                let a;
                if (t != null) {
                    a = t;
                } else if (n) {
                    a = o("WAWebFrontendContactGetters").getFormattedShortNameWithNonBreakingSpaces(e.contact);
                } else {
                    a = o("WAWebFrontendContactGetters").getFormattedName(e.contact);
                }
                const i = a.split(/\s/);
                const l = i[0];
                return `~${r("WAWebAlphaRegex").exec(l) ? l : a}`;
            });
        }
        const h = r("WAWebCompactMapString")(u, function(e) {
            if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
                return o("WAWebOrgMemberContactName").getOrgMemberDisplayName(e.contact)?.replace(/\s/g, " ");
            }
            return m(e.contact);
        });
        const y = _.map((e)=>o("WAWebFrontendContactGetters").getFormattedName(e.contact));
        return f.concat(h).sort().concat(g.sort().concat(y.sort()));
    }
    function d(e) {
        const t = o("WAWebFrontendContactGetters").getFormattedShortNameWithNonBreakingSpaces(e);
        if (e.id.isBot()) {
            return t;
        }
        return p(t);
    }
    function m(e) {
        const t = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(e);
        if (t == null) {
            return null;
        }
        return p(t);
    }
    function p(e) {
        const t = e.split(/\s/);
        const n = t[0];
        if (r("WAWebAlphaRegex").exec(n)) {
            return n;
        }
        return e;
    }
    function _(e) {
        const t = h(e);
        if (t == null) {
            return null;
        }
        if (t.museAgentIds.length > 0) {
            if (t.otherAgentIds.length === 0) {
                return "muse";
            }
            return "aiAgents";
        }
        if (t.hasThirdPartyAgent) {
            return "aiAgents";
        }
        return null;
    }
    function f(e, t) {
        const n = g(e.map((e)=>e.id));
        if (n == null) {
            return y(e, t);
        }
        return [
            n.label
        ].concat(y(e.filter((e)=>!n.replacedAgentIds.has(e.id)), t));
    }
    function g(e) {
        const t = h(e);
        if (t == null) {
            return null;
        }
        const { museAgentIds, otherAgentIds } = t;
        if (museAgentIds.length === 0) {
            return null;
        }
        if (otherAgentIds.length === 0) {
            return {
                label: s._("Muse").toString(),
                replacedAgentIds: new Set(museAgentIds)
            };
        }
        return {
            label: s._("AI agents").toString(),
            replacedAgentIds: new Set([].concat(museAgentIds, otherAgentIds))
        };
    }
    function h(e) {
        if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || !o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled()) {
            return null;
        }
        const museAgentIds = [];
        const otherAgentIds = [];
        let hasThirdPartyAgent = false;
        e.forEach((e)=>{
            if (o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)) {
                otherAgentIds.push(e);
                return;
            }
            if (o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e)) {
                const a = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
                if (!(a?.lastFetchedTimeMs == null || a.isDeleted === true || a.isDeprecated === true)) {
                    const i = o("WAWebBotProduct").botProductFromServerValue(a.product);
                    if (o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(e, i)) {
                        museAgentIds.push(e);
                    } else if (i === o("WAWebBotProduct").BotProduct.THIRD_PARTY) {
                        otherAgentIds.push(e);
                        hasThirdPartyAgent = true;
                    }
                }
            }
        });
        return {
            hasThirdPartyAgent,
            museAgentIds,
            otherAgentIds
        };
    }
    function y(e, t) {
        let n = e;
        const a = r("partitionArray")(n, function(e) {
            return o("WAWebContactGetters").getIsMe(e.contact);
        });
        const i = a[0];
        const l = a[1];
        n = l.concat(i);
        if (o("WAWebMiscGatingUtils").isDropLastNameEnabled() && t.isOpenBotGroup !== true && t.isTeeBotGroup !== true) {
            return r("compactMap")(n, function({ contact }) {
                const r = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(contact);
                if (r != null) {
                    return r.replace(/\s/g, " ");
                }
                if (t.hasUniqueShortNameMention(contact)) {
                    return o("WAWebFrontendContactGetters").getFormattedShortNameWithNonBreakingSpaces(contact);
                }
                return o("WAWebFrontendContactGetters").getFormattedName(contact).replace(/\s/g, " ");
            });
        }
        if (t.hasCapi === true) {
            const s = r("partitionArray")(n, function(e) {
                return e.id.equals(t.owner);
            });
            const u = s[0];
            const c = s[1];
            n = u.concat(c);
        }
        let p = null;
        if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && t.isOpenBotGroup === true) {
            p = o("WAWebBotUtils").META_BOT_FBID_WID;
        } else if (t.isTeeBotGroup === true) {
            p = o("WAWebBotUtils").META_BOT_TEE_FBID_WID;
        }
        if (p != null) {
            const _ = r("partitionArray")(n, function(e) {
                return e.id.equals(p);
            });
            const f = _[0];
            const g = _[1];
            n = f.concat(g);
        }
        return r("WAWebCompactMapString")(n, function({ contact }) {
            const a = m(contact) ?? d(contact);
            if (!r("isStringNullOrEmpty")(a)) {
                return a;
            }
            const i = o("WAWebContactGetters").getNotifyName(contact);
            if (!r("isStringNullOrEmpty")(i)) {
                return i;
            }
            const l = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(contact);
            if (r("isStringNullOrEmpty")(l)) {
                return "";
            }
            return l;
        });
    }
    function C(e) {
        return f(e.participants.toArray(), e);
    }
    function b(e) {
        return y(e.participants.getAdmins(), e);
    }
    function v(e, t = true) {
        const e_length = e.length;
        if (e_length === 0) {
            return s._("Group call").toString();
        }
        const a = e.map((e)=>{
            const n = e.isUser() && e.device != null && e.device !== 0 ? o("WAWebWidFactory").asUserWidOrThrow(e) : e;
            let a = o("WAWebContactCollection").ContactCollection.get(n);
            let i = null;
            if ((a == null || !a.name) && e.isUser()) {
                i = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e));
                if (i != null) {
                    const l = o("WAWebContactCollection").ContactCollection.get(i);
                    if (l != null && (a == null || l.name)) {
                        a = l;
                    }
                }
                if (a != null && !a.name && a.phoneNumber) {
                    const s = o("WAWebContactCollection").ContactCollection.get(a.phoneNumber);
                    if (s != null && s.name) {
                        a = s;
                    }
                }
            }
            if (a == null) {
                if (e.isLid() && i != null) {
                    return o("WAWebWidFormat").widToFormattedUser(i);
                }
                return o("WAWebWidFormat").widToFormattedUser(e);
            }
            if (o("WAWebContactGetters").getIsMe(a)) {
                return r("WAWebFbtCommon")("You").toString();
            }
            const u = t ? o("WAWebFrontendContactGetters").getFormattedShortNameWithNonBreakingSpaces(a) : o("WAWebFrontendContactGetters").getFormattedName(a);
            return u || o("WAWebContactGetters").getNotifyName(a) || o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(a) || o("WAWebWidFormat").widToFormattedUser(e);
        });
        if (e_length === 1) {
            return a[0];
        }
        if (e_length === 2) {
            return s._("{first_name} & {second_name}", [
                s._param("first_name", a[0]),
                s._param("second_name", a[1])
            ]).toString();
        }
        if (e_length === 3) {
            return s._("{first_name}, {second_name} & {third_name}", [
                s._param("first_name", a[0]),
                s._param("second_name", a[1]),
                s._param("third_name", a[2])
            ]).toString();
        }
        const i = a[0];
        const l = e_length - 1;
        const u = s._("_j{\"*\":\"{other_participants} others\",\"_1\":\"1 other\"}", [
            s._plural(l, "other_participants")
        ]).toString();
        return s._("{first_name} & {others}", [
            s._param("first_name", i),
            s._param("others", u)
        ]).toString();
    }
    l.calculateUnnamedGroupParticipantsList = e;
    l.calculateUnnamedGroupFullParticipantsList = u;
    l.getUnnamedGroupParticipantNames = c;
    l.getFirstNameForContact = d;
    l.getOrgMemberFirstName = m;
    l.getGroupAgentIndicator = _;
    l.calculateParticipantsList = C;
    l.calculateAdminsList = b;
    l.formatParticipantWidsPreserveOrder = v;
}, 226);