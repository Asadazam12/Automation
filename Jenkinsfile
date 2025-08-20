pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Matches the Node.js installation name in Jenkins Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm // Pulls code from the configured Git repository
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install' // Use bat for Windows
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test' // Use bat for Windows
            }
        }
        stage('Archive Test Results') {
            steps {
                junit 'test-results/junit.xml' // Archives test results for Jenkins UI
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'test-results/junit.xml', allowEmptyArchive: true // Archives junit.xml even if tests fail
        }
    }
}