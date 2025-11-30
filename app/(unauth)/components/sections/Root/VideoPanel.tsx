export default function VideoPanel() {
    return <div className="relative glass-panel rounded-2xl p-4 overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>

          <div
            id="hero-chart"
            className="h-[400px] w-full bg-darker/50 rounded-xl border border-white/5 p-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 via-transparent to-[#FF6B9D]/5 pointer-events-none"></div>

            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-financial-data-charts-25081-large.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs text-gray-400 font-medium">
                    Live Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <i data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-clock"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                      ></path>
                    </svg>
                  </i>
                  <span>Updated 2 min ago</span>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-12 gap-4">
                <div className="col-span-4 space-y-3">
                  <div className="glass-panel p-4 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        Total Balance
                      </span>
                      <i className="text-[#00D9FF] text-sm" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-wallet"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="wallet"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      $127,543
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-green-400">▲ 12.3%</span>
                      <span className="text-gray-500">vs last month</span>
                    </div>
                  </div>

                  <div className="glass-panel p-4 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        Monthly Spending
                      </span>
                      <i className="text-[#FF6B9D] text-sm" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-credit-card"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="credit-card"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">
                      $4,892
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                      <div className="bg-gradient-to-r from-[#00D9FF] to-[#C77DFF] h-1.5 rounded-full w-3/4"></div>
                    </div>
                    <div className="text-xs text-gray-400">75% of budget</div>
                  </div>

                  <div className="glass-panel p-4 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        Investments
                      </span>
                      <i className="text-[#C77DFF] text-sm" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-chart-line"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chart-line"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">
                      $89,432
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-green-400">▲ 8.7%</span>
                      <span className="text-gray-500">this week</span>
                    </div>
                  </div>
                </div>

                <div className="col-span-5">
                  <div className="glass-panel h-full rounded-lg border border-white/10 p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00D9FF]/10 via-transparent to-[#FF6B9D]/10"></div>
                    <div className="relative z-10">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">
                        Portfolio Performance
                      </h4>
                      <div className="h-32 flex items-end justify-between gap-1">
                        <div
                          className="w-4 bg-gradient-to-t from-[#00D9FF] to-[#00D9FF]/50 rounded-t"
                          style={{ height: "60%" }}
                        ></div>
                        <div
                          className="w-4 bg-gradient-to-t from-[#C77DFF] to-[#C77DFF]/50 rounded-t"
                          style={{ height: "80%" }}
                        ></div>
                        <div
                          className="w-4 bg-gradient-to-t from-[#FF6B9D] to-[#FF6B9D]/50 rounded-t"
                          style={{ height: "45%" }}
                        ></div>
                        <div
                          className="w-4 bg-gradient-to-t from-[#00D9FF] to-[#00D9FF]/50 rounded-t"
                          style={{ height: "90%" }}
                        ></div>
                        <div
                          className="w-4 bg-gradient-to-t from-[#C77DFF] to-[#C77DFF]/50 rounded-t"
                          style={{ height: "70%" }}
                        ></div>
                        <div
                          className="w-4 bg-gradient-to-t from-[#FF6B9D] to-[#FF6B9D]/50 rounded-t"
                          style={{ height: "85%" }}
                        ></div>
                        <div
                          className="w-4 bg-gradient-to-t from-[#00D9FF] to-[#00D9FF]/50 rounded-t"
                          style={{ height: "95%" }}
                        ></div>
                      </div>
                      <div className="mt-3 flex justify-between text-xs text-gray-500">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 space-y-3">
                  <div className="glass-panel p-3 rounded-lg border border-white/10">
                    <h5 className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wide">
                      Recent Activity
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <i
                            className="text-green-400 text-xs"
                            data-fa-i2svg=""
                          >
                            <svg
                              className="svg-inline--fa fa-plus"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="plus"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                              ></path>
                            </svg>
                          </i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-white truncate">
                            Salary Deposit
                          </div>
                          <div className="text-xs text-gray-500">+$5,200</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <i className="text-red-400 text-xs" data-fa-i2svg="">
                            <svg
                              className="svg-inline--fa fa-minus"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="minus"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                              ></path>
                            </svg>
                          </i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-white truncate">
                            Rent Payment
                          </div>
                          <div className="text-xs text-gray-500">-$1,850</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <i className="text-blue-400 text-xs" data-fa-i2svg="">
                            <svg
                              className="svg-inline--fa fa-chart-line"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="chart-line"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
                              ></path>
                            </svg>
                          </i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-white truncate">
                            Stock Purchase
                          </div>
                          <div className="text-xs text-gray-500">-$500</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel p-3 rounded-lg border border-white/10">
                    <h5 className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wide">
                      Quick Actions
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="p-2 rounded bg-white/5 hover:bg-white/10 transition-colors text-xs text-gray-300 border border-white/5">
                        <i className="mb-1 block" data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-plus"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="plus"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                            ></path>
                          </svg>
                        </i>
                        Add Expense
                      </button>
                      <button className="p-2 rounded bg-white/5 hover:bg-white/10 transition-colors text-xs text-gray-300 border border-white/5">
                        <i className="mb-1 block" data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-eye"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="eye"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                            ></path>
                          </svg>
                        </i>
                        View Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 w-2 h-2 bg-[#00D9FF] rounded-full animate-ping opacity-50"></div>
            <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#FF6B9D] rounded-full animate-pulse"></div>
          </div>
        </div>
}