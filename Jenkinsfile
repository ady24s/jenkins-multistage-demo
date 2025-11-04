pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out branch: origin/dev'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'echo Simulating build process'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'echo Simulating test execution'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat 'echo Simulating deployment'
            }
        }
    }

    post {
        always {
            echo "Pipeline completed for branch: ${env.BRANCH_NAME}"
        }
    }
}
