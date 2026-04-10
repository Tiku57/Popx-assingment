// 1. IMPORT your local image from the assets folder
import userAvatar from '../assets/Ellipse114@2x.png';

export default function Profile() {
  return (
    <div className="flex flex-col h-full bg-popx-bg">
      {/* Header */}
      <div className="bg-white px-5 py-6 shadow-sm">
        <h1 className="text-[18px] font-medium text-black">Account Settings</h1>
      </div>

      {/* Profile Info */}
      <div className="px-5 pt-8 pb-4">
        <div className="flex gap-5 items-center mb-6">
          <div className="relative">
            {/* 2. USE the imported variable in the src attribute */}
            <img
              src={userAvatar}
              alt="Profile"
              className="w-[72px] h-[72px] rounded-full object-cover"
            />
            {/* Camera Icon Badge */}
            <div className="absolute bottom-0 right-0 bg-popx-purple p-1.5 rounded-full text-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-[16px] text-black mb-0.5">Marry Doe</h2>
            <p className="text-[14px] text-black">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-[14px] text-[#1D2226] leading-relaxed mb-8">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        {/* Top Dashed Line */}
        <hr className="border-t border-dashed border-gray-300" />
      </div>
      
      {/* Bottom Dashed Line */}
      <div className="mt-auto px-5 pb-8">
         <hr className="border-t border-dashed border-gray-300" />
      </div>
    </div>
  );
}