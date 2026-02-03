export default function BlogCard4({ title, image, content, readTime, _id, slug }) {
  
  const generateSlug = (title) => {
    if (!title) return "";
    const lowerSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') 
      .replace(/[\s_-]+/g, '-') 
      .replace(/^-+|-+$/g, ''); 
  
    return lowerSlug.charAt(0).toUpperCase() + lowerSlug.slice(1);
  };
  
  const finalSlug = slug || generateSlug(title) || _id;
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md w-96">
      <img src={image} alt={title} className="w-full h-[400px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
        <p className="font-bold text-sm text-white drop-shadow-md">{title}</p>
        <p className="text-xs mt-1 text-white drop-shadow-md line-clamp-2">{content}</p>
        <div className="flex justify-between text-xs mt-2">
          
          {/* Use finalSlug here */}
          <a href={`/blog/${finalSlug}`} className="text-[#8EC643] hover:underline drop-shadow-md">
            Know More &gt;
          </a>
          
          <span className="text-[#8EC643] drop-shadow-md">5 mins Read</span>
        </div>
      </div>
    </div>
  );
}
