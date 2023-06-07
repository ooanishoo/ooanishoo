// icon:moon-outline | Ionicons https://ionicons.com/ | Ionic Framework
export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    height="2em"
    width="2em"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
    />
  </svg>
)

// icon:sun | System UIcons https://systemuicons.com/ | Corey Ginnivan
export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 21 21"
    fill="currentColor"
    height="2em"
    width="2em"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g opacity={0.3}>
        <path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 00-4-4.018c-2.219 0-4 1.781-4 4 0 2.22 1.781 4 4 4zM4.136 4.136L5.55 5.55M15.45 15.45l1.414 1.414M1.5 10.5h2M17.5 10.5h2" />
        <g>
          <path d="M4.136 16.864L5.55 15.45M15.45 5.55l1.414-1.414" />
        </g>
        <g>
          <path d="M10.5 19.5v-2M10.5 3.5v-2" />
        </g>
      </g>
      <g transform="translate(-210 -1)">
        <path d="M220.5 2.5v2M227 5l-1.5 1.5" />
        <path d="M224.5 11.5 A4 4 0 0 1 220.5 15.5 A4 4 0 0 1 216.5 11.5 A4 4 0 0 1 224.5 11.5 z" />
        <path d="M214 5l1.5 1.5M220.5 20.5v-2M227 18l-1.5-1.5M214 18l1.5-1.5M211.5 11.5h2M227.5 11.5h2" />
      </g>
    </g>
  </svg>
)

// icon:arrows_hamburger 2 | Linea Iconset https://linea.io/ | Benjamin Sigidi

export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M12 21h40M12 33h40M12 45h40"
    />
  </svg>
)
