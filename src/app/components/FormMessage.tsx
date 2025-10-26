interface FormMessageProps {
  error: string;
}

function FormMessage({ error }: FormMessageProps) {
  return (
    <div className="absolute top-full right-0 left-0 z-10 mt-2 rounded-md border border-red-200 bg-red-50 p-3 shadow-lg">
      <p className="text-sm text-red-700">{error}</p>
    </div>
  );
}

export default FormMessage;
