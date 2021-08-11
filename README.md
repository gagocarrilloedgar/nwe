## Remote Github Repository Creator CLI

CLI (Command Line Interface) basada en git pero con super poderes. El objetivo es agrupar y simplificar comandos para facilitar el trabajo con git
## Descripción detallada 

El obejtivo del proyecto es poder facilitar la creación de proyectos y subirlos a githubde forma fácil. Algunas funcionalidades actuales son:

- Clon de un proyecto y cambio de nombre 
- Clon del proyecto, cambio de nombre y subir automáticamente a github
- Git init y subir a github
- Github token auth

### Cosas que vienen

- Clon de Boilerplates y subir a github para proyecto de:
      - Backend
      - Frontend
      - Mobile


## Badges 

[![CodeFactor](https://www.codefactor.io/repository/github/gagocarrilloedgar/gitx/badge)](https://www.codefactor.io/repository/github/gagocarrilloedgar/gitx)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gagocarrilloedgar_gitx&metric=alert_status)](https://sonarcloud.io/dashboard?id=gagocarrilloedgar_gitx)

## Install


```shell
    # Install command
    npm i gitx
```

## Usage

```sh
      # clone and push automatically to your github
      gitx clone [url] 
```

```sh
      # Init a repo and push it to github (takes folder name)
      gitx init ./
```

```sh
      # Adds all the current changes, commits with the set up description and push to the repo
      gitx push [Description, no need for placing " "]
```


```sh
      # Adds all the current changes, commits with the set up description and push to the current branch you are working on at the moment
      gitx push -o [Description, no need for placing " "]
```


```sh
      # Combines branch + checkout [branch_name]
      gitx branch [branch_name]
```


## Contribución 

Para contribuir simplemente puedes:

1. Clonar el repositorio
2. Crear tu propia rama --> añade un nombre que tenga sentido con el update o feature que quieras implementar
3. Hacer push y pull request y pide un code review para poder incluir los cambios

Tenéis los Code of condut en la misma repo
## Contact info 

Puedes contactar conmigo en LinkedIn

[Edgar Gago Carrillo]()

o bien en mi correo:

> edgargc.upc@gmail.com

## Licence 

[MIT](https://opensource.org/licenses/MIT)
