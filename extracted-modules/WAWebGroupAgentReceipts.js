__d("WAWebGroupAgentReceipts", [
    "WAWebBackendJobs.flow",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTypes",
    "WAWebBotUtils"
], function(t, n, r, o, a, i, l) {
    function e({ encs, msgBotInfo, msgInfo }) {
        if (!c(msgInfo)) {
            return false;
        }
        const a = msgBotInfo?.botEditType;
        return encs.some((e)=>d(e, a, msgInfo.author)) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function s(e, t, n) {
        return e.isGroup() && n === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && t != null && o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function u({ msgBotInfo, msgInfo }) {
        return c(msgInfo) && m(msgBotInfo?.botEditType) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function c(msgInfo) {
        return msgInfo.chat.isGroup() && msgInfo.author.isBot();
    }
    function d(e, t, author) {
        if (e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg) {
            return t == null || t === o("WAWebBotTypes").BotMsgEditType.FULL || t === o("WAWebBotTypes").BotMsgEditType.LAST;
        }
        if (e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
            return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(author);
        }
        if (e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msg || e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg) {
            return false;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.e2eType}`);
        })();
    }
    function m(e) {
        return e == null || e === o("WAWebBotTypes").BotMsgEditType.FULL || e === o("WAWebBotTypes").BotMsgEditType.FIRST;
    }
    l.shouldSendGroupAgentDeliveryReceipt = e;
    l.shouldSendGroupAgentRetryReceipt = s;
    l.isGroupAgentMsmsgDecryptNackEnabled = u;
}, 98);