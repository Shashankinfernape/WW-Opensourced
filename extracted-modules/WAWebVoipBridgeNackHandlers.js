__d("WAWebVoipBridgeNackHandlers", [
    "WAWebVoipNackHandlers"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        handleCallOfferNacked: function({ callOfferNackedData }) {
            o("WAWebVoipNackHandlers").handleCallOfferNacked(callOfferNackedData);
        },
        handleCallLinkNacked: function({ nackCode }) {
            o("WAWebVoipNackHandlers").handleCallLinkNacked(nackCode);
        },
        handleLobbyNacked: function() {
            o("WAWebVoipNackHandlers").handleLobbyNacked();
        },
        handleLobbyTimeout: function() {
            o("WAWebVoipNackHandlers").handleLobbyTimeout();
        }
    };
    l.VoipBridgeNackHandlers = e;
}, 98);