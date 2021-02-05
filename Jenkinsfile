pipeline {
    agent any

    environment {
        registry = 'registry.cn-shanghai.aliyuncs.com'
        imageName = "${registry}/thingworks/www-zhangkong365-com"
        registryCredential = '56682d69-4f4c-4146-a099-249933db6c2d'
        kubeCredential = '09ef6a86-7078-4b6e-b403-456ef419e30c'
        dockerImage = ''
        repoUrl = 'https://github.com/zhangkong365-big-front/jarvis-official-website.git'
        ImageTag = "${BUILD_NUMBER}"
    }

    stages {
        stage('Git Checkout Master') {
            steps {
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/master']], 
                    doGenerateSubmoduleConfigurations: false, 
                    extensions: [], 
                    submoduleCfg: [], 
                    userRemoteConfigs: [[credentialsId: 'github', url: repoUrl]]
                ])
            }
        }

        stage('Build & Create Image') {
            steps{
                script {    
                    sh "yarn install"
                    sh "npm run build"
                    dockerImage = docker.build(imageName, "artifact")
                }
            }
        }

        stage('Publish Image') {
            steps{
                script {
                    docker.withRegistry("https://${registry}", registryCredential ) {
                        dockerImage.push("${BUILD_NUMBER}")
                    }
                }
            }
        }

        stage('Deploy To Testing Env') {
            steps {
                kubernetesDeploy(
                    configs: 'deployment/testing/*.yaml', 
                    kubeconfigId: kubeCredential, 
                )
            }
        }

        stage('Deploy To Production Env') {
            steps {
                script {
                    timeout(activity: true, time: 15, unit: 'SECONDS') {
                        input '你觉得代码已经没有bug了，确定要部署到生产环境吗?'
                        kubernetesDeploy(
                            configs: 'deployment/production/*.yaml', 
                            kubeconfigId: kubeCredential, 
                        )
                    }
                }
            }
        }
    }
}