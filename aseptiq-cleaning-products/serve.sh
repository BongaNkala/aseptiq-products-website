#!/bin/bash

echo "Starting Aseptiq Products RSA website..."
echo "Opening website in your default browser..."

# Detect OS and open browser
if [[ "$OSTYPE" == "darwin"* ]]; then
    open index.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open index.html
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    start index.html
else
    echo "Please open index.html manually in your browser"
fi

# Start a simple Python HTTP server (optional)
if command -v python3 &> /dev/null; then
    echo "Starting local server at http://localhost:8000"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Starting local server at http://localhost:8000"
    python -m SimpleHTTPServer 8000
else
    echo "Python not found. You can still open index.html directly in your browser."
fi
