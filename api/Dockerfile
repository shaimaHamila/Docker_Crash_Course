# This docker file is like a set of instructions which tells docker how to build our image with all of its different layers.
FROM node:latest


RUN npm install -g nodemon

WORKDIR /app

# This for caching the npm install command
COPY package.json .

# To install the dependencies into the image we run npm install
# We're allowed to specify commands that we want to run our image
# To specify a command we use the keyword RUN
RUN npm install

# Copy some files to the image
# The first dot is a relative path to the diractory i want to copy my source files from (current diractory in our case .)(can be ./src)
# the second dot is the path inside the image where i want to copy my source code to (The images have their own folder structure)( . root diractory and it is /app in our case coz we set it in the workdir)
COPY . .



# Tells docker which port the container should expose
EXPOSE 5000

# REMEBER the image is not a running application it's just a blueprint for a container

# The container is the thing that actually runs our application
# The container is a running instance of the image

# CMD allows as to specify a command that should be run at runtime when the container begins to run
CMD ["npm", "run", "dev"]

# To build the image we run the command docker build -t <name of the image> <path to the docker file>
# the -t flag is used to tag the image with a name