pipeline {
  agent any
 
  stages {
    stage('Cloning git') {
      steps {
       git 'https://github.com/ElenaDarashenka/belaviaTest'
      }
    }
     stage('Install dependencies') {
         steps {
      echo 'Installing dependencies...'
      bat 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         bat 'npm test'
      }
    }
  }
}