export default function Logo({ white = false, compact = false }) {
  const textColor = white ? '#FFFFFF' : '#1A1A1A'

  const icon = (
    <>
      <rect width="48" height="48" rx="4" fill="#1A1A1A" />
      {/* C — orange bracket */}
      <rect x="5"  y="7"  width="17" height="5"  fill="#C85A0A" />
      <rect x="5"  y="7"  width="5"  height="34" fill="#C85A0A" />
      <rect x="5"  y="36" width="17" height="5"  fill="#C85A0A" />
      {/* G — white bracket with crossbar */}
      <rect x="26" y="7"  width="17" height="5"  fill="#FFFFFF" />
      <rect x="26" y="7"  width="5"  height="34" fill="#FFFFFF" />
      <rect x="26" y="36" width="17" height="5"  fill="#FFFFFF" />
      <rect x="35" y="22" width="8"  height="5"  fill="#FFFFFF" />
    </>
  )

  if (compact) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-9 w-9">
        {icon}
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222 48" className="h-9">
      {icon}
      <text
        x="62" y="17"
        fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="3.5"
        fill={textColor}
      >CONTRACTOR</text>
      <text
        x="61" y="46"
        fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
        fontSize="31"
        fontWeight="900"
        fill={textColor}
      >GARAGE<tspan fontSize="11" dy="-18" dx="1">®</tspan></text>
    </svg>
  )
}
