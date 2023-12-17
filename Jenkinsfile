pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/saada865/combinedProjectJenkins.git'
            }
        }

        stage('Build and Run Docker Containers') {
            steps {
                sh 'docker-compose up -d --build'
                echo 'Docker containers are up and running.'
            }
        }

    }
}
