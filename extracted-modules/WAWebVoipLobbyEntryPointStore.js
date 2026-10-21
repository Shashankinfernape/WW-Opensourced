__d("WAWebVoipLobbyEntryPointStore", [], function(t, n, r, o, a, i) {
    "use strict";
    let lobbyEntryPoint = null;
    let awaitsLobbyJoin = false;
    function s(t, n = false) {
        lobbyEntryPoint = t;
        awaitsLobbyJoin = n;
    }
    function u() {
        lobbyEntryPoint = null;
        awaitsLobbyJoin = false;
    }
    function c() {
        return {
            awaitsLobbyJoin,
            lobbyEntryPoint
        };
    }
    function d(t) {
        lobbyEntryPoint = t.lobbyEntryPoint;
        awaitsLobbyJoin = t.awaitsLobbyJoin;
    }
    function m(t) {
        if (!awaitsLobbyJoin || !t) {
            lobbyEntryPoint = null;
        }
        awaitsLobbyJoin = false;
    }
    function p() {
        return lobbyEntryPoint;
    }
    i.setLobbyEntryPoint = s;
    i.resetLobbyEntryPoint = u;
    i.snapshotLobbyEntryPoint = c;
    i.restoreLobbyEntryPoint = d;
    i.resetLobbyEntryPointOnAccept = m;
    i.getCurrentLobbyEntryPoint = p;
}, 66);