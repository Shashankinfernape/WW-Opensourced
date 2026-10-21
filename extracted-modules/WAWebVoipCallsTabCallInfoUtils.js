__d("WAWebVoipCallsTabCallInfoUtils", [
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebChatLockUtils",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipOngoingCallCollection"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        {
            isShown: function(t) {
                return o("WAWebChatLockUtils").chatIsAccessible(o("WAWebFrontendMsgGetters").getChat(t));
            },
            triggers: [
                {
                    source: function() {
                        return o("WAWebCmd").Cmd;
                    },
                    events: [
                        "chatlock:lock",
                        "chatlock:unlock"
                    ],
                    delivery: "immediate"
                },
                {
                    source: function() {
                        return o("WAWebChatCollection").ChatCollection;
                    },
                    events: [
                        "change:isLocked"
                    ],
                    delivery: "batched"
                }
            ]
        },
        {
            isShown: function(t) {
                return o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.SEARCH, t.viewMode);
            },
            triggers: [
                {
                    source: function() {
                        return o("WAWebMsgCollection").MsgCollection;
                    },
                    events: [
                        "change:viewMode"
                    ],
                    delivery: "batchedCallLogs"
                }
            ]
        },
        {
            isShown: function(t) {
                return !t.star;
            },
            triggers: [
                {
                    source: function() {
                        return o("WAWebMsgCollection").MsgCollection;
                    },
                    events: [
                        "change:star"
                    ],
                    delivery: "batchedCallLogs"
                }
            ]
        },
        {
            isShown: function(t) {
                return !o("WAWebMsgGetters").getIsKept(t);
            },
            triggers: [
                {
                    source: function() {
                        return o("WAWebMsgCollection").MsgCollection;
                    },
                    events: [
                        "change:kicState"
                    ],
                    delivery: "batchedCallLogs"
                }
            ]
        },
        {
            isShown: function(t) {
                return o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(t.id.id) == null;
            },
            triggers: [
                {
                    source: function() {
                        return o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection;
                    },
                    events: [
                        "add",
                        "remove",
                        "reset"
                    ],
                    delivery: "immediate"
                }
            ]
        },
        {
            isShown: function(t) {
                return !d(t);
            },
            triggers: [
                {
                    source: function() {
                        return o("WAWebMsgCollection").MsgCollection;
                    },
                    events: [
                        "change:callParticipants"
                    ],
                    delivery: "batchedCallLogs"
                }
            ]
        }
    ];
    const s = e.flatMap(({ triggers })=>triggers);
    function u(e) {
        return e.map((e)=>e.id.toString()).join("|");
    }
    function c(e) {
        const t = new Map;
        e.forEach((e)=>{
            t.set(e.id.toString(), e);
        });
        return Array.from(t.values()).sort((e, t)=>t.t - e.t);
    }
    function d({ callParticipants }) {
        if (callParticipants == null) {
            return false;
        }
        const n = callParticipants.some((e)=>e.participant.isLid());
        const r = n ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        return !callParticipants.some((e)=>!e.participant.equals(r));
    }
    function m(t) {
        return e.every(({ isShown })=>isShown(t));
    }
    function p(e, t) {
        if (!m(e)) {
            return null;
        }
        const r = t[t.length - 1];
        if (r == null) {
            return null;
        }
        const a = e.id.toString();
        if (t.some((e)=>e.id.toString() === a)) {
            return null;
        }
        const i = r.id.toString();
        const l = o("WAWebCallLogUtils").mergeCallRecords(c([
            e
        ].concat(t)));
        const s = l.find(({ mergedMsgs })=>mergedMsgs.some((e)=>e.id.toString() === i))?.mergedMsgs;
        if (s?.some(function(e) {
            return e.id.toString() === a;
        }) === true) {
            return s;
        }
        return null;
    }
    l.CALLS_TAB_CALL_LOG_VISIBILITY_TRIGGERS = s;
    l.getCallLogMsgsKey = u;
    l.getSortedUniqueCallLogMsgs = c;
    l.getShouldShowInCallsTabCallLog = m;
    l.getUpdatedCallLogInfoPropsForWrittenMsg = p;
}, 98);