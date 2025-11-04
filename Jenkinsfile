pipeline {
    agent any

    environment {
        REGISTRY = "local"
        API_IMAGE = "jenkins-multistage-demo-api"
        UI_IMAGE = "jenkins-multistage-demo-ui"
    }

    triggers {
        pollSCM('H/2 * * * *') // checks for new commits every 2 minutes
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'dev', url: 'https://github.com/yourusername/jenkins-multistage-demo.git'
            }
        }

        stage('Merge Feature Branch') {
            steps {
                script {
                    sh '''
                    git fetch origin feature-api
                    git merge origin/feature-api --no-edit || true
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'curl -f http://localhost:5000/health || exit 1'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose down && docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo "✅ Build and deployment successful!"
        }
        failure {
            echo "❌ Build failed. Check logs for details."
        }
    }
}
