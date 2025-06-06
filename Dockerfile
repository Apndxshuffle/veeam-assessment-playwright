FROM mcr.microsoft.com/playwright:v1.52.0-noble

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "e2e", "chrome"]