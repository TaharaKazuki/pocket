import { extractUrlData } from "../actions/articles/extract-url-data";

function InputFormGroup() {
  const handleInput = async (formData: FormData) => {
    const articleData = await extractUrlData(formData);
    console.info("取得データ", articleData);
  };

  return (
    <div className="relative flex w-3/5 items-center gap-3">
      <div className="flex w-full items-center gap-3">
        {/* インプットフォーム */}
        <form action={handleInput} className="flex flex-1 gap-3">
          <input
            type="text"
            name="url"
            placeholder="例：https://example.com/article"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
          />
          <button
            type="submit"
            className="hidden w-28 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 md:block"
          >
            登録
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputFormGroup;
