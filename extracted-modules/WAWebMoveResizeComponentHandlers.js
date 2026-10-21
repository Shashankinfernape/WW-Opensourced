__d("WAWebMoveResizeComponentHandlers", [
    "WADeepEquals",
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeLogic",
    "WAWebMoveResizeValidation"
], function(t, n, r, o, a, i, l) {
    function e({ aspectRatio, clientX, clientY, extraBottomContentHeight, extraTopContentHeight, independentResize, margin, minHeight, minWidth, moveStartPositionStyle, resizeDirection, resizeStartHeight, resizeStartMousePosition, resizeStartPiPStyle, width }) {
        const h = o("WAWebMoveResizeLogic").calculateResizeDeltas(resizeDirection, resizeStartMousePosition, clientX, clientY, aspectRatio, independentResize);
        let h_deltaBottom = h.deltaBottom;
        let h_deltaHeight = h.deltaHeight;
        let h_deltaLeft = h.deltaLeft;
        let h_deltaWidth = h.deltaWidth;
        if (independentResize) {
            const minHeight_1 = minHeight ?? minWidth / aspectRatio;
            const R = o("WAWebMoveResizeLogic").calculateIndependentResize({
                deltaBottom: h_deltaBottom,
                deltaHeight: h_deltaHeight,
                deltaLeft: h_deltaLeft,
                deltaWidth: h_deltaWidth,
                extraBottomContentHeight,
                extraTopContentHeight,
                margin,
                minHeight: minHeight_1,
                minWidth,
                resizeStartHeight,
                resizeStartPiPStyle
            });
            return {
                resizedWidth: R.resizedWidth,
                resizedHeight: R.resizedHeight,
                resizedLeft: R.resizedLeft,
                resizedBottom: R.resizedBottom
            };
        }
        let L;
        const E = {
            resizeStartPiPStyle,
            width,
            moveStartPositionStyle,
            margin,
            aspectRatio,
            minWidth,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            extraTopContentHeight,
            extraBottomContentHeight,
            height: L
        };
        const k = o("WAWebMoveResizeValidation").validateMoveResize({
            deltaBottom: h_deltaBottom,
            deltaLeft: h_deltaLeft,
            deltaWidth: h_deltaWidth,
            params: E,
            type: "RESIZE"
        });
        let I = 0;
        let T = 0;
        let D = 0;
        let x = 0;
        if (k.deltaWidth === 0 && k.deltaLeft === 0 && k.deltaBottom === 0) {
            if (h_deltaWidth < 0) {
                const $ = o("WAWebMoveResizeLogic").adjustDeltasForMinWidth({
                    aspectRatio,
                    minWidth,
                    resizeDirection,
                    resizeStartPiPStyleWidth: resizeStartPiPStyle.width
                });
                h_deltaWidth = $.deltaWidth;
                h_deltaHeight = $.deltaHeight;
                h_deltaLeft = $.deltaLeft;
                h_deltaBottom = $.deltaBottom;
            } else if (h_deltaWidth > 0) {
                const P = o("WAWebMoveResizeLogic").adjustDeltasForMaxBounds({
                    aspectRatio,
                    extraBottomContentHeight,
                    extraTopContentHeight,
                    margin,
                    resizeDirection,
                    resizeStartPiPStyle
                });
                h_deltaWidth = P.deltaWidth;
                h_deltaHeight = P.deltaHeight;
                h_deltaLeft = P.deltaLeft;
                h_deltaBottom = P.deltaBottom;
            }
            I = resizeStartPiPStyle.width + h_deltaWidth;
            T = resizeStartPiPStyle.left + h_deltaLeft;
            D = resizeStartPiPStyle.bottom + h_deltaBottom;
            x = I / aspectRatio;
        } else {
            I = resizeStartPiPStyle.width + k.deltaWidth;
            T = resizeStartPiPStyle.left + k.deltaLeft;
            D = resizeStartPiPStyle.bottom + k.deltaBottom;
            x = I / aspectRatio;
        }
        return {
            resizedWidth: I,
            resizedHeight: x,
            resizedLeft: T,
            resizedBottom: D
        };
    }
    function s({ aspectRatio, clientX, clientY, extraBottomContentHeight, extraTopContentHeight, height, independentResize, margin, minWidth, moveStartMousePosition, moveStartPositionStyle, resizeStartPiPStyle, width }) {
        const f = clientX - moveStartMousePosition.x;
        const g = moveStartMousePosition.y - clientY;
        const h = {
            resizeStartPiPStyle,
            width,
            moveStartPositionStyle,
            margin,
            aspectRatio,
            minWidth,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            extraTopContentHeight,
            extraBottomContentHeight,
            height: independentResize ? height : undefined
        };
        const y = o("WAWebMoveResizeValidation").validateMoveResize({
            deltaBottom: g,
            deltaLeft: f,
            deltaWidth: 0,
            params: h,
            type: "MOVE"
        });
        let movedLeft = 0;
        let movedBottom = 0;
        if (f !== 0 && y.deltaLeft === 0) {
            if (f > 0) {
                movedLeft = window.innerWidth - width - margin.x;
            } else {
                movedLeft = margin.x;
            }
        } else {
            movedLeft = moveStartPositionStyle.left + y.deltaLeft;
        }
        if (g !== 0 && y.deltaBottom === 0) {
            if (g > 0) {
                const v = independentResize ? height : width / aspectRatio;
                movedBottom = window.innerHeight - v - margin.y - extraTopContentHeight - 0.1;
            } else {
                movedBottom = margin.y + extraBottomContentHeight;
            }
        } else {
            movedBottom = moveStartPositionStyle.bottom + y.deltaBottom;
        }
        return {
            movedLeft,
            movedBottom
        };
    }
    function u({ aspectRatio, bottom, escapeConversationHeader, extraBottomContentHeight, extraTopContentHeight, getConversationHeaderOffset, height, independentResize, left, margin, minWidth, previousConvPanelRightBorder, previousWindowSize, width }) {
        const g = window.innerHeight - 2 * margin.y - extraTopContentHeight - extraBottomContentHeight;
        const h = window.innerWidth - 2 * margin.x;
        let y = width;
        let C = y / aspectRatio;
        let b = null;
        if (independentResize) {
            b = Math.min(height, g);
        }
        let v = bottom;
        let S = left;
        if (C > g) {
            C = g;
            y = g * aspectRatio;
        }
        if (y > h) {
            C = h / aspectRatio;
            y = h;
        }
        const R = b ?? C;
        if (v + R > g + margin.y + extraBottomContentHeight) {
            v = g + margin.y + extraBottomContentHeight - R;
        }
        if (S + y > h + margin.x) {
            S = h + margin.x - y;
        }
        if (previousWindowSize.width < S + y + margin.x + o("WAWebMoveResizeComponentUtils").BORDER_TOLERANCE) {
            S = h + margin.x - y;
        }
        if (previousWindowSize.height < v + R + margin.y + extraBottomContentHeight + o("WAWebMoveResizeComponentUtils").BORDER_TOLERANCE) {
            v = g + margin.y + extraBottomContentHeight - R;
        }
        const L = previousConvPanelRightBorder != null && previousConvPanelRightBorder > 0 && Math.abs(left + y + margin.x - previousConvPanelRightBorder) < o("WAWebMoveResizeComponentUtils").BORDER_TOLERANCE;
        let E;
        if (escapeConversationHeader) {
            getConversationHeaderOffset(function(e) {
                E = e?.right;
            });
        }
        if (L && E != null && E !== 0) {
            const k = E < window.innerWidth;
            if (k) {
                S = E - margin.x - y;
            }
        }
        const I = {
            bottom: Math.max(margin.y, v),
            height: b,
            left: Math.max(margin.x, S),
            width: Math.max(Math.min(minWidth, h), y),
            previousWindowSize: {
                height: window.innerHeight,
                width: window.innerWidth
            },
            previousConvPanelRightBorder: E
        };
        const T = {
            bottom,
            height: independentResize ? height : null,
            left,
            width,
            previousWindowSize,
            previousConvPanelRightBorder
        };
        const hasChanges = !o("WADeepEquals").deepEqual(I, T);
        return babelHelpers.extends({}, I, {
            hasChanges
        });
    }
    l.processResizeAction = e;
    l.processMoveAction = s;
    l.calculateWindowResizeState = u;
}, 98);