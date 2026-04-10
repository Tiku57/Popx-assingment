import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="flex flex-col h-full px-6 pt-8 pb-8">
      <h1 className="text-[28px] font-semibold mb-4 leading-tight">Signin to your<br/>PopX account</h1>
      <p className="text-gray-500 text-[16px] mb-10 pr-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="flex flex-col gap-6 flex-grow" onSubmit={handleLogin}>
        {/* Floating Label Inputs */}
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-popx-bg px-1 text-[13px] text-popx-purple font-medium z-10">Email Address</label>
          <input
            type="email"
            required
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded-md px-4 py-3.5 bg-transparent focus:outline-none focus:border-popx-purple text-[15px] relative z-0 placeholder-gray-400"
          />
        </div>
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-popx-bg px-1 text-[13px] text-popx-purple font-medium z-10">Password</label>
          <input
            type="password"
            required
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-4 py-3.5 bg-transparent focus:outline-none focus:border-popx-purple text-[15px] relative z-0 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-popx-gray-btn text-white font-semibold py-3 rounded-md mt-2 transition hover:bg-gray-400 text-[15px]"
        >
          Login
        </button>
      </form>
    </div>
  );
}