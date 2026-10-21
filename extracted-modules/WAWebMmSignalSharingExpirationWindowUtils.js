__d("WAWebMmSignalSharingExpirationWindowUtils", [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebMmSignalSharingContextInfo",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebProtobufMsgKeyUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 1000;
    const s = n("$InternalEnum")({
        DISCLOSED_TOKEN: "data_sharing_encrypted_token_disclosed",
        UNDISCLOSED_TOKEN: "data_sharing_encrypted_token_undisclosed"
    });
    function u(e, t) {
        if (e.isForwarded || !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return false;
        }
        if (t) {
            const n = o("WAWebMmSignalSharingContextInfo").getCappedMmSignalSharingContextInfo(t);
            const r = d(n);
            const dataSharingFlags = o("WAWebMmSignalSharingContextInfo").getMmSignalSharingContextInfoDisclosureFlag(n);
            const i = o("WAWebMmSignalSharingContextInfo").existsMmSignalSharingURlTrackingMapElements(n);
            if (r.disclosedToken != null || r.undisclosedToken != null || dataSharingFlags != null || i) {
                e.mmSignalSharing = babelHelpers.extends({
                    dataSharingFlags,
                    existsDisclosedToken: !!r.disclosedToken,
                    existsUndisclosedToken: !!r.undisclosedToken
                }, i ? {
                    urlTrackingMapElements: o("WAWebMmSignalSharingContextInfo").getMmSignalSharingURLTrackingMapElements(n)
                } : {});
                o("WAWebBackendApi").frontendFireAndForget("updateMmSignalSharingExpirationWindow", {
                    id: e.id.remote,
                    msg: e,
                    contextInfo: n
                });
                o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUpdateExpirationWindowEvent({
                    msg: e,
                    contextInfo: n
                });
                return true;
            }
        }
        return false;
    }
    function c({ contextInfo, mmSignalSharingExpirationWindow, msgKey, msgTimeClient, msgTimeServer }) {
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return null;
        }
        const l = babelHelpers.extends({
            unixTime: {
                client: msgTimeClient,
                server: msgTimeServer
            },
            messageId: msgKey
        }, d(contextInfo));
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingOptimizedDeliveryMultipleCollectionWindowsEnabled()) {
            return h(mmSignalSharingExpirationWindow, l);
        }
        return [
            l
        ];
    }
    function d(e) {
        const n = {
            disclosedToken: undefined,
            undisclosedToken: undefined
        };
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return n;
        }
        const r = e?.dataSharingContext?.parameters;
        if (r != null) {
            return C(r, n);
        }
        return n;
    }
    function m(e, t) {
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return null;
        }
        const r = e?.message?.interactiveMessage?.contextInfo;
        if (e?.key && o("WAWebMmSignalSharingContextInfo").existsMmSignalSharingContextInfoDisclosureFlag(r)) {
            return c({
                contextInfo: r,
                mmSignalSharingExpirationWindow: t,
                msgKey: o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(e.key),
                msgTimeClient: Number(e.messageTimestamp),
                msgTimeServer: Number(e.messageTimestamp)
            });
        }
        return t;
    }
    function p(e) {
        return [].concat(e).reverse();
    }
    function _(e) {
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return false;
        }
        const t = e?.[e.length - 1];
        return t != null && !f(t);
    }
    function f(e) {
        return e.unixTime.server + o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingCollectionWindow() < o("WATimeUtils").unixTime();
    }
    function g(e, t) {
        return e.unixTime.server + t * 3600 < o("WATimeUtils").unixTime();
    }
    function h(mmSignalSharingExpirationWindow, t) {
        const n = mmSignalSharingExpirationWindow ?? [];
        for (const r of n ?? []){
            y(r);
        }
        return n.filter(({ disclosedToken, undisclosedToken })=>disclosedToken != null || undisclosedToken != null).concat(t);
    }
    function y(e) {
        const t = o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingOptimizedDeliverySignalCollectionConfig();
        const { consented_collection_window_in_hours, non_consented_collection_window_in_hours } = t;
        if (g(e, consented_collection_window_in_hours)) {
            e.disclosedToken = undefined;
        }
        if (g(e, non_consented_collection_window_in_hours)) {
            e.undisclosedToken = undefined;
        }
    }
    function C(e, t) {
        const n = o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingOptimizedDeliveryTokensStorageConfig();
        const { store_consented_token_enabled, store_non_consented_token_enabled } = n;
        return e.reduce((acc, item)=>({
                disclosedToken: store_consented_token_enabled && item.key === s.DISCLOSED_TOKEN ? item.stringData : acc.disclosedToken,
                undisclosedToken: store_non_consented_token_enabled && item.key === s.UNDISCLOSED_TOKEN ? item.stringData : acc.undisclosedToken
            }), t);
    }
    l.MILLIS_PER_SECOND = e;
    l.updateMmSignalSharingExpirationWindowImpl = u;
    l.getMmSignalSharingExpirationWindow = c;
    l.getMmSignalSharingExpirationTokens = d;
    l.getUpdatedMmSignalSharingExpirationWindowFromHistorySync = m;
    l.getSortedMmSignalSharingExpirationWindowFromHistorySync = p;
    l.isMmSignalSharingExpirationWindowActive = _;
    l.hasMmSignalSharingWindowExpired = f;
    l.hasMmSignalSharingTokenExpired = g;
}, 98);