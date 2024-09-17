import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer() {
  return (
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center justify-evenly">
        <p className="text-sm text-muted-foreground">&copy; 2024 Gastei. Todos os direitos reservados.</p>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="text-sm hover:underline">
            Privacidade
          </Link>
          <Link href="/terms" className="text-sm hover:underline">
            Termos de Uso
          </Link>
          <Link href="https://github.com/gbrmaia/gastei-front" target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
