FROM node:14.15.4-alpine

# Set working directory to /app
WORKDIR /app

# Change time zone
RUN apk add --update tzdata
ENV TZ=Europe/Berlin

# install git openssh ane etc ...
RUN apk update
RUN apk add --no-cache bash dos2unix git nano libxext-dev  gettext curl

# copy applications resources
COPY ./app /app

RUN ls -alh

# install project dependencies
RUN npm install -ci

# build application
RUN npm run build

# expose container sport 3000
EXPOSE 3000
EXPOSE 5050




