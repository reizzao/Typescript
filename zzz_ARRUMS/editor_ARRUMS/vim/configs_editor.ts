
const configs_editor = [
  {
    categoria: "nvim_astronvim",
    titulo: "local arquivos share e backups astronvim",
    contexto: "~/.local/share/nvim/lazy/lazy.nvim/lua/lazy/core/",
  },
  {
    categoria: "nvim_astronvim",
    titulo: "cache astronvim",
    contexto: "~/.local/share/nvim/lazy/lazy.nvim/lua/lazy/core/cache",
  },
  {
    categoria: "nvim_astronvim",
    titulo: "backup arquivo swp swpa astronvim",
    contexto: "~/.local/state/nvim/swap/",
  },
  {
    categoria: "nvim_astronvim",
    titulo: "precisa add ao options do astronvim",
    contexto: `
    -- KEYMAPS  E SETS ->  VIMSCRIPT VIA API VIM **************

    vim.cmd([[ map <C-a> ggVG ]])
    -- desc: seleciona tudo

    vim.cmd([[ set noswapfile ]])
    -- desabilita criação de arquivo  backup .swp

    -- vim.cmd([[ autocmd BufNewFile *.sh :call append(0, '#!/usr/bin/env bash') ]])
    -- #todo

    vim.cmd([[ set nowrap ]])
  -- Exibir linhas longas como apenas uma linha : Display long lines as just one line

  vim.cmd([[ set laststatus=0 ]])
  -- Sempre exibir a linha de status : Always display the status line
`,
  },

]