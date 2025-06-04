import { AnimatedLogo } from "@/components/AnimatedLogo";
import { AnimatedText } from "@/components/AnimatedText";
import { AnimatedButton } from "@/components/AnimatedButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AnimatedLogo />
        
        <AnimatedText delay={0.2} className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <ol>
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
          </ol>
        </AnimatedText>

        <AnimatedText delay={0.4} className="flex gap-4 items-center flex-col sm:flex-row">
          <AnimatedButton 
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            variant="secondary"
            icon={{
              src: "/vercel.svg",
              alt: "Vercel logomark"
            }}
          >
            Deploy now
          </AnimatedButton>

          <AnimatedButton 
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            variant="secondary"
          >
            Read our docs
          </AnimatedButton>
        </AnimatedText>
      </main>

      <AnimatedText delay={0.6} className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <AnimatedButton 
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          variant="secondary"
          icon={{
            src: "/file.svg",
            alt: "File icon"
          }}
        >
          Learn
        </AnimatedButton>

        <AnimatedButton 
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          variant="secondary"
          icon={{
            src: "/window.svg",
            alt: "Window icon"
          }}
        >
          Examples
        </AnimatedButton>

        <AnimatedButton 
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          variant="secondary"
          icon={{
            src: "/globe.svg",
            alt: "Globe icon"
          }}
        >
          Go to nextjs.org →
        </AnimatedButton>
      </AnimatedText>
    </div>
  );
}
