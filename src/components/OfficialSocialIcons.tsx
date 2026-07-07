import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const OfficialInstagramIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <radialGradient
          id="instagram-grad"
          cx="30%"
          cy="107%"
          r="150%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285ae5" />
        </radialGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
        fill="url(#instagram-grad)"
      />
      <path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="17.5"
        y1="6.5"
        x2="17.51"
        y2="6.5"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const OfficialFacebookIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M14 12h-2v7h-3v-7H7V9h2V7.5C9 5.3 10.3 4 12.5 4c1 0 1.9.1 2.1.1v2.5h-1.5c-1.1 0-1.3.5-1.3 1.3V9h2.8l-.3 3z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const OfficialWhatsAppIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <circle cx="12" cy="12" r="11.5" fill="#25D366" stroke="#ffffff" strokeWidth="0.5" />
      <path
        d="M12 2a9.9 9.9 0 0 0-8.6 14.9l-1 3.7 3.8-1A9.9 9.9 0 0 0 22 12c0-5.5-4.5-10-10-10zm5.1 13.5c-.3.8-1.5 1.5-2.2 1.6-.6.1-1.3.2-3.8-.8-3.2-1.3-5.2-4.5-5.4-4.7-.2-.2-1.4-1.9-1.4-3.6 0-1.7.9-2.5 1.2-2.9.3-.3.7-.5 1-.5h.7c.2 0 .5 0 .7.5.3.6.9 2.2 1 2.3.1.2.1.4 0 .6-.1.2-.2.4-.4.6s-.3.3-.5.5c-.2.2-.4.4-.2.7.2.4.9 1.5 1.9 2.4 1.3 1.1 2.4 1.5 2.7 1.6.3.1.5.1.7-.1.2-.3.9-1.1 1.2-1.4.2-.3.4-.2.7-.1.3.1 1.8.9 2.1 1.1.3.2.5.2.6.4.1.2.1 1.4-.2 2.2z"
        fill="#ffffff"
      />
    </svg>
  );
};
