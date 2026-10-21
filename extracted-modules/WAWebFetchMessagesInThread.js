__d("WAWebFetchMessagesInThread", [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "WAWebThreadUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        const t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
        return `${String(t)}_${e.key.toString()}_/`;
    }
    function u(e) {
        const t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
        return `${String(t)}_${e.key.toString()}_g`;
    }
    const c = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "NoOffsetMessageError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const d = 20;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ count = d, direction, lastLoadedMsg, threadId }) {
            const m = lastLoadedMsg == null ? undefined : yield o("WAWebSchemaMessage").getMessageTable().equals([
                "id"
            ], lastLoadedMsg.toString());
            if (lastLoadedMsg && m != null && m.length === 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Offset message ",
                    " does not exist in message table"
                ])), lastLoadedMsg && lastLoadedMsg.toString());
                throw new c;
            }
            const p = m?.[0];
            let _;
            let f;
            let reverse = false;
            if (direction === "before") {
                _ = s(threadId);
                f = p == null ? u(threadId) : o("WAWebDBMessageUtils").craftInternalThreadId(o("WAWebDBMessageUtils").getInChatMsgId(p.internalId || ""), threadId);
                reverse = true;
            } else {
                _ = p == null ? s(threadId) : o("WAWebDBMessageUtils").craftInternalThreadId(o("WAWebDBMessageUtils").getInChatMsgId(p.internalId || ""), threadId);
                f = u(threadId);
            }
            const h = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalThreadIDs"
            ], _, f, {
                lowerInclusive: false,
                upperInclusive: false,
                limit: count,
                reverse
            });
            return h;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalThreadIDs"
            ], s(e), u(e), {
                lowerInclusive: false,
                upperInclusive: false,
                limit: 1
            });
            const n = t[0];
            if (n == null) {
                return null;
            }
            return {
                id: n.id,
                t: n.t
            };
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalThreadIDs"
            ], s(e), u(e), {
                lowerInclusive: false,
                upperInclusive: false,
                limit: 1,
                reverse: true
            });
            const n = t[0];
            if (n == null) {
                return null;
            }
            return {
                id: n.id,
                t: n.t
            };
        });
        return h.apply(this, arguments);
    }
    l.beginningOfThread = s;
    l.endOfThread = u;
    l.NoOffsetMessageError = c;
    l.queryMessageForThreadId = m;
    l.getFirstMessageInfoForThread = _;
    l.getLatestMessageInfoForThread = g;
}, 98);