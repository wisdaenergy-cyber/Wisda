export default function BlogCard({ title, image, content, _id, slug, description }) {

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
    <div className="relative rounded-xl overflow-hidden shadow-md">
     <img src={image} alt={title} className="w-full h-100 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
       <p className="font-bold text-sm text-white drop-shadow-md">{title}</p>
         <p className="text-xs mt-1 text-white drop-shadow-md line-clamp-2">{content}</p>
        <div className="flex justify-between text-sm mt-4 font-medium">
          <a href={`/blog/${finalSlug}`} className="text-[#8EC643] hover:underline drop-shadow-lg">
            Know More &gt;
          </a>
          <span className="text-[#8EC643] drop-shadow-lg">5 mins Read</span>
        </div>
      </div>
    </div>
  );
}
