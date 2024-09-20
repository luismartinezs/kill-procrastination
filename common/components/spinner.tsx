export const Spinner = () => {
  return (
    <div className="inline-block size-8 animate-spin rounded-full border-4 border-solid border-gray-300 border-t-gray-600" role="status" aria-label="Loading">
      <span className="sr-only">Loading...</span>
    </div>
  );
};