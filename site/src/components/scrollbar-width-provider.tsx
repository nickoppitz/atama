"use client";

import { useEffect } from "react";

/**
 * Expõe a largura física da scrollbar do sistema como --scrollbar-width no :root.
 *
 * Por que é necessário:
 *   - `position: fixed` usa o VIEWPORT como containing block (100vw inteiro).
 *   - Elementos block dentro do <body> usam body width = viewport − scrollbar.
 *   - Em sistemas com scrollbar física (Windows / Mac "sempre visível"),
 *     isso causa um desalinhamento de ~15–17px entre fixed e block headers.
 *
 * Técnica: div oculto com overflow:scroll — mede a largura real da scrollbar
 * do SO, independente de a página ter ou não scrollbar visível no momento.
 * Em Mac com overlay scrollbars: retorna 0 → sem efeito.
 */
export function ScrollbarWidthProvider() {
  useEffect(() => {
    const div = document.createElement("div");
    div.style.cssText =
      "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;visibility:hidden;pointer-events:none";
    document.body.appendChild(div);
    const width = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    document.documentElement.style.setProperty("--scrollbar-width", `${width}px`);
  }, []);

  return null;
}
