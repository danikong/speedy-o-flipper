FROM node:latest

RUN npm i -g ergogen

VOLUME ["/config"]
WORKDIR /config

CMD ["/bin/bash"]
