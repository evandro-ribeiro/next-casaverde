import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-md items-center">
      <Input type="email" placeholder="Insira seu e-mail" />
      <Button type="submit">Assinar newsletter</Button>
    </div>
  )
}