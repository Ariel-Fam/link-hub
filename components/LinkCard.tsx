import { Card, CardTitle, CardContent} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type LinkData = {
    name: string;
    type: string;
    category: string;
    description: string;
    status: string;
    src: string;
    url: string;
}

export default function LinkCard({name, type, category, description, status, src, url}: LinkData){

    return(
        <div className="flex flex-col items-center bg-gradient-to-br from-red-500 via-green-500 to-blue-500 p-10 rounded-xl shadow-lg ">

                    <div className="flex flex-col items-center gap-7">

                        
                        <div>

                            <Link href={url}>
                                <Image className="rounded-md hover:scale-105 hover:shadow-lg hover:shadow-black/50 transition-all duration-300" src={src} alt={name} width={400} height={100} />
                            
                            </Link>

                        </div>


                   
                        <Card className="w-[70vw] bg-white text-black hover:scale-105 hover:shadow-lg hover:shadow-black/50 transition-all duration-300">

                          

                            <CardContent className="flex flex-col  gap-2">

                                <CardTitle>{name}</CardTitle>



                                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
                                    
                                    <div className="bg-blue-400 p-2 hover:scale-105  hover:shadow-lg hover:shadow-black/50  transition-all duration-300 rounded-md">

                                        <Link href={url}>
                                        
                                        
                                            <p className="">{description}</p>
                                        
                                        </Link>

                                    </div>



                                    <div className="flex flex-col  gap-2">


                                        <p>{`Status: ${status}`}</p>

                                        <p>{`Category: ${category}`}</p>

                                        <p>{`Type: ${type}`}</p>

                                        <Link href={url}>
                                            <p className="text-blue-500  hover:text-blue-700 hover:underline transition-all duration-300">{`URL: ${url}`}</p>
                                        </Link>



                                        <Link href={url}>
                                            <div className="flex items-center justify-center mt-4">

                                                <Button className=" cursor-pointer text-white hover:bg-orange-500 hover:text-black hover:scale-115 hover:shadow-lg hover:shadow-black/50 transition-all duration-300">Visit Page</Button>
                                                
                                            </div>

                                        
                                        </Link>
                                    </div>


                                </div>


                                

                            </CardContent>
                        </Card>


                    </div>

     

        
      </div>

    )

}