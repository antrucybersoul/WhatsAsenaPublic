FROM fusuf/whatsasena:latest

RUN git clone https://github.com/abhimodzz/WhatsAsenaPublic /root/WhatsAsenaPublic
WORKDIR /root/WhatsAsenaPublic/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
