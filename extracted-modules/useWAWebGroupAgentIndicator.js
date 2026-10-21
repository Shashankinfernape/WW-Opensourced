__d("useWAWebGroupAgentIndicator", [
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebParticipantListUtils",
    "react-compiler-runtime",
    "useWAWebSourceSnapshot"
], function(t, n, r, o, a, i, l) {
    const e = "bulk_add bulk_remove reset";
    const s = "add remove reset change:product change:isDeleted change:isDeprecated change:lastFetchedTimeMs";
    const u = new EventTarget;
    function c(t) {
        const n = o("react-compiler-runtime").c(8);
        const a = t != null && o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled() ? t.participants : null;
        let i;
        if (n[0] !== a) {
            i = function() {
                if (a == null) {
                    return undefined;
                }
                return a.toArray().map(d);
            };
            n[0] = a;
            n[1] = i;
        } else {
            i = n[1];
        }
        const l = r("useWAWebSourceSnapshot")(a ?? u, e, i);
        let c;
        if (n[2] !== l) {
            c = function() {
                return m(l);
            };
            n[2] = l;
            n[3] = c;
        } else {
            c = n[3];
        }
        const _ = r("useWAWebSourceSnapshot")(a == null ? u : o("WAWebBotProfileCollection").BotProfileCollection, s, c, p);
        let f;
        if (n[4] !== l || n[5] !== _.indicator || n[6] !== _.participantIds) {
            f = _.participantIds === l ? _.indicator : m(l).indicator;
            n[4] = l;
            n[5] = _.indicator;
            n[6] = _.participantIds;
            n[7] = f;
        } else {
            f = n[7];
        }
        return f;
    }
    function d(e) {
        return e.id;
    }
    function m(participantIds) {
        return {
            participantIds,
            indicator: participantIds == null ? null : o("WAWebParticipantListUtils").getGroupAgentIndicator(participantIds)
        };
    }
    function p(e, t) {
        return e.participantIds === t.participantIds && e.indicator === t.indicator;
    }
    l.default = c;
}, 98);