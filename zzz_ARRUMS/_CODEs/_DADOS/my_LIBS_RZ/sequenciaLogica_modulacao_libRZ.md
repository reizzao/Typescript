---
marp: true
---
# SEQUENCIAS LOGICAS MODULAR
****************************

## App Root Dependências via Import_Map.json
> SequeciaLogica MOodulariza_Import_Map_JSON
1. entityDeps && replicas :: traz os imports reais
2. _rootDeps :: mescla os imports reais e Replica
3. import_map :: conecta-se aos mesclados -> sera habilitado por Ultimo pelo settings do editor e Final.
4. vscode/settings -> habilita o import_map.json


## Modularização Lib
> ARQUIVOS DA RAIZ
1. main ->  modules/components -> feature.ts

> DEPENDÊNCIAS
### Arquivo DepEntidadeFeature
1. > entityFeatureDeps - #Unique  #PoloUnico #Replicas -> alimenta o _RootDependencias
   1. @returns <importando Features > + <gerando alias Replica>  + <exportando Replica gerada para uso na app>.

---



