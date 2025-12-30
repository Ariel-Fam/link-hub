import Image from "next/image";
import { pageData } from "@/data/pageData";
import { Card, CardTitle} from "@/components/ui/card";
import LinkCard from "@/components/LinkCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" min-h-[100svh] w-full
        bg-[url('/background.png')] bg-cover bg-center bg-no-repeat
        flex flex-col items-center 
        px-6 gap-14 text-black">
      

      <Image className="mt-14" src="/softwareLogo.png" alt="logo" width={200} height={100} />

      <Card className=" flex flex-col items-center justify-center p-7 bg-gray-400 text-center border-purple-900">
        <CardTitle>Links to my apps and web pages.</CardTitle>
      </Card>

      {pageData.map((page)=>(
        <LinkCard key={page.id}
        name={page.name}
        type={page.type}
        category={page.category}
        description={page.description}
        status={page.status}
        src={page.src}
        url={page.url}
      />))}

      <Footer />
    </div>
  );
}
