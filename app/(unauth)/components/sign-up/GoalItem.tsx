export default function GoalItem({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-gray-300 text-xs">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full mt-1 overflow-hidden">
        <div
          style={{ width: `${percent}%` }}
          className="h-full bg-gradient-to-r from-[#00D9FF] via-[#C77DFF] to-[#FF6B9D]"
        />
      </div>
    </div>
  );
} 