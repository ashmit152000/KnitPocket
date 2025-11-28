export default function MiniCard({ title, amount }: {title: string; amount: string}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
      <p className="text-gray-400 text-xs">{title}</p>
      <p className="text-white font-semibold mt-1">{amount}</p>
    </div>
  );
}