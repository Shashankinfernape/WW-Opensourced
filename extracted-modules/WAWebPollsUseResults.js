__d("WAWebPollsUseResults", [
    "WAWebAddonHydrationUtils",
    "WAWebCastToPollCreationMsg",
    "WAWebFrontendPollVoteGetters",
    "WAWebMarkAddOnsAsReadAction",
    "WAWebMessageAddOnType",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteCollection",
    "WAWebUserPrefsMeUser",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "sumBy",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useMemo } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(18);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebMsgGetters").getPollOptions
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e, r("WAWebCastToPollCreationMsg"), n);
        const i = a[0];
        let l;
        if (t[1] !== i) {
            l = r("nullthrows")(i, "Poll creation message is missing poll options");
            t[1] = i;
            t[2] = l;
        } else {
            l = t[2];
        }
        const s = l;
        let c;
        if (t[3] !== e) {
            c = o("WAWebPollsPollVoteCollection").PollVoteCollection.getForParentAddressingModeInsensitive([
                e
            ]);
            t[3] = e;
            t[4] = c;
        } else {
            c = t[4];
        }
        const f = c[0];
        let g;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            g = [
                "add",
                "remove",
                "reset"
            ];
            t[5] = g;
        } else {
            g = t[5];
        }
        let h;
        if (t[6] !== f) {
            h = function() {
                return f.toArray();
            };
            t[6] = f;
            t[7] = h;
        } else {
            h = t[7];
        }
        const y = r("useWAWebEventTargetValue")(f, g, h);
        const C = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead();
        let b;
        let v;
        if (t[8] !== e) {
            b = function() {
                o("WAWebAddonHydrationUtils").hydrateAddons({
                    ids: [
                        e
                    ],
                    hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE
                });
            };
            v = [
                e
            ];
            t[8] = e;
            t[9] = b;
            t[10] = v;
        } else {
            b = t[9];
            v = t[10];
        }
        useEffect(b, v);
        let S;
        let R;
        if (t[11] !== C || t[12] !== y) {
            S = function() {
                const e = y.filter(p);
                if (e.length !== 0) {
                    C({
                        addOnType: o("WAWebMessageAddOnType").MessageAddOnType.PollVote,
                        addOns: e.map(m)
                    });
                }
            };
            R = [
                y,
                C
            ];
            t[11] = C;
            t[12] = y;
            t[13] = S;
            t[14] = R;
        } else {
            S = t[13];
            R = t[14];
        }
        useEffect(S, R);
        let L;
        if (t[15] !== s || t[16] !== y) {
            L = _(y, s);
            t[15] = s;
            t[16] = y;
            t[17] = L;
        } else {
            L = t[17];
        }
        return L;
    }
    function m(e) {
        return {
            msgKey: e.msgKey,
            sender: e.sender.toString()
        };
    }
    function p(e) {
        return !e.read;
    }
    function _(e, t) {
        const n = new Map;
        const a = new Map(t.map((e)=>[
                e.localId,
                e
            ]));
        let i = 0;
        for (const l of t){
            n.set(l, {
                isVotedForByMe: false,
                isCurrentLeader: false,
                percentageOfAll: 0,
                percentageOfMostVotedForOption: 0,
                votes: [],
                count: 0,
                mode: "e2ee"
            });
        }
        const s = Array.from(e).sort((e, t)=>{
            if (o("WAWebUserPrefsMeUser").isMeAccount(t.sender)) {
                return 1;
            }
            if (o("WAWebUserPrefsMeUser").isMeAccount(e.sender)) {
                return -1;
            }
            return o("WAWebPollVoteGetters").getTimestamp(t) - o("WAWebPollVoteGetters").getTimestamp(e);
        });
        const u = r("sumBy")(s, function(e) {
            return e.selectedOptionLocalIds.length;
        });
        for (const c of s){
            for (const d of c.selectedOptionLocalIds){
                const m = a.get(d);
                const p = r("nullthrows")(m == null ? null : n.get(m), `Option with local ID ${d} not found`);
                if (p.mode === "e2ee") {
                    p.votes.push(c);
                    i = Math.max(i, p.votes.length);
                    if (o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebFrontendPollVoteGetters").getSenderObj(c).id)) {
                        p.isVotedForByMe = true;
                    }
                }
            }
        }
        for (const _ of n.values()){
            _.percentageOfMostVotedForOption = i === 0 ? 0 : _.votes.length / i;
            _.percentageOfAll = u === 0 ? 0 : _.votes.length / u;
            _.isCurrentLeader = i > 0 && _.votes.length === i;
            _.count = _.votes.length;
        }
        return n;
    }
    function f(e) {
        return Array.from(e.entries()).map(([t, n])=>({
                optionName: t.name,
                optionVoteCount: n.count
            })).sort((e, t)=>t.optionVoteCount - e.optionVoteCount).map(({ optionName, optionVoteCount })=>`${optionName}: ${optionVoteCount}`).join(", ");
    }
    l.useResults = d;
    l.aggregateVotes = _;
    l.getOptionWithCount = f;
}, 98);