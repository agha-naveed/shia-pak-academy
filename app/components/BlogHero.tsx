import Image from "next/image";
import blogBg from "@/public/images/blog.webp";

interface BlogHeroProps {
  title: string;
  description?: string;
  badge?: string;
}

export default function BlogHero({ title, description, badge }: BlogHeroProps) {
  return (
    <section className="relative h-[300px] w-full overflow-hidden sm:h-[350px] lg:h-[400px]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#DABB99]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-4 sm:px-6 lg:px-8">
        <Image
          src={blogBg}
          alt="Articles and Insights Background"
          width={900}
          height={900}
          className="absolute right-0 z-10 h-full w-fit"
          priority
        />
        <div className="relative z-20 max-w-2xl">
          {badge && (
            <span className="mb-3 inline-block rounded-full bg-emerald-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {badge}
            </span>
          )}
          <h1 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}