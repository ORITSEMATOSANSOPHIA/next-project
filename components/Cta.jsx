import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-red-100 dark:bg-secondary/40">
        <div className="container mx-auto">
        <div className="flex flex-col items-center">
            <h2 className="h2 max-w-xl text-center mb-8">Wish turn your ideas into reality? I'm at your service</h2>
            <Link href='/contact'>
            <Button>Hire Me</Button>
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
