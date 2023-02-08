FROM mcr.microsoft.com/playwright:v1.30.0-focal

COPY . /auto
WORKDIR /auto
RUN npm install && \
 npx playwright install 

CMD ["npx", "playwright", "test", "--workers=1", "--reporter=html", "--retries=1"]