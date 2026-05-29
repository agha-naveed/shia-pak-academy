import logo from "@/public/logo.png"
import Image from "next/image"

export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
        <Image src={logo} alt="Shia Quran Pak Academy Logo" className="animate-bounce" width={100} height={100} />
        <span className="mt-2 text-xl">Page Not Found!</span>
    </div>
  )
}
