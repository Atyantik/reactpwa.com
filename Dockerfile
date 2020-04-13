FROM nginx:alpine

COPY . /app

RUN apk update && \
  apk add \
  autoconf \
  nodejs \
  npm \
  libtool \
  automake \
  gcc \
  libc-dev \
  make \
  nasm \
  zlib-dev

RUN cd /app/website && \
 npm install && \
 npm run build

RUN rm -rf /usr/share/nginx/html && mv /app/website/build/react-pwa /usr/share/nginx/html

RUN npm cache clean --force

RUN rm -rf /app

RUN apk del \
  autoconf \
  nodejs \
  npm \
  libtool \
  automake \
  gcc \
  libc-dev \
  make \
  nasm \
  zlib-dev

RUN rm -f /var/cache/apk/*
