export function Error() {
  return (
    <div className="flex flex-col fixed inset-0 items-center justify-center z-50">
      <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h1>
      <p className="text-lg">Please try again later.</p>
    </div>
  );
}
