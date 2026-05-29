export default function Logo({ white = false, compact = false }) {
  const textColor = white ? '#FFFFFF' : '#1A1A1A'

  if (compact) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" className="h-10 w-10">
        <rect width="52" height="52" rx="5" fill="#1A1A1A" />
        <path d="M9 47 L9 27 Q9 11 26 11 Q43 11 43 27 L43 47" fill="none" stroke="#C85A0A" strokeWidth="2.5" />
        <line x1="6" y1="47" x2="46" y2="47" stroke="#C85A0A" strokeWidth="2.5" />
        <text x="8" y="44" fontFamily="'Arial Black', Impact, sans-serif" fontSize="27" fontWeight="900" fill="#C85A0A">C</text>
        <text x="27" y="44" fontFamily="'Arial Black', Impact, sans-serif" fontSize="27" fontWeight="900" fill="#FFFFFF">G</text>
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 52" className="h-10">
      {/* Icon */}
      <rect width="52" height="52" rx="5" fill="#1A1A1A" />
      <path d="M9 47 L9 27 Q9 11 26 11 Q43 11 43 27 L43 47" fill="none" stroke="#C85A0A" strokeWidth="2.5" />
      <line x1="6" y1="47" x2="46" y2="47" stroke="#C85A0A" strokeWidth="2.5" />
      <text x="8" y="44" fontFamily="'Arial Black', Impact, sans-serif" fontSize="27" fontWeight="900" fill="#C85A0A">C</text>
      <text x="27" y="44" fontFamily="'Arial Black', Impact, sans-serif" fontSize="27" fontWeight="900" fill="#FFFFFF">G</text>

      {/* CONTRACTOR label */}
      <text
        x="64" y="19"
        fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="3.5"
        fill={textColor}
      >CONTRACTOR</text>

      {/* GARAGE main text */}
      <text
        x="63" y="49"
        fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
        fontSize="32"
        fontWeight="900"
        fill={textColor}
      >GARAGE<tspan fontSize="11" dy="-17" dx="2">®</tspan></text>
    </svg>
  )
}
