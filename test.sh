#!/bin/bash

# shellcheck disable=SC2164
for f in */*; do echo $f; (cd $f; npm i); done
for f in ts/*; do echo $f; (cd $f; tsc); done
for f in */*; do echo $f; (cd $f; npm run test -- --run); done
