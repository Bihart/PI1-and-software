#!/usr/bin/env bash

rm -f logs/*

cd client/ && \
    echo [ $(date) ] >> ../logs/client.logs && \
    npm run start >> ../logs/client.logs 2>&1 &

cd server/API/ && \
    echo [ $(date) ] >> ../../logs/server.logs && \
    python3 App.py >> ../../logs/server.logs 2>&1 &

echo Todo listo uwu
