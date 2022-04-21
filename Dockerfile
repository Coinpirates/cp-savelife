FROM node:14.15.0

ARG PORT=3000
ENV PORT=${PORT}

WORKDIR /home/cp-savelife
COPY . /home/cp-savelife

RUN cd /home/cp-savelife && npm install
RUN cd /home/cp-savelife && npm run build:prod

CMD ["npm", "start"]

EXPOSE ${PORT}