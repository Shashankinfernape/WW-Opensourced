__d("WAWebGenerateBotRequestWelcomeMessageProto", [
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const json_botDeepLinkToken = json.botDeepLinkToken;
        return {
            protocolMessage: {
                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE,
                requestWelcomeMessageMetadata: json_botDeepLinkToken != null ? {
                    botAgentMetadata: {
                        deepLinkMetadata: {
                            token: json_botDeepLinkToken
                        }
                    }
                } : undefined
            }
        };
    }
    l.default = e;
}, 98);