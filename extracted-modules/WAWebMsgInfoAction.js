__d("WAWebMsgInfoAction", [
    "WAWebAck",
    "WAWebStateUtils",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e({ ack, msgInfoParam, participant, ts }) {
        const msgInfo = o("WAWebStateUtils").unproxy(msgInfoParam);
        const msgInfo_id = msgInfo.id;
        const d = r("WAWebWid").isUser(msgInfo_id.remote);
        if (d) {
            s({
                ack,
                msgInfo,
                participant,
                ts
            });
        } else {
            u(msgInfo, ack, participant, ts);
        }
    }
    function s({ ack, msgInfo, participant, ts }) {
        if (ack === o("WAWebAck").ACK.PLAYED) {
            if (!msgInfo.played.get(participant)) {
                msgInfo.playedRemaining -= 1;
            }
            msgInfo.played.add({
                id: participant,
                t: ts
            });
        } else if (ack === o("WAWebAck").ACK.READ) {
            if (!msgInfo.read.get(participant)) {
                msgInfo.readRemaining -= 1;
            }
            msgInfo.read.add({
                id: participant,
                t: ts
            });
        } else if (ack === o("WAWebAck").ACK.RECEIVED) {
            if (!msgInfo.delivery.get(participant)) {
                msgInfo.deliveryRemaining -= 1;
            }
            msgInfo.delivery.add({
                id: participant,
                t: ts
            });
        }
    }
    function u(msgInfo, ack, participant, r) {
        let CLOCK = o("WAWebAck").ACK.CLOCK;
        if (msgInfo.played.get(participant)) {
            CLOCK = o("WAWebAck").ACK.PLAYED;
        } else if (msgInfo.read.get(participant)) {
            CLOCK = o("WAWebAck").ACK.READ;
        } else if (msgInfo.delivery.get(participant)) {
            CLOCK = o("WAWebAck").ACK.RECEIVED;
        }
        if (!(ack <= CLOCK)) {
            const i = c(msgInfo, participant) ? 1 : 0;
            if (ack > o("WAWebAck").ACK.RECEIVED) {
                const l = msgInfo.delivery.get(participant);
                if (l) {
                    msgInfo.delivery.remove(l);
                } else {
                    msgInfo.deliveryRemaining -= i;
                }
            }
            if (ack > o("WAWebAck").ACK.READ) {
                const s = msgInfo.read.get(participant);
                if (s) {
                    msgInfo.read.remove(s);
                } else {
                    msgInfo.readRemaining -= i;
                }
            }
            if (ack === o("WAWebAck").ACK.PLAYED) {
                if (!msgInfo.played.get(participant)) {
                    msgInfo.playedRemaining -= i;
                }
                msgInfo.played.add({
                    id: participant,
                    t: r
                });
            } else if (ack === o("WAWebAck").ACK.READ) {
                if (!msgInfo.read.get(participant)) {
                    msgInfo.readRemaining -= i;
                }
                msgInfo.read.add({
                    id: participant,
                    t: r
                });
            } else if (ack === o("WAWebAck").ACK.RECEIVED) {
                if (!msgInfo.delivery.get(participant)) {
                    msgInfo.deliveryRemaining -= i;
                }
                msgInfo.delivery.add({
                    id: participant,
                    t: r
                });
            }
        }
    }
    function c(msgInfo, participant) {
        return !participant.isBot() || msgInfo.countedAgents?.some(function(e) {
            return e.equals(participant);
        }) === true;
    }
    l.updateMsgInfo = e;
}, 98);