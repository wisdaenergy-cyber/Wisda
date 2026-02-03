import axios from 'axios';
import { Link, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ProjectCardsGround({ title, image, description,id,location }) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  async function OnhandleDelete() {
    try {
        const token=localStorage.getItem("token")
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/project/amc/delete/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      });
      window.location.reload();
      toast.success("Project deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete Project");
    }
  }

  return (
    <div className="relative group bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover brightness-90"
        />
        <div
          className="absolute top-2 right-2 cursor-pointer z-10"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <MoreVertical className="text-white bg-black/60 p-1 rounded-full w-6 h-6" />
          {showMenu && (
            <div className="absolute right-0  w-32 bg-white rounded-md shadow-lg flex flex-col text-sm">
              <button className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 border-b-1 border-[#D3D3D3] text-[#278188]" onClick={()=>{
                router.push(`/dashboard/projects/amc/edit/${id}`)
              }}>
                <span className="text-green-600"><svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6465 3.36519L13.9117 2.09919C14.1755 1.83543 14.5332 1.68726 14.9062 1.68726C15.2793 1.68726 15.637 1.83543 15.9008 2.09919C16.1645 2.36295 16.3127 2.72068 16.3127 3.09369C16.3127 3.4667 16.1645 3.82443 15.9008 4.08819L7.9365 12.0524C7.53999 12.4487 7.05102 12.74 6.51375 12.8999L4.5 13.4999L5.1 11.4862C5.25996 10.9489 5.55123 10.4599 5.9475 10.0634L12.6465 3.36519ZM12.6465 3.36519L14.625 5.34369M13.5 10.4999V14.0624C13.5 14.51 13.3222 14.9392 13.0057 15.2557C12.6893 15.5722 12.2601 15.7499 11.8125 15.7499H3.9375C3.48995 15.7499 3.06072 15.5722 2.74426 15.2557C2.42779 14.9392 2.25 14.51 2.25 14.0624V6.18744C2.25 5.73989 2.42779 5.31067 2.74426 4.9942C3.06072 4.67773 3.48995 4.49994 3.9375 4.49994H7.5" stroke="#278188" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span> Edit Project
              </button>
              <button className="px-3.5 py-2 hover:bg-gray-100 flex items-center gap-2 text-[#FF4E4E]"onClick={OnhandleDelete}>
                <span className="text-red-600"><svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M11.055 6.7499L10.7955 13.4999M7.2045 13.4999L6.945 6.7499M14.421 4.3424C14.6775 4.3814 14.9325 4.42265 15.1875 4.4669M14.421 4.3424L13.62 14.7547C13.5873 15.1786 13.3958 15.5745 13.0838 15.8633C12.7717 16.1521 12.3622 16.3125 11.937 16.3124H6.063C5.63782 16.3125 5.22827 16.1521 4.91623 15.8633C4.6042 15.5745 4.41269 15.1786 4.38 14.7547L3.579 4.3424M14.421 4.3424C13.5554 4.21154 12.6853 4.11222 11.8125 4.04465M3.579 4.3424C3.3225 4.38065 3.0675 4.4219 2.8125 4.46615M3.579 4.3424C4.4446 4.21154 5.31468 4.11223 6.1875 4.04465M11.8125 4.04465V3.35765C11.8125 2.47265 11.13 1.73465 10.245 1.7069C9.41521 1.68038 8.58479 1.68038 7.755 1.7069C6.87 1.73465 6.1875 2.4734 6.1875 3.35765V4.04465M11.8125 4.04465C9.94029 3.89996 8.05971 3.89996 6.1875 4.04465" stroke="#FF4E4E" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span> Del Project
              </button>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-900">{title}</h3>
         <p className="text-sm text-gray-600">
          {location}
        </p>
        <p className="text-sm text-gray-600 mt-5">
          {description}{' '}
        </p>
      </div>
    </div>
  );
}
