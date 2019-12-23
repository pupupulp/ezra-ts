FROM mhart/alpine-node:latest AS BUILD_STAGE

MAINTAINER Eagan Martin

ARG APP_PATH
ENV APP_PATH=${APP_PATH} \
    PRODUCTION_ONLY=true

RUN apk update \
    && apk upgrade

WORKDIR ${APP_PATH}
COPY . ./
RUN npm cache clean --force \
    && yarn install --production=${PRODUCTION_ONLY} \
    && npm run tsc

FROM mhart/alpine-node:slim AS RELEASE_STAGE

MAINTAINER Eagan Martin

ARG APP_PATH
ARG APP_PORT
ENV APP_PATH=${APP_PATH} APP_PORT=${APP_PORT}

WORKDIR ${APP_PATH}
COPY --from=0 ${APP_PATH} .
COPY . .

CMD ["node", "./build/app.js"]