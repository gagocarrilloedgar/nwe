## Remote Github Repository Creator CLI

Pasos a seguir para utilizar de forma automática sonarclound 

1. Instalar JAVA 11

      > https://www.oracle.com/es/java/technologies/javase-jdk11-downloads.html

2. Instalar SonarQube

      > https://mobiosolutions.com/install-sonarqube-installation-guide-mac-os/

       Pasos 1, 2, 3 (con nano), saltar paso 4 y terminar paso 5

       Agregar 2 variables en el archivo sonar-project.properties de la repo, 
       debajo de la que pone sonar.projectKey=my:project

       sonar.login=admin
       sonar.password=pass

3. Instalar jq (brew install jq)

     > https://stedolan.github.io/jq/download/ 

4. Crear un archivo .jq con el siguiente script:

      { "baseComponent": .baseComponent, "components": [ .components[] ] }

5. Guardarlo con el nombre sonar-report-builder.jq y meterlo en la carpeta Home (~/)

6. Generar el reporte desde la repo con npm run sonar-scanner (asegurarse de tener levantado el servidor de SonarQube en localhost:9000)

7. Ejecutar en terminal:

cd ~/

curl -u admin:[PASS] 'http://localhost:9000/api/measures/component_tree?ps=100&s=qualifier%2Cname&component=[NOMBREDELPROYECTO]&metricKeys=ncloc%2Cbugs%2Cvulnerabilities%2Ccode_smells%2Csecurity_hotspots%2Ccoverage%2Cduplicated_lines_density&strategy=children' | jq -f sonar-report-builder.jq > sonar-report.json

- Ejectuar sonar: cd /Applications/SonarQube/bin/macos | sh ./ sonar.hs console


curl -u admin:nuwesonarqube 'http://localhost:9000/api/measures/component_tree?ps=100&s=qualifier%2Cname&component=keplerJS&metricKeys=ncloc%2Cbugs%2Cvulnerabilities%2Ccode_smells%2Csecurity_hotspots%2Ccoverage%2Cduplicated_lines_density&strategy=children' | jq -f sonar-report-builder.jq > sonar-report.json