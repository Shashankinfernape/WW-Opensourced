__d("useWAWebNewsletterPollsResults", [
    "WALogger",
    "WAWebCastToPollCreationMsg",
    "WAWebContactCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterFetchPollVotersAction",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterPollsUtils",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const useEffect = (s || (s = o("react"))).useEffect;
    function c(e, t) {
        const a = o("react-compiler-runtime").c(19);
        let i;
        if (a[0] !== t) {
            i = t === undefined ? {} : t;
            a[0] = t;
            a[1] = i;
        } else {
            i = a[1];
        }
        const i_pollVoteLocalId = i.pollVoteLocalId;
        let c;
        if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebMsgGetters").getPollOptions
            ];
            a[2] = c;
        } else {
            c = a[2];
        }
        const p = o("useWAWebMsgValues").useMsgValues(e, r("WAWebCastToPollCreationMsg"), c);
        const _ = p[0];
        let f;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebMsgGetters").getServerId
            ];
            a[3] = f;
        } else {
            f = a[3];
        }
        const g = o("useWAWebMsgValues").useMsgValues(e, f);
        const h = g[0];
        let y;
        if (a[4] !== _) {
            y = r("nullthrows")(_, "Poll creation message is missing poll options");
            a[4] = _;
            a[5] = y;
        } else {
            y = a[5];
        }
        const pollOptions = y;
        let b;
        let v;
        if (a[6] !== e || a[7] !== pollOptions || a[8] !== i_pollVoteLocalId || a[9] !== h) {
            b = function() {
                let t = false;
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const n = yield o("WAWebNewsletterPollVotesModelCollection").NewsletterPollVotesModelCollection.find(e).catch(m);
                    if (!(t || n == null)) {
                        const r = yield o("WAWebNewsletterFetchPollVotersAction").fetchPollVotersAction({
                            msgKey: e,
                            pollOptions,
                            pollVoteLocalId: i_pollVoteLocalId,
                            serverId: h
                        });
                        if (!t && r != null) {
                            n.updatePollVotersMap(r, i_pollVoteLocalId);
                        }
                    }
                })().catch(d);
                return function() {
                    t = true;
                };
            };
            v = [
                e,
                pollOptions,
                i_pollVoteLocalId,
                h
            ];
            a[6] = e;
            a[7] = pollOptions;
            a[8] = i_pollVoteLocalId;
            a[9] = h;
            a[10] = b;
            a[11] = v;
        } else {
            b = a[10];
            v = a[11];
        }
        useEffect(b, v);
        let S;
        if (a[12] === Symbol.for("react.memo_cache_sentinel")) {
            S = [
                "add",
                "remove",
                "reset",
                "change"
            ];
            a[12] = S;
        } else {
            S = a[12];
        }
        let R;
        if (a[13] !== e) {
            R = function() {
                return o("WAWebNewsletterPollVotesModelCollection").NewsletterPollVotesModelCollection.get(e);
            };
            a[13] = e;
            a[14] = R;
        } else {
            R = a[14];
        }
        const L = r("useWAWebEventTargetValue")(o("WAWebNewsletterPollVotesModelCollection").NewsletterPollVotesModelCollection, S, R);
        let E;
        if (a[15] === Symbol.for("react.memo_cache_sentinel")) {
            E = [
                "change:myVote",
                "change:pollVotesCountMapTs",
                "change:pollVotersMap",
                "remove"
            ];
            a[15] = E;
        } else {
            E = a[15];
        }
        let k;
        if (a[16] !== pollOptions || a[17] !== L) {
            k = function() {
                return o("WAWebNewsletterPollsUtils").aggregateNewsletterVotes(L, pollOptions, o("WAWebContactCollection").ContactCollection.getMeContact());
            };
            a[16] = pollOptions;
            a[17] = L;
            a[18] = k;
        } else {
            k = a[18];
        }
        const I = r("useWAWebEventTargetValue")(L, E, k);
        return I;
    }
    function d(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[useWAWebNewsletterPollVotes] Failed to load polls from collection"
        ]))).sendLogs("newsletter-hook-failed-to-load-polls-from-collection");
    }
    function m() {
        return null;
    }
    l.useNewsletterPollsResults = c;
}, 98);