FROM cypress/included:10.0.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN yarn install
RUN cypress install
RUN ["yarn", "cy:test-headless"]

