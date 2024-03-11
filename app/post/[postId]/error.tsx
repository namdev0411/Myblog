"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-64 p-4">
      <h2 className="text-4xl">{error.message}</h2>
      <button
        className="bg-blue-500 rounded-sm px-3 py-2 text-white hover:bg-blue-400"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
