import Link from 'next/link';

export default function BlogCard({ title, image, readTime, content, _id }) {
  const createSlug = (title) => {
    if (!title) return "";
    const lowerSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') 
      .replace(/[\s_-]+/g, '-') 
      .replace(/^-+|-+$/g, ''); 
    return lowerSlug.charAt(0).toUpperCase() + lowerSlug.slice(1);
  };

  const slug = createSlug(title);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md w-full max-w-full">
      <img
        src={image}
        alt={title}
        className="w-full max-w-full h-48 sm:h-60 object-cover block"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-3 sm:p-4 flex flex-col justify-end">
        <p className="font-bold text-sm sm:text-base text-white drop-shadow-md line-clamp-2">
          {title}
        </p>
        <p className="text-xs sm:text-sm mt-1 text-white drop-shadow-md line-clamp-2">
          {content}
        </p>
        <div className="flex justify-between text-xs sm:text-sm mt-2">
          <Link
            href={`/blog/${slug}`}
            className="text-[#8EC643] hover:underline drop-shadow-md"
          >
            Know More &gt;
          </Link>
          <span className="text-[#8EC643] drop-shadow-md">
            {readTime || "5 mins Read"}
          </span>
        </div>
      </div>
    </div>
  );
}