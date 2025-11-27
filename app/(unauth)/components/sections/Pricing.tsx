export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-[#00D9FF]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
                <p className="text-gray-400">Invest in your financial future for less than a cup of coffee.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Free Plan --> */}
                <div className="glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/10 flex flex-col">
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white">Starter</h3>
                        <p className="text-sm text-gray-400 mt-1">For budget beginners</p>
                    </div>
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-white">$0</span>
                        <span className="text-gray-500">/mo</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-gray-500" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> Manual Tracking</li>
                        <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-gray-500" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> 1 Bank Connection</li>
                        <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-gray-500" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> Basic Reports</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors">Get Started</button>
                </div>

                {/* <!-- Pro Plan (Popular) --> */}
                <div className="relative gradient-border p-[1px] rounded-2xl transform md:-translate-y-4">
                    <div className="bg-darker rounded-2xl h-full p-8 flex flex-col relative overflow-hidden">
                         <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#00D9FF] to-[#C77DFF] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-white">Pro Investor</h3>
                            <p className="text-sm text-gray-400 mt-1">For serious wealth builders</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">$9</span>
                            <span className="text-gray-500">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-indigo-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> Unlimited Connections</li>
                            <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-indigo-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> AI Budgeting</li>
                            <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-indigo-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> Investment Tracking</li>
                            <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-indigo-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> Priority Support</li>
                        </ul>
                        <button className="btn w-full py-3 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#C77DFF] hover:from-[#00D9FF] hover:to-[#C77DFF] text-white font-bold shadow-lg shadow-[#00D9FF]/20 transition-all">Start Free Trial</button>
                    </div>
                </div>

                {/* <!-- Business Plan --> */}
                <div className="glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/10 flex flex-col">
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white">Family</h3>
                        <p className="text-sm text-gray-400 mt-1">Manage household finances</p>
                    </div>
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-white">$19</span>
                        <span className="text-gray-500">/mo</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-gray-500" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> 5 User Accounts</li>
                        <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-gray-500" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> Shared Budgets</li>
                        <li className="flex items-center gap-3 text-sm text-gray-300"><i className="text-gray-500" data-fa-i2svg=""><svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i> Custom Categories</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors">Contact Sales</button>
                </div>
            </div>
        </div>
    </section>
  );
}
