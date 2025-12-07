"use client";

import { createContext, useContext, ReactNode } from "react";

type LayerContext = {
  host: string,
  layer: number,
  content: string,
  params: string,
  frontLink: string,
  promoLink: string,
};

const LayerContext = createContext<LayerContext | undefined>(undefined);

type LayerProviderProps = {
  host: string,
  layer: number,
  params: string,
  content: string,
  children: ReactNode,
};

export function LayerProvider({
  host,
  layer,
  params,
  content,
  children,
}: LayerProviderProps) {

  // HELPER FUNCTION TO ADD SRC PARAMETER
  const addSrcParam = (url: string, src: string): string => {
    if (!src) return url;
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}src=${src}`;
  };

  // SET LINKS WITH SRC PARAMETER
  const baseFrontLink = 'https://pay.hotmart.com/M103047413I?off=oklx29sw';
  const basePromoLink = 'https://pay.hotmart.com/M103047413I?off=rskh1e73';
  
  const frontLink = addSrcParam(baseFrontLink, content);
  const promoLink = addSrcParam(basePromoLink, content);

  const contextValue = {
    host,
    layer,
    params,
    content,
    frontLink,
    promoLink,
  };

  return (
    <LayerContext.Provider value={contextValue}>
      {children}
    </LayerContext.Provider>
  );

};

export function useLayer() {

  const layer = useContext(LayerContext);

  if (!layer) {
    throw new Error("useLayer deve ser usado dentro de LayerProvider");
  };
  
  return layer;

};