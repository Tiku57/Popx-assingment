import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full px-6 pb-8 justify-end">
      <h1 className="text-[28px] font-semibold mb-3 leading-tight">Welcome to PopX</h1>
      <p className="text-gray-500 text-[16px] mb-8 pr-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      
      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate('/register')}
          className="w-full bg-popx-purple text-white font-semibold py-3 rounded-md transition hover:opacity-90 text-[15px]"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-popx-light-purple text-black font-semibold py-3 rounded-md transition hover:opacity-90 text-[15px]"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}