__d("WAWebBizShowCartAction", [
    "WAWebCartFlowLoadable",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebOpenChatFlow.react",
    "WAWebWidFactory",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(sellerJid, t, newDrawerContext) {
        if (t && t.id.toString() === sellerJid) {
            return s.jsx(o("WAWebCartFlowLoadable").CartFlowLoadable, {
                sellerJid,
                chat: t
            });
        }
        const onSuccess = function({ chat }) {
            self.setTimeout(function() {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(o("WAWebCartFlowLoadable").CartFlowLoadable, {
                    sellerJid,
                    chat
                }), {
                    transition: "slide-left",
                    newDrawerContext
                });
            }, 100);
        };
        const Component = o("WAWebOpenChatFlow.react").OpenChatFlow;
        o("WAWebModalManager").ModalManager.open(<Component target={{
            wid: o("WAWebWidFactory").createWid(sellerJid)
        }} onSuccess={onSuccess} msgText={null}/>, {
            transition: "modal-flow"
        });
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    l.default = u;
}, 98);