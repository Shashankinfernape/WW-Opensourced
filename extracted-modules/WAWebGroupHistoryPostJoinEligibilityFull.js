__d("WAWebGroupHistoryPostJoinEligibilityFull", [
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryPostJoinEligibility",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupMetadata, groupWid, joinTimeFallback, participant }) {
            if (!o("WAWebGroupHistoryPostJoinEligibility").isEligibleForPostJoinHistory(participant, o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(groupMetadata), joinTimeFallback)) {
                return {
                    eligible: false,
                    reason: "ineligible"
                };
            }
            const targetStartMessageTime = participant.joinTime ?? joinTimeFallback;
            if (targetStartMessageTime == null) {
                return {
                    eligible: false,
                    reason: "ineligible"
                };
            }
            const s = yield o("WAWebGetGroupHistoryBundleMessagesCount").getGroupHistoryBundleMessageCount({
                groupWid,
                targetStartMessageTime
            });
            if (s === 0) {
                return {
                    eligible: false,
                    reason: "no_available_messages"
                };
            }
            return {
                eligible: true,
                messageCount: s
            };
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupMetadata, groupWid, joinTimeFallback, participants }) {
            if (!o("WAWebGroupHistoryPostJoinEligibility").isPostJoinHistoryGroupEligible(o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(groupMetadata))) {
                return {
                    eligible: [],
                    ineligible: participants.map((e)=>({
                            participant: e,
                            reason: "group_ineligible"
                        })),
                    messageCount: 0
                };
            }
            const eligible = [];
            const ineligible = [];
            for (const s of participants){
                const u = o("WAWebGroupHistoryPostJoinEligibility").getParticipantPostJoinEligibility(s, joinTimeFallback);
                if (u.eligible) {
                    eligible.push(s);
                } else {
                    ineligible.push({
                        participant: s,
                        reason: u.reason
                    });
                }
            }
            if (eligible.length === 0) {
                return {
                    eligible,
                    ineligible,
                    messageCount: 0
                };
            }
            const targetStartMessageTime = joinTimeFallback ?? eligible[0].joinTime;
            const d = yield o("WAWebGetGroupHistoryBundleMessagesCount").getGroupHistoryBundleMessageCount({
                groupWid,
                targetStartMessageTime
            });
            if (d === 0) {
                return {
                    eligible: [],
                    ineligible: [].concat(ineligible, eligible.map((e)=>({
                            participant: e,
                            reason: "no_available_messages"
                        }))),
                    messageCount: 0
                };
            }
            return {
                eligible,
                ineligible,
                messageCount: d
            };
        });
        return c.apply(this, arguments);
    }
    l.isEligibleForPostJoinHistoryFull = e;
    l.isEligibleForPostJoinHistoryFullMulti = u;
}, 98);