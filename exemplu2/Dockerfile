
# Specificăm imaginea de bază: folosim Node.js versiunea 18
# Toate straturile ulterioare se construiesc peste această imagine
FROM node:18

# Setăm directorul de lucru în container la /usr/src/app
# Toate comenzile următoare (COPY, RUN, CMD) vor rula din acest director
WORKDIR /usr/src/app

# Copiem fișierele package*.json în directorul de lucru („./” înseamnă directorul curent 
# (/usr/src/app))
COPY package*.json ./

# Executăm comanda „npm install” pentru a instala dependențele definite în package.json
# Creăm un nou strat în imagine cu node_modules
RUN npm install

# Copiem toate fișierele din directorul curent al gazdei (unde e Dockerfile-ul) în /usr/src/app
# Atenție: „.” include tot, inclusiv fișierele deja copiate (package*.json)
COPY . .

# Indicăm faptul că aplicația din container va asculta pe portul 8080
# Nu publicăm portul automat; necesită -p la docker run pentru acces extern
EXPOSE 8080

# Definește comanda implicită care rulează când containerul pornește
# „node server.js” lansează aplicația Node.js din fișierul server.js
CMD [ "node", "server.js" ]
