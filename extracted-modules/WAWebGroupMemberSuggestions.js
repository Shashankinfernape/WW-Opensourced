__d("WAWebGroupMemberSuggestions", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebContactExternalUserState",
    "WAWebLidMigrationUtils",
    "WAWebQueryFrequentlyContactedMsgCount",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        contacts: [],
        frequentContacts: [],
        recentContacts: []
    };
    const c = 8;
    const d = 5;
    const m = 20;
    const p = 72 * o("WATimeUtils").HOUR_SECONDS;
    const _ = 8 * o("WATimeUtils").DAY_SECONDS;
    const f = 100;
    const g = 750;
    const h = [
        function(e) {
            return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
        },
        function(e) {
            return e.isContactBlocked;
        },
        function(e) {
            return e.id.isBot();
        },
        function(e) {
            return o("WAWebBotUtils").isAnyMetaAiBot(e.id);
        },
        function(e) {
            return o("WAWebBotUtils").isBusinessAssistantBot(e.id);
        },
        function(e) {
            return e.id.equals(o("WAWebBotUtils").META_BOT_LID_WID);
        },
        function(e) {
            return e.id.isAiHub();
        },
        function(e) {
            return e.id.isPSA();
        },
        function(e) {
            return (e.externalUserState ?? o("WAWebContactExternalUserState").ExternalUserState.Unset) !== o("WAWebContactExternalUserState").ExternalUserState.Unset;
        }
    ];
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = function(n) {
                return !h.some((e)=>e(n.contact)) && !T(e, n);
            };
            const r = o("WATimeUtils").unixTime();
            const recentContacts = R(b(t, r - p)).slice(0, m).map((e)=>e.contact);
            const frequentContacts = yield (s || (s = n("Promise"))).race([
                v(t, r - _),
                E(g)
            ]);
            return {
                contacts: k(recentContacts, frequentContacts),
                frequentContacts,
                recentContacts
            };
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return o("WAWebChatCollection").ChatCollection.filter((n)=>n.id.isUser() && !n.isLocked && (n.t ?? 0) >= t && e(n)).sort((e, t)=>(t.t ?? 0) - (e.t ?? 0));
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, sinceTs) {
            const r = b(t, sinceTs).slice(0, f);
            if (r.length === 0) {
                return [];
            }
            const a = yield o("WAWebQueryFrequentlyContactedMsgCount").queryFrequentlyContactedMsgCountJob({
                chatIds: r.map((e)=>e.id.toString()),
                sinceTs
            }).catch(()=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "group member suggestions: frequent contacts query failed"
                ]))).sendLogs("group-member-suggestions-frequent-query-failed");
                return new Map;
            });
            const i = new Map;
            for (const l of r){
                const c = L(l);
                i.set(c, (i.get(c) ?? 0) + (a.get(l.id.toString()) ?? 0));
            }
            const d = (t)=>i.get(L(t)) ?? 0;
            return R(r).filter((e)=>d(e) > 0).sort((e, t)=>d(t) - d(e)).slice(0, m).map((e)=>e.contact);
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        const t = new Set;
        return e.filter((e)=>{
            const n = L(e);
            if (t.has(n)) {
                return false;
            }
            t.add(n);
            return true;
        });
    }
    function L(e) {
        return (e.accountLid ?? e.id).toString();
    }
    function E(e) {
        return new (s || (s = n("Promise")))(function(t) {
            self.setTimeout(function() {
                return t([]);
            }, e);
        });
    }
    function k(recentContacts, frequentContacts) {
        const n = recentContacts.slice(0, d);
        I(n, frequentContacts);
        I(n, recentContacts);
        return n;
    }
    function I(e, t) {
        for (const n of t){
            if (e.length >= c) {
                return;
            }
            if (!e.includes(n)) {
                e.push(n);
            }
        }
    }
    function T(e, t) {
        if (e == null) {
            return false;
        }
        return [
            t.id,
            o("WAWebLidMigrationUtils").toPn(t.id),
            t.accountLid
        ].some((t)=>t != null && e.participants.get(t) != null);
    }
    l.NO_GROUP_MEMBER_SUGGESTIONS = u;
    l.getGroupMemberSuggestions = y;
}, 98);