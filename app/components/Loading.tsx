export function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );
}
