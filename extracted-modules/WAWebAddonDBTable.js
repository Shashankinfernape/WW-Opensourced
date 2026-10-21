__d("WAWebAddonDBTable", [
    "WAWebAddonCommentTableMode",
    "WAWebAddonConstants",
    "WAWebAddonEventResponseTableMode",
    "WAWebAddonInfraError",
    "WAWebAddonPinTableMode",
    "WAWebAddonPollVoteTableMode",
    "WAWebAddonReactionTableMode",
    "WAWebAddonSelectUtils",
    "WAWebAddonUnifiedAddonsTableMode",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        switch(e){
            case o("WAWebAddonConstants").AddonTableMode.Pin:
                return o("WAWebAddonPinTableMode").pinTableMode;
            case o("WAWebAddonConstants").AddonTableMode.PollVote:
                return o("WAWebAddonPollVoteTableMode").pollVoteTableMode;
            case o("WAWebAddonConstants").AddonTableMode.Comment:
                return o("WAWebAddonCommentTableMode").commentTableMode;
            case o("WAWebAddonConstants").AddonTableMode.Reaction:
                return o("WAWebAddonReactionTableMode").reactionTableMode;
            case o("WAWebAddonConstants").AddonTableMode.EventResponse:
                return o("WAWebAddonEventResponseTableMode").eventResponseTableMode;
            case o("WAWebAddonConstants").AddonTableMode.Unified:
                return o("WAWebAddonUnifiedAddonsTableMode").unifiedAddonsTableMode;
            case o("WAWebAddonConstants").AddonTableMode.None:
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
        }
    }
    const s = {
        bulkUpsert: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                if (n.length !== 0) {
                    return e(t).bulkUpsert(n);
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        bulkGetByParentAndSender: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                if (n.length === 0) {
                    return [];
                }
                return e(t).bulkGetByParentAndSender(n);
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        bulkGetByMsgKey: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                return e(t).bulkGetByMsgKey(n, r);
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        bulkGetByParentMsgKey: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                return e(t).bulkGetByParentMsgKey(n);
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        bulkGetByChatWid: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                return e(t).bulkGetByChatWid(n);
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        bulkRemoveByMsgKey: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                if (n.length !== 0) {
                    return e(t).bulkRemoveByMsgKey(n);
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        updateAck: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                return e(t).updateAck(n, r);
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        getByMsgKey: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                return e(t).getByMsgKey(n);
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        getTableSize: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                return e(t).getTableSize();
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })()
    };
    const u = {
        bulkGetByParentAndSender: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                return s.bulkGetByParentAndSender(o("WAWebAddonSelectUtils").getTableModeByMsgType(e), t);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                return s.getByMsgKey(o("WAWebAddonSelectUtils").getTableModeByMsgType(e), t);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.addonInternalDBTable = s;
    l.addonDBTable = u;
}, 98);