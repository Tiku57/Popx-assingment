import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="flex flex-col h-full px-6 pt-8 pb-8 overflow-y-auto">
      <h1 className="text-[28px] font-semibold mb-8 leading-tight">Create your<br/>PopX account</h1>

      <form className="flex flex-col gap-6 flex-grow" onSubmit={handleRegister}>
        {/* Inputs */}
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-popx-bg px-1 text-[13px] text-popx-purple font-medium z-10">Full Name<span className="text-red-500">*</span></label>
          <input type="text" required placeholder="Marry Doe" className="w-full border border-gray-300 rounded-md px-4 py-3.5 bg-transparent focus:outline-none focus:border-popx-purple text-[15px]" />
        </div>
        
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-popx-bg px-1 text-[13px] text-popx-purple font-medium z-10">Phone number<span className="text-red-500">*</span></label>
          <input type="tel" required placeholder="Marry Doe" className="w-full border border-gray-300 rounded-md px-4 py-3.5 bg-transparent focus:outline-none focus:border-popx-purple text-[15px]" />
        </div>
        
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-popx-bg px-1 text-[13px] text-popx-purple font-medium z-10">Email address<span className="text-red-500">*</span></label>
          <input type="email" required placeholder="Marry Doe" className="w-full border border-gray-300 rounded-md px-4 py-3.5 bg-transparent focus:outline-none focus:border-popx-purple text-[15px]" />
        </div>
        
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-popx-bg px-1 text-[13px] text-popx-purple font-medium z-10">Password<span className="text-red-500">*</span></label>
          <input type="password" required placeholder="Marry Doe" className="w-full border border-gray-300 rounded-md px-4 py-3.5 bg-transparent focus:outline-none focus:border-popx-purple text-[15px]" />
        </div>
        
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-popx-bg px-1 text-[13px] text-popx-purple font-medium z-10">Company name</label>
          <input type="text" placeholder="Marry Doe" className="w-full border border-gray-300 rounded-md px-4 py-3.5 bg-transparent focus:outline-none focus:border-popx-purple text-[15px]" />
        </div>

        {/* Agency Radio Buttons */}
        <div className="mt-2">
          <p className="text-[14px] mb-3">Are you an Agency?<span className="text-red-500">*</span></p>
          <div className="flex gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="agency" value="yes" className="w-5 h-5 accent-popx-purple" defaultChecked />
              <span className="text-[15px]">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="agency" value="no" className="w-5 h-5 accent-popx-purple" />
              <span className="text-[15px]">No</span>
            </label>
          </div>
        </div>

        <div className="mt-auto pt-10">
          <button type="submit" className="w-full bg-popx-purple text-white font-semibold py-3 rounded-md transition hover:opacity-90 text-[15px]">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}