function ToggleSwitch() {
  <div className="flex items-center gap-2 whitespace-nowrap">
    <span className="hidden text-sm text-gray-600 md:block">URL登録</span>
    <button
      type="button"
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
    >
      <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white transition-transform"></span>
    </button>
  </div>;
}

export default ToggleSwitch;
