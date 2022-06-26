import Chart from "../components/Chart";

export default function App() {
  return (
    <main className="bg-cream h-screen overflow-hidden flex justify-center items-center flex-col">
      <section className="bg-soft-red p-4 rounded-lg w-[300px] flex justify-between items-center mb-4">
        <div className="text-pale-orange">
          <small>My Balance</small>
          <p className="font-bold text-2xl">$921.48</p>
        </div>
        <div className="flex">
            <div className="border-pale-orange border-2 h-10 w-10 rounded-full p-4 relative translate-x-5"/>
            <div className="bg-dark-brown h-10 w-10 rounded-full p-4"/>
        </div>
      </section>
      <section className="bg-pale-orange w-[300px] p-4 rounded-lg flex flex-col">
        <h1 className="font-bold text-dark-brown text-xl">Spending - Last 7 days</h1>
        <div>
          <Chart/>
        </div>
        <hr className="my-4 text-cream"/>
        <div>
          <h1 className="text-brown text-xs">Total this month</h1>
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl text-dark-brown">$478.33</h1>
            <div className="flex flex-col items-end">
              <p className="font-bold -my-1 text-dark-brown text-sm">+2.4%</p>
              <small className="text-brown text-xs">from last month</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
