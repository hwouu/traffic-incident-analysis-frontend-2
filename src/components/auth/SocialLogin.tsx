export default function SocialLogin() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <button
        type="button"
        className="inline-flex w-full items-center justify-center rounded-md bg-[#FEE500] px-4 py-2 text-sm font-medium text-[#000000] hover:bg-[#FDD835] focus:outline-none focus:ring-2 focus:ring-[#FEE500] focus:ring-offset-2"
      >
        <svg
          className="mr-2 h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C6.48 3 2 6.48 2 12C2 17.52 6.48 21 12 21C17.52 21 22 17.52 22 12C22 6.48 17.52 3 12 3ZM12 19C7.59 19 4 15.41 4 11C4 6.59 7.59 3 12 3C16.41 3 20 6.59 20 11C20 15.41 16.41 19 12 19Z"
            fill="currentColor"
          />
          <path
            d="M12 7C9.24 7 7 8.79 7 11C7 12.79 8.24 14.31 10.5 14.31C11.31 14.31 12 13.62 12 12.81V11H14.5C15.33 11 16 10.33 16 9.5C16 8.67 15.33 8 14.5 8H12V7Z"
            fill="currentColor"
          />
        </svg>
        카카오로 로그인
      </button>
    </div>
  );
}