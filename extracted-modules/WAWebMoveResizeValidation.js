__d("WAWebMoveResizeValidation", [], function(t, n, r, o, a, i) {
    function e({ deltaBottom, deltaLeft, deltaWidth, params, type }) {
        let s = deltaWidth;
        let u = deltaLeft;
        let c = deltaBottom;
        let d = 0;
        let m = 0;
        let p = 0;
        switch(type){
            case "RESIZE":
                d = params.resizeStartPiPStyle.width;
                m = params.resizeStartPiPStyle.left;
                p = params.resizeStartPiPStyle.bottom;
                break;
            case "MOVE":
                d = params.width;
                m = params.moveStartPositionStyle.left;
                p = params.moveStartPositionStyle.bottom;
                break;
            default:
        }
        const { windowHeight, windowWidth } = params;
        const g = d + s;
        const h = params.height ?? g / params.aspectRatio;
        const y = p + c;
        const C = l(y);
        const b = m + u;
        const v = l(b);
        const S = l(params.margin.y + params.extraBottomContentHeight);
        const R = l(windowHeight - h - params.margin.y - params.extraTopContentHeight);
        const L = l(params.margin.x);
        const E = l(windowWidth - g - params.margin.x);
        if (S > C || C > R) {
            switch(type){
                case "RESIZE":
                    c = 0;
                    u = 0;
                    s = 0;
                    break;
                case "MOVE":
                    c = 0;
                    break;
                default:
            }
        }
        if (L > v || v > E) {
            switch(type){
                case "RESIZE":
                    c = 0;
                    u = 0;
                    s = 0;
                    break;
                case "MOVE":
                    u = 0;
                    break;
                default:
            }
        }
        if (s && y + h + params.margin.y > windowHeight) {
            switch(type){
                case "RESIZE":
                    c = 0;
                    u = 0;
                    s = 0;
                    break;
                default:
            }
        }
        if (s && b + g + params.margin.x > windowWidth) {
            switch(type){
                case "RESIZE":
                    c = 0;
                    u = 0;
                    s = 0;
                    break;
                default:
            }
        }
        if (g < params.minWidth || h + 2 * params.margin.y > windowHeight || g + 2 * params.margin.x > windowWidth) {
            c = 0;
            u = 0;
            s = 0;
        }
        return {
            deltaWidth: s,
            deltaBottom: c,
            deltaLeft: u
        };
    }
    function l(e) {
        return Math.round(e * 100) / 100;
    }
    i.validateMoveResize = e;
}, 66);