__d("WAWebCoexV2PhoneNumberMapping", [
    "WALogger",
    "WAWebCoexV2RepresentedIdentityFromMessage"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n) {
        const a = o("WAWebCoexV2RepresentedIdentityFromMessage").maybeResolveCoexV2RepresentedIdentityFromMessage(t, n);
        if (a == null) {
            return null;
        }
        const i = a.representedIdentity;
        if (i == null) {
            const l = n?.targetChatJid;
            if (l != null && !l.isRegularUser()) {
                return {
                    mapping: null
                };
            }
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] relay phone mapping rejected invalid represented identity"
            ]))).sendLogs("coexv2-relay-phone-mapping-invalid-identity");
            return {
                mapping: null
            };
        }
        if (i.representedLid == null || i.phoneNumber == null) {
            return {
                mapping: null
            };
        }
        const { identitySource: s, phoneNumber: u, representedLid: c } = i;
        if (s === "peer-recipient" && t.recipientLatestLid != null) {
            return {
                mapping: {
                    lid: c,
                    latestLid: t.recipientLatestLid,
                    pn: u,
                    learningSource: "recipient-latest-lid"
                }
            };
        }
        if (s === "sender") {
            return {
                mapping: {
                    lid: c,
                    pn: u,
                    learningSource: "process-phone-number-mapping"
                }
            };
        }
        return {
            mapping: {
                lid: c,
                pn: u,
                learningSource: n?.targetChatJid?.isLid() === true ? "peer-lid-message" : "peer-pn-message"
            }
        };
    }
    l.maybeGetCoexV2PhoneNumberMappingPlan = s;
}, 98);