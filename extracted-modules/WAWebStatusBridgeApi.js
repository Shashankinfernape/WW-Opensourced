__d("WAWebStatusBridgeApi", [
    "JSResourceForInteraction",
    "WAJids",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebDeleteStatusAction",
    "WAWebNewsletterSyntheticStatusUtils",
    "WAWebSettingsModel",
    "WAWebStatusCollection"
], function(t, n, r, o, a, i, l) {
    const e = {
        clearStatusForRemovedContact: function() {
            return o("WAWebStatusCollection").StatusCollection.sync().then(o("WAWebDeleteStatusAction").clearStatusForRemovedContact).then(o("WAWebNewsletterSyntheticStatusUtils").createSyntheticsForNewsletters);
        },
        fillGapFromIncomingStanza: function({ incomingServerId, newsletterJid, sentTime }) {
            return r("JSResourceForInteraction")("WAWebNewsletterStatusGapFillAction").__setRef("WAWebStatusBridgeApi").load().then((t)=>t.fillGapFromIncomingStanza(o("WAJids").toNewsletterJid(newsletterJid), incomingServerId, sentTime));
        },
        fillSubscribedStatusGaps: function() {
            return r("JSResourceForInteraction")("WAWebNewsletterStatusGapFillAction").__setRef("WAWebStatusBridgeApi").load().then((e)=>e.fillSubscribedStatusGaps());
        },
        handleStatusUpdate: function({ isMsgUpdate, rawMsg }) {
            return o("WAWebStatusCollection").StatusCollection.handleUpdate(rawMsg, isMsgUpdate);
        },
        handleReadStatus: function({ msgKeys }) {
            for (const n of msgKeys){
                const r = s(n);
                const a = r && o("WAWebStatusCollection").StatusCollection.get(r);
                if (a) {
                    const i = o("WAWebContactGetters").getIsMe(a.contact) && !n.fromMe;
                    if (i) {
                        continue;
                    }
                    a.handleReadStatus(n);
                }
            }
        },
        triggerUpdateCrosspostAutoShareSettingsFromBridge: function(t) {
            const { shareToFB, shareToIG } = t;
            if (shareToFB != null) {
                r("WAWebSettingsModel").shareToFB = shareToFB;
            }
            if (shareToIG != null) {
                r("WAWebSettingsModel").shareToIG = shareToIG;
            }
            o("WAWebCmd").Cmd.updateCrosspostAutoShareSettingsFromBridge(t);
        },
        triggerUpdateStatusPrivacySettingsFromBridge: function(t) {
            o("WAWebCmd").Cmd.updateStatusPrivacySettingsFromBridge(t);
        }
    };
    function s({ participant, remote }) {
        if (remote.isStatus()) {
            return participant;
        }
        if (remote.isGroup() || remote.isNewsletter()) {
            return remote;
        }
        return null;
    }
    l.StatusBridgeApi = e;
}, 98);