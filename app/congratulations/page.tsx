import White from "./content/White";
import Black from "./content/Black";
import { getUserLayer } from "@/utils/get-user-layer";
import { cookies, headers } from "next/headers";

export default async function Page() {
  // Recupera a camada do usuário no servidor
  const cks = await cookies();
  const hdrs = await headers();
  const userLayer = await getUserLayer({ cks, hdrs });
  const whiteContent = userLayer === 1;

  // WHITE CONTENT
  if (whiteContent) {
    return <White />;
  }

  // BLACK CONTENT
  return <Black />;
}