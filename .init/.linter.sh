#!/bin/bash
cd /home/kavia/workspace/code-generation/angular-component-library-builder-25861-26136/angular_component_library
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

