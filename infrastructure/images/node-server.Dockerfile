# STEP 1 build app

FROM node:alpine as buildContainer
RUN apk update && apk add --no-cache make git

## Create app directory
WORKDIR /app

## Install app dependencies
COPY ./package.json ./package-lock.json /app/
RUN cd /app && npm set progress=false && npm install

## Copy project files into the docker image
COPY . /app
# Need to clean dist folder because Angular Ivy generetaes partial local builds in that folder that may collide with build generated within Docker
# TODO: Considerar agregar && npm prune --production
RUN cd /app && rm -r dist && npm run build:ssr

# STEP 2 build a smaller image

FROM node:alpine
# Need curl for the healthcheck
RUN apk update && apk add --no-cache make git curl

## Create app directory
WORKDIR /app

## Copy dependency definitions
COPY --from=buildContainer /app/package.json /app

## From 'builder' copy all the code needed to run the app
COPY --from=buildContainer /app/dist /app/dist

## Serve the app
CMD ["npm", "run", "serve:ssr"]
