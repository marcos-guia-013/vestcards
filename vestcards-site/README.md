# VestCards 🎓

Plataforma de simulados para vestibulares, feita com React, TypeScript e Vite. Preparada para deploy na Vercel.

## O que funciona

- ENEM 2025, 1º dia, Caderno Azul: **90 questões oficiais** (prova em imagens, gabarito oficial; inglês/espanhol).
- Biblioteca de provas; importação de PDF da prova e PDF do gabarito.
- Extração **heurística** de questões e respostas de PDFs com texto selecionável.
- Revisão e edição de páginas, áreas e gabaritos antes de salvar.
- Filtros por área, ordem aleatória/original, questões erradas/não respondidas e quantidade.
- Cartões de resposta A–E, correção imediata, estatísticas e histórico local.
- Visualização do PDF original com controles de página e zoom.
- Design responsivo, dark mode.

## Rodar localmente

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Abra o endereço indicado no terminal (geralmente `http://localhost:5173`).

Para gerar uma versão de produção:

```bash
npm run build
npm run preview
```

## Publicar na Vercel

1. Envie **todos os arquivos desta pasta** para um repositório no GitHub (não envie apenas o `index.html`).
2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. Framework: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Clique em **Deploy**. O arquivo `vercel.json` já configura as rotas da aplicação.

## Como importar provas

1. Entre em **Importar prova**.
2. Selecione um PDF da prova. Opcionalmente, adicione o PDF do gabarito ou digite respostas como `1 A`, `2 C`, `3 E`.
3. Clique em **Processar prova**. O navegador tenta identificar questões com marcadores como “QUESTÃO 01”.
4. **Revise manualmente** as páginas, matérias e letras identificadas. Só depois salve.
5. O PDF importado fica no **IndexedDB do navegador**. Não é publicado para outros usuários.

### Limitações honestas desta versão

- **Não há IA no servidor**: a importação funciona melhor com PDFs que têm texto selecionável. PDFs escaneados, tabelas de gabarito muito complexas, duas colunas ou layouts diferentes podem exigir revisão manual.
- O visualizador exibe a **página original da prova**, não recorta cada questão perfeitamente. Isso preserva gráficos e fórmulas, mas algumas páginas têm várias questões.
- O botão “Não entendi” mostra orientações de revisão, **não uma resolução gerada por IA**.
- Provas importadas, arquivos e progresso ficam **somente no navegador/dispositivo atual**. Limpar os dados do site pode apagá-los.
- Não há login, biblioteca compartilhada, sincronização entre dispositivos ou backend nesta versão.
- O material embutido é apenas o **1º dia do ENEM 2025**; Matemática e Ciências da Natureza exigem o 2º dia.
- A aplicação é um projeto independente e não tem vínculo com o INEP.

## Estrutura

```
src/
  App.tsx       # Telas e lógica de estudo
  style.css     # Interface responsiva
  processor.ts  # Extração heurística dos PDFs
  storage.ts    # IndexedDB + localStorage
  builtin.ts    # Prova ENEM 2025 embutida
  types.ts      # Tipos de dados
public/provas/enem-2025-d1/paginas/ # Imagens do caderno oficial
```

## Privacidade e custos

O projeto funciona como um site estático na Vercel. A importação é processada no navegador; nenhum arquivo é enviado a um servidor do VestCards. A Vercel pode ter limites de uso conforme seu plano.
