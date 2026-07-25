/**
 * SvgIcon — renders SVG shapes from plain data objects.
 * Accepts: paths[], lines[], rects[], circles[], stroke, strokeWidth
 */
export default function SvgIcon({ paths, lines, rects, circles, stroke, strokeWidth = '1.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
      {rects?.map((r, i) => <rect key={`r${i}`} {...r} />)}
      {circles?.map((c, i) => <circle key={`c${i}`} {...c} />)}
      {paths?.map((d, i) => <path key={`p${i}`} d={d} />)}
      {lines?.map((l, i) => <line key={`l${i}`} {...l} />)}
    </svg>
  );
}
