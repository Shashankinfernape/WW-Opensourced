__d("useWAWebEventResponses", [
    "WAWebAddonHydrationUtils",
    "WAWebEventResponseCollection",
    "WAWebEventResponseModel",
    "WAWebEventResponseMsgDataConversion",
    "WAWebMarkAddonsAsReadUsingAddonInfra",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "react",
    "react-compiler-runtime",
    "useWAWebAggregatedView",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useMemo } = s;
    function d({ ack, msgKey, sender, t: t_1 }) {
        return new (o("WAWebEventResponseModel")).EventResponse({
            id: msgKey,
            ack,
            parentMsgKey: msgKey,
            eventResponse: o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING,
            senderTimestampMs: t_1 * 1000,
            sender,
            t: t_1,
            read: true
        });
    }
    function useM(e) {
        const t = o("react-compiler-runtime").c(16);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebMsgGetters").getAck,
                o("WAWebMsgGetters").getT,
                o("WAWebMsgGetters").getSender
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebMsgValues").useMsgValues(e, n);
        const ack = r[0];
        const i = r[1];
        const l = r[2];
        const s = o("useWAWebAggregatedView").useAggregatedView(o("WAWebEventResponseCollection").EventResponseCollection.byParent, e);
        let c;
        if (t[1] !== ack || t[2] !== e || t[3] !== l || t[4] !== i) {
            c = d({
                ack,
                msgKey: e,
                sender: l,
                t: i
            });
            t[1] = ack;
            t[2] = e;
            t[3] = l;
            t[4] = i;
            t[5] = c;
        } else {
            c = t[5];
        }
        const m = c;
        const _ = o("WAWebMarkAddonsAsReadUsingAddonInfra").useMarkAddonsAsRead();
        let f;
        let g;
        if (t[6] !== s || t[7] !== _) {
            f = function() {
                const e = s.filter(p);
                if (e.length !== 0) {
                    _(e.map(o("WAWebEventResponseMsgDataConversion").eventResponseToEventResponseMsgData));
                }
            };
            g = [
                s,
                _
            ];
            t[6] = s;
            t[7] = _;
            t[8] = f;
            t[9] = g;
        } else {
            f = t[8];
            g = t[9];
        }
        useEffect(f, g);
        let h;
        let y;
        if (t[10] !== e) {
            h = function() {
                o("WAWebAddonHydrationUtils").hydrateAddons({
                    ids: [
                        e
                    ],
                    hydrationType: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE
                });
            };
            y = [
                e
            ];
            t[10] = e;
            t[11] = h;
            t[12] = y;
        } else {
            h = t[11];
            y = t[12];
        }
        useEffect(h, y);
        let C;
        if (t[13] !== m || t[14] !== s) {
            C = [].concat(s.toArray(), [
                m
            ]);
            t[13] = m;
            t[14] = s;
            t[15] = C;
        } else {
            C = t[15];
        }
        return C;
    }
    function p(e) {
        return !e.read;
    }
    l.useEventResponses = useM;
}, 98);