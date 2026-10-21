__d("WAWebVoipBridgeContactHandlers", [
    "WAWebContactCollection",
    "WAWebContactExternalUserState",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        hydrateGuestParticipantContacts: function({ participants }) {
            participants.forEach(({ isGuestUser, jid, pushName, username })=>{
                if (!(o("WAWebUserPrefsMeUser").isMeAccount(jid) || jid.isBot() || !jid.isUser())) {
                    const l = {};
                    if (pushName != null && pushName !== "") {
                        l.pushname = pushName;
                    }
                    const s = username != null && username !== "" ? o("WAWebUsernameTypes").asMaybeUsername(username) : null;
                    if (s != null) {
                        l.username = s;
                    }
                    if (isGuestUser) {
                        l.externalUserState = o("WAWebContactExternalUserState").ExternalUserState.GuestUser;
                    }
                    if (!r("isEmptyObject")(l)) {
                        o("WAWebContactCollection").ContactCollection.gadd(o("WAWebWidFactory").asUserWidOrThrow(jid)).set(l);
                    }
                }
            });
        }
    };
    l.VoipBridgeContactHandlers = e;
}, 98);