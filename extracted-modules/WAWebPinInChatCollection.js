__d("WAWebPinInChatCollection", [
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebCollectionUtils",
    "WAWebFrontendPinInChatGetters",
    "WAWebPinInChatModel",
    "WAWebPinMsgConstants",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.byChatId = o("WAWebCollectionUtils").aggregated(function(e) {
                return e.chatId;
            });
            t.byIsFailedByMe = o("WAWebCollectionUtils").aggregated(function(e) {
                return o("WAWebFrontendPinInChatGetters").getIsFailed(e) && o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
            });
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.deleteByParentMessageKey = function(t) {
            this.remove(s(t));
        };
        t_prototype.getByMsgKey = function(t) {
            return this.findFirst(function(e) {
                return e.msgKey.equals(t);
            });
        };
        t_prototype.getByParentMsgKey = function(t) {
            return this.get(s(t));
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebPinInChatModel").PinInChat;
    e.comparator = function(e, t) {
        return Number(t.t) - Number(e.t);
    };
    function s(e) {
        return `!!${e.toString()}`;
    }
    function u(e) {
        if (e.senderTimestampMs == null) {
            return false;
        }
        const r = e.pinExpiryDuration != null && !e.isNonExpiring();
        const a = (e.t ?? Math.floor(e.senderTimestampMs / 1000)) + (e.pinExpiryDuration ?? 0);
        return r && a < o("WATimeUtils").unixTime();
    }
    function c(e) {
        return e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN && e.parentMsgKey != null && !u(e);
    }
    const d = new e;
    l.getPinInChatId = s;
    l.isPinExpired = u;
    l.isPinValid = c;
    l.PinInChatCollection = d;
}, 98);