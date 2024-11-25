## Install angular CLI
npm install -g @angular/cli

## Install dependencies

npm install

## install server 

go to server directory and run

npm install

## install azure key

### UDI-IA-PROJECT

copy file environment.development.example.ts and rename it to environment.development.ts
and set variables

azureLanguageApiUrl: '<languaje api url>',
azureLanguageApiKey: 'languaje api key',

### server

copy .envexample into and name it .env
set keys

AZURE_API_KEY= <azure openai whisper apikey>
AZURE_ENDPOINT= <azure openai whisper endpoint>

