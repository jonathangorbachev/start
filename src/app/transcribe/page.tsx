import ChatBot from "@/components/ChatBot";
import Chatpdf from "@/components/Chatpdf";
import Navbar from "@/components/Navbar";
import UploaderPage from "@/components/Uploader";
import Uploader, { ImageUrlProvider } from "@/components/Uploader";
import LargeHeading from "@/components/ui/LargeHeading";
import { getAuthSession } from "@/lib/auth";


export default async function Home() {
  const session = await getAuthSession();

  return (
    <ImageUrlProvider>
      <div className="relative overflow-y-auto flex items-center justify-center overflow-x-hidden">
        <div className="max-w-full mx-auto w-full h-full">
          <div className="flex flex-col items-center h-full gap-20 md:gap-8">
            <Navbar session={session} />
            <div className="scroll-fade-overlay"></div>
            <div className="mt-32 w-full flex justify-center items-center flex-col">
              <div className="text-center">
                <LargeHeading
                  size="default"
                  className="three-d text-[#585858] dark:text-slate-200"
                >
                  Scan your pdf&apos;s, and get <br />
                  back perfect notes.
                </LargeHeading>
              </div>
              <div className="border-b-2 border-slate-400 dark:border-slate-600 w-72 mt-4"></div>

              <div className="max-w-full mt-12 flex gap-60 h-full">
                <div className="items-center justify-center flex flex-col w-full h-full">
                  <LargeHeading
                    size="sm"
                    className="text-[#585858] text-2xl text-left dark:text-slate-200"
                  >
                    Submit your pdf here.
                  </LargeHeading>
                  <div className="mt-10 h-full w-full flex justify-center items-center">
                    <UploaderPage />
                  </div>
                </div>

                <div className="max-w-lg mx-auto">
                  <Chatpdf />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ImageUrlProvider>
  );
}
