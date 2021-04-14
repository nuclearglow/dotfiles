#!/usr/bin/env bash
# The script attempts to generate a dependency track report using the available dependency tracker
# * requires environment variable $DEPENDENCY_TRACK_API_KEY (provide this using GitLab CI or Jenkins) else it exits
if [ -z "${DEPENDENCY_TRACK_API_KEY}" ]; then
    echo "Required Environment Variable DEPENDENCY_TRACK_API_KEY is not set! Pipeline step failed."
    exit 1
fi

# * uses the environment variable $DEPENDENCY_TRACK_HOST or falls back to the DF dependency tracker (should be set by GitLab or Jenkins)
if [ -z "${DEPENDENCY_TRACK_HOST}" ]; then
    DEPENDENCY_TRACKER_URL="URL"
else
    DEPENDENCY_TRACKER_URL="${DEPENDENCY_TRACK_HOST}"
fi

# the dependency track report needs a few variables
# TODO: replace with your project name kebab-case
PROJECT_NAME="auto-frontend"
PROJECT_VERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)

echo "Dependency Track for Project: ${PROJECT_NAME} ${PROJECT_VERSION}"
echo "Using Dependency Tracker at:  ${DEPENDENCY_TRACKER_URL}"

# generate the bill of meterials, uses https://github.com/CycloneDX/cyclonedx-node-module
npx cyclonedx-bom -o ../public/frontend/dependency-tracker/bom.xml

# send in the bill of materials
RESPONSE=`curl -X POST "$DEPENDENCY_TRACKER_URL" \
        -H "X-API-Key: $DEPENDENCY_TRACK_API_KEY" \
        -H  "Content-Type: multipart/form-data" \
        -H "accept: application/json" \
        -F "autoCreate=true" \
        -F "projectName="${PROJECT_NAME}"" \
        -F "projectVersion="${PROJECT_VERSION}"" \
        -F "bom=@../public/frontend/dependency-tracker/bom.xml;encoder=base64"`

echo $RESPONSE
