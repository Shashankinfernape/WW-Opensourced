__d("WAWebGroupMetadataBridgeApi", [
    "Promise",
    "WAWebChatCollection",
    "WAWebGroupMetadataCollection",
    "WAWebWamNumberToSizeBucket",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        getGroupMetadata: function({ groupWid }) {
            return r("WAWebGroupMetadataCollection").get(groupWid);
        },
        updateCachedDeviceCount: function({ deviceCount, groupWid }) {
            const o = r("WAWebGroupMetadataCollection").get(groupWid);
            if (o != null) {
                o.cachedDeviceCount = deviceCount;
                o.cachedDeviceSizeBucket = r("WAWebWamNumberToSizeBucket")(deviceCount);
            }
        },
        setGroupMetadata: function(t) {
            r("WAWebGroupMetadataCollection").get(t.id)?.set(t);
        },
        removeMembershipApprovalRequests: function({ groupId, requestIds }) {
            r("WAWebGroupMetadataCollection").get(groupId)?.membershipApprovalRequests.remove(requestIds);
        },
        addMembershipApprovalRequests: function({ groupId, requests }) {
            r("WAWebGroupMetadataCollection").get(groupId)?.membershipApprovalRequests.add(requests, {
                merge: true
            });
        },
        syncEphemeralTriggerCollectionForGroup: function({ chatId, trigger }) {
            const l = o("WAWebChatCollection").ChatCollection.get(chatId);
            if (!l) {
                return (e || (e = n("Promise"))).resolve();
            }
            const s = r("nullthrows")(l.groupMetadata);
            if (s != null) {
                s.disappearingModeTrigger = trigger;
            }
            return (e || (e = n("Promise"))).resolve();
        }
    };
    l.GroupMetadataBridgeApi = s;
}, 98);