FROM node:16-alpine

RUN --mount=type=secret,id=secrett, env=BLAAA
RUN  cat /etc/secrets/secrett
