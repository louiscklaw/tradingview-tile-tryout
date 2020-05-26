#!/usr/bin/env bash

CHILD_CONCURRENCY=32

set -ex

rm -rf node_modules

yarn install

gulp