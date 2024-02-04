#!/bin/bash

for f in */*; do echo $f; (cd $f; vitest run); done