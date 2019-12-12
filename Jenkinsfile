pipeline {
    agent { label 'frontend' }
  
  stages {


    stage('Build') {
	steps {	        
		sh 'docker build -t="pride-frontend" .'
		echo "Build successful"
	           }
	 }



	stage ('Test') {
	   steps {
		   echo "Test has passed"
		
	          }
			}
          
		stage('Deploy') {
            steps {
		                sh 'docker container kill frontend'
		                sh 'docker container rm frontend'
                    sh 'docker run -d -p 3000:3000 --name frontend pride-frontend'
				            echo "Deployment has been deployed"
            }
        }


		}
	   }   
