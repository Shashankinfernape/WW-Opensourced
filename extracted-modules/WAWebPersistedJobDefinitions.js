__d("WAWebPersistedJobDefinitions", [
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = {
        rotateKey: function() {
            return {
                type: "rotateKey",
                args: {},
                uniqKey: "rotateKey"
            };
        },
        setAbout: function(content) {
            return {
                type: "setAbout",
                args: {
                    content
                },
                uniqKey: "setAbout"
            };
        },
        queryProductList: function(t, productIds, directConnectionEncryptedInfo = null, a, height) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            return {
                type: "queryProductList",
                args: {
                    catalogWid: t.toString(),
                    productIds,
                    width: a,
                    height,
                    directConnectionEncryptedInfo
                },
                uniqKey: `queryProductList:${productIds.slice().sort().join(",")}:${a}:${height}`
            };
        },
        getPublicKey: function(t) {
            return {
                type: "getPublicKey",
                args: {
                    businessJid: t.toString()
                },
                uniqKey: `getPublicKey:${t.toString()}`
            };
        },
        getSignedUserInfo: function(t) {
            return {
                type: "getSignedUserInfo",
                args: {
                    businessJid: t.toString()
                },
                uniqKey: `getSignedUserInfo:${t.toString()}`
            };
        },
        verifyPostcode: function(t, directConnectionEncryptedInfo) {
            return {
                type: "verifyPostcode",
                args: {
                    businessJid: t.toString(),
                    directConnectionEncryptedInfo
                },
                uniqKey: `verifyPostcode:${t.toString()}:${directConnectionEncryptedInfo}`
            };
        },
        deleteReactions: function(t, n) {
            return {
                type: "deleteReactions",
                args: {
                    chatId: t,
                    parentMsgKeys: n
                },
                uniqKey: `deleteReactions:${t}`
            };
        },
        deleteReactionsV2: function(t, n) {
            return {
                type: "deleteReactionsV2",
                args: {
                    chatId: t,
                    parentMsgKeys: n
                }
            };
        },
        deleteAddOns: function(t, n) {
            return {
                type: "deleteAddOns",
                args: {
                    chatId: t,
                    parentMsgKeys: n
                }
            };
        },
        sendRequestedKeyShare: function(keys, orphanKeys, r) {
            return {
                type: "sendRequestedKeyShare",
                args: {
                    keys,
                    orphanKeys,
                    peerDeviceId: r.toString()
                }
            };
        },
        dismissQuickPromotion: function(t) {
            const e = o("WATimeUtils").unixTime();
            return {
                type: "dismissQuickPromotion",
                args: {
                    id: t,
                    ts: e
                },
                uniqKey: `dismissQuickPromotion-${t}-${e}`
            };
        },
        primaryActionClickInQuickPromotion: function(t) {
            const e = o("WATimeUtils").unixTime();
            return {
                type: "primaryActionClickInQuickPromotion",
                args: {
                    id: t,
                    ts: e
                },
                uniqKey: `primaryActionClickInQuickPromotion-${t}-${e}`
            };
        },
        impressionOnQuickPromotion: function(t) {
            const e = o("WATimeUtils").unixTime();
            return {
                type: "impressionOnQuickPromotion",
                args: {
                    id: t,
                    ts: e
                },
                uniqKey: `impressionOnQuickPromotion-${t}-${e}`
            };
        },
        userExposureToQuickPromotion: function(t, experimentKey, exposureHoldout) {
            const e = o("WATimeUtils").unixTime();
            return {
                type: "userExposureToQuickPromotion",
                args: {
                    id: t,
                    ts: e,
                    experimentKey,
                    exposureHoldout
                },
                uniqKey: `userExposureToQuickPromotion-${t}-${e}`
            };
        },
        setTextStatus: function(t, n, r) {
            return {
                type: "setTextStatus",
                args: {
                    text: t,
                    emoji: n,
                    ephemeralDurationSeconds: r
                },
                uniqKey: "setTextStatus"
            };
        },
        queryAndUpdateGroupsMetadataByJids: function(args) {
            const e = o("WATimeUtils").unixTime();
            return {
                type: "queryAndUpdateGroupsMetadataByJids",
                args,
                uniqKey: `handleGroupsDirtyNotification-${e}`
            };
        },
        resendUserMsg: function(t, n, r) {
            const e = t.data.id.toString();
            return {
                type: "resendUserMsg",
                args: {
                    msgId: e,
                    msgType: t.data.type,
                    msgRecordType: t.type,
                    excludeList: n.map((e)=>e.toString()),
                    ackTime: r
                },
                uniqKey: `resendUserMsg-${e}`
            };
        },
        resendGroupMsg: function(t, n, isDirect, o, a, i, serverAddressingMode) {
            const e = t.data.id.toString();
            const n_groupId = n.groupId;
            return {
                type: "resendGroupMsg",
                args: {
                    msgId: e,
                    msgType: t.data.type,
                    msgRecordType: t.type,
                    groupId: n_groupId,
                    isDirect,
                    oldList: o.map((e)=>e.toString()),
                    phash: a,
                    ackTime: i,
                    serverAddressingMode
                },
                uniqKey: `resendGroupMsg-${e}`
            };
        },
        incrementNewsletterForwardCounter: function({ delayedTime, newsletterId, retriesRemaining, serverId }) {
            return {
                type: "incrementNewsletterForwardCounter",
                args: {
                    newsletterId,
                    retriesRemaining,
                    serverId
                },
                waitUntil: delayedTime
            };
        }
    };
    l.jobSerializers = e;
}, 98);