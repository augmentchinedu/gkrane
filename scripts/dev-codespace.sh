#!/usr/bin/env bash
set -e

PORT=3000
URL="http://localhost:$PORT"

# Start dev server
npm run dev &

DEV_PID=$!

echo "⏳ Waiting for $URL to become available..."

until curl -sI "$URL" >/dev/null 2>&1; do
  sleep 1
done

echo "🌍 Making port $PORT public..."
gh codespace ports visibility $PORT:public

wait $DEV_PID
