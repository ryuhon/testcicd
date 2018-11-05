FROM node:carbon

# 앱 디렉토리 생성 
WORKDIR /app

# 앱 의존성 설치 
COPY ./node/packge*.json ./

# 앱 소스 추가 
COPY ./node/*js ./

EXPOSE 8000
CMD [ "npm" , "start" ] 
