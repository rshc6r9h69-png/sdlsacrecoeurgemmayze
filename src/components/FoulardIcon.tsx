import React from 'react';

export const OFFICIAL_GROUP_LOGO = '/assets/aistudio/logo_sacre_coeur_transparent.png';
export const OFFICIAL_SDL_NATIONAL_LOGO = '/assets/aistudio/logo_sdl_transparent.png';

interface FoulardIconProps {
  className?: string;
  size?: number;
  title?: string;
}

/**
 * Mini SVG Logo of the Groupe Sacré-Cœur Gemmayzé Foulard (Green & Yellow Scout Neckerchief)
 */
export const FoulardIcon: React.FC<FoulardIconProps> = ({
  className = '',
  size = 24,
  title = 'Foulard Vert et Jaune - Sacré-Cœur Gemmayzé',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 select-none ${className}`}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Back triangular fold of the foulard (Green with Yellow border) */}
      <path
        d="M8 14C24 19 40 19 56 14L32 41L8 14Z"
        fill="#15803D"
        stroke="#14532D"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Yellow border trim along the triangular foulard */}
      <path
        d="M12.5 16.5L32 37.5L51.5 16.5"
        stroke="#FACC15"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left hanging tail of the foulard */}
      <path
        d="M28 38L20 57L29 53L32 42"
        fill="#15803D"
        stroke="#14532D"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 41L22.5 54"
        stroke="#FACC15"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Right hanging tail of the foulard */}
      <path
        d="M36 38L44 57L35 53L32 42"
        fill="#EAB308"
        stroke="#14532D"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M36.5 41L41.5 54"
        stroke="#15803D"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Rolled collar top edge (Green & Yellow twisted pleats) */}
      <path
        d="M8 14C20 21 44 21 56 14C46 9 18 9 8 14Z"
        fill="#166534"
        stroke="#14532D"
        strokeWidth="2.2"
      />
      <path
        d="M15 13.5C25 17.5 39 17.5 49 13.5"
        stroke="#FACC15"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Scout Woggle (Bague de foulard) in Red/Gold at the knot */}
      <rect
        x="26"
        y="34"
        width="12"
        height="7"
        rx="3.5"
        fill="#DC2626"
        stroke="#FACC15"
        strokeWidth="2.2"
      />
    </svg>
  );
};

interface GroupLogoProps {
  sizeClass?: string;
  className?: string;
  withShadow?: boolean;
}

/**
 * Organic, seamlessly transparent Group Insignia Logo (VII° Beyrouth)
 */
export const GroupLogo: React.FC<GroupLogoProps> = ({
  sizeClass = 'h-14 w-auto',
  className = '',
  withShadow = false,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${
        withShadow ? 'filter drop-shadow-md' : ''
      } ${className}`}
    >
      <img
        src={OFFICIAL_GROUP_LOGO}
        alt="Groupe Sacré-Cœur - VII° Beyrouth"
        className={`${sizeClass} object-contain transition-transform duration-200 hover:scale-105 select-none`}
        loading="eager"
      />
    </div>
  );
};

export const SdlNationalLogo: React.FC<{ sizeClass?: string; className?: string }> = ({
  sizeClass = 'h-12 w-auto',
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src={OFFICIAL_SDL_NATIONAL_LOGO}
        alt="Les Scouts du Liban"
        className={`${sizeClass} object-contain select-none`}
        loading="eager"
      />
    </div>
  );
};
