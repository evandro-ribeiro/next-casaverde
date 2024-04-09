import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-md items-center">
      <Input type="email" className="text-center" placeholder="Insira seu e-mail"/>
      <Button type="submit"  className="w-56 md:w-auto">Assinar newsletter</Button>
    </div>
  )
}