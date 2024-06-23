import { IoIosAdd } from "react-icons/io";
export default function Home() {
  return (
    <main className="p-4 bg-[#141318] h-[100vh] flex flex-col gap-4">
      <div className="flex">
        <picture className="w-[40px] h-[40px] rounded-3xl">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full rounded-3xl object-cover"
          />
        </picture>
      </div>
      <div className="flex justify-between text-secondary-white">
        <h1 className="text-2xl font-medium">Cards</h1>
        <div className="flex gap-2 items-center justify-center">
          <p className="text-md text-accent-orange">Add new </p>
          <IoIosAdd className="text-accent-orange"/>
        </div>
      </div>
      <div>
        <div className="w-full rounded-xl bg-gradient-to-r from-orange-gradient-1 to-orange-gradient-2 h-[200px] p-6 flex flex-col justify-between">
          <picture>
            <img src="/images/home/visa-icon.png" />
          </picture>
          <div className="flex justify-center items-center">
            <p className="text-secondary-white tracking-widest text-lg">8842  2394  2399 1293</p>
          </div>
          <div className="text-secondary-white">
            <p className="text-xs">Card alias</p>
            <p className="text-md">Nu Cuenta</p>
          </div>
        </div>
      </div>
    </main>
  );
}
