import WhiteContent from "@/components/pages/white/home";
import HeaderScript from "@/components/header-script";
import { getUserLayer } from "@/utils/get-user-layer";
import { LayerProvider } from "@/context/layer-provider";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { headers, cookies } from "next/headers";
import "@/app/globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

// ROTAS QUE SEMPRE RENDERIZAM O CHILDREN (IGNORAM O WHITECONTENT) (TURBO É EXEMPLO, PODE ADICIONAR AS TUAS OUTRAS PÁGINAS AQUI ABAIXO)
const exceptionRoutes = ['/congratulations', '/turbo', '/thanks'];

export async function generateMetadata(): Promise<Metadata> {
  const cks = await cookies();
  const hdrs = await headers();
  const userLayer = await getUserLayer({ cks, hdrs });
  
  // GET CURRENT PATH
  const url = hdrs.get('x-url') || '';
  const currentPath = new URL(url || 'http://localhost').pathname;
  const isExceptionRoute = exceptionRoutes.includes(currentPath);
  
  // Se for página white (userLayer === 1) e não for rota de exceção, usa "Check this out"
  const isWhitePage = userLayer === 1 && !isExceptionRoute;
  
  return {
    title: isWhitePage ? "Check this out" : "Rewards Program",
    description: "This new tool is scaring experts around the world.",
  };
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // ENVIRONMENT VERIFY
  const isProduction = process.env.NODE_ENV === 'production';

  // GET DOMAIN ID
  const cks = await cookies();
  const hdrs = await headers();
  const host = hdrs.get('x-host') || '';
  const catParam = cks.get('xcat_valid');
  const content = catParam?.value || '';
  const params = hdrs.get('x-params') || '';
  
  // GET USER LAYER
  const userLayer = await getUserLayer({ cks, hdrs });

  // GET CURRENT PATH
  const url = hdrs.get('x-url') || '';
  const currentPath = new URL(url || 'http://localhost').pathname;
  const isExceptionRoute = exceptionRoutes.includes(currentPath);

  // BODY CLASS
  const bodyClassName = `flex flex-col min-w-[350px] items-center select-none ${redHatDisplay.variable} antialiased`;
    
  return (
    <html lang="es">
      {isProduction && (
        <head>
          <HeaderScript />
        </head>
      )}
      <body className={bodyClassName} suppressHydrationWarning>
        {userLayer === 1 && !isExceptionRoute ?
          <WhiteContent />
        : (
          <LayerProvider
            host={host}
            layer={userLayer}
            params={params}
            content={content}
          >
            {children}
          </LayerProvider>
        )}
      </body>
    </html>
  );
  
};