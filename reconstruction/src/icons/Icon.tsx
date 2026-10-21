import React from 'react';
import svgIcons from './svg-icons.json';

export type IconName = keyof typeof svgIcons;

interface PathObject {
  d: string;
  fill?: string;
  className?: string;
}

interface RawIconDef {
  viewBox: string;
  width?: number;
  height?: number;
  paths?: Array<string | PathObject>;
  path?: string;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName | string;
  size?: number | string;
  className?: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  width,
  height,
  className = '',
  color = 'currentColor',
  ...props
}) => {
  const iconDef = (svgIcons as Record<string, unknown>)[name] as RawIconDef | undefined;

  if (!iconDef) {
    console.warn(`[Icon] Missing decompiled SVG vector for: ${name}`);
    return null;
  }

  const viewBox = iconDef.viewBox || '0 0 24 24';
  const resolvedWidth = width ?? (size !== undefined ? size : (iconDef.width ?? 24));
  const resolvedHeight = height ?? (size !== undefined ? size : (iconDef.height ?? 24));

  const renderPaths = () => {
    if (Array.isArray(iconDef.paths)) {
      return iconDef.paths.map((p, idx) => {
        if (typeof p === 'string') {
          return <path key={idx} d={p} fill={color} fillRule="evenodd" clipRule="evenodd" />;
        }
        return (
          <path
            key={idx}
            d={p.d}
            fill={p.fill === 'currentColor' || !p.fill ? color : p.fill}
            fillRule="evenodd"
            clipRule="evenodd"
            className={p.className}
          />
        );
      });
    }

    if (iconDef.path) {
      return <path d={iconDef.path} fill={color} fillRule="evenodd" clipRule="evenodd" />;
    }

    return null;
  };

  return (
    <svg
      data-icon={name}
      viewBox={viewBox}
      width={resolvedWidth}
      height={resolvedHeight}
      fill={color}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <title>{name}</title>
      {renderPaths()}
    </svg>
  );
};

export default Icon;
