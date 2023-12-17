pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clones the source code from GitHub
                git url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Build and Run Docker Containers') {
            steps {
                // Building and running Docker containers
                sh 'docker-compose up -d --build'
                echo 'Docker containers are up and running.'
            }
        }

        // Optional: Additional stages for testing or other operations
    }
}
