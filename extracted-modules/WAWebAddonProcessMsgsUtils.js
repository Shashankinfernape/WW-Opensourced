__d("WAWebAddonProcessMsgsUtils", [
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonGatingUtils",
    "WAWebAddonPerfUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonQueryUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebParentMsgKeyValidation",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        if (e.targetMessageKey != null) {
            return "targetMessageKey";
        }
        if (e.pinParentKey != null) {
            return "pinParentKey";
        }
        if (e.pollUpdateParentKey != null) {
            return "pollUpdateParentKey";
        }
        if (e.reactionParentKey != null) {
            return "reactionParentKey";
        }
        if (e.parentMsgKey != null) {
            return "parentMsgKey";
        }
        throw new (o("WAWebParentMsgKeyValidation")).ParentMsgKeyValidationError(o("WAWebParentMsgKeyValidation").ParentMsgKeyValidationErrorCode.MISSING_PARENT_MESSAGE_KEY);
    }
    function c(e) {
        const l = e.targetMessageKey ?? e.parentMsgKey ?? e.pinParentKey ?? e.pollUpdateParentKey ?? e.reactionParentKey;
        if (l instanceof r("WAWebMsgKey")) {
            return l;
        }
        throw new (o("WAWebParentMsgKeyValidation")).ParentMsgKeyValidationError(o("WAWebParentMsgKeyValidation").ParentMsgKeyValidationErrorCode.MISSING_PARENT_MESSAGE_KEY);
    }
    function d(e) {
        const t = c(e);
        if (t.remote.isBroadcastList()) {
            const n = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(t, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message);
            const a = t.fromMe ? n.to : n.from;
            return new (r("WAWebMsgKey"))({
                remote: a,
                fromMe: t.fromMe,
                id: t.id
            });
        }
        return t;
    }
    function m(e) {
        const t = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e);
        if (o("WAWebAddonPluginProcessor").getAddonProcessorsMap().has(t)) {
            return e;
        }
    }
    function p(e, t) {
        const n = new Map;
        const a = e.map((e)=>{
            const i = d(e);
            const l = o("WAWebLidMigrationUtils").getAlternateMsgKey(i);
            let s = null;
            if (n.has(i.toString())) {
                s = r("nullthrows")(n.get(i.toString()));
            } else if (l != null && n.has(l.toString())) {
                s = r("nullthrows")(n.get(l.toString()));
            } else {
                let u = t.get(i.toString());
                if (u == null && l) {
                    u = t.get(l.toString());
                }
                if (u != null && !i.equals(u.id)) {
                    s = u.id;
                    n.set(i.toString(), s);
                }
            }
            const c = t.get(i.toString()) ?? (l != null ? t.get(l.toString()) : undefined);
            if (c == null) {
                return e;
            }
            if (s == null) {
                return _(e, c);
            }
            const m = f(e, s);
            return _(m, c);
        });
        n.forEach((e, n)=>{
            const r = t.get(n);
            if (r != null) {
                t.set(e.toString(), r);
                t.delete(n);
            }
        });
        return [
            t,
            a
        ];
    }
    function _(e, t) {
        let n;
        const o = t.broadcastId != null && r("WAWebWid").isWid(t.broadcastId) && !!((n = t.broadcastId) != null && n.isBroadcastList());
        if (!o) {
            return e;
        }
        const a = d(e);
        return f(e, new (r("WAWebMsgKey"))({
            id: a.id,
            fromMe: a.fromMe,
            remote: a.remote
        }));
    }
    function f(e, t) {
        const o = u(e);
        let a = e.id;
        if (e.id.remote.isUser() && t.remote.isUser()) {
            a = new (r("WAWebMsgKey"))({
                fromMe: e.id.fromMe,
                remote: t.remote,
                id: e.id.id
            });
        }
        return babelHelpers.extends({}, e, {
            id: a,
            [o]: t
        });
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.map(d);
            let r;
            if (t === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive) {
                r = yield o("WAWebAddonPerfUtils").createMessagesQplMarker(o("WAWebAddonPerfUtils").AddonQplMarkerType.Incoming, {
                    type: o("WAWebAddonPerfUtils").AnnotationRequestType.BulkGetParentMsgs,
                    size: n.length
                });
            }
            try {
                const i = yield y(e);
                r?.success();
                return i;
            } catch (error) {
                r?.fail();
                throw error;
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map(d);
            const n = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(t);
            return p(e, n);
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const r = [];
                for (const [i, l] of o("WAWebAddonPluginProcessor").getAddonProcessorsMap().entries()){
                    if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(i)) {
                        r.push(l.convert.fromHistorySyncMsg(t));
                    }
                }
                const u = yield (s || (s = n("Promise"))).all(r).then((e)=>[].concat(...e));
                return u;
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseHistorySyncMsg: error:",
                    ""
                ])), error).tags("addons", "messaging").sendLogs("parseHistorySyncMsg");
                return [];
            }
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        const t = [];
        const otherOrphans = [];
        const legacyReactionAddons = [];
        for (const a of e){
            const i = a.parsedMsgPayload;
            if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(i.type)) {
                const l = m(i);
                if (l != null) {
                    t.push(l);
                } else {
                    otherOrphans.push(a);
                }
            } else {
                if (i.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted) {
                    legacyReactionAddons.push(i);
                } else {
                    otherOrphans.push(a);
                }
            }
        }
        return {
            unifiedAddons: t,
            otherOrphans,
            legacyReactionAddons
        };
    }
    l.getParentMsgKey = d;
    l.castToAddonMsgData = m;
    l.updateMsgParentKeyValue = f;
    l.queryAddonParentMsgs = g;
    l.queryParentMsgs = y;
    l.parseHistorySyncMsg = b;
    l.sortAddonOrphans = S;
}, 98);