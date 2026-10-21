__d("WAWebPinInChatModel", [
    "WATimeUtils",
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebFrontendPinInChatGetters",
    "WAWebPinInChatGetters",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.msgKey = o("WAWebBaseModel").prop();
            t.parentMsgKey = o("WAWebBaseModel").prop();
            t.senderTimestampMs = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            t.sender = o("WAWebBaseModel").prop();
            t.chatId = o("WAWebBaseModel").prop();
            t.pinType = o("WAWebBaseModel").prop();
            t.pinExpiryDuration = o("WAWebBaseModel").prop();
            t.id = o("WAWebBaseModel").prop();
            t.read = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebPinInChatGetters").clearPinInChatGetterCacheFor(this);
            o("WAWebFrontendPinInChatGetters").clearFrontendPinInChatGetterCacheFor(this);
        };
        t_prototype.isNonExpiring = function() {
            return this.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN && this.pinExpiryDuration === 0 && o("WAWebPinMsgGatingUtils").isPinnedMessagesInfiniteReceiverEnabled();
        };
        t_prototype.leftExpirationTime = function() {
            if (this.isNonExpiring()) {
                return o("WAWebPinMsgConstants").PIN_TIME_REMAINING_INFINITE;
            }
            const n = (this.t ?? Math.floor(this.senderTimestampMs / 1000)) + (this.pinExpiryDuration ?? 0);
            return n - o("WATimeUtils").unixTime();
        };
        return t;
    })(o("WAWebAddOnModel").AddOnBaseModel);
    const s = o("WAWebBaseModel").defineModel(e);
    l.PinInChat = s;
}, 98);