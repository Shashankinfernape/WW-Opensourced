__d("WAWebStickerPackDetailsFlow.react", [
    "$InternalEnum",
    "WAWebDrawerManager",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebStickerPackInfoDetailsDrawerModal.react",
    "WAWebStickerPackModelMd",
    "WAWebStickersDetailsDrawerModal.react",
    "WAWebUiIdleEventBus",
    "WAWebWamEnumStickerSendOriginType",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = n("$InternalEnum").Mirrored([
        "StickerPackInfoDetails",
        "StickerDetails"
    ]);
    function d(e) {
        const t = o("react-compiler-runtime").c(19);
        const { msg, stickers } = e;
        const i = e_useState(null);
        const l = i[0];
        const d = i[1];
        const m = o("useWAWebFlow").useFlow(c.StickerPackInfoDetails);
        const P = m[0];
        const _ = m[1];
        let f = null;
        let g;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = function(t) {
                return new (o("WAWebStickerPackModelMd")).StickerPackModel({
                    id: t.id,
                    name: t.filename,
                    publisher: t.stickerPackPublisher,
                    description: t.description,
                    fileSize: t.size
                });
            };
            t[0] = g;
        } else {
            g = t[0];
        }
        const h = g;
        let y;
        if (t[1] !== _ || t[2] !== l) {
            y = function() {
                _.pop();
                if (l) {
                    o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
                        r("WAWebSendStickerToActiveChatStickersAction")(l, o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE.STICKER_STORE);
                    });
                }
            };
            t[1] = _;
            t[2] = l;
            t[3] = y;
        } else {
            y = t[3];
        }
        const onSend = y;
        let b;
        if (t[4] !== _) {
            b = function(t) {
                d(t);
                _.push(c.StickerDetails);
            };
            t[4] = _;
            t[5] = b;
        } else {
            b = t[5];
        }
        const onStickerClick = b;
        if (_.step == null) {
            return null;
        }
        e: switch(_.step){
            case c.StickerPackInfoDetails:
                {
                    let S;
                    if (t[6] !== onStickerClick || t[7] !== msg || t[8] !== stickers) {
                        const Component = o("WAWebStickerPackInfoDetailsDrawerModal.react").StickerPackInfoDetailsDrawerModal;
                        S = <Component onClose={o("WAWebDrawerManager").closeDrawerRight} msg={msg} stickers={stickers} onStickerClick={onStickerClick}/>;
                        t[6] = onStickerClick;
                        t[7] = msg;
                        t[8] = stickers;
                        t[9] = S;
                    } else {
                        S = t[9];
                    }
                    f = S;
                    break e;
                }
            case c.StickerDetails:
                {
                    let R;
                    if (t[10] !== _ || t[11] !== onSend || t[12] !== msg || t[13] !== l) {
                        const Component = r("WAWebStickersDetailsDrawerModal.react");
                        R = l != null ? <Component sticker={l} stickerPack={h(msg)} onSend={onSend} onBack={function() {
                            return _.pop();
                        }}/> : null;
                        t[10] = _;
                        t[11] = onSend;
                        t[12] = msg;
                        t[13] = l;
                        t[14] = R;
                    } else {
                        R = t[14];
                    }
                    f = R;
                }
        }
        let L;
        if (t[15] !== P || t[16] !== f || t[17] !== _) {
            L = <P flow={_}>{f}</P>;
            t[15] = P;
            t[16] = f;
            t[17] = _;
            t[18] = L;
        } else {
            L = t[18];
        }
        return L;
    }
    l.default = d;
}, 98);