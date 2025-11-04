pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out branch: ${env.GIT_BRANCH}"
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "Building the application..."
                sh 'echo Building branch ${GIT_BRANCH}'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                sh 'echo Running unit tests for ${GIT_BRANCH}'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying application..."
                sh 'echo Deploying ${GIT_BRANCH} to dev environment'
            }
        }
    }

    post {
        always {
            echo "Pipeline completed for branch: ${env.GIT_BRANCH}"
        }
    }
}
