import React from 'react';

export interface MenuItem {
  id: string;
  label: string;
  danger?: boolean;
}

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onSelectItem: (id: string) => void;
  align?: 'left' | 'right';
  top?: number | string;
  right?: number | string;
  left?: number | string;
}

export const MenuDropdown: React.FC<MenuDropdownProps> = ({
  isOpen,
  onClose,
  items,
  onSelectItem,
  align = 'right',
  top = '50px',
  right,
  left,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top,
        right: align === 'right' ? (right ?? '12px') : undefined,
        left: align === 'left' ? (left ?? '12px') : undefined,
        zIndex: 200,
      }}
    >
      {/* Backdrop to close */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <div
        role="menu"
        tabIndex={-1}
        className="x10l6tqk x13vifvy x1ey2m1c xhtitgo xhslqc4 x47corl x87ps6o xh9ts4v x1k6rcq7 x1o0tod x6prxxf"
        style={{
          backgroundColor: 'var(--WDS-surface-default, #161717)',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
          border: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))',
          padding: '6px 0',
          minWidth: '180px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {items.map((item) => (
          <button
            key={item.id}
            role="menuitem"
            tabIndex={0}
            type="button"
            onClick={() => {
              onSelectItem(item.id);
              onClose();
            }}
            className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
            style={{
              padding: '10px 20px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: item.danger ? '#ea4335' : 'var(--primary, #e9edef)',
              fontSize: '14.5px',
              textAlign: 'left',
              width: '100%',
              display: 'block',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuDropdown;
