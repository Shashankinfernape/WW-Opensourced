__d("WAWebMessageAnimatedEmoji.react", [
    "WAWebLottieWrapper.react",
    "WAWebMessageStickerLikeBubbleContainer.react",
    "WDSPaddings.stylex",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        marginBottom14: {
            marginBottom: "x1u7kmwd",
            $$css: true
        },
        marginInlineStart15: {
            marginInlineStart: "xx6jrq6",
            $$css: true
        },
        marginInlineEnd18: {
            marginInlineEnd: "x14iifvp",
            $$css: true
        }
    };
    const c = {
        bubble: {
            zIndex: "x157c1n",
            $$css: true
        },
        placeholderContainer: {
            position: "x10l6tqk",
            width: "x193ckjc",
            height: "x1p6ewto",
            $$css: true
        }
    };
    const d = {
        svgContainer: {
            width: "x115h58n",
            height: "xa9868e",
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            zIndex: "xupqr0c",
            $$css: true
        },
        wrapper: {
            position: "x1n2onr6",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            $$css: true
        },
        lottieAnimatedEmojiContainer: {
            width: "x193ckjc",
            height: "x1p6ewto",
            $$css: true
        }
    };
    function m(e) {
        const { asset, msgKey } = e;
        const msgContent = s.jsx(r("WAWebLottieWrapper.react"), {
            data: asset,
            lottieWrapperXStyle: [
                o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
                u.marginBottom14,
                u.marginInlineStart15,
                u.marginInlineEnd18,
                d.lottieAnimatedEmojiContainer
            ],
            lottieSVGContainerXStyle: d.svgContainer,
            lottieSVGContainerWrapperXStyle: d.wrapper,
            placeholderContainerXStyle: c.placeholderContainer,
            maxLoopCount: 1
        });
        const Component = r("WAWebMessageStickerLikeBubbleContainer.react");
        return <Component displayAuthor={e.displayAuthor} msgKey={msgKey} quotedMsg={e.quotedMsg} position={e.position} displayType={e.displayType} onDetailsPaneClosed={e.onDetailsPaneClosed} msgContent={msgContent} ref={e.stickerLikeBubbleContainerRef} bubbleStyle={c.bubble}/>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);