"use client";

import { useEffect, useState } from "react";

import { urlRegistrationSchema } from "@/lib/validations/urlRegistrationSchema";

import FormMessage from "./FormMessage";

function InputFormGroup() {
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  const handleInput = async (formData: FormData) => {
    try {
      const url = formData.get("url") as string;
      const validationResult = urlRegistrationSchema.safeParse({ url });

      if (!validationResult.success) {
        const errorMessage = validationResult.error.issues
          .map((issue) => issue.message)
          .join(", ");
        setError(errorMessage);
        return;
      }
    } catch (error) {
      console.error("記事の保存に失敗しました。", error);
      setError("予期しないエラーが発生しました。");
    }
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

      {error && <FormMessage error={error} />}
    </div>
  );
}

export default InputFormGroup;
