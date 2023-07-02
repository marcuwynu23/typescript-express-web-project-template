FROM node:alpine

# set working directory
WORKDIR /app


# copy build files to working directory
COPY ./build .

# run web server
CMD ["node", "index.js"]

# expose port 80
EXPOSE 80