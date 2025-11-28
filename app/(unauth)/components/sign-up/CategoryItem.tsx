export default function CategoryItem({ title, amount }: { title: string; amount: string }) {
  return (
    <div className="flex justify-between text-gray-300 text-sm mb-3">
      <span>{title}</span>
      <span>{amount}</span>
    </div>
  );
}