__d("useWAWebChatThreadWallpaperMetrics", [
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeEnums",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeLogger",
    "WAWebChatThemeValue",
    "WAWebChatThreadLogging",
    "WAWebChatWallpaperWamTypeWallpaperLoggingId",
    "WAWebStockWallpaper",
    "WAWebThemeContext",
    "WAWebWamEnumChatThemeEntryType",
    "WAWebWamEnumDeviceAppearanceType",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useEffectEvent } = s;
    function useD(e) {
        const a = o("react-compiler-runtime").c(8);
        let i;
        if (a[0] !== e.chatThemeValue || a[1] !== e.groupMetadata?.parentGroup || a[2] !== e.id || a[3] !== e.wallpaperValue) {
            i = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const n = o("WAWebThemeContext").isDarkTheme();
                    const a = r("WAWebChatPreferenceCollection").getDefault();
                    const { chatThemeValue, wallpaperValue } = e;
                    const chatThemeValue_1 = o("WAWebChatThemeValue").resolveEffectiveChatThemeValue(chatThemeValue, a.chatThemeValue);
                    const hasPerChatTheme = o("WAWebChatThemeValue").isChatThemeOverride(chatThemeValue);
                    const c = chatThemeValue?.inheritsTheme !== true && (o("WAWebChatThemeValue").resolveBaseline(chatThemeValue) != null || o("WAWebChatThemeValue").isWallpaperOwningChatThemeId(chatThemeValue?.chatThemeId));
                    const selectedChatThemeValue = c ? chatThemeValue : a.chatThemeValue;
                    const _ = o("WAWebChatThemeValue").isWallpaperOverride(wallpaperValue) ? wallpaperValue : a.wallpaperValue;
                    const selectedWallpaperValue = p(selectedChatThemeValue, c ? _ : a.wallpaperValue);
                    const appearanceType = n ? o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE.DARK : o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE.LIGHT;
                    const h = m({
                        chatThemeValue: chatThemeValue_1,
                        selectedChatThemeValue,
                        selectedWallpaperValue,
                        hasPerChatTheme,
                        wallpaperValue: _,
                        isGroup: e.id.isGroup()
                    });
                    const { chatThemeId, chatThemeSource, colorSchemeId, wallpaperApplied, wallpaperId } = h;
                    const R = yield o("WAWebChatThreadLogging").getChatThreadID(e.id.toJid());
                    o("WAWebChatThemeLogger").logChatThreadWallpaperEvent({
                        appearanceType,
                        belongsToCommunity: e.groupMetadata?.parentGroup != null,
                        chatThemeId,
                        chatThemeSource,
                        chatWid: e.id,
                        colorSchemeId,
                        threadId: R,
                        wallpaperApplied,
                        wallpaperId
                    });
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            a[0] = e.chatThemeValue;
            a[1] = e.groupMetadata?.parentGroup;
            a[2] = e.id;
            a[3] = e.wallpaperValue;
            a[4] = i;
        } else {
            i = a[4];
        }
        const s = useEffectEvent(i);
        let d;
        if (a[5] !== s) {
            d = function() {
                if (o("WAWebChatThemeGatingUtils").isChatThemeLoggingEnabled()) {
                    const e = self.setTimeout(function() {
                        s();
                    }, 1000);
                    return function() {
                        self.clearTimeout(e);
                    };
                }
            };
            a[5] = s;
            a[6] = d;
        } else {
            d = a[6];
        }
        let _;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [];
            a[7] = _;
        } else {
            _ = a[7];
        }
        useEffect(d, _);
    }
    function m({ chatThemeValue, hasPerChatTheme, isGroup, selectedChatThemeValue, selectedWallpaperValue, wallpaperValue }) {
        const wallpaperApplied = wallpaperValue?.type === "stock" || wallpaperValue?.type === "solid";
        const g = isGroup ? o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.GROUP : o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.ONE_TO_ONE;
        const h = o("WAWebChatThemeValue").resolveBaseline(selectedChatThemeValue);
        const y = h?.colorSchemeId ?? h?.themeId ?? selectedChatThemeValue?.chatThemeId ?? selectedChatThemeValue?.colorSchemeId ?? o("WAWebChatThemeEnums").Theme.Default;
        const C = f(y, o("WAWebChatThemeValue").isMinimalScheme(y));
        const b = chatThemeValue?.colorSchemeId ?? null;
        const v = b != null ? f(b, o("WAWebChatThemeValue").isMinimalChatTheme(chatThemeValue)) : null;
        const S = o("WAWebChatWallpaperWamTypeWallpaperLoggingId").wallpaperLoggingId(wallpaperValue);
        return {
            chatThemeSource: hasPerChatTheme ? g : o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.APP_WIDE,
            chatThemeId: `${S}@${v ?? C}`,
            colorSchemeId: v != null && v !== C ? v : undefined,
            wallpaperApplied,
            wallpaperId: _(wallpaperValue, selectedWallpaperValue) ? undefined : S
        };
    }
    function p(selectedChatThemeValue, t) {
        const n = o("WAWebChatThemeValue").resolveBaseline(selectedChatThemeValue);
        if (selectedChatThemeValue?.baseline != null || o("WAWebChatThemeValue").isMinimalChatTheme(selectedChatThemeValue)) {
            return n?.wallpaper ?? null;
        }
        const a = selectedChatThemeValue?.chatThemeId;
        if (a == null || t?.type === "stock" && o("WAWebStockWallpaper").isStockWallpaperPresetForTheme(a, t.stockImageId)) {
            return t;
        }
        return {
            type: "default",
            isDoodleEnabled: true
        };
    }
    function _(wallpaperValue, selectedWallpaperValue) {
        if ((wallpaperValue?.type ?? "default") !== (selectedWallpaperValue?.type ?? "default")) {
            return false;
        }
        if (wallpaperValue?.type === "stock") {
            return selectedWallpaperValue?.type === "stock" && wallpaperValue.stockImageId === selectedWallpaperValue.stockImageId;
        }
        if (wallpaperValue?.isDoodleEnabled !== false != (selectedWallpaperValue?.isDoodleEnabled !== false)) {
            return false;
        }
        if (wallpaperValue?.type === "solid") {
            return selectedWallpaperValue?.type === "solid" && o("WAWebChatThemeValue").normalizeHex(wallpaperValue.colorLight) === o("WAWebChatThemeValue").normalizeHex(selectedWallpaperValue.colorLight) && o("WAWebChatThemeValue").normalizeHex(wallpaperValue.colorDark) === o("WAWebChatThemeValue").normalizeHex(selectedWallpaperValue.colorDark);
        }
        return true;
    }
    function f(e, t) {
        const n = String(e);
        const r = e === o("WAWebChatThemeEnums").Theme.Default;
        const a = r ? "whatsapp-green" : o("WAWebChatThemeValue").themeFamilyOf(n).toLowerCase();
        const i = t || o("WAWebChatThemeValue").isMinimalScheme(e) ? "#minimal" : "";
        const l = r || o("WAWebChatThemeEnums").TonalScheme.isValid(n) ? "#tonal" : "#vibrant";
        return `${a}${i}${l}`;
    }
    l.useChatThreadWallpaperMetrics = useD;
    l.deriveChatThreadWallpaperMetrics = m;
}, 98);