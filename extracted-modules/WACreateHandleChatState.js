__d("WACreateHandleChatState", [
    "Promise",
    "WAHandleChatStateProtocol",
    "WAResultOrError",
    "WASmaxChatstateServerNotificationRPC"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (e || (e = n("Promise"))).resolve(o("WAResultOrError").makeResult("NO_ACK"));
    function u(e) {
        const r = e.individualMessage?.handleIndividualChatState;
        const a = e.groupMessage?.handleGroupChatState;
        return function(t) {
            if (r == null && a == null) {
                return s;
            }
            const e = o("WASmaxChatstateServerNotificationRPC").receiveServerNotificationRPC(t);
            const e_parsedRequest = e.parsedRequest;
            const { stateSource, stateTypes } = e_parsedRequest;
            const status = o("WAHandleChatStateProtocol").parseChatStatus(stateTypes);
            if (stateSource.name === "FromUser") {
                return (r == null ? undefined : r({
                    status,
                    jid: stateSource.value.from
                }).then(o("WAResultOrError").makeResult)) ?? s;
            } else {
                stateSource.name;
                return (a == null ? undefined : a({
                    status,
                    jid: stateSource.value.from,
                    participant: stateSource.value.participant
                }).then(o("WAResultOrError").makeResult)) ?? s;
            }
        };
    }
    l.createHandleChatState = u;
}, 98);