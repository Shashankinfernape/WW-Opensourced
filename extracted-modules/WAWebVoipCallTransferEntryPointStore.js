__d("WAWebVoipCallTransferEntryPointStore", [
    "WAWebChatCollection",
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.$CallTransferEntryPointStore$p_1 = new Map;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.applyChange = function({ enabled, isVideoCall, peerActiveDeviceJid, peerWid, rootCallCreatorJid, rootCallId }) {
            const l = `${rootCallId}|${rootCallCreatorJid}`;
            if (enabled) {
                this.$CallTransferEntryPointStore$p_1.set(l, {
                    rootCallId,
                    rootCallCreatorJid,
                    peerActiveDeviceJid,
                    peerWid,
                    isVideoCall
                });
            } else if (!this.$CallTransferEntryPointStore$p_1.delete(l)) {
                return;
            }
            this.trigger("change");
        };
        t_prototype.getForChat = function(t) {
            for (const e of this.$CallTransferEntryPointStore$p_1.values()){
                if (o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e.peerWid)?.id.equals(t.id) === true) {
                    return e;
                }
            }
            return null;
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.WAWebVoipCallTransferEntryPointStore = s;
}, 98);