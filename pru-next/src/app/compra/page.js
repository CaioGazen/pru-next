import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function compra() {
  return (
    <main className="page">
      <div>
        <div className="pigeons-list">
          <a href="./single-pigeon.html" className="pigeon">
            <Image src={black} alt="pigeon" className="img pigeon-img" />
            <h5>black</h5>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              price : R$ 15,00 | name : Clóvis
            </p>
          </a>

          <a href="./single-pigeon.html" className="pigeon">
            <Image
              src={simple_pigeon}
              alt="pigeon"
              className="img pigeon-img"
            />
            <h5>grey</h5>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              price : R$ 42,00 | name: Carlitos{" "}
            </p>
          </a>

          <a href="./single-pigeon.html" className="pigeon">
            <Image src={brown} alt="pigeon" className="img pigeon-img" />
            <h5>brown</h5>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              price : R$ 38,00 | name : Cleitin{" "}
            </p>
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Método de pagamento</CardTitle>
            <CardDescription>Total:</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6" style={{ gap: "0.5rem" }}>
            <RadioGroup
              defaultValue="card"
              className="flex justify-between space-around items-center "
              style={{ justifyContent: "space-around" }}
            >
              <div>
                <RadioGroupItem
                  value="card"
                  id="card"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mb-3 h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                  Cartão
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Icons.paypal className="mb-3 h-6 w-6" />
                  Paypal
                </Label>
              </div>
            </RadioGroup>
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Nome Sobrenome" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">Número do Cartão</Label>
              <Input id="number" placeholder="" />
            </div>
            <div className="grid grid-cols-3 gap-4" style={{ gap: "0.5rem" }}>
              <div className="grid gap-2">
                <Label htmlFor="month">Data de validade</Label>
                <Select>
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Mês" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Janeiro</SelectItem>
                    <SelectItem value="2">Fevereiro</SelectItem>
                    <SelectItem value="3">Março</SelectItem>
                    <SelectItem value="4">Abril</SelectItem>
                    <SelectItem value="5">Maio</SelectItem>
                    <SelectItem value="6">Junho</SelectItem>
                    <SelectItem value="7">Julho</SelectItem>
                    <SelectItem value="8">Agosto</SelectItem>
                    <SelectItem value="9">Setembro</SelectItem>
                    <SelectItem value="10">Outubro</SelectItem>
                    <SelectItem value="11">Novembro</SelectItem>
                    <SelectItem value="12">Dezembro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">Ano</Label>
                <Select>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Ano" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem
                        key={i}
                        value={`${new Date().getFullYear() + i}`}
                      >
                        {new Date().getFullYear() + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="CVC" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Continuar</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
