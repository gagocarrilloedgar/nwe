## Remote Github Repository Creator CLI | 

CLI (Command Line Interface) basada en git pero con super poderes. El objetivo es agrupar y simplificar comandos para facilitar el trabajo con git

[![CodeFactor](https://www.codefactor.io/repository/github/gagocarrilloedgar/nwe/badge)](https://www.codefactor.io/repository/github/gagocarrilloedgar/nwe) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gagocarrilloedgar_gitx&metric=alert_status)](https://sonarcloud.io/dashboard?id=gagocarrilloedgar_gitx) ![GitHub followers](https://img.shields.io/github/followers/gagocarrilloedgar?style=social) ![GitHub forks](https://img.shields.io/github/forks/gagocarrilloedgar/gitx?style=social) ![GitHub Repo stars](https://img.shields.io/github/stars/gagocarrilloedgar/gitx?style=social)

## Install

```shell
    # Install command
    npm i -g nwe
```

## Descripción detallada 

El obejtivo del proyecto es poder facilitar la creación de proyectos y subirlos a github de forma fácil además de simplificar el uso de git y hacer que las teareas de rutina como ahcer commits y add sean mucho más rápidas agrupando comandos. Algunas funcionalidades actuales son:

- Clon de un proyecto y cambio de nombre 
- Clon del proyecto, cambio de nombre y subir automáticamente a github
- Git init y subir a github
- Github token auth
- branch + checkout combinando
- add . commit --m "DECRIPTION" push combiando
- add . commit --m "DECRIPTION" push origin [branch] combiando (detectando automáticamente la rama)

### Cosas que vienen

- Clon de Boilerplates y subir a github para proyecto de:
      - Backend --> node, java, python, c#
      - Frontend --> vue, react, svelte, angular
      - Mobile --> flutter, swift, kotlin

## Usage

```sh
      # clone and push automaticamente a un repositorio nuevo de github desde otro url
      nwe clone [url] 
```

```sh
      # To-update (no funcionanando por el momento)
      nwe init ./
```

```sh
      # Agrega todos los cambios actuales, hace commit con la descripción de la configuración y se envía al repositorio
      nwe push [Descripción, no es necesario añadir " "]
```


```sh
      # Agrega todos los cambios actuales, hace commit con la descripción configurada y se envía a la rama actual en la que está trabajando en ese momento
      nwe push -o [Descripción, no es necesario añadir " "]
```


```sh
      # Combina branch + checkout [nombre_rama]
      nwe branch [nombre_rama]
```


## Contribución 

Para contribuir simplemente puedes:

1. Clonar el repositorio
2. Crear tu propia rama --> añade un nombre que tenga sentido con el update o feature que quieras implementar
3. Hacer push y pull request a dev y pedir un code review para poder incluir los cambios

Tenéis los Code of condut en la misma repo
## Contact info 

Puedes contactar conmigo en LinkedIn

[Edgar Gago Carrillo](https://www.linkedin.com/in/edgargagocarrillo/)

o bien en mi correo:

> edgargc.upc@gmail.com

## Licence 

[MIT](https://opensource.org/licenses/MIT)
