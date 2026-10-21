__d("WAWebMessageAlbumWrapperMenuContent.react", [
    "fbt",
    "WAWebEnvironment",
    "WAWebMsgActionCanDownloadMsg",
    "WAWebMsgActionCapability",
    "WDSIconIcDelete.react",
    "WDSIconIcDownload.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcGrade.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "cr:7565",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    function d(msgs) {
        const t = o("react-compiler-runtime").c(17);
        let a;
        if (t[0] !== msgs) {
            a = msgs.every(g);
            t[0] = msgs;
            t[1] = a;
        } else {
            a = t[1];
        }
        const canAllDownload = a;
        let l;
        if (t[2] !== msgs) {
            l = msgs.every(f);
            t[2] = msgs;
            t[3] = l;
        } else {
            l = t[3];
        }
        const canAllDelete = l;
        let u;
        if (t[4] !== msgs) {
            u = msgs.every(_);
            t[4] = msgs;
            t[5] = u;
        } else {
            u = t[5];
        }
        const canForwardAll = u;
        let d;
        if (t[6] !== msgs) {
            d = msgs.every(p);
            t[6] = msgs;
            t[7] = d;
        } else {
            d = t[7];
        }
        const canAllStar = d;
        let y;
        if (t[8] !== msgs) {
            y = msgs.every(m);
            t[8] = msgs;
            t[9] = y;
        } else {
            y = t[9];
        }
        const allMessagesHasStar = y;
        let b;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            b = r("WAWebEnvironment").isWindows && n("cr:7565") != null && n("cr:7565").supportsBulkMediaSaving();
            t[10] = b;
        } else {
            b = t[10];
        }
        const canSaveAllFilesDirectly = b;
        let S;
        if (t[11] !== allMessagesHasStar || t[12] !== canAllDelete || t[13] !== canAllDownload || t[14] !== canAllStar || t[15] !== canForwardAll) {
            S = {
                canAllDownload,
                canAllDelete,
                canForwardAll,
                canAllStar,
                allMessagesHasStar,
                canSaveAllFilesDirectly
            };
            t[11] = allMessagesHasStar;
            t[12] = canAllDelete;
            t[13] = canAllDownload;
            t[14] = canAllStar;
            t[15] = canForwardAll;
            t[16] = S;
        } else {
            S = t[16];
        }
        return S;
    }
    function m(e) {
        return e.star;
    }
    function p(e) {
        return o("WAWebMsgActionCapability").canStarMsg(e.unsafe());
    }
    function _(e) {
        return o("WAWebMsgActionCapability").canForwardMsg(e.unsafe());
    }
    function f(e) {
        return o("WAWebMsgActionCapability").canDeleteMsg(e.unsafe());
    }
    function g(e) {
        return o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(e.unsafe(), true);
    }
    function h(e) {
        const t = o("react-compiler-runtime").c(31);
        const { handleDownload, handleOpenDeleteFlow, handleOpenForwardFlow, handleSaveAll, handleStar, handleUnstar, msgs } = e;
        const _ = d(msgs);
        let f;
        if (t[0] !== handleDownload || t[1] !== handleOpenDeleteFlow || t[2] !== handleOpenForwardFlow || t[3] !== handleSaveAll || t[4] !== handleStar || t[5] !== handleUnstar || t[6] !== _.allMessagesHasStar || t[7] !== _.canAllDelete || t[8] !== _.canAllDownload || t[9] !== _.canAllStar || t[10] !== _.canForwardAll || t[11] !== _.canSaveAllFilesDirectly) {
            const g = [];
            if (_.canAllDownload && !_.canSaveAllFilesDirectly) {
                let h;
                if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
                    h = s._("Download all");
                    t[13] = h;
                } else {
                    h = t[13];
                }
                let y;
                if (t[14] !== handleDownload) {
                    const Component = r("WDSMenuItem.react");
                    y = <Component key="download" Icon={r("WDSIconIcDownload.react")} title={h} onPress={handleDownload} testid="mi-msg-download"/>;
                    t[14] = handleDownload;
                    t[15] = y;
                } else {
                    y = t[15];
                }
                g.push(y);
            }
            if (_.canForwardAll) {
                let C;
                if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
                    C = s._("Forward all");
                    t[16] = C;
                } else {
                    C = t[16];
                }
                let b;
                if (t[17] !== handleOpenForwardFlow) {
                    const Component = r("WDSMenuItem.react");
                    b = <Component key="forward" Icon={r("WDSIconIcFastForward.react")} iconDirectional title={C} onPress={function() {
                        handleOpenForwardFlow(true);
                    }} testid="mi-msg-forward"/>;
                    t[17] = handleOpenForwardFlow;
                    t[18] = b;
                } else {
                    b = t[18];
                }
                g.push(b);
            }
            if (_.canAllStar) {
                if (_.allMessagesHasStar) {
                    let v;
                    if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
                        v = s._("Unstar all");
                        t[19] = v;
                    } else {
                        v = t[19];
                    }
                    let S;
                    if (t[20] !== handleUnstar) {
                        const Component = r("WDSMenuItem.react");
                        S = <Component key="star" Icon={r("WDSIconWdsIcGradeSlash.react")} title={v} onPress={handleUnstar} testid="mi-msg-unstar"/>;
                        t[20] = handleUnstar;
                        t[21] = S;
                    } else {
                        S = t[21];
                    }
                    g.push(S);
                } else {
                    let R;
                    if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
                        R = s._("Star all");
                        t[22] = R;
                    } else {
                        R = t[22];
                    }
                    let L;
                    if (t[23] !== handleStar) {
                        const Component = r("WDSMenuItem.react");
                        L = <Component key="star" Icon={r("WDSIconIcGrade.react")} title={R} onPress={handleStar} testid="mi-msg-star"/>;
                        t[23] = handleStar;
                        t[24] = L;
                    } else {
                        L = t[24];
                    }
                    g.push(L);
                }
            }
            if (_.canAllDownload && _.canSaveAllFilesDirectly) {
                let E;
                if (t[25] === Symbol.for("react.memo_cache_sentinel")) {
                    E = s._("Save all");
                    t[25] = E;
                } else {
                    E = t[25];
                }
                let k;
                if (t[26] !== handleSaveAll) {
                    const Component = r("WDSMenuItem.react");
                    k = <Component key="save" Icon={r("WDSIconIcDownload.react")} title={E} onPress={handleSaveAll} testid="mi-msg-save"/>;
                    t[26] = handleSaveAll;
                    t[27] = k;
                } else {
                    k = t[27];
                }
                g.push(k);
            }
            if (_.canAllDelete) {
                let I;
                if (t[28] === Symbol.for("react.memo_cache_sentinel")) {
                    I = s._("Delete all");
                    t[28] = I;
                } else {
                    I = t[28];
                }
                let T;
                if (t[29] !== handleOpenDeleteFlow) {
                    const Component = r("WDSMenuItem.react");
                    T = <Component key="delete" Icon={r("WDSIconIcDelete.react")} title={I} onPress={function() {
                        handleOpenDeleteFlow(true);
                    }} testid="mi-msg-delete" destructive/>;
                    t[29] = handleOpenDeleteFlow;
                    t[30] = T;
                } else {
                    T = t[30];
                }
                g.push(T);
            }
            const Component = r("WDSMenu.react");
            f = <Component useMaxWidth={false}>{g}</Component>;
            t[0] = handleDownload;
            t[1] = handleOpenDeleteFlow;
            t[2] = handleOpenForwardFlow;
            t[3] = handleSaveAll;
            t[4] = handleStar;
            t[5] = handleUnstar;
            t[6] = _.allMessagesHasStar;
            t[7] = _.canAllDelete;
            t[8] = _.canAllDownload;
            t[9] = _.canAllStar;
            t[10] = _.canForwardAll;
            t[11] = _.canSaveAllFilesDirectly;
            t[12] = f;
        } else {
            f = t[12];
        }
        return f;
    }
    l.WAWebMessageAlbumWrapperMenuContent = h;
}, 226);