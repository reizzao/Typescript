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


