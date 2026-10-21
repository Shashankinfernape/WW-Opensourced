__d("WAWebCoexV2UsernameInfoUpdate", [
    "WAWebCoexV2RepresentedIdentityFromMessage",
    "WAWebSetUsernameJob",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (!r("justknobx")._("5968")) {
            return null;
        }
        const n = o("WAWebCoexV2RepresentedIdentityFromMessage").maybeResolveCoexV2RepresentedIdentityFromMessage(e, t);
        if (n == null) {
            return null;
        }
        const a = n.representedIdentity;
        if (a == null || a.username == null) {
            return {
                peerRecipientUsernameInfo: null,
                usernameInfoUpdate: null
            };
        }
        const { identitySource: i, representedUser: l, username: s } = a;
        if (i === "peer-recipient") {
            return {
                peerRecipientUsernameInfo: {
                    userId: l,
                    username: s
                },
                usernameInfoUpdate: null
            };
        }
        return {
            peerRecipientUsernameInfo: null,
            usernameInfoUpdate: o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
                userId: l,
                username: s,
                usernameCountryCode: e.senderCountryCode
            })
        };
    }
    l.maybeGetCoexV2UsernameInfoUpdatePlan = e;
}, 98);