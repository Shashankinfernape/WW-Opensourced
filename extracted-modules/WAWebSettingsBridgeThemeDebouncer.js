__d("WAWebSettingsBridgeThemeDebouncer", [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeValue",
    "WAWebDebounce",
    "WAWebSettingsSyncEventEmitter",
    "WAWebWidFactory",
    "getErrorSafe",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "inheritsTheme"
    ];
    let s;
    let u;
    let c;
    let d;
    const m = 500;
    const maxWait = 1000;
    const _ = new Map;
    let f = 0;
    function g(e, t) {
        C();
        v(e);
        const n = b(e);
        R(n.buffer, t);
        n.flush();
    }
    function h() {
        for (const e of Array.from(_.values())){
            e.flush.flush();
        }
    }
    let y = false;
    function C() {
        if (!y) {
            y = true;
            self.addEventListener("pagehide", h);
            document.addEventListener("visibilitychange", function() {
                if (document.visibilityState === "hidden") {
                    h();
                }
            });
        }
    }
    function b(e) {
        const t = S(e);
        const n = _.get(t);
        if (n != null) {
            return n;
        }
        const o = {};
        const flush = r("WAWebDebounce")(function() {
            L(e, o, t);
        }, m, {
            leading: false,
            trailing: true,
            maxWait
        });
        const i = {
            buffer: o,
            flush
        };
        _.set(t, i);
        return i;
    }
    function v(e) {
        if (e.kind === "chat") {
            _.get("default")?.flush.flush();
            return;
        }
        for (const [r, o] of Array.from(_.entries())){
            if (r !== "default") {
                o.flush.flush();
            }
        }
    }
    function S(e) {
        if (e.kind === "default") {
            return "default";
        }
        return `chat:${o("WAWebWidFactory").createWid(e.chatJid).toString()}`;
    }
    function R(buffer, t) {
        e: {
            const n = t;
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.field === "chatThemeId" && "normalizedId" in n) {
                const r = n.normalizedId;
                buffer.chatThemeId = {
                    value: r
                };
                break e;
            }
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.field === "colorSchemeId" && "normalizedId" in n) {
                const o = n.normalizedId;
                buffer.colorSchemeId = {
                    value: o
                };
                break e;
            }
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.field === "wallpaperSolid" && "wallpaperId" in n) {
                const wallpaperId = n.wallpaperId;
                buffer.wallpaperRepresentation = {
                    kind: "solid",
                    wallpaperId,
                    arrivalSequence: f++
                };
                break e;
            }
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.field === "wallpaperStock" && "rawValue" in n) {
                const rawValue = n.rawValue;
                buffer.wallpaperRepresentation = {
                    kind: "stock",
                    rawValue,
                    arrivalSequence: f++
                };
                break e;
            }
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.field === "doodle" && "value" in n) {
                const l = n.value;
                buffer.doodle = {
                    value: l,
                    arrivalSequence: f++
                };
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
        }
    }
    function L(e, t, n) {
        _.delete(n);
        try {
            if (e.kind === "default") {
                k(t);
            } else {
                I(e.chatJid, t);
            }
        } catch (error) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[settings-sync] theme sync flush failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("chat-theme-sync-flush-failed");
        }
    }
    function E(e) {
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[settings-sync] theme sync write failed"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("chat-theme-sync-write-fail");
    }
    function k(e) {
        const t = r("WAWebChatPreferenceCollection").getDefault();
        if (P(e)) {
            t.set("chatThemeValue", N({
                buffer: e,
                canInheritTheme: false,
                current: t.chatThemeValue,
                currentWallpaper: null
            }));
        }
        const e_wallpaperRepresentation = e.wallpaperRepresentation;
        if (e_wallpaperRepresentation != null && e_wallpaperRepresentation.kind === "solid") {
            if (e.doodle != null) {
                t.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueWithDoodle(t.wallpaperValue, e.doodle.value));
            }
            r("WAWebSettingsSyncEventEmitter").trigger("applyWallpaper", e_wallpaperRepresentation.wallpaperId);
            return;
        }
        const a = x({
            buffer: e,
            currentWallpaper: t.wallpaperValue,
            inheritOnClear: false
        });
        if (a.write) {
            t.set("wallpaperValue", a.value);
        }
    }
    function I(chatJid, t) {
        const n = W(chatJid);
        if (n != null) {
            const o = M(n, t);
            if (o.write) {
                const a = o.value;
                n.setChatThemeValue(a.chatThemeId == null && a.colorSchemeId == null ? null : a).catch(E);
            }
            const wallpaperRepresentation = t.wallpaperRepresentation;
            if (wallpaperRepresentation != null && wallpaperRepresentation.kind === "solid") {
                T({
                    chat: n,
                    chatJid,
                    doodle: t.doodle,
                    wallpaperRepresentation
                });
                return;
            }
            const inheritedWallpaper = r("WAWebChatPreferenceCollection").getDefault().wallpaperValue;
            const s = x({
                buffer: t,
                currentWallpaper: D(n),
                inheritedWallpaper,
                inheritOnClear: true
            });
            if (s.write) {
                n.setWallpaperValue(s.value).catch(E);
            }
        }
    }
    function T({ chat, chatJid, doodle, wallpaperRepresentation }) {
        const l = doodle != null && doodle.arrivalSequence > wallpaperRepresentation.arrivalSequence;
        if (doodle != null && !l) {
            chat.setWallpaperValue(o("WAWebChatThemeValue").wallpaperValueWithDoodle(D(chat), doodle.value)).catch(E);
        }
        r("WAWebSettingsSyncEventEmitter").trigger("applyPerChatWallpaper", {
            chatJid,
            wallpaperId: wallpaperRepresentation.wallpaperId
        });
        if (doodle != null && l) {
            chat.setWallpaperValue(o("WAWebChatThemeValue").wallpaperValueWithDoodle(D(chat), doodle.value)).catch(E);
        }
    }
    function D({ wallpaperValue }) {
        if (o("WAWebChatThemeValue").isWallpaperOverride(wallpaperValue)) {
            return wallpaperValue;
        }
        return r("WAWebChatPreferenceCollection").getDefault().wallpaperValue;
    }
    function x({ buffer, currentWallpaper, inheritedWallpaper, inheritOnClear }) {
        const { wallpaperRepresentation, doodle } = buffer;
        if (wallpaperRepresentation == null) {
            if (doodle == null) {
                return {
                    write: false
                };
            }
            return {
                write: true,
                value: o("WAWebChatThemeValue").wallpaperValueWithDoodle(currentWallpaper, doodle.value)
            };
        }
        if (wallpaperRepresentation.kind !== "stock") {
            return {
                write: false
            };
        }
        return $({
            currentWallpaper,
            rawValue: wallpaperRepresentation.rawValue,
            wallpaperArrivalSequence: wallpaperRepresentation.arrivalSequence,
            doodle,
            inheritedWallpaper,
            inheritOnClear
        });
    }
    function $({ currentWallpaper, doodle, inheritedWallpaper, inheritOnClear, rawValue, wallpaperArrivalSequence }) {
        const stockWallpaperImageId = typeof rawValue === "string" && rawValue !== "" ? rawValue : null;
        if (stockWallpaperImageId != null) {
            return {
                write: true,
                value: o("WAWebChatThemeValue").wallpaperValueFromFlat({
                    wallpaper: null,
                    showDoodle: B({
                        currentWallpaper,
                        doodle,
                        inheritedWallpaper,
                        inheritOnClear
                    }),
                    stockWallpaperImageId
                })
            };
        }
        if (inheritOnClear) {
            if (doodle != null && doodle.arrivalSequence > wallpaperArrivalSequence) {
                return {
                    write: true,
                    value: o("WAWebChatThemeValue").wallpaperValueWithDoodle(inheritedWallpaper, doodle.value)
                };
            }
            return {
                write: true,
                value: null
            };
        }
        return {
            write: true,
            value: o("WAWebChatThemeValue").wallpaperValueFromFlat({
                wallpaper: null,
                showDoodle: B({
                    currentWallpaper,
                    doodle,
                    inheritedWallpaper,
                    inheritOnClear
                }),
                stockWallpaperImageId: null
            })
        };
    }
    function P(e) {
        return e.chatThemeId != null || e.colorSchemeId != null;
    }
    function N({ buffer, canInheritTheme, current, currentWallpaper }) {
        const chatThemeId = F(buffer.chatThemeId, current?.chatThemeId);
        const colorSchemeId = F(buffer.colorSchemeId, current?.colorSchemeId);
        const s = o("WAWebChatThemeValue").chatThemeValueFromSyncedFields({
            chatThemeId,
            colorSchemeId
        }, current);
        O("chatThemeId", buffer.chatThemeId, s.chatThemeId);
        O("colorSchemeId", buffer.colorSchemeId, s.colorSchemeId);
        if (canInheritTheme && w(current, currentWallpaper, buffer, s)) {
            return babelHelpers.extends({}, s, {
                inheritsTheme: true
            });
        }
        return s;
    }
    function M(e, t) {
        const r = t.wallpaperRepresentation?.kind === "solid";
        if (!P(t)) {
            if (r && e.chatThemeValue?.inheritsTheme === true) {
                return {
                    write: true,
                    value: A(e.chatThemeValue)
                };
            }
            return {
                write: false
            };
        }
        const a = N({
            buffer: t,
            canInheritTheme: true,
            current: e.chatThemeValue,
            currentWallpaper: e.wallpaperValue
        });
        return {
            write: true,
            value: r ? A(a) : a
        };
    }
    function w(e, currentWallpaper, buffer, r) {
        if (r.chatThemeId != null || r.colorSchemeId == null || currentWallpaper?.type === "solid") {
            return false;
        }
        const i = buffer.chatThemeId != null && (buffer.chatThemeId.value == null || buffer.chatThemeId.value === "");
        return e?.inheritsTheme === true || i || !o("WAWebChatThemeValue").isChatThemeOverride(e) && buffer.colorSchemeId?.value != null;
    }
    function A(t) {
        const t_inheritsTheme = t.inheritsTheme;
        const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return r;
    }
    function F(e, t) {
        if (e != null) {
            return e.value;
        }
        return t ?? null;
    }
    function O(e, t, n) {
        if (!(r("isStringNullOrEmpty")(t?.value) || n != null)) {
            if (e === "chatThemeId") {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Unrecognized chatThemeId ",
                    ""
                ])), String(t.value)).sendLogs("chat-theme-sync-unknown-theme");
            } else {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Unrecognized colorSchemeId ",
                    ""
                ])), String(t.value)).sendLogs("chat-theme-sync-unknown-color-scheme");
            }
        }
    }
    function B({ currentWallpaper, doodle, inheritedWallpaper, inheritOnClear }) {
        const l = doodle != null ? doodle.value : o("WAWebChatThemeValue").doodleFromWallpaperValue(currentWallpaper);
        if (l != null || !inheritOnClear) {
            return l;
        }
        return o("WAWebChatThemeValue").doodleFromWallpaperValue(inheritedWallpaper) ?? true;
    }
    function W(chatJid) {
        const t = o("WAWebWidFactory").createWid(chatJid);
        if (t.isLid()) {
            return o("WAWebChatCollection").ChatCollection.getChatByAccountLid(t);
        }
        return o("WAWebChatCollection").ChatCollection.get(t);
    }
    l.enqueueThemeSync = g;
    l.flushAllThemeSync = h;
}, 98);