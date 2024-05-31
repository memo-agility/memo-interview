const Home = () => {
  return (
    <div className="grid h-[500px] grid-cols-12">
      <div className="col-span-6 space-y-4 px-6 py-8">
        <h2 className="text-2xl font-semibold">Login Form</h2>
        <form className="space-y-4">
          <div>
            <label>
              Username
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-2 border-2 rounded-sm"
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border-2 rounded-sm"
              />
            </label>
          </div>
          <button className="bg-blue-400 px-4 py-2 rounded-sm text-white hover:bg-blue-500 active:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
