__d("WAWebHatchApprovalRecordDecoder", [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureMediaDecoder",
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = "pending";
    const c = 16;
    const d = 9;
    const m = "rich";
    function p(t) {
        const n = _(t);
        const r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "approval_id");
        if (o("WAWebHatchJsonReaders").isBlankText(r)) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: dropping record with no approval id"
            ]))).sendLogs("hatch-approval-no-approval-id");
            return null;
        }
        const a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "decision");
        const i = o("WAWebHatchJsonReaders").readStringOrEmpty(t, "lifecycle");
        const l = o("WAWebHatchJsonReaders").isBlankText(i) ? o("WAWebHatchJsonReaders").readStringOrEmpty(n, "status") : i;
        if (!o("WAWebHatchJsonReaders").isBlankText(a) || !o("WAWebHatchJsonReaders").isBlankText(l) && l !== u) {
            return {
                approvalId: r,
                resolvedDecision: o("WAWebHatchJsonReaders").isBlankText(a) ? l : a,
                record: null
            };
        }
        return {
            approvalId: r,
            resolvedDecision: null,
            record: f(n, r, o("WAWebHatchSecureMediaDecoder").decodeSecureMediaMap(o("WAWebHatchJsonReaders").readField(t, "secure_media")))
        };
    }
    function _(e) {
        const r = o("WAWebHatchJsonReaders").readObject(e, "record") ?? o("WAWebHatchJsonReaders").readObject(e, "approval_record") ?? o("WAWebHatchJsonReaders").readObject(e, "approval");
        return r ?? e;
    }
    function f(e, t, n) {
        const i = x(o("WAWebHatchJsonReaders").readArray(e, "decision_options"));
        if (i.length === 0) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: dropping record without decision options approvalId=",
                ""
            ])), t).sendLogs("hatch-approval-no-decision-options");
            return null;
        }
        const l = o("WAWebHatchJsonReaders").readField(e, "display");
        const u = o("WAWebHatchJsonReaders").readField(e, "payload");
        const c = o("WAWebHatchJsonReaders").readStringOrEmpty(u, "type");
        const d = P(c);
        const p = o("WAWebHatchJsonReaders").readStringOrEmpty(l, "presentation_kind") === m;
        return babelHelpers.extends({
            approvalId: t,
            isExclusive: o("WAWebHatchJsonReaders").readBool(e, "is_exclusive") === true,
            requestedAtMs: o("WAWebHatchJsonReaders").readNumber(e, "requested_at_ms") ?? 0,
            requestExpiresAtMs: o("WAWebHatchJsonReaders").readNumber(e, "request_expires_at_ms") ?? 0,
            permissionCaption: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "permission_caption"),
            iconKey: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "icon_key"),
            summaryTitle: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "summary_title"),
            requestPresentation: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "request_presentation"),
            permissionQuestion: o("WAWebHatchJsonReaders").readStringOrEmpty(o("WAWebHatchJsonReaders").readField(l, "permission_question"), "text"),
            purposeSummary: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "purpose_summary"),
            richExplanation: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "rich_explanation"),
            detailRows: $(o("WAWebHatchJsonReaders").readArray(l, "detail_rows")),
            payloadType: d,
            rawPayloadType: c,
            iconUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "icon_url"),
            decisionOptions: i
        }, h(p ? u : null, d), g(p && d === "shopify_checkout" ? u : null, o("WAWebHatchJsonReaders").readStringOrEmpty(l, "icon_url")), {
            secureMedia: n
        });
    }
    function g(e, t) {
        const n = e != null ? y(e, t) : null;
        if (n != null) {
            return {
                shopifyCheckout: n
            };
        }
        return {};
    }
    function h(e, t) {
        const n = e != null ? k(e, t) : null;
        if (n != null) {
            return {
                browserCheckout: n
            };
        }
        return {};
    }
    function y(e, t) {
        const r = o("WAWebHatchJsonReaders").readObject(e, "shopify_checkout_payload");
        if (r == null) {
            return null;
        }
        const a = o("WAWebHatchJsonReaders").readField(r, "merchant");
        const i = o("WAWebHatchJsonReaders").readField(r, "delivery");
        const l = o("WAWebHatchJsonReaders").readField(r, "contact");
        return {
            merchantName: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "name"),
            merchantUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "url"),
            merchantIconUrl: E(o("WAWebHatchJsonReaders").readStringOrEmpty(a, "icon_url"), t),
            items: C(o("WAWebHatchJsonReaders").readArray(r, "items")),
            deliveryLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(i, "label"),
            estimatedDelivery: o("WAWebHatchJsonReaders").readStringOrEmpty(i, "estimated_delivery"),
            recipientName: S(o("WAWebHatchJsonReaders").readField(r, "shipping_address")),
            shippingAddress: R(o("WAWebHatchJsonReaders").readField(r, "shipping_address")),
            contactEmail: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "email"),
            contactPhoneNumber: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "phone_number"),
            paymentMethodLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(r, "payment_method_label"),
            cardBrand: o("WAWebHatchJsonReaders").readStringOrEmpty(r, "card_brand"),
            cardLast4: o("WAWebHatchJsonReaders").readStringOrEmpty(r, "card_last4"),
            amount: o("WAWebHatchJsonReaders").readStringOrEmpty(r, "amount"),
            currency: o("WAWebHatchJsonReaders").readStringOrEmpty(r, "currency"),
            totals: b(o("WAWebHatchJsonReaders").readArray(r, "totals")),
            cardExpiresInMs: o("WAWebHatchJsonReaders").readNumber(r, "card_expires_in_ms") ?? 0,
            paymentId: I(r),
            paymentOptions: T(o("WAWebHatchJsonReaders").readArray(r, "payment_options")),
            legalLinks: v(o("WAWebHatchJsonReaders").readArray(r, "legal_links"))
        };
    }
    function C(e) {
        if (e == null) {
            return [];
        }
        const t = [];
        for (const n of e){
            const r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "name");
            if (!o("WAWebHatchJsonReaders").isBlankText(r)) {
                t.push({
                    name: r,
                    imageUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(n, "image_url"),
                    quantity: o("WAWebHatchJsonReaders").readTextOrNumber(n, "quantity"),
                    unitAmount: o("WAWebHatchJsonReaders").readStringOrEmpty(n, "unit_amount")
                });
            }
        }
        return t;
    }
    function b(e) {
        if (e == null) {
            return [];
        }
        const t = [];
        for (const n of e){
            const r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "display_text");
            const a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "amount");
            if (!(o("WAWebHatchJsonReaders").isBlankText(r) || o("WAWebHatchJsonReaders").isBlankText(a))) {
                t.push({
                    displayText: r,
                    amount: a,
                    currency: o("WAWebHatchJsonReaders").readStringOrEmpty(n, "currency"),
                    type: o("WAWebHatchJsonReaders").readStringOrEmpty(n, "type").trim().toLowerCase()
                });
            }
        }
        return t;
    }
    function v(e) {
        if (e == null) {
            return [];
        }
        const t = [];
        for (const n of e){
            const a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "label");
            const i = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "url");
            if (!o("WAWebHatchJsonReaders").isBlankText(a) && r("WAWebURLUtils").isHttps(i) === true) {
                t.push({
                    label: a,
                    url: i
                });
            }
        }
        return t;
    }
    function S(e) {
        return L([
            o("WAWebHatchJsonReaders").readStringOrEmpty(e, "first_name"),
            o("WAWebHatchJsonReaders").readStringOrEmpty(e, "last_name")
        ], " ");
    }
    function R(e) {
        let t;
        const n = L([
            (t = o("WAWebHatchJsonReaders")).readStringOrEmpty(e, "city"),
            t.readStringOrEmpty(e, "state"),
            t.readStringOrEmpty(e, "postal_code")
        ], " ");
        return L([
            t.readStringOrEmpty(e, "street1"),
            t.readStringOrEmpty(e, "street2"),
            n,
            t.readStringOrEmpty(e, "country")
        ], ", ");
    }
    function L(e, t) {
        return e.map((e)=>e.trim()).filter((e)=>e !== "").join(t);
    }
    function E(e, t) {
        if (o("WAWebHatchJsonReaders").isBlankText(e)) {
            return t;
        }
        return e;
    }
    function k(e, t) {
        const r = t === "browser_checkout" ? "browser_checkout_payload" : t === "stripe_link_checkout" ? "stripe_link_checkout_payload" : null;
        if (r == null) {
            return null;
        }
        const a = o("WAWebHatchJsonReaders").readObject(e, r);
        if (a == null) {
            return null;
        }
        const i = o("WAWebHatchJsonReaders").readField(a, "tab");
        return {
            merchantUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "merchant_url"),
            paymentMethodLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "payment_method_label"),
            cardBrand: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "card_brand"),
            cardLast4: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "card_last4"),
            amount: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "amount"),
            currency: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "currency"),
            cardExpiresInMs: o("WAWebHatchJsonReaders").readNumber(a, "card_expires_in_ms") ?? 0,
            networkTokenEligible: o("WAWebHatchJsonReaders").readBool(a, "network_token_eligible"),
            tabTitle: o("WAWebHatchJsonReaders").readStringOrEmpty(i, "title"),
            tabDomain: o("WAWebHatchJsonReaders").readStringOrEmpty(i, "domain"),
            screenshot: D(o("WAWebHatchJsonReaders").readField(a, "screenshot")),
            paymentId: I(a),
            paymentOptions: T(o("WAWebHatchJsonReaders").readArray(a, "payment_options"))
        };
    }
    function I(e) {
        const t = o("WAWebHatchJsonReaders").readStringOrEmpty(o("WAWebHatchJsonReaders").readField(e, "payment_selection"), "payment_id").trim();
        if (t !== "") {
            return t;
        }
        return o("WAWebHatchJsonReaders").readStringOrEmpty(e, "payment_id").trim();
    }
    function T(e) {
        if (e == null) {
            return [];
        }
        const t = [];
        for (const n of e){
            const r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "payment_method").trim();
            const a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "payment_id").trim();
            if (!(r === "" || a === "")) {
                t.push({
                    paymentMethod: r,
                    paymentId: a,
                    paymentMethodLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(n, "payment_method_label").trim(),
                    cardBrand: o("WAWebHatchJsonReaders").readStringOrEmpty(n, "card_brand").trim(),
                    cardLast4: o("WAWebHatchJsonReaders").readStringOrEmpty(n, "card_last4").trim()
                });
            }
        }
        return t;
    }
    function D(e) {
        const r = o("WAWebHatchJsonReaders").readStringOrEmpty(e, "url");
        if (o("WAWebHatchJsonReaders").isBlankText(r)) {
            return null;
        }
        const a = o("WAWebHatchJsonReaders").readNumber(e, "width") ?? 0;
        const i = o("WAWebHatchJsonReaders").readNumber(e, "height") ?? 0;
        const l = a > 0 && i > 0;
        return {
            url: r,
            width: l ? a : c,
            height: l ? i : d
        };
    }
    function x(e) {
        if (e == null) {
            return [];
        }
        const t = [];
        for (const n of e){
            const r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "kind");
            const a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "label_text");
            if (!(o("WAWebHatchJsonReaders").isBlankText(r) || o("WAWebHatchJsonReaders").isBlankText(a))) {
                t.push({
                    kind: r,
                    labelText: a,
                    alwaysScope: o("WAWebHatchJsonReaders").readStringOrEmpty(o("WAWebHatchJsonReaders").readField(n, "label"), "scope")
                });
            }
        }
        return t;
    }
    function $(e) {
        if (e == null) {
            return [];
        }
        const t = [];
        for (const n of e){
            const r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "label");
            const a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "value");
            if (!o("WAWebHatchJsonReaders").isBlankText(r) && !o("WAWebHatchJsonReaders").isBlankText(a)) {
                t.push({
                    label: r,
                    value: a
                });
            }
        }
        return t;
    }
    function P(e) {
        switch(e){
            case "connector":
                return "connector";
            case "network":
                return "network";
            case "device":
                return "device";
            case "browser_action":
                return "browser_action";
            case "browser_checkout":
                return "browser_checkout";
            case "stripe_link_checkout":
                return "stripe_link_checkout";
            case "shopify_checkout":
                return "shopify_checkout";
            case "outgoing_media":
                return "outgoing_media";
            default:
                return "unknown";
        }
    }
    l.decodeHatchApprovalRecordEvent = p;
}, 98);