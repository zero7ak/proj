import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-lg text-center sm:text-left ">
          <p className="mb-2">Project Mercury</p>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/zero7ak/proj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github_light.svg"
            alt="Github icon"
            width={16}
            height={16}
            className="text-black dark: text-white"
          />
          Github
        </a>
      </footer>
    </div>
  );
}
