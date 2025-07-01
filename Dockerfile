FROM svr-ocp-nex-d01.muf.co.id:5000/base-img/nodejs:20.13.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

# Expose the app port
EXPOSE 15069

# Run the app
CMD ["npm", "start"]