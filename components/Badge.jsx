'use client'
import CountUp from "react-countup"


const Badge = ({containerStyles, icon, endCountNum, endCountText, badgeText}) => {
  return  <div className={`badge ${containerStyles}`}>
    <div className="text-3xl text-white">{icon}</div>
    <div className="flex items-center gap-x-2">
      <div className="text-2xl leading-none font-bold text-white ">
        <CountUp end={endCountNum} delay={1} duration={5} /> {endCountText}
      </div>
      <div className="max-w-[60px] leading-none text-[10px] font-medium text-white">{badgeText}</div>
    </div>
  </div>
  
}

export default Badge
