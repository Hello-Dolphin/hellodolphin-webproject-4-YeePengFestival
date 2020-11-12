// Define variables
def scmVars

// Start Pipeline
pipeline {

  // Configure Jenkins Slave
  agent any
    environment {
    ENV_NAME = "${BRANCH_NAME == "main" ? "dev" : "${BRANCH_NAME}"}"
  }

  // Start Pipeline
  stages {

    stage('Clone hellodolphin-webproject-4-YeePengFestival code') {
      // Steps to run build
      steps {
          // Use script to run
          script {
            // Git clone repo and checkout branch as we put in parameter
            scmVars = git branch: "${BRANCH_NAME}",
                          url: 'https://github.com/Hello-Dolphin/hellodolphin-webproject-4-YeePengFestival.git'
          } // End script
      } // End steps
    } // End stage

    stage('Install dependencies and build files') {
      steps {
          sh 'whoami'
          sh 'pwd'
          sh 'ls'
          sh'''
            #!/bin/bash
            whoami
            . ~/.bash_profile
            yarn
          '''
          sh'''
            #!/bin/bash
            . ~/.bash_profile
            yarn build
          '''
      } // End steps
    } // End stage

  } // End stages
} // End pipeline
