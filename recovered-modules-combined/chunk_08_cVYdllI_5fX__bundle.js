;
"use strict";
try {
    const THEME_KEY = "theme";
    const SYSTEM_THEME_MODE = "system-theme-mode";
    const splashscreenVariableMap = {
        "--splashscreen-startup-background-plain": {
            light: "#FFFFFF",
            dark: "#161717"
        },
        "--splashscreen-startup-content-deemphasized": {
            light: "rgba(0, 0, 0, 0.6)",
            dark: "rgba(255, 255, 255, 0.6)"
        },
        "--splashscreen-startup-background": {
            light: "#F7F5F3",
            dark: "#161717"
        },
        "--splashscreen-startup-background-rgb": {
            light: "247, 245, 243",
            dark: "22, 23, 23"
        },
        "--splashscreen-startup-icon": {
            light: "rgba(0, 0, 0, 0.1)",
            dark: "rgba(255, 255, 255, 0.2)"
        },
        "--splashscreen-primary-title": {
            light: "#0A0A0A",
            dark: "#FAFAFA"
        },
        "--splashscreen-secondary-lighter": {
            light: "rgba(0, 0, 0, 0.6)",
            dark: "rgba(255, 255, 255, 0.6)"
        },
        "--splashscreen-progress-primary": {
            light: "#1DAA61",
            dark: "#21C063"
        },
        "--splashscreen-progress-background": {
            light: "rgba(0, 0, 0, 0.1)",
            dark: "rgba(255, 255, 255, 0.1)"
        }
    };
    let prefersColorSchemeMode = null;
    if (window.matchMedia) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
        if (prefersDark.matches === true) {
            prefersColorSchemeMode = "dark";
        } else if (prefersLight.matches) {
            prefersColorSchemeMode = "light";
        }
    }
    const systemThemeModeSet = window.localStorage.getItem(SYSTEM_THEME_MODE) === "true";
    const configuredTheme = window.localStorage.getItem(THEME_KEY);
    if (systemThemeModeSet) {
        if (prefersColorSchemeMode === "dark") {
            Object.keys(splashscreenVariableMap).forEach((e)=>document.documentElement?.style.setProperty(e, splashscreenVariableMap[e].dark));
        } else if (prefersColorSchemeMode === "light") {
            Object.keys(splashscreenVariableMap).forEach((e)=>document.documentElement?.style.setProperty(e, splashscreenVariableMap[e].light));
        }
    } else if (configuredTheme === '"dark"') {
        Object.keys(splashscreenVariableMap).forEach((e)=>document.documentElement?.style.setProperty(e, splashscreenVariableMap[e].dark));
    } else if (configuredTheme == null || configuredTheme === '"light"') {
        Object.keys(splashscreenVariableMap).forEach((e)=>document.documentElement?.style.setProperty(e, splashscreenVariableMap[e].light));
    }
} catch (e) {}
