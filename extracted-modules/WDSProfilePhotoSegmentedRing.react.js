__d("WDSProfilePhotoSegmentedRing.react", [
    "WDSProfilePhotoUtils",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = 4;
    function c(e, t, n, r) {
        const o = [];
        for(let a = 0; a < e; a++){
            const i = a === e - 1 ? n - e * (r + t) + r : r;
            o.push(`${t} ${i}`);
        }
        return o.join(" ");
    }
    function DComponent({ badgeMaskCx, badgeMaskCy, badgeMaskId, badgeMaskR, sizePx, strokeWidth, totalCount, variant, viewedCount }) {
        const stroke = variant === "closeFriends" ? o("WDSProfilePhotoUtils").UNVIEWED_CLOSE_FRIENDS_COLOR : o("WDSProfilePhotoUtils").UNVIEWED_COLOR;
        const f = totalCount;
        const g = viewedCount;
        const h = f - g;
        const y = sizePx / 2 - strokeWidth / 2;
        const C = Math.PI * y * 2;
        let b = u;
        if (C - u * f < 1) {
            b = C / f / 1.2;
        }
        const v = (C - b * f) / f;
        const S = C / 4 - b / 2;
        const R = S;
        const L = f > 1 ? c(g, v, C, b) : undefined;
        const E = S - g * (b + v);
        const k = f > 1 ? c(h, v, C, b) : undefined;
        return <svg aria-hidden height={sizePx} className="x13vifvy x1o0tod x47corl x10l6tqk" viewBox={`0 0 ${sizePx} ${sizePx}`} width={sizePx}>{badgeMaskId != null && badgeMaskCx != null && badgeMaskCy != null && badgeMaskR != null && <defs><mask id={badgeMaskId}><rect fill="white" height={sizePx} width={sizePx}/><circle cx={badgeMaskCx} cy={badgeMaskCy} fill="black" r={badgeMaskR}/></mask></defs>}<g mask={badgeMaskId != null ? `url(#${badgeMaskId})` : undefined}>{h > 0 && <circle cx={sizePx / 2} cy={sizePx / 2} fill="none" r={y} stroke={stroke} strokeDasharray={k} strokeDashoffset={E} strokeLinecap="round" strokeWidth={strokeWidth}/>}{g > 0 && <circle cx={sizePx / 2} cy={sizePx / 2} fill="none" r={y} stroke={o("WDSProfilePhotoUtils").VIEWED_COLOR} strokeDasharray={L} strokeDashoffset={R} strokeLinecap="round" strokeWidth={strokeWidth}/>}</g></svg>;
    }
    DComponent.displayName = `${DComponent.name} [from ${i.id}]`;
    l.default = DComponent;
}, 98);