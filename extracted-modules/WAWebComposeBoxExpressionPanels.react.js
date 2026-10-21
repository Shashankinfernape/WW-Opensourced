__d("WAWebComposeBoxExpressionPanels.react", [
    "WAWebComposeBoxPanelTypes",
    "WAWebComposeBoxPanelsMenu.react",
    "WAWebEmojiPanel.react",
    "WAWebErrorBoundary.react",
    "WAWebGifPanel.react",
    "WAWebPanelsDisplayLocation",
    "WAWebStickerPanel.react",
    "WAWebUimUie.react",
    "react"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useImperativeHandle, useRef, useState } = c;
    function _(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { displayCache, onDisplayCache, onExpressionPanelChange, onFocusRelease, selectedExpressionPanel, theme } = a;
        const gRef = useRef(displayCache?.emojiPanel);
        const hRef = useRef(displayCache?.gifPanel);
        const yRef = useRef(displayCache?.stickerPanel);
        const CRef = useRef(theme === o("WAWebComposeBoxPanelsMenu.react").PanelsTheme.StatusReplyComposeBox);
        const bRef = useRef(null);
        const vRef = useRef(null);
        const SRef = useRef(null);
        const R = useState("");
        const defaultSearchText = R[0];
        const E = R[1];
        const restoreFocus = function(t) {
            switch(selectedExpressionPanel){
                case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
                    if (SRef.current) {
                        SRef.current.restoreFocus();
                    }
                    break;
                case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
                    if (vRef.current) {
                        vRef.current.restoreFocus(t);
                    }
                    break;
                case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
                    if (bRef.current) {
                        bRef.current.restoreFocus(t);
                    }
                    break;
            }
        };
        const I = ()=>{
            onDisplayCache({
                emojiPanel: gRef.current,
                gifPanel: hRef.current,
                stickerPanel: yRef.current
            });
        };
        const T = function() {
            const e = CRef.current ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF;
            onExpressionPanelChange(e);
        };
        const D = function() {
            onFocusRelease();
        };
        const x = function(t) {
            hRef.current = t;
            I();
        };
        const $ = function(t, n) {
            E(t);
        };
        const P = function() {
            onExpressionPanelChange(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER);
        };
        const N = function() {
            onExpressionPanelChange(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
        };
        const requestFocus = function() {
            restoreFocus(false);
        };
        const w = function(t) {
            yRef.current = t;
            I();
        };
        const A = function() {
            onFocusRelease();
        };
        const F = function() {
            const e = CRef.current ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF;
            onExpressionPanelChange(e);
        };
        useImperativeHandle(t_ref, function() {
            return {
                restoreFocus
            };
        });
        let O = null;
        const displayLocation = CRef.current ? o("WAWebPanelsDisplayLocation").DisplayLocation.StatusComposeBox : o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox;
        const Component = r("WAWebStickerPanel.react");
        const Component_1 = r("WAWebEmojiPanel.react");
        const Component_2 = r("WAWebGifPanel.react");
        switch(a.selectedExpressionPanel){
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
                O = <Component ref={SRef} displayCache={yRef.current} displayLocation={displayLocation} onChange={$} defaultSearchText={defaultSearchText} onDisplayCache={w} onFocusPrev={F} onFocusNext={A} onSticker={a.onSticker}/>;
                break;
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
                O = <Component_1 ref={bRef} displayCache={gRef.current} width={a.width} displayLocation={displayLocation} onChange={$} defaultSearchText={defaultSearchText} onEmoji={a.onEmoji} onFocusPrev={D} onFocusNext={T}/>;
                break;
            case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
                O = <Component_2 ref={vRef} displayCache={hRef.current} onChange={$} defaultSearchText={defaultSearchText} onDisplayCache={x} onFocusNext={P} onFocusPrev={N} onGif={a.onGif}/>;
                break;
        }
        const Component_3 = o("WAWebUimUie.react").UIE;
        const Component_4 = o("WAWebErrorBoundary.react").ErrorBoundary;
        return O && <Component_4 name="compose-box-panels"><Component_3 displayName="ComposeBoxExpressionPanels" escapable requestDismiss={a.requestDismiss} requestFocus={requestFocus}>{O}</Component_3></Component_4>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 98);