# Instalação do TerrooNvim
> Procure o nome correspondente dos pacotes na sua distro ou sistema operacional.

---

> Remova seu Neovim do APT ou do seu gerenciador de pacotes correspondente e atualize seu repositório
```bash
sudo apt remove neovim --purge
sudo apt autoremove
sudo apt clean
sudo apt autoclean
sudo apt update
```


> Pacotes essenciais
```bash
sudo apt install git curl gcc g++ lua-filesystem clang clangd build-essential cmake pkg-config libtool libunibilium4 libunibilium-dev ninja-build gettext libtool libtool-bin autoconf automake unzip doxygen lua-term lua-term-dev luarocks
```

---

> Fonts
```bash
git clone https://github.com/terroo/fonts -b fonts --single-branch
mkdir -p $HOME/.local/share/fonts
cd fonts/fonts && mv * $HOME/.local/share/fonts/
fc-cache -fv
# Altere a fonte do seu Terminal para JetBrains Mono Medium Nerd Font 13
```

---

> Compilar o Neovim
```bash
git clone https://github.com/neovim/neovim
cd neovim
make CMAKE_BUILD_TYPE=RelWithDebInfo
sudo make install
cd .. && rm -rf neovim
```

---

> Instalando o TerrooNvim
```bash
# 1. Baixe o script que está compactado nos recursos desse vídeo
# 2. Descompacte e rode:
bash terroo-nvim.sh #3
# 4. Quando terminar a instalação dos plugins, tecle: q e depois ESC :q, para sair
# 5. Aguarde a mensagem: 'has been installed'
# 6. Pronto!
```

---

> O bash script
```bash
#!/usr/bin/env bash

backup(){
  if [[ -d $HOME/.config/nvim ]]; then
    echo "Creating a copy of 'nvim'..."
    mv $HOME/.config/nvim $HOME/.config/bkp-nvim
  fi
}

cleaning(){
  rm -rf $HOME/.local/share/nvim/ $HOME/.config/nvim/ && reset
}

install_packer(){
  echo "Installing: packer.nvim"
  if [[ ! -d $HOME/.local/share/nvim ]]; then
    git clone --depth 1 https://github.com/wbthomason/packer.nvim ~/.local/share/nvim/site/pack/packer/start/packer.nvim
  fi
}

copy_files(){
  echo "Copying files"
  cp -r ./terroo-nvim $HOME/.config/nvim
  nvim +PackerInstall
  # q && :q
}

enable_configs(){
  echo "Enabling configs"
  sed -i '2,6s/^--//g' $HOME/.config/nvim/init.lua
  mkdir -p $HOME/.config/clangd
  mkdir -p $HOME/.config/Clangd
  echo -e "g++\n-std=c++17" > $HOME/.config/clangd/compile_flags.txt
  echo "gcc" > $HOME/.config/Clangd/compile_flags.txt
  reset
  nvim
  # Waiting: has been installed!
  # bash terroo-nvim.sh # Don't use 'sh', only 'bash' command
}

backup
cleaning
install_packer
copy_files
enable_configs
```

---
