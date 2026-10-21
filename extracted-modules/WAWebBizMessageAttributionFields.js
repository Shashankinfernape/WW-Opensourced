__d("WAWebBizMessageAttributionFields", [
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = /https?:\/\/[^\s<>\"{}|\\^`[\]]+/gi;
    function s(t) {
        if (t == null || t.length === 0) {
            return [];
        }
        return t.match(e) ?? [];
    }
    function u(e) {
        return e.replace(/[A-Z]/g, (e)=>`_${e.toLowerCase()}`);
    }
    const c = {
        chat: "conversation",
        hsm: "template_message",
        interactive: "interactive_message",
        image: "image_message",
        video: "video_message",
        document: "document_message",
        audio: "audio_message",
        ptt: "audio_message",
        ptv: "video_message",
        sticker: "sticker_message",
        location: "location_message",
        vcard: "contact_message",
        multi_vcard: "contact_message",
        list: "list_message",
        list_response: "list_response_message",
        buttons_response: "buttons_message",
        product: "product_message",
        order: "order_message",
        native_flow: "interactive_message",
        poll_creation: "poll_creation_message",
        reaction: "reaction_message"
    };
    const d = [
        "urlButton",
        "quickReplyButton",
        "callButton"
    ];
    function m(e, t, n) {
        let a;
        const i = [];
        const l = [];
        const s = (a = o("WAWebMsgGetters")).getBody(e).length > 0;
        const d = a.getCaption(e) != null;
        const m = a.getFooter(e) != null;
        const p = a.getTitle(e) != null;
        const _ = s || d || m || p || t != null || n != null;
        if (!_) {
            return {
                messagePaths: i,
                submessagePaths: l
            };
        }
        const f = o("WAWebMsgGetters").getType(e);
        const g = c[f] ?? f;
        i.push(g);
        if (t != null) {
            l.push(`${g}.hydrated_buttons`);
            const h = new Set;
            for (const y of t){
                if (y != null && typeof y === "object" && !Array.isArray(y)) {
                    for (const C of Object.keys(y)){
                        const b = y[C];
                        if (b != null && typeof b === "object") {
                            h.add(u(C));
                        }
                    }
                }
            }
            for (const v of h){
                l.push(`${g}.hydrated_buttons.${v}`);
            }
        }
        if (n != null) {
            l.push(`${g}.buttons`);
        }
        return {
            messagePaths: i,
            submessagePaths: l
        };
    }
    function p(e, t) {
        const n = [];
        if (e != null) {
            for (const r of e){
                if (r != null && typeof r === "object" && !Array.isArray(r)) {
                    for (const o of d){
                        if (r[o] != null) {
                            n.push(u(o));
                            break;
                        }
                    }
                }
            }
        }
        if (t != null) {
            for (const a of t){
                if (a != null && typeof a === "object" && !Array.isArray(a)) {
                    const i = a.name;
                    if (typeof i === "string" && i.length > 0) {
                        n.push(i);
                    }
                }
            }
        }
        return n;
    }
    function _(e, t) {
        const n = [];
        if (e != null) {
            for (const r of e){
                if (r != null && typeof r === "object" && !Array.isArray(r)) {
                    const o = r.urlButton;
                    if (o != null && typeof o === "object" && !Array.isArray(o)) {
                        const a = o.url;
                        if (typeof a === "string" && a.length > 0) {
                            n.push(a);
                        }
                    }
                }
            }
        }
        if (t != null) {
            for (const i of t){
                if (i != null && typeof i === "object" && !Array.isArray(i)) {
                    const l = i;
                    if (l.name === "cta_url") {
                        const s = l.buttonParamsJson;
                        if (typeof s === "string") {
                            try {
                                const u = JSON.parse(s);
                                if (u != null && typeof u === "object" && !Array.isArray(u)) {
                                    const c = u.url;
                                    if (typeof c === "string" && c.length > 0) {
                                        n.push(c);
                                    }
                                }
                            } catch (e) {}
                        }
                    }
                }
            }
        }
        return n;
    }
    function f(e) {
        const t = e;
        const n = t.hydratedButtons;
        const r = Array.isArray(n) && n.length > 0 ? n : null;
        const a = t.nativeFlowButtons;
        const i = Array.isArray(a) && a.length > 0 ? a : null;
        const l = m(e, r, i);
        const { messagePaths: u, submessagePaths: c } = l;
        const d = p(r, i);
        const f = [].concat(s(o("WAWebMsgGetters").getBody(e)), s(o("WAWebMsgGetters").getCaption(e)), s(o("WAWebMsgGetters").getFooter(e)), s(o("WAWebMsgGetters").getTitle(e)));
        const g = f.length;
        const h = new Set(f.map((e)=>e.toLowerCase()));
        const y = h.size;
        const C = _(r, i);
        const b = new Set(C.map((e)=>e.toLowerCase()));
        const v = b.size;
        const S = new Set([].concat(Array.from(h), Array.from(b)));
        const R = S.size;
        return {
            messageFieldJsonArray: u.length > 0 ? JSON.stringify(u) : void 0,
            submessageFieldJsonArray: c.length > 0 ? JSON.stringify(c) : void 0,
            buttonValueJsonArray: d.length > 0 ? JSON.stringify(d) : void 0,
            bodyUrlCountInt: g,
            bodyUrlUniqueCountInt: y,
            ctaUrlUniqueCountInt: v,
            urlUniqueCountInt: R
        };
    }
    l.extractBizMessageAttribution = f;
}, 98);