__d("calculateBaseContextualLayerPosition", [
    "Locale"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("Locale").isRTL();
    function s({ align, contextRect, contextualLayerSize, fixed, offsetRect, position, screenRect }) {
        const u = {
            position: fixed ? "fixed" : undefined,
            transform: ""
        };
        let c = 0;
        let d = 0;
        let m = 0;
        let p = 0;
        const _ = (contextRect.bottom + contextRect.top) / 2;
        const f = (contextRect.left + contextRect.right) / 2;
        const g = e ? "start" : "end";
        const h = e ? "end" : "start";
        switch(position){
            case "above":
                d = contextRect.top - offsetRect.top;
                p = "-100%";
                break;
            case "below":
                d = contextRect.bottom - offsetRect.top;
                break;
            case h:
                c = contextRect.left - offsetRect.left;
                m = "-100%";
                break;
            case g:
                c = contextRect.right - offsetRect.left;
                break;
        }
        if (position === "start" || position === "end") {
            switch(align){
                case "start":
                    d = contextRect.top - offsetRect.top;
                    break;
                case "middle":
                    d = _ - offsetRect.top;
                    p = "-50%";
                    break;
                case "end":
                    d = contextRect.bottom - offsetRect.top;
                    p = "-100%";
                    break;
                case "stretch":
                    d = contextRect.top - offsetRect.top;
                    u.height = `${contextRect.bottom - contextRect.top}px`;
                    break;
            }
        } else if (position === "above" || position === "below") {
            switch(align){
                case h:
                    c = contextRect.left - offsetRect.left;
                    break;
                case "middle":
                    c = f - offsetRect.left;
                    m = "-50%";
                    break;
                case g:
                    c = contextRect.right - offsetRect.left;
                    m = "-100%";
                    break;
                case "stretch":
                    c = contextRect.left - offsetRect.left;
                    u.width = `${contextRect.right - contextRect.left}px`;
                    break;
            }
        }
        let adjustment = 0;
        if (contextualLayerSize != null) {
            if (position === "start" || position === "end") {
                let C = null;
                switch(align){
                    case "start":
                        C = contextRect.top;
                        break;
                    case "middle":
                        C = _ - contextualLayerSize.height / 2;
                        break;
                    case "end":
                        C = contextRect.bottom - contextualLayerSize.height;
                        break;
                }
                if (C != null) {
                    if (C < screenRect.top) {
                        adjustment = screenRect.top - C;
                    } else if (C + contextualLayerSize.height > screenRect.bottom) {
                        adjustment = screenRect.bottom - C - contextualLayerSize.height;
                    }
                }
                d += adjustment;
            } else if (position === "above" || position === "below") {
                let b = null;
                switch(align){
                    case h:
                        b = contextRect.left;
                        break;
                    case "middle":
                        b = f - contextualLayerSize.width / 2;
                        break;
                    case g:
                        b = contextRect.right - contextualLayerSize.width;
                        break;
                }
                if (b != null) {
                    if (b < screenRect.left) {
                        adjustment = screenRect.left - b;
                    } else if (b + contextualLayerSize.width > screenRect.right) {
                        adjustment = screenRect.right - b - contextualLayerSize.width;
                    }
                }
                c += adjustment;
            }
        }
        let v = "";
        if (c !== 0 || d !== 0) {
            v += `translate(${Math.round(c)}px, ${Math.round(d)}px) `;
        }
        if (m !== 0 || p !== 0) {
            v += `translate(${m}, ${p}) `;
        }
        u.transform = v;
        return {
            adjustment,
            style: u
        };
    }
    l.default = s;
}, 98);