__d("WAWebPollsDailyStatsUtils", [
    "WAWebApiContact",
    "WAWebChatGetters",
    "WAWebDailyAggregatedStatsCollection",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebPollsActionsMetricUtils",
    "WAWebWamNumberToClientGroupSizeBucket",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const e_pollLoggingId = e.pollLoggingId;
        if (!(e_pollLoggingId == null || e_pollLoggingId === 0) && o("WAWebMsgGetters").getIsSentByMeFromWeb(e.unsafe())) {
            const l = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
            const m = String(e_pollLoggingId);
            const p = l.pollsDailyStats[m] ?? u();
            const _ = babelHelpers.extends({}, p, {
                participantIds: [].concat(p.participantIds)
            });
            s(_, t, n);
            c(_, e);
            const f = o("WAWebFrontendMsgGetters").getMaybeChat(e.unsafe());
            if (f != null) {
                d(_, f);
            }
            l.pollsDailyStats = babelHelpers.extends({}, l.pollsDailyStats, {
                [m]: _
            });
        }
    }
    function s(e, t, n) {
        e: {
            if (t === "poll_edit") {
                e.pollCreatorEdit += 1;
                m(e, n);
                break e;
            }
            if (t === "poll_edit_rejected") {
                e.pollCreatorEditRejected += 1;
                break e;
            }
            if (t === "vote") {
                e.pollVotes += 1;
                m(e, n);
                break e;
            }
            if (t === "vote_change") {
                e.pollVotesChanged += 1;
                m(e, n);
                break e;
            }
            if (t === "vote_delete") {
                e.pollVoteDeletes += 1;
                m(e, n);
                break e;
            }
            if (t === "vote_rejected") {
                e.pollVoteRejected += 1;
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        }
    }
    function u() {
        return {
            isAGroup: false,
            optionsCount: 0,
            participantIds: [],
            pollCreationDs: 0,
            pollCreatorEdit: 0,
            pollCreatorEditRejected: 0,
            pollVoteDeletes: 0,
            pollVoteRejected: 0,
            pollVotes: 0,
            pollVotesChanged: 0
        };
    }
    function c(e, t) {
        const n = o("WAWebPollsActionsMetricUtils").getPollMetricFieldsFromCreationMsg(t);
        const { creationDateInSeconds, hideVoterName, pollDurationMs, pollOptionsCount } = n;
        e.hideVoterName = hideVoterName;
        e.optionsCount = pollOptionsCount;
        e.pollCreationDs = o("WAWebPollsActionsMetricUtils").getNearestDayEpochDatestamp(creationDateInSeconds);
        e.pollDurationMs = pollDurationMs;
    }
    function d(e, t) {
        const t_groupMetadata = t.groupMetadata;
        const a = o("WAWebChatGetters").getIsGroup(t);
        if (a && t_groupMetadata != null && !t_groupMetadata.stale) {
            e.groupSizeBucket = r("WAWebWamNumberToClientGroupSizeBucket")(t.getParticipantCount());
            e.typeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(o("WAWebGroupMetadataGetters").getGroupType(t_groupMetadata));
        }
        e.isAGroup = a;
    }
    function m(e, t) {
        const r = t.toString();
        const a = o("WAWebApiContact").getAlternateUserWid(t)?.toString();
        if (!e.participantIds.includes(r) && !(a != null && e.participantIds.includes(a))) {
            for (const i of e.participantIds){
                let s;
                try {
                    s = o("WAWebWidFactory").createUserWidOrThrow(i);
                } catch (e) {
                    continue;
                }
                const u = o("WAWebApiContact").getAlternateUserWid(s)?.toString();
                if (u != null && u === r) {
                    return;
                }
            }
            const c = a != null && !t.isLid() ? a : r;
            e.participantIds.push(c);
        }
    }
    l.incrementPollsDailyStat = e;
}, 98);