export default function Circles({ className }: { className?: string }) {
  return (
    <div className={"absolute inset-0 -z-10 " + className}>
      <div className="absolute top-0 left-0 mx-auto aspect-square w-full rounded-full border-2 border-zinc-500 p-10">
        <div className="aspect-square w-full rounded-full border-2 border-zinc-500 p-10">
          <div className="aspect-square w-full rounded-full border-2 border-zinc-500 p-10">
            <div className="aspect-square w-full rounded-full border-2 border-zinc-500 p-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
