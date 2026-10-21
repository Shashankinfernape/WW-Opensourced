__d("WAWebChatCellContextMenuV2.react", [
    "WAWebBroadcastChatListMenuItems",
    "WAWebChatContextMenu",
    "WAWebChatGetters",
    "WAWebNewsletterContextMenuLoadable",
    "WDSMenu.react",
    "react",
    "react-compiler-runtime",
    "useWDSMenu"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useMemo, useRef, useState } = u;
    function _(e) {
        const t = o("react-compiler-runtime").c(44);
        const { assignChat, cellRef, chat, chatListIndex, hideArchiveOption, multiSelection, onChevronMenuReady, onContextMenuChange, onContextMenuReady, onStartMultiSelect, searchQuery, selectableState } = e;
        const bRef = useRef(null);
        const vRef = useRef(null);
        let S;
        let R;
        if (t[0] !== cellRef) {
            S = function() {
                if (cellRef != null) {
                    bRef.current = cellRef.getCellFrameDivRef();
                    vRef.current = cellRef.getContextMenuRef();
                }
            };
            R = [
                cellRef
            ];
            t[0] = cellRef;
            t[1] = S;
            t[2] = R;
        } else {
            S = t[1];
            R = t[2];
        }
        useEffect(S, R);
        let L;
        if (t[3] !== chat) {
            L = o("WAWebChatGetters").getIsNewsletter(chat);
            t[3] = chat;
            t[4] = L;
        } else {
            L = t[4];
        }
        const E = L;
        let k;
        if (t[5] !== chat) {
            k = o("WAWebChatGetters").getIsBroadcast(chat);
            t[5] = chat;
            t[6] = k;
        } else {
            k = t[6];
        }
        const I = k;
        let T;
        e: {
            if (E) {
                T = null;
                break e;
            }
            let D;
            if (t[7] !== assignChat || t[8] !== cellRef || t[9] !== chat || t[10] !== chatListIndex || t[11] !== I || t[12] !== multiSelection || t[13] !== onStartMultiSelect || t[14] !== searchQuery || t[15] !== selectableState) {
                D = I ? o("WAWebBroadcastChatListMenuItems").getBroadcastChatListMenuItems({
                    chat,
                    cellRef,
                    multiSelection,
                    onStartMultiSelect,
                    searchQuery,
                    selectableState
                }) : o("WAWebChatContextMenu").getChatContextMenuItems({
                    chat,
                    assignChat,
                    chatListIndex,
                    multiSelection,
                    onStartMultiSelect,
                    searchQuery,
                    selectableState,
                    cellRef
                });
                t[7] = assignChat;
                t[8] = cellRef;
                t[9] = chat;
                t[10] = chatListIndex;
                t[11] = I;
                t[12] = multiSelection;
                t[13] = onStartMultiSelect;
                t[14] = searchQuery;
                t[15] = selectableState;
                t[16] = D;
            } else {
                D = t[16];
            }
            T = D;
        }
        const x = T;
        const $ = useState(null);
        const P = $[0];
        const N = $[1];
        let M;
        let w;
        if (t[17] !== chat || t[18] !== hideArchiveOption || t[19] !== E) {
            M = function() {
                if (E) {
                    let e = false;
                    o("WAWebNewsletterContextMenuLoadable").loadGetNewsletterContextMenuItems().then((e)=>e(chat, hideArchiveOption === true)).then((t)=>{
                        if (!e) {
                            N(t);
                        }
                    }).catch(()=>{
                        if (!e) {
                            N(null);
                        }
                    });
                    return function() {
                        e = true;
                    };
                }
            };
            w = [
                E,
                chat,
                hideArchiveOption
            ];
            t[17] = chat;
            t[18] = hideArchiveOption;
            t[19] = E;
            t[20] = M;
            t[21] = w;
        } else {
            M = t[20];
            w = t[21];
        }
        useEffect(M, w);
        const A = E ? P : x;
        let F;
        e: {
            if (A == null) {
                F = null;
                break e;
            }
            let O;
            if (t[22] !== A) {
                const Component = r("WDSMenu.react");
                O = <Component>{A}</Component>;
                t[22] = A;
                t[23] = O;
            } else {
                O = t[23];
            }
            F = O;
        }
        const B = F;
        let W;
        if (t[24] !== B) {
            W = {
                targetRef: bRef,
                menu: B,
                contextMenuArea: true,
                enableUIM: false
            };
            t[24] = B;
            t[25] = W;
        } else {
            W = t[25];
        }
        const q = r("useWDSMenu")(W);
        const { isMenuOpen, menuPortal, openMenu } = q;
        let G;
        if (t[26] !== B) {
            G = {
                targetRef: vRef,
                menu: B,
                enableUIM: false
            };
            t[26] = B;
            t[27] = G;
        } else {
            G = t[27];
        }
        const z = r("useWDSMenu")(G);
        const { isMenuOpen: isMenuOpen_1, menuPortal: menuPortal_1, openMenu: openMenu_1 } = z;
        let X;
        let Y;
        if (t[28] !== onContextMenuReady || t[29] !== openMenu) {
            X = function() {
                onContextMenuReady(openMenu);
            };
            Y = [
                openMenu,
                onContextMenuReady
            ];
            t[28] = onContextMenuReady;
            t[29] = openMenu;
            t[30] = X;
            t[31] = Y;
        } else {
            X = t[30];
            Y = t[31];
        }
        useEffect(X, Y);
        let J;
        let Z;
        if (t[32] !== onChevronMenuReady || t[33] !== openMenu_1) {
            J = function() {
                onChevronMenuReady(openMenu_1);
            };
            Z = [
                openMenu_1,
                onChevronMenuReady
            ];
            t[32] = onChevronMenuReady;
            t[33] = openMenu_1;
            t[34] = J;
            t[35] = Z;
        } else {
            J = t[34];
            Z = t[35];
        }
        useEffect(J, Z);
        let ee;
        let te;
        if (t[36] !== isMenuOpen_1 || t[37] !== isMenuOpen || t[38] !== onContextMenuChange) {
            ee = function() {
                onContextMenuChange?.(isMenuOpen || isMenuOpen_1);
            };
            te = [
                isMenuOpen,
                isMenuOpen_1,
                onContextMenuChange
            ];
            t[36] = isMenuOpen_1;
            t[37] = isMenuOpen;
            t[38] = onContextMenuChange;
            t[39] = ee;
            t[40] = te;
        } else {
            ee = t[39];
            te = t[40];
        }
        useEffect(ee, te);
        let ne;
        if (t[41] !== menuPortal_1 || t[42] !== menuPortal) {
            ne = <>{menuPortal}{menuPortal_1}</>;
            t[41] = menuPortal_1;
            t[42] = menuPortal;
            t[43] = ne;
        } else {
            ne = t[43];
        }
        return ne;
    }
    l.default = _;
}, 98);