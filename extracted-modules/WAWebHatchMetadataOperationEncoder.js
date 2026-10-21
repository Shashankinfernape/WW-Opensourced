__d("WAWebHatchMetadataOperationEncoder", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        const n = ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.method === "channel.bootstrap") {
                return {
                    method: "channel.bootstrap",
                    params: t.sections != null && t.sections.length > 0 ? {
                        sections: t.sections
                    } : {}
                };
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.method === "hitl.approval.decide" && "approvalId" in e && "decision" in e) {
                const { approvalId, decision } = e;
                return {
                    method: "hitl.approval.decide",
                    params: babelHelpers.extends({
                        approval_id: approvalId,
                        decision
                    }, t.alwaysScope != null && t.alwaysScope !== "" ? {
                        always_scope: t.alwaysScope
                    } : null)
                };
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.method === "hitl.payment.select" && "approvalId" in e && "paymentId" in e) {
                const { approvalId, paymentId } = e;
                return {
                    method: "hitl.payment.select",
                    params: {
                        approval_id: approvalId,
                        payment_id: paymentId
                    }
                };
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.method === "ideas.execute" && "ideaCardId" in e && e.mode === "full") {
                const ideaCardId = e.ideaCardId;
                return {
                    method: "ideas.execute",
                    params: babelHelpers.extends({
                        ideaCardId,
                        mode: "full"
                    }, t.locale != null ? {
                        locale: t.locale
                    } : null)
                };
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.method === "ideas.execute" && "ideaCardId" in e && e.mode === "selectedItems" && "itemIds" in e) {
                const { ideaCardId, itemIds } = e;
                return {
                    method: "ideas.execute",
                    params: babelHelpers.extends({
                        ideaCardId,
                        mode: "selectedItems",
                        itemIds
                    }, t.locale != null ? {
                        locale: t.locale
                    } : null)
                };
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(t);
        const r = {
            version: 1,
            type: "req",
            payload: n
        };
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-metadata: encoding req method=",
            ""
        ])), t.method);
        return new TextEncoder().encode(JSON.stringify(r)).buffer;
    }
    l.encodeHatchRequest = s;
}, 98);