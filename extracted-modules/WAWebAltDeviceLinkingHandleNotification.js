__d("WAWebAltDeviceLinkingHandleNotification", [
    "WACryptoUtils",
    "WASmaxMdPrimaryHelloNotifyCompanionRPC",
    "WASmaxMdRefreshCodeNotifyCompanionRPC",
    "WASmaxMessageFallbackDeliverRPC",
    "WAWebAltDeviceLinkingApi",
    "WAWebAltDeviceLinkingQpl",
    "WAWebBackendApi",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return e;
    }
    function u(e) {
        const e_content = e.content;
        if (!Array.isArray(e_content) || !e_content.length) {
            return o("WASmaxMessageFallbackDeliverRPC").makeDeliverResponseBadStanza({
                ackError: 487
            }, e);
        }
        const attrs = e_content[0].attrs;
        if (attrs.stage === "primary_hello") {
            return c(e);
        }
        if (attrs.stage === "refresh_code") {
            return d(e);
        }
        return o("WASmaxMessageFallbackDeliverRPC").makeDeliverResponseBadStanza({
            ackError: 487
        }, e);
    }
    function c(t) {
        const n = o("WASmaxMdPrimaryHelloNotifyCompanionRPC").receivePrimaryHelloNotifyCompanionRPC(t);
        const { makePrimaryHelloNotifyCompanionResponseAck, parsedRequest } = n;
        if (!parsedRequest) {
            o("WAWebBackendApi").frontendFireAndForget("errorAltLinking", {});
            throw r("err")("alt pairing: could not parse primary hello");
        }
        try {
            e = o("WAWebAltDeviceLinkingApi").handlePrimaryHello(parsedRequest);
            return makePrimaryHelloNotifyCompanionResponseAck();
        } catch (error) {
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("primary_hello_error");
            throw error;
        }
    }
    function d(e) {
        const t = o("WASmaxMdRefreshCodeNotifyCompanionRPC").receiveRefreshCodeNotifyCompanionRPC(e);
        const { makeRefreshCodeNotifyCompanionResponseAck, parsedRequest } = t;
        if (!parsedRequest) {
            throw r("err")("alt pairing: could not parse refresh code");
        }
        const i = o("WAWebAltDeviceLinkingApi").getCurrentRef();
        if (i != null && o("WACryptoUtils").uint8ArraysEqual(i, parsedRequest.linkCodeCompanionRegLinkCodePairingRefElementValue)) {
            if (parsedRequest.linkCodeCompanionRegForceManualRefresh === "true") {
                o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("receive_force_refresh_code");
                o("WAWebBackendApi").frontendFireAndForget("forceManualRefresh", {
                    ref: parsedRequest.linkCodeCompanionRegLinkCodePairingRefElementValue
                });
            } else {
                o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("receive_refresh_code");
                o("WAWebBackendApi").frontendFireAndForget("refreshAltLinkingCode", {
                    ref: parsedRequest.linkCodeCompanionRegLinkCodePairingRefElementValue
                });
            }
        }
        return makeRefreshCodeNotifyCompanionResponseAck();
    }
    l.getPrimaryHello = s;
    l.handleAltDeviceLinkingNotification = u;
}, 98);