pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Assumes NodeJS is configured in Jenkins Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from SCM (e.g., Git)
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Run Jest tests to generate junit.xml
                sh 'npm test'
            }
        }
    }
    post {
        always {
            // Archive JUnit XML results for Jenkins test reporting
            junit 'test-results/junit.xml'
        }
    }
}