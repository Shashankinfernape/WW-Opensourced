__d("WAWebHatchMetadataOperationDecoder", [
    "WALongInt",
    "WAWebHatchDecodeError",
    "WAWebHatchJsonReaders",
    "cr:7454"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_VERSION);
    }
    function s(t, r, a, i) {
        let l;
        try {
            l = JSON.parse(new TextDecoder("utf-8").decode(t));
        } catch (e) {
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.PARSE_FAILURE);
        }
        if (!o("WAWebHatchJsonReaders").isObject(l)) {
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.PARSE_FAILURE);
        }
        const s = ((t)=>{
            if (t === 1) {
                return u(l, r, a);
            }
            return e();
        })(o("WAWebHatchJsonReaders").readNumber(l, "version"));
        if (s != null) {
            if (n("cr:7454") != null) {
                n("cr:7454").recordInbound(s, t, i);
            }
        }
        return s;
    }
    function u(e, t, n) {
        const r = o("WAWebHatchJsonReaders").readField(e, "type");
        if (r === "req") {
            return c(e, n);
        }
        if (r === "res") {
            return p(e, n);
        }
        const a = o("WAWebHatchJsonReaders").readField(e, "payload");
        if (!o("WAWebHatchJsonReaders").isObject(a)) {
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
        }
        const i = o("WAWebHatchJsonReaders").readString(a, "event");
        if (i == null || i.length === 0) {
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_OP_KEY);
        }
        const l = o("WAWebHatchJsonReaders").readField(a, "payload");
        const s = o("WAWebHatchJsonReaders").readString(l, "session_id");
        const u = o("WAWebHatchJsonReaders").readNumber(a, "ts_ms");
        const d = u ?? o("WALongInt").maybeNumberOrThrowIfTooLarge(t);
        const m = o("WAWebHatchJsonReaders").readNumber(a, "seq");
        const _ = "SET";
        return {
            type: "event",
            requestId: n,
            event: {
                seq: m,
                timestamp: d,
                index: i,
                opKey: i,
                operation: _,
                payload: l,
                sessionId: s
            }
        };
    }
    function c(e, t) {
        if (t == null) {
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
        }
        const n = o("WAWebHatchJsonReaders").readField(e, "payload");
        e: {
            const r = o("WAWebHatchJsonReaders").readString(n, "method");
            if (r === "channel.bootstrap") {
                const a = o("WAWebHatchJsonReaders").readField(n, "params");
                const i = o("WAWebHatchJsonReaders").readField(a, "sections");
                const l = [];
                if (Array.isArray(i)) {
                    for (const s of i){
                        if (s === "agent.status" || s === "identity.updated" || s === "hitl.snapshot") {
                            l.push(s);
                        }
                    }
                }
                return {
                    type: "req",
                    requestId: t,
                    request: l.length > 0 ? {
                        method: "channel.bootstrap",
                        sections: l
                    } : {
                        method: "channel.bootstrap"
                    }
                };
            }
            if (r === "hitl.approval.decide") {
                const u = o("WAWebHatchJsonReaders").readField(n, "params");
                const c = o("WAWebHatchJsonReaders").readString(u, "approval_id");
                const m = o("WAWebHatchJsonReaders").readString(u, "decision");
                if (c == null || c === "" || m == null || m === "") {
                    throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
                }
                const p = o("WAWebHatchJsonReaders").readString(u, "always_scope");
                return {
                    type: "req",
                    requestId: t,
                    request: babelHelpers.extends({
                        method: "hitl.approval.decide",
                        approvalId: c,
                        decision: m
                    }, p != null && p !== "" ? {
                        alwaysScope: p
                    } : null)
                };
            }
            if (r === "hitl.payment.select") {
                const _ = o("WAWebHatchJsonReaders").readField(n, "params");
                const f = o("WAWebHatchJsonReaders").readString(_, "approval_id");
                const g = o("WAWebHatchJsonReaders").readString(_, "payment_id");
                if (f == null || f === "" || g == null || g === "") {
                    throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
                }
                return {
                    type: "req",
                    requestId: t,
                    request: {
                        method: "hitl.payment.select",
                        approvalId: f,
                        paymentId: g
                    }
                };
            }
            if (r === "ideas.execute") {
                return {
                    type: "req",
                    requestId: t,
                    request: d(o("WAWebHatchJsonReaders").readField(n, "params"))
                };
            }
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
        }
    }
    function d(e) {
        const t = o("WAWebHatchJsonReaders").readString(e, "ideaCardId");
        if (t == null || t === "") {
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
        }
        const n = o("WAWebHatchJsonReaders").readString(e, "locale");
        const r = n != null ? {
            locale: n
        } : null;
        e: {
            const a = o("WAWebHatchJsonReaders").readString(e, "mode");
            if (a === "full") {
                return babelHelpers.extends({
                    method: "ideas.execute",
                    ideaCardId: t,
                    mode: "full"
                }, r);
            }
            if (a === "selectedItems") {
                return babelHelpers.extends({
                    method: "ideas.execute",
                    ideaCardId: t,
                    mode: "selectedItems",
                    itemIds: m(o("WAWebHatchJsonReaders").readField(e, "itemIds"))
                }, r);
            }
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
        }
    }
    function m(e) {
        if (!Array.isArray(e) || e.length === 0) {
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
        }
        return e.map((e)=>{
            if (typeof e !== "string" || e === "") {
                throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
            }
            return e;
        });
    }
    function p(e, t) {
        const n = o("WAWebHatchJsonReaders").readField(e, "payload");
        const r = o("WAWebHatchJsonReaders").readString(n, "method");
        if (r == null || r.length === 0) {
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD);
        }
        e: {
            const a = o("WAWebHatchJsonReaders").readString(e, "status");
            if (a === "ok") {
                return {
                    type: "res",
                    requestId: t,
                    response: {
                        status: "ok",
                        method: r,
                        body: o("WAWebHatchJsonReaders").readField(n, "body")
                    }
                };
            }
            if (a === "error") {
                const i = o("WAWebHatchJsonReaders").readField(n, "body");
                return {
                    type: "res",
                    requestId: t,
                    response: {
                        status: "error",
                        method: r,
                        errorCode: o("WAWebHatchJsonReaders").readString(i, "error_code"),
                        errorMessage: o("WAWebHatchJsonReaders").readString(i, "error_message")
                    }
                };
            }
            throw new (o("WAWebHatchDecodeError")).HatchDecodeError(o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_STATUS);
        }
    }
    l.decodeHatchMetadataOperation = s;
}, 98);