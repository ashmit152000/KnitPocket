export default function LoaderButton({isPending, loaderText="Crunching your numbers…", isLoginPage, generalText}: {isPending: boolean, loaderText: string, isLoginPage?: boolean, generalText: string}) {
    
    return <button
          disabled={isPending}
          className={`
    w-full py-4 rounded-xl text-white font-semibold 
    bg-gradient-to-r from-[#00D9FF] via-[#C77DFF] to-[#FF6B9D]
    transition-all shadow-lg shadow-[#00D9FF]/20
    hover:scale-[1.02] 
    disabled:opacity-60 disabled:cursor-not-allowed 
    relative overflow-hidden
  `}
        >
          {isPending ? (
            <div className="flex items-center justify-center gap-2">
              <div className="bar-loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="opacity-100 text-white">{loaderText}</span>
            </div>
          ) : `${generalText}`}
        </button>
}