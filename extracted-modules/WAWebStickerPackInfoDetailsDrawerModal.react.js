__d("WAWebStickerPackInfoDetailsDrawerModal.react", [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebForwardMessageFlowLoadable",
    "WAWebL10nFilesize",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebStickerPackDrawerButton.react",
    "WAWebStickerPanelContentStickerItem.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        title: {
            flexGrow: "x1c4vz4f",
            $$css: true
        },
        titleContainer: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            $$css: true
        },
        marginBottom8: {
            marginBottom: "xefnzgg",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(38);
        const { msg, onClose, onStickerClick, ref, stickers } = e;
        let m;
        if (t[0] !== msg) {
            m = function() {
                const Component = o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable;
                o("WAWebModalManager").ModalManager.open(<Component msgs={[
                    o("WAWebStateUtils").unproxy(msg.unsafe())
                ]} onClose={o("WAWebModalManager").closeModalManager}/>, {
                    transition: "modal-flow"
                });
            };
            t[0] = msg;
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = m;
        let _;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                surface: "unknown",
                viewName: "sticker-pack-info"
            };
            t[2] = _;
        } else {
            _ = t[2];
        }
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Sticker pack info");
            t[3] = f;
        } else {
            f = t[3];
        }
        let g;
        if (t[4] !== onClose) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            g = <Component title={f} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL} onCancel={onClose} focusBackOrCancel/>;
            t[4] = onClose;
            t[5] = g;
        } else {
            g = t[5];
        }
        let h;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                c.titleContainer,
                c.marginBottom8
            ];
            t[6] = h;
        } else {
            h = t[6];
        }
        let y;
        if (t[7] !== msg.filename) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            y = <Component xstyle={h}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: c.title,
                text: msg.filename,
                ellipsify: true,
                titlify: true
            })}</Component>;
            t[7] = msg.filename;
            t[8] = y;
        } else {
            y = t[8];
        }
        let C;
        if (t[9] !== msg.description) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            C = msg.description != null && <Component marginBottom={16}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: msg.description
            })}</Component>;
            t[9] = msg.description;
            t[10] = C;
        } else {
            C = t[10];
        }
        let b;
        if (t[11] !== msg.stickerPackPublisher || t[12] !== msg.stickerPackSize) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            b = msg.stickerPackPublisher != null && <Component marginBottom={16}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: s._("Created by {name}", [
                    s._param("name", msg.stickerPackPublisher)
                ])
            })} ∙ <span dir="ltr">{o("WAWebL10nFilesize").getL10nFilesize(msg.stickerPackSize)}</span></Component>;
            t[11] = msg.stickerPackPublisher;
            t[12] = msg.stickerPackSize;
            t[13] = b;
        } else {
            b = t[13];
        }
        let v;
        if (t[14] !== msg.description) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            v = msg.description != null && <Component marginBottom={16}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: msg.description
            })}</Component>;
            t[14] = msg.description;
            t[15] = v;
        } else {
            v = t[15];
        }
        let S;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                className: "xrvj5dj x1xfd4i4 x40hh3e xi32cqo x1qughib xh8yej3 x5yr21d"
            };
            t[16] = S;
        } else {
            S = t[16];
        }
        let R;
        if (t[17] !== onStickerClick || t[18] !== stickers) {
            let L;
            if (t[20] !== onStickerClick) {
                L = function(t) {
                    const Component = r("WAWebStickerPanelContentStickerItem.react");
                    return <Component key={t.id} sticker={t} theme="stickerStore" dontShowViewPack onClick={onStickerClick} onEnter={onStickerClick}/>;
                };
                t[20] = onStickerClick;
                t[21] = L;
            } else {
                L = t[21];
            }
            R = stickers.map(L);
            t[17] = onStickerClick;
            t[18] = stickers;
            t[19] = R;
        } else {
            R = t[19];
        }
        let E;
        if (t[22] !== R) {
            E = <div {...babelHelpers.extends({}, S, {
                children: R
            })}/>;
            t[22] = R;
            t[23] = E;
        } else {
            E = t[23];
        }
        let k;
        if (t[24] !== E || t[25] !== y || t[26] !== C || t[27] !== b || t[28] !== v) {
            const Component = r("WAWebDrawerSection.react");
            const Component_1 = r("WAWebDrawerBody.react");
            k = <Component_1><Component animation={false} theme="padding-no-margin">{y}{C}{b}{v}{E}</Component></Component_1>;
            t[24] = E;
            t[25] = y;
            t[26] = C;
            t[27] = b;
            t[28] = v;
            t[29] = k;
        } else {
            k = t[29];
        }
        let I;
        if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "x1280gxy x1ey2m1c x78zum5 xl56j7k x7wzq59 xh8yej3 x16ovd2e x12xbjc7"
            };
            t[30] = I;
        } else {
            I = t[30];
        }
        let T;
        if (t[31] !== p) {
            T = <div {...babelHelpers.extends({}, I, {
                children: u.jsx(r("WAWebStickerPackDrawerButton.react"), {
                    handleClick: p
                })
            })}/>;
            t[31] = p;
            t[32] = T;
        } else {
            T = t[32];
        }
        let D;
        if (t[33] !== ref || t[34] !== k || t[35] !== T || t[36] !== g) {
            const Component = r("WAWebDrawer.react");
            D = <Component key="sticker-pack-details-modal" theme="sticker-store" ref={ref} tsNavigationData={_}>{g}{k}{T}</Component>;
            t[33] = ref;
            t[34] = k;
            t[35] = T;
            t[36] = g;
            t[37] = D;
        } else {
            D = t[37];
        }
        return D;
    }
    l.StickerPackInfoDetailsDrawerModal = d;
}, 226);